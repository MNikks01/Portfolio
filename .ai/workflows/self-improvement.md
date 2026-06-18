# Workflow — Self-Improvement (automatic backlog generation)

Goal: the repo continuously detects gaps and turns them into tracked work.

## Triggers

- Any code change / PR.
- Any audit (`production-audit.md`).
- New tooling, dependency, or framework version.

## Detect

Scan for:

- **Technical debt** — duplication, workarounds, TODOs, dead code.
- **Missing best practices** — error boundaries, validation, memoization, types.
- **Security** — missing headers/CSP, unsafe HTML, secret exposure, vuln deps.
- **Accessibility** — missing ARIA/labels, contrast, keyboard traps.
- **Performance** — bundle regressions, layout shift, unnecessary re-renders.

## Record (automatically)

For each finding:

1. Add/refresh an entry in `docs/governance/technical-debt.md` (`TD-XXX`: Issue ·
   Impact · Priority · Suggested Fix · Status).
2. Add a backlog item in `docs/governance/backlog.md` with a priority:
   - **P1** security/correctness/hardening
   - **P2** important quality/coverage/perf
   - **P3** polish/docs/nice-to-have
3. Reflect sequencing in `docs/governance/roadmap.md` (Now/Next/Later).
4. Flip the matching line in `docs/governance/production-checklist.md`.
5. For non-trivial scans, append to `docs/governance/audit-report.md`.
6. **Re-score `docs/governance/scorecard.md`** — update the affected category
   score(s), the overall mean, the trend arrows, and the "Last scored" date so
   the scorecard always reflects the latest audit. Scores move only with real
   changes (a finding lowers the relevant category; a fix raises it).

## Principle

Never silently ignore a gap — make it visible as a tracked item. Every audit
ends with the full governance set in sync: **checklist, technical-debt, backlog,
roadmap, audit-report, and scorecard.**
