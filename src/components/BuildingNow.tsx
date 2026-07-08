"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionCard from "./SectionCard";
import { projects, type ProjectStatus } from "@/content/building";

const MotionSectionCard = motion.create(SectionCard);

const statusStyles: Record<ProjectStatus, string> = {
  Active: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Building: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
  Planned: "border-overlay/15 bg-overlay/5 text-muted",
};

export default function BuildingNow() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="now" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Currently Building"
          title={
            <>
              What I&apos;m <span className="text-gradient">building now</span>
            </>
          }
          description="Led by my most ambitious build to date — plus a family of AI-developer products united by one thesis: context is the connective layer. Each is a real, open repo — click any to go deep."
        />

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-overlay/10 bg-overlay/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Active &amp; shipping
        </div>

        {featured && <FeaturedCard project={featured} />}

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((it, i) => {
            const Icon = it.icon;
            return (
              <MotionSectionCard
                key={it.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
                accent={it.color}
                glowClassName="-right-10 -top-10 h-28 w-28 opacity-25 group-hover:opacity-50"
                className="p-0 hover:-translate-y-1"
              >
                <Link
                  href={`/building/${it.slug}`}
                  className="flex h-full flex-col p-6"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl"
                      style={{
                        background: `${it.color}1a`,
                        boxShadow: `inset 0 0 0 1px ${it.color}40`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: it.color }} />
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ${statusStyles[it.status]}`}
                    >
                      {it.status}
                    </span>
                  </div>
                  <h3 className="mt-4 flex items-center gap-1 font-display text-lg font-semibold text-ink">
                    {it.name}
                    <ArrowUpRight className="h-4 w-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {it.tagline}
                  </p>
                  <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {it.category}
                  </span>
                </Link>
              </MotionSectionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon;
  const accent = project.color;

  return (
    <MotionSectionCard
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6 }}
      accent={accent}
      glowClassName="-right-16 -top-16 h-64 w-64 opacity-40 group-hover:opacity-60"
      className="mt-8 p-0 hover:-translate-y-1"
    >
      <Link
        href={`/building/${project.slug}`}
        className="flex h-full flex-col gap-8 p-7 md:flex-row md:items-stretch md:p-9"
      >
        {/* Left: identity */}
        <div className="flex flex-col md:w-1/2">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="grid h-14 w-14 place-items-center rounded-2xl"
              style={{
                background: `${accent}1f`,
                boxShadow: `inset 0 0 0 1px ${accent}55`,
              }}
            >
              <Icon className="h-7 w-7" style={{ color: accent }} />
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{
                borderColor: `${accent}55`,
                background: `${accent}14`,
                color: accent,
              }}
            >
              <Star className="h-3 w-3 fill-current" />
              {project.projectNo}
            </span>
          </div>

          <h3 className="mt-5 flex items-start gap-1.5 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {project.name}
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
          </h3>

          <p className="mt-4 text-pretty leading-relaxed text-soft">
            {project.tagline}
          </p>
          <p className="mt-3 text-pretty italic leading-relaxed text-muted">
            &ldquo;{project.oneLiner}&rdquo;
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            <span
              className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ${statusStyles[project.status]}`}
            >
              {project.status}
            </span>
            <span className="rounded-full border border-overlay/10 bg-overlay/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
              {project.category}
            </span>
          </div>
        </div>

        {/* Right: highlights */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:w-1/2">
          {project.features.slice(0, 4).map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-overlay/10 bg-overlay/[0.03] p-4"
            >
              <h4 className="font-display text-sm font-semibold text-ink">
                {f.title}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Link>
    </MotionSectionCard>
  );
}
