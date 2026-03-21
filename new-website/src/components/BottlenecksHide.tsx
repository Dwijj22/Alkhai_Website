import React from 'react';
import './BottlenecksHide.css';

export const BottlenecksHide = () => {
  const cards = [
    { 
      title: "Approval Queues", 
      desc: "Work sits idle waiting for sign-off from busy executives or parallel departments.", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 
    },
    { 
      title: "Handoff Delays", 
      desc: "Information is lost, reformatted, or stalled when moving between specialized teams.", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3v18"/><path d="M3 15h14"/><path d="M3 9h14"/></svg> 
    },
    { 
      title: "Rework Loops", 
      desc: "Errors or missing data force work backwards, duplicating effort and extending cycles.", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-10.42l1.75 2.85"/></svg> 
    },
    { 
      title: "Data Silos", 
      desc: "Teams manually cross-reference or re-enter data across disconnected operational systems.", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> 
    },
    { 
      title: "Missing Context", 
      desc: "Knowledge workers stop processing to hunt down missing documents or historical context.", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> 
    },
    { 
      title: "Unclear Triage", 
      desc: "Requests are routed incorrectly on day one, causing bounce-backs and aged backlog.", 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> 
    }
  ];

  return (
    <section className="bottlenecks-hide-section">
      <div className="container">
        
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="eyebrow">Where Bottlenecks Hide</div>
          <h2 style={{ maxWidth: '700px', margin: '0 auto' }}>Complexity creates dark corners in your operations.</h2>
        </div>

        <div className="bottlenecks-grid">
          {cards.map((card, idx) => (
            <div key={idx} className={`bottleneck-card reveal`} style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="card-ambient-glow"></div>
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
