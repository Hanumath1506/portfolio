'use client';

import { motion } from 'framer-motion';
import { fadeInView } from '@/lib/motion';

const publications = [
  {
    title:
      'A Multi-Institutional Digital Twin and AI Educational Platform for Advanced Microelectronics Fabrication and Device Packaging Training',
    venue: 'Journal of Advanced Technological Education',
    date: 'Mar 2026',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="section-pad divider-t">
      <div className="max-w-4xl mx-auto">
        <motion.h2 {...fadeInView} className="chapter-title">
          Publications
        </motion.h2>

        {publications.map((pub, i) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <p className="font-mono text-[10px] text-[#4A5568] tracking-[0.15em] mb-4">
              {pub.date}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-[#E8EDF2] font-light leading-snug">
              {pub.title}
            </h3>
            <p className="mt-4 font-mono text-xs text-[#4A5568]">{pub.venue}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
