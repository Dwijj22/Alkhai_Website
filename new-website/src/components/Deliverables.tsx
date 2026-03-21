import React from 'react';

export const Deliverables = () => {
  return (
    <section id="platform" className="section-soft">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '64px' }}>
          <div className="eyebrow">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold)', display: 'inline-block', marginRight: '12px' }}></span>
            Deliverables
          </div>
          <h2>Stop the "Invisible Leaks"</h2>
          <p style={{ maxWidth: '640px', marginTop: '16px' }}>
            These visuals communicate what your team gets: clarity, ranked constraints, and a single "start here" path.
            They represent the diagnostic outputs we deliver - not a software license or black-box tool.
          </p>
        </div>

        <div className="panel reveal" style={{ overflow: 'hidden', padding: 0 }}>
          <div className="grid-2" style={{ gap: 0 }}>
            
            <div style={{ padding: '48px', borderRight: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 169, 110, 0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
                <h3 style={{ fontSize: '1.75rem', margin: 0 }}>Constraint heatmap</h3>
              </div>
              <p style={{ fontSize: '1.05rem', marginBottom: '32px' }}>
                Rank constraints by business impact, not opinion. Focus teams on the few fixes that actually increase throughput.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                  <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-primary)' }}>Cost leakage</strong>
                  <span style={{ color: 'var(--text-secondary)' }}><b style={{ color: 'var(--gold)' }}>$</b> quantified per constraint</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                  <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-primary)' }}>Time leakage</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>wait time, rework, handoff delay</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                  <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-primary)' }}>Fix difficulty</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>policy → process → automation</span>
                </div>
              </div>

              <div style={{ marginTop: '32px', display: 'inline-block', padding: '8px 16px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', fontSize: '0.875rem' }}>
                Tool-agnostic: integrates with your stack
              </div>
            </div>

            {/* Visual Right Side */}
            <div style={{ padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.1)' }}>
               {/* Apple-style premium visual representation of a heatmap */}
               <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  <div style={{ background: 'var(--panel-bg)', border: '1px solid var(--border-strong)', padding: '20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Approval Queue</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>4.6 days avg wait</div>
                    </div>
                    <div style={{ background: 'rgba(192, 57, 43, 0.2)', color: '#ff8a8a', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, border: '1px solid var(--red)' }}>
                      High Impact
                    </div>
                  </div>

                  <div style={{ background: 'var(--panel-bg)', border: '1px solid var(--border-light)', padding: '20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Rework Loop</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>18% of cases</div>
                    </div>
                    <div style={{ background: 'rgba(200, 169, 110, 0.1)', color: 'var(--gold)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                      Costly
                    </div>
                  </div>

                  <div style={{ background: 'var(--panel-bg)', border: '1px solid var(--border-light)', padding: '20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Handoff Delay</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>1.9 days median</div>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                      Fixable
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
