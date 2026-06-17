"use client";

const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "MCP",
  "Claude",
  "Cursor",
  "RabbitMQ",
  "TurboRepo",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-black/30 py-5">
      <div className="flex w-max animate-marquee gap-12 px-6">
        {[...items, ...items].map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 font-display text-2xl font-semibold text-zinc-400 md:text-3xl"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_#22d3ee]" />
            <span>{t}</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-deep to-transparent" />
    </div>
  );
}
