"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { reasons } from "@/content/why-work-with-me";

export default function WhyWorkWithMe() {
  return (
    <section id="why" className="section-pad relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Work With Me"
          align="center"
          title={
            <>
              Not just another{" "}
              <span className="text-gradient">MERN developer</span>
            </>
          }
          description="A rare combination of founder, engineer, product builder, and AI-native developer — someone who can take an idea all the way to a shipped, customer-validated product."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.05 }}
              className="group flex items-start gap-4 rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-5 transition hover:border-overlay/20 hover:bg-overlay/[0.05]"
            >
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-emerald/15 text-brand-emerald ring-1 ring-brand-emerald/30">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
