"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reasons = [
  { title: "Product Mindset", desc: "I build products, not just features — focused on outcomes and customer value." },
  { title: "Founder Experience", desc: "I've founded, launched, and sold a product end-to-end." },
  { title: "Customer Understanding", desc: "I've sat with real users, run demos, and shaped products around feedback." },
  { title: "Full Stack Development", desc: "Web and mobile, frontend to backend, design to deployment." },
  { title: "Backend Architecture", desc: "Distributed systems, queues, microservices, and scalable APIs." },
  { title: "AI Engineering", desc: "MCP, agentic workflows, and LLM-powered developer tooling." },
  { title: "DevOps", desc: "Docker, CI/CD, AWS, and monitoring — I ship and operate what I build." },
  { title: "Business Background", desc: "Sales and BD experience — I speak both engineering and business." },
  { title: "End-to-End Ownership", desc: "From idea and validation to launch and iteration, I own the whole loop." },
  { title: "Fast Learning", desc: "I went from sales to senior engineer by learning relentlessly." },
];

export default function WhyWorkWithMe() {
  return (
    <section id="why" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Work With Me"
          align="center"
          title={
            <>
              Not just another <span className="text-gradient">MERN developer</span>
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
