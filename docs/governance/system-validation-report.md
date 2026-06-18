# System Validation Report

**Date:** 2026-06-18 · **Scope:** `.claude/`, `.cursor/`, `.ai/`, `docs/`,
`src/`, root config. **Method:** automated link/empty-file scan (95 md/mdc files)

- manual structural review.

## Automated checks

| Check                      | Result |
| -------------------------- | ------ |
| Markdown/MDC files scanned | 95     |
| Empty files (0 bytes)      | ✅ 0   |
| Broken relative links      | ✅ 0   |
| `mcp.json` valid JSON      | ✅     |

## Findings

| #   | Finding                                                                                                                                                                                               | Severity   | Resolution                                                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| V1  | **Hardcoded portfolio content** lives inline in React components, duplicating `/docs`.                                                                                                                | 🟠 Medium  | **Fixed this session** — extracted to `src/content/*` (Phase 4); components are now presentation-only.                                                      |
| V2  | **ADR divergence:** `.ai/decisions/ADR-001..003` and `docs/architecture/architecture-decisions.md` (6 ADRs) used **conflicting numbering** (e.g. ADR-003 = "React 19" in docs but "tokens" in `.ai`). | 🟠 Medium  | **Fixed** — `docs/architecture/architecture-decisions.md` is now the single canonical ADR log; `.ai/decisions/` is a pointer (duplicate ADR files removed). |
| V3  | **`public/og.png` missing** but referenced by OpenGraph/Twitter metadata → broken social preview.                                                                                                     | 🟡 Low–Med | Tracked: backlog **P2**, see [assets-plan](../portfolio/assets-plan.md).                                                                                    |
| V4  | Intentional **pointer files** (`.claude/BACKLOG.md`→canonical, `.ai/templates`→`.claude/TEMPLATES`, two `CLAUDE.md`).                                                                                 | 🟢 Info    | By design — documented as pointers; not duplication of content.                                                                                             |
| V5  | `docs/ARCHITECTURE.md` (site architecture) vs `docs/architecture/` (principles/ADRs/standards) — confusingly similar names.                                                                           | 🟢 Info    | Acceptable; cross-linked. Candidate rename later.                                                                                                           |
| V6  | **Skill levels are self-reported** estimates.                                                                                                                                                         | 🟢 Info    | Tracked: TD-009; review periodically.                                                                                                                       |
| V7  | Project docs have **"Screenshots Location" placeholders** with no assets yet.                                                                                                                         | 🟢 Info    | Tracked in [assets-plan](../portfolio/assets-plan.md).                                                                                                      |

## Naming & consistency

- File naming is consistent: kebab-case for docs, `PascalCase` components,
  `SCREAMING` only for true constants. No inconsistencies found.
- Cross-references resolve; `docs/README.md` defines the canonical doc→component
  mapping.

## Conclusion

The system is well-formed (no broken links, no empties). The two real structural
issues — content duplication (V1) and ADR divergence (V2) — are **resolved this
session**. Remaining items (og.png, skill accuracy, screenshots) are tracked in
governance.
