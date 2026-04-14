# AllegrowAI Portfolio — Implementation Plan

## Stack decision: Astro 5 + Tailwind CSS 4

**Why Astro:**
- Component-based (reusable ProjectFeature cards)
- Content/data-driven: all project metadata in one `src/data/projects.ts` file
- Zero-JS by default, static output — fast and cheap to host
- TypeScript built in
- Adding a new project = one object in the data file + one screenshot

**Why Tailwind v4:**
- CSS-first config, no separate config file needed
- Excellent Astro integration via `@tailwindcss/vite`
- Modern, pairs well with Astro 5

## Directory structure

```
website/
├── plans/
│   ├── portfolio-brief.md
│   └── implementation-plan.md  ← this file
├── research/
│   └── screenshots/            ← source screenshots
├── public/
│   └── screenshots/            ← copies served as static assets
├── src/
│   ├── data/
│   │   └── projects.ts         ← single source of truth for project data
│   ├── styles/
│   │   └── global.css          ← Tailwind import + CSS custom properties
│   ├── layouts/
│   │   └── Base.astro          ← HTML shell, fonts, meta
│   ├── components/
│   │   ├── Nav.astro           ← site header
│   │   ├── Footer.astro        ← site footer
│   │   └── ProjectFeature.astro ← alternating feature section (text + screenshot)
│   └── pages/
│       └── index.astro         ← main page, assembles all sections
├── astro.config.mjs
└── package.json
```

## Page sections

1. **Nav** — logo wordmark + no clutter
2. **Hero** — positioning headline, one-sentence tagline, subtle scroll indicator
3. **Work** — three ProjectFeature sections, alternating layout
4. **Philosophy** — "how I build" manifesto, 3–4 short principles
5. **Footer** — minimal, domain, year

## Design language

**Color palette (warm dark, forest-inspired):**
- Background: `#0f0e0d` (near-black with warm undertone)
- Surface: `#1c1a18` (card/section backgrounds)
- Border: `#332f2b` (subtle dividers)
- Text: `#f2ede8` (warm off-white)
- Muted: `#9e9690` (secondary text)
- Accent: `#e8834a` (warm orange — echoes the forest amber light)
- Accent gold: `#c8a96e` (category tags, hover states)

**Typography:**
- Headings: Plus Jakarta Sans (geometric, personality, not corporate)
- Body: Inter
- Both loaded from Google Fonts

**Project feature layout:**
- Alternating: text-left/image-right, text-right/image-left
- Screenshots presented in a browser chrome mockup frame (rounded, subtle shadow)
- Each project gets: category tags, headline, description, key strengths list, live link

## Adding future projects

1. Add an object to `src/data/projects.ts`
2. Drop a screenshot in `public/screenshots/`
3. Rebuild

No code changes needed to components or layouts.

## Hosting

Static output, suitable for:
- Netlify / Vercel (recommended — zero config)
- GitHub Pages
- Any static host

## Build & dev

```bash
npm install
npm run dev      # localhost:4321
npm run build    # output to dist/
npm run preview  # preview built site
```
