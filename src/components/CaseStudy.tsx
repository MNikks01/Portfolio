"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { roles, metrics, tech, phases } from "@/content/case-study";

export default function CaseStudy() {
  return (
    <section id="casestudy" className="section-pad relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Flagship Case Study"
          title={
            <>
              ConnectEdApp —{" "}
              <span className="text-gradient">
                a startup I built end-to-end
              </span>
            </>
          }
          description="Not a side project. A product I founded, designed, engineered, launched, sold, and iterated on with real customers — every hat, start to finish."
        />

        {/* Roles + metrics header */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-6 md:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-pink/30 opacity-40 blur-3xl" />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
              My role
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
              One person. Every function.
            </h3>
            <p className="mt-3 text-sm text-muted">
              Most engineers ship features. On ConnectEdApp I owned the whole
              loop — from spotting the opportunity to closing the demo.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-overlay/15 bg-overlay/5 px-3 py-1.5 text-xs font-medium text-soft"
                >
                  {r}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="relative overflow-hidden rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-5"
              >
                <div
                  className="font-display text-2xl font-bold md:text-3xl"
                  style={{ color: m.color }}
                >
                  {m.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-faint">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phases */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {phases.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: 0.04 * i }}
                className="group relative overflow-hidden rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-6 transition hover:-translate-y-0.5"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-2xl transition group-hover:opacity-40"
                  style={{ background: p.color }}
                />
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{
                      background: `${p.color}1a`,
                      boxShadow: `inset 0 0 0 1px ${p.color}40`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: p.color }} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-2xl border border-overlay/10 bg-overlay/[0.02] p-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
            Built with
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
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
    </section>
  );
}
