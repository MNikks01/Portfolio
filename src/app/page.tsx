import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AISection from "@/components/AISection";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import GridBackground from "@/components/GridBackground";
import Marquee from "@/components/Marquee";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <GridBackground />
      <ParticleBackground />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AISection />
      <Stats />
      <Contact />
    </>
  );
}
