'use client';
import { useState } from 'react';

export function PainDock() {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="painDock"
      style={{
        position: 'fixed', bottom: 16, right: 16, zIndex: 60,
        borderRadius: 18, border: '1px solid rgba(255,255,255,0.10)',
        background: 'rgba(5,7,26,0.85)', color: '#fff',
        transition: 'all 300ms ease',
        overflow: 'hidden',
        width: open ? 320 : 'auto',
      }}
    >
      <div
        id="painHandle"
        onClick={() => setOpen(!open)}
        style={{
          padding: '12px 18px', cursor: 'pointer', fontWeight: 700,
          fontSize: '0.92rem', letterSpacing: '0.04em',
          display: 'flex', alignItems: 'center', gap: 8,
          borderBottom: open ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal)', boxShadow: '0 0 6px rgba(61,220,151,0.6)' }} />
        Process Report
      </div>

      {open && (
        <div style={{ padding: '14px 18px' }}>
          <div style={{ fontSize: '0.82rem', color: 'rgba(199,206,217,0.7)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Process Report, live
          </div>
          <div style={{ display: 'grid', gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.88rem', color: 'rgba(199,206,217,0.8)' }}>Hidden rework</span>
              <span style={{ fontWeight: 700, color: 'var(--amber)' }}>22%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.88rem', color: 'rgba(199,206,217,0.8)' }}>Deadline risk</span>
              <span style={{ fontWeight: 700, color: 'var(--danger)' }}>HIGH</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.88rem', color: 'rgba(199,206,217,0.8)' }}>Looping paths</span>
              <span style={{ fontWeight: 700, color: 'var(--amber)' }}>3</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 14, fontSize: '0.78rem', color: 'rgba(199,206,217,0.6)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><i style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />Healthy</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><i style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', display: 'inline-block' }} />Rework</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><i style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--danger)', display: 'inline-block' }} />Breach</span>
          </div>
          <div style={{ marginTop: 10, fontSize: '0.78rem', color: 'rgba(199,206,217,0.5)' }}>
            Hover a node to spotlight the local failure zone.
          </div>
        </div>
      )}
    </div>
  );
}
