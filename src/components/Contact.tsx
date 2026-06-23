"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";

export default function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }
      setState("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setState("idle"), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
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
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={site.phone}
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value={site.location}
              />
              <ContactRow
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
                value={site.social.github.handle}
                href={site.social.github.url}
              />
              <ContactRow
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value={site.social.linkedin.handle}
                href={site.social.linkedin.url}
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
              <p
                role={state === "error" ? "alert" : undefined}
                className={`font-mono text-[10px] uppercase tracking-widest ${
                  state === "error" ? "text-brand-pink" : "text-faint"
                }`}
              >
                {state === "error" ? error : "Secure · End-to-end · Personal"}
              </p>
              <button
                type="submit"
                disabled={state === "loading"}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bg-deep transition disabled:opacity-70"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {(state === "idle" || state === "error") && (
                    <motion.span
                      key="idle"
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      {state === "error" ? "Retry" : "Send Message"}
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
          className="mt-2 block w-full resize-none rounded-2xl border border-overlay/10 bg-overlay/[0.03] px-4 py-3 text-sm text-ink outline-none transition placeholder:text-faint focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/40"
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="mt-2 block w-full rounded-2xl border border-overlay/10 bg-overlay/[0.03] px-4 py-3 text-sm text-ink outline-none transition placeholder:text-faint focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/40"
        />
      )}
    </label>
  );
}
