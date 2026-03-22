import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faBullseye, faRobot } from '@fortawesome/free-solid-svg-icons';

export function Capabilities() {
  return (
    <section id="capabilities" className="reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> Capabilities</div>
            <h2>Built around constraints.</h2>
          </div>
          <div>
            <p className="fine" style={{ maxWidth: '48ch' }}>
              We analyze operations as they actually run — from intake to handoffs, approvals, and completion —
              then isolate the few constraints that kill throughput and create avoidable cost.
            </p>
            <p className="fine" style={{ marginTop: 10 }}>
              Ranges shown are typical outcomes observed across operations; actual results depend on process complexity and data availability.
            </p>
          </div>
        </div>

        <div className="grid-3">
          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faDiagramProject} /></span><b>Event-based Discovery</b></div>
            <p>Turn event logs into as-is process flows—variants, rework loops, wait states, and handoff paths.</p>
          </div>
          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faBullseye} /></span><b>Constraint Ranking</b></div>
            <p>Rank bottlenecks by throughput impact, time/cost leakage, and customer wait time.</p>
          </div>
          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faRobot} /></span><b>Targeted Automation</b></div>
            <p>Apply automation only where it removes the verified constraint — approvals, routing, handoffs, reconciliations — not everywhere.</p>
          </div>
        </div>

        <div className="metrics" aria-label="Typical outcomes">
          <div className="metric"><strong>22–40%</strong><span>work items stuck in loops</span></div>
          <div className="metric"><strong>1.5–4 days</strong><span>lost to approval &amp; wait states</span></div>
          <div className="metric"><strong>15–30%</strong><span>missed deadlines driven by bottlenecks</span></div>
          <div className="metric"><strong>30–45 days</strong><span>to executive bottleneck readout</span></div>
        </div>
      </div>
    </section>
  );
}
