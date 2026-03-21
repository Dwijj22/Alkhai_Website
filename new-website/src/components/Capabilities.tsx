import React from 'react';

export const Capabilities = () => {
  return (
    <section id="capabilities">
      <div className="container">
        
        <div className="reveal" style={{ marginBottom: '64px' }}>
          <div className="eyebrow">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold)', display: 'inline-block', marginRight: '12px' }}></span>
            Capabilities
          </div>
          <h2>Built around constraints.</h2>
          <p style={{ maxWidth: '640px', marginTop: '16px' }}>
            We analyze operations as they actually run — from intake to handoffs, approvals, and completion — 
            then isolate the few constraints that kill throughput and create avoidable cost.
          </p>
        </div>
        
        {/* Process Map moved here */}
        <div className="panel reveal reveal-delay-1" style={{ marginBottom: '48px', padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '32px', borderBottom: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 169, 110, 0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Process map + variants</h3>
            </div>
            <p style={{ fontSize: '1.05rem', marginTop: '12px' }}>See how work actually flows across teams and systems—with variance, rework loops, and wait states highlighted.</p>
          </div>
          
          <div style={{ height: '280px', background: 'rgba(0,0,0,0.2)', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 40px' }}>
            <svg viewBox="0 0 700 220" preserveAspectRatio="none" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}>
              <defs>
                <linearGradient id="g-cap" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="rgba(200,169,110,0.85)"/>
                  <stop offset="1" stopColor="rgba(192,57,43,0.95)"/>
                </linearGradient>
              </defs>
              <circle cx="90" cy="120" r="14" fill="rgba(200,169,110,0.95)"/>
              <circle cx="260" cy="90" r="14" fill="rgba(200,169,110,0.8)"/>
              <circle cx="260" cy="150" r="14" fill="rgba(200,169,110,0.5)"/>
              <circle cx="450" cy="120" r="14" fill="rgba(192,57,43,1)"/>
              <circle cx="620" cy="120" r="14" fill="rgba(200,169,110,0.95)"/>
              
              <path d="M104,120 C160,120 200,96 246,90" stroke="url(#g-cap)" strokeWidth="5" fill="none"/>
              <path d="M104,120 C160,120 200,144 246,150" stroke="rgba(200,169,110,0.35)" strokeWidth="4" fill="none" strokeDasharray="8 8"/>
              
              <path d="M274,90 C330,88 380,115 436,120" stroke="url(#g-cap)" strokeWidth="5" fill="none"/>
              <path d="M274,150 C330,152 380,125 436,120" stroke="rgba(192,57,43,0.4)" strokeWidth="4" fill="none" strokeDasharray="8 8"/>
              
              <path d="M464,120 C510,120 560,120 606,120" stroke="rgba(200,169,110,0.85)" strokeWidth="5" fill="none"/>
              
              <text x="438" y="72" fill="rgba(255,255,255,0.95)" fontSize="18" fontWeight="600" letterSpacing="0.05em">BOTTLENECK</text>
              <line x1="450" y1="78" x2="450" y2="106" stroke="rgba(192,57,43,0.85)" strokeWidth="3"/>
            </svg>
          </div>
        </div>

        <div className="grid-3">
          <div className="panel reveal reveal-delay-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 169, 110, 0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Event-based Discovery</h3>
            </div>
            <p style={{ fontSize: '1rem' }}>Turn event logs into as-is process flows—variants, rework loops, wait states, and handoff paths.</p>
          </div>
          
          <div className="panel reveal reveal-delay-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 169, 110, 0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Constraint Ranking</h3>
            </div>
            <p style={{ fontSize: '1rem' }}>Rank bottlenecks by throughput impact, time/cost leakage, and customer wait time.</p>
          </div>
          
          <div className="panel reveal reveal-delay-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 169, 110, 0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)' }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Targeted Automation</h3>
            </div>
            <p style={{ fontSize: '1rem' }}>Apply automation only where it removes the verified constraint — approvals, routing, handoffs, reconciliations — not everywhere.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
