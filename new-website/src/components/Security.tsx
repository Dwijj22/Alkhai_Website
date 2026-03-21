import React from 'react';

export const Security = () => {
  return (
    <section id="proof" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <div className="eyebrow">Proof & Security</div>
          <h2>Why ALKHAI before large transformation programs.</h2>
        </div>

        <div className="grid-3">
          <div className="panel reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 169, 110, 0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Event-data driven</h3>
            </div>
            <p style={{ fontSize: '1rem' }}>All findings are derived from timestamps, variants, and real execution data - not subjective interviews.</p>
          </div>
          
          <div className="panel reveal reveal-delay-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 169, 110, 0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Security-first engagement</h3>
            </div>
            <p style={{ fontSize: '1rem' }}>Least-privilege access, NDA-ready, and absolutely no data extraction outside your protected environment.</p>
          </div>
          
          <div className="panel reveal reveal-delay-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 169, 110, 0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)' }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Operationally aligned</h3>
            </div>
            <p style={{ fontSize: '1rem' }}>Outputs map directly to your existing owners, controls, and targets so fixes can be executed immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
