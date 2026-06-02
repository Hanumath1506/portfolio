import SectionHeading from '@/components/SectionHeading';

const awards = [
  {
    title: 'Professor Betty Wallace Cornelius Mathematics Excellence Award',
    org: 'Mercer County Community College',
  },
  {
    title: "Dean's List",
    org: 'Rutgers University',
  },
  {
    title: 'Highest Honors in Computer Science & Mathematics',
    org: 'Mercer County Community College',
  },
  {
    title: 'Phi Theta Kappa Scholarship',
    org: 'Rutgers University',
  },
  {
    title: 'Certified in Cybersecurity (CC)',
    org: 'ISC2',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="section-container stitch-section">
      <SectionHeading
        title="Awards"
        subtitle="Recognition"
        className="mb-12"
      />
      <ul>
        {awards.map((award) => (
          <li
            key={award.title}
            className="border-b border-[#1e2429] py-10 first:pt-0"
          >
            <h3 className="type-h3 text-[#E8EDF2]">{award.title}</h3>
            <p className="type-label mt-3 normal-case tracking-wide">{award.org}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
