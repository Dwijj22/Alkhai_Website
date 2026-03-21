import React from 'react';

export const ImpactQuote = () => {
  return (
    <section style={{ padding: '120px 0', textAlign: 'center', position: 'relative', background: 'radial-gradient(circle at 50% 50%, rgba(200, 169, 110, 0.05), transparent 60%)' }}>
      <div className="container">
        <blockquote className="reveal" style={{ 
          fontSize: 'clamp(2rem, 4vw, 3rem)', 
          fontFamily: 'var(--font-dm-serif)', 
          color: 'var(--gold)', 
          maxWidth: '900px', 
          margin: '0 auto', 
          lineHeight: 1.25,
          position: 'relative',
          zIndex: 2
        }}>
          <span style={{ position: 'absolute', top: -40, left: -40, fontSize: '6rem', color: 'rgba(200, 169, 110, 0.1)', zIndex: -1, fontFamily: 'serif' }}>"</span>
          We don't need another dashboard tracking how slow we are. We need to know exactly which step to fix to get faster.
        </blockquote>
        <div className="reveal reveal-delay-2" style={{ marginTop: '32px', fontSize: '1.125rem', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          — The Operator's Mandate
        </div>
      </div>
    </section>
  );
};
