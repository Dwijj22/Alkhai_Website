import React from 'react';

export const HowItWorks = () => {
  return (
    <section id="scan" className="section-soft">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '64px', textAlign: 'center' }}>
          <div className="eyebrow">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold)', display: 'inline-block', marginRight: '12px' }}></span>
            How It Works
          </div>
          <h2>A Bottleneck Scan</h2>
          <p style={{ maxWidth: '640px', margin: '16px auto 0' }}>
            Built for SMB owners and operators who need throughput gains fast, without platform changes.
            Not a transformation program. A data-driven readout that tells you exactly where to act first and why.
          </p>
        </div>

        <div className="steps-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          
          <div className="panel reveal" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -20, left: 32, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--navy-deep)', display: 'grid', placeItems: 'center', fontWeight: 'bold', fontSize: '1.25rem', boxShadow: '0 4px 12px rgba(200, 169, 110, 0.4)' }}>1</div>
            <h3 style={{ fontSize: '1.25rem', marginTop: '16px', marginBottom: '12px' }}>Connect + ingest</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>We define scope, ingest event data, and map the process reality across your workflow using data from your existing systems.</p>
          </div>

          <div className="panel reveal reveal-delay-2" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -20, left: 32, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--navy-deep)', display: 'grid', placeItems: 'center', fontWeight: 'bold', fontSize: '1.25rem', boxShadow: '0 4px 12px rgba(200, 169, 110, 0.4)' }}>2</div>
            <h3 style={{ fontSize: '1.25rem', marginTop: '16px', marginBottom: '12px' }}>Quantify + rank</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>We identify bottlenecks, rework loops, wait states, and missed deadlines—then rank them by financial and throughput impact.</p>
          </div>

          <div className="panel reveal reveal-delay-3" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -20, left: 32, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--navy-deep)', display: 'grid', placeItems: 'center', fontWeight: 'bold', fontSize: '1.25rem', boxShadow: '0 4px 12px rgba(200, 169, 110, 0.4)' }}>3</div>
            <h3 style={{ fontSize: '1.25rem', marginTop: '16px', marginBottom: '12px' }}>Executive readout</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>You leave with a prioritized fix list, quantified time/cost impact, and a clear “start-here” execution path within 30 days.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
