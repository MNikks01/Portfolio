import { NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Total page-view counter, persisted in Netlify Blobs. Outside Netlify (e.g.
// `next dev`) the Blobs context is unavailable, so we fail soft and return
// { views: null } — the UI simply hides the badge rather than erroring.
const STORE = "analytics";
const KEY = "page-views";

async function readViews(): Promise<number> {
  const store = getStore(STORE);
  const raw = await store.get(KEY);
  const n = Number(raw);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export async function GET() {
  try {
    return NextResponse.json({ views: await readViews() });
  } catch {
    return NextResponse.json({ views: null });
  }
}

export async function POST() {
  try {
    const store = getStore(STORE);
    const next = (await readViews()) + 1;
    await store.set(KEY, String(next));
    return NextResponse.json({ views: next });
  } catch {
    return NextResponse.json({ views: null });
  }
}
