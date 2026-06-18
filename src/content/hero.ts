// Content for the Hero section. Mirrors docs/portfolio/hero-section.md.

export const badges = [
  "5+ Years Experience",
  "MERN",
  "Node.js",
  "AWS",
  "Docker",
  "AI Engineering",
];

export type FloatingTech = {
  label: string;
  color: string;
  x: string;
  y: string;
  delay: number;
};

export const floatingTech: FloatingTech[] = [
  { label: "React", color: "#22D3EE", x: "8%", y: "20%", delay: 0 },
  { label: "Next.js", color: "#94A3B8", x: "82%", y: "18%", delay: 0.2 },
  { label: "Node.js", color: "#10B981", x: "12%", y: "70%", delay: 0.4 },
  { label: "AWS", color: "#F59E0B", x: "84%", y: "62%", delay: 0.6 },
  { label: "Docker", color: "#00D4FF", x: "50%", y: "8%", delay: 0.8 },
  { label: "MCP", color: "#EC4899", x: "50%", y: "84%", delay: 1.0 },
];
