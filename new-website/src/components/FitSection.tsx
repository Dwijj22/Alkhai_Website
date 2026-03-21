import React from 'react';

export const FitSection = () => {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        
        <div className="grid-2">
          {/* Good Fit */}
          <div className="panel reveal" style={{ borderTop: '4px solid #3DDC97' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(61, 220, 151, 0.15)', color: '#3DDC97', display: 'grid', placeItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Good fit if</h3>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#3DDC97', marginTop: '4px' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>Your processes run across multiple tools (CRM / ERP / ticketing / spreadsheets)</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#3DDC97', marginTop: '4px' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>Everyone is busy but throughput isn’t rising</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#3DDC97', marginTop: '4px' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>Work bounces between people/teams and stalls in handoffs</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#3DDC97', marginTop: '4px' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>You need clarity before hiring, automating, or changing tools</span>
              </li>
            </ul>
          </div>

          {/* Not a Fit */}
          <div className="panel reveal reveal-delay-2" style={{ borderTop: '4px solid var(--red)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(192, 57, 43, 0.15)', color: 'var(--red)', display: 'grid', placeItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Not a fit if</h3>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--red)', marginTop: '4px' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>You want a new platform or full “digital transformation”</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--red)', marginTop: '4px' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>You’re looking for generic “best practices”</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--red)', marginTop: '4px' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>You want automation without diagnosis</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--red)', marginTop: '4px' }}>•</span>
                <span style={{ color: 'var(--text-secondary)' }}>You have no usable timestamps/event data anywhere</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
