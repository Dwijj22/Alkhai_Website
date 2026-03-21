"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ClientObserver = () => {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" 
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    // Subtle Spotlight Mouse Tracker
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [pathname]);

  return (
    <div 
      className="spotlight"
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100vw', height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        background: 'radial-gradient(800px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(200, 169, 110, 0.04), transparent 40%)',
        mixBlendMode: 'screen',
        transform: 'translateZ(0)' // Force GPU acceleration
      }} 
    />
  );
}
