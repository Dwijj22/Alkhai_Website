import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChartLine, faStopwatch, faWaveSquare, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

export function Hero() {
  return (
    <section className="hero reveal">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"></span> Operational Intelligence for SMBs</div>

          <h1>Find and remove the bottlenecks bleeding time and money from your operations.</h1>

          <p className="hero-sub">
            Most SMBs lose 20% of their throughput to hidden bottlenecks they can&apos;t see. ALKHAI maps how work actually flows across your business — onboarding, support, fulfillment, billing, approvals —
            using real timestamps from the tools you already run.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#contact">
              <FontAwesomeIcon icon={faArrowRight} /> Request a Bottleneck Scan
            </a>
            <a className="btn" href="#platform">
              <FontAwesomeIcon icon={faChartLine} /> View deliverables
            </a>
            <a className="btn ghost book-cta" href="https://calendly.com/dwijravikumar/alkhai-initial-meeting" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faCalendar} /> Book a 30-minute intro
            </a>
          </div>

          <div className="hero-trust">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span className="pill"><FontAwesomeIcon icon={faStopwatch} /> <b>30–45 day</b> fixed-scope diagnostic</span>
            </div>
            <div className="trust-row">
              <span className="logo-chip">CRM</span>
              <span className="logo-chip">ERP</span>
              <span className="logo-chip">Ticketing / Support</span>
              <span className="logo-chip">Email / Spreadsheets</span>
              <span className="logo-chip">E‑commerce</span>
              <span className="logo-chip">Accounting</span>
              <span className="logo-chip">QuickBooks</span>
              <span className="logo-chip">Shopify</span>
              <span className="logo-chip">Excel/CSVs</span>
              <span className="logo-chip">Salesforce/CRM</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Process intelligence dashboard preview">
          <div className="visual-inner">
            <div className="visual-top">
              <div className="mini-title"><span className="pulse"></span>Snapshot</div>
              <div className="mini-actions">
                <span className="pill"><FontAwesomeIcon icon={faWaveSquare} /> Variance: <b>High</b></span>
                <span className="pill"><FontAwesomeIcon icon={faTriangleExclamation} /> Bottlenecks: <b>3</b></span>
              </div>
            </div>

            <div className="dash-grid">
              <div className="card">
                <h4>Cycle Time (Last 30 Days)</h4>
                <div className="spark" aria-hidden="true">
                  <svg viewBox="0 0 600 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0" stopColor="rgba(91,140,255,0.9)" />
                        <stop offset="1" stopColor="rgba(61,220,151,0.85)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,150 C60,120 90,80 140,95 C190,110 215,160 270,145 C330,125 350,65 410,75 C470,85 500,130 600,90" fill="none" stroke="url(#g1)" strokeWidth="5" />
                    <path d="M0,200 L0,150 C60,120 90,80 140,95 C190,110 215,160 270,145 C330,125 350,65 410,75 C470,85 500,130 600,90 L600,200 Z" fill="rgba(91,140,255,0.10)" />
                    <line x1="0" y1="165" x2="600" y2="165" stroke="rgba(255,255,255,0.10)" strokeDasharray="6 6" />
                    <circle cx="410" cy="75" r="6" fill="rgba(255,176,32,0.95)" />
                    <circle cx="600" cy="90" r="6" fill="rgba(61,220,151,0.95)" />
                  </svg>
                </div>
                <div className="kpis" style={{ marginTop: 12 }}>
                  <div className="kpi"><strong>−21%</strong><span>median cycle time</span></div>
                  <div className="kpi"><strong>+14%</strong><span>throughput</span></div>
                </div>
                <div className="fine" style={{ marginTop: 12, color: 'rgba(199,206,217,0.75)', fontSize: '0.88rem' }}>
                  Note: Illustrative diagnostic outputs based on historical event data. Actual results vary by workflow and data quality.
                </div>
              </div>

              <div className="card">
                <h4>Top Constraints</h4>
                <div className="kpi" style={{ marginBottom: 10 }}>
                  <strong style={{ fontSize: '1.12rem' }}>Approval Queue</strong>
                  <span><b style={{ color: '#fff' }}>4.6 days</b> avg wait • <span style={{ color: 'var(--amber)', fontWeight: 800 }}>High impact</span></span>
                </div>
                <div className="kpi" style={{ marginBottom: 10 }}>
                  <strong style={{ fontSize: '1.12rem' }}>Rework Loop</strong>
                  <span><b style={{ color: '#fff' }}>18%</b> cases • <span style={{ color: 'var(--danger)', fontWeight: 800 }}>Costly</span></span>
                </div>
                <div className="kpi">
                  <strong style={{ fontSize: '1.12rem' }}>Handoff Delay</strong>
                  <span><b style={{ color: '#fff' }}>1.9 days</b> median • <span style={{ color: 'var(--electric)', fontWeight: 800 }}>Fixable</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
