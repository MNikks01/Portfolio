"use client";

import { motion } from "framer-motion";
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
import SectionHeading from "./SectionHeading";

const flow = [
  { label: "Client", color: "#22D3EE" },
  { label: "API Gateway", color: "#00D4FF" },
  { label: "Services", color: "#8B5CF6" },
  { label: "Queue", color: "#EC4899" },
  { label: "Workers", color: "#F59E0B" },
  { label: "Data + Cache", color: "#10B981" },
];

const capabilities = [
  { icon: GitBranch, title: "Monorepos", desc: "TurboRepo workspaces with shared packages, typed contracts, and fast incremental builds.", color: "#22D3EE" },
  { icon: Boxes, title: "Microservices", desc: "Independently deployable services with clear boundaries and resilient communication.", color: "#00D4FF" },
  { icon: Network, title: "Distributed Systems", desc: "Designing for failure — retries, idempotency, and consistency trade-offs.", color: "#8B5CF6" },
  { icon: Radio, title: "Event-Driven Architecture", desc: "Decoupled services that react to events instead of tight synchronous chains.", color: "#EC4899" },
  { icon: ListChecks, title: "Queue-Based Processing", desc: "BullMQ & RabbitMQ for background jobs, fan-out, and high-throughput pipelines.", color: "#F59E0B" },
  { icon: Plug, title: "API Design", desc: "Clean REST & GraphQL contracts, versioning, pagination, and predictable errors.", color: "#10B981" },
  { icon: TrendingUp, title: "Scalability", desc: "Horizontal scaling, caching layers, and load-aware processing under real traffic.", color: "#22D3EE" },
  { icon: ShieldCheck, title: "Security", desc: "JWT/OAuth, RBAC, input validation, and least-privilege access by default.", color: "#00D4FF" },
  { icon: RefreshCw, title: "CI/CD", desc: "GitHub Actions pipelines, Dockerized builds, and automated deployments.", color: "#8B5CF6" },
  { icon: Activity, title: "Monitoring", desc: "Prometheus + Grafana metrics, structured logging, and actionable alerts.", color: "#EC4899" },
];

export default function SystemArchitect() {
  return (
    <section id="architecture" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Technical Architecture"
          title={
            <>
              How I <span className="text-gradient">build systems</span>
            </>
          }
          description="Most developers show projects. Few explain architecture. Here's how I design software that scales, stays reliable, and survives real-world load."
        />

        {/* Request lifecycle flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-3xl border border-overlay/10 bg-overlay/[0.02] p-6 md:p-8"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
            A request&apos;s lifecycle
          </div>
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
            {flow.map((node, i) => (
              <div key={node.label} className="contents">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-2xl border border-overlay/10 bg-overlay/[0.04] px-4 py-3 md:flex-1 md:flex-col md:gap-2 md:text-center"
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: node.color, boxShadow: `0 0 12px ${node.color}` }}
                  />
                  <span className="text-sm font-medium text-soft">{node.label}</span>
                </motion.div>
                {i < flow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.05 }}
                    className="mx-auto h-5 w-px bg-overlay/20 md:h-px md:w-6"
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted">
            Synchronous work returns fast; heavy or async work is pushed to queues
            and processed by workers — keeping the API responsive while the system
            scales horizontally, with metrics and logs on every hop.
          </p>
        </motion.div>

        {/* Capability grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-5 transition hover:-translate-y-0.5"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition group-hover:opacity-30"
                  style={{ background: c.color }}
                />
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg"
                  style={{
                    background: `${c.color}1a`,
                    boxShadow: `inset 0 0 0 1px ${c.color}40`,
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: c.color }} />
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
