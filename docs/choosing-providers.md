# Choosing an external research provider

This reference compares practical roles for [Octen](https://octen.ai/), [Keenable](https://keenable.ai/), [Exa](https://exa.ai/), [Perplexity](https://docs.perplexity.ai/docs/getting-started/overview), and [Parallel](https://parallel.ai/). It also explains when authenticated X-native evidence belongs in a research workflow.

These services overlap, but they are not interchangeable. Choose according to the evidence and output the task requires—not according to how many providers are available.

**Review scope:** Sections and recorded tests retain their own check dates. The [setup overview](connecting-providers.md#choose-an-access-route) and [access/allowance summary](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/#provider-allowances-and-access) were refreshed on 11 November 2026; that does not reverify every capability or prompt on this page.

[Choosing External Research Tools for AI Agents](README.md)

## On this page

- [Other tools to explore](#other-tools-to-explore)

- [Quick chooser](#quick-chooser)
- [Retrieval and provider-side synthesis](#retrieval-and-provider-side-synthesis)
- [Octen](#octen)
- [Keenable](#keenable)
- [Exa](#exa)
- [Perplexity](#perplexity)
- [Parallel](#parallel)
- [Optional: authenticated X-native evidence](#optional-authenticated-x-native-evidence)
- [Combining providers without duplicating work](#combining-providers-without-duplicating-work)
- [Continue reading](#continue-reading)
- [Official documentation](#official-documentation)

## Quick chooser

| If you need… | Start with… |
| --- | --- |
| Finding an official site, documentation page, or familiar destination URL | **Octen Pulse** |
| A focused web or news lookup | **Octen Search** |
| Query-relevant passages across web documents, with publication/index-date controls | **Keenable Search**, with generated cards disabled for source-only work |
| Reading a supplied or selected page through Keenable | **Keenable Fetch**, without `prompt` for source-only work |
| Several distinct research angles requiring broader discovery | **Octen Broad Search** |
| Web images or relevant moments in videos | **Octen Image Search or Video Search**, when callable |
| Semantically precise web discovery and existing Library records | **Exa Search**, with the source type and qualifying details in the query |
| Publication-date, domain, category, or content controls | **Exa Advanced Search** |
| Ranked URLs or recent-news leads without a generated answer | **Perplexity Search** |
| A quick, focused factual answer or concise cited explanation | **Perplexity Ask** |
| A comparison or decision analysis against explicit criteria using current web evidence | **Perplexity Reason** |
| A deep multi-source investigation | **Perplexity Research** |
| Objective-shaped web excerpts, financial filings or primary legal sources | **Parallel Search** |
| Specialized registry or dataset records | **Parallel vertical discovery and retrieval**, when the returned coverage and fields fit |
| A cited answer returned by Parallel in one call | **Parallel web_research**, when provider synthesis is permitted |
| One substantial provider-generated research report | **Parallel Deep Research** |
| The same structured enrichment task repeated across several inputs | **Parallel Task Group** |
| Multi-source enrichment or partner-specific fields not supplied by sufficient source records | **Exa Agent and relevant Connect providers** |
| Large lists or difficult qualification criteria where completeness outweighs latency and cost | **Exa Agent Ultra**, when provider-generated research is permitted and suitable budget controls are available |
| Prediction-market odds, history, order books, or public position data | **Exa Agent with Polymarket Connect**, when exposed |
| Reading a page found by Octen | Reuse sufficient excerpts or full text returned by Search or Broad Search; use **Octen Extract** for supplied URLs or missing, incomplete, unusable, or stale content |
| Reading a known or Exa-discovered page | **Exa Fetch** for supplied URLs or insufficient search content; for Places, request text during Search |
| Authenticated posts, users, trends, counts, or bookmarks from X | **An authenticated X-native interface** |

Apply provider constraints in this order: explicit inclusions or exclusions, named-provider requests, materially matched specialized data, then a generic discovery default. A named provider is required for its requested role; “only” or “exactly” makes the permitted set exclusive. Add a complementary provider only within the authorized scope.

## Retrieval and provider-side synthesis

A supported provider connection lets the model selected in your application call a provider. It does not automatically make that model the one used inside every provider operation.

| Operation | Typical boundary |
| --- | --- |
| **Search, fetch, or extraction** | The provider returns ranked results or page content. The model selected in your application interprets the evidence and normally writes the final response. |
| **Answer, reasoning, research, or agent run** | A model or workflow inside the provider may generate prose or structured output before returning it to the application. |

Search and extraction providers may still use machine-learning systems for ranking, rendering, extraction, or classification. The distinction is about who produces the visible analysis or narrative answer.

When the model selected in your application must perform all visible reasoning and synthesis, allow source retrieval and faithful extraction but exclude provider-generated answers. Inspect the selected output mode as well as the tool name: a scrape or fetch tool may also offer generated summaries or freeform answers. Ordinary lookups can default to retrieval and assistant analysis unless the user requests a different approach.

For changing facts, check available cache controls and retain the source’s observation or reporting date. Fetching a page today does not establish that its contents are current. Disclose important uncertainty about freshness.

When provider-generated synthesis is allowed, require the final response to identify the provider tool and any model or preset exposed in the completed result. Check what a parameter actually means: a field named `model_name` can be analytics metadata rather than a model selector.

For example, search relevance models help select source text. That is different from asking a provider to write the research answer.

Provider-generated analysis includes Perplexity Ask, Reason, and Research; Exa Agent, including Ultra and Connect runs; Parallel web_research, Deep Research and Task Group. Such workflows can mix retrieved records with inferred findings. Keep their contributions distinct and check supported budgets before an expensive run.

## Octen

### Best fit

Use Octen for focused web or news discovery, multi-angle expansion from a self-contained question, page content returned with search, selected page extraction, or media discovery when available.

Octen can be accessed through supported integrations such as official provider skills, hosted or local MCP servers, or direct API access. Available capabilities and parameter names can differ by interface. Choose the operation needed, then inspect how the available integration exposes it.

- **Pulse** finds likely destination URLs, such as official sites, documentation, and help pages. Lite returns URLs and titles; Standard can add highlights and page content. Use ordinary Search for fresh pages, news, filtered queries, or broader discovery. A candidate URL alone is not evidence of what the page says. [Pulse documentation](https://docs.octen.ai/capabilities/pulse-search)
- **Search** handles focused web lookup. Use its news topic when current news is the evidence role. When source text will help answer the question, explicitly enable full content using the current interface’s controls.
- **Broad Search** expands one self-contained question into several discovery angles. Preserve the user’s intent and constraints, resolve conversational references using the available context, and fit the question within the current interface’s input limit. Let the provider generate the subqueries. Use targeted follow-ups for remaining gaps; a simple comparison may need only focused searches.
- **Extract** reads supplied URLs or selected results whose returned text is missing, incomplete, unusable, or stale. Reuse sufficient excerpts or full text before requesting another read. When the full page body is needed, leave the relevance-query option unset if that option returns highlights instead. Use an appropriate supported cache age when freshness matters.
- **Image Search** and **Video Search** are separate capabilities. Check current access before relying on them.

### What it contributes

Plain Search is useful for a bounded lookup; Broad Search is useful when several discovery angles are needed. Requesting page text alongside search can reduce separate extraction calls. For Web Search and Broad Search, Octen’s pricing page includes full content for the first ten results per search at no additional content charge; results beyond ten cost $0.50 per 1,000. Search calls remain chargeable, and Broad Search may execute several of them. Start with only as many results and sub-queries as the evidence needs. [Current pricing](https://docs.octen.ai/overview/pricing.md)

**Pulse pricing checked 31 October 2026:** Lite costs $0.10 per 1,000 calls and Standard $0.20. Standard includes full content for the first result; additional full-content results cost $0.50 per 1,000. Pulse shares Web Search’s throughput limit. These allowances differ from Web Search and Broad Search.

When additional source context is needed, explicitly request full content using the available interface’s controls rather than relying on defaults. Inspect what actually returned: a full-content request does not guarantee that every page was retrieved, that its text is complete, or that it is fresh. Reuse sufficient excerpts or full text without another read. [Octen documentation](https://docs.octen.ai/)

### What to avoid

Do not repeat the same broad query across providers merely to increase provider count. Give complementary providers a distinct evidence or verification role. Do not automatically Extract every Octen result, and do not forbid another read when the returned content lacks necessary context. Ten results is a useful content-pricing threshold, not a universal evidence limit; larger searches or follow-up queries can be justified by a coverage gap. Lower token caps manage context, but can remove qualifications needed to support a claim.

## Keenable

### Best fit

**Guidance checked 11 November 2026.** Use Keenable for general web discovery, relevant passages from long documents, date-controlled search and reading supplied or selected pages. Its MCP exposes `search_web_pages` and `fetch_page_content`; SDK and API options can differ. Start with the [connection guidance](connecting-providers.md#keenable-connection-readiness) or the [one-question prompt](research-prompts.md#keenable-one-sourced-question).

### Search: relevant passages before more page reads

Describe the source and evidence you want, rather than stacking keywords. Keenable's Dynamic Snippets selects passages from across a document with a token classifier. Reuse snippets that contain the necessary facts and qualifications; fetch more context when passages are incomplete, ambiguous or stale. Keenable reports substantial token savings against its earlier snippets, but this is not a promise of 50% lower total costs on every task. [Technical explanation](https://keenable.ai/blog/keenable-snippets-full-page-cost-reduction)

| Control | Use it for |
| --- | --- |
| `pro` | Ordinary research where retrieval depth matters; the documented default when selectable |
| `realtime` | Latency-sensitive retrieval; the name does not guarantee fresher source content |
| `max_results` and `snippet_max_length` | Bound result count and characters per snippet; increase only when important context or coverage is missing |
| `published_after` / `published_before` | Publication windows; pages without a known publication date may be omitted |
| `acquired_after` / `acquired_before` | When Keenable indexed the page, not when the event happened |
| `site` / `exclude_domains` | Restrict a site or omit hosts and their subdomains; verify returned sources fit the task |

Use `query_time` only for point-in-time index search. `query_time: "7d"` means as of seven days ago, not the last seven days. Use explicit timestamps for historical boundaries; do not assume ordinary Fetch reconstructs the historical page body. For a broad question, use a few distinct queries and bounded concurrency rather than repeating one query or assuming extra searches are free. [Search controls](https://docs.keenable.ai/products/search) · [Best practices](https://docs.keenable.ai/best-practices)

### Keep source retrieval separate from generated answers

For source-only work, set Search's `disable_cards: true`: Keenable can otherwise return its own written cards, whose URLs expire after one day. These are not original source pages. Leave Fetch's `prompt` unset: supplying it asks an LLM to read the page and return an answer instead of source text. These controls preserve analysis by the assistant selected in your application.

Fetch normally returns indexed Markdown, but an unindexed page can trigger live retrieval. Set `live: true` when the current source matters. Check `max_chars` and truncation before treating a result as the complete document. A live fetch does not establish that the underlying source is current or that every element was extracted. [Fetch documentation](https://docs.keenable.ai/products/fetch)

### What the benchmarks tell you

On 11 November 2026, Keenable Pro and Realtime occupied the top two displayed rows of the [Artificial Analysis Search API leaderboard](https://artificialanalysis.ai/agents/search-api). Its [methodology](https://artificialanalysis.ai/methodology/search-api) uses GPT-5.6 Luna at medium effort across three benchmarks; most provider runs use Stirrup, while native OpenAI search has a different workflow. The listed Keenable settings do not establish a separate result with generated cards disabled. These are configuration-specific results, not a guarantee for your task or a test of this MCP connection.

Keenable's [October Vals announcement](https://keenable.ai/blog/keenable-vals-web-search-index) reported 49.08% with GPT-5.6 Sol and roughly 53% lower mean total task cost than that same model with Exa. That cost includes model inference and search fees. The [current Vals page](https://www.vals.ai/benchmarks/web_search) now lists newer model/provider combinations above it; those cross-model rows do not isolate search-provider superiority. This guide has not reproduced either benchmark.

### What to avoid

Do not make Keenable the universal default because of a ranking, automatically replace specialized records with general web results, or fetch every search hit. Do not treat generated cards or prompted Fetch as source-only extraction. Inspect the actual schema: public MCP routes may omit `mode`, and account/operator defaults can affect it. Missing usage metadata is not proof that calls were free. See [allowances and costs](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/#provider-allowances-and-access).

## Exa

### Best fit

Use Exa when the task benefits from semantic source discovery, precise search controls, fetching known pages, structured multi-step research, or specialized datasets.

### Search, Advanced Search, and Fetch

- **Regular Search** is the normal starting point for semantic discovery and independent cross-checking. Convert a terse request into a richer description of the ideal sources without changing the user’s intent or constraints.
- **Advanced Search** is appropriate when supported domain, publication-date, category, freshness, geographic, or subpage controls materially affect the result.
- **Fetch** reads known URLs or selected Exa results when search highlights are insufficient.

Regular Search should remain the default. Advanced Search is not inherently better; use it when its additional controls solve a specific retrieval need.

### Auto or Lite?

**Checked 31 October 2026:** Auto is the general-purpose default. Lite is a lower-cost option when cached page content and its smaller set of controls meet the task.

| Search mode | Use when | Price per 1,000 requests |
| --- | --- | --- |
| `auto` | You need the general-purpose search path or controls unavailable in Lite | $7 |
| `lite` | Cost or latency matters and cached content is sufficient | $4 |

Both prices include up to ten results; additional results cost $1 per 1,000. Lite never fetches pages live and rejects unsupported options, including content-freshness controls. If fresh page content is required, use Auto with supported freshness controls or retrieve the source separately. `fast` and `instant` are legacy choices; use Lite for new requests where it fits. Search mode and the regular/Advanced tool interface are separate choices; available controls depend on the integration.

Do not use `startCrawlDate` or `endCrawlDate` to enforce freshness: Exa no longer applies them. Publication-date filters constrain publication dates, not when content was last retrieved. Inspect response warnings and notices for ignored options or relaxed search constraints, and verify that the returned sources still meet the task. [Search documentation](https://exa.ai/docs/search/quickstart) · [Changelog](https://exa.ai/docs/changelog)

<a id="specialized-search-indexes"></a>

### Specialized search indexes

**Library guidance checked 10 November 2026.** Exa Search can return web pages and structured pages from [Exa Library](https://exa.ai/library), including company profiles, papers, filings and podcast transcripts. Library collections, API search categories and Connect providers are different things. Not every collection has a category; use a descriptive query and supported filters when they help.

Search can already supply structured records. Choose Agent for research or enrichment that requires it, and Connect when a partner's particular fields, coverage or provenance are needed. There is no mandatory Search-first step when a specialist dataset is clearly required or explicitly requested. Library fields are not automatically equivalent to a named partner's data.

| Exa vertical | Useful for | Invocation cue |
| --- | --- | --- |
| [**People Search**](https://exa.ai/docs/reference/verticals/people) | Professional profiles by role, skills, company, location, or seniority | Use `category:people` in regular Search, or the `people` category in Advanced Search when exposed |
| [**Company Search**](https://exa.ai/docs/reference/verticals/company) | Company discovery by industry, funding stage, headcount, geography, or technology | Use `category:company` in regular Search, or the `company` category in Advanced Search when exposed |
| [**Code Search**](https://exa.ai/docs/reference/verticals/code) | Working examples across GitHub, documentation, and developer discussions | Use a code-specific semantic query, optionally restricted to relevant repository or documentation domains; the `github` category is deprecated |
| **Financial reports** | Filings and financial disclosures | Specify the company, form and disclosure; use `financial report` when exposed, or `sec.gov` for original SEC filings |
| **Research papers** | Methods, findings and supporting literature | Describe the method or question; use `publication` when exposed and check whether full text is available |
| [**News Search**](https://exa.ai/docs/reference/verticals/news) | Current news with semantic and date-aware filtering | Use a news-specific query with the `news` category and date controls when exposed |

Inspect the strongest returned sources before making material claims. Excerpts or full text returned by search can suffice when they contain the relevant facts and qualifications. Retrieve more context when evidence is ambiguous, incomplete, conflicting, stale, or missing material qualifications. A search category helps discovery; it does not by itself prove that a profile, company, code example, or news report is current or authoritative.

<a id="describe-the-evidence-you-want"></a>

### Describe the evidence you want

Add the details that distinguish a useful source; a longer query is not automatically better. Dates should fit the question, including historical or creative research.

| Task | Useful query details |
| --- | --- |
| Creative interviews | Practitioner or creative challenge, and the interview format you want |
| Earnings-call research | Company or ticker, fiscal quarter/year, and the issue management discussed |
| Company or buying-role research | What the company sells, whom it serves, location, and the person's relationship to it |
| Personal learning through papers | Research question, method or finding; relevant publication period if needed |

For example, ask for “[company] [quarter/year] earnings call transcript about [issue]”, rather than simply “[company] outlook”. For filings, describe the disclosure sought, not just “10-K”. [Financial search guidance](https://exa.ai/docs/search/data/financial) · [Company and people queries](https://exa.ai/docs/search/data/companies-people)

Domain filters are collection-specific. SEC guidance uses `sec.gov`; earnings-call guidance uses `exa.ai/library/markets/stocks`, not the collection's landing-page URL. A filter still does not establish the returned document's identity, type or reporting period. [SEC collection](https://exa.ai/library/sec-filing) · [Earnings-call collection](https://exa.ai/library/earnings-call)

<a id="request-places-content-during-search"></a>

### Request Places content during search

[Exa Places](https://exa.ai/library/place) appears automatically for relevant Auto or Lite searches, with no extra Places parameter. Name the location and practical constraints. **Request the result text during search:** Exa says later Fetch is unreliable for these listings. The direct API uses `contents.text`; use the equivalent supported control in your integration, not an argument copied into an incompatible tool. A listing with up to ten places is not an exhaustive inventory.

Lite's web-page fetching restrictions do not by themselves establish how every structured record is refreshed. Check the dates and provenance of returned data.

### Check collection coverage and provenance

[Paper full text](https://exa.ai/library/publication) is supplied where available; distinguish it from an abstract. [Product listing prices](https://exa.ai/library/product) are not live: check the merchant for current price and availability. Preserve dates and original sources for company roles, financial periods and other changing fields. Exa-hosted structured pages may aggregate public or licensed records; do not present them as independently verified primary sources.

For traffic comparisons, choose according to the metric, period, provenance and comparability needed. A sufficient [Library company record](https://exa.ai/library/organization) can answer a bounded question; use Similarweb Connect when its specific data is needed or requested. Do not attribute Library fields to Similarweb without evidence.

<a id="podcast-transcripts-through-search"></a>

### Podcast transcripts through Search

Exa’s ordinary search index now includes podcast episodes with full transcripts, speaker labels, and timestamps, with no additional data surcharge. Use Search and Fetch for episode discovery, transcript summaries, or quotations. To restrict discovery to this collection, use `includeDomains: ["exa.ai/library/podcast"]` where supported; this is a domain filter, not a new category.

The [podcast collection](https://exa.ai/library/podcast) currently describes the 30 most recent episodes per show; do not assume a complete archive or treat a missing result as proof an interview does not exist. Check that a result is an interview if that is what you requested. Check the episode date, speaker, and surrounding transcript passage before quoting. Use Particle through Agent only when its additional analytics or structured fields are needed, or when explicitly requested. Ordinary transcript retrieval does not require an Agent run. [Podcast search and API example](https://exa.ai/library/podcast) · [29 October announcement](https://exa.ai/blog/podcast-search)

### Agent and Connect

Exa Agent is a different layer from ordinary search. Use it for multi-step research, enrichment, structured list-building, or repeatable output schemas.

<a id="when-agent-ultra-is-worth-it"></a>

### When Agent Ultra is worth it

**Consider Ultra when finding more verified matches matters enough to justify a longer, metered research run.** It is Exa Agent's highest effort setting (`effort: "ultra"`), useful for large lists, deep multi-source research, and hard-to-verify criteria. For example, find papers and repositories implementing a defined technique, then verify which provide runnable evaluation code. A short factual lookup or reading one supplied page usually needs Search or Fetch instead.

Ultra delegates research and inference to Exa's own workflow and models. It does not inherit the model selected in your application. It is an Agent effort, separate from the choice of Connect datasets.

**Terms checked 26 September 2026:** Exa documents a default $20 per-run cap with actual usage billing; a run finishing early can cost less. It describes complex runs as typically about 30 minutes, potentially three hours. These are provider descriptions, not timings or quality results measured for this guide. Fixed Agent efforts offer predictable per-request prices when they meet the task. Check applicable Connect charges if adding a dataset. [Ultra documentation](https://exa.ai/docs/agent/agent-ultra.md) · [Current pricing](https://exa.ai/docs/reference/pricing.md)

| Control in the direct API | What it means |
| --- | --- |
| `budget.maxCostDollars` | $1–$100; available for `auto` and `ultra`; Ultra defaults to $20 |
| `budget.maxDurationSeconds` | 300–10,800 seconds; a soft duration ceiling for Ultra, not an exact finish-time guarantee |
| Graceful stop | Ends an Ultra run while retaining findings and billing usage so far |

An integration may expose Ultra without these controls. A spending limit written into a prompt is not an enforced API limit. Check the [connection guidance](connecting-providers.md#verify-ultra-controls-before-starting) before starting a run with a required budget.

Check why the run ended as well as its status. A completed run may have hit its spending or time limit, or been stopped early. Report those findings with the remaining coverage gaps. Even `schema_satisfied` does not independently establish that every qualifying entity has been found. Define the scope, require evidence for each qualification, and allow unknown fields. [Run schema and stop reasons](https://exa.ai/docs/reference/agent-api/create-a-run.md)

Exa's [launch benchmarks](https://exa.ai/blog/exa-agent-ultra) are vendor-reported comparisons. A [worked example of one Ultra run](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/) shows the assignment, Exa’s findings, and the assistant’s assessment separately. That trial was not independently audited or compared against another research method; it does not establish that Ultra is better. Try the [comprehensive discovery](research-prompts.md#exa-agent-ultra-for-comprehensive-discovery) or [list expansion](research-prompts.md#exa-agent-ultra-to-expand-an-existing-list) pattern when the task and budget justify it.

### Connect datasets within Agent

Exa Connect can expose specialized data providers inside an Agent run. Select only the Connect providers needed for the output fields, even when the user has not named a provider. Inspect the current interface’s supported data sources and respect provider and synthesis restrictions. Name the provider-backed fields in the query and `outputSchema`, then inspect the completed run to confirm which provider contributed.

On 3 September 2026, Exa’s self-serve Connect documentation and the live `dataSources` schema inspected for this guide exposed eight providers:

| Self-serve Connect provider | Use it when you need | Useful fields to request |
| --- | --- | --- |
| [**Fiber.ai**](https://exa.ai/docs/reference/agent-api/connect/fiber) | B2B companies, public professional profiles, jobs, headcount, funding, or job-change signals | Company identity, domain, public professional role, employer, employee count, funding stage, dated signal |
| [**Similarweb**](https://exa.ai/docs/reference/agent-api/connect/similarweb) | Website traffic, engagement, rankings, digital footprint, or competitor discovery | Domain, estimated visits, reporting period, rank, engagement measure, competitor domain |
| [**Financial Datasets**](https://exa.ai/docs/reference/agent-api/connect/financialdatasets) | U.S. public-company prices, statements, earnings, ownership, SEC filings, or screening | Ticker, reporting date, price timestamp, financial metric, filing form, filing date, direct filing link |
| [**Baselayer**](https://exa.ai/docs/reference/agent-api/connect/baselayer) | U.S. business verification, registrations, entity structure, officers, KYB, or risk checks | Legal name, jurisdiction, registration status, officers, verification status, risk result |
| [**Affiliate.com**](https://exa.ai/docs/reference/agent-api/connect/affiliatecom) | Product discovery, merchant catalogs, prices, brands, or shopping comparisons | Product, brand, price, currency, merchant, offer URL, observation time |
| [**Particle**](https://exa.ai/docs/reference/agent-api/connect/particle) | Podcasts, guests, hosts, spoken commentary, narrative, or sentiment monitoring | Show, episode, publication date, speaker, role, timestamp, transcript evidence, position expressed |
| [**Jinko**](https://exa.ai/docs/reference/agent-api/connect/jinko) | Travel-destination discovery or airfare comparisons | Origin, destination, dates, cabin, fare, currency, itinerary, observation time |
| [**Polymarket**](https://exa.ai/docs/reference/agent-api/connect/polymarket) | Prediction markets, market-implied probabilities, price history, order books, or public trader positions | Market and event, outcome, implied probability, observation time, volume or liquidity, price history, market URL |

These providers are not interchangeable. A company-screening task might use Fiber for firmographics and Similarweb for traffic. A public-company investigation might use Financial Datasets for filed metrics. A prediction-market question might use Polymarket for current odds or their history. Choose according to the fields requested, not because a provider appears in the live schema. Reading one supplied official filing can be satisfied directly; comparable fields across many companies may warrant a specialized dataset.

Exa also documents [additional Connect partners](https://exa.ai/docs/reference/agent-api/connect/additional-partners) that require account enablement through Exa. This guide does not assume access to those providers or make claims about their commercial terms.

Requesting a Connect provider does not prove that it contributed. Check completed results for provider-backed fields, provenance, partial coverage, and errors. Keep provider-backed data separate from Agent inference and general web evidence.

### What to avoid

- Do not use Agent merely as a more elaborate version of ordinary Search.
- Do not infer Connect availability from documentation alone.
- Do not silently replace unavailable provider-backed fields with generic web inference.
- Do not imply that Exa Agent output was generated by the model selected in your application.

## Perplexity

### Best fit

Use Perplexity when you need filtered source discovery or web-grounded synthesis.

| Desired output | Perplexity mode |
| --- | --- |
| Ranked sources, facts, or recent-news leads | **Search** |
| A quick, focused factual answer, summary, or concise explanation | **Ask** |
| A comparison or decision analysis against explicit criteria using current web evidence | **Reason** |
| A comprehensive, literature-style investigation | **Research** |

Search is usually the right choice when the objective is source discovery. Ask, Reason, and Research generate synthesis and should not all receive the same subquestion by default.

<a id="fast-or-standard-search"></a>

### Fast or standard Search?

Choose Perplexity for its fit to the task first, then select its search type. Both types return ranked sources without an AI-written answer; the application performs later synthesis.

| Search type | Suggested use | Search API price per 1,000 requests |
| --- | --- | --- |
| `fast` | Routine lookups, repeated agent searches, high-volume or latency-sensitive retrieval | $1 |
| `web` | Rare, difficult, or ambiguous questions | $5 |

Prices checked on **27 September 2026**; consult the [official Fast Search documentation](https://docs.perplexity.ai/docs/search/fast-search) for current terms. These are published API prices, not measured charges from our connector test.

**The API default remains `web` when `search_type` is omitted.** The multi-provider-research skill explicitly prefers `fast` for suitable routine Perplexity searches when the interface exposes it. That preference does not make Perplexity the default across providers, and an explicit user choice takes precedence.

Choose standard search directly for a difficult question. If Fast Search leaves an important evidence gap, use standard search for that unresolved question rather than routinely running both types. Inspect your interface's schema and disclose when an explicitly requested type is unavailable.

Fast Search (`search_type: "fast"`) is different from **Ask's Agent API `fast` preset**, which generates an answer. Use the [Perplexity Search prompt](research-prompts.md#perplexity-search) to let your assistant select the search type and follow up on important evidence gaps.

### Model boundary

The Perplexity MCP integration described here distinguishes retrieval from provider-side synthesis as follows. Other interfaces may expose different controls or configurations; inspect the selected operation before use:

| Tool | What happens |
| --- | --- |
| **Search** | The Search API returns ranked results without an AI-written answer; the application performs any later synthesis |
| **Ask** | The Agent API generates an answer using its `fast` preset |
| **Reason** | The Agent API performs the comparison or reasoning using its `medium` preset |
| **Research** | The Agent API produces the investigation using its `high` preset |

Agent API presets contain their own model, instructions, search configuration, tools, and reasoning budget. Dynamic presets can change their underlying model.

A direct Agent API request containing a `model`, `models`, or `preset` field selects a provider-side configuration; it does not inherit the model selected in the application.

If the completed result exposes only the preset and not the exact underlying model, report that visibility gap rather than guessing.

### Prompting the synthesis modes

Perplexity’s [Agent API prompt guide](https://docs.perplexity.ai/docs/agent-api/prompt-guide) recommends several useful practices:

- make the question specific and descriptive;
- include the entity, scope, time period, and evidence required;
- cap requested lists and comparisons;
- allow the system to disclose insufficient or near-miss evidence rather than guess;
- use request parameters for hard domain, date, country, freshness, or step-limit constraints when the live schema exposes them;
- preserve structured source metadata and inspect sufficient underlying source content before final citation; reuse content already retrieved.

An MCP wrapper may expose only a subset of direct Agent API controls. Inspect the live schema for the selected mode instead of assuming that Search, Ask, Reason, and Research accept identical parameters.

### What to avoid

- Do not call multiple Perplexity modes for the same subquestion without a material reason.
- Do not treat generated prose as a primary source.
- Do not copy citations from generated prose without inspecting the underlying source content supporting important claims. Reuse sufficient content already retrieved.
- Do not imply that Ask, Reason, or Research used the model selected in the application.

## Parallel

### Best fit

**Parallel guidance checked 11 November 2026.**

Use Parallel to find source evidence, query relevant specialized records, or commission provider-generated research when that suits the task. A user should be able to ask a question without knowing the dataset catalogue: the agent should consider the relevant accessible sources and choose the smallest useful combination.

**Two distinct routes:** Parallel’s financial and legal improvements help its existing web search find relevant source documents. Specialized dataset access is a separate route: discover an available operation, then query its records. The Finance and Legal releases do not establish that a corresponding dataset operation is available.

The [unified MCP server](https://docs.parallel.ai/integrations/mcp/quickstart) exposes web retrieval and specialized-source discovery together, with authenticated research available on the same connection. Other integrations can expose a different subset. Start with the [connection readiness checks](connecting-providers.md#parallel-connection-readiness), then try a [Parallel prompt](research-prompts.md#parallel-use-relevant-accessible-data).

| Research need | Route | Access and output |
| --- | --- | --- |
| Find public sources and supporting passages | `web_search`, then `web_fetch` when needed | Core MCP retrieval; returns source evidence for your assistant |
| Retrieve specialized records | `find_verticals`, then `search_vertical` | Discover a matching operation, input schema and price; check the returned records and citations |
| Get a cited answer to one research question | `web_research` | Authenticated MCP; provider-generated answer returned in the same call |
| Benefit from included Index Partner evidence | An eligible Task or Responses research operation | Automatic relevance-based retrieval; partner and processor coverage varies |
| Add selected free or paid connectors to research | Authenticated research configuration or a supported Task/Responses interface | Requires exposed configuration and account access; selection does not guarantee a call |
| Research with an existing licensed/private source | Supported BYOL Task/Responses integration | Requires the source's license, credentials and supported interface |
| Produce a substantial asynchronous report or enrich a list | Task MCP, Task API or Parallel CLI | Separate advanced workflow with its own lifecycle and processor costs |

These routes are alternatives and can complement one another when they fill distinct evidence gaps. A successful web search does not establish access to every dataset or research operation.

### Search

Give `web_search` one goal-style objective and short related keyword queries. The objective explains what evidence is needed; the queries supply retrieval terms. Reuse sufficient excerpts. Use `web_fetch` for a supplied URL, exact wording, full-document analysis or missing context; request full content only where necessary.

Inspect supported freshness controls when currentness matters. A fetch can still return cached material. Keep publication, reporting-period, effective and retrieval dates distinct. Reuse session IDs only if the callable schema accepts them: they correlate calls and do not establish conversational memory or deduplication. Supply optional model metadata only when both the field and the exact model identity are known.

<a id="financial-and-legal-sources"></a>

### Financial and legal web search

Parallel describes its [29 October 2026 Finance release](https://parallel.ai/blog/parallel-for-finance) and [6 November 2026 Legal release](https://parallel.ai/blog/parallel-for-legal) as index and ranking upgrades across its existing APIs, with no new plan or subscription. They are useful reasons to consider Parallel for filings, registers, company announcements, court opinions, legislation and regulatory material. They do not create new Finance or Legal tool names or guarantee complete coverage. Normal usage charges and access limits still apply.

For financial work, retain entity identifiers, reporting periods, currency and units, filing/publication dates, source tables and amendments or restatements. Distinguish a reported value from a calculation, forecast or market observation. Use a specialized dataset when comparable fields or coverage require it; do not assume a web filing supplies a licensed feed.

For legal work, retain jurisdiction, court or issuer, document identifiers, decision/enactment/effective dates and supporting sections or pages. Check the proposition against the passage. Distinguish holdings from syllabuses, dissents and submissions, and enacted rules from proposals or guidance. Search metadata can differ from dates printed in the source. Older authority may remain applicable; finding a case does not establish that it remains good law or that a citator check occurred. Customer-specific private indexes are not a promise of the same coverage for every account.

The announcements' benchmarks are dated vendor evaluations, not independent guarantees or routing rules. Their reported end-to-end costs include answer-model tokens and search/fetch usage. This guide has not reproduced those benchmarks.

<a id="discover-specialized-records"></a>

### Specialized dataset operations: discover, then query

When a question materially benefits from a specialized dataset, use `find_verticals` with the evidence needed, rather than defaulting to generic web search. Examples include trial registrations, biomedical literature, compounds, Medicare coverage and places. Discovery returns candidate IDs, prices and full input schemas for the best matches. If the desired match lacks a schema, refine discovery before executing it.

Inspect the selected operation's fields, coverage, output type and price, then call `search_vertical` with that returned ID and its accepted arguments. Some operations analyze records rather than simply retrieving them: assistant-only synthesis restrictions apply to the operation, even inside a retrieval-oriented tool. Preserve record identifiers and citations; report truncation, missing fields and coverage gaps. A catalogue entry proves discovery, not successful retrieval.

A separate discovery check on 11 November 2026 requested financial filings and court rulings but returned no dedicated finance or legal operation. This describes that response, not proof that such datasets are unavailable through every connection or access route.

**Executed check, 11 November 2026:** discovery returned `clinical_trials.get_trial_details` with a required `nct_id` and a $0 call price. One lookup of `NCT04280705` returned a trial identifier, title, completed status and an official ClinicalTrials.gov citation; the result reported `cost_usd: 0`. The returned record was truncated, so its last-update field was not verified. This checks one lookup, not every vertical or the completeness of the registry.

### Included partners, selected connectors and licensed sources

[Data Connectors](https://docs.parallel.ai/resources/data-connectors) describes three access models. Keep them distinct:

- **Index Partners** are included on eligible research runs. When their data could help, describe the required records, entities, fields, dates and geography clearly. Parallel decides what to retrieve; do not put an Index Partner into `data_sources`, which rejects those names. Availability varies by partner and processor. The Responses API does not report Index Partner calls, so do not infer contribution from catalogue membership alone.
- **Selected connectors** use `data_sources.free` or `data_sources.pay_per_use` through the appropriate research interface. Free connectors such as PubMed and ClinicalTrials.gov have no connector charge; the research operation may still be billed. Paid connector calls are additional charges, may occur more than once, and depend on organization access. Responses connector selection requires medium or high effort. Inspect returned call records and citations to distinguish enabled, invoked and contributing sources.
- **Bring your own license (BYOL)** adds a licensed or private remote MCP source through a supported Task/Responses integration. A funded Parallel account does not itself grant that license. Sources in one research run may receive information obtained from another source, so preserve the user's data-sharing constraints. Keep credentials in secure client configuration, outside prompts and shared examples.

The [connector directory](https://parallel.ai/data-connectors), checked 11 November 2026, describes Pensa Systems as retail shelf intelligence and Particle as news coverage across perspectives, but labels both “Coming soon.” These are evidence-matching examples, not verified access: a shelf-availability question could benefit from Pensa-type observations, while a news-coverage comparison could benefit from Particle-type records. Check current availability and returned evidence; do not assume a similarly named partner supplies the same dataset through another provider.

Use relevant included evidence within an already-permitted research operation; do not launch provider-generated research merely to reach a partner when the user allows retrieval only. Direct vertical access and research connector access can reach related datasets, but their parameters and billing are different. See [current configuration guidance](connecting-providers.md#parallel-connection-readiness).

### Provider-generated research

`web_research` returns a cited answer in the same call. Check the returned status, answer and sources, retaining the response ID and exposed effort/usage. A supported `previous_response_id` continues earlier research; it is a new follow-up request, not polling. Treat the answer as provider synthesis and verify material claims against sufficient evidence. Do not apply an asynchronous creation-and-stop rule to a completed response.

### Task

Use Task workflows when asynchronous depth or repeated structured enrichment is the actual need. The [Task MCP](https://docs.parallel.ai/integrations/mcp/task-mcp), [Task API](https://docs.parallel.ai/task-api/task-quickstart) and [CLI](https://docs.parallel.ai/integrations/cli) are advanced access routes; the unified MCP's same-call research does not replace every batch workflow.

| Task operation | Use it when |
| --- | --- |
| Deep Research | One topic requires a substantial provider-generated report |
| Task Group | The same output contract must be applied independently to several inputs |

Inspect the selected interface and follow its lifecycle. If it directs a progress-link handoff and the user has not requested monitoring, return the link with pending status. When continuation is permitted, use retained identifiers and the relevant result tools; do not duplicate active work. Test a small batch before scaling. Report exposed processor, cost and evidence gaps without attributing provider output to your assistant's selected model.

### What to avoid

Do not equate a configured connection with entitlement to all sources, put unsupported API settings into MCP arguments, or claim an enabled connector supplied evidence without a returned contribution. If a capability is missing, identify whether the gap is tool exposure, authentication, configuration, entitlement or interface support, and explain the appropriate next step.

Parallel also exposes Decisions for typed judgments. It is outside this guide's search-and-retrieval workflows and must not be invoked under retrieval-only instructions.

## Optional: authenticated X-native evidence

Web search is not a substitute for authenticated X data. When a task requires posts, users, counts, geographic trends, bookmark folders, news search, or archive coverage, use an authenticated X-native interface.

- Use one authenticated X-native read interface. In an environment where **xurl** is available and authenticated, it is a suitable default.
- Use another authenticated X API interface when a dedicated structured operation better fits the task or xurl is unavailable.
- Treat alternative X-native interfaces as routes to the same evidence. Do not routinely send the same X query through more than one.
- When broader evidence is permitted, generic web or browser material may be labeled as non-X corroboration; it cannot replace unavailable X-native data.
- Keep research read-only unless the user separately authorizes posting, replying, following, messaging, or bookmark changes.

X is included here as an optional platform-native evidence role, not as a general web-research provider.

## Combining providers without duplicating work

A combined workflow should explain why each provider is present.

Examples of complementary roles include:

- Octen Broad Search for multi-angle discovery, then Exa Search for a semantic cross-check;
- Exa Search for underlying sources, then Perplexity Reason once for a grounded comparison;
- Parallel Search for objective-shaped excerpts, then Parallel Fetch only for selected results that need fuller evidence;
- Parallel Task Group for a repeated enrichment contract across a small input set, without running duplicate searches for each input;
- Exa Agent with Fiber for firmographics and Similarweb for traffic fields;
- Exa Agent with Polymarket for prediction-market odds or price history;
- web evidence through Exa or Octen and a separate authenticated X evidence role.

Avoid sending the same query or URL through several providers unless independent verification would materially strengthen the result.

If one evidence role is blocked, disclose the gap, follow the permitted fallback policy, and complete independent permitted work. Continue until the requested deliverable has sufficient inspected evidence or remaining gaps are blocked by access, explicit restrictions, budget, or the selected tool’s lifecycle. Ask for clarification only when an unresolved boundary materially affects scope, cost, or data handling. Report contributions and limitations proportionally.

## Continue reading

- [Choosing External Research Tools for AI Agents](README.md)
- [Connecting and testing providers](connecting-providers.md)
- [Research prompt examples](research-prompts.md)

## Official documentation

- [Keenable documentation](https://docs.keenable.ai/)
- [Octen documentation](https://docs.octen.ai/)
- [Exa MCP](https://exa.ai/docs/reference/exa-mcp)
- [Exa Agent](https://exa.ai/docs/reference/agent-api-guide)
- [Exa Connect](https://exa.ai/docs/reference/agent-api/connect/overview)
- [Perplexity documentation](https://docs.perplexity.ai/docs/getting-started/overview)
- [Perplexity MCP](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server)
- [Parallel unified MCP](https://docs.parallel.ai/integrations/mcp/quickstart)
- [Parallel Task MCP](https://docs.parallel.ai/integrations/mcp/task-mcp)
- [xurl](https://github.com/xdevplatform/xurl)
- [X API documentation](https://docs.x.com/x-api)

## Other tools to explore

This guide focuses on a smaller selection of providers. These services offer additional approaches worth exploring; follow their official sites for current capabilities, access and pricing.

<a id="firecrawl"></a>

**[Firecrawl](https://www.firecrawl.dev/)** helps AI assistants collect and extract information from websites. Its Alexandria catalogue also provides access to specialist data sources, including company filings and scientific literature. Explore it if your work involves collecting information across many pages or obtaining particular types of records.

<a id="tinyfish"></a>

**[TinyFish](https://www.tinyfish.ai/)** offers web search, page reading and browser automation, alongside tools for producing research reports and building datasets from public webpages. Explore it if your task involves interacting with websites or assembling information across many sources.
