"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SectionCard from "./SectionCard";
import { flow, capabilities } from "@/content/system-architect";

const MotionSectionCard = motion.create(SectionCard);

export default function SystemArchitect() {
  return (
    <section id="architecture" className="section-pad relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
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
                    style={{
                      background: node.color,
                      boxShadow: `0 0 12px ${node.color}`,
                    }}
                  />
                  <span className="text-sm font-medium text-soft">
                    {node.label}
                  </span>
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
            Synchronous work returns fast; heavy or async work is pushed to
            queues and processed by workers — keeping the API responsive while
            the system scales horizontally, with metrics and logs on every hop.
          </p>
        </motion.div>

        {/* Capability grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <MotionSectionCard
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                accent={c.color}
                glowClassName="-right-8 -top-8 h-24 w-24 opacity-0 group-hover:opacity-30"
                className="p-5 hover:-translate-y-0.5"
              >
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
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {c.desc}
                </p>
              </MotionSectionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
