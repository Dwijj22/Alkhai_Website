"use client";
import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    return () => {
      observer.disconnect();
    };
  }, [end]);

  return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
}

export const StatsBar = () => {
  return (
    <section className="stats-bar" style={{ padding: '80px 0', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="grid-3" style={{ textAlign: 'center' }}>
          
          <div className="reveal">
            <h3 style={{ fontSize: '3.5rem', color: 'var(--gold)', marginBottom: '16px', fontWeight: 400 }}>
              <AnimatedCounter end={20} suffix="%" />
            </h3>
            <p style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1rem' }}>
              Average throughput lost to hidden constraints
            </p>
          </div>
          
          <div className="reveal reveal-delay-2">
            <h3 style={{ fontSize: '3.5rem', color: 'var(--gold)', marginBottom: '16px', fontWeight: 400 }}>
              <AnimatedCounter end={40} suffix="%" />
            </h3>
            <p style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1rem' }}>
              Work items continually stuck in rework loops
            </p>
          </div>
          
          <div className="reveal reveal-delay-3">
            <h3 style={{ fontSize: '3.5rem', color: 'var(--gold)', marginBottom: '16px', fontWeight: 400 }}>
              <AnimatedCounter end={30} suffix="%" />
            </h3>
            <p style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1rem' }}>
              Missed deadlines driven by internal bottlenecks
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
