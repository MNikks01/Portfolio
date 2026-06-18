"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Code, Terminal, Workflow, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Brain,
    title: "Model Context Protocol",
    desc: "Designing MCP servers that expose tools, data, and workflows to AI agents — the API layer for the AI era.",
    color: "#00D4FF",
  },
  {
    icon: Bot,
    title: "Claude & Claude Code",
    desc: "Production agentic workflows with Claude. Code review, system design, refactors — at engineering scale.",
    color: "#EC4899",
  },
  {
    icon: Code,
    title: "Cursor & AI-assisted IDE",
    desc: "Editor-first AI. Custom rules, prompt libraries, and codegen pipelines that respect taste.",
    color: "#22D3EE",
  },
  {
    icon: Workflow,
    title: "AI Agents",
    desc: "Autonomous workflows that plan, execute, and verify — wired into queues, CI, and human-in-the-loop gates.",
    color: "#8B5CF6",
  },
];

export default function AISection() {
  return (
    <section id="ai" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI Engineering"
          title={
            <>
              The new engineering substrate:{" "}
              <span className="text-gradient">AI-native systems</span>
            </>
          }
          description="Treat models as first-class collaborators. Wire them into your tooling, your code, your CI — and unlock 10x leverage."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Terminal panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1c] p-0"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <div className="ml-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                ~/engineering-os · agent.session
              </div>
              <Terminal className="ml-auto h-4 w-4 text-zinc-500" />
            </div>
            <pre className="overflow-hidden p-6 font-mono text-[12px] leading-relaxed text-zinc-300">
              <code>
                <TypeLines
                  lines={[
                    [{ t: "$ ", c: "#22D3EE" }, { t: "mcp connect" }],
                    [{ t: "✓ ", c: "#10B981" }, { t: "Linked: ", c: "#a1a1aa" }, { t: "claude · cursor · github · linear" }],
                    [{ t: "$ ", c: "#22D3EE" }, { t: "agent run " }, { t: "review --pr 412", c: "#8B5CF6" }],
                    [{ t: "→ analyzing diff (134 files)", c: "#a1a1aa" }],
                    [{ t: "→ found 3 risks, 7 suggestions", c: "#EC4899" }],
                    [{ t: "→ posting structured review", c: "#a1a1aa" }],
                    [{ t: "✓ ", c: "#10B981" }, { t: "Done in 12.4s" }],
                    [{ t: "$ ", c: "#22D3EE" }, { t: "_" }],
                  ]}
                />
              </code>
            </pre>
          </motion.div>

          {/* Pillars */}
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-5 transition hover:-translate-y-1"
                  style={
                    {
                      // outline glow on hover
                    }
                  }
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition group-hover:opacity-60"
                    style={{ background: p.color }}
                  />
                  <span
                    className="relative grid h-10 w-10 place-items-center rounded-xl"
                    style={{
                      background: `${p.color}1a`,
                      boxShadow: `inset 0 0 0 1px ${p.color}40`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: p.color }} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* AI workflow strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-overlay/10 bg-gradient-to-r from-bg-deep via-bg-panel to-bg-deep p-6 md:p-10"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
            Agentic workflow
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {["Plan", "Generate", "Verify", "Ship", "Observe"].map((step, i) => (
              <div key={step} className="relative flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-overlay/10 bg-overlay/5 font-mono text-xs text-brand-cyan">
                  0{i + 1}
                </div>
                <div className="font-display text-sm font-semibold text-ink">
                  {step}
                  <div className="font-sans text-[10px] font-normal uppercase tracking-widest text-faint">
                    {[
                      "context · constraints",
                      "code · tests · docs",
                      "lint · type · review",
                      "deploy · rollback",
                      "metrics · feedback",
                    ][i]}
                  </div>
                </div>
                {i < 4 && (
                  <Zap className="ml-auto hidden h-4 w-4 text-brand-cyan md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TypeLines({
  lines,
}: {
  lines: { t: string; c?: string }[][];
}) {
  return (
    <>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 + i * 0.18, duration: 0.4 }}
        >
          {line.map((seg, j) => (
            <span key={j} style={{ color: seg.c }}>
              {seg.t}
            </span>
          ))}
          {i === lines.length - 1 && (
            <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-blink-caret bg-brand-cyan align-middle" />
          )}
        </motion.div>
      ))}
    </>
  );
}
