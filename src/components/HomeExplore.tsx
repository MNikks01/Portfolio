"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Briefcase,
  Compass,
  Mail,
  Rocket,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionCard from "./SectionCard";

const MotionSectionCard = motion.create(SectionCard);

const cards = [
  {
    href: "/about",
    label: "About",
    desc: "The founder journey, how I think about product, and how I build systems.",
    icon: Compass,
    color: "#8B5CF6",
  },
  {
    href: "/startup",
    label: "Startup",
    desc: "ConnectEdApp — the founder case study, built and shipped end-to-end.",
    icon: Rocket,
    color: "#F59E0B",
  },
  {
    href: "/work",
    label: "Work",
    desc: "Shipped products — the Revize accessibility platform, Ignix UI, and more.",
    icon: Briefcase,
    color: "#00D4FF",
  },
  {
    href: "/building",
    label: "Building",
    desc: "A family of 8 AI-developer products I'm building in the open — each its own page.",
    icon: Boxes,
    color: "#EC4899",
  },
  {
    href: "/contact",
    label: "Contact",
    desc: "Hiring, collaborating, or just want to talk shop? Let's build something.",
    icon: Mail,
    color: "#10B981",
  },
];

export default function HomeExplore() {
  return (
    <section id="explore" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-30" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Explore"
          title={
            <>
              Where do you want to <span className="text-gradient">go</span>?
            </>
          }
          description="The site is split into focused pages — pick a path."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <MotionSectionCard
                key={c.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.06 }}
                accent={c.color}
                glowClassName="-right-10 -top-10 h-28 w-28 opacity-25 group-hover:opacity-50"
                className="p-0 hover:-translate-y-1"
              >
                <Link href={c.href} className="flex h-full flex-col p-6">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{
                      background: `${c.color}1a`,
                      boxShadow: `inset 0 0 0 1px ${c.color}40`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: c.color }} />
                  </span>
                  <h3 className="mt-4 flex items-center gap-1 font-display text-xl font-semibold text-ink">
                    {c.label}
                    <ArrowUpRight className="h-4 w-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.desc}
                  </p>
                </Link>
              </MotionSectionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
