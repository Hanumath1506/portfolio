import SectionHeading from '@/components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-container stitch-section">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-4 md:col-start-1">
          <SectionHeading title="About" subtitle="The context" />
        </div>
        <div className="space-y-6 md:col-span-7 md:col-start-6">
          <p className="type-body">
            Undergraduate at Rutgers double-majoring in Data Science and Computer
            Science. I build and deploy full-stack ML systems—from RAG research
            assistants and cricket analytics platforms to NLP pipelines and VR
            digital twins—and care about turning data into tools people actually
            use.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#1e2429] pt-12">
            <div>
              <div className="type-label mb-3">Location</div>
              <div className="font-sans text-base text-[#E8EDF2]">Plainsboro, NJ</div>
            </div>
            <div>
              <div className="type-label mb-3">Education</div>
              <div className="font-sans text-base text-[#E8EDF2]">Rutgers &apos;27</div>
            </div>
            <div>
              <div className="type-label mb-3">Academics</div>
              <div className="font-sans text-base text-[#E8EDF2]">Dean&apos;s List</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
