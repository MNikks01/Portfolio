// "What I'm building now" cards. Mirrors docs/portfolio/homepage-content.md.
import {
  Layers,
  Brain,
  Server,
  Gauge,
  Rocket,
  Network,
  Store,
  BookOpen,
  Telescope,
} from "lucide-react";

export type BuildingItem = {
  icon: typeof Layers;
  title: string;
  color: string;
  desc: string;
};

export const items: BuildingItem[] = [
  {
    icon: Layers,
    title: "ContextOS",
    color: "#8B5CF6",
    desc: "An AI developer workspace — the persistent, governed context layer that follows your team across editors, agents, and CI. Tool-agnostic, MCP-native, with observability built in.",
  },
  {
    icon: Brain,
    title: "Codebase Intelligence",
    color: "#00D4FF",
    desc: "A team-grade codebase brain: AST-aware retrieval with citations, auto-generated living docs and architecture maps, and impact analysis — queryable by any agent over MCP.",
  },
  {
    icon: Server,
    title: "MCP Server Generator",
    color: "#EC4899",
    desc: "Turn an API, Postgres, GraphQL, or codebase into a production-ready MCP server — with auth, rate limits, validation, injection-aware tool descriptions, observability, and one-click deploy.",
  },
  {
    icon: Gauge,
    title: "Agent Monitoring",
    color: "#22D3EE",
    desc: "Agent-trajectory observability: multi-step plan and tool-call tracing, a failure-mode taxonomy, an eval harness, and cost-per-task attribution — framework-agnostic.",
  },
  {
    icon: Rocket,
    title: "AI Project Bootstrapper",
    color: "#10B981",
    desc: "Scaffolds that are production-grade and agent-ready out of the box — CLAUDE.md, AGENTS.md, evals, MCP config, guardrails, and CI pre-wired so AI apps start right.",
  },
  {
    icon: Network,
    title: "System Design Assistant",
    color: "#F59E0B",
    desc: "An interactive AI co-architect that produces diagrams, ADRs, and tradeoff analysis grounded in your actual codebase — with persistent design memory, not generic advice.",
  },
  {
    icon: Store,
    title: "Agent Marketplace",
    color: "#3B82F6",
    desc: "A curated, monetized marketplace for agents, MCP servers, and workflows — security-reviewed listings, one-click install into real workflows, and usage-based revenue share.",
  },
  {
    icon: BookOpen,
    title: "DocsHub",
    color: "#0EA5E9",
    desc: "A reading-first documentation & knowledge SaaS — structured docs, setup guides, an AI-tools directory, and a blog. Freemium with page, bundle, and offline downloads.",
  },
  {
    icon: Telescope,
    title: "AI Research Assistant",
    color: "#A855F7",
    desc: "An agentic research assistant that plans queries, searches across sources, and synthesizes structured, cited reports — autonomous deep research you can trust and trace.",
  },
];
