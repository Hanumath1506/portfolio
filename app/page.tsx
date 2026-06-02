import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="page-main">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Publications />
      <Awards />
      <Contact />
    </main>
  );
}
