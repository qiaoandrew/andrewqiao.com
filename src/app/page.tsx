import Hero from '@/components/sections/home/Hero';
import Projects from '@/components/sections/home/Projects';
import Experiences from '@/components/sections/home/Experiences';
import About from '@/components/sections/home/About';
import Contact from '@/components/sections/home/Contact';
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
