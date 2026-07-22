import SectionHeading from '@/components/SectionHeading';

const projects = [
  {
    year: '2025',
    title: 'Pericope',
    href: 'https://pericope-xi.vercel.app',
    description:
      'Full-stack RAG research assistant: upload PDFs and chat with papers grounded in actual content—auto-generated summaries, keywords, and methodology extraction. Cross-paper semantic search via Qdrant Cloud and HuggingFace embeddings.',
    tags: ['NLP', 'Python', 'React', 'FastAPI'],
  },
  {
    year: '2024',
    title: 'CricIQ',
    href: 'https://criciq-app.streamlit.app',
    description:
      'Cricket analytics app on IPL ball-by-ball data—player matchups, form tracking, and match prediction. Random Forest classifier at 53.5% accuracy with venue and head-to-head features; deployed on Streamlit Cloud.',
    tags: ['Machine Learning', 'Pandas', 'Streamlit'],
  },
  {
    year: '2025',
    title: 'Agentic Minds — AI News Headline Analysis',
    href: null,
    description:
      'Led an 8-stage NLP pipeline analyzing ~10,500 AI news headlines to study how coverage frames human agency across healthcare, business, and education—embeddings, clustering, sentiment, and zero-shot classification. National finalist (8 of 188 teams) at RAISE 2026; presented at the NJBDA Symposium at Rowan University, earning an Honorable Mention for Best Poster.',
    tags: ['Data Science', 'Scikit-Learn', 'NLP'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container stitch-section">
      <SectionHeading
        title="Projects"
        subtitle="The archive"
        className="mb-20"
      />
      <div className="flex flex-col border-[#1e2429]">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative -mx-6 flex flex-col justify-between border-b border-[#1e2429] px-6 py-12 transition-colors duration-500 hover:border-l-4 hover:border-[#7EB8D4] md:flex-row md:items-start"
          >
            <div className="type-label mb-4 pt-2 md:mb-0 md:w-1/6">{project.year}</div>
            <div className="mb-4 md:mb-0 md:w-2/6 md:pr-8">
              {project.href ? (
                <>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="type-h3 text-[#E8EDF2] transition-colors duration-500 group-hover:text-[#7EB8D4]">
                      {project.title}
                    </h3>
                  </a>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-label-md mt-2 inline-block text-[#4A9B7F] transition-colors duration-500 hover:text-[#7EB8D4]"
                  >
                    {project.href.replace(/^https:\/\//, '')}
                  </a>
                </>
              ) : (
                <h3 className="type-h3 text-[#E8EDF2] transition-colors duration-500 group-hover:text-[#7EB8D4]">
                  {project.title}
                </h3>
              )}
            </div>
            <div className="flex h-full flex-col justify-between md:w-3/6">
              <p className="type-body-sm mb-8">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag type-label-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
