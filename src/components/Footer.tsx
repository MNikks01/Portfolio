"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";
import { links } from "@/content/navigation";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-overlay/10 bg-gradient-to-b from-transparent to-overlay/[0.04]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <div className="font-display text-2xl font-bold">
            <span className="text-gradient">{site.name}</span>
          </div>
          <p className="mt-1 text-sm text-faint">{site.tagline}</p>
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 hover:text-brand-cyan"
          >
            <Mail className="h-4 w-4" /> {site.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-purple" /> {site.location}
          </span>
          <a
            href={site.social.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-brand-cyan"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={site.social.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-brand-cyan"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-overlay/5 px-6 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        © {new Date().getFullYear()} {site.name} · Built with Next.js, Three.js
        &amp; Framer Motion
      </div>
    </footer>
  );
}
