import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experiences from '@/components/sections/Experiences';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/navigation/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experiences />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
