"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { easeOutExpo } from "@/lib/utils";

const TechSphere = dynamic(() => import("./three/TechSphere"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-40 w-40 animate-pulse-glow rounded-full bg-brand-blue/30 blur-3xl" />
    </div>
  ),
});

const badges = [
  "5+ Years Experience",
  "MERN",
  "Node.js",
  "AWS",
  "Docker",
  "AI Engineering",
];

const floatingTech = [
  { label: "React", color: "#22D3EE", x: "8%", y: "20%", delay: 0 },
  { label: "Next.js", color: "#ffffff", x: "82%", y: "18%", delay: 0.2 },
  { label: "Node.js", color: "#10B981", x: "12%", y: "70%", delay: 0.4 },
  { label: "AWS", color: "#F59E0B", x: "84%", y: "62%", delay: 0.6 },
  { label: "Docker", color: "#00D4FF", x: "50%", y: "8%", delay: 0.8 },
  { label: "MCP", color: "#EC4899", x: "50%", y: "84%", delay: 1.0 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-40 bg-gradient-to-b from-transparent to-bg-deep" />

      {/* 3D scene */}
      <div className="absolute inset-0 z-0">
        <TechSphere />
      </div>

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
            <span className="text-zinc-300">{t.label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-32 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: easeOutExpo }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Online · Available for senior roles
        </motion.div>

        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-[5.5rem]">
          {"Nikhil".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: 1.9 + i * 0.05,
                duration: 0.7,
                ease: easeOutExpo,
              }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
          <span className="mx-3 inline-block" />
          {"Meshram".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: 2.25 + i * 0.05,
                duration: 0.7,
                ease: easeOutExpo,
              }}
              className="text-gradient inline-block"
            >
              {c}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.65, duration: 0.7, ease: easeOutExpo }}
          className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-zinc-400"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
          Senior Full Stack Engineer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.7, ease: easeOutExpo }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-zinc-300 md:text-xl"
        >
          Building{" "}
          <span className="text-white">scalable distributed systems</span>,{" "}
          <span className="text-white">AI-powered developer tools</span>, and{" "}
          <span className="text-white">modern cloud platforms</span>. Engineering
          excellence from architecture to pixel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.7, ease: easeOutExpo }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="btn-glow group relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-bg-deep transition hover:scale-[1.02]"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/10"
          >
            <Download className="h-4 w-4 text-brand-cyan" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-brand-purple hover:text-white"
          >
            <Mail className="h-4 w-4 text-brand-purple" />
            Contact Me
          </a>
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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-300"
            >
              <span className="h-1 w-1 rounded-full bg-brand-cyan shadow-[0_0_8px_#22d3ee]" />
              {b}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Scroll
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-2 inline-grid h-7 w-7 place-items-center rounded-full border border-white/15"
        >
          <ArrowDown className="h-3.5 w-3.5 text-zinc-400" />
        </motion.div>
      </motion.a>
    </section>
  );
}
