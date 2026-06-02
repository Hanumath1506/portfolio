'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  drift: number;
  phase: number;
};

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = window.innerWidth * window.innerHeight;
      const count = Math.floor(area / 34000);
      particles = Array.from(
        { length: Math.min(Math.max(count, 24), 65) },
        () => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: Math.random() * 1.4 + 0.25,
          alpha: Math.random() * 0.18 + 0.03,
          drift: Math.random() * 0.06 + 0.02,
          phase: Math.random() * Math.PI * 2,
        })
      );
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        const pulse = 0.55 + 0.45 * Math.sin(time * 0.00022 + p.phase);
        const twinkle = p.alpha * pulse;
        const x = p.x + Math.sin(time * 0.0001 + p.phase) * p.drift;
        const y = p.y + Math.cos(time * 0.00008 + p.phase) * p.drift * 0.4;

        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 178, 192, ${twinkle})`;
        ctx.fill();
      }

      time += 16;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-[1]"
      aria-hidden="true"
    />
  );
}
