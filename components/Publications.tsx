import SectionHeading from '@/components/SectionHeading';

const publications = [
  {
    date: 'Mar 2026',
    title:
      'A Multi-Institutional Digital Twin and AI Educational Platform for Advanced Microelectronics Fabrication and Device Packaging Training',
    venue: 'Journal of Advanced Technological Education',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="section-container stitch-section">
      <SectionHeading title="Publications" subtitle="In print" className="mb-12" />
      {publications.map((pub) => (
        <article key={pub.title} className="max-w-3xl border-b border-[#1e2429] pb-12">
          <p className="type-label mb-4">{pub.date}</p>
          <h3 className="type-h3 leading-snug text-[#E8EDF2]">{pub.title}</h3>
          <p className="type-label-md mt-5 text-[#4A9B7F]">{pub.venue}</p>
        </article>
      ))}
    </section>
  );
}
