"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
} from "lucide-react";
import SectionCard from "./SectionCard";
import { projects, type ProjectStatus } from "@/content/building";

const MotionSectionCard = motion.create(SectionCard);

const statusStyles: Record<ProjectStatus, string> = {
  Active: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Building: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
  Planned: "border-overlay/15 bg-overlay/5 text-muted",
};

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.55 },
};

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section {...reveal} className="mt-14">
      <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </motion.section>
  );
}

export default function ProjectDetail({ slug }: { slug: string }) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];
  // Wrap around so prev/next always resolve.
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const Icon = project.icon;
  const accent = project.color;

  return (
    <article className="section-pad relative overflow-hidden">
      {/* accent glow */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: accent }}
      />

      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/building"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="grid h-12 w-12 place-items-center rounded-xl"
              style={{
                background: `${accent}1a`,
                boxShadow: `inset 0 0 0 1px ${accent}40`,
              }}
            >
              <Icon className="h-6 w-6" style={{ color: accent }} />
            </span>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] ${statusStyles[project.status]}`}
            >
              {project.status}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
              {project.projectNo}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-3xl text-balance text-lg text-soft md:text-xl">
            {project.tagline}
          </p>
          <p className="mt-3 max-w-3xl text-pretty italic text-muted">
            “{project.oneLiner}”
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-overlay/5 px-4 py-2 text-sm font-medium text-ink ring-1 ring-overlay/10 transition hover:bg-overlay/10"
            >
              <Github className="h-4 w-4" /> View repo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <span className="rounded-full border border-overlay/10 bg-overlay/5 px-3 py-1 text-xs text-muted">
              {project.category}
            </span>
          </div>
        </motion.header>

        {/* Meta strip */}
        <motion.dl
          {...reveal}
          className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-overlay/10 bg-overlay/10 sm:grid-cols-3"
        >
          {[
            { k: "Status", v: project.statusNote },
            { k: "Difficulty", v: project.difficulty },
            { k: "Time to MVP", v: project.timeToMvp },
          ].map((m) => (
            <div key={m.k} className="bg-bg-deep p-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                {m.k}
              </dt>
              <dd className="mt-2 text-sm text-soft">{m.v}</dd>
            </div>
          ))}
        </motion.dl>

        {/* Role in the platform */}
        <motion.div
          {...reveal}
          className="mt-6 rounded-2xl border-l-2 p-5"
          style={{ borderColor: accent, background: `${accent}0d` }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
            Role in the platform
          </p>
          <p className="mt-2 text-sm leading-relaxed text-soft">
            {project.thesisRole}
          </p>
        </motion.div>

        <Block title="Overview">
          <div className="space-y-4">
            {project.summary.map((p) => (
              <p key={p} className="text-pretty leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Block>

        <Block title="The problem">
          <div className="space-y-4">
            {project.problem.map((p) => (
              <p key={p} className="text-pretty leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Block>

        <Block title="What it is">
          <div className="space-y-4">
            {project.whatItIs.map((p) => (
              <p key={p} className="text-pretty leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Block>

        <Block title="Key features">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((f, i) => (
              <MotionSectionCard
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
                accent={accent}
                glowClassName="-right-8 -top-8 h-24 w-24 opacity-20 group-hover:opacity-40"
                className="p-5 hover:-translate-y-1"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.desc}
                </p>
              </MotionSectionCard>
            ))}
          </div>
        </Block>

        <Block title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-overlay/10 bg-overlay/5 px-3 py-1.5 font-mono text-xs text-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </Block>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <motion.section {...reveal}>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              How it makes money
            </h2>
            <ul className="mt-5 space-y-3">
              {project.model.map((m) => (
                <li key={m} className="flex gap-3 text-sm text-muted">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: accent }}
                  />
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section {...reveal}>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Why it&apos;s different
            </h2>
            <ul className="mt-5 space-y-3">
              {project.differentiators.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-muted">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: accent }}
                  />
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <Block title="Roadmap">
          <div className="relative space-y-4 border-l border-overlay/10 pl-6">
            {project.roadmap.map((r) => (
              <div key={r.stage} className="relative">
                <span
                  className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg-deep"
                  style={{ background: accent }}
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-soft">
                  {r.stage}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </Block>

        {/* Prev / next */}
        <nav className="mt-16 grid gap-4 border-t border-overlay/10 pt-8 sm:grid-cols-2">
          <Link
            href={`/building/${prev.slug}`}
            className="group rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-5 transition hover:bg-overlay/[0.06]"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
              <ArrowLeft className="h-3.5 w-3.5" /> Previous
            </span>
            <p className="mt-2 font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand-cyan">
              {prev.name}
            </p>
          </Link>
          <Link
            href={`/building/${next.slug}`}
            className="group rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-5 text-right transition hover:bg-overlay/[0.06]"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
              Next <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <p className="mt-2 font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand-cyan">
              {next.name}
            </p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
