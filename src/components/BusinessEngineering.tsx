"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, Boxes, Plus, Equal } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: Briefcase,
    label: "Business Thinking",
    color: "#EC4899",
    points: [
      "Talk to customers, not just stakeholders",
      "Validate before building",
      "Translate value for non-technical buyers",
      "Revenue, retention, and ROI awareness",
    ],
  },
  {
    icon: Cpu,
    label: "Engineering Thinking",
    color: "#00D4FF",
    points: [
      "Architect for scale and reliability",
      "Clean, maintainable, tested systems",
      "Automate and ship continuously",
      "Leverage AI to move faster",
    ],
  },
  {
    icon: Boxes,
    label: "Product Thinking",
    color: "#8B5CF6",
    points: [
      "Build what customers actually need",
      "End-to-end ownership, 0 → 1",
      "Trade-offs that balance speed & quality",
      "Outcomes over output",
    ],
  },
];

export default function BusinessEngineering() {
  return (
    <section id="mindset" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Differentiator"
          align="center"
          title={
            <>
              Business thinking + engineering thinking ={" "}
              <span className="text-gradient">product thinking</span>
            </>
          }
          description="Most engineers know technology. I understand technology, product, sales, customers, and business — and that combination is where real products get built."
        />

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const Connector = i === 0 ? Plus : i === 1 ? Equal : null;
            return (
              <div key={c.label} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group relative overflow-hidden rounded-3xl border border-overlay/10 bg-overlay/[0.03] p-6 md:p-7"
                >
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-25 blur-3xl transition group-hover:opacity-50"
                    style={{ background: c.color }}
                  />
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{
                      background: `${c.color}1a`,
                      boxShadow: `inset 0 0 0 1px ${c.color}40`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: c.color }} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {c.label}
                  </h3>
                  <ul className="mt-4 grid gap-2.5">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: c.color }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {Connector && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.1 }}
                    className="flex items-center justify-center py-1 lg:py-0"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-overlay/15 bg-overlay/5 text-brand-cyan">
                      <Connector className="h-5 w-5" />
                    </span>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
