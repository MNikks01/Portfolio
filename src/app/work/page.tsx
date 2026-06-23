import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Shipped products — the Revize accessibility platform, Ignix UI, and more. (The ConnectEdApp founder case study lives under Startup.)",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <Projects />;
}
