import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFileSignature, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function BottleneckScan() {
  return (
    <section id="scan" className="section-soft reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> The Audit</div>
            <h2>A Bottleneck Scan — built for SMB owners and operators who need throughput gains fast, without platform changes.</h2>
          </div>
          <p className="fine" style={{ maxWidth: '54ch' }}>
            Not a transformation program. A data-driven readout that tells you exactly where to act first and why.
          </p>
        </div>

        <div className="grid-2">
          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span><b>What we analyze</b></div>
            <ul style={{ marginLeft: 18, display: 'grid', gap: 8 }}>
              <li>Lead-to-cash and billing handoffs</li>
              <li>Order-to-fulfillment / delivery flow</li>
              <li>Customer support and escalation paths</li>
              <li>Approvals, queues, and backlog aging</li>
              <li>Rework loops and handoff delays</li>
            </ul>
            <p className="fine" style={{ marginTop: 12 }}>
              Input: event logs and operational data already inside your systems.
            </p>
          </div>
          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faFileSignature} /></span><b>What you receive</b></div>
            <ul style={{ marginLeft: 18, display: 'grid', gap: 8 }}>
              <li>As-is process maps (what really happens)</li>
              <li>Top 3 throughput-killing constraints</li>
              <li>Quantified time &amp; cost leakage</li>
              <li>Backlog, queue, and wait-time drivers</li>
              <li>30–60 day execution roadmap</li>
            </ul>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faCircleCheck} /></span><b>Good fit if</b></div>
            <ul style={{ marginLeft: 18, display: 'grid', gap: 8 }}>
              <li>Your processes run across multiple tools (CRM/ERP/ticketing/spreadsheets)</li>
              <li>Everyone is busy but throughput isn&apos;t rising</li>
              <li>Work bounces between people/teams and stalls in handoffs</li>
              <li>You need clarity before hiring, automating, or changing tools</li>
            </ul>
          </div>
          <div className="panel">
            <div className="title"><span className="icon"><FontAwesomeIcon icon={faCircleXmark} /></span><b>Not a fit if</b></div>
            <ul style={{ marginLeft: 18, display: 'grid', gap: 8 }}>
              <li>You want a new platform or full &ldquo;digital transformation&rdquo;</li>
              <li>You&apos;re looking for generic &ldquo;best practices&rdquo;</li>
              <li>You want automation without diagnosis</li>
              <li>You have no usable timestamps/event data anywhere</li>
            </ul>
          </div>
        </div>

        <div className="panel soft" style={{ marginTop: 16 }}>
          <h3 style={{ marginBottom: 10 }}>How it works</h3>
          <div className="steps">
            <div className="step">
              <div className="badge">1</div>
              <div>
                <b>Connect + ingest</b>
                <p className="fine">We define scope, ingest event data, and map the process reality across your workflow.</p>
              </div>
            </div>
            <div className="step">
              <div className="badge">2</div>
              <div>
                <b>Quantify + rank</b>
                <p className="fine">We identify bottlenecks, rework loops, wait states, and missed deadlines—then rank by impact.</p>
              </div>
            </div>
            <div className="step">
              <div className="badge">3</div>
              <div>
                <b>Executive readout</b>
                <p className="fine">You leave with a prioritized fix list, quantified time/cost impact, and a clear &ldquo;start-here&rdquo; execution path.</p>
              </div>
            </div>
          </div>
          <div className="trust-note">
            <span className="trust-dot"></span>
            <p>
              Designed by operators and process analysts who have worked inside real, deadline-driven environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
