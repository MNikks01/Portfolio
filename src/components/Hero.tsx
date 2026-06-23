"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { easeOutExpo } from "@/lib/utils";
import { badges, floatingTech } from "@/content/hero";
import { site } from "@/content/site";
import CanvasBoundary from "./three/CanvasBoundary";

const TechSphere = dynamic(() => import("./three/TechSphere"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-40 w-40 animate-pulse-glow rounded-full bg-brand-blue/30 blur-3xl" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-40 bg-gradient-to-b from-transparent to-bg-deep" />

      {/* 3D scene */}
      <div className="absolute inset-0 z-0">
        <CanvasBoundary
          fallback={
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-56 w-56 animate-pulse-glow rounded-full bg-brand-blue/20 blur-3xl" />
            </div>
          }
        >
          <TechSphere />
        </CanvasBoundary>
      </div>

      {/* readability scrim — keeps the left-aligned copy crisp over the 3D core */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-bg-deep via-bg-deep/75 to-transparent md:via-bg-deep/50" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-bg-deep via-transparent to-transparent" />

      {/* Floating tech labels */}
      {floatingTech.map((t) => (
        <motion.div
          key={t.label}
          className="pointer-events-none absolute z-10 hidden md:block"
          style={{ left: t.x, top: t.y }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 + t.delay, duration: 0.8, ease: easeOutExpo }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: t.delay,
            }}
            className="glass-light flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: t.color, boxShadow: `0 0 10px ${t.color}` }}
            />
            <span className="text-soft">{t.label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-32 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: easeOutExpo }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-overlay/10 bg-overlay/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-soft backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Online · Available for senior roles
        </motion.div>

        <h1 className="animate-name-glow font-display text-[clamp(2.5rem,10vw,5.25rem)] font-bold leading-[0.92] tracking-tight">
          <span className="block">
            {site.name.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 1.9 + i * 0.05,
                  duration: 0.7,
                  ease: easeOutExpo,
                }}
                className="text-gradient inline-block"
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.65, duration: 0.7, ease: easeOutExpo }}
          className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-muted"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
          Senior Full Stack Engineer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.7, ease: easeOutExpo }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-soft md:text-xl"
        >
          Building{" "}
          <span className="text-ink">scalable distributed systems</span>,{" "}
          <span className="text-ink">AI-powered developer tools</span>, and{" "}
          <span className="text-ink">modern cloud platforms</span>. Engineering
          excellence from architecture to pixel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.7, ease: easeOutExpo }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/work"
            className="btn-glow group relative inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bg-deep transition hover:scale-[1.02]"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href={site.resume}
            className="group inline-flex items-center gap-2 rounded-full border border-overlay/15 bg-overlay/5 px-5 py-3 text-sm font-medium text-fg transition hover:border-overlay/30 hover:bg-overlay/10"
          >
            <Download className="h-4 w-4 text-brand-cyan" />
            Download Resume
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-overlay/10 px-5 py-3 text-sm font-medium text-soft transition hover:border-brand-purple hover:text-ink"
          >
            <Mail className="h-4 w-4 text-brand-purple" />
            Contact Me
          </Link>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center gap-2"
        >
          {badges.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.25 + i * 0.06 }}
              className="inline-flex items-center gap-2 rounded-full border border-overlay/10 bg-overlay/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-soft"
            >
              <span className="h-1 w-1 rounded-full bg-brand-cyan shadow-[0_0_8px_#22d3ee]" />
              {b}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
          Scroll
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-2 inline-grid h-7 w-7 place-items-center rounded-full border border-overlay/15"
        >
          <ArrowDown className="h-3.5 w-3.5 text-muted" />
        </motion.div>
      </motion.a>
    </section>
  );
}
