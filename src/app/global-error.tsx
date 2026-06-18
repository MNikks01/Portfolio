"use client";

import { useEffect } from "react";
import "./globals.css";

// Last-resort boundary: catches errors in the root layout itself, so it must
// render its own <html>/<body>. Imports globals.css to keep the design tokens
// available even when the normal layout failed.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-bg-deep font-sans text-fg antialiased">
        <main className="grid min-h-[100svh] place-items-center px-6 text-center">
          <div className="max-w-md">
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-faint">
              Fatal error
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
              The page failed to load.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A critical error occurred. Please reload the page.
            </p>
            {error.digest && (
              <p className="mt-2 font-mono text-[10px] text-faint">
                ref: {error.digest}
              </p>
            )}
            <button
              onClick={reset}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bg-deep transition hover:scale-[1.02]"
            >
              Reload
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
