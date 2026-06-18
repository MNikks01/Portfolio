// System architecture section. Mirrors docs/architecture/engineering-principles.md.
import {
  GitBranch,
  Boxes,
  Network,
  Radio,
  ListChecks,
  Plug,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Activity,
} from "lucide-react";

export type FlowNode = { label: string; color: string };

export const flow: FlowNode[] = [
  { label: "Client", color: "#22D3EE" },
  { label: "API Gateway", color: "#00D4FF" },
  { label: "Services", color: "#8B5CF6" },
  { label: "Queue", color: "#EC4899" },
  { label: "Workers", color: "#F59E0B" },
  { label: "Data + Cache", color: "#10B981" },
];

export type Capability = {
  icon: typeof GitBranch;
  title: string;
  desc: string;
  color: string;
};

export const capabilities: Capability[] = [
  {
    icon: GitBranch,
    title: "Monorepos",
    desc: "TurboRepo workspaces with shared packages, typed contracts, and fast incremental builds.",
    color: "#22D3EE",
  },
  {
    icon: Boxes,
    title: "Microservices",
    desc: "Independently deployable services with clear boundaries and resilient communication.",
    color: "#00D4FF",
  },
  {
    icon: Network,
    title: "Distributed Systems",
    desc: "Designing for failure — retries, idempotency, and consistency trade-offs.",
    color: "#8B5CF6",
  },
  {
    icon: Radio,
    title: "Event-Driven Architecture",
    desc: "Decoupled services that react to events instead of tight synchronous chains.",
    color: "#EC4899",
  },
  {
    icon: ListChecks,
    title: "Queue-Based Processing",
    desc: "BullMQ & RabbitMQ for background jobs, fan-out, and high-throughput pipelines.",
    color: "#F59E0B",
  },
  {
    icon: Plug,
    title: "API Design",
    desc: "Clean REST & GraphQL contracts, versioning, pagination, and predictable errors.",
    color: "#10B981",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    desc: "Horizontal scaling, caching layers, and load-aware processing under real traffic.",
    color: "#22D3EE",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "JWT/OAuth, RBAC, input validation, and least-privilege access by default.",
    color: "#00D4FF",
  },
  {
    icon: RefreshCw,
    title: "CI/CD",
    desc: "GitHub Actions pipelines, Dockerized builds, and automated deployments.",
    color: "#8B5CF6",
  },
  {
    icon: Activity,
    title: "Monitoring",
    desc: "Prometheus + Grafana metrics, structured logging, and actionable alerts.",
    color: "#EC4899",
  },
];
