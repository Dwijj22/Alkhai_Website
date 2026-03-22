"use client";
import { useEffect, useRef } from "react";

export default function ProcessCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0;
    const QUALITY = 0.72;
    let isScrolling = false;
    let scrollTimer: ReturnType<typeof setTimeout>;
    let animId: number;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      const scale = QUALITY;
      canvas!.width = Math.floor(w * scale);
      canvas!.height = Math.floor(h * scale);
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(scale, 0, 0, scale, 0, 0);
    }

    window.addEventListener("resize", resize, { passive: true });
    resize();

    const onScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => { isScrolling = false; }, 140);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    function rnd(a: number, b: number) { return a + Math.random() * (b - a); }
    function clamp(v: number, a: number, b: number) { return Math.max(a, Math.min(b, v)); }
    function dist(ax: number, ay: number, bx: number, by: number) { return Math.hypot(ax - bx, ay - by); }

    const STAGES = [
      { name: "Intake", x: 0.10 },
      { name: "Triage", x: 0.28 },
      { name: "Work", x: 0.50 },
      { name: "Review", x: 0.70 },
      { name: "Resolve", x: 0.88 },
    ];

    const NODE_COUNT = 32;
    const nodes: Array<{ id: number; stage: number; x: number; y: number; r: number; heat: number; breachPulse: number; label: string }> = [];
    const edges: Array<{ a: number; b: number; kind: string; w: number; phase: number }> = [];
    const tokens: Array<{ edgeIndex: number; t: number; speed: number }> = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const stage = Math.floor(rnd(0, STAGES.length));
      nodes.push({
        id: i, stage,
        x: w * STAGES[stage].x + rnd(-40, 40),
        y: rnd(h * 0.12, h * 0.92),
        r: rnd(3.0, 5.0), heat: 0, breachPulse: 0,
        label: (stage === 0 ? "Order" : stage === 2 ? "Task" : stage === 3 ? "Approval" : stage === 4 ? "Closure" : "Step") + " " + (i + 1),
      });
    }

    function pickNode(stage: number, avoidId = -1) {
      for (let k = 0; k < 20; k++) {
        const n = nodes[Math.floor(Math.random() * nodes.length)];
        if (n.stage === stage && n.id !== avoidId) return n;
      }
      let n = nodes[Math.floor(Math.random() * nodes.length)];
      if (n.id === avoidId) n = nodes[(n.id + 1) % nodes.length];
      return n;
    }

    const EDGE_COUNT = 78;
    for (let i = 0; i < EDGE_COUNT; i++) {
      const fromStage = Math.floor(rnd(0, STAGES.length - 1));
      const toStage = Math.random() < 0.78 ? fromStage + 1 : (Math.random() < 0.65 ? fromStage : clamp(fromStage - 1, 0, STAGES.length - 1));
      const a = pickNode(fromStage);
      const b = pickNode(toStage, a.id);
      const kind = toStage <= fromStage ? "rework" : Math.random() < 0.14 ? "breach" : "ok";
      edges.push({ a: a.id, b: b.id, kind, w: kind === "breach" ? 2.2 : kind === "rework" ? 1.8 : 1.2, phase: Math.random() * Math.PI * 2 });
    }

    function addCycle(s1: number, s2: number, s3: number) {
      const n1 = pickNode(s1), n2 = pickNode(s2), n3 = pickNode(s3);
      edges.push({ a: n1.id, b: n2.id, kind: "ok", w: 1.2, phase: Math.random() * 6.28 });
      edges.push({ a: n2.id, b: n3.id, kind: "rework", w: 1.9, phase: Math.random() * 6.28 });
      edges.push({ a: n3.id, b: n1.id, kind: "breach", w: 2.4, phase: Math.random() * 6.28 });
    }
    addCycle(1, 3, 2);
    addCycle(2, 4, 3);

    const TOKEN_COUNT = 35;
    for (let i = 0; i < TOKEN_COUNT; i++) {
      const e = edges[Math.floor(Math.random() * edges.length)];
      tokens.push({ edgeIndex: edges.indexOf(e), t: Math.random(), speed: rnd(0.06, 0.16) * (e.kind === "breach" ? 1.35 : 1.0) * (e.kind === "rework" ? 1.15 : 1.0) });
    }

    const mouse = { x: -9999, y: -9999 };
    const onMouseMove = (ev: MouseEvent) => { mouse.x = ev.clientX; mouse.y = ev.clientY; };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    function neighborhood(nodeId: number) {
      const set = new Set([nodeId]);
      for (const e of edges) { if (e.a === nodeId) set.add(e.b); if (e.b === nodeId) set.add(e.a); }
      return set;
    }

    // Update HUD KPIs
    const totalEdges = edges.length;
    const reworkEdges = edges.filter(e => e.kind === "rework").length;
    const breachEdges = edges.filter(e => e.kind === "breach").length;
    const loopEdges = edges.filter(e => nodes[e.b].stage <= nodes[e.a].stage).length;

    const kpiRework = document.getElementById("kpiRework");
    const kpiSla = document.getElementById("kpiSla");
    const kpiLoops = document.getElementById("kpiLoops");
    if (kpiRework) kpiRework.textContent = `${Math.round((reworkEdges / totalEdges) * 100)}%`;
    if (kpiSla) kpiSla.textContent = `${breachEdges} hot paths`;
    if (kpiLoops) kpiLoops.textContent = `${loopEdges} loops`;

    function drawGlowCircle(x: number, y: number, r: number, color: string, alpha: number) {
      ctx!.save(); ctx!.globalAlpha = alpha; ctx!.beginPath(); ctx!.arc(x, y, r, 0, Math.PI * 2); ctx!.fillStyle = color; ctx!.fill(); ctx!.restore();
    }

    function edgePoint(a: typeof nodes[0], b: typeof nodes[0], t: number) {
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const ox = (b.y - a.y) * 0.18, oy = (a.x - b.x) * 0.18;
      const cx = mx + ox, cy = my + oy;
      const u = 1 - t;
      return { x: u * u * a.x + 2 * u * t * cx + t * t * b.x, y: u * u * a.y + 2 * u * t * cy + t * t * b.y, cx, cy };
    }

    function drawEdge(a: typeof nodes[0], b: typeof nodes[0], kind: string, width: number, emphasized: boolean) {
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const ox = (b.y - a.y) * 0.18, oy = (a.x - b.x) * 0.18;
      let stroke = "rgba(120,180,255,0.10)";
      if (kind === "rework") stroke = "rgba(255,205,120,0.16)";
      if (kind === "breach") stroke = "rgba(255,120,120,0.20)";
      if (emphasized) {
        stroke = kind === "breach" ? "rgba(255,140,140,0.55)" : kind === "rework" ? "rgba(255,220,150,0.48)" : "rgba(160,210,255,0.45)";
      }
      ctx!.strokeStyle = stroke;
      ctx!.lineWidth = emphasized ? width * 1.7 : width;
      ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.quadraticCurveTo(mx + ox, my + oy, b.x, b.y); ctx!.stroke();
    }

    let last = performance.now();
    function frame(now: DOMHighResTimeStamp) {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      if (isScrolling) { animId = requestAnimationFrame(frame); return; }
      if (prefersReduced) {
        ctx!.clearRect(0, 0, w, h);
        for (const e of edges) drawEdge(nodes[e.a], nodes[e.b], e.kind, e.w, false);
        for (const n of nodes) drawGlowCircle(n.x, n.y, n.r, "rgba(170,210,255,0.65)", 1);
        return;
      }

      ctx!.clearRect(0, 0, w, h);
      let hovered: typeof nodes[0] | null = null;
      for (const n of nodes) { if (dist(mouse.x, mouse.y, n.x, n.y) < 12) { hovered = n; break; } }
      const hood = hovered ? neighborhood(hovered.id) : null;

      for (const n of nodes) {
        n.x += Math.sin(now * 0.0005 + n.id) * 0.02;
        n.y += Math.cos(now * 0.0004 + n.id * 0.9) * 0.02;
        n.x = clamp(n.x, 40, w - 40); n.y = clamp(n.y, 40, h - 40);
        n.heat *= 0.92; n.breachPulse *= 0.86;
      }

      for (const e of edges) { drawEdge(nodes[e.a], nodes[e.b], e.kind, e.w, hood ? hood.has(nodes[e.a].id) && hood.has(nodes[e.b].id) : false); }

      for (const tkn of tokens) {
        const e = edges[tkn.edgeIndex];
        const a = nodes[e.a], b = nodes[e.b];
        tkn.t += tkn.speed * dt; if (tkn.t > 1) tkn.t -= 1;
        const p = edgePoint(a, b, tkn.t);
        const fill = e.kind === "breach" ? "rgba(255,120,120,0.95)" : e.kind === "rework" ? "rgba(255,210,140,0.92)" : "rgba(140,200,255,0.85)";
        const r = e.kind === "breach" ? 3.6 : e.kind === "rework" ? 3.1 : 2.7;
        const emph = hood ? hood.has(a.id) && hood.has(b.id) : false;
        ctx!.beginPath(); ctx!.arc(p.x, p.y, emph ? r * 1.25 : r, 0, Math.PI * 2); ctx!.fillStyle = fill; ctx!.fill();
        if (e.kind === "breach" && Math.random() < 0.015) { b.breachPulse = 1; b.heat = 1; }
        if (e.kind === "rework" && Math.random() < 0.01) { a.heat = 0.75; }
      }

      for (const n of nodes) {
        const emph = hood ? hood.has(n.id) : false;
        drawGlowCircle(n.x, n.y, emph ? n.r + 1.8 : n.r, "rgba(170,215,255,0.55)", 1);
        if (n.heat > 0.02) drawGlowCircle(n.x, n.y, 14 + n.heat * 18, "rgba(255,210,140,0.10)", n.heat * 0.9);
        if (n.breachPulse > 0.02) {
          const ring = 10 + (1 - n.breachPulse) * 26;
          ctx!.save(); ctx!.globalAlpha = n.breachPulse * 0.8; ctx!.strokeStyle = "rgba(255,120,120,0.55)"; ctx!.lineWidth = 2;
          ctx!.beginPath(); ctx!.arc(n.x, n.y, ring, 0, Math.PI * 2); ctx!.stroke(); ctx!.restore();
        }
      }

      if (hovered) {
        ctx!.save(); ctx!.globalAlpha = 0.12; ctx!.beginPath(); ctx!.arc(hovered.x, hovered.y, 120, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(160,210,255,0.18)"; ctx!.fill(); ctx!.restore();
        const text = `${STAGES[hovered.stage]?.name || "Stage"} • ${hovered.label}`;
        ctx!.save(); ctx!.font = "12px system-ui"; ctx!.fillStyle = "rgba(240,248,255,0.92)"; ctx!.textBaseline = "middle";
        const tw = ctx!.measureText(text).width;
        const bx = clamp(hovered.x + 14, 14, w - tw - 14), by = clamp(hovered.y - 18, 18, h - 18);
        ctx!.globalAlpha = 0.85; ctx!.fillStyle = "rgba(10,14,28,0.72)";
        ctx!.beginPath();
        const pad = 8;
        ctx!.roundRect(bx - pad, by - 14, tw + pad * 2, 28, 10);
        ctx!.fill(); ctx!.strokeStyle = "rgba(255,255,255,0.10)"; ctx!.lineWidth = 1; ctx!.stroke();
        ctx!.globalAlpha = 1; ctx!.fillStyle = "rgba(240,248,255,0.92)"; ctx!.fillText(text, bx, by);
        ctx!.restore();
      }
      animId = requestAnimationFrame(frame);
    }
    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg" aria-hidden="true" />;
}
