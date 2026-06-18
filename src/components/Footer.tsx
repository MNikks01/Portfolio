"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-overlay/10 bg-gradient-to-b from-transparent to-overlay/[0.04]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <div className="font-display text-2xl font-bold">
            <span className="text-gradient">Nikhil Meshram</span>
          </div>
          <p className="mt-1 text-sm text-faint">
            Senior Full Stack Engineer · AI · DevOps · Cloud
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
          <a
            href="mailto:mnikks01@gmail.com"
            className="inline-flex items-center gap-2 hover:text-brand-cyan"
          >
            <Mail className="h-4 w-4" /> mnikks01@gmail.com
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-purple" /> Nagpur, Maharashtra
          </span>
          <a
            href="https://github.com/MNikks01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-brand-cyan"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/nikhil-shakya-5b7318a1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-brand-cyan"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-overlay/5 px-6 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        © {new Date().getFullYear()} Nikhil Meshram · Built with Next.js,
        Three.js & Framer Motion
      </div>
    </footer>
  );
}
