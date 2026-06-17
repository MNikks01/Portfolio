"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Atom,
  Cloud,
  Database,
  Cpu,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Category = {
  id: string;
  label: string;
  color: string;
  icon: typeof Atom;
  skills: { name: string; level: number }[];
};

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#22D3EE",
    icon: Atom,
    skills: [
      { name: "React", level: 96 },
      { name: "Next.js", level: 94 },
      { name: "TypeScript", level: 93 },
      { name: "Redux", level: 88 },
      { name: "Tailwind", level: 95 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#00D4FF",
    icon: Cpu,
    skills: [
      { name: "Node.js", level: 94 },
      { name: "Express", level: 92 },
      { name: "GraphQL", level: 86 },
      { name: "Socket.IO", level: 85 },
      { name: "JWT", level: 90 },
      { name: "OAuth", level: 88 },
    ],
  },
  {
    id: "data",
    label: "Databases",
    color: "#10B981",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 84 },
      { name: "Prisma", level: 86 },
      { name: "Firebase", level: 82 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    color: "#8B5CF6",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 92 },
      { name: "Docker Compose", level: 90 },
      { name: "Nginx", level: 80 },
      { name: "GitHub Actions", level: 88 },
      { name: "Kubernetes", level: 78 },
      { name: "AWS", level: 86 },
    ],
  },
  {
    id: "ai",
    label: "AI & Tooling",
    color: "#EC4899",
    icon: Sparkles,
    skills: [
      { name: "MCP", level: 92 },
      { name: "Claude", level: 90 },
      { name: "Cursor", level: 88 },
      { name: "AI Agents", level: 86 },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<string>("frontend");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Stack"
          title={
            <>
              A polyglot{" "}
              <span className="text-gradient">engineering stack</span>
            </>
          }
          description="From pixels to pods. The toolkit I reach for to ship production systems at speed."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[300px_1fr]">
          {/* Category Selector */}
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
            {categories.map((c) => {
              const Icon = c.icon;
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  onMouseEnter={() => setActive(c.id)}
                  onClick={() => setActive(c.id)}
                  className={`group relative flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${
                    isActive
                      ? "border-white/15 bg-white/5"
                      : "border-white/5 hover:border-white/10 hover:bg-white/5"
                  }`}
                  style={
                    isActive
                      ? { boxShadow: `0 0 32px ${c.color}30` }
                      : undefined
                  }
                >
                  <span
                    className="grid h-9 w-9 place-items-center rounded-xl"
                    style={{
                      background: `${c.color}1a`,
                      boxShadow: `inset 0 0 0 1px ${c.color}40`,
                    }}
                  >
                    <Icon className="h-4 w-4" style={{ color: c.color }} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {c.label}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      {c.skills.length} tech
                    </div>
                  </div>
                  {isActive && (
                    <motion.span
                      layoutId="skill-pill"
                      className="absolute inset-y-2 right-2 w-1 rounded-full"
                      style={{
                        background: c.color,
                        boxShadow: `0 0 12px ${c.color}`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Constellation Viz */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-10">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

            <Constellation key={current.id} category={current} />

            <div className="relative z-10 mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {current.skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-white">
                      {s.name}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">
                      {s.level}%
                    </span>
                  </div>
                  <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 1.1, delay: 0.1 + i * 0.05 }}
                      className="h-full rounded-full"
                      style={{
                        background: current.color,
                        boxShadow: `0 0 12px ${current.color}`,
                      }}
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition group-hover:opacity-30"
                    style={{ background: current.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Constellation({ category }: { category: Category }) {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 120;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full"
      >
        <defs>
          <radialGradient id="cg" cx="50%" cy="50%">
            <stop offset="0%" stopColor={category.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={category.color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={cx} cy={cy} r={radius + 20} fill="url(#cg)" />
        <motion.circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={category.color}
          strokeOpacity="0.25"
          strokeDasharray="3 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        {category.skills.map((s, i) => {
          const angle = (i / category.skills.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          return (
            <g key={s.name}>
              <motion.line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke={category.color}
                strokeOpacity="0.35"
                strokeWidth={1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r={6}
                fill={category.color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + 0.05 * i, duration: 0.5 }}
                style={{
                  filter: `drop-shadow(0 0 8px ${category.color})`,
                }}
              />
              <text
                x={x}
                y={y - 14}
                textAnchor="middle"
                fontSize={10}
                fill="#e5e7eb"
                fontFamily="var(--font-jetbrains-mono)"
              >
                {s.name}
              </text>
            </g>
          );
        })}
        <circle
          cx={cx}
          cy={cy}
          r={20}
          fill={category.color}
          opacity="0.2"
        />
        <circle
          cx={cx}
          cy={cy}
          r={10}
          fill={category.color}
          style={{ filter: `drop-shadow(0 0 12px ${category.color})` }}
        />
      </svg>
    </div>
  );
}
