# Aishwari Sirur — Portfolio

A personal AI engineering portfolio built with Astro and TypeScript. The site uses a computational notebook style, with numbered cells, syntax colors, light and dark themes, and an animated AS identity.

## Local development

Use Node.js 22 LTS or newer. The project's Astro dependency requires at least Node.js 18.20.8; Node.js 16 will not run it.

```bash
npm install
npm run dev
```

Open `http://localhost:4321` (or the URL printed by Astro).

```bash
npm run build    # Generate the static site in dist/
npm run preview  # Preview the production build locally
```

## Intro and navigation

On a first visit, a full-screen AS logo appears. One click (or Enter/Space while focused) starts the Emergence animation. The artwork then shrinks into the header logo as the portfolio appears. Reduced-motion users enter without the animated transition.

Dismissal is remembered in the browser's local storage under `as-intro-dismissed`, so subsequent visits skip the intro. To replay it during development, open:

```text
http://localhost:4321/?test-intro
```

Refresh that URL to test again. The header uses the Original artwork; both variants share SVG assets imported from the `figma-make-artwork` branch. On screens up to 560px wide, a Menu button toggles vertically stacked navigation links. Selecting a link or pressing Escape closes the menu.

## Page structure

The homepage contains the introduction, skills, experience, education, exploration notes, and contact form. Featured work, the project index, and standalone case studies are currently retained in the source but hidden. Experience entries can show linked project details.

Navigation uses homepage anchors. Legacy routes redirect to the relevant homepage sections; `/resume` currently redirects to education. The PDF at `public/resume.pdf` is a placeholder.

## Where to edit

| File or directory | Purpose |
| --- | --- |
| `src/pages/index.astro` | Homepage content, sections, intro interaction, and notes carousel |
| `src/layouts/Notebook.astro` | Shared page shell, header, mobile menu, themes, and metadata |
| `src/components/ASArtwork.astro` | Original logo and Emergence animation |
| `public/assets/rings/` | Shared AS artwork SVG assets |
| `src/styles/global.css` | Site styles and responsive layouts |
| `src/data/experience.ts` | Experience entries and associated project IDs |
| `src/components/ExperienceList.astro` | Expandable experience entries |
| `src/data/skills.ts` | Skills grouped by discipline |
| `src/content/projects/` | Project Markdown and frontmatter |
| `src/content/updates/` | Exploration notes, ordered by date |
| `src/content.config.ts` | Required fields and defaults for Markdown collections |
| `src/components/ContactForm.astro` | Contact fields, validation, and submission |

Add projects or exploration notes by creating a Markdown file in the appropriate collection. Copy an existing entry and follow the schema in `src/content.config.ts`. `src/data/goals.ts` is retained but is not used by the current homepage.

For product and design context, see [PRODUCT.md](./PRODUCT.md) and [DESIGN.md](./DESIGN.md).

## Contact form

The homepage form submits directly to Web3Forms without a backend. Set your own access key in a local `.env` file or the deployment environment:

```dotenv
PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

The component currently includes a fallback key. The `PUBLIC_` prefix means the value is included in the client-side site; it is not a server secret. Verify delivery to the intended inbox before publishing.

## Deployment

This is a static Astro site. Configure the hosting service with:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22 LTS or newer
- Environment variable: `PUBLIC_WEB3FORMS_KEY`

For Vercel, import the repository and select the branch that should deploy. Current portfolio development is on `codex/portfolio`; pushing to another branch only updates production if the hosting project is configured to deploy it.

Before publishing, verify the contact destination and social links, replace `public/resume.pdf` if it will be linked, and confirm the site URL in `astro.config.mjs`. Keep URLs and content in `public/robots.txt` and `public/llms.txt` consistent with the published site.
