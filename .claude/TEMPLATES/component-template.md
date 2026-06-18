# Component / Section Template

Reference shape for a new portfolio section (`src/components/<Name>.tsx`).

```tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const items = [
  // data sourced from docs/ — keep in sync
];

export default function <Name>() {
  return (
    <section id="<id>" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="<eyebrow>"
          title={
            <>
              … <span className="text-gradient">highlight</span>
            </>
          }
          description="…"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
              className="rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-6"
            >
              {/* tokens only — text-ink/soft/muted/faint, never white/zinc */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Then: import in `src/app/page.tsx`, add nav link if primary, document in
`docs/portfolio/`.
