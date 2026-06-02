'use client';

import { useEffect, useRef } from 'react';

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const spacing = 32;
      const offsetX = (time * 0.02) % spacing;
      const offsetY = (time * 0.015) % spacing;

      for (let x = -spacing; x < w + spacing; x += spacing) {
        for (let y = -spacing; y < h + spacing; y += spacing) {
          const px = x + offsetX;
          const py = y + offsetY;
          const distFromCenter = Math.hypot(px - w / 2, py - h / 2);
          const maxDist = Math.hypot(w / 2, h / 2);
          const fade = 1 - distFromCenter / maxDist;
          const pulse = 0.5 + 0.5 * Math.sin(time * 0.001 + px * 0.02 + py * 0.02);
          const alpha = fade * pulse * 0.25;

          ctx.beginPath();
          ctx.arc(px, py, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 169, 110, ${alpha})`;
          ctx.fill();
        }
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
