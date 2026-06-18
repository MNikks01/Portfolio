"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-3xl light:bg-brand-purple/40"
        animate={{ y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-brand-blue/20 blur-3xl light:bg-brand-blue/40"
        animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/3 h-[440px] w-[440px] rounded-full bg-brand-pink/15 blur-3xl light:bg-brand-pink/30"
        animate={{ y: [0, 40, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle moving grid */}
      <div className="scanline absolute inset-0 opacity-50" />
    </div>
  );
}
