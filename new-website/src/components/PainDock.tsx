"use client";
import { useEffect, useRef, useState } from "react";

export default function PainDock() {
  const [open, setOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal animations
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries, o) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("in-view");
          o.unobserve(e.target);
        }
      },
      { threshold: 0.18 }
    );
    items.forEach((el) => obs.observe(el));
    return () => { items.forEach((el) => obs.unobserve(el)); obs.disconnect(); };
  }, []);

  return (
    <div id="painDock" ref={dockRef} className={open ? "open" : ""}>
      <div id="painHandle" onClick={() => setOpen(!open)}>
        Process Report
      </div>

      <div id="painHUD" aria-hidden={!open}>
        <div className="hud-title">Process Report, live</div>
        <div className="hud-grid">
          <div className="hud-kpi">
            <div className="kpi-label">Hidden rework</div>
            <div className="kpi-val" id="kpiRework">—</div>
          </div>
          <div className="hud-kpi">
            <div className="kpi-label">Deadline risk</div>
            <div className="kpi-val danger" id="kpiSla">—</div>
          </div>
          <div className="hud-kpi">
            <div className="kpi-label">Looping paths</div>
            <div className="kpi-val warn" id="kpiLoops">—</div>
          </div>
        </div>
        <div className="hud-legend">
          <span className="leg"><i className="hud-dot ok"></i>Healthy flow</span>
          <span className="leg"><i className="hud-dot warn"></i>Rework</span>
          <span className="leg"><i className="hud-dot danger"></i>Deadline breach</span>
          <div className="hud-hint">Hover a node to spotlight the local failure zone.</div>
        </div>
      </div>
    </div>
  );
}
