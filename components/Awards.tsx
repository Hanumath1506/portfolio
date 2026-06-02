'use client';

import { motion } from 'framer-motion';
import { fadeInView } from '@/lib/motion';

const awards = [
  {
    title: 'Professor Betty Wallace Cornelius Mathematics Excellence Award',
    org: 'Mercer County Community College',
    detail: null,
  },
  {
    title: "Dean's List",
    org: 'Rutgers University',
    detail: null,
  },
  {
    title: 'Highest Honors in Computer Science & Mathematics',
    org: 'Mercer County Community College',
    detail: null,
  },
  {
    title: 'Phi Theta Kappa Scholarship',
    org: 'Rutgers University',
    detail: null,
  },
  {
    title: 'Certified in Cybersecurity (CC)',
    org: 'ISC2',
    detail: null,
  },
];

export default function Awards() {
  return (
    <section id="awards" className="section-pad">
      <div className="max-w-4xl mx-auto">
        <motion.h2 {...fadeInView} className="chapter-title">
          Awards & Certifications
        </motion.h2>

        <ul className="space-y-0">
          {awards.map((award, i) => (
            <motion.li
              key={award.title}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="divider-b py-8 first:pt-0 last:border-b-0"
            >
              <h3 className="font-serif text-lg md:text-xl text-[#E8EDF2] font-light">
                {award.title}
              </h3>
              <p className="font-mono text-[10px] text-[#4A5568] mt-2 tracking-wide">
                {award.org}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
