'use client';

import { useEffect } from 'react';

const HERO_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBCo5wuwlJCk8KHktNkCLPeODw4HfsUYf2HsYNeWpDaPO9tejJKkDT5JF-7nqijpMYSSVOApbQ3N1k3CBwvx2qxR8ErRcefZC-d3MdAgXJD1qsaHqmSTKGvR0wD5rD0Z47_cfl-acKiFlBmxUSAAQWoO2f2HEu_rKqZsXx9zejd6cq0GcqNA3hwt7q-hlxclaKqGiegrVskfAiIfMCNcUv25Jkvx1MEQFOOo2zgzPnVbJKvjuk5rruIsEyarA0bbQ31Z4OgS5hWYOsN';

const TREE_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ1JUQ6js3R51dAWDT94vlIMRAQ22uYZKwLHsuwYL6_wUbVZvaG3MaQx3AFJRt0r8v6_wMepHn3v7B_6_mm9841GwIQ9-ABfZHBevQpu76EjRYegiahxlXtVvfXb0sHK0yd_GTn9q5HU4mrKlFC0byk8ePwaGJIh-Klh8ISAD9BXpwgjazkrChQQGVbtlt658ieNDLpOTP2AoP53miGYXxjWBEKq1GfE0Ns21-Mger3CgJiZWcWuT6LtB-d77ZwYTQM17lU_kJNY3m';

export default function StitchBackground() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (typeof window === 'undefined') return;

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      document.querySelectorAll<HTMLElement>('.parallax-layer').forEach((layer) => {
        const speed = Number.parseFloat(layer.getAttribute('data-speed') || '10');
        const px = `${-x * speed}px`;
        const py = `${-y * speed}px`;
        layer.style.setProperty('--px', px);
        layer.style.setProperty('--py', py);
        if (layer.classList.contains('tree-parallax-accent')) {
          layer.style.transform = `translate(${px}, ${py}) scaleX(-1)`;
        } else {
          layer.style.transform = `translate(${px}, ${py})`;
        }
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div
        className="stitch-body-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 18, 25, 0.85), rgba(12, 18, 25, 0.95)), url('${HERO_BG}')`,
        }}
        aria-hidden="true"
      />
      <div className="atmospheric-mist" aria-hidden="true">
        <div className="moonlight" />
      </div>
      <div
        className="parallax-layer tree-parallax-accent"
        data-speed="15"
        style={{ backgroundImage: `url('${TREE_BG}')` }}
        aria-hidden="true"
      />
      <div className="parallax-layer" data-speed="10" aria-hidden="true" />
    </>
  );
}
