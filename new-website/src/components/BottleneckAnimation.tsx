"use client";

import React, { useEffect, useState } from 'react';
import './BottleneckAnimation.css';

export const BottleneckAnimation = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bottleneck-panel panel">
      <div className="animation-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'var(--text-primary)' }}>
          <span className="pulse-dot"></span>
          Pipeline Health
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Live View</div>
      </div>

      <div className="pipeline-container">
        
        {/* REQUEST */}
        <div className="node healthy">
          <div className="node-icon">REQ</div>
          <div className="node-label">REQUEST</div>
        </div>
        
        <div className="connection active">
          <div className="flow-dot"></div>
        </div>

        {/* TRIAGE */}
        <div className="node healthy">
          <div className="node-icon">TRG</div>
          <div className="node-label">TRIAGE</div>
        </div>
        
        <div className="connection active">
          <div className="flow-dot"></div>
        </div>

        {/* ASSIGN */}
        <div className="node healthy">
          <div className="node-icon">ASN</div>
          <div className="node-label">ASSIGN</div>
        </div>
        
        <div className="connection backed-up">
          <div className="queue-dots">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>

        {/* APPROVAL (Bottleneck) */}
        <div className="node bottleneck">
          <div className="node-icon pulse-red">APP</div>
          <div className="node-label">APPROVAL</div>
        </div>
        
        <div className="connection starved">
          <div className="flow-dot slow"></div>
        </div>

        {/* DEPLOY */}
        <div className="node starved">
          <div className="node-icon">DEP</div>
          <div className="node-label">DEPLOY</div>
        </div>
        
        <div className="connection starved">
          <div className="flow-dot slow"></div>
        </div>

        {/* CLOSE */}
        <div className="node starved">
          <div className="node-icon">CLS</div>
          <div className="node-label">CLOSE</div>
        </div>

      </div>

      <div className="animation-caption">
        <p>Everything upstream is backed up. Everything downstream is starved. <strong>One step controls the system.</strong></p>
      </div>

    </div>
  );
};
