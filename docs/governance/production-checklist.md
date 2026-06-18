# Production Checklist

Continuously maintained. Legend: ✅ Completed · ⚠️ Partial · ❌ Missing.
Last reviewed: **2026-06-18** (see [audit-report.md](./audit-report.md)).

## Architecture

- ⚠️ Feature-based architecture _(section-based, not feature-foldered)_
- ✅ Separation of concerns
- ✅ Reusable components _(`SectionHeading`, theme tokens)_
- ✅ Shared utilities _(`lib/utils` `cn`)_
- ⚠️ No duplicate logic _(card/markup pattern repeated across sections)_
- ✅ Consistent folder structure

## TypeScript

- ✅ Strict mode enabled
- ✅ No `any` types
- ✅ Proper interfaces / typed props
- ⚠️ Type-safe APIs _(no real API layer yet; contact form is simulated)_

## React

- ⚠️ Memoization where appropriate _(minimal; content is mostly static)_
- ⚠️ Error boundaries _(`CanvasBoundary` for 3D only; no global `app/error.tsx`)_
- ✅ Lazy loading _(`TechSphere` via `next/dynamic`)_
- ✅ Suspense _(in the R3F scene)_
- ⚠️ Accessibility _(partial; see Accessibility section)_

## Next.js

- ✅ Metadata
- ✅ SEO
- ✅ Open Graph _(needs a real `public/og.png`)_
- ✅ Dynamic imports
- ❌ Optimized images _(no `next/image`; no real images yet)_

## Performance

- ⚠️ Lighthouse > 90 _(not measured)_
- ✅ Code splitting
- ⚠️ Bundle optimization _(three.js makes first-load JS ~180 kB)_
- ❌ Image optimization _(none configured/used)_
- ✅ Font optimization _(`next/font`, `display: swap`)_

## Accessibility

- ⚠️ Semantic HTML _(mostly; could improve landmarks)_
- ⚠️ Keyboard navigation _(default; no skip link)_
- ⚠️ Screen reader support _(decorative canvases `aria-hidden`; not fully tested)_
- ⚠️ Contrast validation _(verified visually in both themes, not tooled)_
- ⚠️ ARIA labels _(present on some icon controls; incomplete)_

## Security

- ✅ Environment variables protected _(`.env*` gitignored)_
- ✅ Secrets not committed
- ❌ CSP configured _(no security headers)_
- ⚠️ Input validation _(client-side `required` only; no backend)_
- ✅ XSS protection _(React escaping; `dangerouslySetInnerHTML` only for JSON-LD + theme script, both controlled)_

## Code Quality

- ✅ ESLint
- ✅ Prettier
- ✅ Consistent naming
- ⚠️ No dead code _(`About.tsx` unused)_
- ✅ No console logs

## Testing

- ✅ Unit tests _(`cn`)_
- ❌ Integration tests
- ✅ Component tests _(`Footer`, `SectionHeading` — minimal coverage)_
- ❌ E2E tests

## CI/CD

- ✅ Automated linting
- ✅ Automated testing
- ✅ Build validation
- ⚠️ Deployment checks _(Netlify auto-deploys; no CI deploy gate/preview)_
