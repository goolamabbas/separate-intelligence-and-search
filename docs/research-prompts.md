# Harness-neutral research prompt examples

These examples invoke the reusable routing skill through a natural-language instruction: `Use the multi-provider-research skill.` They do not depend on a harness-specific `$` command, slash command, mention syntax, or rules-file format.

Paste an example into the instruction or chat interface of an agent harness, then replace its placeholders. The harness may use a different internal mechanism to locate an installed skill, but the natural-language instruction preserves the portable intent.

The harness must still have access to the providers named in a prompt. A provider mentioned in an instruction is not necessarily installed, connected, authenticated, or callable.

Provider and operation names describe the intended capabilities, not a required integration method. Use the supported provider skill, MCP server, plugin, connector, command-line client, or direct API available in the application. Adapt parameters to that interface while preserving each prompt’s provider, evidence, and synthesis restrictions.

**Last substantively reviewed:** September 2026. Provider tools and live schemas can change.

- [Choosing External Research Tools for AI Agents](README.md)
- [Choosing an external research provider](choosing-providers.md)
- [Connecting and testing providers](connecting-providers.md)

## On this page

- [Start here: choose a pattern](#start-here-choose-a-pattern)
- [Minimum sufficient provider set](#minimum-sufficient-provider-set)
- [When not to invoke the skill](#when-not-to-invoke-the-skill)
- [Before copying a prompt](#before-copying-a-prompt)
- [Useful control clauses](#useful-control-clauses)
- [Common one-provider patterns](#common-one-provider-patterns)
- [Exa Connect patterns](#exa-connect-patterns)
- [Complementary-provider patterns](#complementary-provider-patterns)
- [Flexible routing and provider audits](#flexible-routing-and-provider-audits)
- [General-purpose fill-in template](#general-purpose-fill-in-template)
- [Portability note](#portability-note)

## Start here: choose a pattern

Start with **Minimum sufficient provider set** for everyday research. Use **Common one-provider patterns** for a restricted provider, **Exa Connect patterns** for specialized datasets, or **Complementary-provider patterns** for distinct roles.

**Flexible routing and provider audits** contains advanced patterns. The **General-purpose fill-in template** lets you specify required, optional, and excluded providers.

Use the section links below to jump to a pattern.

## Minimum sufficient provider set

This is the recommended general default.

```text
Use the multi-provider-research skill.

Use the minimum sufficient set of available providers. Select providers according to the evidence required by the research question; do not call every provider automatically.

Apply constraints in this order: explicit inclusions and exclusions, a named-provider request, a specialized-data match within the permitted scope, then a generic default.

Inspect the relevant callable tools and the selected operations' schemas before use. Check specialized datasets, including Exa Connect or Firecrawl Alexandria when relevant, if they materially supply the requested fields—even when I have not named a provider. Reuse schema knowledge unless the tool surface changes or validation fails. The first useful research read can also establish live usability; do not add a separate probe solely to demonstrate availability. Assign each selected provider a distinct role and avoid repeating successful searches or page reads without a material verification reason. Reuse sufficient evidence; a catalog match does not justify extra paid retrieval. Check coverage and published prices against my scope and budget before executing provider data calls.

Default ordinary lookups to retrieval and analysis by the model selected in this application. Use provider-side synthesis only when the requested outcome warrants it and my restrictions permit it. Complete independent permitted work if one evidence lane is blocked.

Report unavailable task-matched providers, provider contributions, failures, substitutions, and material evidence gaps.

Research question: [YOUR QUESTION]
```

## When not to invoke the skill

Installing the skill does not authorize it for every task. A mention of a provider in a copyediting task or a general browser task does not by itself call for research routing. Use this prompt when only the current harness’s built-in search and page-reading tools are permitted:

```text
Use only the web search and page-fetching tools provided natively by this harness.

Do not invoke, load, or apply the multi-provider-research skill. Do not call any separately connected MCP server, plugin, connector, provider skill, command-line tool, or external search or fetch provider.

If a native tool is unavailable or cannot access a required source, report the gap and stop that evidence lane. Do not substitute another interface.

In the final response, list the exact search and fetch tools used.
```

“Native” describes the tool surface presented by the harness. It does not prove that the harness vendor uses no external infrastructure.

For a hard technical guarantee, disable external tools and automatic skill loading or use a clean profile, then review the tool-call record.

## Before copying a prompt

### Provider access

**Multi-provider means multi-capable, not all-required.** The skill works with any available subset, including one provider. The agent should use only providers that are callable, permitted, and relevant.

Apply the user’s explicit inclusions and exclusions first, then any named-provider request, then specialized-data routing within that permitted scope. Do not silently replace a provider the user named merely because another provider could answer a similar question.

If a prompt explicitly requires an unavailable provider, the agent should follow the stated fallback policy rather than silently substitute another provider.

### Make the page-reading boundary explicit

Each copied prompt should state whether a native page reader is permitted. Do not rely on a convention outside the copied block to weaken “only.” To restrict external discovery while permitting native verification, write:

```text
Use Perplexity Search as the only external discovery provider. You may use the harness-native page reader to open selected result URLs, but do not call another external search or fetch provider.
```

### Model boundary

The harness-selected model normally orchestrates the task and writes the final response. Provider-side answer, reasoning, research, or agent tools may run their own model or preset.

Use this clause when external retrieval is allowed but the harness-selected model must perform all visible reasoning and writing:

```text
Use external providers only for search, retrieval, extraction, and page reading.

Do not invoke provider-side answer, reasoning, research, or agent tools. In particular, do not use Perplexity Ask, Reason, or Research; Exa Agent; Parallel Deep Research or Task Group; or Firecrawl Agent. Inspect output options too: do not request generated summaries or freeform answers through a retrieval tool.

Have the harness-selected model perform all analysis and final synthesis from the retrieved evidence.
```

Use this clause when provider-side synthesis is allowed but must be disclosed:

```text
You may use a provider-side answer, reasoning, research, or agent tool when it adds a distinct contribution.

Identify the exact provider tool used and, when the completed result exposes it, the provider-side model or preset. Keep provider-generated synthesis separate from the harness model's final analysis.
```

## Useful control clauses

These clauses can be added to any example.

### Require, permit, or restrict providers

Required participation, optional participation, and exclusivity are separate choices:

```text
Use Exa for discovery. You may add another provider only when it supplies a distinct necessary role within this task.
```

```text
Use exactly Exa and Octen as external providers. Both must contribute a distinct role. Do not call another external provider. You may use the harness-native page reader to verify cited sources.
```

```text
You may use TinyFish if a material primary source cannot be read adequately with the normal page reader.
```

```text
You may use exactly one task-appropriate Perplexity mode if it contributes a distinct discovery or synthesis role.
```

```text
You may use Firecrawl Map to discover relevant URLs on a site, then Scrape selected pages or run one conservatively bounded Crawl. Do not use all three when one operation is sufficient.
```

```text
You may use Parallel Search and Fetch for one evidence lane. Use Parallel Deep Research or Task Group only if provider-side synthesis is permitted and materially useful.
```

### Exclude providers or interfaces

```text
Use Exa Search and Fetch, but do not use Exa Agent or Connect.
```

```text
Use Perplexity Search, but do not use Perplexity Ask, Reason, or Research.
```

```text
Do not use generic web search, browser fetching, or scraping as a substitute for X-native evidence.
```

### Control fallback behavior

Strict:

```text
If a required provider is unavailable, report the gap and stop that evidence lane. Do not substitute another provider.
```

Flexible:

```text
If a preferred provider is unavailable, disclose that first and use the closest available fallback. Label the substitution clearly.
```

Approval-based:

```text
If a required provider is unavailable, do not substitute it without asking me first.
```

Apply the selected fallback policy to the blocked evidence lane. Complete independent permitted work rather than stopping the entire task. Continue until the requested deliverable has sufficient inspected evidence or remaining gaps are blocked by access, explicit restrictions, budget, or the selected tool’s lifecycle. Ask for clarification only when an unresolved boundary materially affects scope, cost, or data handling.

### Control duplication

```text
Do not send the same discovery query through multiple providers unless I explicitly request cross-validation.
```

```text
Use Octen and Exa for independent cross-checking, but do not fetch the same URL twice unless the evidence conflicts.
```

```text
Do not send the same subquestion through multiple Perplexity modes. Choose Search, Ask, Reason, or Research according to the required output.
```

```text
Do not launch an equivalent duplicate workflow while an asynchronous run remains active. Retain its identifier and follow the selected tool’s lifecycle instructions. If the tool instructs you to return a progress URL and stop, do so unless I have requested monitoring.
```

### Require an auditable report

For ordinary work, report tools, contributions, and material limitations briefly. Use the fuller ledger below when provenance, coverage, reproducibility, or an explicit audit request warrants it; a simple X lookup or two-provider task does not automatically need one.

```text
Finish with a concise provider ledger covering requested providers, providers actually used, exact interfaces, query transformations, operators, date ranges, contributions, failures, substitutions, and evidence gaps.
```

## Common one-provider patterns

### Octen Search, Broad Search, and Extract

Choose **Highlights first** for focused research or **Full content when needed** for closer reading. Both patterns inspect returned evidence and allow fuller retrieval when necessary. They work through the supported Octen interface available in your application.

**Highlights first**

```text
Use the multi-provider-research skill.

Use only Octen as the external research provider and page reader. Do not use another external provider or a native page reader. Use retrieval and source-content modes; have the model selected in this application perform the analysis and final answer. Do not request provider-generated summaries, answers, research reports, or agent analysis.

Inspect the available Octen interface and its live parameters. Use Search for a focused question. Use Broad Search only when several distinct angles justify it. Give it one self-contained question that preserves my intent and constraints, resolves references from the conversation, and fits the current input limit. Let Octen expand it into subqueries.

Start with query-relevant highlights. Explicitly enable highlights and disable full content using the current interface's controls. Adapt to the actual schema rather than assuming identical argument names across interfaces.

Start with at most 5 results per search, including each Broad Search sub-query, and at most 3 Broad Search sub-queries. Choose a highlight token cap suited to the question. These are starting budgets; expand them only to address a material evidence gap.

Inspect the highlights. Use them when they provide enough source context to support the relevant claim. Do not assume a selected passage preserves every qualification or adequately represents an entire page.

You may retrieve fuller source text through Octen when highlights are missing, ambiguous, insufficiently fresh, or omit context needed for a material claim. For a page already identified, prefer Octen Extract rather than repeating the search. Inspect supplied URLs directly with Extract. Read only the pages needed and reuse adequately inspected content.

Avoid repeating successful queries or page reads without a material reason. Report unresolved gaps rather than presenting limited evidence as comprehensive.

Briefly report the operations used, whether highlights were sufficient, and any fuller-text retrieval or unread sources. Do not claim actual billing savings unless billing was checked.

If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: [YOUR QUESTION]
```

**Full content when needed**

Octen’s pricing page, checked on 13 September 2026, includes full content for the first ten results per search without an additional content charge. Search charges and model context costs remain. Explicitly request full content when additional context is needed rather than relying on an integration’s defaults. The following prompt uses conservative starting limits while allowing evidence-driven follow-up work. [Pricing](https://docs.octen.ai/overview/pricing.md)

```text
Use the multi-provider-research skill.

Use only Octen as the external research provider and page reader. Do not use another external provider or a native page reader. Use retrieval and source-content modes; have the model selected in this application perform the analysis and final answer. Do not request provider-generated summaries, answers, research reports, or agent analysis.

Inspect the available Octen interface and its live parameters. Start with one focused Search for a bounded question. Use Broad Search only when several distinct angles justify it. Give it one self-contained question that preserves my intent and constraints, resolves references from the conversation, and fits the current input limit. Let Octen expand it into subqueries.

When additional source context is needed, explicitly enable full content using the current interface’s controls. Inspect the returned text: enablement does not guarantee that every page was retrieved or that its text is complete. Reuse sufficient excerpts or full text without another fetch.

Start with at most 10 results per search, including each Broad Search sub-query, and at most 5 Broad Search sub-queries. These are starting budgets, not proof of adequate coverage. Choose a per-result token cap suited to the sources; 2048 is a possible starting point, not a guarantee of completeness. Do not add results solely to obtain more text from a page already found.

Inspect returned source text. Reuse it when it supports the relevant claim with enough context. Use Octen Extract for supplied URLs or selected results whose text is missing, truncated, unusable, or insufficiently fresh. Prefer a small batch of necessary pages. Do not re-read an adequately inspected URL without a material reason. When the full page body is needed, leave Extract’s relevance-query option unset if the interface uses it to return highlights instead. Use an appropriate supported cache age when freshness matters.

Avoid repeating successful queries. If a material coverage gap remains, use a targeted follow-up or adjust the relevant budget, and explain why. Report unresolved gaps rather than presenting a budget-limited result as comprehensive.

Briefly report the operations used, important count/sub-query/token settings, whether returned page text was sufficient, and any extraction fallbacks or unread sources. Do not claim actual billing savings unless billing was checked.

If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: What are the strongest arguments for and against open-weight AI regulation?
```

### Exa Search and Exa Fetch

```text
Use the multi-provider-research skill.

Use only regular Exa Search and Exa Fetch as external research tools. Do not use Exa Agent, Exa Connect, or another external provider.

Find authoritative and recent sources. Inspect returned source content before citing it. Reuse sufficient excerpts or full text; retrieve more context when evidence is ambiguous, incomplete, conflicting, stale, or missing material qualifications.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: What regulatory requirements currently apply to foundation-model providers in the European Union?
```

### Exa Advanced Search

```text
Use the multi-provider-research skill.

Use Exa Advanced Search as the only external discovery provider because precise date and domain controls are required. Search publications from January 1, 2026 onward and prioritize official regulatory domains.

Use Exa Fetch for selected result URLs if page content is required. Do not use Exa Agent, Connect, or another external provider.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Find newly published official guidance concerning AI model evaluations.
```

### Exa specialized search verticals

Exa’s people, company, code, and news verticals are search indexes, not Connect providers.

```text
Use the multi-provider-research skill.

Use Exa Search as the only external discovery provider and select the specialized vertical matching the evidence required:

- professional profiles: `category:people` in regular Search, or the `people` category in Advanced Search when exposed;
- companies: `category:company` in regular Search, or the `company` category in Advanced Search when exposed;
- working code examples: a code-specific semantic query and the Advanced Search `github` category when exposed;
- current news: a news-specific query with the Advanced Search `news` category and date controls when exposed.

Inspect returned source content before citing it. Reuse sufficient excerpts or full text; retrieve more context when evidence is ambiguous, incomplete, conflicting, stale, or missing material qualifications. Keep profile, company, code, and news evidence separate from inference.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use Exa Fetch when selected result excerpts lack necessary context.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: [YOUR PEOPLE, COMPANY, CODE, OR NEWS QUESTION]
```

### Parallel Search and Fetch

```text
Use the multi-provider-research skill.

Use only Parallel Search and Fetch as external research tools. Give Search a concise objective plus short retrieval queries. Reuse the returned session identifier for any related Fetch calls, and request full content only for selected URLs whose excerpts are insufficient.

Do not launch Parallel Deep Research, Task Group, or another external provider.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: What official evidence explains the current reporting obligations for general-purpose AI model providers in the European Union?
```

### Parallel Deep Research

```text
Use the multi-provider-research skill.

Use only Parallel Deep Research because this task requires one substantial provider-generated report. Preserve its task URL or identifier and stop after creation unless I explicitly ask you to monitor it.

Do not launch a duplicate Search workflow while the task is active. When the result is later retrieved, distinguish provider-generated synthesis from underlying sources and report the exposed processor or model, if any.

Do not use another provider or a native page reader. Report missing source evidence as a gap when completed results can be inspected.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Produce a comprehensive report on frontier-model incident-reporting regimes in the United States, European Union, and United Kingdom.
```

### Parallel Task Group

```text
Use the multi-provider-research skill.

Use only Parallel Task Group because the same structured output contract must be applied independently to several inputs. Begin with three to five inputs, use one shared output schema, and preserve the task-group URL or identifier.

Do not poll or duplicate the batch unless I explicitly ask you to monitor it.

Do not use another provider or a native page reader. Report missing source evidence as a gap when completed results can be inspected.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Inputs: [COMPANY OR PRODUCT 1], [2], [3]
Required fields: official name, primary domain, current product category, latest dated launch evidence, and source URLs.
```

### Firecrawl Map, Scrape, Crawl, or Parse

```text
Use the multi-provider-research skill.

Use only Firecrawl as the external provider. Inspect its live schema and choose the smallest operation that fits:

- Map to identify relevant URLs on one site without reading their bodies;
- Scrape for one known webpage or schema-constrained fields;
- Crawl for a bounded collection of related pages, with explicit path, depth, and page limits;
- Parse for a supported document.

Do not use Agent, Interact, or Monitor. Preserve source URLs and report excluded, failed, or inaccessible pages.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research task: Map [DOCUMENTATION SITE], then extract only the pages describing authentication, rate limits, and pricing.
```

### Firecrawl with optional Alexandria data

Use this when the task needs comparable fields or structured records. Alexandria is optional: sufficient search or page evidence can complete the task. Catalog discovery is free, while data execution uses the selected capability's listed price. Ordinary web search and page extraction have their own charges. See [Alexandria coverage and costs](choosing-providers.md#firecrawl).

```text
Use the multi-provider-research skill and Firecrawl.

Research question: [QUESTION]
Entities or scope: [ENTITIES, LOCATION, AND PERIOD]
Required fields: [FIELDS AND SOURCE OR DATE REQUIREMENTS]
Total Firecrawl credit budget for this task: [MAXIMUM CREDITS, OR ASK ME BEFORE PAID CALLS]

Use sufficient search results or page content when they answer the question. Do not add paid enrichment merely because a provider capability is available.

If structured provider data would fill a remaining evidence gap or avoid repeated page collection, discover relevant Alexandria capabilities. Inspect the selected capability's inputs, response fields, coverage, and published price. Execute only a discovered fit within my budget; include additional result pages in the cost estimate. Ask before paid execution if the price or budget is unresolved. Do not accept provider terms without my explicit approval.

Use source records or faithful extraction and have the model selected in this application perform the analysis. Preserve sources and observation dates. Report the underlying provider, material gaps, and credits per call, distinguishing published prices from confirmed usage. If no capability fits, use sufficient permitted web evidence or explain the gap.
```

### TinyFish discovery, page extraction, or browser automation

TinyFish-only requests work best when you know whether the task needs discovery, rendered page content, or browser interaction. Exact tool names vary by harness.

```text
Use the multi-provider-research skill.

Use only TinyFish as the external provider. Inspect its live tools, then choose its discovery capability for web, news, or research-paper discovery; page extraction for browser-rendered content; or browser automation when navigation, form filling, or another stateful interaction is necessary.

Inspect the following JavaScript-heavy websites and extract their current product features, pricing, and stated limitations:

- [URL 1]
- [URL 2]

Report any pages, interactions, or fields that could not be accessed.
Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

```

### Perplexity Search

Use Search when you want ranked sources rather than an AI-generated answer.

```text
Use the multi-provider-research skill.

Use Perplexity Search as the only external discovery provider. Inspect its live schema, then apply a one-month recency filter and restrict results to official government or regulatory domains where supported.

Do not use Perplexity Ask, Reason, or Research. Inspect returned source excerpts and reuse them when they sufficiently support the claim. You may use the harness-native page reader to retrieve selected sources when necessary context, qualifications, or freshness evidence is missing.

Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: What official AI safety guidance has been published during the past month?
```

### Perplexity Ask

```text
Use the multi-provider-research skill.

Use Perplexity Ask as the only external research mode. You may use the harness-native page reader to verify cited sources; do not use another external provider. Use it for a focused factual answer or concise web-grounded explanation with citations. Make the input specific and apply authoritative-domain, recency, and context controls when the live schema exposes them.

Return no more than six bullets. If searches return only adjacent or outdated material, state the mismatch and do not guess.

Treat the generated answer as synthesis. Preserve its cited URLs and use the harness-native page reader to open the underlying sources supporting material claims before final citation.

If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: What are the principal obligations imposed by the EU AI Act on general-purpose AI model providers?
```

### Perplexity Reason

```text
Use the multi-provider-research skill.

Use Perplexity Reason as the only external research mode. You may use the harness-native page reader to verify cited sources; do not use another external provider. Use it because the task requires evaluating alternatives against explicit criteria using current web evidence. Inspect the live schema and apply only the domain, recency, or context controls it supports.

Separate sourced facts from comparative reasoning. Preserve cited URLs and open the underlying sources supporting material claims before final citation.

If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Compare the compliance trade-offs of releasing a frontier model through an API versus publishing its weights under the current EU regulatory framework.
```

### Perplexity Research

Use Research only when comprehensive synthesis justifies its additional latency.

```text
Use the multi-provider-research skill.

Use Perplexity Research as the only external research mode. You may use the harness-native page reader to verify cited sources; do not use another external provider. Use it for a deep multi-source investigation. Inspect and follow the live Research schema rather than assuming that filters available to other Perplexity tools are supported.

Treat the generated report as synthesis. Retain its cited URLs, open the underlying sources for material claims, and report citations that cannot be verified.

If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Produce a literature-style review of empirical methods used to evaluate frontier-model cyber capabilities since 2024.
```

### xurl

```text
Use the multi-provider-research skill.

Use only xurl for X-native evidence. Search read-only X data from [START DATE] through [END DATE]. Preserve query operators, post dates, authors, engagement fields, and result limits.

Do not use another X API integration, web search, browser fetching, or scraping. If xurl is unavailable or unauthenticated, report the access gap and stop.

Research question: What are AI researchers on X saying about mechanistic interpretability?
```

### Authenticated X API integration

```text
Use the multi-provider-research skill.

Use only the authenticated X API integration available in the current environment. Inspect its live capabilities and choose the structured operation that supports full-archive post search.

Do not use xurl, web search, browser fetching, or scraping. Report query operators, date range, archive coverage, pagination, and access limitations.

If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Find posts by major AI laboratory leaders discussing model regulation during 2025.
```

## Exa Connect patterns

On September 3, 2026, the live Exa `dataSources` schema inspected while preparing this guide exposed eight self-serve Connect providers: Fiber, Financial Datasets, Similarweb, Baselayer, Affiliate.com, Particle, Jinko, and Polymarket. Treat this dated list as a routing hint rather than a permanent specification.

Exa also documents [additional partners](https://exa.ai/docs/reference/agent-api/connect/additional-partners) requiring account enablement.

Inspect the available Connect data sources and their schema before first use; reuse that knowledge unless the surface changes or validation fails. The Agent interface may expose these through a `dataSources` field or another supported control. Do not assume access or commercial terms from documentation.

Use this common structure:

```text
Use the multi-provider-research skill.

Use Exa Agent with only the [CONNECT PROVIDER] data source. Confirm that it appears in the live `dataSources` schema before starting.

Request provider-backed fields for [FIELDS] in the `outputSchema`. Include sources, observation dates, and field-level provenance where available.

Retain the run identifier and follow the selected interface’s lifecycle, resuming the same run when it remains active. Inspect completed results for actual provider contribution, field provenance, errors, and partial coverage. Requested data sources alone do not prove contribution. Do not replace unavailable provider-backed fields with generic web inference.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: [YOUR QUESTION]
```

### Fiber

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Fiber Connect provider. Confirm that Fiber is present in the live dataSources schema.

Request provider-backed fields for company identity, domain, industry, employee count, funding stage, relevant professional role, employer, job-change signal, observation date, and field-level provenance.

Inspect the completed run to confirm that Fiber contributed. Do not replace unavailable Fiber fields with generic web inference.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Identify U.S. AI infrastructure companies with 50–500 employees and recent senior engineering hires.
```

### Similarweb

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Similarweb Connect provider. Confirm that Similarweb is present in the live dataSources schema.

Request provider-backed fields for domain, estimated visits, reporting period, rank, engagement measures, competitor domains, observation date, and field-level provenance.

Inspect the completed run to confirm that Similarweb contributed. Do not replace unavailable Similarweb fields with generic web estimates.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Compare the recent digital reach of ten AI developer-tool companies.
```

### Financial Datasets

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Financial Datasets Connect provider. Confirm that `financial_datasets` is present in the live dataSources schema.

Request provider-backed fields for ticker, reporting period, price timestamp, revenue, operating income, free cash flow, ownership or filing data as applicable, SEC form, filing date, and direct filing link. Preserve units and observation dates.

Inspect the completed run to confirm that Financial Datasets contributed. Do not replace unavailable provider fields with generic web figures.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Compare the latest reported revenue growth, operating margin, and free cash flow of five publicly traded U.S. data-center infrastructure companies.
```

### Baselayer

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Baselayer Connect provider. Confirm that Baselayer is present in the live dataSources schema.

Request provider-backed fields for legal business name, jurisdiction, registration status, entity structure, officers, verification status, risk indicators, source evidence, and observation date. Do not collect private contact details.

Inspect the completed run to confirm that Baselayer contributed. Do not replace unavailable verification fields with company-website claims.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Verify the legal registration and current business status of the following U.S. companies: [COMPANY LIST].
```

### Affiliate.com

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Affiliate.com Connect provider. Confirm that `affiliate` is present in the live dataSources schema.

Request provider-backed fields for product, brand, model, price, currency, merchant, availability, offer URL, and observation time. Keep variants separate.

Inspect the completed run to confirm that Affiliate.com contributed. Do not replace unavailable offers with generic shopping-search results.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Find current offers for laptops with at least 32 GB of RAM, a discrete GPU, and a price below [BUDGET] in [COUNTRY].
```

### Particle

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Particle Connect provider. Confirm that Particle is present in the live dataSources schema.

Request provider-backed fields for show, episode, publication date, host, guest, speaker role, timestamp, transcript evidence, and position expressed.

Inspect the completed run to confirm that Particle contributed. Do not replace unavailable transcript evidence with generic podcast search.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: What have prominent podcast hosts and guests said about AI regulation during 2025?
```

### Jinko

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Jinko Connect provider. Confirm that Jinko is present in the live dataSources schema.

Request provider-backed fields for origin, destination, departure and return dates, cabin, fare, currency, itinerary, and observation time. Treat fares as time-sensitive discovery rather than a booking guarantee.

Inspect the completed run to confirm that Jinko contributed. Do not replace unavailable fares with generic travel-search results.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Identify five destinations reachable from Hong Kong for [DATES] with return economy fares below [BUDGET].
```

### Polymarket

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Polymarket Connect provider. Confirm that Polymarket is present in the live dataSources schema.

Request provider-backed fields for market or event, outcome, implied probability, observation time, trading volume, liquidity, price history, market status, and direct market URL. Keep market data separate from commentary about the event.

Inspect the completed run to confirm that Polymarket contributed. Do not replace unavailable market fields with generic web commentary or inferred probabilities.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Compare current prediction-market probabilities for [EVENT] and explain how they changed during [DATE RANGE].
```

## Complementary-provider patterns

### Octen and Exa

```text
Use the multi-provider-research skill.

Use exactly Octen and Exa as external providers. Both must contribute a distinct role. Use their source-reading tools; do not add another external provider or a native page reader.

Use retrieval and source-content modes. Have the model selected in this application perform the analysis and final answer; do not use provider-generated summaries, answers, or agent research.

- Use Octen Broad Search for multi-angle discovery. Give it one self-contained question that preserves my intent and constraints, resolves conversational references, and fits the current input limit. Let Octen generate the subqueries.
- When source context is needed, explicitly request Octen full content using the current interface’s controls, then inspect the returned text.
- Use regular Exa Search for an independent semantic cross-check with a distinct verification purpose.
- Reuse sufficient excerpts or full text returned by either provider. Use Octen Extract or Exa Fetch for supplied URLs or missing, incomplete, unusable, or stale content. Prefer the corresponding provider’s reader for its unique results.

Avoid repeating successful queries or reading the same URL twice without a material verification reason. If a required provider is unavailable, report the gap, do not substitute another provider, and complete independent permitted work.

Briefly report each provider’s contribution and material evidence limitations.

Research question: Compare the major arguments surrounding mandatory AI incident reporting.
```

### Exa with optional TinyFish escalation

```text
Use the multi-provider-research skill.

Use Exa as the required external provider. You may use TinyFish only for the distinct roles described below. Do not use another external provider.

- Use Exa Search for discovery and Exa Fetch for accessible sources.
- Use TinyFish only for page extraction when Exa cannot adequately retrieve an important source, or browser automation when that source requires interaction that simpler readers cannot perform.

Report which pages or evidence required TinyFish and why.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Compare the current enterprise plans and security claims of [Company A] and [Company B].
```

### Octen and Perplexity Search

```text
Use the multi-provider-research skill.

Use exactly Octen and Perplexity Search as external providers. Both must contribute a distinct role. You may also use the harness-native page reader for citation verification; do not add another external provider.

Use retrieval and source-content modes. Have the model selected in this application perform the analysis and final answer. Do not use Perplexity Ask, Reason, or Research, or request generated summaries or answers through retrieval options.

- Use Octen Broad Search for multi-angle discovery. Give it one self-contained question that preserves my intent and constraints, resolves conversational references, and fits the current input limit. Let Octen generate the subqueries.
- When source context is needed, explicitly request Octen full content using the current interface’s controls, then inspect what returned.
- Use Perplexity Search for a distinct targeted query, applying supported domain, country, or recency controls when useful.
- Reuse sufficient excerpts or full text. Use Octen Extract for supplied URLs or Octen results with missing, incomplete, unusable, or stale content. Use the native page reader for Perplexity sources that need additional context.

Do not retrieve an adequately inspected page again without a material reason. If a required provider or reader is unavailable, disclose the gap, preserve the restrictions, and complete independent permitted work.

Briefly report provider contributions, source dates, and material access or freshness limitations.

Research question: What new government initiatives are shaping sovereign AI infrastructure in Asia?
```

### Exa and Perplexity Reason

```text
Use the multi-provider-research skill.

Use regular Exa Search and Fetch plus Perplexity Reason.

- Use Exa for authoritative and independent source discovery and page reading.
- Use Perplexity Reason once for a grounded comparison of the documented choices and trade-offs. Do not use it as duplicate general discovery.

Treat Perplexity's response as synthesis. Preserve cited URLs and open any cited sources supporting material claims that Exa has not already retrieved.

Use only Exa Search and Fetch plus Perplexity Reason; do not add another provider or a native page reader. Use Exa Fetch for cited sources that need more context.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Compare mandatory frontier-model licensing with post-deployment incident reporting.
```

### Perplexity Research with optional TinyFish verification

```text
Use the multi-provider-research skill.

Use Perplexity Research as the required research mode. You may use TinyFish only for the verification role described below. Do not use another external provider.

- Use Perplexity Research for one comprehensive investigation.
- Use TinyFish only to verify a cited primary source supporting a material claim when that source is dynamic, interactive, or inaccessible through ordinary page reading.

Do not send every citation to TinyFish. Report citations that remain inaccessible.

You may use the harness-native page reader to verify citations before escalating to TinyFish. Treat Perplexity output as provider-generated synthesis and inspect supporting source content for material claims.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Produce an evidence-backed review of public frontier-model transparency reporting practices.
```

### Firecrawl extraction with Parallel source verification

```text
Use the multi-provider-research skill.

Use exactly Firecrawl and Parallel Search.

- Use Firecrawl Map to identify the relevant documentation pages, then Scrape only the selected pages needed for direct evidence.
- Use Parallel Search for a distinct objective: find independent official or primary sources that verify the documented claims.
- Do not use Firecrawl Crawl unless the map shows that a bounded multi-page collection is necessary. Do not use Parallel Task tools.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Compare the documented enterprise security controls of [PRODUCT A] and [PRODUCT B].
```

### Parallel Task Group after focused discovery

```text
Use the multi-provider-research skill.

Use one discovery provider to identify a small qualified input set, then use Parallel Task Group once to apply the same structured enrichment contract to every input.

Preserve the selection evidence and task-group URL or identifier. Follow the selected tool’s lifecycle: if it directs you to share the URL and stop, report that the batch is pending and do not poll unless I requested monitoring. Do not run duplicate searches for each item while the batch is active. Report completed fields and gaps only after results have been retrieved and inspected.

Research question: Identify five qualifying [COMPANY TYPE] companies, then produce the same sourced product and market-position fields for each.
```

### Fiber and Baselayer through Exa Connect

```text
Use the multi-provider-research skill.

Use Exa Agent with exactly the Fiber and Baselayer Connect providers.

- Use Fiber for company identity, domain, headcount, funding stage, and relevant professional roles.
- Use Baselayer for legal name, jurisdiction, registration status, officers, verification status, and risk indicators.

Require field-level provenance and observation dates. Keep firmographics separate from verification results.

Inspect the completed run to confirm which provider contributed to each field. Do not fill missing provider fields with generic web inference.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Identify U.S. AI infrastructure vendors with 50–500 employees, then verify their legal registration and current business status.
```

### Fiber and Similarweb through Exa Connect

```text
Use the multi-provider-research skill.

Use Exa Agent with exactly the Fiber and Similarweb Connect providers.

- Use Fiber for company identity, headcount, funding stage, and relevant personnel.
- Use Similarweb for estimated traffic, engagement period, rankings, and competitor domains.

Require field-level provenance and observation dates. Do not replace missing provider fields with web estimates.

Inspect the completed run to confirm which provider contributed to each field.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: Identify ten AI developer-tool companies with 50–500 employees and meaningful recent website traffic.
```

### Web, finance, and traffic evidence

```text
Use the multi-provider-research skill.

Use three distinct evidence lanes:

1. Regular Exa Search and Fetch for official announcements and contextual web evidence.
2. Exa Agent with Financial Datasets for filed financials, price timestamps, earnings, ownership, and SEC filing links.
3. Exa Agent with Similarweb for estimated visits, reporting periods, rankings, engagement, and competitor domains.

Keep filed financial data, estimated traffic, company claims, and analyst inference separate. Require reporting periods, observation dates, provenance, and direct filing links where available.

Research question: Compare the financial performance and digital reach of five publicly traded AI infrastructure companies.
```

### Web and X-native evidence

```text
Use the multi-provider-research skill.

Use exactly Octen, Exa, and authenticated X evidence.

- Use Octen for broad web discovery.
- Use Exa for semantic cross-checking and authoritative page reading.
- Use xurl for X-native discussion, or one authenticated X API integration instead when a dedicated structured operation fits better.

Keep web evidence and X-native evidence in separate sections. Do not send the same X query through both interfaces.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use source-content or faithful extraction modes. Do not request provider-generated summaries, answers, reports, or agent analysis. Have the model selected in this application perform the analysis and final answer.
If a required provider or reader is unavailable, report the gap without substitution and complete independent permitted work.

Research question: How did researchers and developers react to the announcement of [MODEL OR PRODUCT]?
```

### Advanced multi-lane investigation

This pattern is for a comprehensive task that needs several distinct evidence families, not the normal default.

```text
Use the multi-provider-research skill.

You may use any supported provider family only when it has a distinct role: Octen, Exa, exactly one Perplexity mode, Parallel Search or Task, Firecrawl, TinyFish, and authenticated X data.

- Octen: broad, multi-angle discovery.
- Exa: semantic cross-checking, controlled search, page reading, or relevant Connect data.
- Perplexity: choose one mode according to the required output.
- Parallel: objective-shaped Search and Fetch, or one provider-side Task workflow—not both for duplicate work.
- Firecrawl: site mapping, selected-page scraping, bounded crawling, document parsing, or an explicitly justified Agent.
- TinyFish: distinct discovery, browser-rendered page extraction, or necessary browser automation.
- X: one authenticated X-native interface; use a dedicated structured interface only when its operation fits better.

Do not automatically duplicate queries or page reads. Use a provider only when it contributes a distinct evidence lane. Report all providers attempted, their contributions, failures, date ranges, and material gaps.

Research question: Produce a comprehensive evidence-backed analysis of reactions to the proposed U.S. AI liability framework.
```

## Flexible routing and provider audits

### Broad permission without mandatory use

```text
Use the multi-provider-research skill.

You may use Octen, Exa Search and Fetch, relevant Exa Connect providers, one task-appropriate Perplexity mode, Parallel, Firecrawl, TinyFish, and authenticated X interfaces. Use only those that make a material contribution.

Do not repeat successful searches or page reads merely for provider coverage. Report tools used, distinct contributions, and material limitations. Expand query, date-range, and provenance details when they affect interpretation or reproducibility.

Research question: [YOUR QUESTION]
```

### Field-driven provider selection

```text
Use the multi-provider-research skill.

Inspect the relevant available research tools and specialized datasets. Choose the minimum sufficient combination that supplies the required fields within my provider and synthesis restrictions. A supplied authoritative document may already satisfy a field; do not add a dataset or another provider when it would only duplicate sufficient evidence.

For each selected provider, identify the provider-backed fields it is expected to supply. If a matched provider is unavailable, preserve the field as an evidence gap instead of silently replacing it with generic web inference.

Research question: Build a sourced profile of [COMPANY], covering corporate identity, people, funding, website traffic, public-company financials if applicable, podcast commentary, product offers, relevant prediction-market data, and X-native discussion.
```

### Strict required-provider audit

Use this pattern when the goal includes testing whether specific providers are callable and return evidence.

```text
Use the multi-provider-research skill.

This is a provider-access audit as well as a research task.

Required providers:

- Octen
- Exa Search
- Exa Agent with Particle
- Perplexity Search
- Parallel Search
- Firecrawl Map and selected Scrapes
- TinyFish
- authenticated X data through xurl or one X API integration

Attempt each required provider only for its distinct assigned role. Do not silently replace an unavailable provider.

For every provider, report the callable interface discovered, authentication and availability status, query or operation attempted, successful contribution, errors or limitations, and whether the final answer contains provider-backed evidence.

Research question: What are prominent podcast hosts, guests, journalists, and X users saying about AI regulation?
```

## General-purpose fill-in template

```text
Use the multi-provider-research skill.

Provider scope:
- Required: [PROVIDERS THAT MUST BE ATTEMPTED]
- Allowed when materially helpful: [OPTIONAL PROVIDERS]
- Excluded: [PROVIDERS OR INTERFACES NOT TO USE]

Routing:
- Assign each selected provider a distinct evidence role.
- Do not duplicate successful searches or page reads unless verification requires it.
- Use one Perplexity mode per subproblem by default.
- Use Parallel Search or one Task workflow for a subproblem; do not duplicate an active Task.
- Choose the smallest Firecrawl operation and keep crawl scope bounded.
- Use one authenticated X-native interface for each X query, not multiple routes without a material reason.
- Inspect the tools, connectors, integrations, and relevant schemas currently available before assuming access.

Fallback policy:
- [REPORT THE GAP AND STOP THAT EVIDENCE LANE / ASK BEFORE SUBSTITUTING / DISCLOSE AND USE A PERMITTED SUBSTITUTE]
- Complete independent permitted work. Follow each selected tool’s asynchronous lifecycle, retain active identifiers, and label pending jobs separately from completed research.
- If substitution is permitted, label the fallback's evidence class accurately. Do not present generic web corroboration as connected-provider-backed or X-native evidence.

Evidence requirements:
- Cite inspected source content or confirmed provider-backed evidence. Reuse sufficient excerpts or full text; retrieve more context when evidence is ambiguous, incomplete, conflicting, stale, or missing material qualifications.
- Treat generated prose as synthesis and inspect the underlying source content for material claims; reuse sufficient content already retrieved.
- Preserve relevant dates, speakers, timestamps, entities, query operators, and field-level provenance. For changing facts, inspect cache controls and distinguish retrieval time from observation or reporting dates; disclose material freshness uncertainty.
- Separate retrieved facts from inference.
- Continue until the requested deliverable has sufficient inspected evidence or remaining gaps are blocked by access, explicit restrictions, budget, or the selected tool’s lifecycle. Ask only when an unresolved boundary materially affects scope, cost, or data handling.

Reporting:
- Report exact tools, contributions, and material limitations. Expand requested, attempted, and confirmed providers; query and date controls; identifiers; and provenance when coverage, reproducibility, or an audit request warrants it.

Research question: [YOUR QUESTION]
```

## Portability note

These prompts are portable at the language level, but provider access is not. Each harness may expose integrations through built-in tools, MCP servers, command-line utilities, plugins, extensions, or none at all.

The prompt requires the agent to discover and disclose the tools available in the current session rather than pretend that a named provider is accessible.
