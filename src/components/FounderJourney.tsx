"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { chapters } from "@/content/founder-journey";

export default function FounderJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    ["0%", "100%"],
  );

  return (
    <section id="founder" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-50" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Journey"
          title={
            <>
              From business development to engineering to{" "}
              <span className="text-gradient">founder</span>
            </>
          }
          description="Not a straight line from CS degree to dev job. A deliberate arc through business, product, and engineering — where every chapter compounds into the next."
        />

        <div ref={ref} className="relative mt-16 md:mt-20">
          {/* Spine */}
          <div className="absolute left-4 top-0 h-full w-px bg-overlay/10 md:left-6">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-brand-pink via-brand-purple to-brand-blue shadow-[0_0_18px_rgba(0,212,255,0.6)]"
            />
          </div>

          <div className="grid gap-6">
            {chapters.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.6, delay: 0.04 * i }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Node */}
                  <div className="absolute left-4 top-1 -translate-x-1/2 md:left-6">
                    <div
                      className="grid h-9 w-9 place-items-center rounded-full border border-overlay/20 bg-bg-deep"
                      style={{ boxShadow: `0 0 24px ${c.color}80` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: c.color }} />
                    </div>
                  </div>

                  <div className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-0.5 md:p-7">
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-25 blur-3xl transition group-hover:opacity-40"
                      style={{ background: c.color }}
                    />
                    <div
                      className="font-mono text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: c.color }}
                    >
                      {c.phase}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink md:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {c.body}
                    </p>
                    <div className="mt-4 inline-flex items-start gap-2 rounded-xl border border-overlay/10 bg-overlay/[0.03] px-3 py-2">
                      <span
                        className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          background: c.color,
                          boxShadow: `0 0 8px ${c.color}`,
                        }}
                      />
                      <span className="text-xs text-soft">{c.takeaway}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
