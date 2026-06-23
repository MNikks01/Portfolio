import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience — roles, impact, and the systems I've shipped as a senior full stack and AI engineer.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return <Experience />;
}
