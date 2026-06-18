// "What I'm building now" cards. Mirrors docs/portfolio/homepage-content.md.
import { Boxes, Plug, Bot, Palette, Workflow, Sparkles } from "lucide-react";

export type BuildingItem = {
  icon: typeof Boxes;
  title: string;
  color: string;
  desc: string;
};

export const items: BuildingItem[] = [
  {
    icon: Boxes,
    title: "Ignix UI",
    color: "#8B5CF6",
    desc: "An AI-native component registry — install, customize, and document components directly inside your editor via MCP.",
  },
  {
    icon: Plug,
    title: "MCP Servers",
    color: "#00D4FF",
    desc: "Model Context Protocol servers that expose tools, data, and workflows to AI agents — the API layer for the AI era.",
  },
  {
    icon: Bot,
    title: "AI Developer Tools",
    color: "#EC4899",
    desc: "Tooling that wires LLMs into real engineering workflows: code review, scaffolding, and codegen that respects taste.",
  },
  {
    icon: Palette,
    title: "Modern UI Systems",
    color: "#22D3EE",
    desc: "Design systems and animated, accessible interfaces built for speed, consistency, and developer experience.",
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    color: "#10B981",
    desc: "Autonomous workflows that plan, execute, and verify — wired into queues, CI, and human-in-the-loop gates.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Development",
    color: "#F59E0B",
    desc: "Compounding leverage with Claude and Cursor — shipping more, faster, without lowering the engineering bar.",
  },
];
