// The "Building" project family — an AI-developer platform plus a knowledge SaaS.
// Mirrors docs/projects/*.md (source of truth) and docs/portfolio/homepage-content.md.
// Card views read the summary fields; /building/[slug] detail pages read everything.
import {
  Layers,
  Brain,
  Server,
  Gauge,
  Rocket,
  Network,
  Store,
  BookOpen,
} from "lucide-react";

export type ProjectStatus = "Active" | "Building" | "Planned";

export type BuildingProject = {
  slug: string;
  name: string;
  tagline: string; // short card description
  oneLiner: string; // the repo's headline quote
  category: string;
  color: string;
  icon: typeof Layers;
  status: ProjectStatus;
  statusNote: string; // what actually exists today
  projectNo: string; // e.g. "#1 · Flagship"
  difficulty: string;
  timeToMvp: string;
  repoUrl: string;
  thesisRole: string; // role in the platform family
  summary: string[]; // executive summary paragraphs
  problem: string[];
  whatItIs: string[];
  features: { title: string; desc: string }[];
  techStack: string[];
  model: string[]; // business / open-source model
  differentiators: string[];
  roadmap: { stage: string; detail: string }[];
};

const GH = "https://github.com/MNikks01";

export const projects: BuildingProject[] = [
  {
    slug: "contextos",
    name: "ContextOS",
    tagline:
      "The context & governance OS for AI-assisted engineering teams — persistent shared memory across every tool, agent, and teammate.",
    oneLiner:
      "Team memory and a control plane for AI-assisted engineering — so your tools, agents, and teammates never lose the plot, and you can see, govern, and trust everything the AI does.",
    category: "AI developer workspace",
    color: "#8B5CF6",
    icon: Layers,
    status: "Building",
    statusNote:
      "Context Handoff engine + MCP server working (pure TypeScript, 15/15 tests). Apache-2.0.",
    projectNo: "#1 · Flagship",
    difficulty: "High",
    timeToMvp: "3–4 months (assembled from #2 + #3)",
    repoUrl: `${GH}/contextos`,
    thesisRole:
      "The hub. Absorbs the Codebase Intelligence (#2) and MCP Generator (#3) engines and adds the memory, governance, and observability layer around them.",
    summary: [
      "Every engineering org in 2026 has adopted AI coding tools, but the tools are amnesiac and solitary: each session starts cold, each tool keeps private context, and the institutional knowledge AI needs to be correct lives in human heads and stale wikis.",
      "ContextOS is the context layer and control plane that sits around the AI tools teams already use — persistent shared memory, codebase intelligence, an MCP integration hub, and governance + observability, all in one place.",
    ],
    problem: [
      "Teams have superhuman code-generation capacity but subhuman code-understanding continuity. AI repeats known mistakes, new hires and agents ramp slowly, AI spend is invisible and unbounded, and nobody can govern or audit what the AI actually did.",
      "The model is a rented commodity and the editor is a crowded battlefield. The durable, defensible asset is the team's accumulated context and the controls around it — which IDE and model vendors are structurally disincentivized to make portable.",
    ],
    whatItIs: [
      "A multi-tenant SaaS plus a thin local layer (CLI + MCP server) organized as five planes: a memory plane (versioned institutional knowledge), a knowledge plane (codebase understanding, reuses #2), an integration plane (MCP hub, reuses #3), an orchestration plane (context-loaded AI chat/workflows/agents), and a control plane (RBAC, audit, policy, billing).",
      "The flagship workflow is the Context Handoff: corrections a developer makes in one tool are captured, reviewed, and stored as durable context, so the next session — any tool, teammate, or agent — starts warm and never re-makes the corrected mistake.",
    ],
    features: [
      {
        title: "Persistent shared memory",
        desc: "A living store of architecture, decisions (ADRs), conventions, glossary, and history any AI tool or agent can load.",
      },
      {
        title: "Context Handoff",
        desc: "Export a team's context from one session/tool and restore it into another (Cursor → Claude Code → CI agent) so AI always starts warm.",
      },
      {
        title: "Grounded codebase intelligence",
        desc: "Retrieval-grounded answers with file:line citations, reusing the Codebase Intelligence engine (#2).",
      },
      {
        title: "MCP integration hub",
        desc: "One governed place to connect GitHub, Notion, Jira/Linear, Slack, and databases via MCP, with central auth, scopes, and rate limits.",
      },
      {
        title: "Governance + observability",
        desc: "RBAC, audit logs, spend caps, guardrails (prompt-injection defense, PII redaction, human-in-the-loop), and full cost/quality observability.",
      },
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL + pgvector",
      "Model Context Protocol",
      "Local CLI + MCP server",
      "RBAC + audit",
    ],
    model: [
      "Open-core: an Apache-2.0 engine (Context Handoff + MCP server) feeds a proprietary multi-tenant SaaS.",
      "Bottom-up PLG (free Context Handoff) → paid Team tier → Enterprise governance (SSO/SAML, on-prem/VPC).",
    ],
    differentiators: [
      "Tool-agnostic and portable on purpose — the moat is accumulated context + governance, not hostage data.",
      "Optimizes the cumulative correctness and governance of all AI work over time, not the next single completion.",
      "The connective tissue no incumbent owns together: not just an IDE, a wiki, an agent, or LLM-call observability.",
    ],
    roadmap: [
      {
        stage: "MVP",
        detail:
          "Auth, billing, project workspace, context store + memory, Context Handoff, AI Q&A grounded in code, basic analytics.",
      },
      {
        stage: "V1",
        detail:
          "Teams, RBAC, shared context, collaboration, observability, search, living auto-docs.",
      },
      {
        stage: "V2",
        detail:
          "MCP integration hub, agent runtime + observability, automation/workflows, guardrails console, enterprise controls.",
      },
      {
        stage: "V3",
        detail:
          "SSO/SAML/SCIM, on-prem/VPC, advanced governance, multi-org, marketplace GA.",
      },
    ],
  },
  {
    slug: "codebase-intelligence",
    name: "Codebase Intelligence",
    tagline:
      "Deep, queryable understanding of any codebase — grounded answers with citations, living docs, and impact analysis, over API + MCP.",
    oneLiner:
      "The brain that actually understands your code — searchable, explainable, and queryable by humans and agents alike.",
    category: "Codebase understanding",
    color: "#00D4FF",
    icon: Brain,
    status: "Building",
    statusNote:
      "Real evaluated RAG-over-code engine working (recall@3 = 100%, MRR 0.818 → 0.864 with re-ranker). Apache-2.0.",
    projectNo: "#2 · Core engine",
    difficulty: "High",
    timeToMvp: "2–3 months",
    repoUrl: `${GH}/codebase-intelligence`,
    thesisRole:
      "The substrate and technical center of gravity. Master RAG-over-code once, power three products (ContextOS #1 and System Design Assistant #6 reuse it).",
    summary: [
      "A platform that ingests a codebase and builds rich, retrievable understanding of it: semantic + lexical search, grounded Q&A, automatically maintained documentation and architecture maps, and impact analysis.",
      "It is the RAG-over-code engine — the hardest, most defensible piece of the whole family — exposed as an API and an MCP server so any tool or agent can use it.",
    ],
    problem: [
      "'Talk to your codebase' is validated, hot demand, but most tools are shallow — naive chunking, weak cross-file reasoning, no governance.",
      "Onboarding, code understanding, and impact analysis are universal, expensive pains across large, legacy, and polyrepo codebases.",
    ],
    whatItIs: [
      "An ingest → AST-chunk → embed → hybrid-retrieve → graph-expand → re-rank → cite/answer pipeline backed by pgvector + full-text search and a symbol/dependency graph in Postgres.",
      "Connected via a GitHub App; answers come back grounded with file:line citations, plus auto-generated docs and architecture maps that stay in sync with the code.",
    ],
    features: [
      {
        title: "Grounded Q&A with citations",
        desc: "Ask 'how does auth work here?' and get answers grounded in real code with file:line citations — or an honest 'I don't know'.",
      },
      {
        title: "Hybrid retrieval + re-ranking",
        desc: "AST-aware chunking, semantic + keyword search, import-graph expansion, and a re-ranker for high answer fidelity.",
      },
      {
        title: "Living docs & architecture maps",
        desc: "Automatically maintained documentation and diagrams derived from the code, so they can't drift.",
      },
      {
        title: "Impact / blast-radius analysis",
        desc: "'What breaks if I change this function?' across files and repos.",
      },
      {
        title: "API + MCP server",
        desc: "Every capability is exposed so any tool or agent can query the codebase.",
      },
    ],
    techStack: [
      "TypeScript",
      "PostgreSQL + pgvector",
      "Full-text search",
      "AST chunking + symbol graph",
      "Embeddings + re-ranker",
      "GitHub App",
      "MCP server",
    ],
    model: [
      "Open-core: an Apache-2.0 retrieval engine with evals in CI, behind an API + SaaS.",
      "Team and Enterprise tiers (multi-repo, RBAC, on-prem/VPC) layered on the engine.",
    ],
    differentiators: [
      "Over-invests in retrieval quality — evaluated in CI (recall@k, MRR), 'I don't know' over hallucination.",
      "API/MCP-first and shared/governed, unlike per-user, editor-bound '@codebase' indexes.",
      "Deeper than editor indexes, lighter to adopt than heavy enterprise code-intelligence suites.",
    ],
    roadmap: [
      {
        stage: "MVP",
        detail:
          "Connect repo, index, semantic + keyword search, grounded Q&A with file:line citations, auto repo summary.",
      },
      {
        stage: "V1",
        detail:
          "Teams/RBAC, living auto-docs, architecture diagrams, multi-repo, impact analysis.",
      },
      {
        stage: "V2",
        detail:
          "Agents (codebase Q&A, PR review), MCP server, automation, enterprise controls.",
      },
      {
        stage: "V3",
        detail:
          "On-prem/VPC, SSO, advanced governance, org-wide knowledge graph.",
      },
    ],
  },
  {
    slug: "mcp-server-generator",
    name: "MCP Server Generator",
    tagline:
      "Turn any API into a production-ready, well-described MCP server in minutes — secure-by-default, not a toy.",
    oneLiner:
      "The fastest way to make any API callable by AI — production-ready MCP servers, generated.",
    category: "MCP tooling",
    color: "#EC4899",
    icon: Server,
    status: "Active",
    statusNote:
      "Active build (MCPForge). Generation engine + CLI + Next.js web app with Stripe wiring. Apache-2.0.",
    projectNo: "#3 · Wedge (build first)",
    difficulty: "Medium",
    timeToMvp: "30 days (solo-dev MVP)",
    repoUrl: `${GH}/mcp-server-generator`,
    thesisRole:
      "Top-of-funnel and the MCP teacher. Every generated server is a lead for #2 and #1; it teaches the MCP layer the whole family depends on.",
    summary: [
      "A developer with an API wants an AI agent (Claude, Cursor) to use it via MCP. Doing that by hand is a half-day to days of boilerplate — transport, auth, validation, and the hard part: tool descriptions good enough that the model calls tools correctly.",
      "MCPForge automates it: paste an OpenAPI spec, pick endpoints, and download a secure-by-default, well-described, runnable MCP server in under three minutes.",
    ],
    problem: [
      "Official SDKs and boilerplate require manual wiring; OpenAPI→tool converters are generic, not MCP-idiomatic, and ship no auth, hosting, or observability.",
      "Most generators produce toy servers, not safe ones — and they skip the tool descriptions, which is exactly the part LLMs need most.",
    ],
    whatItIs: [
      "A generation engine + CLI (zero-dependency TypeScript) and a Next.js web app: paste a spec, preview, and download a ZIP with a runnable TypeScript MCP server, auth scaffolding, Zod validation, README, and mcp.json.",
      "Free to generate; Pro unlocks unlimited endpoints, premium tool descriptions, GitHub push, and history; a done-for-you setup is the fastest path to first revenue.",
    ],
    features: [
      {
        title: "OpenAPI → MCP server",
        desc: "Paste a spec, pick endpoints, download a runnable TypeScript MCP server in under three minutes.",
      },
      {
        title: "Great tool descriptions",
        desc: "LLM-generated tool descriptions tuned so the model calls tools correctly — the hardest, highest-value part.",
      },
      {
        title: "Secure by default",
        desc: "Auth scaffolding, Zod input validation, and sane defaults baked into every generated server.",
      },
      {
        title: "Runs where agents run",
        desc: "Generated servers run in Claude Desktop / Cursor; mcp.json + README included.",
      },
      {
        title: "Pro: push & history",
        desc: "Unlimited endpoints, premium descriptions, one-click GitHub push, and generation history.",
      },
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind + shadcn/ui",
      "@modelcontextprotocol/sdk",
      "@apidevtools/swagger-parser",
      "Anthropic SDK",
      "Zod + jszip",
      "Postgres (Neon) + Drizzle",
      "Clerk · Stripe · Octokit",
    ],
    model: [
      "Freemium: free generation; Pro subscription (unlimited endpoints, premium descriptions, GitHub push).",
      "Done-for-you setup as the fastest path to first paying customer; runs on free tiers.",
    ],
    differentiators: [
      "Production-ready, secure-by-default output — not toy servers.",
      "Generates the tool descriptions that determine whether an LLM uses the API correctly.",
      "Cheapest to ship, fastest to value, most shareable product in the family — and a lead source for the rest.",
    ],
    roadmap: [
      {
        stage: "MVP",
        detail:
          "OpenAPI → TS MCP server, LLM tool descriptions, auth scaffold, Zod validation, preview + ZIP, Free/Pro + Stripe, GitHub push.",
      },
      {
        stage: "Next",
        detail:
          "Postgres/GraphQL/codebase inputs, hosting/runtime, premium description tiers.",
      },
      {
        stage: "Later",
        detail: "Teams, observability, sandboxes, Python output.",
      },
      {
        stage: "Platform",
        detail:
          "Feeds servers into ContextOS (#1) and the Agent Marketplace (#7).",
      },
    ],
  },
  {
    slug: "agent-monitoring",
    name: "Agent Monitoring Platform",
    tagline:
      "Datadog for AI agents — trace every trajectory, score quality, attribute cost-per-task, and catch failures before customers do.",
    oneLiner:
      "Observability and evals for AI agents — see what they do, why they fail, and what they cost.",
    category: "Agent observability",
    color: "#22D3EE",
    icon: Gauge,
    status: "Building",
    statusNote:
      "Framework-agnostic recording SDK + engine working (trajectories, cost, failure taxonomy, alerts; 14 tests). Apache-2.0.",
    projectNo: "#4",
    difficulty: "Medium-High",
    timeToMvp: "2–3 months",
    repoUrl: `${GH}/agent-monitoring-platform`,
    thesisRole:
      "The reliability layer. Ships standalone and as a ContextOS module; gives the Agent Marketplace its trust signals.",
    summary: [
      "A platform to monitor, debug, evaluate, and cost AI agents in production: trajectory traces (reason → tool → observe steps), a failure taxonomy, an eval harness (golden tasks + LLM-as-judge), cost-per-task, and replay.",
      "Framework-agnostic across LangGraph, CrewAI, the OpenAI SDK, and the Claude Agent SDK via an SDK + OpenTelemetry.",
    ],
    problem: [
      "Everyone is shipping agents; almost no one can see what they do, why they fail, or what they cost.",
      "LLM-call observability exists (LangSmith, Langfuse, Helicone) but true agent-trajectory observability + evals is under-served.",
    ],
    whatItIs: [
      "A recording SDK instruments an agent; spans flow over OpenTelemetry into ingest and Postgres, then surface as a trajectory viewer, an eval harness, cost-per-task, and a failure taxonomy.",
      "Built for the family's own agents first, then sold — standalone and as a ContextOS module.",
    ],
    features: [
      {
        title: "Trajectory tracing",
        desc: "Full reason → llm → tool trajectories, not just isolated LLM calls.",
      },
      {
        title: "Eval harness",
        desc: "Golden tasks + LLM-as-judge scoring, with regression gates in CI.",
      },
      {
        title: "Failure taxonomy",
        desc: "Classify and aggregate failure modes so you can fix the common ones first.",
      },
      {
        title: "Cost-per-task",
        desc: "Attribute spend to tasks, agents, and model mix — not just raw token counts.",
      },
      {
        title: "Framework-agnostic SDK",
        desc: "LangGraph / CrewAI / OpenAI / Claude SDK via an SDK + OpenTelemetry; replay + alerts.",
      },
    ],
    techStack: [
      "TypeScript",
      "OpenTelemetry",
      "PostgreSQL",
      "Recording SDK",
      "LLM-as-judge evals",
      "Framework adapters",
    ],
    model: [
      "Open-core: an Apache-2.0 recording SDK + engine, behind a usage-priced SaaS.",
      "Standalone product and a ContextOS module; Team/Enterprise tiers add RBAC, CI gates, on-prem.",
    ],
    differentiators: [
      "Agent-trajectory observability (multi-step plans, tool-call graphs) versus LLM-call logging.",
      "Evals + failure taxonomy + cost attribution in one place.",
      "Framework-agnostic — not tied to one orchestration library.",
    ],
    roadmap: [
      {
        stage: "MVP",
        detail:
          "SDK + ingest, trajectory traces, basic dashboards, cost tracking, alerts.",
      },
      {
        stage: "V1",
        detail:
          "Eval harness (golden tasks, LLM-judge), failure taxonomy, replay, teams/RBAC.",
      },
      {
        stage: "V2",
        detail:
          "Framework integrations, regression gates in CI, ContextOS module, enterprise.",
      },
      { stage: "V3", detail: "On-prem, SSO, advanced evals, benchmarks." },
    ],
  },
  {
    slug: "ai-project-bootstrapper",
    name: "AI Project Bootstrapper",
    tagline:
      "Spin up production-grade, AI-ready repositories in minutes — auth, billing, CI, observability, and agent-context files pre-wired.",
    oneLiner:
      "Production-grade, AI-agent-ready project scaffolds — generated, not hand-wired every time.",
    category: "AI app scaffolding",
    color: "#10B981",
    icon: Rocket,
    status: "Building",
    statusNote:
      "Generation engine + CLI working (template + feature toggles → full repo with agent-context files). Apache-2.0.",
    projectNo: "#5",
    difficulty: "Low-Medium",
    timeToMvp: "3–4 weeks",
    repoUrl: `${GH}/project-bootstrapper`,
    thesisRole:
      "The on-ramp. New projects start agent-ready and pre-connected to the platform; best as a ContextOS feature rather than a standalone company.",
    summary: [
      "A generator (CLI + web) that produces complete, production-ready project scaffolds — not just create-next-app, but the full opinionated stack the family uses, AI-agent-ready out of the box.",
      "Optionally AI-customized from a natural-language brief.",
    ],
    problem: [
      "Starting a production AI app means days of boilerplate every time; existing scaffolders (create-*, v0, bolt) are either too basic or non-production.",
      "Honest take: scaffolding is commoditized, so its real value is internal reuse + a ContextOS feature + a funnel/brand asset — not a standalone company.",
    ],
    whatItIs: [
      "Turn a spec (template + feature toggles: auth/billing/rag/mcp/docker/ci) into a complete, AI-agent-ready project: code plus CLAUDE.md / AGENTS.md / mcp.json plus CI and Docker.",
      "Then push to GitHub or download — a project that starts right instead of accruing the same setup debt.",
    ],
    features: [
      {
        title: "Opinionated production stack",
        desc: "Next.js + NestJS + Postgres/pgvector + Stripe + OTel + Docker + GitHub Actions, not a bare starter.",
      },
      {
        title: "Agent-ready out of the box",
        desc: "CLAUDE.md, AGENTS.md, and mcp.json pre-wired so AI tools understand the repo on day one.",
      },
      {
        title: "Feature toggles",
        desc: "Switch on auth, billing, RAG, MCP, Docker, and CI per project.",
      },
      {
        title: "NL-brief customization",
        desc: "Optionally AI-customize the scaffold from a natural-language description.",
      },
      {
        title: "Push or download",
        desc: "One-click GitHub push or local download; CLI and web.",
      },
    ],
    techStack: [
      "TypeScript",
      "CLI + web generator",
      "Next.js + NestJS templates",
      "PostgreSQL + pgvector",
      "Stripe · OpenTelemetry",
      "Docker · GitHub Actions",
    ],
    model: [
      "Open-core / mostly free (scaffolding is commoditized); monetized as a ContextOS feature and funnel.",
      "Future: custom org templates and golden-path enforcement for teams/enterprise.",
    ],
    differentiators: [
      "Production-grade AND AI-agent-ready out of the box, versus basic or non-production scaffolders.",
      "Standardizes a whole org's 'golden path' for starting projects.",
      "Falls out of building the family's own repos — proven, not theoretical.",
    ],
    roadmap: [
      {
        stage: "MVP",
        detail:
          "CLI + curated templates (AI SaaS starter), agent-context files, CI/Docker, GitHub push.",
      },
      {
        stage: "V1",
        detail:
          "Web UI, feature toggles (auth/billing/RAG/MCP), NL-brief AI customization, teams.",
      },
      {
        stage: "V2",
        detail:
          "Custom org templates, golden-path enforcement, ContextOS integration.",
      },
      {
        stage: "V3",
        detail: "Enterprise standards/governance, private template registry.",
      },
    ],
  },
  {
    slug: "system-design-assistant",
    name: "System Design Assistant",
    tagline:
      "Your AI co-architect — interactive system design, diagrams, ADRs, and tradeoff analysis grounded in your codebase.",
    oneLiner:
      "An AI co-architect that designs with you — diagrams, ADRs, and tradeoffs, grounded in your real code.",
    category: "AI co-architect",
    color: "#F59E0B",
    icon: Network,
    status: "Building",
    statusNote:
      "Engine working: Mermaid diagrams, ADR drafting, weighted tradeoff analysis, design memory, interview grading. Apache-2.0.",
    projectNo: "#6",
    difficulty: "Medium",
    timeToMvp: "4–6 weeks",
    repoUrl: `${GH}/system-design-assistant`,
    thesisRole:
      "A grounded module. Reuses Codebase Intelligence (#2) for grounding; ships as a ContextOS module plus a standalone interview-prep product.",
    summary: [
      "An assistant that helps engineers design systems: generate and iterate on architecture diagrams (Mermaid/diagram-as-code), produce ADRs, reason about tradeoffs (scaling, consistency, cost), and — uniquely — ground designs in the actual codebase via Codebase Intelligence (#2).",
      "Plus a prosumer interview-prep mode: practice system-design interviews with an AI interviewer/coach.",
    ],
    problem: [
      "System design is high-stakes, under-tooled, and AI-assistable. Generic chatbots give unstructured advice with no persistence; diagram tools don't reason.",
      "Grounding design in real code, not generic patterns, is the differentiator.",
    ],
    whatItIs: [
      "Pose a design problem; optionally ground it in your codebase (#2), reason through tradeoffs and options, and emit a Mermaid diagram + an ADR + a tradeoff analysis — then persist it as design memory you can iterate on.",
      "Two distinct revenue pools — enterprise architecture and interview prep — de-risk it.",
    ],
    features: [
      {
        title: "Diagram generation",
        desc: "Generate and iterate on architecture diagrams as Mermaid / diagram-as-code.",
      },
      {
        title: "ADR drafting",
        desc: "Produce Architecture Decision Records that become the team's design record.",
      },
      {
        title: "Tradeoff analysis",
        desc: "Weighted reasoning about scaling, consistency, and cost — not generic advice.",
      },
      {
        title: "Codebase-grounded",
        desc: "Ground designs in your real architecture via Codebase Intelligence (#2).",
      },
      {
        title: "Interview-prep mode",
        desc: "Practice system-design interviews with an AI interviewer/coach that grades answers.",
      },
    ],
    techStack: [
      "TypeScript",
      "Mermaid / diagram-as-code",
      "ADR generation",
      "Codebase Intelligence (#2)",
      "Persistent design memory",
      "LLM reasoning",
    ],
    model: [
      "Enterprise architecture tier (teams, shared design memory, export to Confluence/MD).",
      "Prosumer interview-prep subscription — two revenue pools from one engine.",
    ],
    differentiators: [
      "Codebase-grounded design, not generic patterns.",
      "Structured, persistent output (diagrams + ADRs + tradeoffs) versus a chat transcript.",
      "Two markets de-risk it: enterprise architecture and interview prep.",
    ],
    roadmap: [
      {
        stage: "MVP",
        detail:
          "Conversational design, Mermaid diagram generation, ADR drafting, tradeoff analysis, save/iterate.",
      },
      {
        stage: "V1",
        detail:
          "Codebase grounding (#2), design memory, teams, export (Confluence/MD), interview-prep mode.",
      },
      {
        stage: "V2",
        detail:
          "Multi-agent design review, cost/scaling estimators, ContextOS integration.",
      },
      {
        stage: "V3",
        detail: "Enterprise architecture governance, standards, on-prem.",
      },
    ],
  },
  {
    slug: "agent-marketplace",
    name: "Agent Marketplace",
    tagline:
      "A curated, monetized marketplace for AI agents, MCP servers, and workflows — security-reviewed, with creator revenue share.",
    oneLiner:
      "The ecosystem layer on top of the platform — publish, discover, install, and run trusted agents and MCP servers.",
    category: "Marketplace",
    color: "#3B82F6",
    icon: Store,
    status: "Planned",
    statusNote:
      "Engine prototype: listings, discovery, one-click install (mcp.json fragment), ratings, usage metering, revenue share. Build LAST (Year 3).",
    projectNo: "#7 · Build last",
    difficulty: "High (network effects)",
    timeToMvp: "3–4 months (Year 3)",
    repoUrl: `${GH}/agent-marketplace`,
    thesisRole:
      "The monetization flywheel. Built last — it needs ContextOS (#1) for distribution, #3 for supply, and #4 for trust before it can avoid being a ghost town.",
    summary: [
      "A two-sided marketplace: creators publish agents, MCP servers (from #3), and workflows; consumers discover, install (one-click into ContextOS #1), and run them.",
      "Curation + security review + ratings build trust; usage-based revenue share aligns incentives. It turns the platform into an ecosystem.",
    ],
    problem: [
      "Marketplaces are powerful moats (network effects) but suffer cold-start: they need distribution + trust first.",
      "Plugin stores have weak quality control and monetization; MCP registries are listings, not curated, monetized marketplaces.",
    ],
    whatItIs: [
      "Creators publish; listings pass a security + quality review and get ratings, docs, and pricing; consumers discover and one-click install into real workflows, where runs are observed (#4), usage is metered, and creators get a revenue share.",
      "Deliberately built last — after the platform provides distribution, supply, and trust.",
    ],
    features: [
      {
        title: "Curated listings",
        desc: "Agents, MCP servers (from #3), and workflows — security- and quality-reviewed.",
      },
      {
        title: "One-click install",
        desc: "Install into ContextOS (#1) as an mcp.json fragment — straight into real workflows.",
      },
      {
        title: "Trust signals",
        desc: "Ratings, security review, and observability (via #4) make listings trustworthy.",
      },
      {
        title: "Usage metering",
        desc: "Meter usage and compute creator revenue share automatically.",
      },
      {
        title: "Private/org marketplaces",
        desc: "Org-scoped registries, versioning, certification, and creator analytics (later stages).",
      },
    ],
    techStack: [
      "TypeScript",
      "Two-sided marketplace",
      "Security review pipeline",
      "Usage metering + payouts",
      "MCP (mcp.json) install",
      "ContextOS (#1) integration",
    ],
    model: [
      "Usage-based revenue share with creators; take-rate on metered usage.",
      "Future: private/org marketplaces, certification, and an enterprise partner program.",
    ],
    differentiators: [
      "Integrated with ContextOS — one-click install into real workflows, not just a listing.",
      "Security-reviewed listings + observability-backed trust.",
      "Sequenced last so it launches with distribution, supply, and trust already in place.",
    ],
    roadmap: [
      {
        stage: "MVP",
        detail:
          "Listings (MCP servers from #3 + agents), discovery/search, one-click install into #1, ratings.",
      },
      {
        stage: "V1",
        detail:
          "Security review, creator payouts (revenue share), usage metering, versioning.",
      },
      {
        stage: "V2",
        detail:
          "Workflows, private/org marketplaces, certification, creator analytics.",
      },
      {
        stage: "V3",
        detail:
          "Full ecosystem governance, enterprise private registries, partner program.",
      },
    ],
  },
  {
    slug: "docshub",
    name: "DocsHub",
    tagline:
      "A documentation & knowledge SaaS — technical docs, setup guides, an AI-tools directory, and a blog. Reading-first, free + premium.",
    oneLiner:
      "GitHub Docs × MDN × Stripe Docs × Notion — a calm, reading-first knowledge platform, free to read and premium to own.",
    category: "Documentation & knowledge SaaS",
    color: "#0EA5E9",
    icon: BookOpen,
    status: "Building",
    statusNote:
      "Full Turborepo app: public web + admin dashboard, Prisma schema, Auth.js, Stripe, Typesense search, BullMQ jobs, Helm/K8s deploy.",
    projectNo: "Knowledge SaaS",
    difficulty: "Medium-High",
    timeToMvp: "In active development",
    repoUrl: `${GH}/tutorials-web-app`,
    thesisRole:
      "An adjacent knowledge product — a reading-first SaaS that doubles as a top-of-funnel, SEO/AI-discoverable content surface.",
    summary: [
      "A documentation & knowledge SaaS — a product, not a tutorial site. It hosts structured documentation, setup guides, an AI-tools directory, and a blog, with a calm, reading-first experience (GitHub Docs × MDN × Stripe Docs × Notion).",
      "Free users read online and download single pages; paid users download whole categories, PDF bundles, and offline packages. Admins author and organize all content.",
    ],
    problem: [
      "Quality technical knowledge is scattered across blogs, vendor docs, and tutorial sites with inconsistent UX, ads, and poor offline/AI access.",
      "Readers want one trustworthy, navigable, distraction-free place; practitioners want fast setup guides + a current AI-tools directory; the business wants sustainable revenue.",
    ],
    whatItIs: [
      "A Turborepo monorepo with a public reading + SaaS app and an RBAC authoring dashboard, backed by Postgres/Prisma, Auth.js, Stripe, Typesense search, S3 downloads, and a BullMQ job queue.",
      "Four content types: documentation sets → categories → chapters → pages, standalone setup guides, an AI-tools directory, and a blog — all reading-first with book-like navigation, search, bookmarks, and downloads.",
    ],
    features: [
      {
        title: "Reading-first docs",
        desc: "Book-like navigation, TOC, breadcrumbs, search, bookmarks, continue-reading, copy-code, callouts, tabs.",
      },
      {
        title: "AI-tools directory",
        desc: "Curated AI tools with category, pricing, features, latest model, and release date.",
      },
      {
        title: "Setup guides + blog",
        desc: "Standalone task guides (Install Docker, Setup Claude Code…) and a technical blog with newsletter.",
      },
      {
        title: "Freemium downloads",
        desc: "Free single-page downloads; paid category downloads, PDF bundles, and offline packages.",
      },
      {
        title: "Admin authoring",
        desc: "RBAC dashboard to create, organize, and publish docs, guides, the AI-tools DB, and blog, with analytics.",
      },
    ],
    techStack: [
      "Next.js 15 · React 19 · TypeScript",
      "PostgreSQL + Prisma",
      "Auth.js v5 · Stripe",
      "Typesense · Redis (BullMQ)",
      "AWS S3 · Resend",
      "PostHog · Sentry · next-intl",
      "Turborepo + pnpm · Helm/K8s",
    ],
    model: [
      "Free tier: ad-supported + newsletter (SEO/AI top-of-funnel).",
      "Paid subscription: full downloads, offline docs, premium content, ad-free. Future: annual, team/enterprise, partner API.",
    ],
    differentiators: [
      "A product, not a tutorial blog — best-in-class reading UX across multiple content types.",
      "SEO + AI-search discoverability as a first-class goal.",
      "Performance + accessibility budgets (LCP < 2.5s, WCAG 2.1 AA) baked in.",
    ],
    roadmap: [
      {
        stage: "Now",
        detail:
          "Reading experience, docs/guides/AI-tools/blog content types, auth, freemium downloads, admin authoring.",
      },
      {
        stage: "Next",
        detail:
          "Annual plan, team/enterprise tiers, deeper AI-search discoverability.",
      },
      {
        stage: "Later",
        detail:
          "Partner API, multi-language (groundwork already laid via next-intl).",
      },
    ],
  },
];

export const slugs = projects.map((p) => p.slug);

export function getProject(slug: string): BuildingProject | undefined {
  return projects.find((p) => p.slug === slug);
}
