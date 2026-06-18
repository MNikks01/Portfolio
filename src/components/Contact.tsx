"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    // Simulate request — wire to your endpoint of choice (Resend, /api/contact, etc.)
    setTimeout(() => {
      setState("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setState("idle"), 4000);
    }, 1100);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-gradient">extraordinary</span>
            </>
          }
          description="Open to senior engineering roles, contract work, and ambitious product collaborations."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-overlay/10 bg-gradient-to-br from-overlay/[0.04] to-transparent p-6 md:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-purple/30 opacity-50 blur-3xl" />
            <h3 className="font-display text-2xl font-semibold text-ink">
              Let&apos;s talk
            </h3>
            <p className="mt-2 text-sm text-muted">
              I usually reply within 24 hours.
            </p>

            <div className="mt-8 grid gap-4">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value="mnikks01@gmail.com"
                href="mailto:mnikks01@gmail.com"
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="Nagpur, Maharashtra"
              />
              <ContactRow
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
                value="@MNikks01"
                href="https://github.com/MNikks01"
              />
              <ContactRow
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value="nikhil-shakya"
                href="https://linkedin.com/in/nikhil-shakya-5b7318a1"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-overlay/10 bg-overlay/[0.03] p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@company.com"
                required
              />
            </div>
            <Field
              label="Message"
              textarea
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              placeholder="Tell me about the project, role, or idea..."
              required
            />
            <div className="mt-6 flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Secure · End-to-end · Personal
              </p>
              <button
                type="submit"
                disabled={state === "loading"}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bg-deep transition disabled:opacity-70"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {state === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </motion.span>
                  )}
                  {state === "loading" && (
                    <motion.span
                      key="loading"
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      Sending<span className="ml-1 animate-pulse">…</span>
                    </motion.span>
                  )}
                  {state === "success" && (
                    <motion.span
                      key="success"
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      className="inline-flex items-center gap-2 text-emerald-700"
                    >
                      <Check className="h-4 w-4" /> Sent — talk soon
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-overlay/10 bg-overlay/[0.02] px-4 py-3 transition hover:border-overlay/20 hover:bg-overlay/[0.05]"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-overlay/5 text-brand-cyan ring-1 ring-overlay/10">
          {icon}
        </span>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-faint">
            {label}
          </div>
          <div className="text-sm text-ink">{value}</div>
        </div>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
      )}
    </Tag>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        {label}
      </span>
      {textarea ? (
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className="mt-2 block w-full resize-none rounded-2xl border border-overlay/10 bg-overlay/[0.03] px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/40"
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-2 block w-full rounded-2xl border border-overlay/10 bg-overlay/[0.03] px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/40"
        />
      )}
    </label>
  );
}
