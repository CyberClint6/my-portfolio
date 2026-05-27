# AGENTS.md — Portfolio Architecture

## Project Overview

A graphics design portfolio site built with TanStack Start on Netlify. Dark-mode first design with a purple/violet primary accent and amber secondary accent. This is a personal portfolio for showcasing graphic design work.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Fonts | Syne (display) + Inter (body) via Google Fonts |
| Content | Content Collections (markdown) |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Directory Layout

```
src/routes/          # File-based routes (TanStack Router)
  __root.tsx         # Root layout: Nav (desktop + mobile) + Footer
  index.tsx          # Home: hero, featured work, skills, CTA
  projects.tsx       # Portfolio gallery with client-side category filter
  resume.tsx         # About page: bio, services, tools, experience timeline
  contact.tsx        # Project inquiry form (Netlify Forms)
  blog/              # Legacy blog routes (kept but not linked in nav)
src/components/ui/   # Base UI components (badge, card, etc.)
src/styles.css       # Tailwind v4 config + CSS variables (dark theme)
content/             # Markdown content via content-collections
public/contact.html  # Netlify Forms static registration page
```

## Design Tokens (src/styles.css)

- `--background`: very dark oklch(0.09 0.008 280)
- `--primary`: purple/violet oklch(0.68 0.22 295)
- `--accent`: amber/gold oklch(0.78 0.16 75)
- `--card`: slightly lighter dark oklch(0.13 0.01 280)
- Font display: `'Syne'` (headings, `.font-display`)
- Font body: `'Inter'`
- `.gradient-text`: purple → amber text gradient via background-clip
- `.project-card`: CSS hover lift + shadow transition
- `.animate-fade-up` variants: staggered entrance animation

## Key Conventions

- **Project data is inline** in `src/routes/projects.tsx` — gradient color metadata must stay co-located with rendering logic. Do not move to content-collections.
- **`/resume` = About page** — the route URL is `/resume` but the nav label and page title is "About". Keep this mapping.
- **Contact form** submits to `/contact.html` (Netlify Forms static fallback) then shows React success state — no page reload.
- **No blog in nav** — the `blog/` routes exist but are intentionally excluded from the navigation.

## Extending the Portfolio

- **Add a new project**: Add an entry to the `projects` array in `src/routes/projects.tsx`. Provide a Tailwind gradient string and accentColor hex.
- **Change color scheme**: Update `--primary` and `--accent` in `src/styles.css`.
- **Add real project images**: Place images in `public/`, then replace the gradient div in project cards with an `<img>` tag.
- **Change designer name/info**: Update `__root.tsx` (nav logo), `index.tsx` (hero), `resume.tsx` (bio section).
