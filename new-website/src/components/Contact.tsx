import React from 'react';
import { Button } from './Button';

export const Contact = () => {
  return (
    <section id="contact" style={{ padding: '120px 0' }}>
      <div className="container">
        <div className="panel reveal" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))', textAlign: 'center', padding: '80px 40px', borderColor: 'var(--border-strong)' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '24px' }}>Book a 30-minute intro call — at no charge.</h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 40px', fontSize: '1.25rem' }}>
            Tell us about the workflow you want to improve and where work is stalling. We’ll outline how a bottleneck scan can help.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <a href="https://calendly.com/dwijravikumar/alkhai-initial-meeting" target="_blank" rel="noreferrer noopener">
              <Button variant="primary" style={{ padding: '20px 40px', fontSize: '1.125rem' }}>
                Schedule Intro Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </Button>
            </a>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <strong>If we don't find actionable constraints, you don't proceed.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
