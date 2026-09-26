# Choosing an external research provider

This reference compares practical roles for [Octen](https://octen.ai/), [Exa](https://exa.ai/), [Perplexity](https://docs.perplexity.ai/docs/getting-started/overview), [Parallel](https://parallel.ai/), [Firecrawl](https://www.firecrawl.dev/), and [TinyFish](https://www.tinyfish.ai/). It also explains when authenticated X-native evidence belongs in a research workflow.

These services overlap, but they are not interchangeable. Choose according to the evidence and output the task requires—not according to how many providers are available.

**Last substantively reviewed:** September 2026. Provider tools, schemas, availability, and commercial terms can change. Inspect the tools exposed in the current harness before relying on a capability described here.

[Choosing External Research Tools for AI Agents](README.md)

## On this page

- [Quick chooser](#quick-chooser)
- [Retrieval and provider-side synthesis](#retrieval-and-provider-side-synthesis)
- [Octen](#octen)
- [Exa](#exa)
- [Perplexity](#perplexity)
- [Parallel](#parallel)
- [Firecrawl](#firecrawl)
- [TinyFish](#tinyfish)
- [Optional: authenticated X-native evidence](#optional-authenticated-x-native-evidence)
- [Combining providers without duplicating work](#combining-providers-without-duplicating-work)
- [Continue reading](#continue-reading)
- [Official documentation](#official-documentation)

## Quick chooser

| If you need… | Start with… |
| --- | --- |
| A focused web or news lookup | **Octen Search** |
| Several distinct research angles requiring broader discovery | **Octen Broad Search** |
| Web images or relevant moments in videos | **Octen Image Search or Video Search**, when callable |
| Semantically precise web discovery | **Exa Search** |
| Exact domains, dates, categories, text, or subpage controls | **Exa Advanced Search** |
| Ranked URLs or recent-news leads without a generated answer | **Perplexity Search** |
| A quick, focused factual answer or concise cited explanation | **Perplexity Ask** |
| A comparison or decision analysis against explicit criteria using current web evidence | **Perplexity Reason** |
| A deep multi-source investigation | **Perplexity Research** |
| Answer-oriented web results with paired search and fetch sessions | **Parallel Search** |
| One substantial provider-generated research report | **Parallel Deep Research** |
| The same structured enrichment task repeated across several inputs | **Parallel Task Group** |
| Structured list-building or specialized provider-backed fields | **Exa Agent and relevant Connect providers**, or a suitable **Firecrawl Alexandria** capability after checking coverage and price |
| Large lists or difficult qualification criteria where completeness outweighs latency and cost | **Exa Agent Ultra**, when provider-generated research is permitted and suitable budget controls are available |
| Prediction-market odds, history, order books, or public position data | **Exa Agent with Polymarket Connect**, when exposed |
| Reading a page found by Octen | Reuse sufficient excerpts or full text returned by Search or Broad Search; use **Octen Extract** for supplied URLs or missing, incomplete, unusable, or stale content |
| Reading a known or Exa-discovered page | **Exa Fetch** for supplied URLs or when returned search content is insufficient |
| Discovering a site’s relevant URL inventory before extraction | **Firecrawl Map** |
| Reading or structurally extracting one known webpage | **Firecrawl Scrape** |
| Collecting a bounded set of related pages from one site | **Firecrawl Crawl** |
| Parsing a supported document | **Firecrawl Parse** |
| Compact web, news, or research-paper discovery | **TinyFish Search** |
| Browser-rendered extraction or interactive website work | **TinyFish page extraction or browser automation** |
| Authenticated posts, users, trends, counts, or bookmarks from X | **An authenticated X-native interface** |

Apply provider constraints in this order: explicit inclusions or exclusions, named-provider requests, materially matched specialized data, then a generic discovery default. A named provider is required for its requested role; “only” or “exactly” makes the permitted set exclusive. Add a complementary provider only within the authorized scope.

## Retrieval and provider-side synthesis

A supported provider connection lets the harness-selected model call a provider. It does not automatically make that model the one used inside every provider operation.

| Operation | Typical boundary |
| --- | --- |
| **Search, fetch, or extraction** | The provider returns ranked results or page content. The harness-selected model interprets the evidence and normally writes the final response. |
| **Answer, reasoning, research, or agent run** | A model or workflow inside the provider may generate prose or structured output before returning it to the harness. |

Search and extraction providers may still use machine-learning systems for ranking, rendering, extraction, or classification. The distinction is about who produces the visible analysis or narrative answer.

When the harness-selected model must perform all visible reasoning and synthesis, allow source retrieval and faithful extraction but exclude provider-generated answers. Inspect the selected output mode as well as the tool name: a scrape or fetch tool may also offer generated summaries or freeform answers. Ordinary lookups can default to retrieval and harness synthesis unless the user requests a different approach.

For changing facts, check available cache controls and retain the source’s observation or reporting date. Fetching a page today does not establish that its contents are current. Disclose material freshness uncertainty.

When provider-generated synthesis is allowed, require the final response to identify the provider tool and any model or preset exposed in the completed result.

## Octen

### Best fit

Use Octen for focused web or news discovery, multi-angle expansion from a self-contained question, page content returned with search, selected page extraction, or media discovery when available.

Octen can be accessed through supported integrations such as official provider skills, hosted or local MCP servers, or direct API access. Available capabilities and parameter names can differ by interface. Choose the operation needed, then inspect how the available integration exposes it.

- **Search** handles focused web lookup. Use its news topic when current news is the evidence lane. When source text will help answer the question, explicitly enable full content using the current interface’s controls.
- **Broad Search** expands one self-contained question into several discovery angles. Preserve the user’s intent and constraints, resolve conversational references using the available context, and fit the question within the current interface’s input limit. Let the provider generate the subqueries. Use targeted follow-ups for remaining gaps; a simple comparison may need only focused searches.
- **Extract** reads supplied URLs or selected results whose returned text is missing, incomplete, unusable, or stale. Reuse sufficient excerpts or full text before requesting another read. When the full page body is needed, leave the relevance-query option unset if that option returns highlights instead. Use an appropriate supported cache age when freshness matters.
- **Image Search** and **Video Search** are separate capabilities. Check current access before relying on them.

### What it contributes

Plain Search is useful for a bounded lookup; Broad Search is useful when several discovery angles are needed. Requesting page text alongside search can reduce separate extraction calls. As checked on 13 September 2026, Octen’s pricing page includes full content for the first ten results per search at no additional content charge; results beyond ten cost $0.50 per 1,000. Search calls remain chargeable, and Broad Search may execute several of them. Start with only as many results and sub-queries as the evidence needs. [Current pricing](https://docs.octen.ai/overview/pricing.md)

When additional source context is needed, explicitly request full content using the available interface’s controls rather than relying on defaults. Inspect what actually returned: a full-content request does not guarantee that every page was retrieved, that its text is complete, or that it is fresh. Reuse sufficient excerpts or full text without another read. [Octen documentation](https://docs.octen.ai/)

### What to avoid

Do not repeat the same broad query across providers merely to increase provider count. Give complementary providers a distinct evidence or verification role. Do not automatically Extract every Octen result, and do not forbid another read when the returned content lacks necessary context. Ten results is a useful content-pricing threshold, not a universal evidence limit; larger searches or follow-up queries can be justified by a coverage gap. Lower token caps manage context, but can remove qualifications needed to support a claim.

## Exa

### Best fit

Use Exa when the task benefits from semantic source discovery, precise search controls, fetching known pages, structured multi-step research, or specialized datasets.

### Search, Advanced Search, and Fetch

- **Regular Search** is the normal starting point for semantic discovery and independent cross-checking. Convert a terse request into a richer description of the ideal sources without changing the user’s intent or constraints.
- **Advanced Search** is appropriate when exact domains, publication or crawl dates, categories, freshness, text requirements, geographic controls, or subpage limits materially affect the result.
- **Fetch** reads known URLs or selected Exa results when search highlights are insufficient.

Regular Search should remain the default. Advanced Search is not inherently better; use it when its additional controls solve a specific retrieval need.

### Specialized search indexes

Exa documents task-specific verticals for different evidence types. These are search categories, not Exa Connect providers.

| Exa vertical | Useful for | Invocation cue |
| --- | --- | --- |
| [**People Search**](https://exa.ai/docs/reference/verticals/people) | Professional profiles by role, skills, company, location, or seniority | Use `category:people` in regular Search, or the `people` category in Advanced Search when exposed |
| [**Company Search**](https://exa.ai/docs/reference/verticals/company) | Company discovery by industry, funding stage, headcount, geography, or technology | Use `category:company` in regular Search, or the `company` category in Advanced Search when exposed |
| [**Code Search**](https://exa.ai/docs/reference/verticals/code) | Working examples across GitHub, documentation, and developer discussions | Use a code-specific semantic query and the Advanced Search `github` category when appropriate |
| [**News Search**](https://exa.ai/docs/reference/verticals/news) | Current news with semantic and date-aware filtering | Use a news-specific query with the `news` category and date controls when exposed |

Inspect the strongest returned sources before making material claims. Excerpts or full text returned by search can suffice when they contain the relevant facts and qualifications. Retrieve more context when evidence is ambiguous, incomplete, conflicting, stale, or missing material qualifications. A search category helps discovery; it does not by itself prove that a profile, company, code example, or news report is current or authoritative.

### Agent and Connect

Exa Agent is a different layer from ordinary search. Use it for multi-step research, enrichment, structured list-building, or repeatable output schemas.

<a id="when-agent-ultra-is-worth-it"></a>

### When Agent Ultra is worth it

**Consider Ultra when finding more verified matches matters enough to justify a longer, metered research run.** It is Exa Agent's highest effort setting (`effort: "ultra"`), useful for large lists, deep multi-source research, and hard-to-verify criteria. For example, find papers and repositories implementing a defined technique, then verify which provide runnable evaluation code. A short factual lookup or reading one supplied page usually needs Search or Fetch instead.

Ultra delegates research and inference to Exa's own workflow and models. It does not inherit the model selected in your application. It is an Agent effort, separate from the choice of Connect datasets.

**Terms checked September 26, 2026:** Exa documents a default $20 per-run cap with actual usage billing; a run finishing early can cost less. It describes complex runs as typically about 30 minutes, potentially three hours. These are provider descriptions, not timings or quality results measured for this guide. Fixed Agent efforts offer predictable per-request prices when they meet the task. Check applicable Connect charges if adding a dataset. [Ultra documentation](https://exa.ai/docs/agent/agent-ultra.md) · [Current pricing](https://exa.ai/docs/reference/pricing.md)

| Control in the direct API | What it means |
| --- | --- |
| `budget.maxCostDollars` | $1–$100; available for `auto` and `ultra`; Ultra defaults to $20 |
| `budget.maxDurationSeconds` | 300–10,800 seconds; a soft duration ceiling for Ultra, not an exact finish-time guarantee |
| Graceful stop | Ends an Ultra run while retaining findings and billing usage so far |

An integration may expose Ultra without these controls. A spending limit written into a prompt is not an enforced API limit. Check the [connection guidance](connecting-providers.md#verify-ultra-controls-before-starting) before starting a run with a required budget.

Check why the run ended as well as its status. A completed run may have hit its spending or time limit, or been stopped early. Report those findings with the remaining coverage gaps. Even `schema_satisfied` does not independently establish that every qualifying entity has been found. Define the scope, require evidence for each qualification, and allow unknown fields. [Run schema and stop reasons](https://exa.ai/docs/reference/agent-api/create-a-run.md)

Exa's [launch benchmarks](https://exa.ai/blog/exa-agent-ultra) are vendor-reported comparisons. This guide has not independently benchmarked Ultra or executed an Ultra trial; it describes an optional capability rather than a measured recommendation that it is better. Try the [comprehensive discovery](research-prompts.md#exa-agent-ultra-for-comprehensive-discovery) or [list expansion](research-prompts.md#exa-agent-ultra-to-expand-an-existing-list) pattern when the task and budget justify it.

### Connect datasets within Agent

Exa Connect can expose specialized data providers inside an Agent run. Select only the Connect providers needed for the output fields, even when the user has not named a provider. Inspect the current interface’s supported data sources and respect provider and synthesis restrictions. Name the provider-backed fields in the query and `outputSchema`, then inspect the completed run to confirm which provider contributed.

On September 3, 2026, Exa’s self-serve Connect documentation and the live `dataSources` schema inspected for this guide exposed eight providers:

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
- Do not imply that Exa Agent output was generated by the harness-selected model.

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

### Model boundary

The Perplexity MCP integration described here distinguishes retrieval from provider-side synthesis as follows. Other interfaces may expose different controls or configurations; inspect the selected operation before use:

| Tool | What happens |
| --- | --- |
| **Search** | The Search API returns ranked results without an AI-written answer; the harness performs any later synthesis |
| **Ask** | The Agent API generates an answer using its `fast` preset |
| **Reason** | The Agent API performs the comparison or reasoning using its `medium` preset |
| **Research** | The Agent API produces the investigation using its `high` preset |

Agent API presets contain their own model, instructions, search configuration, tools, and reasoning budget. Dynamic presets can change their underlying model.

A direct Agent API request containing a `model`, `models`, or `preset` field selects a provider-side configuration; it does not inherit the model selected in the harness.

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
- Do not imply that Ask, Reason, or Research used the model selected in the harness.

## Parallel

### Best fit

Parallel currently provides separate **Search** and **Task** capabilities. Use Search for answer-oriented web discovery and retrieval. Use Task when Parallel should perform provider-side research or enrichment rather than merely return sources. The exact integration and tool names vary by harness.

### Search

- **Web Search** accepts a concise research objective plus short search queries and returns ranked results with answer-oriented excerpts.
- **Web Fetch** retrieves selected URLs when the excerpts are insufficient. Request full content only when the task needs it.
- Reuse the returned session identifier across related Search and Fetch calls so Parallel can preserve context and avoid redundant work.
- Treat the objective as the question the evidence must answer and the search queries as compact retrieval terms. They serve different purposes.

Parallel Search is useful when the harness needs evidence shaped closely around an explicit objective. It can complement a different provider’s discovery only when the queries or verification role are materially distinct.

### Task

| Task operation | Use it when |
| --- | --- |
| **Deep Research** | One topic requires a substantial provider-generated report or structured result |
| **Task Group** | The same output contract must be applied independently to several inputs, such as a small batch of companies or products |

These are asynchronous provider-side jobs. Follow the selected interface’s lifecycle. The Task MCP creation tools direct the agent to share the task URL and stop unless the user has requested monitoring or continuation. Such a response is a pending handoff, not completed research. Do not launch an equivalent search workflow while the task remains active. Retain identifiers and inspect results when continuation is permitted. If the completed result exposes a processor or model, report it; otherwise state that the exact provider-side model was not visible.

### What to avoid

- Do not treat Search and Task as interchangeable merely because both can research the web.
- Do not use Task Group for one topic or Deep Research for a batch of independent inputs.
- Do not invent a `model_name` or processor slug. Supply analytics model metadata only when the exact active model is known from trusted runtime information; change a task processor only as allowed by the live tool instructions and the user’s request.
- Do not claim that the harness-selected model produced provider-side Task output.

## Firecrawl

### Best fit

Use Firecrawl to search for sources, discover site structure, extract a page, collect a bounded set of related pages, or parse a document. Alexandria adds optional access to structured provider data when the task calls for suitable structured provider fields.

| Firecrawl operation | Distinct role |
| --- | --- |
| **Search** | Web, news, or image discovery; supported connections can also return Alexandria capability matches |
| **Scrape** | Content or schema-constrained fields from one supplied URL; a separate Alexandria mode executes a discovered provider capability |
| **Alexandria discovery** | Find relevant data capabilities and inspect their inputs, coverage, response fields, and published credit prices |
| **Map** | A relevant URL inventory for a site; it returns links, not page bodies |
| **Crawl** | Recursive, bounded collection across related pages on one site |
| **Parse** | Text and structure from supported document formats |
| **Agent** | Asynchronous provider-side multi-source research or extraction |
| **Developer or research indexes** | Code/documentation discovery or scholarly-paper workflows when those tools are exposed |

Map first when the important pages are not yet known. Scrape a known page when one document is enough. Crawl only when several related pages are genuinely required, and set conservative path, depth, and page limits. For JSON output, provide a precise field schema and preserve source URLs; for narrative reading, Markdown is usually simpler.

Firecrawl and TinyFish overlap at the browser boundary but have different default roles. In this workflow, Firecrawl handles site-scale extraction; TinyFish page extraction is for a focused rendered-page read, and TinyFish browser automation is for a user-directed stateful interaction. Use only one for the same page unless a failed extraction creates a clear escalation reason.

### Alexandria: optional data with a visible cost

[Alexandria](https://docs.firecrawl.dev/features/alexandria) is Firecrawl's catalog of data providers and capabilities. It can help when a question needs the same fields across several entities, dated records, or a collection of structured data—for example, public records, software packages, scientific papers, or podcast transcripts. The assistant discovers a matching capability, checks what it returns and what it costs, then decides whether it adds useful evidence.

**Reuse sufficient search or page content.** Finding a capability does not mean it must be executed. A simple search answer or a supplied page can complete the task without extra provider retrieval. Before collecting repeated fields from many pages, a targeted catalog lookup may reveal a better route; there is no need to browse the whole catalog for every question. A suitable discovered capability can also be the first retrieval step; you do not need to buy web results merely to rule them out.

**Discovery is free; data execution uses the capability's published credit price and billing unit.** Some capabilities list zero execution credits. Check whether a rate applies per call, record, or group of records, including any stated rounding and special-mode rates; a listed price is not always the total for your request. Including web results in the same search still incurs ordinary web-search charges, and page scraping retains its normal charges. Free discovery also uses some assistant time and model context. Compare coverage and expected total cost, including additional pages, before execution; do not assume a provider call is cheaper than page extraction. Existing budgets apply, and material unapproved spend should be discussed before proceeding. Report per-call credits and distinguish quoted prices from usage actually returned by the service.

A website match is only a suggestion. Check geographic and time coverage, required inputs, source information, and any access conditions. Keep analysis with your selected model when that is your requirement: some capabilities or output modes may generate analysis rather than return source records. If a provider requires terms acceptance, an organization admin must review them; the assistant needs explicit authorization to accept the reviewed terms.

You can describe the fields you need without knowing a provider's name. Start with the [generic Firecrawl prompt](research-prompts.md#firecrawl-with-optional-alexandria-data); it allows the assistant to finish with search or page extraction when those are sufficient. The catalog changes, so discover current capabilities instead of relying on a fixed provider list. Developer and Research indexes may be available through dedicated tools or discovered Alexandria capabilities. Choose the available route with suitable controls and pricing, and avoid retrieving the same evidence through both. The general web-search research filter remains distinct from the paper index.

### Authorization and lifecycle boundaries

- Firecrawl Agent is provider-side and asynchronous. Retain its run identifier and follow the live status-tool instructions to retrieve completion; do not start a duplicate run.
- Interactive browser actions can change site state. Installation alone does not authorize submissions, purchases, account changes, or destructive actions.
- Monitor tools create recurring checks or notifications and require an explicit monitoring request; ordinary research does not authorize them.
- Respect access controls, terms, rate limits, and privacy constraints. Keep crawl scope proportional to the question.

## TinyFish

### Best fit

TinyFish capability names and availability vary by integration. Inspect the current tools to determine whether discovery, rendered-page extraction, and browser automation are available separately. The roles below describe what to select when the corresponding capability is exposed.

- **Search** provides compact web, news, or research-paper discovery.
- **Page extraction** renders known pages and returns clean content, including JavaScript-heavy pages and batched URLs.
- **Browser automation** is for a user-directed task requiring navigation, clicks, forms, login, or interactive page state.

### What it contributes

TinyFish can be a discovery provider in its own right. Its page-extraction capability is also a useful escalation path after another provider discovers an important page that ordinary extraction cannot read. Prefer page extraction over browser automation when reading alone is sufficient.

In a mixed workflow, assign it a clear role—for example, verifying a dynamic pricing page, inspecting an interactive product flow, or retrieving a rendered primary source that another fetcher could not access.

### What to avoid

Do not send every query or page through TinyFish merely because its tools are available. Use it when it contributes distinct discovery, rendered content, interaction, or verification, and do not duplicate an automation run that may still be active.

## Optional: authenticated X-native evidence

Web search is not a substitute for authenticated X data. When a task requires posts, users, counts, geographic trends, bookmark folders, news search, or archive coverage, use an authenticated X-native interface.

- Use one authenticated X-native read interface. In an environment where **xurl** is available and authenticated, it is a suitable default.
- Use another authenticated X API interface when a dedicated structured operation better fits the task or xurl is unavailable.
- Treat alternative X-native interfaces as routes to the same evidence. Do not routinely send the same X query through more than one.
- When broader evidence is permitted, generic web or browser material may be labeled as non-X corroboration; it cannot replace unavailable X-native data.
- Keep research read-only unless the user separately authorizes posting, replying, following, messaging, or bookmark changes.

X is included here as an optional platform-native evidence lane, not as a general web-research provider.

## Combining providers without duplicating work

A combined workflow should explain why each provider is present.

Examples of complementary roles include:

- Octen Broad Search for multi-angle discovery, then Exa Search for a semantic cross-check;
- Exa Search and Fetch for ordinary web evidence, then TinyFish page extraction for an important browser-rendered page or browser automation for a required interaction;
- Exa Search for underlying sources, then Perplexity Reason once for a grounded comparison;
- Parallel Search for objective-shaped excerpts, then Parallel Fetch only for selected results that need fuller evidence;
- Parallel Task Group for a repeated enrichment contract across a small input set, without running duplicate searches for each input;
- Firecrawl Map to identify the relevant section of a site, then a bounded Crawl or selected Scrapes;
- Exa Agent with Fiber for firmographics and Similarweb for traffic fields;
- Exa Agent with Polymarket for prediction-market odds or price history;
- web evidence through Exa or Octen and a separate authenticated X evidence lane.

Avoid sending the same query or URL through several providers unless independent verification would materially strengthen the result.

If one evidence lane is blocked, disclose the gap, follow the permitted fallback policy, and complete independent permitted work. Continue until the requested deliverable has sufficient inspected evidence or remaining gaps are blocked by access, explicit restrictions, budget, or the selected tool’s lifecycle. Ask for clarification only when an unresolved boundary materially affects scope, cost, or data handling. Report contributions and limitations proportionally.

## Continue reading

- [Choosing External Research Tools for AI Agents](README.md)
- [Connecting and testing providers](connecting-providers.md)
- [Research prompt examples](research-prompts.md)

## Official documentation

- [Octen documentation](https://docs.octen.ai/)
- [Exa MCP](https://exa.ai/docs/reference/exa-mcp)
- [Exa Agent](https://exa.ai/docs/reference/agent-api-guide)
- [Exa Connect](https://exa.ai/docs/reference/agent-api/connect/overview)
- [Perplexity documentation](https://docs.perplexity.ai/docs/getting-started/overview)
- [Perplexity MCP](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server)
- [Parallel Search MCP](https://docs.parallel.ai/integrations/mcp/search-mcp)
- [Parallel Task MCP](https://docs.parallel.ai/integrations/mcp/task-mcp)
- [Firecrawl Map](https://docs.firecrawl.dev/features/map)
- [Firecrawl Scrape](https://docs.firecrawl.dev/features/scrape)
- [Firecrawl Crawl](https://docs.firecrawl.dev/features/crawl)
- [Firecrawl MCP server](https://github.com/firecrawl/firecrawl-mcp-server)
- [TinyFish documentation](https://docs.tinyfish.ai/)
- [xurl](https://github.com/xdevplatform/xurl)
- [X API documentation](https://docs.x.com/x-api)
