export default function Hero() {
  return (
    <section className="section-container stitch-section relative flex min-h-[819px] flex-col justify-center">
      <div className="max-w-3xl">
        <h1 className="hero-reveal type-display mb-6 text-[#E8EDF2]">
          Hanu Mandadi
        </h1>
        <div className="hero-reveal hero-reveal-delay">
          <p className="type-label-md tracking-[0.2em] text-[#7EB8D4]">
            data science · full-stack · ml · nlp
          </p>
        </div>
        <div className="hero-reveal hero-reveal-delay mt-4">
          <p className="type-label-md tracking-[0.15em] text-[#4A5568]">
            open to ML engineering & data science roles
          </p>
        </div>
      </div>
    </section>
  );
}
