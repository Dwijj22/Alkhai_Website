export function Comparison() {
  return (
    <section id="differentiation" className="section-soft reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> Differentiation</div>
            <h2>ALKHAI vs traditional operations consulting programs</h2>
          </div>
          <p className="fine" style={{ maxWidth: '62ch' }}>
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
            <tr>
              <td><span className="x">✕</span> Platform-first (&ldquo;standardize on our framework&rdquo;)</td>
              <td><span className="check">✓</span> Constraint-first (&ldquo;what&apos;s stalling work?&rdquo;)</td>
            </tr>
            <tr>
              <td><span className="x">✕</span> Broad scope, long timelines, many workstreams</td>
              <td><span className="check">✓</span> Fixed-scope scan with clear start-here path</td>
            </tr>
            <tr>
              <td><span className="x">✕</span> Heavy workshops &amp; interviews to map &ldquo;as-is&rdquo;</td>
              <td><span className="check">✓</span> Event-log truth: timestamps, queues, variants, rework</td>
            </tr>
            <tr>
              <td><span className="x">✕</span> Reports/dashboards that don&apos;t change throughput</td>
              <td><span className="check">✓</span> Ranked constraints + measurable time/cost model</td>
            </tr>
            <tr>
              <td><span className="x">✕</span> &ldquo;Best practices&rdquo; applied everywhere</td>
              <td><span className="check">✓</span> Targeted fixes only where they remove the bottleneck</td>
            </tr>
            <tr>
              <td><span className="x">✕</span> Value is hard to attribute (too many changes)</td>
              <td><span className="check">✓</span> ROI tied to specific queues, handoffs, and loop drivers</td>
            </tr>
            <tr>
              <td><span className="x">✕</span> High disruption / organizational fatigue</td>
              <td><span className="check">✓</span> Low-disruption: minimal access, fast diagnosis, precise actions</td>
            </tr>
          </tbody>
        </table>

        <p className="fine" style={{ marginTop: 14 }}>
          Note: ALKHAI is tool-agnostic and can work alongside your existing platform and partners. We complement—not replace—your existing stack by finding the few constraints that actually move throughput.
        </p>
        <p className="fine" style={{ marginTop: 10 }}>
          ALKHAI engagements are led by practitioners with hands-on experience in operations, service delivery, and process analysis.
        </p>
      </div>
    </section>
  );
}
