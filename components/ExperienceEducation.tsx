const experience = [
  {
    dates: 'Jun 2026 – Present',
    role: 'NEMO Lab Automation Developer',
    org: 'Princeton Micro-Nano Fabrication Center',
    description:
      'Built a NEMO-CE Django plugin and Flask file-server daemon that replaced USB workflows with automatic SMB network-drive mapping on tool login/logout, using HMAC-signed API communication and SQLite session persistence. Integrated Nextcloud with token-based SSO auto-login and provisioned 376 existing MNFC users via a backfill script.',
  },
  {
    dates: 'Dec 2024 – Mar 2026',
    role: 'Co-Lead R&D Developer',
    org: 'Princeton Materials Institute',
    description:
      'Co-led a 6-person team building a VR digital twin of Princeton’s Advanced Device Packaging Lab—photogrammetry, Blender, Unity physics, and HyperSkill deployment with Instructor, Evaluator, and Safety Monitor AI agents. Presented at TechConnect; co-authored JATE publication (Mar 2026).',
  },
  {
    dates: 'Jun 2024 – Jun 2025',
    role: 'Treasurer',
    org: 'Phi Theta Kappa (MCCC)',
    description:
      'Managed chapter budget, produced monthly financial reports, and optimized resource allocation for chapter events.',
  },
];

const education = [
  {
    dates: '2023 – 2027',
    school: 'Rutgers University',
    degree: 'B.S. Data Science & Computer Science',
    note: "Dean's List. Focus on Machine Learning and Systems Architecture.",
  },
  {
    dates: 'May 2025',
    school: 'Princeton University',
    degree: 'Certificate, Engineering & Chemistry',
    note: null,
  },
  {
    dates: 'May 2025',
    school: 'Mercer County Community College',
    degree: 'A.S. Computer Science & Mathematics',
    note: 'Highest Honors in CS & Mathematics',
  },
];

function TimelineBlock({
  dates,
  title,
  org,
  description,
}: {
  dates: string;
  title: string;
  org: string;
  description?: string | null;
}) {
  return (
    <div className="relative mb-16">
      <div
        className="absolute -left-[45px] top-1.5 h-2.5 w-2.5 rounded-full border border-[#7EB8D4] bg-transparent"
        aria-hidden="true"
      />
      <p className="type-label mb-3">{dates}</p>
      <h3 className="type-h3 mb-2 text-[#E8EDF2]">{title}</h3>
      <p className="type-label-md mb-5 text-[#4A9B7F]">{org}</p>
      {description && <p className="type-body-sm">{description}</p>}
    </div>
  );
}

export default function ExperienceEducation() {
  return (
    <section id="experience" className="section-container stitch-section">
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
        <div>
          <h2 className="type-h2 mb-2 text-[#E8EDF2]">Experience</h2>
          <p className="type-subtitle mb-12">The trajectory</p>
          <div className="relative pl-10">
            <div className="timeline-line opacity-50" aria-hidden="true" />
            {experience.map((item) => (
              <TimelineBlock
                key={item.role}
                dates={item.dates}
                title={item.role}
                org={item.org}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="type-h2 mb-2 text-[#E8EDF2]">Education</h2>
          <p className="type-subtitle mb-12">The foundation</p>
          <div className="relative pl-10">
            <div className="timeline-line opacity-50" aria-hidden="true" />
            {education.map((item) => (
              <TimelineBlock
                key={item.school}
                dates={item.dates}
                title={item.school}
                org={item.degree}
                description={item.note}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
