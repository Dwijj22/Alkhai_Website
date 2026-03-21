import React from 'react';
import './Pricing.css';

export const Pricing = () => {
  const features = [
    { title: "Fixed Scope", desc: "No scope creep. Clearly defined bounds for the diagnostic phase." },
    { title: "Fixed Price", desc: "Predictable cost with no hidden fees or open-ended retainers." },
    { title: "Fast Turnaround", desc: "Actionable readouts in 18 days, not multi-month engagements." },
    { title: "Zero Platform Changes", desc: "We use your existing data—no new software to implement." }
  ];

  return (
    <section className="pricing-section section-soft" id="pricing">
      <div className="container">
        
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="eyebrow">Pricing Model</div>
          <h2 style={{ marginBottom: '16px' }}>Transparent, high-ROI engagements.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            We align our incentives with your need for speed and clarity.
          </p>
        </div>

        <div className="pricing-banner reveal reveal-delay-2">
          <div className="pricing-banner-inner">
            <h3 className="pricing-amount">Engagements from $5,000</h3>
            <p className="pricing-subtitle">Fixed scope, fixed price</p>
          </div>
        </div>

        <div className="grid-4" style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {features.map((feature, idx) => (
            <div key={idx} className="panel reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
               <h4 style={{ fontSize: '1.125rem', color: 'var(--gold)', marginBottom: '8px', fontWeight: 600 }}>{feature.title}</h4>
               <p style={{ fontSize: '0.95rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
