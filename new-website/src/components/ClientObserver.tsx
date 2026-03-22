'use client';
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

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
