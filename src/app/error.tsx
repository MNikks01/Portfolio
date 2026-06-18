"use client";

import { useEffect } from "react";
import { RefreshCw, Home } from "lucide-react";

// Route-level error boundary. Catches render/runtime errors below the root
// layout and degrades to a branded, token-driven recovery screen instead of
// Next's default error page. (The 3D hero keeps its own CanvasBoundary.)
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for monitoring; stripped from prod client bundles via removeConsole.
    console.error(error);
  }, [error]);

  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-bg-deep px-6">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative z-10 max-w-md text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-faint">
          Error
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Something <span className="text-gradient">broke</span>.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          An unexpected error interrupted the page. You can retry, or head back
          to the top.
        </p>
        {error.digest && (
          <p className="mt-2 font-mono text-[10px] text-faint">
            ref: {error.digest}
          </p>
        )}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bg-deep transition hover:scale-[1.02]"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
          <button
            onClick={() => window.location.assign("/")}
            className="inline-flex items-center gap-2 rounded-full border border-overlay/15 bg-overlay/5 px-5 py-3 text-sm font-medium text-fg transition hover:border-overlay/30 hover:bg-overlay/10"
          >
            <Home className="h-4 w-4 text-brand-cyan" />
            Home
          </button>
        </div>
      </div>
    </main>
  );
}
