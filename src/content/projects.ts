// Project cards. Mirrors docs/projects/*.md + docs/projects/project-index.md.
import { Cloud, Server, Sparkles } from "lucide-react";

export type Project = {
  name: string;
  role: string;
  summary: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  icon: typeof Sparkles;
  accent: string;
  architecture: string[];
};

export const projects: Project[] = [
  {
    name: "ConnectEdApp",
    role: "Founder & Full Stack Developer",
    summary:
      "An education platform connecting students, mentors, and institutions — real-time, mobile-first, and built from scratch.",
    tech: [
      "React Native",
      "React",
      "Node.js",
      "GraphQL",
      "Firebase",
      "Socket.IO",
    ],
    metrics: [
      { label: "Users", value: "12K+" },
      { label: "Sessions", value: "80K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    icon: Sparkles,
    accent: "#EC4899",
    architecture: [
      "Mobile",
      "GraphQL Gateway",
      "Auth",
      "Real-time",
      "Firebase",
    ],
  },
  {
    name: "Revize Accessibility Platform",
    role: "Senior Engineer",
    summary:
      "Distributed accessibility scanning system — queue-driven workers, automated audits, and CI-integrated reports.",
    tech: [
      "TurboRepo",
      "Docker",
      "RabbitMQ",
      "PostgreSQL",
      "Redis",
      "CI/CD",
      "AWS",
    ],
    metrics: [
      { label: "Pages/Day", value: "10K+" },
      { label: "Workers", value: "24" },
      { label: "Avg Latency", value: "180ms" },
    ],
    icon: Server,
    accent: "#00D4FF",
    architecture: [
      "Client",
      "API Gateway",
      "Queue",
      "Scanner Workers",
      "Postgres",
      "Redis",
    ],
  },
  {
    name: "Ignix UI",
    role: "Creator",
    summary:
      "AI-native component registry. MCP-driven workflows install, customize, and document components inside your editor.",
    tech: ["MCP", "AI Integration", "CLI Tooling", "TypeScript", "Registry"],
    metrics: [
      { label: "Components", value: "60+" },
      { label: "Installs", value: "5K+" },
      { label: "DX Score", value: "A+" },
    ],
    icon: Cloud,
    accent: "#8B5CF6",
    architecture: ["Editor", "MCP", "Registry API", "Codegen", "Docs"],
  },
];
