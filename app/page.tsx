import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ExperienceEducation from '@/components/ExperienceEducation';
import Publications from '@/components/Publications';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="page-shell">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ExperienceEducation />
        <Publications />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
