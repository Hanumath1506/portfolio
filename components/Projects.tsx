'use client';

import { motion } from 'framer-motion';
import { fadeInView } from '@/lib/motion';

const projects = [
  {
    title: 'Pericope',
    subtitle: 'AI Research Paper Assistant',
    href: 'https://pericope-xi.vercel.app',
    description:
      'Full-stack RAG research assistant: upload PDFs and chat with papers grounded in actual content—auto-generated summaries, keywords, and methodology extraction. Cross-paper semantic search via Qdrant Cloud and HuggingFace embeddings; Firebase token auth on the backend.',
    tags: 'React · FastAPI · Firebase · Qdrant · Groq',
  },
  {
    title: 'CricIQ',
    subtitle: 'IPL Cricket Analytics & Match Prediction',
    href: 'https://criciq-app.streamlit.app',
    description:
      'Cricket analytics app on IPL ball-by-ball data—player matchups, form tracking, and match prediction. Random Forest classifier at 53.5% accuracy (up from 49% baseline) with venue win-rate and head-to-head features; deployed on Streamlit Cloud with interactive dashboards.',
    tags: 'Python · Streamlit · Scikit-learn · Plotly',
  },
  {
    title: 'AI News Headline Analysis',
    subtitle: 'RAISE 2026 Finalist · Dec 2025 – Jan 2026',
    href: null,
    description:
      'NLP pipeline on thousands of headlines—embeddings, clustering, and sentiment analysis. VADER sentiment, TF-IDF keyword extraction, and PCA visualization; Qwen2.5-7B-Instruct for interpretable cluster labels on how AI is framed across news sources.',
    tags: 'Python · NLP · VADER · Qwen2.5',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad divider-t">
      <div className="max-w-7xl mx-auto">
        <motion.h2 {...fadeInView} className="chapter-title">
          Projects
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 1.4,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative py-14 md:py-20 lg:py-24 divider-b last:border-b-0"
            >
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-x-12 gap-y-4 items-start">
                  <div className="min-w-0">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h3 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.92] text-[#E8EDF2] font-light tracking-tight transition-colors duration-[600ms] group-hover:text-[#C8A96E] break-words">
                          {project.title}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.92] text-[#E8EDF2] font-light tracking-tight transition-colors duration-[600ms] group-hover:text-[#C8A96E] break-words">
                        {project.title}
                      </h3>
                    )}
                    <p className="mt-3 font-mono text-[10px] text-[#4A5568] tracking-wide">
                      {project.subtitle}
                    </p>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block font-mono text-[10px] text-[#4A9B7F]/80 hover:text-[#4A9B7F] transition-colors duration-[600ms]"
                      >
                        {project.href.replace(/^https:\/\//, '')}
                      </a>
                    )}
                  </div>

                  <p className="font-mono text-[10px] md:text-xs text-[#4A9B7F] lg:text-right lg:max-w-[13rem] lg:pt-2 tracking-wide shrink-0">
                    {project.tags}
                  </p>
                </div>

                <p className="text-sm text-[#4A5568] max-w-2xl leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
