import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Shipped products and a deep-dive case study — ConnectEdApp, the Revize accessibility platform, and Ignix UI.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <CaseStudy />
      <Projects />
    </>
  );
}
