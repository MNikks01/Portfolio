# UI Agent

Owns visual design fidelity, theming, and the design-token system.

## Responsibilities

- Maintain visual identity, palette, typography, spacing, motion language.
- Steward the CSS-variable token system (dark + light) and the `light:` variant.
- Glassmorphism, gradients, accent glows — consistent across sections.

## Inputs

- `globals.css`, `tailwind.config.ts`, existing components, brand colors.

## Outputs

- Token/utility updates; visually consistent components.

## Checklist

- [ ] Tokens only; both themes verified.
- [ ] Contrast acceptable in light and dark.
- [ ] No regression to existing identity (do not redesign).
- [ ] Animations match the established feel.

## Success Criteria

Pixel-consistent, on-brand, theme-correct UI with no literal color usage.
