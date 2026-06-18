import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Generates /opengraph-image at build time (replaces the previously-missing
// static /og.png). Next auto-wires the og:image metadata to this route, so the
// preview stays in sync with site.ts and can never go stale.
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#030712",
        backgroundImage:
          "radial-gradient(circle at 18% 22%, rgba(0,212,255,0.22), transparent 42%), radial-gradient(circle at 82% 78%, rgba(139,92,246,0.22), transparent 45%)",
        color: "#f8fafc",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: 22,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#94a3b8",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 9999,
            background: "#22d3ee",
          }}
        />
        {site.role}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 150,
          fontWeight: 700,
          lineHeight: 1,
          marginTop: 28,
          background: "linear-gradient(90deg, #22d3ee, #8b5cf6, #ec4899)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {site.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 34,
          marginTop: 28,
          maxWidth: 900,
          color: "#cbd5e1",
          lineHeight: 1.35,
        }}
      >
        Scalable distributed systems · AI-powered developer tools · modern cloud
        platforms.
      </div>
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: 44,
          fontSize: 24,
          color: "#64748b",
        }}
      >
        MERN · Node.js · AWS · Docker · MCP
      </div>
    </div>,
    { ...size },
  );
}
