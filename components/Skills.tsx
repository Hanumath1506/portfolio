import SectionHeading from '@/components/SectionHeading';

const columns = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'R', 'JavaScript'],
  },
  {
    title: 'Data Science',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'NLP',
      'Feature Engineering',
      'Predictive Modeling',
    ],
  },
  {
    title: 'Tools',
    skills: ['React', 'FastAPI', 'Firebase', 'Docker', 'Git', 'Streamlit', 'Unity'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container stitch-section">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-4 md:col-start-1">
          <SectionHeading title="Toolkit" subtitle="The stack" />
        </div>
        <div className="grid grid-cols-1 gap-12 pt-4 sm:grid-cols-3 md:col-span-8 md:col-start-5">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="type-label mb-8">{`// ${col.title}`}</h3>
              <div className="flex flex-wrap gap-3">
                {col.skills.map((skill) => (
                  <span key={skill} className="skill-item type-label-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
