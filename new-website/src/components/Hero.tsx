import React from 'react';
import { Button } from './Button';
import { BottleneckAnimation } from './BottleneckAnimation';

export const Hero = () => {
  return (
    <section className="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '80px' }}>
          
          <div className="hero-copy" style={{ zIndex: 3 }}>
            
            {/* Ambient Gold Glow Behind Text */}
            <div style={{ position: 'absolute', top: '20%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(200, 169, 110, 0.08) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: -1, pointerEvents: 'none', animation: 'pulse-slow 6s infinite alternate' }}></div>

            <div className="eyebrow animate-load-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold)', display: 'inline-block' }}></span>
              CONSTRAINT INTELLIGENCE · OPERATIONAL ANALYSIS
            </div>
            
            <h1 className="animate-load-fade-in delay-1" style={{ marginBottom: '28px', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', lineHeight: 1.15 }}>
              Find and remove the constraints bleeding time and money from your operations.
            </h1>
            
            <p className="animate-load-fade-in delay-2" style={{ marginBottom: '44px', maxWidth: '580px', fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              Most SMBs lose 20% of their throughput to hidden bottlenecks they can't see. 
              ALKHAI maps how work actually flows across your business using real timestamps from the tools you already run.
            </p>
            
            <div className="animate-load-fade-in delay-3" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button variant="primary">
                Request a Bottleneck Scan
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Button>
              <Button variant="ghost">View deliverables</Button>
            </div>

            <div className="animate-load-fade-in delay-4" style={{ marginTop: '56px', display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '999px', background: 'var(--panel-bg)', border: '1px solid var(--border-light)'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <strong style={{ color: 'var(--text-primary)'}}>18-day</strong> diagnostic engagement
              </span>
            </div>
          </div>

          <div className="hero-visual animate-load-fade-in delay-2 animate-float" style={{ width: '100%', maxWidth: '600px', margin: '0 auto', zIndex: 2 }}>
            <BottleneckAnimation />
          </div>

        </div>
      </div>
    </section>
  );
};
