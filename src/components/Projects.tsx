"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Products I've Built"
          title={
            <>
              Products, not just <span className="text-gradient">features</span>
            </>
          }
          description="Each of these is a product I owned — thinking about the customer, the architecture, and the value delivered, not just the code. Role, problem, and impact up front."
        />

        <div className="mt-16 grid gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-overlay/10 bg-gradient-to-br from-overlay/[0.04] to-overlay/[0.01] p-6 md:p-10"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60"
        style={{ background: project.accent }}
      />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="grid h-10 w-10 place-items-center rounded-xl"
              style={{
                background: `${project.accent}1a`,
                boxShadow: `inset 0 0 0 1px ${project.accent}40`,
              }}
            >
              <Icon className="h-5 w-5" style={{ color: project.accent }} />
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
                {project.role}
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-muted">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-overlay/10 bg-overlay/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-soft"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-4"
              >
                <div
                  className="font-display text-2xl font-bold"
                  style={{ color: project.accent }}
                >
                  {m.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-faint">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-overlay/15 bg-overlay/5 px-4 py-2 text-sm font-medium text-ink transition hover:bg-overlay/10">
            Case Study
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Architecture viz */}
        <div className="relative min-h-[260px] rounded-2xl border border-overlay/10 bg-bg-deep/60 p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
            Architecture
          </div>
          <div className="mt-4 grid gap-2">
            {project.architecture.map((node, i) => (
              <motion.div
                key={node}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="relative flex items-center gap-3"
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: project.accent,
                    boxShadow: `0 0 8px ${project.accent}`,
                  }}
                />
                <div className="flex-1 rounded-lg border border-overlay/10 bg-overlay/[0.03] px-3 py-2 text-xs text-soft">
                  {node}
                </div>
              </motion.div>
            ))}
          </div>
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            preserveAspectRatio="none"
            viewBox="0 0 200 200"
          >
            <motion.path
              d="M20 30 Q 100 60 180 60 Q 60 120 180 160 Q 60 180 20 180"
              fill="none"
              stroke={project.accent}
              strokeWidth="0.5"
              strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
