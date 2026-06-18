"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", color: "#00D4FF" },
  { value: 100, suffix: "+", label: "School Demonstrations", color: "#EC4899" },
  { value: 50, suffix: "+", label: "Schools Engaged", color: "#10B981" },
  { value: 3, suffix: "", label: "Career Transformations", color: "#8B5CF6" },
  { value: 8, suffix: "+", label: "Products & Apps Built", color: "#F59E0B" },
  { value: 40, suffix: "+", label: "Technologies", color: "#22D3EE" },
  { value: 100, suffix: "K+", label: "Lines of Code", color: "#8B5CF6" },
  {
    value: 1000,
    suffix: "+",
    label: "Hours Building Products",
    color: "#00D4FF",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="relative overflow-hidden rounded-3xl border border-overlay/10 bg-overlay/[0.03] p-6 text-center md:p-8"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-3xl"
              style={{ background: s.color }}
            />
            <Counter value={s.value} color={s.color} suffix={s.suffix} />
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Counter({
  value,
  color,
  suffix,
}: {
  value: number;
  color: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, mv, value]);

  return (
    <div
      className="font-display text-5xl font-bold tracking-tight md:text-6xl"
      style={{ color }}
    >
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </div>
  );
}
