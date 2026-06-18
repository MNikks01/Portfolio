// Founder journey timeline. Mirrors docs/career/founder-journey.md.
import {
  Handshake,
  Code2,
  Boxes,
  Rocket,
  Building2,
  Sparkles,
} from "lucide-react";

export type Chapter = {
  phase: string;
  title: string;
  color: string;
  icon: typeof Handshake;
  body: string;
  takeaway: string;
};

export const chapters: Chapter[] = [
  {
    phase: "Chapter 01 · Business",
    title: "Business Development Manager",
    color: "#EC4899",
    icon: Handshake,
    body: "I didn't start in code — I started in the market. Selling, negotiating, and sitting across the table from customers taught me what businesses actually pay for and where they hurt.",
    takeaway:
      "Learned to listen to customer problems before proposing solutions.",
  },
  {
    phase: "Chapter 02 · The Pivot",
    title: "Moved Into Software Development",
    color: "#22D3EE",
    icon: Code2,
    body: "I kept seeing problems that software could solve — so I taught myself to build it. React, then the full MERN stack, learned end-to-end while shipping real things.",
    takeaway:
      "Turned business intuition into the ability to build the solution myself.",
  },
  {
    phase: "Chapter 03 · Building",
    title: "Started Building Products",
    color: "#00D4FF",
    icon: Boxes,
    body: "Not features in someone else's roadmap — whole products. Frontend, backend, database, deployment. I learned what it takes to take an idea from zero to something people can use.",
    takeaway: "Owned products end-to-end, not isolated tickets.",
  },
  {
    phase: "Chapter 04 · Founder",
    title: "Founded ConnectEdApp",
    color: "#8B5CF6",
    icon: Rocket,
    body: "I built and launched an education platform — and ran every side of it. Product, engineering, sales, demos to school administrators, customer discovery, and iterating on real feedback.",
    takeaway:
      "Wore every hat: founder, PM, full-stack engineer, sales, customer success.",
  },
  {
    phase: "Chapter 05 · Senior Engineer",
    title: "Became a Senior Full Stack Engineer",
    color: "#10B981",
    icon: Building2,
    body: "I brought that product-and-customer mindset into senior engineering — architecting distributed systems, accessibility platforms, and developer tooling at scale.",
    takeaway: "Engineering decisions grounded in product and business impact.",
  },
  {
    phase: "Chapter 06 · Now",
    title: "Building AI-Powered Developer Tools",
    color: "#00D4FF",
    icon: Sparkles,
    body: "Today I'm building AI-native systems — MCP servers, agentic workflows, and tools like Ignix UI — compounding everything I've learned across business, product, and engineering.",
    takeaway: "Using AI as leverage to build faster and ship more.",
  },
];
