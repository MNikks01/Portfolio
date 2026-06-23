import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The full stack I build with — frontend, backend, data, DevOps, AI engineering, mobile, and tooling.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return <Skills />;
}
