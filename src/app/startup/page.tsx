import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Startup — ConnectEdApp",
  description:
    "ConnectEdApp — the founder case study: an education platform built and shipped end-to-end, from product to architecture to launch.",
  alternates: { canonical: "/startup" },
};

export default function StartupPage() {
  return <CaseStudy />;
}
