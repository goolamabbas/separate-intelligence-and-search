# Repository Instructions (`separate-intelligence-and-search`)

Standing editorial and technical rules for anyone (human or AI agent) updating this guide and its GitHub Pages site.

## Audience & Voice
- **Primary audience:** Everyday users of ChatGPT, Claude (including Free plans), OpenCode Desktop, Command Code Desktop, Cursor, Grok Bot, and terminal agents—including non-programmers (office workers, founders, analysts, creative users).
- **Keep it plain and practical:** Direct, short paragraphs, zero fluff, zero defensive hedging. Keep strict verification/audit prompt controls quarantined in the optional appendix at the bottom of `docs/research-prompts.md`, not sprinkled across user-facing pages.
- **Keep low-cost and non-programmer paths clear:** Explain desktop GUI steps (no terminal required) before CLI commands where possible, and avoid dropping unexplained acronyms (`MCP`, `OAuth`, `JSONL`) into Step 01.

## Provider Neutrality & Length Discipline
- **Never rank winners and losers:** Cover all five web providers (**Exa, Parallel, Keenable, Octen, Perplexity**) plus optional authenticated **X** fairly by concrete capability and tradeoff. Be opinionated only on zero-friction, no-card onboarding.
- **Tighten rather than bolt on:** Keep active guide prose disciplined (around ~10,000 words across `README.md` and `docs/`). When adding a new feature or update, edit or replace existing copy instead of appending walls of text.
- **No dated probe diaries in active pages:** Historical logs belong in `archive/` or `evidence/`. Always verify live official docs before changing provider URLs, parameters, free tiers, or plan availability, and update the page's check date.

## Build, Markdown & QA Rules
- **Build command:** Run `npm run build` from the repo root. `site/build.cjs` parses `README.md` (including hero paragraphs, Step 01/02, and `#budget`) and chains all subpage builders (`build-guide.cjs`, `build-cookbook.cjs`, `build-choosing.cjs`, `build-connecting.cjs`, `build-ultra-case.cjs`, `build-india-case.cjs`, `build-costs.cjs`, `site-navigation.cjs`).
- **Avoid paired `~` in Markdown:** `marked` (GFM) turns paired single tildes (`~$0.05 ... ~$0.07`) into `<del>` strikethrough tags. Write `about $...` instead.
- **Pre-merge checks:** After `npm run build`, confirm (1) 0 broken internal links/anchors across `_site/`, (2) 0 `<del>` tags in `_site/`, and (3) for layout changes, visually verify desktop (1280px) and mobile (390px, 0 px horizontal overflow).
- **Deployment:** Merging to `main` automatically runs `.github/workflows/pages.yml` and publishes to GitHub Pages.
