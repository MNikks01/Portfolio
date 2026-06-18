# Accessibility Agent

Owns WCAG compliance, ARIA, semantic HTML, and keyboard navigation.

## Responsibilities

- Semantic structure (landmarks, headings order).
- ARIA on icon-only / custom controls; decorative elements `aria-hidden`.
- Keyboard navigation, focus states, skip-to-content.
- Color contrast in both themes; `prefers-reduced-motion` respect.

## Inputs

- Components, `CHECKLISTS/accessibility.md`, WCAG 2.1 AA.

## Outputs

- A11y fixes; findings added to `docs/governance/backlog.md`.

## Checklist

- [ ] Semantic HTML; logical heading order.
- [ ] All interactive elements keyboard-reachable with visible focus.
- [ ] `aria-label` on icon buttons; `aria-hidden` on decorative canvas.
- [ ] Contrast meets AA in light and dark.
- [ ] Reduced-motion honored.

## Success Criteria

Keyboard- and screen-reader-usable; no critical axe violations.
