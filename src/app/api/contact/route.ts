import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

// --- Basic in-memory rate limiting -----------------------------------------
// Per-instance and best-effort (serverless instances aren't shared), but it
// stops trivial floods. For strong limits use a shared store (Upstash/Redis).
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

// --- Validation -------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = { name?: unknown; email?: unknown; message?: unknown };

function validate(
  body: ContactBody,
): { ok: true } | { ok: false; error: string } {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 1 || name.length > 100)
    return { ok: false, error: "Name must be 1–100 characters." };
  if (!EMAIL_RE.test(email) || email.length > 200)
    return { ok: false, error: "A valid email is required." };
  if (message.length < 10 || message.length > 5000)
    return { ok: false, error: "Message must be 10–5000 characters." };

  return { ok: true };
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: 400 },
    );
  }

  const { name, email, message } = body as {
    name: string;
    email: string;
    message: string;
  };

  // Deliver via Resend if configured; otherwise accept and log so the form is
  // functional in environments without a key (e.g. local/preview).
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO ?? site.email],
          reply_to: email,
          subject: `Portfolio contact from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });
      if (!res.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: "Could not send your message. Please email me directly.",
          },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Could not send your message. Please email me directly.",
        },
        { status: 502 },
      );
    }
  } else {
    console.warn(
      "[contact] RESEND_API_KEY not set — message accepted but not delivered.",
    );
  }

  return NextResponse.json({ ok: true });
}
