'use client';

import { motion } from 'framer-motion';
import { fadeInView } from '@/lib/motion';

const schools = [
  {
    name: 'Rutgers University',
    degree: 'B.S., Data Science & Computer Science',
    date: 'Expected May 2027',
    note: "Dean's List",
  },
  {
    name: 'Princeton University',
    degree: 'Certificate, Engineering & Chemistry',
    date: 'May 2025',
    note: null,
  },
  {
    name: 'Mercer County Community College',
    degree: 'A.S., Computer Science & Mathematics',
    date: 'May 2025',
    note: 'Highest Honors in Computer Science & Mathematics',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-pad divider-t">
      <div className="max-w-3xl mx-auto">
        <motion.h2 {...fadeInView} className="chapter-title">
          Education
        </motion.h2>

        <div className="relative pl-8">
          <div className="timeline-line" aria-hidden="true" />

          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative pb-14 last:pb-0"
            >
              <span className="timeline-node" aria-hidden="true" />

              <p className="font-mono text-[10px] text-[#4A5568] tracking-[0.15em] mb-3">
                {school.date}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-[#E8EDF2] font-light">
                {school.name}
              </h3>
              <p className="text-sm text-[#4A5568] mt-2 font-light">{school.degree}</p>
              {school.note && (
                <p className="mt-2 font-mono text-[10px] text-[#4A9B7F]/80">
                  {school.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
