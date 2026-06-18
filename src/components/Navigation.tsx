"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#founder", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#casestudy", label: "Work" },
  { href: "#now", label: "Building" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all",
        )}
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between gap-6 rounded-2xl px-4 py-2 transition-all duration-500",
            scrolled
              ? "glass shadow-glow"
              : "border border-transparent bg-transparent",
          )}
        >
          <a
            href="#top"
            className="group flex items-center gap-2 font-display text-sm font-bold tracking-tight"
          >
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple text-bg-deep shadow-glow-cyan">
              N
              <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple opacity-30 blur-sm" />
            </span>
            <span className="hidden sm:block">
              Nikhil<span className="text-brand-cyan">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative px-3 py-2 text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-brand-blue to-brand-purple transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="https://github.com/MNikks01"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-brand-cyan"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/nikhil-shakya-5b7318a1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-brand-cyan"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-overlay/5 px-3 py-1.5 text-xs font-medium text-ink ring-1 ring-overlay/10 transition hover:bg-overlay/10"
            >
              <Mail className="h-3.5 w-3.5" />
              Let&apos;s talk
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-lg bg-overlay/5 ring-1 ring-overlay/10"
            >
              {open ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          open
            ? { y: 0, opacity: 1, pointerEvents: "auto" }
            : { y: -20, opacity: 0, pointerEvents: "none" }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-4 top-20 z-40 rounded-2xl glass p-4 md:hidden"
      >
        <ul className="grid gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-soft hover:bg-overlay/5 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
