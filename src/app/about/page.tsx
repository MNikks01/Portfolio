import type { Metadata } from "next";
import FounderJourney from "@/components/FounderJourney";
import BusinessEngineering from "@/components/BusinessEngineering";
import SystemArchitect from "@/components/SystemArchitect";
import AISection from "@/components/AISection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";

export const metadata: Metadata = {
  title: "About",
  description:
    "The founder journey, product thinking, and how I build systems — full stack, backend architecture, DevOps, and AI engineering.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <FounderJourney />
      <BusinessEngineering />
      <SystemArchitect />
      <AISection />
      <WhyWorkWithMe />
    </>
  );
}
