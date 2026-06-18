# Production Checklist

Continuously maintained. Legend: ✅ Completed · ⚠️ Partial · ❌ Missing.
Last reviewed: **2026-06-18** (post-remediation; see
[audit-report.md](./audit-report.md)).

## Architecture

- ⚠️ Feature-based architecture _(section-based, not feature-foldered)_
- ✅ Separation of concerns
- ✅ **Content/presentation split** _(`src/content/*` typed modules + `site.ts`;
  ADR-007)_
- ✅ Reusable components _(`SectionHeading`, `SectionCard`, theme tokens)_
- ✅ Shared utilities _(`lib/utils` `cn`)_
- ✅ No duplicate logic _(shared `SectionCard` for the uniform grids; remaining
  bespoke cards differ by design — TD-008)_
- ✅ Consistent folder structure

## TypeScript

- ✅ Strict mode enabled
- ✅ No `any` types
- ✅ Proper interfaces / typed props
- ✅ Type-safe APIs _(`/api/contact` validates + types its request body)_

## React

- ⚠️ Memoization where appropriate _(minimal; content is mostly static)_
- ✅ Error boundaries _(`CanvasBoundary` for 3D + `app/error.tsx` +
  `global-error.tsx`)_
- ✅ Lazy loading _(`TechSphere` via `next/dynamic`)_
- ✅ Suspense _(in the R3F scene)_
- ⚠️ Accessibility _(improved — skip link, reduced-motion; full ARIA/SR pending)_

## Next.js

- ✅ Metadata _(now sourced from `src/content/site.ts`)_
- ✅ SEO
- ✅ Open Graph _(generated via `opengraph-image.tsx` / `twitter-image.tsx`)_
- ✅ Dynamic imports
- ❌ Optimized images _(no `next/image`; no real raster images yet)_

## Performance

- ✅ Lighthouse > 90 _(measured in CI via `.lighthouserc.json` budgets)_
- ✅ Code splitting
- ⚠️ Bundle optimization _(three.js makes the hero path's first-load JS ~180 kB)_
- ❌ Image optimization _(none configured/used)_
- ✅ Font optimization _(`next/font`, `display: swap`)_

## Accessibility

- ⚠️ Semantic HTML _(mostly; could improve landmarks)_
- ✅ Keyboard navigation _(skip-to-content link + default focus order)_
- ⚠️ Screen reader support _(decorative canvases `aria-hidden`; not fully tested)_
- ⚠️ Contrast validation _(verified visually in both themes, not tooled)_
- ⚠️ ARIA labels _(present on icon controls; coverage still incomplete)_
- ✅ Reduced motion _(`MotionConfig reducedMotion="user"` + CSS guards + Lenis
  skip + counter short-circuit)_

## Security

- ✅ Environment variables protected _(`.env*` gitignored)_
- ✅ Secrets not committed
- ✅ CSP + security headers _(`next.config.ts headers()` — CSP, X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS)_
- ✅ Input validation _(`/api/contact` server-side validation + per-IP rate limit)_
- ✅ XSS protection _(React escaping; `dangerouslySetInnerHTML` only for JSON-LD + theme script, both controlled)_

## Theming

- ✅ Token-driven design system _(`:root` dark / `.light` → Tailwind utilities)_
- ✅ No-flash theme script in `layout.tsx`
- ✅ Token discipline _(all sections compliant; `AISection.tsx` migrated off
  literal `white`/`zinc`/hex — TD-010)_
- ✅ Both themes verified _(dark + light screenshots, post-remediation)_

## Code Quality

- ✅ ESLint _(flat config via the ESLint CLI; migrated off deprecated `next lint`)_
- ✅ Prettier
- ✅ Consistent naming
- ✅ No dead code _(`About.tsx` removed)_
- ✅ No console logs _(prod `removeConsole`)_
- ✅ Commit-message linting _(commitlint + `commit-msg` hook)_

## Testing

- ✅ Unit tests _(`cn`)_
- ✅ Integration tests _(`content ↔ docs` parity; component render tests)_
- ✅ Component tests _(Footer, SectionHeading, Hero, Navigation, ThemeToggle,
  Skills — 26 tests total)_
- ✅ E2E tests _(Playwright smoke: render, theme toggle, nav anchors)_

## CI/CD

- ✅ Automated linting
- ✅ Automated testing _(unit/component + Playwright E2E job)_
- ✅ Build validation
- ✅ Lighthouse CI _(perf/a11y/SEO/best-practices budgets)_
- ⚠️ Deployment checks _(Netlify auto-deploys; no CI deploy gate/preview)_
