'use client';

import { motion } from 'framer-motion';
import { fadeInView } from '@/lib/motion';

const stats = [
  { label: 'Rutgers', value: "'27" },
  { label: 'Degree', value: 'DS + CS' },
  { label: 'Honors', value: "Dean's List" },
  { label: 'Location', value: 'Plainsboro, NJ' },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <motion.div {...fadeInView} className="max-w-6xl mx-auto">
        <h2 className="chapter-title">About</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          <p className="text-lg md:text-xl text-[#E8EDF2]/85 leading-[1.75] font-light max-w-xl">
            Undergraduate at Rutgers double-majoring in Data Science and Computer
            Science. I build and deploy full-stack ML systems—from RAG research
            assistants and cricket analytics platforms to NLP pipelines and VR
            digital twins—and care about turning data into tools people actually
            use.
          </p>

          <div className="flex flex-col gap-10 lg:items-end lg:text-right">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <span className="font-mono text-[10px] text-[#4A5568] tracking-[0.2em] uppercase block mb-2">
                  {stat.label}
                </span>
                <span className="font-serif text-2xl md:text-3xl text-[#E8EDF2]">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
