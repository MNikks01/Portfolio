import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — hiring, collaboration, or just to talk shop. Senior Full Stack / Product / AI Engineer.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
