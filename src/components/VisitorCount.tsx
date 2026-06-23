"use client";

import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function VisitorCount() {
  const [views, setViews] = useState<number | null>(null);
  const counted = useRef(false);

  useEffect(() => {
    // Guard against React 18 strict-mode double-invoke in dev so a single page
    // load increments the counter once.
    if (counted.current) return;
    counted.current = true;

    fetch("/api/views", { method: "POST" })
      .then((r) => r.json())
      .then((d: { views: number | null }) => setViews(d.views))
      .catch(() => setViews(null));
  }, []);

  if (views === null) return null;

  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint"
      title="Total page views"
    >
      <Eye className="h-3.5 w-3.5 text-brand-cyan" />
      {views.toLocaleString()} views
    </span>
  );
}
