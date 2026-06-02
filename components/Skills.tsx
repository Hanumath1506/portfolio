'use client';

import { motion } from 'framer-motion';
import { fadeInView } from '@/lib/motion';

const columns = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'R'],
  },
  {
    title: 'Data Science',
    skills: [
      'Data Analysis',
      'Data Cleaning',
      'Feature Engineering',
      'Predictive Modeling',
      'Data Visualization',
      'NLP',
      'Scikit-learn',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'FastAPI',
      'React',
      'Firebase',
      'Qdrant',
      'Docker',
      'Git',
      'Tableau',
      'Excel',
      'Streamlit',
      'Unity',
      'Blender',
    ],
  },
];

function SkillPill({ skill }: { skill: string }) {
  return (
    <span className="inline-block font-mono text-[11px] text-light/75 border border-line px-2.5 py-1 transition-colors duration-slow hover:border-muted hover:text-light">
      {skill}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 {...fadeInView} className="chapter-title">
          Skills
        </motion.h2>
        <p className="font-mono text-[10px] text-muted mb-20 tracking-[0.15em] -mt-16 md:-mt-20">
          {`// stack.env`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {columns.map((col, colIndex) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: colIndex * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h3 className="font-mono text-[10px] text-muted tracking-[0.25em] uppercase mb-8">
                {col.title}
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {col.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
