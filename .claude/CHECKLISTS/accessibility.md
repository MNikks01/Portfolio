# Accessibility Checklist

Owner: [Accessibility Agent](../AGENTS/accessibility-agent.md). Target: WCAG 2.1 AA.

- [ ] **Semantic HTML** — `header`/`nav`/`main`/`section`/`footer`; one `h1`;
      logical heading order.
- [ ] **Landmarks** — navigable regions; skip-to-content link _(missing — backlog)_.
- [ ] **Keyboard** — all interactive elements reachable; visible focus ring;
      logical tab order; mobile menu operable.
- [ ] **ARIA** — `aria-label` on icon-only controls; `aria-hidden` on decorative
      canvases/cursor.
- [ ] **Contrast** — text meets AA in **both** themes.
- [ ] **Motion** — honor `prefers-reduced-motion`.
- [ ] **Forms** — labels associated; errors announced (contact form).
- [ ] **Images** — meaningful `alt` (when images added).
- [ ] **Testing** — axe / screen-reader smoke check.
