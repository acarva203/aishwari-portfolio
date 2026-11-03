# Aishwari Sirur — portfolio

A personal portfolio for an **AI engineer**, rendered as one **computational
notebook** — cells, `In[]`/`Out[]` prompts, output figures, and a
syntax-highlight color system. Built with [Astro](https://astro.build): static,
zero-JS-by-default, light/dark themes.

- Product truth: [`PRODUCT.md`](./PRODUCT.md)
- Visual world / design system: [`DESIGN.md`](./DESIGN.md)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the build locally
```

## One-page structure

All portfolio content lives at `/`: introduction, featured work, expandable case studies, skills, experience, education, notes, and contact. Navigation uses section anchors. Previous page URLs redirect to the corresponding homepage section, including individual project links.

## Content & data

Markdown collections (add an entry = drop in a new `.md` file):

- `src/content/projects/*.md` — `title, blurb, categories[], metricValue, metricLabel, timeline, team, tools[], href?, featured, order`
- `src/content/updates/*.md` — `date, title, tag (building|learning|reading|shipping|thinking)` + markdown body

Typed data files (edit the array):

- `src/data/experience.ts` — roles; `highlight: true` surfaces a role on the homepage
- `src/data/goals.ts` — grouped goals with `progress` (0–100) → the `/log` progress bars

## Contact form (Web3Forms)

The `/contact` form posts to [Web3Forms](https://web3forms.com) (free, no backend).
Get an access key (enter your email on their site), then either:

- set `PUBLIC_WEB3FORMS_KEY` in a `.env` file or your Vercel env vars, **or**
- replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro`.

Until a real key is set, the form renders but submissions return an error.

## Before publishing — replace these placeholders

- **Web3Forms key** (above)
- **Contact links** — email, LinkedIn, GitHub in `src/pages/contact.astro`, `src/pages/index.astro`
- **Resume PDF** — `public/resume.pdf` (currently a placeholder)
- **Domain** — `site:` in `astro.config.mjs`, and the URLs in `public/llms.txt` / `public/robots.txt`

## Deploy to Vercel

Vercel auto-detects Astro (build `astro build`, output `dist/`) — no config needed.
Import the repo at [vercel.com/new](https://vercel.com/new); every push to `main`
auto-deploys. Set the real domain in `astro.config.mjs` first.

## Machine-readable

- `public/llms.txt` — a structured candidate summary for LLMs / AI agents
- `public/robots.txt` — welcomes crawlers, points to `llms.txt`
