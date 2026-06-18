"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Shared glass-card shell used by the uniform grid sections (BuildingNow,
// SystemArchitect capabilities, CaseStudy phases). Encapsulates the repeated
// `border + bg-overlay + rounded + overflow + group` shell and the decorative
// corner accent-glow. Per-use spacing/hover go through `className`; the glow's
// size/position/opacity go through `glowClassName`. Animate it by wrapping with
// framer-motion's `motion.create(SectionCard)`.
type SectionCardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Accent color for the corner glow. Omit for no glow. */
  accent?: string;
  /** Tailwind classes controlling the glow's size/position/opacity. */
  glowClassName?: string;
};

const SectionCard = forwardRef<HTMLDivElement, SectionCardProps>(
  function SectionCard(
    { accent, glowClassName, className, children, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-overlay/10 bg-overlay/[0.03] transition",
          className,
        )}
        {...rest}
      >
        {accent && (
          <div
            className={cn(
              "pointer-events-none absolute rounded-full blur-2xl transition",
              glowClassName,
            )}
            style={{ background: accent }}
          />
        )}
        {children}
      </div>
    );
  },
);

export default SectionCard;
