"use client";

import { motion } from "framer-motion";
import { Building2, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    company: "Mindfire Solutions",
    role: "Senior Software Engineer",
    period: "2023 — Present",
    color: "#8B5CF6",
    location: "India · Remote",
    summary:
      "Architecting distributed microservices and AI-augmented developer platforms.",
    highlights: [
      "Built a distributed microservices platform with TurboRepo + Docker, cutting CI/CD lead time by 60%.",
      "Designed an accessibility scanning system using Puppeteer + RabbitMQ — processes 10k+ pages/day.",
      "Integrated MCP into internal tooling: AI-assisted code review and ticket grooming.",
      "Mentored 5 engineers; introduced trunk-based development and feature-flagged releases.",
    ],
    tech: ["TurboRepo", "RabbitMQ", "Puppeteer", "Docker", "MCP", "AWS"],
  },
  {
    company: "Softronix",
    role: "MERN Stack Developer",
    period: "2021 — 2023",
    color: "#00D4FF",
    location: "India",
    summary:
      "Shipped real-time products and SaaS dashboards used by thousands of users.",
    highlights: [
      "Built real-time collaboration features with Socket.IO supporting 5k concurrent users.",
      "Implemented OAuth + JWT auth across 4 micro-frontends with shared SSO.",
      "Migrated a monolithic Express app to GraphQL with 3x query consolidation.",
      "Owned end-to-end delivery from sprint planning to production rollouts.",
    ],
    tech: ["React", "Node.js", "GraphQL", "JWT", "OAuth", "Socket.IO"],
  },
  {
    company: "RevoltCreations",
    role: "Business Development Manager",
    period: "2019 — 2021",
    color: "#EC4899",
    location: "India",
    summary:
      "Bridged business and product — the foundation for systems thinking.",
    highlights: [
      "Grew client portfolio 3x in 18 months through outbound and partnerships.",
      "Led client onboarding and requirements gathering for engineering teams.",
      "Drove a 40% lift in retention via a product feedback loop initiative.",
    ],
    tech: ["Revenue Growth", "Client Management", "Strategy"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Shipped systems.{" "}
              <span className="text-gradient">Built teams.</span>
            </>
          }
          description="Five years of compounding leverage — from frontend to platform, business to engineering leadership."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Tabs */}
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
            {jobs.map((j, i) => (
              <button
                key={j.company}
                onClick={() => setActive(i)}
                className={`group relative shrink-0 rounded-2xl border px-4 py-3 text-left transition ${
                  active === i
                    ? "border-white/15 bg-white/5"
                    : "border-white/5 hover:border-white/10 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-xl"
                    style={{ background: `${j.color}1a`, boxShadow: `inset 0 0 0 1px ${j.color}40` }}
                  >
                    <Building2 className="h-4 w-4" style={{ color: j.color }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {j.company}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      {j.period}
                    </div>
                  </div>
                </div>
                {active === i && (
                  <motion.span
                    layoutId="job-indicator"
                    className="absolute inset-y-2 right-2 w-1 rounded-full"
                    style={{ background: j.color, boxShadow: `0 0 10px ${j.color}` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Detail */}
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
              style={{ background: job.color }}
            />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              {job.location}
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
              {job.role}{" "}
              <span className="text-zinc-500">·</span>{" "}
              <span style={{ color: job.color }}>{job.company}</span>
            </h3>
            <p className="mt-3 max-w-2xl text-zinc-400">{job.summary}</p>

            <ul className="mt-6 grid gap-3">
              {job.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: job.color }}
                  />
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
