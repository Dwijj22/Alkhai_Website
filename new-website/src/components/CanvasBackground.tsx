'use client';
import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const offscreen = canvas.transferControlToOffscreen();

      workerRef.current = new Worker(
        new URL('../workers/canvas.worker.ts', import.meta.url)
      );

      workerRef.current.postMessage(
        { type: 'init', canvas: offscreen, width: window.innerWidth, height: window.innerHeight },
        [offscreen]
      );
    } catch {
      // Fallback: OffscreenCanvas not supported, skip animation
      return;
    }

    const onResize = () => {
      workerRef.current?.postMessage({
        type: 'resize',
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const onMouse = (e: MouseEvent) => {
      workerRef.current?.postMessage({
        type: 'mousemove', x: e.clientX, y: e.clientY,
      });
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouse, { passive: true });

    return () => {
      workerRef.current?.terminate();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <>
      <canvas id="bg" ref={canvasRef} aria-hidden="true" />
      <div id="bgOverlay" aria-hidden="true" />
    </>
  );
}
