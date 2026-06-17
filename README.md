# Nikhil Meshram — Portfolio

Senior Full Stack Engineer portfolio. Apple-level polish, Stripe-level design, Linear-level animations.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 3.4** (custom design tokens, gradients, glow effects)
- **Framer Motion** (page-load sequence, scroll-triggered reveals, magnetic interactions)
- **GSAP** (advanced timeline support, included for extension)
- **Three.js + React Three Fiber + drei** (hero technology sphere, particle field, orbit rings)
- **Lenis** (smooth scroll)
- **Lucide Icons**

## Run

```bash
# 1. install
npm install

# 2. dev
npm run dev

# 3. production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    layout.tsx        # Fonts, metadata, JSON-LD, OG, providers
    page.tsx          # Section composition
    globals.css       # Design tokens, utilities, glow, scrollbar
    sitemap.ts
    robots.ts
  components/
    Hero.tsx              # 3D sphere, animated headline, CTAs
    About.tsx             # Animated timeline with scroll progress
    Skills.tsx            # Constellation viz + interactive categories
    Experience.tsx        # Animated tabbed work history
    Projects.tsx          # 3D tilt cards with architecture viz
    AISection.tsx         # MCP/Claude/Cursor + agent workflow
    Stats.tsx             # Counter animations
    Contact.tsx           # Modern form with success animation
    Navigation.tsx        # Sticky glass nav
    Footer.tsx
    CustomCursor.tsx      # Magnetic cursor with hover variant
    LoadingScreen.tsx     # Intro reveal
    SmoothScroll.tsx      # Lenis provider
    ScrollProgress.tsx    # Top progress bar
    Marquee.tsx           # Infinite tech marquee
    ParticleBackground.tsx # Canvas neural network
    GridBackground.tsx     # Floating orbs + scanlines
    SectionHeading.tsx
    three/
      TechSphere.tsx      # R3F scene
  lib/
    utils.ts
```

## Replace before shipping

- `public/resume.pdf` — drop your actual resume here.
- `public/og.png` — 1200×630 OG image.
- `src/app/layout.tsx` — update `url` constant if hosting on a different domain.

## Performance

- Three.js scene is lazy-loaded via `next/dynamic` with `ssr: false`.
- Particle canvas respects `prefers-reduced-motion`.
- Fonts loaded via `next/font` with `display: swap`.
- Lighthouse target: 90+ across the board.

## SEO

- App Router `metadata` API
- OpenGraph + Twitter cards
- JSON-LD Person schema injected at the root
- Generated `sitemap.xml` and `robots.txt`

## License

MIT
