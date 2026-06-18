"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p >= 100) {
        p = 100;
        setProgress(100);
        clearInterval(id);
        setTimeout(() => setDone(true), 450);
      } else {
        setProgress(p);
      }
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg-deep"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 -m-10 animate-pulse-glow rounded-full bg-brand-blue/30 blur-3xl" />
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                className="relative"
              >
                <defs>
                  <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="42"
                  cy="42"
                  r="34"
                  fill="none"
                  stroke="url(#lg)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "42px 42px" }}
                />
                <text
                  x="50%"
                  y="54%"
                  textAnchor="middle"
                  fill="#fff"
                  fontFamily="var(--font-space-grotesk)"
                  fontWeight="700"
                  fontSize="26"
                >
                  N
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="font-mono text-xs uppercase tracking-[0.4em] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Booting Engineering OS
            </motion.div>

            <div className="relative h-[2px] w-64 overflow-hidden rounded-full bg-overlay/10">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.35 }}
              />
            </div>
            <div className="font-mono text-[10px] tabular-nums text-faint">
              {progress.toFixed(0).padStart(3, "0")}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
