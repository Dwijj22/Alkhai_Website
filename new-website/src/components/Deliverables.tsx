import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faFireFlameCurved, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export function Deliverables() {
  return (
    <section id="platform" className="section-soft reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> Deliverables</div>
            <h2>Stop the &ldquo;Invisible Leaks&rdquo;</h2>
          </div>
          <div>
            <p className="fine" style={{ marginTop: 6 }}>
              These visuals represent the diagnostic outputs we deliver - not a software license or black-box tool.
            </p>
            <p className="fine" style={{ maxWidth: '52ch' }}>
              These visuals communicate what your team gets: clarity, ranked constraints, and a single &ldquo;start here&rdquo; path.
            </p>
          </div>
        </div>

        <div className="grid-2">
          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faRoute} /></span><b>Process map + variants</b></div>
            <p>See how work actually flows across teams and systems—with variance, rework loops, and wait states highlighted.</p>

            <div className="spark" style={{ height: 160, marginTop: 12 }} aria-hidden="true">
              <svg viewBox="0 0 700 220" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g2" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="rgba(91,140,255,0.85)" />
                    <stop offset="1" stopColor="rgba(255,176,32,0.90)" />
                  </linearGradient>
                </defs>
                <circle cx="90" cy="120" r="14" fill="rgba(61,220,151,0.95)" />
                <circle cx="260" cy="90" r="14" fill="rgba(91,140,255,0.95)" />
                <circle cx="260" cy="150" r="14" fill="rgba(91,140,255,0.70)" />
                <circle cx="450" cy="120" r="14" fill="rgba(255,176,32,0.95)" />
                <circle cx="620" cy="120" r="14" fill="rgba(61,220,151,0.95)" />
                <path d="M104,120 C160,120 200,96 246,90" stroke="url(#g2)" strokeWidth="5" fill="none" />
                <path d="M104,120 C160,120 200,144 246,150" stroke="rgba(91,140,255,0.35)" strokeWidth="4" fill="none" strokeDasharray="8 8" />
                <path d="M274,90 C330,88 380,115 436,120" stroke="url(#g2)" strokeWidth="5" fill="none" />
                <path d="M274,150 C330,152 380,125 436,120" stroke="rgba(255,176,32,0.35)" strokeWidth="4" fill="none" strokeDasharray="8 8" />
                <path d="M464,120 C510,120 560,120 606,120" stroke="rgba(61,220,151,0.85)" strokeWidth="5" fill="none" />
                <text x="438" y="72" fill="rgba(255,255,255,0.85)" fontSize="22" fontWeight="700">Bottleneck</text>
                <line x1="450" y1="78" x2="450" y2="106" stroke="rgba(255,176,32,0.85)" strokeWidth="3" />
              </svg>
            </div>
          </div>

          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faFireFlameCurved} /></span><b>Constraint heatmap</b></div>
            <p>Rank constraints by business impact, not opinion. Focus teams on the few fixes that actually increase throughput.</p>

            <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
              <div className="kpi"><strong style={{ fontSize: '1.15rem' }}>Cost leakage</strong><span><b style={{ color: '#fff' }}>$</b> quantified per constraint</span></div>
              <div className="kpi"><strong style={{ fontSize: '1.15rem' }}>Time leakage</strong><span>wait time, rework, handoff delay</span></div>
              <div className="kpi"><strong style={{ fontSize: '1.15rem' }}>Fix difficulty</strong><span>policy → process → automation</span></div>
            </div>

            <div className="pill" style={{ marginTop: 12 }}>
              <FontAwesomeIcon icon={faLayerGroup} /> Tool-agnostic: integrates with your stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
