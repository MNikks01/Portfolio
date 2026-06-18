import Hero from "@/components/Hero";
import FounderJourney from "@/components/FounderJourney";
import BusinessEngineering from "@/components/BusinessEngineering";
import Skills from "@/components/Skills";
import SystemArchitect from "@/components/SystemArchitect";
import Experience from "@/components/Experience";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import BuildingNow from "@/components/BuildingNow";
import AISection from "@/components/AISection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
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
      <FounderJourney />
      <BusinessEngineering />
      <Skills />
      <SystemArchitect />
      <Experience />
      <CaseStudy />
      <Projects />
      <BuildingNow />
      <AISection />
      <WhyWorkWithMe />
      <Stats />
      <Contact />
    </>
  );
}
