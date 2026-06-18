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
      "Architecting distributed systems, accessibility platforms, and AI-native developer tooling — engineering grounded in product impact.",
    highlights: [
      "Designed a monorepo + microservices architecture (TurboRepo + Docker), cutting CI/CD lead time and unblocking parallel team delivery.",
      "Built a distributed accessibility scanning platform with Puppeteer + RabbitMQ queues — processing 10k+ pages/day with horizontal worker scaling.",
      "Integrated MCP into internal tooling for AI-assisted code review and ticket grooming — measurable developer-velocity gains.",
      "Created Ignix UI, an AI-native component registry driven by MCP workflows.",
      "Owned DevOps: Dockerized services, GitHub Actions pipelines, and Prometheus/Grafana monitoring.",
      "Mentored engineers; introduced trunk-based development and feature-flagged releases.",
    ],
    tech: [
      "TurboRepo",
      "Microservices",
      "RabbitMQ",
      "Puppeteer",
      "Docker",
      "MCP",
      "AWS",
      "Grafana",
    ],
  },
  {
    company: "Softronix",
    role: "MERN Stack Engineer",
    period: "2021 — 2023",
    color: "#00D4FF",
    location: "India",
    summary:
      "Shipped real-time products and SaaS dashboards end-to-end, owning delivery from sprint planning to production.",
    highlights: [
      "Built real-time collaboration features with Socket.IO supporting 5k concurrent users.",
      "Designed authentication & authorization systems — OAuth + JWT with shared SSO and role-based access.",
      "Migrated a monolithic Express app to GraphQL, consolidating queries 3x and improving performance.",
      "Optimized APIs and database access, cutting key endpoint latency and improving UX.",
      "Owned end-to-end delivery: requirements, build, review, and production rollouts.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "GraphQL",
      "JWT",
      "OAuth",
      "Socket.IO",
      "MongoDB",
    ],
  },
  {
    company: "ConnectEdApp",
    role: "Founder & Full Stack Engineer",
    period: "2020 — 2022",
    color: "#10B981",
    location: "India · Founder",
    summary:
      "Founded, built, launched, and sold an education platform — running product, engineering, sales, and customer success single-handedly.",
    highlights: [
      "Built the full product solo: React Native app + React dashboard + Node/GraphQL backend, launched on the Google Play Store.",
      "Validated the idea by talking directly to school administrators before building.",
      "Presented and demoed the product to 100+ school administrators.",
      "Visited 50+ schools for customer discovery and folded feedback into the roadmap.",
      "Owned the full loop: idea → validation → design → engineering → launch → sales → iteration.",
    ],
    tech: [
      "React",
      "React Native",
      "Node.js",
      "GraphQL",
      "Firebase",
      "Socket.IO",
      "Cloudinary",
    ],
  },
  {
    company: "RevoltCreations",
    role: "Business Development Manager",
    period: "2019 — 2021",
    color: "#EC4899",
    location: "India",
    summary:
      "Where it started — business, sales, and customers. The foundation that makes me an engineer who understands the buyer.",
    highlights: [
      "Grew the client portfolio 3x in 18 months through outbound and partnerships.",
      "Owned client communication, onboarding, and requirements gathering.",
      "Drove a 40% lift in retention via a structured customer feedback loop.",
      "Learned how businesses buy, what they value, and how to sell — skills most engineers never build.",
    ],
    tech: [
      "Revenue Growth",
      "Sales",
      "Client Management",
      "Customer Communication",
      "Business Strategy",
    ],
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
          {/* Tabs — wrapping pills on mobile, rich list on desktop */}
          <div className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
            {jobs.map((j, i) => (
              <button
                key={j.company}
                onClick={() => setActive(i)}
                className={`group relative flex items-center gap-2 rounded-full border px-3.5 py-2 text-left transition lg:gap-3 lg:rounded-2xl lg:px-4 lg:py-3 ${
                  active === i
                    ? "border-overlay/15 bg-overlay/5"
                    : "border-overlay/5 hover:border-overlay/10 hover:bg-overlay/5"
                }`}
              >
                {/* desktop icon tile */}
                <span
                  className="hidden h-9 w-9 place-items-center rounded-xl lg:grid"
                  style={{
                    background: `${j.color}1a`,
                    boxShadow: `inset 0 0 0 1px ${j.color}40`,
                  }}
                >
                  <Building2 className="h-4 w-4" style={{ color: j.color }} />
                </span>
                {/* mobile color dot */}
                <span
                  className="h-2 w-2 shrink-0 rounded-full lg:hidden"
                  style={{
                    background: j.color,
                    boxShadow: `0 0 8px ${j.color}`,
                  }}
                />
                <span className="flex flex-col">
                  <span className="text-sm font-semibold leading-tight text-ink">
                    {j.company}
                  </span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-widest text-faint lg:block">
                    {j.period}
                  </span>
                </span>
                {active === i && (
                  <motion.span
                    layoutId="job-indicator"
                    className="absolute inset-y-2 right-2 hidden w-1 rounded-full lg:block"
                    style={{
                      background: j.color,
                      boxShadow: `0 0 10px ${j.color}`,
                    }}
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
            className="relative overflow-hidden rounded-3xl border border-overlay/10 bg-overlay/[0.03] p-6 md:p-10"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
              style={{ background: job.color }}
            />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
              {job.location}
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
              {job.role} <span className="text-faint">·</span>{" "}
              <span style={{ color: job.color }}>{job.company}</span>
            </h3>
            <p className="mt-3 max-w-2xl text-muted">{job.summary}</p>

            <ul className="mt-6 grid gap-3">
              {job.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-3 text-sm text-soft"
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
                  className="rounded-full border border-overlay/10 bg-overlay/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-soft"
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
