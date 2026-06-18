"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 25, stiffness: 250, mass: 0.35 });
  const sy = useSpring(y, { damping: 25, stiffness: 250, mass: 0.35 });
  const [variant, setVariant] = useState<"default" | "hover">("default");
  const isFine = useRef(false);

  useEffect(() => {
    isFine.current =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;
    if (!isFine.current) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [role='button'], [data-cursor='hover']") !== null
      ) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
          animate={{
            width: variant === "hover" ? 56 : 18,
            height: variant === "hover" ? 56 : 18,
            backgroundColor:
              variant === "hover"
                ? "rgba(139,92,246,0.18)"
                : "rgba(0,212,255,0.55)",
            boxShadow:
              variant === "hover"
                ? "0 0 40px rgba(139,92,246,0.6)"
                : "0 0 20px rgba(0,212,255,0.6)",
            border:
              variant === "hover"
                ? "1px solid rgba(236,72,153,0.6)"
                : "1px solid rgba(34,211,238,0.4)",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 240 }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink md:block"
        style={{ x, y }}
      />
    </>
  );
}
