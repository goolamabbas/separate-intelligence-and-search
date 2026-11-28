# Choosing an external research provider

[← Start with the introduction](../README.md)

This guide covers five dedicated search providers—[Exa](https://exa.ai/), [Parallel](https://parallel.ai/), [Keenable](https://keenable.ai/), [Octen](https://octen.ai/), and [Perplexity](https://docs.perplexity.ai/docs/getting-started/overview)—plus optional authenticated X access.

Search is a fast-moving race, and these services overlap significantly. Rather than declaring permanent winners, this page explains **what each provider distinctly brings to the table**, how its free or paid access works, and when to reach for it.

**Note on live changes:** Providers update their MCP tools, search modes, and pricing frequently. Use this page for durable strengths and trade-offs, and follow the linked official docs for live schemas and current rates. See [Connecting providers](connecting-providers.md#choose-an-access-route) for setup and [Costs and access](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/#provider-allowances-and-access) for free tiers.

[Choosing research tools for your AI assistant](README.md)

## Quick chooser

Start with the capability your question actually needs:

| If you need… | Good starting point | Why it fits |
| --- | --- | --- |
| Company lists, people/role discovery, research papers, or podcast transcripts | **Exa** | Built-in semantic search plus structured company, people, paper, and podcast indexes; $10/month free credits with no card. |
| Clean web/PDF excerpts, specialized registries, or structured batch list enrichment | **Parallel** | Keyless MCP and 1-click app installs; strong PDF/JS page fetch, vertical dataset lookup, and FindAll / Task Group batch tools. |
| High-recall general web search, long-document passages, or point-in-time index queries | **Keenable** | Dynamic passage selection across long pages, `query_time` historical index search, and 100,000 free monthly requests (no card). |
| Multi-angle discovery, local places, business cards, current news, or image/reference-image search | **Octen** | Broad Search expands one question into multiple angles; dedicated Place, Business, News, Image, and fast URL-lookup (Pulse) tools. |
| A quick cited answer/reasoning pass, or archived URL snapshots (`snapshot_as_of`) | **Perplexity** | Combines raw Search + URL Context reading (including archived snapshots) with optional Ask, Reason, and Research synthesis modes. |
| Original posts, thread clarifications, trends, or your own saved bookmarks on X | [**Authenticated X**](#optional-authenticated-x-native-evidence) | Web search cannot reliably substitute for authenticated X data or your personal bookmarks. |

**Just want to try the concept in two minutes without a credit card?** Start with **Exa**, **Parallel**, or **Keenable**. All three work through 1-click connectors or keyless MCP endpoints with no payment method required.

## Retrieval and provider-side synthesis

Every provider here lets your assistant fetch evidence, and several also offer provider-side synthesis (running their own model to write an answer or report):

| Mode | What happens | Good default for |
| --- | --- | --- |
| **Search & Fetch (retrieval)** | Provider returns ranked links, excerpts, structured records, or clean page text. **Your chosen assistant** reads them and writes the answer. | Everyday lookups, comparing primary docs, keeping reasoning in your preferred model. |
| **Agent / Research (provider synthesis)** | Provider runs its own model and multi-step workflow, returning a finished answer, comparison, or structured table. | Deep multi-source reports, large list enrichment, or partner datasets accessed through an agent endpoint. |

Two practical rules keep you out of trouble:

1. **Watch for cost jumps.** Ordinary Search and Fetch calls cost fractions of a cent (or sit inside free tiers). Delegated research runs (Exa Agent Ultra, Parallel Deep Research / FindAll, Perplexity Research) can cost dollars per run. Check budget controls before launching them.
2. **Verify material claims.** Even a great provider-written summary is synthesis, not a primary source. Open the cited link when a specific number, date, or policy caveat matters.

If you need strict "assistant-only synthesis" (disabling default provider cards, storylines, or prompted fetch summaries), see the optional control clauses in the [Prompt library](research-prompts.md#model-boundary).

## Exa

**Best for:** Semantic discovery ("find pages *like* this or matching these criteria"), structured company and people search, research papers, podcast transcripts, and optional deep enrichment via Exa Agent and Connect partners.

**Free & easy start:** Official 1-click plugin/connector in **ChatGPT**, **Claude**, **Cursor**, **Grok Build**, and **VS Code**, plus keyless MCP (`https://mcp.exa.ai/mcp`). Free Starter accounts get **$10/month in recurring credits plus a $10 onboarding bonus with no credit card required**.

<span id="specialized-search-indexes"></span>
<span id="describe-the-evidence-you-want"></span>
### Where Exa stands out

- **Semantic & structured discovery:** Exa's search index understands natural-language descriptions of the ideal source, not just keywords. Its built-in data index covers companies (`category:company`), people (`category:people`), news, research papers, code/docs, and financial filings—returning structured fields (like employee counts, workforce growth, and funding rounds) inside ordinary Search calls without needing an expensive Agent run.
- <span id="podcast-transcripts-through-search"></span>**Podcast transcripts & primary interviews:** Ordinary Exa Search can search inside indexed podcast transcripts (via Exa Library) and surface verbatim passages and timestamps, useful for creative research or founder interviews. Coverage varies by show, so a missing result does not mean an interview never existed.
- **Auto vs. Lite search modes:** `auto` is the general-purpose default; `lite` is faster and cheaper using cached content when live freshness isn't needed.
- <span id="request-places-content-during-search"></span>**Exa Fetch & Places note:** Use Exa Fetch when search highlights miss surrounding context on a known URL. For Exa Library Places results, request content during Search where supported rather than relying on a follow-up Fetch.

<span id="when-agent-ultra-is-worth-it"></span>
### Exa Agent, Connect partners, and Ultra (optional)

- **Exa Agent** handles multi-step research, list-building, and structured JSON outputs when a single search isn't enough. It requires sign-in or an API key.
- **Exa Connect** plugs specialized third-party datasets into Exa Agent without separate vendor contracts—including **Similarweb** (website traffic and audience overlap), **Fiber.ai** (B2B firmographics), **Financial Datasets** (US public-company filings and financials), **Baselayer** (US business verification), **Particle** (podcast analytics), **Polymarket** (prediction-market odds), **Affiliate.com** (shopping), and **Jinko** (travel). Partner calls carry additive charges on top of Agent usage.
- **When Agent Ultra is worth it:** Ultra is Exa's highest-effort Agent mode for hard, comprehensive list-building where completeness outweighs speed and cost (runs can take minutes and have a $20 default cap unless a budget limit is set via the API). Keep ordinary lookups on Search and Fetch. See [Inside one Exa Ultra research run](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/) for a transparent walkthrough.

**Official docs:** [Exa MCP](https://exa.ai/docs/reference/exa-mcp) · [Exa Pricing](https://exa.ai/pricing) · [Exa Library](https://exa.ai/library) · [Exa Agent](https://exa.ai/docs/agent/quickstart) · [Exa Connect](https://exa.ai/docs/agent/connect/overview)

## Parallel

**Best for:** Objective-shaped web excerpts from primary financial, legal, and healthcare documents; clean Markdown extraction from PDFs and JavaScript-heavy pages; zero-account MCP testing; specialized registry/vertical lookups; and batch list building or enrichment.

**Free & easy start:** Official 1-click installs at [parallel.ai/mcp](https://parallel.ai/mcp) for **Claude**, **ChatGPT**, **Cursor**, **VS Code**, and **Grok Bot**. Keyless MCP (`https://mcp.parallel.ai/mcp`) requires **no account and no API key** for `web_search`, `web_fetch`, `web_decisions`, fast `image_search`, and vertical discovery. Organizations with a card on file receive **$5/month in free credits**.

### Where Parallel stands out

- **Objective + keyword search:** Parallel's `web_search` takes both a natural-language goal (`objective`) and short keyword queries, returning focused excerpts tuned for AI reasoning across finance, legal, and healthcare sources.
- **Strong page & PDF extraction:** `web_fetch` reads up to 20 URLs per call and handles PDFs and JS-heavy sites reliably, returning either targeted excerpts or full Markdown.
- **Specialized verticals & consumer tools:** Depending on the connection (ChatGPT app vs. direct hosted MCP), Parallel exposes dedicated tools such as `find_verticals` / `search_vertical` (for structured records like ClinicalTrials.gov), `image_search`, `web_decisions` (typed probability/choice judgments), and flight/product search in the ChatGPT app.
- **Same-call research & batch workflows:** Authenticated connections unlock `web_research` (a cited answer in one call), while the Task API, Task MCP, and Parallel CLI add asynchronous Deep Research, **Task Group** (running the same structured enrichment across a list of rows), and **FindAll** (discovering entities matching explicit criteria).

**Official docs:** [Parallel MCP Hub](https://parallel.ai/mcp) · [MCP Quickstart](https://docs.parallel.ai/integrations/mcp/quickstart) · [Parallel Pricing](https://docs.parallel.ai/getting-started/pricing) · [Parallel CLI](https://docs.parallel.ai/integrations/cli)

## Keenable

**Best for:** High-recall general web search, pulling exact relevant passages from long documents without blowing up your context window, date-controlled and point-in-time (`query_time`) search, and generous free monthly volume.

**Free & easy start:** Listed in **Claude's Connectors Directory** (`Keenable Web Search`) and **ChatGPT's Plugins Directory**, with 1-click installs for **Cursor** and **VS Code**, plus keyless access (`1,000 requests/hour` per IP). Signing up for a free account (no credit card required) unlocks **100,000 free requests per month**.

### Where Keenable stands out

- **Dynamic snippets across long documents:** Instead of returning just the first paragraph of a page, Keenable selects the most relevant passages from across long documents, often answering policy or technical questions without needing a separate fetch.
- **Precise date & point-in-time controls:** Supports `published_after` / `published_before`, index-date filters (`acquired_after` / `acquired_before`), and `query_time` to search the web index as it stood at a specific past date.
- **Clean Fetch & Monitors:** `fetch_page_content` returns clean Markdown for up to 20 URLs (with `max_age_hours: 0` when you need a guaranteed live read, and automatic live fallback for unindexed pages). Authenticated connections also expose `get_billing` and web **Monitors** tools for tracking new pages over time.
- **Privacy note to know up front:** Keenable documents that it uses search trajectories (queries, returned snippets, and fetched pages) to improve retrieval on standard tiers. Keep queries to public facts unless you are on a zero-data-retention plan.

**Official docs:** [Keenable MCP Server](https://docs.keenable.ai/mcp-server) · [Keenable Pricing](https://keenable.ai/pricing) · [Best Practices](https://docs.keenable.ai/best-practices) · [Search Trajectories](https://keenable.ai/blog/trajectories-in-improvements-out)

## Octen

**Best for:** Multi-angle topic discovery (`Broad Search`), fast official-URL lookups (`Pulse`), current news, structured business and local place records, visual/reference-image search, and low pay-as-you-go search pricing.

**Free & easy start:** New accounts receive **$5 in free balance** upon registration (no keyless tier). Standard Web Search starts at **$1 per 1,000 calls** with full content included for the first 10 results on pay-as-you-go.

### Where Octen stands out

- **Specialized operations in one MCP:** Rather than one generic search box, Octen separates **Pulse** (fast official destination URLs), **Search** (focused lookup), **Broad Search** (expands one self-contained question into multiple discovery angles), **News Search**, **Business Search** (company/person entity cards), **Place Search** (local venues, hours, ratings), **Image Search** (text or reverse reference-image lookup), **Extract** (standard or advanced page reading), and newer premier/design/video operations depending on your plan.
- **Full content built into Search:** Requesting full page text alongside Search often avoids extra extraction calls (check your connection's live schema for the exact control).
- **What to watch:** Broad Search can execute multiple billable sub-queries under the hood; News Search storylines and Business entity cards do not always inherit the domain/date filters applied to ranked links, so verify key claims against the underlying articles.

**Official docs:** [Octen MCP Server](https://docs.octen.ai/integrations/octen-mcp-server) · [Octen Pricing](https://docs.octen.ai/overview/pricing) · [Octen Skills](https://docs.octen.ai/integrations/octen-skills)

## Perplexity

**Best for:** Pairing fast ranked web search (`Search`) and clean URL reading (`Context`, including historical archived snapshots) with optional provider-generated synthesis (`Ask`, `Reason`, and `Research`) inside one hosted MCP server.

**Access & billing note:** Perplexity's hosted MCP (`https://api.perplexity.ai/mcp`) supports OAuth sign-in or an API key, but **requires an API organization with billing enabled** (there is no keyless free tier, and a consumer Perplexity Pro subscription does not cover API/MCP usage). Paid Search rates are low once funded: **$1/1,000** for Fast Search, **$5/1,000** for standard Web Search, and **$1/1,000 URLs** for Context.

<span id="fast-or-standard-search"></span>
<span id="read-known-urls-with-context"></span>
### Where Perplexity stands out

- **Fast vs. standard Search (`search_type`):** Use `fast` ($1/1k) for routine lookups and `web` ($5/1k) for harder, ambiguous questions—both return ranked sources without a generated narrative so your own assistant does the writing.
- **Context & Time Machine (`snapshot_as_of`):** `perplexity_context` reads known URLs as clean Markdown or focused highlights, with `max_age_seconds: 0` for a live read or `snapshot_as_of` to retrieve an archived copy as of a past cutoff date.
- **Built-in synthesis tiers when you want them:** `perplexity_ask` (quick cited answer), `perplexity_reason` (structured comparison/trade-offs), and `perplexity_research` (deep literature-style investigation) run Perplexity's own Agent API presets rather than your assistant's model. Inspect cited sources before relying on generated prose.

**Official docs:** [Perplexity MCP Server](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server) · [Perplexity Pricing](https://docs.perplexity.ai/docs/getting-started/pricing) · [Fast Search](https://docs.perplexity.ai/docs/search/fast-search) · [Context Quickstart](https://docs.perplexity.ai/docs/context/quickstart)

## Optional: authenticated X-native evidence

General web search cannot reliably read live X threads, exact timestamps, counts, or your own saved bookmarks. When a task depends on what people actually posted on X, connect an authenticated read-only X interface—either **[xurl](https://github.com/xdevplatform/xurl)** or X's official read-only MCP endpoint (`https://api.x.com/mcp?read_only=true`).

Keep X research read-only unless you separately authorize posting, replying, or bookmark edits, and check which developer account is billed for X API usage.

## Combining providers without duplicating work

Start with **one** provider. Add a second only when it fills a distinct job—for example:

- **Exa** for company/people discovery or podcast transcripts + **Parallel** for deep PDF extraction or batch list enrichment.
- **Keenable** for high-volume general web passages + **Exa** for semantic company records.
- **Octen** for broad multi-angle news or local places + **authenticated X** for direct reactions from primary voices.

Avoid sending the same query to three providers by default unless you explicitly want cross-coverage (as in a market map).

## Other tools to explore

This guide focuses on five core search providers to stay practical and maintainable. Two adjacent tools are also worth exploring depending on your workflow:

- **[Firecrawl](https://www.firecrawl.dev/):** Strong for crawling sites, structured web scraping, and specialist document extraction.
- **[TinyFish](https://www.tinyfish.ai/):** Combines web search and page reading with interactive browser automation for sites that require clicking or navigation.

## Continue reading

- [Connecting and testing providers](connecting-providers.md)
- [Research prompt cookbook](research-prompts.md)
- [Plan your research budget](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/)

## Official documentation

- [Exa MCP](https://exa.ai/docs/reference/exa-mcp)
- [Parallel MCP](https://docs.parallel.ai/integrations/mcp/quickstart)
- [Keenable MCP](https://docs.keenable.ai/mcp-server)
- [Octen MCP](https://docs.octen.ai/integrations/octen-mcp-server)
- [Perplexity MCP](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server)
- [xurl (X CLI)](https://github.com/xdevplatform/xurl)
- [X MCP](https://docs.x.com/tools/mcp)
- [Choosing research tools (overview)](README.md)
