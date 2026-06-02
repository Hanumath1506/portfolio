'use client';

import { motion } from 'framer-motion';
import { fadeInView } from '@/lib/motion';

const items = [
  {
    role: 'Co-Lead R&D Developer',
    org: 'Princeton Materials Institute — Princeton, NJ',
    dates: 'Dec 2024 – Mar 2026',
    bullets: [
      'Co-led a 6-person cross-institutional team to build a VR digital twin of Princeton’s Advanced Device Packaging Lab—photogrammetry, Blender modeling, and Unity physics replicating exact machine behavior.',
      'Deployed on VR headsets via HyperSkill with three integrated AI agents: Instructor, Evaluator, and Safety Monitor.',
      'Presented live VR demonstrations at TechConnect World Innovation Conference & Expo; co-authored a peer-reviewed publication in the Journal of Advanced Technological Education (Mar 2026).',
    ],
  },
  {
    role: 'Treasurer',
    org: 'Phi Theta Kappa (MCCC) — West Windsor, NJ',
    dates: 'Jun 2024 – Jun 2025',
    bullets: [
      'Managed chapter budget, produced monthly financial reports, and optimized resource allocation for chapter events.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-3xl mx-auto">
        <motion.h2 {...fadeInView} className="chapter-title">
          Experience
        </motion.h2>

        <div className="relative pl-8">
          <div className="timeline-line" aria-hidden="true" />

          {items.map((item, i) => (
            <motion.div
              key={item.role + item.org}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative pb-16 last:pb-0"
            >
              <span className="timeline-node" aria-hidden="true" />

              <p className="font-mono text-[10px] text-[#4A5568] tracking-[0.15em] mb-3">
                {item.dates}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-[#E8EDF2] font-light">
                {item.role}
              </h3>
              <p className="font-mono text-xs text-[#4A5568] mt-2">{item.org}</p>
              <ul className="mt-5 space-y-3 list-none">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 48)}
                    className="text-sm text-[#4A5568] leading-relaxed max-w-lg font-light"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
