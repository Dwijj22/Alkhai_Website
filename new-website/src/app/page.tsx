import ProcessCanvas from "@/components/ProcessCanvas";
import PainDock from "@/components/PainDock";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ProcessCanvas />
      <div id="bgOverlay" aria-hidden="true"></div>
      <PainDock />

      <div className="blob one" aria-hidden="true"></div>
      <div className="blob two" aria-hidden="true"></div>

      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="ALKHAI Home">
            <Image src="/AlkhaiLogoBlue.jpeg" alt="ALKHAI logo" width={132} height={40} />
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#capabilities">Capabilities</a>
            <a href="#platform">Deliverables</a>
            <a href="#scan">Bottleneck Scan</a>
            <a href="#differentiation">Why ALKHAI</a>
          </nav>

          <div className="nav-cta">
            <a className="btn ghost" href="#scan"><i className="fa-regular fa-circle-play"></i> How it works</a>
            <a className="btn primary" href="#contact"><i className="fa-solid fa-bolt"></i> Request a Scan</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ===== HERO ===== */}
        <section className="hero reveal">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="dot"></span> Operational Intelligence for SMBs</div>
              <h1>Find and remove the bottlenecks bleeding time and money from your operations.</h1>
              <p className="hero-sub">
                Most SMBs lose 20% of their throughput to hidden bottlenecks they can&apos;t see. ALKHAI maps how work actually flows across your business — onboarding, support, fulfillment, billing, approvals — using real timestamps from the tools you already run.
              </p>

              <div className="hero-actions">
                <a className="btn primary" href="#contact"><i className="fa-solid fa-arrow-right"></i> Request a Bottleneck Scan</a>
                <a className="btn" href="#platform"><i className="fa-solid fa-chart-line"></i> View deliverables</a>
                <a className="btn ghost book-cta" href="https://calendly.com/dwijravikumar/alkhai-initial-meeting" target="_blank" rel="noreferrer noopener">
                  <i className="fa-regular fa-calendar"></i> Book a 30-minute intro
                </a>
              </div>

              <div className="hero-trust">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span className="pill"><i className="fa-solid fa-stopwatch"></i> <b>30–45 day</b> fixed-scope diagnostic</span>
                </div>
                <div className="trust-row">
                  {["CRM", "ERP", "Ticketing / Support", "Email / Spreadsheets", "E‑commerce", "Accounting", "QuickBooks", "Shopify", "Excel/CSVs", "Salesforce/CRM"].map(chip => (
                    <span key={chip} className="logo-chip">{chip}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-visual hero-visual-anim" aria-label="Process intelligence dashboard preview">
              <div className="visual-inner">
                <div className="visual-top">
                  <div className="mini-title"><span className="pulse"></span>Snapshot</div>
                  <div className="mini-actions">
                    <span className="pill"><i className="fa-solid fa-wave-square"></i> Variance: <b>High</b></span>
                    <span className="pill"><i className="fa-solid fa-triangle-exclamation"></i> Bottlenecks: <b>3</b></span>
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
                    <div className="kpis" style={{ marginTop: "12px" }}>
                      <div className="kpi"><strong>−21%</strong><span>median cycle time</span></div>
                      <div className="kpi"><strong>+14%</strong><span>throughput</span></div>
                    </div>
                    <div className="fine" style={{ marginTop: "12px", color: "rgba(199,206,217,0.75)", fontSize: "0.88rem" }}>
                      Note: Illustrative diagnostic outputs based on historical event data. Actual results vary by workflow and data quality.
                    </div>
                  </div>

                  <div className="card">
                    <h4>Top Constraints</h4>
                    <div className="kpi" style={{ marginBottom: "10px" }}>
                      <strong style={{ fontSize: "1.12rem" }}>Approval Queue</strong>
                      <span><b style={{ color: "#fff" }}>4.6 days</b> avg wait • <span style={{ color: "var(--amber)", fontWeight: 800 }}>High impact</span></span>
                    </div>
                    <div className="kpi" style={{ marginBottom: "10px" }}>
                      <strong style={{ fontSize: "1.12rem" }}>Rework Loop</strong>
                      <span><b style={{ color: "#fff" }}>18%</b> cases • <span style={{ color: "var(--danger)", fontWeight: 800 }}>Costly</span></span>
                    </div>
                    <div className="kpi">
                      <strong style={{ fontSize: "1.12rem" }}>Handoff Delay</strong>
                      <span><b style={{ color: "#fff" }}>1.9 days</b> median • <span style={{ color: "var(--electric)", fontWeight: 800 }}>Fixable</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CAPABILITIES ===== */}
        <section id="capabilities" className="reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow"><span className="dot"></span> Capabilities</div>
                <h2>Built around constraints.</h2>
              </div>
              <div>
                <p className="fine" style={{ maxWidth: "48ch" }}>
                  We analyze operations as they actually run — from intake to handoffs, approvals, and completion — then isolate the few constraints that kill throughput and create avoidable cost.
                </p>
                <p className="fine" style={{ marginTop: "10px" }}>
                  Ranges shown are typical outcomes observed across operations; actual results depend on process complexity and data availability.
                </p>
              </div>
            </div>

            <div className="grid-3">
              <div className="panel">
                <div className="title"><span className="icon"><i className="fa-solid fa-diagram-project"></i></span><b>Event-based Discovery</b></div>
                <p>Turn event logs into as-is process flows—variants, rework loops, wait states, and handoff paths.</p>
              </div>
              <div className="panel">
                <div className="title"><span className="icon"><i className="fa-solid fa-bullseye"></i></span><b>Constraint Ranking</b></div>
                <p>Rank bottlenecks by throughput impact, time/cost leakage, and customer wait time.</p>
              </div>
              <div className="panel">
                <div className="title"><span className="icon"><i className="fa-solid fa-robot"></i></span><b>Targeted Automation</b></div>
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

        {/* ===== DELIVERABLES ===== */}
        <section id="platform" className="section-soft reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow"><span className="dot"></span> Deliverables</div>
                <h2>Stop the &ldquo;Invisible Leaks&rdquo;</h2>
              </div>
              <div>
                <p className="fine" style={{ marginTop: "6px" }}>These visuals represent the diagnostic outputs we deliver - not a software license or black-box tool.</p>
                <p className="fine" style={{ maxWidth: "52ch" }}>These visuals communicate what your team gets: clarity, ranked constraints, and a single &ldquo;start here&rdquo; path.</p>
              </div>
            </div>

            <div className="grid-2">
              <div className="panel">
                <div className="title"><span className="icon"><i className="fa-solid fa-route"></i></span><b>Process map + variants</b></div>
                <p>See how work actually flows across teams and systems—with variance, rework loops, and wait states highlighted.</p>
                <div className="spark" style={{ height: "160px", marginTop: "12px" }} aria-hidden="true">
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
                <div className="title"><span className="icon"><i className="fa-solid fa-fire-flame-curved"></i></span><b>Constraint heatmap</b></div>
                <p>Rank constraints by business impact, not opinion. Focus teams on the few fixes that actually increase throughput.</p>
                <div style={{ marginTop: "12px", display: "grid", gap: "10px" }}>
                  <div className="kpi"><strong style={{ fontSize: "1.15rem" }}>Cost leakage</strong><span><b style={{ color: "#fff" }}>$</b> quantified per constraint</span></div>
                  <div className="kpi"><strong style={{ fontSize: "1.15rem" }}>Time leakage</strong><span>wait time, rework, handoff delay</span></div>
                  <div className="kpi"><strong style={{ fontSize: "1.15rem" }}>Fix difficulty</strong><span>policy → process → automation</span></div>
                </div>
                <div className="pill" style={{ marginTop: "12px" }}>
                  <i className="fa-solid fa-layer-group"></i> Tool-agnostic: integrates with your stack
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BOTTLENECK SCAN ===== */}
        <section id="scan" className="section-soft reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow"><span className="dot"></span> The Audit</div>
                <h2>A Bottleneck Scan — built for SMB owners and operators who need throughput gains fast, without platform changes.</h2>
              </div>
              <p className="fine" style={{ maxWidth: "54ch" }}>Not a transformation program. A data-driven readout that tells you exactly where to act first and why.</p>
            </div>

            <div className="grid-2">
              <div className="panel">
                <div className="title"><span className="icon"><i className="fa-solid fa-magnifying-glass"></i></span><b>What we analyze</b></div>
                <ul style={{ marginLeft: "18px", display: "grid", gap: "8px" }}>
                  <li>Lead-to-cash and billing handoffs</li>
                  <li>Order-to-fulfillment / delivery flow</li>
                  <li>Customer support and escalation paths</li>
                  <li>Approvals, queues, and backlog aging</li>
                  <li>Rework loops and handoff delays</li>
                </ul>
                <p className="fine" style={{ marginTop: "12px" }}>Input: event logs and operational data already inside your systems.</p>
              </div>
              <div className="panel">
                <div className="title"><span className="icon"><i className="fa-solid fa-file-signature"></i></span><b>What you receive</b></div>
                <ul style={{ marginLeft: "18px", display: "grid", gap: "8px" }}>
                  <li>As-is process maps (what really happens)</li>
                  <li>Top 3 throughput-killing constraints</li>
                  <li>Quantified time &amp; cost leakage</li>
                  <li>Backlog, queue, and wait-time drivers</li>
                  <li>30–60 day execution roadmap</li>
                </ul>
              </div>
            </div>

            <div className="grid-2" style={{ marginTop: "16px" }}>
              <div className="panel">
                <div className="title"><span className="icon"><i className="fa-solid fa-circle-check"></i></span><b>Good fit if</b></div>
                <ul style={{ marginLeft: "18px", display: "grid", gap: "8px" }}>
                  <li>Your processes run across multiple tools (CRM/ERP/ticketing/spreadsheets)</li>
                  <li>Everyone is busy but throughput isn&apos;t rising</li>
                  <li>Work bounces between people/teams and stalls in handoffs</li>
                  <li>You need clarity before hiring, automating, or changing tools</li>
                </ul>
              </div>
              <div className="panel">
                <div className="title"><span className="icon"><i className="fa-solid fa-circle-xmark"></i></span><b>Not a fit if</b></div>
                <ul style={{ marginLeft: "18px", display: "grid", gap: "8px" }}>
                  <li>You want a new platform or full &ldquo;digital transformation&rdquo;</li>
                  <li>You&apos;re looking for generic &ldquo;best practices&rdquo;</li>
                  <li>You want automation without diagnosis</li>
                  <li>You have no usable timestamps/event data anywhere</li>
                </ul>
              </div>
            </div>

            <div className="panel soft" style={{ marginTop: "16px" }}>
              <h3 style={{ marginBottom: "10px" }}>How it works</h3>
              <div className="steps">
                <div className="step">
                  <div className="badge">1</div>
                  <div><b>Connect + ingest</b><p className="fine">We define scope, ingest event data, and map the process reality across your workflow.</p></div>
                </div>
                <div className="step">
                  <div className="badge">2</div>
                  <div><b>Quantify + rank</b><p className="fine">We identify bottlenecks, rework loops, wait states, and missed deadlines—then rank by impact.</p></div>
                </div>
                <div className="step">
                  <div className="badge">3</div>
                  <div><b>Executive readout</b><p className="fine">You leave with a prioritized fix list, quantified time/cost impact, and a clear &ldquo;start-here&rdquo; execution path.</p></div>
                </div>
              </div>
              <div className="trust-note">
                <span className="trust-dot"></span>
                <p>Designed by operators and process analysts who have worked inside real, deadline-driven environments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DIFFERENTIATION ===== */}
        <section id="differentiation" className="section-soft reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow"><span className="dot"></span> Differentiation</div>
                <h2>ALKHAI vs traditional operations consulting programs</h2>
              </div>
              <p className="fine" style={{ maxWidth: "62ch" }}>
                Large initiatives often start with tooling, dashboards, or broad &ldquo;transformations.&rdquo;<br /><br />
                <b>ALKHAI starts with flow:</b> We analyze real work-item event data to pinpoint the specific constraints killing throughput—then deliver a ranked fix plan your team can execute immediately.
              </p>
            </div>

            <table aria-label="Comparison table">
              <thead>
                <tr>
                  <th>Typical large ops program</th>
                  <th>ALKHAI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Platform-first (\"standardize on our framework\")", "Constraint-first (\"what's stalling work?\")"],
                  ["Broad scope, long timelines, many workstreams", "Fixed-scope scan with clear start-here path"],
                  ["Heavy workshops & interviews to map \"as-is\"", "Event-log truth: timestamps, queues, variants, rework"],
                  ["Reports/dashboards that don't change throughput", "Ranked constraints + measurable time/cost model"],
                  ["\"Best practices\" applied everywhere", "Targeted fixes only where they remove the bottleneck"],
                  ["Value is hard to attribute (too many changes)", "ROI tied to specific queues, handoffs, and loop drivers"],
                  ["High disruption / organizational fatigue", "Low-disruption: minimal access, fast diagnosis, precise actions"],
                ].map(([bad, good], i) => (
                  <tr key={i}>
                    <td><span className="x">✕</span> {bad}</td>
                    <td><span className="check">✓</span> {good}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="fine" style={{ marginTop: "14px" }}>
              Note: ALKHAI is tool-agnostic and can work alongside your existing platform and partners. We complement—not replace—your existing stack by finding the few constraints that actually move throughput.
            </p>
            <p className="fine" style={{ marginTop: "10px" }}>
              ALKHAI engagements are led by practitioners with hands-on experience in operations, service delivery, and process analysis.
            </p>
          </div>
        </section>

        {/* ===== PROOF ===== */}
        <section id="proof" className="section-soft reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow"><span className="dot"></span> Proof</div>
                <h2>Why ALKHAI before large transformation programs.</h2>
              </div>
            </div>
            <div className="grid-3">
              <div className="panel"><b>Event-data driven</b><p className="fine">All findings are derived from timestamps, variants, and real execution data - not interviews.</p></div>
              <div className="panel"><b>Security-first engagement</b><p className="fine">Least-privilege access, NDA-ready, no data extraction outside your environment.</p></div>
              <div className="panel"><b>Operationally aligned</b><p className="fine">Outputs map to owners, controls, and targets so fixes can be executed quickly.</p></div>
            </div>
          </div>
        </section>

        {/* ===== WHY DATA-DRIVEN ===== */}
        <section id="founder" className="section-soft reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow"><span className="dot"></span> Why Data-Driven</div>
                <h2>Built to answer the question operators ask every day.</h2>
              </div>
              <p className="fine" style={{ maxWidth: "62ch" }}>
                &ldquo;Where exactly are we losing time — and what should we fix first?&rdquo;
              </p>
            </div>
            <div className="panel">
              <p>
                ALKHAI was built to deliver constraint-first diagnostics using real event data — not frameworks, not assumptions. We focus on pinpointing the few fixes that actually move throughput.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="section-soft reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow"><span className="dot"></span> Contact Us</div>
                <h2>Request a Bottleneck Scan.</h2>
              </div>
              <div>
                <p className="fine" style={{ maxWidth: "60ch" }}>Tell us about the workflow you want to improve and where work is stalling. We&apos;ll respond with a scoped bottleneck scan and a data-focused plan.</p>
                <p className="fine" style={{ maxWidth: "60ch" }}>We do not sell software licenses or long-term transformation programs.</p>
                <p className="fine" style={{ maxWidth: "60ch" }}>No platform changes. Read-only access. NDA available. No long-term engagement required. If we don&apos;t find actionable constraints, you don&apos;t proceed.</p>
              </div>
            </div>

            <div className="cta-box">
              <div>
                <div className="panel soft" style={{ border: "none", background: "transparent", boxShadow: "none", padding: 0 }}>
                  <h3 style={{ marginBottom: "12px" }}>What to include</h3>
                  <div className="steps" style={{ marginTop: 0 }}>
                    <div className="step">
                      <div className="badge"><i className="fa-solid fa-building"></i></div>
                      <div><b>Company + team</b><p className="fine">Size, the systems involved (CRM/ERP/ticketing/spreadsheets), and stakeholders (Ops, Finance, Sales Ops, Support leadership).</p></div>
                    </div>
                    <div className="step">
                      <div className="badge"><i className="fa-solid fa-sitemap"></i></div>
                      <div><b>Process scope</b><p className="fine">Order-to-cash, support, onboarding, fulfillment, procurement, or a specific workflow.</p></div>
                    </div>
                    <div className="step">
                      <div className="badge"><i className="fa-solid fa-bullseye"></i></div>
                      <div><b>Outcome target</b><p className="fine">Cycle time reduction, throughput increase, cost savings, fewer missed deadlines, or faster cash collection.</p></div>
                    </div>
                  </div>
                  <p className="fine" style={{ marginTop: "14px" }}>
                    Prefer email? <a className="link-chip" href="mailto:contact@alkhai.com?subject=Request%20a%20Bottleneck%20Scan">contact@alkhai.com</a>{" "}
                    <a className="link-chip book-cta" href="https://calendly.com/dwijravikumar/alkhai-initial-meeting" target="_blank" rel="noreferrer noopener">
                      <i className="fa-regular fa-calendar"></i> Book a 30-minute intro
                    </a>
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer>
          <div className="container footer-inner">
            <div className="footer-left">
              <a href="#top" aria-label="Back to top">
                <Image src="/AlkhaiLogoBlue.jpeg" alt="ALKHAI logo" width={120} height={36} />
              </a>
              <span>© 2025 ALKHAI — Operational Process Intelligence</span>
            </div>
            <div className="footer-links">
              <a className="link-chip" href="mailto:contact@alkhai.com">contact@alkhai.com</a>
              <a className="link-chip" href="https://www.linkedin.com/company/alkhai/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
              <a className="link-chip" href="#">Privacy</a>
              <a className="link-chip" href="#">Terms</a>
              <span className="link-chip" aria-label="copyright">© 2025 ALKHAI</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
