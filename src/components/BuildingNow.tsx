"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { items } from "@/content/building-now";

export default function BuildingNow() {
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
          description="I don't just maintain — I build and learn in the open. Here's where my time and curiosity go today."
        />

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-overlay/10 bg-overlay/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Active &amp; shipping
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-6 transition hover:-translate-y-1"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-25 blur-2xl transition group-hover:opacity-50"
                  style={{ background: it.color }}
                />
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl"
                  style={{
                    background: `${it.color}1a`,
                    boxShadow: `inset 0 0 0 1px ${it.color}40`,
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: it.color }} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {it.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
