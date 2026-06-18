# .claude/CLAUDE.md — AI Operating System entry point

**Any AI agent entering this repository should read this file first.**

This repo is an **AI-native repository**: it is self-describing for Claude Code,
Claude Desktop, Cursor, ChatGPT, Codex, Copilot, Gemini, Cline, Roo Code,
OpenHands, Aider, Continue.dev, OpenCode, and future agents.

## What this repository is

The personal portfolio of **Nikhil** (display name; full name Nikhil Meshram) —
a Senior Full Stack / Product / AI Engineer. A single-page **Next.js 15 + React
19 + TypeScript + Tailwind** site with a dark/light theme, Framer Motion, and a
React-Three-Fiber 3D hero. Deployed on Netlify (auto-deploy from `main`).

## Read these, in order

1. [USER_CONTEXT.md](./USER_CONTEXT.md) — who Nikhil is.
2. [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) — what this project is.
3. [ARCHITECTURE.md](./ARCHITECTURE.md) — how the code is structured.
4. [CODING_STANDARDS.md](./CODING_STANDARDS.md) — how to write code here.
5. [WORKFLOWS.md](./WORKFLOWS.md) — how to perform common tasks.
6. [TASKS.md](./TASKS.md) + [BACKLOG.md](./BACKLOG.md) — what's pending.
7. Specialized agents in [AGENTS/](./AGENTS), checklists in
   [CHECKLISTS/](./CHECKLISTS), templates in [TEMPLATES/](./TEMPLATES).

The **canonical knowledge base** lives in [`/docs`](../docs/README.md). Machine
context/memory lives in [`/.ai`](../.ai). Cursor rules live in
[`/.cursor`](../.cursor).

## Golden rules (non-negotiable)

1. **Docs are the source of truth.** Update `/docs` first, then the portfolio
   presentation in `/src`. Never let content drift.
2. **Token-driven theming.** Never use literal `white`/`zinc` classes. Use
   `text-ink/fg/soft/muted/faint`, `bg-overlay/<a>`, `border-overlay/<a>`,
   `bg-bg-deep/panel`. Both themes must work.
3. **Don't redesign.** Preserve the visual identity, palette, typography,
   layout, and animation language.
4. **Quality gate before done:** `npm run format && npm run lint && npm run
typecheck && npm test && npm run build` must all pass.
5. **Self-improving governance.** When you change code, update
   [`/docs/governance`](../docs/governance) (checklist, tech-debt, backlog,
   roadmap, audit). See [WORKFLOWS.md](./WORKFLOWS.md#self-improvement).
6. **Never commit secrets.** `.env*` is gitignored (except `.env.example`).

## AI behavior guidelines

- Be explicit about assumptions; prefer verifying in code over guessing.
- Keep changes focused; match surrounding style.
- After any content/behavior change, sync the relevant `/docs` files.
- If you discover debt or a missing best practice, add a backlog item
  (self-improvement system) rather than silently ignoring it.

> Note: a sibling [root `CLAUDE.md`](../CLAUDE.md) holds the developer quickstart
> (commands, conventions). This file is the AI-OS hub.
