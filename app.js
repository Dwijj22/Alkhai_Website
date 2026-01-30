(() => {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Reveal animations ----
  (function reveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    const obs = new IntersectionObserver((entries, o) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('in-view');
        o.unobserve(e.target);
      }
    }, { threshold: 0.18 });

    items.forEach(el => obs.observe(el));
  })();

  // ---- Contact form ----
  (function contactForm() {
    const form = document.querySelector('#contact-form');
    const success = document.querySelector('#form-success');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(() => {
        form.reset();
        if (success) success.classList.add('show');
      }).catch(() => {
        // silently fail (avoid blocking UI)
      });
    });
  })();

  // ---- Canvas: Process Pain Map ----
  (function processPainMap() {
    const canvas = document.getElementById('bg');
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let w = 0, h = 0, dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize() {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', resize, { passive: true });
    resize();

    // HUD elements (optional)
    const kpiRework = document.getElementById('kpiRework');
    const kpiSla = document.getElementById('kpiSla');
    const kpiLoops = document.getElementById('kpiLoops');

    // Graph model
    const STAGES = [
      { name: 'Intake', x: 0.10 },
      { name: 'Triage', x: 0.28 },
      { name: 'Work', x: 0.50 },
      { name: 'Review', x: 0.70 },
      { name: 'Resolve', x: 0.88 },
    ];

    const NODE_COUNT = 56;
    const nodes = [];
    const edges = [];
    const tokens = [];

    function rnd(a, b) { return a + Math.random() * (b - a); }
    function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
    function dist(ax, ay, bx, by) { const dx = ax - bx, dy = ay - by; return Math.hypot(dx, dy); }

    // Create nodes distributed across stages (like swimlanes)
    for (let i = 0; i < NODE_COUNT; i++) {
      const stage = Math.floor(rnd(0, STAGES.length));
      const x = w * STAGES[stage].x + rnd(-40, 40);
      const y = rnd(h * 0.12, h * 0.92);
      nodes.push({
        id: i,
        stage,
        x, y,
        r: rnd(3.0, 5.0),
        heat: 0,               // visual emphasis
        breachPulse: 0,        // flashes on SLA breaches
        label: (stage === 0 ? 'Ticket' : stage === 2 ? 'Task' : stage === 3 ? 'Approval' : stage === 4 ? 'Closure' : 'Step') + ' ' + (i + 1)
      });
    }

    // Helper to pick a node in a stage
    function pickNode(stage, avoidId = -1) {
      for (let k = 0; k < 20; k++) {
        const n = nodes[Math.floor(Math.random() * nodes.length)];
        if (n.stage === stage && n.id !== avoidId) return n;
      }
      // fallback any
      let n = nodes[Math.floor(Math.random() * nodes.length)];
      if (n.id === avoidId) n = nodes[(n.id + 1) % nodes.length];
      return n;
    }

    // Build edges: mostly forward, some rework/back edges, few breach edges
    // Guarantee loops (pain): add deliberate cycles.
    const EDGE_COUNT = 78;

    for (let i = 0; i < EDGE_COUNT; i++) {
      const fromStage = Math.floor(rnd(0, STAGES.length - 1));
      const toStage = Math.random() < 0.78 ? fromStage + 1 : (Math.random() < 0.65 ? fromStage : clamp(fromStage - 1, 0, STAGES.length - 1));

      const a = pickNode(fromStage);
      const b = pickNode(toStage, a.id);

      const kind = (toStage <= fromStage) ? 'rework' : (Math.random() < 0.14 ? 'breach' : 'ok');
      edges.push({
        a: a.id,
        b: b.id,
        kind,
        w: kind === 'breach' ? 2.2 : (kind === 'rework' ? 1.8 : 1.2),
        phase: Math.random() * Math.PI * 2
      });
    }

    // Add explicit hidden loops across multiple steps (rework cycle)
    function addCycle(s1, s2, s3) {
      const n1 = pickNode(s1), n2 = pickNode(s2), n3 = pickNode(s3);
      edges.push({ a: n1.id, b: n2.id, kind: 'ok', w: 1.2, phase: Math.random()*6.28 });
      edges.push({ a: n2.id, b: n3.id, kind: 'rework', w: 1.9, phase: Math.random()*6.28 });
      edges.push({ a: n3.id, b: n1.id, kind: 'breach', w: 2.4, phase: Math.random()*6.28 });
    }
    addCycle(1, 3, 2);
    addCycle(2, 4, 3);

    // Tokens (moving flow indicators)
    const TOKEN_COUNT = 90;
    for (let i = 0; i < TOKEN_COUNT; i++) {
      const e = edges[Math.floor(Math.random() * edges.length)];
      tokens.push({
        edgeIndex: edges.indexOf(e),
        t: Math.random(),
        speed: rnd(0.06, 0.16) * (e.kind === 'breach' ? 1.35 : 1.0) * (e.kind === 'rework' ? 1.15 : 1.0),
        jitter: rnd(0, 1)
      });
    }

    // Hover detection
    const mouse = { x: -9999, y: -9999, down: false };
    window.addEventListener('mousemove', (ev) => {
      mouse.x = ev.clientX;
      mouse.y = ev.clientY;
    }, { passive: true });

    // Graph neighborhood for hover spotlight
    function neighborhood(nodeId) {
      const set = new Set([nodeId]);
      for (const e of edges) {
        if (e.a === nodeId) set.add(e.b);
        if (e.b === nodeId) set.add(e.a);
      }
      return set;
    }

    // KPI update
    const totalEdges = edges.length;
    const reworkEdges = edges.filter(e => e.kind === 'rework').length;
    const breachEdges = edges.filter(e => e.kind === 'breach').length;
    const loopEdges = edges.filter(e => nodes[e.b].stage <= nodes[e.a].stage).length;

    function setKpis() {
      if (kpiRework) kpiRework.textContent = `${Math.round((reworkEdges / totalEdges) * 100)}%`;
      if (kpiSla) kpiSla.textContent = `${breachEdges} hot paths`;
      if (kpiLoops) kpiLoops.textContent = `${loopEdges} loops`;
    }
    setKpis();

    // Rendering helpers
    function drawGlowCircle(x, y, r, color, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    }

    function edgePoint(a, b, t) {
      // Quadratic-ish curve with a mild offset for "process map" feel
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const bend = 0.18;
      const ox = (b.y - a.y) * bend;
      const oy = (a.x - b.x) * bend;

      // Quadratic Bezier: a -> (m+o) -> b
      const cx = mx + ox;
      const cy = my + oy;

      const u = 1 - t;
      const x = u*u*a.x + 2*u*t*cx + t*t*b.x;
      const y = u*u*a.y + 2*u*t*cy + t*t*b.y;
      return { x, y, cx, cy };
    }

    function drawEdge(a, b, kind, width, emphasized) {
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const bend = 0.18;
      const ox = (b.y - a.y) * bend;
      const oy = (a.x - b.x) * bend;
      const cx = mx + ox;
      const cy = my + oy;

      let stroke = 'rgba(120,180,255,0.10)';
      if (kind === 'rework') stroke = 'rgba(255,205,120,0.16)';
      if (kind === 'breach') stroke = 'rgba(255,120,120,0.20)';

      if (emphasized) {
        stroke = kind === 'breach'
          ? 'rgba(255,140,140,0.55)'
          : kind === 'rework'
            ? 'rgba(255,220,150,0.48)'
            : 'rgba(160,210,255,0.45)';
      }

      ctx.strokeStyle = stroke;
      ctx.lineWidth = emphasized ? width * 1.7 : width;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.quadraticCurveTo(cx, cy, b.x, b.y);
      ctx.stroke();
    }

    // Main loop
    let last = performance.now();
    function frame(now) {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;

      // Reduced motion: draw a single frame occasionally
      if (prefersReduced) {
        ctx.clearRect(0, 0, w, h);
        // draw a static snapshot
        for (const e of edges) drawEdge(nodes[e.a], nodes[e.b], e.kind, e.w, false);
        for (const n of nodes) drawGlowCircle(n.x, n.y, n.r, 'rgba(170,210,255,0.65)', 1);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Find hovered node
      let hovered = null;
      for (const n of nodes) {
        if (dist(mouse.x, mouse.y, n.x, n.y) < 12) { hovered = n; break; }
      }
      const hood = hovered ? neighborhood(hovered.id) : null;

      // Slow drift (subtle living map)
      for (const n of nodes) {
        n.x += Math.sin(now * 0.0005 + n.id) * 0.02;
        n.y += Math.cos(now * 0.0004 + n.id * 0.9) * 0.02;
        n.x = clamp(n.x, 40, w - 40);
        n.y = clamp(n.y, 40, h - 40);
        n.heat *= 0.92;
        n.breachPulse *= 0.86;
      }

      // Edges first (structure)
      for (const e of edges) {
        const a = nodes[e.a], b = nodes[e.b];
        const emph = hood ? (hood.has(a.id) && hood.has(b.id)) : false;
        drawEdge(a, b, e.kind, e.w, emph);
      }

      // Tokens (the pain you can see)
      for (const tkn of tokens) {
        const e = edges[tkn.edgeIndex];
        const a = nodes[e.a], b = nodes[e.b];

        tkn.t += tkn.speed * dt;
        if (tkn.t > 1) tkn.t -= 1;

        const p = edgePoint(a, b, tkn.t);
        const emph = hood ? (hood.has(a.id) && hood.has(b.id)) : false;

        // Color by kind
        const fill = e.kind === 'breach'
          ? 'rgba(255,120,120,0.95)'
          : e.kind === 'rework'
            ? 'rgba(255,210,140,0.92)'
            : 'rgba(140,200,255,0.85)';

        const r = e.kind === 'breach' ? 3.6 : (e.kind === 'rework' ? 3.1 : 2.7);
        ctx.beginPath();
        ctx.arc(p.x, p.y, emph ? r * 1.25 : r, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();

        // Occasionally spike nodes on breach edges (SLA pain flash)
        if (e.kind === 'breach' && Math.random() < 0.015) {
          b.breachPulse = 1.0;
          b.heat = 1.0;
        }
        if (e.kind === 'rework' && Math.random() < 0.010) {
          a.heat = 0.75;
        }
      }

      // Nodes (spots that matter)
      for (const n of nodes) {
        const emph = hood ? hood.has(n.id) : false;

        // base dot
        const base = 'rgba(170,215,255,0.55)';
        drawGlowCircle(n.x, n.y, emph ? n.r + 1.8 : n.r, base, 1);

        // rework heat (amber haze)
        if (n.heat > 0.02) {
          drawGlowCircle(n.x, n.y, 14 + n.heat * 18, 'rgba(255,210,140,0.10)', n.heat * 0.9);
        }

        // breach pulse (red alarm ring)
        if (n.breachPulse > 0.02) {
          const ring = 10 + (1 - n.breachPulse) * 26;
          ctx.save();
          ctx.globalAlpha = n.breachPulse * 0.8;
          ctx.strokeStyle = 'rgba(255,120,120,0.55)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(n.x, n.y, ring, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }

      // Hover label + spotlight
      if (hovered) {
        // Spotlight circle
        ctx.save();
        ctx.globalAlpha = 0.12;
        ctx.beginPath();
        ctx.arc(hovered.x, hovered.y, 120, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(160,210,255,0.18)';
        ctx.fill();
        ctx.restore();

        // Label
        const stageName = STAGES[hovered.stage]?.name || 'Stage';
        const text = `${stageName} • ${hovered.label}`;
        ctx.save();
        ctx.font = '12px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial';
        ctx.fillStyle = 'rgba(240,248,255,0.92)';
        ctx.textBaseline = 'middle';

        function roundedRect(x, y, w2, h2, r2){
          const r = Math.min(r2, w2/2, h2/2);
          ctx.beginPath();
          ctx.moveTo(x+r, y);
          ctx.arcTo(x+w2, y, x+w2, y+h2, r);
          ctx.arcTo(x+w2, y+h2, x, y+h2, r);
          ctx.arcTo(x, y+h2, x, y, r);
          ctx.arcTo(x, y, x+w2, y, r);
          ctx.closePath();
        }


        const pad = 8;
        const tw = ctx.measureText(text).width;
        const bx = clamp(hovered.x + 14, 14, w - tw - 14);
        const by = clamp(hovered.y - 18, 18, h - 18);

        ctx.globalAlpha = 0.85;
        ctx.fillStyle = 'rgba(10,14,28,0.72)';
        ctx.strokeStyle = 'rgba(255,255,255,0.10)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        roundedRect(bx - pad, by - 14, tw + pad*2, 28, 10);
        ctx.fill();
        ctx.stroke();

        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(240,248,255,0.92)';
        ctx.fillText(text, bx, by);
        ctx.restore();
      }

              (function painDock() {
  const dock = document.getElementById('painDock');
  const handle = document.getElementById('painHandle');

  if (!dock || !handle) return;

  let locked = false;

  handle.addEventListener('click', () => {
    locked = !locked;
    dock.classList.toggle('open', locked);
  });

  dock.addEventListener('mouseenter', () => {
    if (!locked) dock.classList.add('open');
  });

  dock.addEventListener('mouseleave', () => {
    if (!locked) dock.classList.remove('open');
  });
})();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  })();
})();
