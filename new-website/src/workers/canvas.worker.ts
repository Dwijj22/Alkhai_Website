/* Canvas process-graph animation — runs entirely off main thread */

let ctx: OffscreenCanvasRenderingContext2D | null = null;
let w = 0, h = 0;
const mouse = { x: -9999, y: -9999 };

/* ── Graph Data ── */
const QUALITY = 1.5;

interface GraphNode { x: number; y: number; r: number; label: string; color: string; glow: string; }
interface Edge { from: number; to: number; color: string; dash: boolean; }

let nodes: GraphNode[] = [];
let edges: Edge[] = [];

function initGraph() {
  const cols = [
    'rgba(91,140,255,0.95)',
    'rgba(61,220,151,0.95)',
    'rgba(255,176,32,0.95)',
    'rgba(255,77,109,0.90)',
  ];
  const glows = [
    'rgba(91,140,255,0.25)',
    'rgba(61,220,151,0.25)',
    'rgba(255,176,32,0.25)',
    'rgba(255,77,109,0.25)',
  ];
  const labels = ['Intake', 'Review', 'Approval', 'Queue', 'Process', 'Handoff', 'Fulfill', 'Close'];

  nodes = [];
  const rows = 2;
  const perRow = Math.ceil(labels.length / rows);
  const marginX = w * 0.12;
  const marginY = h * 0.20;
  const spacingX = (w - 2 * marginX) / (perRow - 1);
  const spacingY = (h - 2 * marginY) / (rows - 1);

  for (let i = 0; i < labels.length; i++) {
    const row = Math.floor(i / perRow);
    const col = i % perRow;
    nodes.push({
      x: marginX + col * spacingX + (Math.random() - 0.5) * 30,
      y: marginY + row * spacingY + (Math.random() - 0.5) * 30,
      r: 6 + Math.random() * 4,
      label: labels[i],
      color: cols[i % cols.length],
      glow: glows[i % glows.length],
    });
  }

  edges = [
    { from: 0, to: 1, color: cols[0], dash: false },
    { from: 1, to: 2, color: cols[0], dash: false },
    { from: 2, to: 3, color: cols[2], dash: true },
    { from: 3, to: 4, color: cols[1], dash: false },
    { from: 4, to: 5, color: cols[1], dash: false },
    { from: 5, to: 6, color: cols[2], dash: true },
    { from: 6, to: 7, color: cols[1], dash: false },
    { from: 2, to: 5, color: cols[3], dash: true },
    { from: 3, to: 1, color: cols[3], dash: true },
  ];
}

/* ── Tokens ── */
interface Token { x: number; y: number; fromIdx: number; toIdx: number; t: number; speed: number; color: string; }
let tokens: Token[] = [];

function spawnToken() {
  if (edges.length === 0) return;
  const ei = Math.floor(Math.random() * edges.length);
  const e = edges[ei];
  tokens.push({
    x: nodes[e.from].x, y: nodes[e.from].y,
    fromIdx: e.from, toIdx: e.to,
    t: 0, speed: 0.003 + Math.random() * 0.004,
    color: e.color,
  });
}

function updateTokens() {
  for (let i = tokens.length - 1; i >= 0; i--) {
    const tk = tokens[i];
    tk.t += tk.speed;
    if (tk.t >= 1) { tokens.splice(i, 1); continue; }
    const a = nodes[tk.fromIdx];
    const b = nodes[tk.toIdx];
    tk.x = a.x + (b.x - a.x) * tk.t;
    tk.y = a.y + (b.y - a.y) * tk.t;
  }
}

/* ── Draw ── */
let frameCount = 0;

function frame() {
  if (!ctx) return;
  ctx.clearRect(0, 0, w, h);

  frameCount++;
  if (frameCount % 12 === 0) spawnToken();

  // Edges
  for (const e of edges) {
    const a = nodes[e.from];
    const b = nodes[e.to];
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = e.color.replace(/[\d.]+\)$/, '0.25)');
    ctx.lineWidth = 1.5;
    if (e.dash) ctx.setLineDash([6, 6]); else ctx.setLineDash([]);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Tokens
  updateTokens();
  for (const tk of tokens) {
    ctx.beginPath();
    ctx.arc(tk.x, tk.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = tk.color;
    ctx.fill();
  }

  // Nodes
  for (const n of nodes) {
    // Glow
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
    ctx.fillStyle = n.glow;
    ctx.fill();
    // Core
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = n.color;
    ctx.fill();
    // Label
    ctx.fillStyle = 'rgba(199,206,217,0.6)';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(n.label, n.x, n.y + n.r + 16);
  }

  // Mouse hover spotlight
  if (mouse.x > 0 && mouse.y > 0) {
    const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
    grad.addColorStop(0, 'rgba(91,140,255,0.06)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  requestAnimationFrame(frame);
}

/* ── Worker message handler ── */
self.onmessage = (e: MessageEvent) => {
  const { type } = e.data;

  if (type === 'init') {
    ctx = e.data.canvas.getContext('2d');
    w = e.data.width * QUALITY;
    h = e.data.height * QUALITY;
    if (ctx) {
      (e.data.canvas as OffscreenCanvas).width = w;
      (e.data.canvas as OffscreenCanvas).height = h;
      ctx.scale(QUALITY, QUALITY);
      w = e.data.width;
      h = e.data.height;
    }
    initGraph();
    requestAnimationFrame(frame);
  }

  if (type === 'resize') {
    w = e.data.width;
    h = e.data.height;
    initGraph();
  }

  if (type === 'mousemove') {
    mouse.x = e.data.x;
    mouse.y = e.data.y;
  }
};
