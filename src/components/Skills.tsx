"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Atom,
  Cloud,
  Database,
  Cpu,
  Sparkles,
  Smartphone,
  Wrench,
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
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux Toolkit", level: 90 },
      { name: "TanStack Query", level: 86 },
      { name: "JavaScript", level: 95 },
      { name: "Context API", level: 90 },
      { name: "React Router", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "Shadcn UI", level: 88 },
      { name: "HTML5", level: 96 },
      { name: "CSS3", level: 94 },
      { name: "Responsive Design", level: 95 },
      { name: "Accessibility", level: 88 },
      { name: "Performance", level: 88 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#00D4FF",
    icon: Cpu,
    skills: [
      { name: "Node.js", level: 94 },
      { name: "Express.js", level: 93 },
      { name: "REST APIs", level: 94 },
      { name: "GraphQL", level: 88 },
      { name: "Microservices", level: 86 },
      { name: "Socket.IO", level: 88 },
      { name: "JWT", level: 90 },
      { name: "OAuth", level: 88 },
      { name: "Auth & RBAC", level: 88 },
      { name: "BullMQ", level: 84 },
      { name: "RabbitMQ", level: 84 },
      { name: "Webhooks", level: 84 },
      { name: "Cron Jobs", level: 85 },
      { name: "Payments", level: 80 },
      { name: "File Processing", level: 85 },
      { name: "Distributed Systems", level: 84 },
    ],
  },
  {
    id: "data",
    label: "Databases",
    color: "#10B981",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "Mongoose", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "Prisma", level: 86 },
      { name: "Redis", level: 84 },
      { name: "Firebase", level: 86 },
      { name: "Supabase", level: 82 },
      { name: "Cloudinary", level: 86 },
      { name: "MinIO", level: 80 },
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
      { name: "GitHub Actions", level: 88 },
      { name: "CI/CD", level: 88 },
      { name: "Nginx", level: 82 },
      { name: "AWS EC2", level: 85 },
      { name: "AWS S3", level: 86 },
      { name: "AWS RDS", level: 82 },
      { name: "AWS ECS", level: 80 },
      { name: "AWS ECR", level: 80 },
      { name: "Prometheus", level: 80 },
      { name: "Grafana", level: 82 },
      { name: "Linux", level: 86 },
      { name: "Monitoring", level: 84 },
      { name: "Logging", level: 84 },
    ],
  },
  {
    id: "ai",
    label: "AI Engineering",
    color: "#EC4899",
    icon: Sparkles,
    skills: [
      { name: "MCP", level: 92 },
      { name: "Claude Code", level: 92 },
      { name: "Cursor", level: 90 },
      { name: "AI-Assisted Dev", level: 90 },
      { name: "LLM Integration", level: 88 },
      { name: "Prompt Engineering", level: 88 },
      { name: "AI Workflows", level: 86 },
      { name: "Developer Tooling", level: 88 },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    color: "#F59E0B",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 88 },
      { name: "Expo", level: 86 },
      { name: "React Navigation", level: 86 },
      { name: "Push Notifications", level: 84 },
      { name: "Cross-Platform", level: 86 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    color: "#22D3EE",
    icon: Wrench,
    skills: [
      { name: "Git", level: 94 },
      { name: "GitHub", level: 94 },
      { name: "VS Code", level: 92 },
      { name: "Cursor", level: 90 },
      { name: "Postman", level: 90 },
      { name: "Vercel", level: 88 },
      { name: "Netlify", level: 88 },
      { name: "Figma", level: 80 },
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
          {/* Category Selector — wrapping pills on mobile, rich list on desktop */}
          <div className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
            {categories.map((c) => {
              const Icon = c.icon;
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  onMouseEnter={() => setActive(c.id)}
                  onClick={() => setActive(c.id)}
                  className={`group relative flex items-center gap-2 rounded-full border px-3.5 py-2 text-left transition-all lg:gap-3 lg:rounded-2xl lg:px-4 lg:py-3 ${
                    isActive
                      ? "border-overlay/15 bg-overlay/5"
                      : "border-overlay/5 hover:border-overlay/10 hover:bg-overlay/5"
                  }`}
                  style={
                    isActive
                      ? { boxShadow: `0 0 32px ${c.color}30` }
                      : undefined
                  }
                >
                  {/* desktop icon tile */}
                  <span
                    className="hidden h-9 w-9 place-items-center rounded-xl lg:grid"
                    style={{
                      background: `${c.color}1a`,
                      boxShadow: `inset 0 0 0 1px ${c.color}40`,
                    }}
                  >
                    <Icon className="h-4 w-4" style={{ color: c.color }} />
                  </span>
                  {/* mobile color dot */}
                  <span
                    className="h-2 w-2 shrink-0 rounded-full lg:hidden"
                    style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }}
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold leading-tight text-ink">
                      {c.label}
                    </span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-widest text-faint lg:block">
                      {c.skills.length} tech
                    </span>
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="skill-pill"
                      className="absolute inset-y-2 right-2 hidden w-1 rounded-full lg:block"
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
          <div className="relative overflow-hidden rounded-3xl border border-overlay/10 bg-gradient-to-b from-overlay/[0.03] to-transparent p-6 md:p-10">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

            <Constellation key={current.id} category={current} />

            <div className="relative z-10 mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {current.skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl border border-overlay/10 bg-overlay/[0.03] p-4 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-ink">
                      {s.name}
                    </span>
                    <span className="font-mono text-[10px] text-faint">
                      {s.level}%
                    </span>
                  </div>
                  <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-overlay/10">
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
  // keep the orbit readable — show the category's signature skills
  const nodes = category.skills.slice(0, 6);
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
        {nodes.map((s, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
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
