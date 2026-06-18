"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Cpu, Rocket, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const milestones = [
  {
    year: "2019",
    title: "Business Development Manager",
    company: "RevoltCreations",
    desc: "Started in business — driving revenue, partnerships, and client strategy.",
    icon: Briefcase,
    color: "#EC4899",
  },
  {
    year: "2020",
    title: "React Developer",
    company: "Self-taught transition",
    desc: "Pivoted into engineering. Built production React apps and learned the craft end-to-end.",
    icon: Code2,
    color: "#22D3EE",
  },
  {
    year: "2021",
    title: "MERN Stack Engineer",
    company: "Softronix",
    desc: "Real-time apps with React, Node.js, GraphQL, JWT, OAuth and Socket.IO at scale.",
    icon: Rocket,
    color: "#00D4FF",
  },
  {
    year: "2023",
    title: "Senior Software Engineer",
    company: "Mindfire Solutions",
    desc: "Distributed microservices, accessibility platforms, RabbitMQ, Puppeteer, TurboRepo.",
    icon: Trophy,
    color: "#8B5CF6",
  },
  {
    year: "2025",
    title: "AI & DevOps Engineer",
    company: "Building the future",
    desc: "MCP, Claude, Cursor, AI agents, Kubernetes, AWS — engineering AI-native systems.",
    icon: Cpu,
    color: "#10B981",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              From business to building the{" "}
              <span className="text-gradient">future of engineering</span>
            </>
          }
          description="A non-linear journey from sales floors to senior engineering — driven by curiosity, shipped through systems."
        />

        <div ref={ref} className="relative mt-20 grid gap-10">
          {/* Center spine */}
          <div className="absolute left-4 top-0 h-full w-px bg-overlay/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-brand-blue via-brand-purple to-brand-pink shadow-[0_0_18px_rgba(0,212,255,0.7)]"
            />
          </div>

          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isRight = i % 2 === 1;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
                className={`relative grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-12 ${
                  isRight ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Node */}
                <div
                  className={`absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2`}
                >
                  <div
                    className="grid h-8 w-8 place-items-center rounded-full border border-overlay/20 bg-bg-deep"
                    style={{ boxShadow: `0 0 24px ${m.color}80` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: m.color }} />
                  </div>
                </div>

                {/* Spacer column on alternating side (desktop) */}
                <div className="hidden md:block" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 ${isRight ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-0.5 hover:shadow-glow">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
                      {m.year}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                      {m.title}
                    </h3>
                    <div
                      className="mt-1 text-xs font-medium"
                      style={{ color: m.color }}
                    >
                      {m.company}
                    </div>
                    <p className="mt-3 text-sm text-muted">{m.desc}</p>
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-3xl"
                      style={{ background: m.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
