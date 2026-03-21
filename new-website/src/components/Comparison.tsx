import React from 'react';
import './Comparison.css';

export const Comparison = () => {
  return (
    <section id="differentiation" className="section-soft">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div className="eyebrow">Differentiation</div>
          <h2 style={{ maxWidth: '800px', margin: '0 auto' }}>ALKHAI vs traditional operations consulting</h2>
          <p style={{ maxWidth: '700px', margin: '16px auto 0' }}>
            Large initiatives start with tooling or “transformations.” 
            <strong> ALKHAI starts with flow.</strong> We analyze real event data to pinpoint the constraints killing throughput, delivering a ranked fix plan you can execute immediately.
          </p>
        </div>

        <div className="reveal reveal-delay-2">
          <table className="comparison-table" aria-label="Comparison table">
            <thead>
              <tr>
                <th className="th-traditional">Typical Ops Program</th>
                <th className="th-alkhai">ALKHAI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="x-mark">✕</span> Platform-first (“standardize on our framework”)</td>
                <td><span className="check-mark">✓</span> Constraint-first (“what’s stalling work?”)</td>
              </tr>
              <tr>
                <td><span className="x-mark">✕</span> Broad scope, long timelines, many workstreams</td>
                <td><span className="check-mark">✓</span> Fixed-scope scan with clear start-here path</td>
              </tr>
              <tr>
                <td><span className="x-mark">✕</span> Heavy workshops & interviews to map “as-is”</td>
                <td><span className="check-mark">✓</span> Event-log truth: timestamps, queues, variants, rework</td>
              </tr>
              <tr>
                <td><span className="x-mark">✕</span> Reports/dashboards that don’t change throughput</td>
                <td><span className="check-mark">✓</span> Ranked constraints + measurable time/cost model</td>
              </tr>
              <tr>
                <td><span className="x-mark">✕</span> “Best practices” applied everywhere</td>
                <td><span className="check-mark">✓</span> Targeted fixes only where they remove the bottleneck</td>
              </tr>
              <tr>
                <td><span className="x-mark">✕</span> Value is hard to attribute</td>
                <td><span className="check-mark">✓</span> ROI tied to specific queues, handoffs, and loop drivers</td>
              </tr>
              <tr>
                <td><span className="x-mark">✕</span> High disruption / organizational fatigue</td>
                <td><span className="check-mark">✓</span> Low-disruption: minimal access, precise actions</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
