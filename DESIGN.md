# Design

<!-- impeccable:design-schema 1 -->

World: **Computational Notebook**. The portfolio is one continuous executable notebook — prose, code, and rendered output interleave so that software engineering, research, and side projects read as a single line of reasoning rather than separate résumé buckets. This is the durable visual authority for the site; all surfaces inherit it.

## Thesis

A portfolio *as a published notebook*. It refuses the two category ruts: the dark-mode neon-gradient developer hero-and-grid, and its opposite, the Inter-plus-whitespace "clean minimal" template. Coherence-of-range is the argument, and the notebook form — where code, math, and prose live in one document — makes that argument structurally.

## Color

Strategy: **full palette of named syntax roles**, disciplined over a neutral technical ground (authentic to a notebook, not decorative). Light ground is forced by the scene: a recruiter or peer reading in daylight/office; a notebook is a read document. Contrasting dark blocks carry "code/output" cells.

Tokens (provisional until the build settles them):

| Role | Token | Value |
|---|---|---|
| Paper ground | `--paper` | `#F6F7F9` (cool near-white, faint blue-gray — **not** cream) |
| Cell surface | `--surface` | `#FFFFFF` |
| Output/code block | `--code-bg` | `#16181D` (dark slate) |
| Ink | `--ink` | `#1B1E24` |
| Ink on dark | `--ink-inv` | `#E7EAF0` |
| Muted / comment | `--muted` | `#6B7280` |
| Hairline | `--rule` | `#E2E5EA` |
| Prompt / keyword | `--syn-kw` | `#C026D3` (fuchsia — In[]/Out[] prompts) |
| String | `--syn-str` | `#059669` (emerald) |
| Number / output | `--syn-num` | `#D97706` (amber) |
| Function / link | `--syn-fn` | `#2563EB` (blue) |

Syntax colors are applied to prompts, labels, and highlights — never as full-region backgrounds except the dark output block. Verify contrast: syntax colors on white/paper and `--ink-inv` on `--code-bg` must clear WCAG AA for their text size.

## Type

- **JetBrains Mono** — all notebook chrome: `In[n]:` / `Out[n]:` prompts, cell labels, `Fig.N` counters, nav/masthead, kickers, metadata, code. This carries the identity.
- **Hanken Grotesk** — reading prose: the statement, article/project body copy. Humanist grotesque, deliberately off the overused-face list; keeps prose modern and technical rather than editorial-serif.

Both chosen against the skill's overused-face list and against the AI cream-serif cluster. The serif register is intentionally absent.

## Composition & grammar

- **Execution-count gutter** on the left of each cell (`In[1]`, `In[2]`, `Out[…]`), mono, `--syn-kw`.
- **Numbered output figures**: `Fig.1`, `Fig.2` … a running counter that unifies disparate work as one document.
- **Cells**: white surface, hairline border, generous internal padding; a "peek source" affordance reveals underlying detail on interaction.
- **Dark output blocks** for the featured render and any code/data outputs — the light/dark alternation is the notebook's native rhythm and paces the scroll.
- One spacing rhythm throughout; more space above a heading than below it.

## Topology

Single page: introduction → skills → expandable experience → education → exploration notes → contact form. Section anchors keep navigation on the homepage. Hidden project sections and legacy routes have been removed.

## States

Empty section hides gracefully; featured item works with or without an image; long/short titles hold; external-link vs internal-page items are visually distinguished (mono `→` for out, `▸` for deep page). Responsive to mobile: the gutter collapses to an inline prompt; cells go full-width.

## Motion

Native notebook motion, orchestrated once, not scattered: cells "execute" (a brief output reveal) on first view; the "peek source" toggle animates. Bounded, respects `prefers-reduced-motion`, content visible by default.

## Notes

- Direction chosen via the structured-question channel (not the networked concept-seed roll / browser decision page), at the user's implied preference to avoid phone-home. Form ranked #1 of the derived list; committed.
- Content is authored synthetic placeholder, labeled as such; see the replacement list handed to the user. No fabricated commercial/factual claims (real project names, papers, links pending from owner).
