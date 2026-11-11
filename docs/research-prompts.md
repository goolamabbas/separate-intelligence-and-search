# Harness-neutral research prompt examples

The library includes a standalone starter without the skill. The remaining examples invoke the reusable routing skill through a natural-language instruction: `Use the multi-provider-research skill.` They do not depend on an application-specific `$` command, slash command, mention syntax, or rules-file format.

Paste an example into the instruction or chat interface of an AI application, then replace its placeholders. The application may use a different internal mechanism to locate an installed skill, but the natural-language instruction preserves the portable intent.

The application must still have access to the providers named in a prompt. A provider mentioned in an instruction is not necessarily installed, connected, authenticated, or callable.

Provider and operation names describe the intended capabilities, not a required integration method. Use the supported provider skill, MCP server, plugin, connector, command-line client, or direct API available in the application. Adapt parameters to that interface while preserving each prompt’s provider, evidence, and synthesis restrictions.

**Review scope:** Sections and recorded tests retain their own check dates. The [setup overview](connecting-providers.md#choose-an-access-route) and [access/allowance summary](costs.md#provider-allowances-and-access) were refreshed on 11 November 2026; that does not reverify every capability or prompt on this page.

- [Choosing External Research Tools for AI Agents](README.md)
- [Choosing an external research provider](choosing-providers.md)
- [Connecting and testing providers](connecting-providers.md)

## On this page

- [Start here: choose a pattern](#start-here-choose-a-pattern)
- [Four starters](#four-starters)
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

For a creative starting point without the optional skill, [explore ideas for a creative project through firsthand interviews](https://goolamabbas.github.io/separate-intelligence-and-search/#creative-project). The introduction has a copyable prompt for comparing practitioners’ perspectives and tracing them back to original sources.

Start with **Minimum sufficient provider set** for everyday research. Use **Common one-provider patterns** for a restricted provider, **Exa Connect patterns** for specialized datasets, or **Complementary-provider patterns** for distinct roles.

**Flexible routing and provider audits** contains advanced patterns. The **General-purpose fill-in template** lets you specify required, optional, and excluded providers.

Use the section links below to jump to a pattern.

**Testing status:** Library blocks are reusable templates, not verified end-to-end runs unless a linked run record says otherwise. The [Exa Ultra case study](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/) records a separate advanced run; it does not validate every Ultra prompt here.

## Four starters

Choose one task. The first prompt below works without the optional skill; the other three links open complete templates that use it. All require a suitable provider connection. [Choose a setup route](connecting-providers.md#choose-an-access-route). For templates that use it, [install the optional skill](https://github.com/goolamabbas/multi-provider-research#install).

| Start with… | What you will get | Setup |
| --- | --- | --- |
| [One everyday question](#one-question-without-the-skill) | A sourced answer from a suitable connected external provider | [Choose a provider](connecting-providers.md#choose-an-access-route) |
| [Find original sources with Exa](#exa-search-and-exa-fetch) — Uses the optional skill | Relevant sources, with page retrieval only where needed | [Connect Exa](https://exa.ai/docs/reference/exa-mcp) |
| [Read a supplied page with Octen](#octen-read-one-page) — Uses the optional skill | Evidence for your question from a page you choose | [Connect Octen](connecting-providers.md#choose-an-access-route) |
| [Look up specialized records with Parallel](#parallel-specialized-dataset-lookup) — Uses the optional skill | Relevant dataset discovery and records, with access and field gaps explained | [Connect Parallel](connecting-providers.md#parallel-connection-readiness) |


### One question without the skill

```text
Choose a suitable connected external search provider to answer [MY QUESTION], and identify which one you use. Retrieve original sources and have this assistant analyse them. Cite the evidence, include relevant dates, distinguish facts from inference, and flag gaps. If no suitable external provider is callable, explain what connection is missing before proceeding.
```

### Octen: read one page

```text
Use the multi-provider-research skill.

Use only Octen Extract to read [URL] and answer [MY QUESTION]. Retrieve source content and keep analysis in this assistant. Cite supporting passages and distinguish the page's claims from your interpretation. If the page or relevant content is inaccessible, report the gap without switching providers.
```

## Minimum sufficient provider set

With the current routing skill installed, start with this everyday prompt:

```text
Use the multi-provider-research skill.

Research question: [YOUR QUESTION]
```

The skill handles tool discovery, source checks, avoiding duplicate work, and reporting gaps. Add only the choices specific to your task: providers, who writes the analysis, fallback permission, scope, and budget. The [control clauses](#useful-control-clauses) below cover those choices.

**Defaults at a glance**

- Use the smallest useful set of available providers; ordinary lookups use source retrieval and analysis by the current assistant.
- Native search and page reading may help when your restrictions allow them. They cannot replace a required provider or bypass an exclusive tool set.
- If a required provider or reader is unavailable, report the gap and complete other permitted work. Do not substitute unless a fallback is already permitted. For unrestricted tasks, another suitable tool may be used with disclosure.
- Reuse sufficient source text. Reading the same page again is unnecessary unless important context is missing or needs checking.

The examples below rely on these skill defaults rather than repeating them. Each copied block retains its task-specific restrictions. Use the current [skill package](https://github.com/goolamabbas/multi-provider-research#install); the prose around a prompt is not a substitute for loading the skill.

## When not to invoke the skill

Installing the skill does not authorize it for every task. A mention of a provider in a copyediting task or a general browser task does not by itself call for research routing. Use this prompt when only the current application’s built-in search and page-reading tools are permitted:

```text
Use only the web search and page-fetching tools provided natively by this harness.

Do not invoke, load, or apply the multi-provider-research skill. Do not call any separately connected MCP server, plugin, connector, provider skill, command-line tool, or external search or fetch provider.

If a native tool is unavailable or cannot access a required source, report the gap and stop that evidence lane. Do not substitute another interface.

In the final response, list the exact search and fetch tools used.
```

“Native” describes the tool surface presented by the application. It does not prove that the application vendor uses no external infrastructure.

For a hard technical guarantee, disable external tools and automatic skill loading or use a clean profile, then review the tool-call record.

## Before copying a prompt

### Provider access

**Multi-provider means multi-capable, not all-required.** The skill works with any available subset, including one provider. The agent should use only providers that are callable, permitted, and relevant.

Apply the user’s explicit inclusions and exclusions first, then any named-provider request, then specialized-data routing within that permitted scope. Do not silently replace a provider the user named merely because another provider could answer a similar question.

If a prompt explicitly requires an unavailable provider, the agent should follow the stated fallback policy rather than silently substitute another provider.

### Make the page-reading boundary explicit

Native page reading is allowed by default when it fits your restrictions. “Use only Exa Search and Fetch” excludes it. A restriction on external discovery can still permit native page reading; say so explicitly in a copied prompt to make that distinction clear. For example:

```text
Use Perplexity Search as the only external discovery provider. You may use the harness-native page reader to open selected result URLs, but do not call another external search or fetch provider.
```

### Model boundary

The model selected in your application normally orchestrates the task and writes the final response. Provider-side answer, reasoning, research, or agent tools may run their own model or preset.

Use this clause when external retrieval is allowed but the model selected in your application must perform all visible reasoning and writing:

```text
Use external providers only for search, retrieval, extraction, and page reading.

Do not invoke provider-side answer, reasoning, research, or agent tools. In particular, do not use Perplexity Ask, Reason, or Research; Exa Agent; Parallel web_research, Decisions, Deep Research or Task Group. Inspect output options too: do not request generated summaries or freeform answers through a retrieval tool.

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
You may use exactly one task-appropriate Perplexity mode if it contributes a distinct discovery or synthesis role.
```

```text
You may use Parallel Search and Fetch for one evidence lane. Consider relevant Parallel specialized retrieval when useful. Use web_research or Task workflows only if provider-side synthesis is permitted and materially useful.
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

Apply the selected fallback policy to the blocked evidence role. Complete independent permitted work rather than stopping the entire task. Continue until the requested deliverable has sufficient inspected evidence or remaining gaps are blocked by access, explicit restrictions, budget, or the selected tool’s lifecycle. Ask for clarification only when an unresolved boundary materially affects scope, cost, or data handling.

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

For ordinary work, report tools, contributions, and important limitations briefly. Use the fuller ledger below when provenance, coverage, reproducibility, or an explicit audit request warrants it; a simple X lookup or two-provider task does not automatically need one.

```text
Finish with a concise provider ledger covering requested providers, providers actually used, exact interfaces, query transformations, operators, date ranges, contributions, failures, substitutions, and evidence gaps.
```

## Common one-provider patterns


### Octen Search, Broad Search, and Extract

Choose **Highlights first** for focused research or **Full content when needed** for closer reading. Both patterns inspect returned evidence and allow fuller retrieval when necessary. They work through the supported Octen interface available in your application.

**Highlights first**

```text
Use the multi-provider-research skill.

Use only Octen for search and page reading; exclude native tools. Keep analysis and writing in this assistant, using retrieval and source-content modes only.

Start with query-relevant highlights: enable highlights and disable full content using the available controls. Start with at most 5 results per search (including each Broad Search sub-query) and at most 3 Broad Search sub-queries. Choose a suitable highlight token cap. Expand these starting budgets only to address a material evidence gap.

Use Octen Extract when highlights lack sufficient context or freshness. Briefly report whether highlights were sufficient, any fuller-text retrieval, and unread sources. Do not claim billing savings without billing evidence.

Research question: [YOUR QUESTION]
```

**Full content when needed**

Octen’s pricing page, checked on 13 September 2026, includes full content for the first ten results per search without an additional content charge. Search charges and model context costs remain. Explicitly request full content when additional context is needed rather than relying on an integration’s defaults. The following prompt uses conservative starting limits while allowing evidence-driven follow-up work. [Pricing](https://docs.octen.ai/overview/pricing.md)

```text
Use the multi-provider-research skill.

Use only Octen for search and page reading; exclude native tools. Keep analysis and writing in this assistant, using retrieval and source-content modes only.

Enable full content when additional source context is needed. Start with at most 10 results per search (including each Broad Search sub-query) and at most 5 Broad Search sub-queries. Choose a suitable per-result token cap; 2048 is a possible starting point. These limits do not guarantee complete text or coverage. Expand them only to address a material evidence gap and explain why.

Briefly report the operations and important count/sub-query/token settings, whether the text was sufficient, and extraction fallbacks or unread sources. Do not claim billing savings without billing evidence.

Research question: What are the strongest arguments for and against open-weight AI regulation?
```

### Exa Search and Exa Fetch

Try the Notion/Obsidian example below, or replace the research question with your own.

```text
Use the multi-provider-research skill.

Use only regular Exa Search and Exa Fetch as external research tools. Do not use Exa Agent, Exa Connect, or another external provider.

Find authoritative sources with dates appropriate to the question. Inspect returned source content before citing it. Reuse sufficient excerpts or full text; retrieve more context when evidence is ambiguous, incomplete, conflicting, stale, or missing material qualifications.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Retrieve source content or faithful extracts only; no provider-generated summaries, answers, reports, or agent analysis. Keep all analysis and final writing in this assistant.

Research question: Compare the documented export formats and offline access of Notion and Obsidian for a personal research notebook.
```

### Exa Advanced Search

```text
Use the multi-provider-research skill.

Use Exa Advanced Search as the only external discovery provider because precise date and domain controls are required. Search publications from January 1, 2026 onward and prioritize official regulatory domains.

Use Exa Fetch for selected result URLs if page content is required. Do not use Exa Agent, Connect, or another external provider.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Retrieve source content or faithful extracts only; no provider-generated summaries, answers, reports, or agent analysis. Keep all analysis and final writing in this assistant.

Research question: Find newly published official guidance concerning AI model evaluations.
```

### Exa specialized search verticals

Exa Library collections, API categories and Connect partners are distinct. Existing structured records can be retrieved through Search; use a supported category or documented domain filter only when it fits. See [Library guidance](choosing-providers.md#specialized-search-indexes).

```text
Use the multi-provider-research skill.

Use Exa Search as the only external discovery provider and select the specialized vertical matching the evidence required:

- professional profiles: `category:people` in regular Search, or the `people` category in Advanced Search when exposed;
- companies: `category:company` in regular Search, or the `company` category in Advanced Search when exposed;
- working code examples: a code-specific semantic query, optionally restricted to relevant repository or documentation domains; do not rely on the deprecated `github` category;
- current news: a news-specific query with the Advanced Search `news` category and date controls when exposed;
- filings or papers: describe the disclosure, method or finding, and use `financial report` or `publication` when exposed. Do not invent a category for another Library collection.

Inspect returned source content before citing it. Reuse sufficient excerpts or full text; retrieve more context when evidence is ambiguous, incomplete, conflicting, stale, or missing material qualifications. Keep profile, company, code, and news evidence separate from inference.

Use only the providers and operations named above for discovery and page reading; do not use a native page reader or add another provider.
Use Exa Fetch when selected result excerpts lack necessary context.
Retrieve source content or faithful extracts only; no provider-generated summaries, answers, reports, or agent analysis. Keep all analysis and final writing in this assistant.

Research question: [YOUR SOURCE OR RECORD QUESTION]
```

### Exa podcast passages for a creative project

Suggested use, not a recorded end-to-end project. Search can find Library transcripts without Agent or Particle. Use the [coverage and attribution guidance](choosing-providers.md#podcast-transcripts-through-search); a collection match is not proof that a result is an interview. This self-contained prompt does not require the optional skill.

```text
Use only Exa Search (including Advanced Search where available) and Exa Fetch. Keep analysis in this assistant; do not use Agent, Connect, other providers or native search/readers.

Find firsthand interviews with practitioners about [creative challenge] to help develop [my project]. Describe the interview format, practitioner and theme in the query. For an initial podcast-focused search, use includeDomains: ["exa.ai/library/podcast"] if the interface supports it; do not invent a podcast category. If the control is unavailable, say so and use a descriptive query within the permitted tools.

Find three distinct perspectives. Check that each result is an interview, retrieve enough surrounding transcript to support the interpretation, and include speaker, show, episode date, URL and timestamps where returned. Distinguish what was said from your suggestions. Report missing coverage rather than assuming the collection is a complete archive.
```

### Exa filings and earnings-call passages

Suggested use for examining original disclosures and management commentary. Existing Search records may suffice; this does not request partner-backed screening or investment advice. [Financial collection guidance](choosing-providers.md#describe-the-evidence-you-want).

```text
Use only Exa Search (including Advanced Search where available) and Exa Fetch. Keep analysis in this assistant; do not use Agent, Connect, other providers or native search/readers.

Find [company/ticker]'s [fiscal period] filing and earnings-call transcript about [issue]. Describe the specific disclosure or commentary sought. Where supported, use financial report for filings/reports or a sec.gov domain restriction for original SEC documents. Name the company and fiscal period when searching for the call. Do not assume the collection landing URL is the appropriate filter, or that a domain filter proves document type.

Return supporting passages with speaker or filing section, reporting period, publication/filing date and source links. Distinguish management statements, filed figures and your interpretation. Verify company identity and periods before comparison; report missing or incomparable evidence. Reuse sufficient returned content and fetch additional context only when needed.
```

### Exa Agent Ultra for comprehensive discovery

Use this when broad coverage and difficult qualification criteria justify provider-generated research. This is an illustrative, unexecuted prompt. The $10 and 30-minute settings are example limits: adjust them before use. The duration control is a soft ceiling. See [when Ultra is worth it](choosing-providers.md#when-agent-ultra-is-worth-it).

```text
Use the multi-provider-research skill.

Use Exa Agent Ultra for comprehensive discovery within this scope:
- Entity type and topic: [WHAT TO FIND]
- Geography and date window: [SCOPE]
- Required qualification criteria: [CRITERIA]

Provider-side Agent research is permitted. Use Exa's web research only; do not enable Connect datasets, another provider, or a native page reader.

Before starting, inspect the callable schema for Ultra and budget controls. Set effort to ultra, maxCostDollars to 10, and maxDurationSeconds to 1800 through the supported budget fields. If this interface cannot express those limits, explain the gap and do not start the run. Do not substitute a spending instruction in the query for a budget control.

Return structured records with entity name, canonical URL, evidence URL and supporting detail for each criterion, relevant source dates, and unresolved fields. Allow unknown values and separate verified matches from uncertain candidates. Match output limits to the requested scope; do not silently cap the list at an arbitrary small sample.

Retain and resume the same run ID until a terminal state. Report actual returned cost, effort, stop reason, verified-match count, and coverage gaps. A completed run or satisfied schema is not proof of exhaustive coverage. Do not start additional runs beyond this one-run budget.
```

### Exa Agent Ultra to expand an existing list

Use this for a new, budgeted follow-up to a completed run, not for resuming an active one. `input.exclusion` avoids previously found entities; `input.data` supplies rows for processing or enrichment. This example has not been executed.

```text
Use the multi-provider-research skill.

Expand this completed Exa Agent list with additional qualifying entities:
- Completed run ID: [RUN ID]
- Existing entities, including canonical identifiers: [ROWS]
- Original scope and qualification criteria: [SCOPE AND CRITERIA]

Provider-side Agent research is permitted. Use only Exa Agent's web research, without Connect datasets, another provider, or a native page reader.

This authorizes one new Ultra run with maxCostDollars 10 and the soft maxDurationSeconds limit 1800. Inspect the live interface and set both supported budget controls before starting. If either control is unavailable, explain the gap and do not start or silently switch interfaces.

Use previousRunId for the completed run's context and input.exclusion for the existing entities. Do not use previousRunId to poll an active run. If the earlier run is still active, report that state instead of starting this follow-up. Use input.data only if rows also need processing or enrichment.

Preserve the original criteria, require evidence for each new match, allow unknown fields, and deduplicate against the supplied list and within the new results. Report new verified matches separately from uncertain candidates. Do not fill gaps with invented records or silently return only an arbitrary small sample.

Resume the new run by its own run ID. Report its actual returned cost, effort, stop reason, remaining gaps, and the combined unique count supported by the supplied list and new results. Do not claim exhaustive coverage or start another run automatically.
```

### Parallel: use relevant accessible data

Template: let the evidence need determine the route. This permits provider research but does not authorize configuration changes or new paid dataset purchases.

```text
Use the multi-provider-research skill.

Research question: [QUESTION]
Scope, geography and as-of date: [DETAILS]
Provider spending limit: [LIMIT]

Use only Parallel for external research, with no native search or readers. Inspect its current tools and consider relevant indexed sources, specialized datasets and eligible research sources; I should not need to name each dataset. Reuse sufficient evidence and choose the smallest useful combination.

Use find_verticals when structured records would materially help. Inspect the selected operation's schema, coverage and price before executing it. Provider-generated web_research is permitted when useful within the budget; do not use Decisions or start asynchronous Tasks for this request.

For eligible research, describe the needed records and fields so relevant included Index Partner evidence can contribute. Use already-enabled connectors only within my budget and access; do not assume inclusion proves use. Do not change configuration, buy access or add licensed/private sources. If a necessary control or entitlement is missing, explain the specific gap and next step. Do not treat a prompt as an enforced spending limit.

Return a concise answer with sources, dates and missing evidence. Distinguish retrieved records from provider synthesis, and sources available, enabled, invoked and actually contributing. Report exact tools, exposed usage and any unverified cost.
```

### Parallel Search and Fetch

Template: retrieval only, with all analysis in the current assistant.

```text
Use the multi-provider-research skill.

Use only Parallel web_search and web_fetch. Research question: What are the official installation requirements for the latest stable Python release on Windows and macOS?

Give Search one focused objective and short related keyword queries. Reuse sufficient excerpts; fetch supplied URLs, exact wording or missing context as needed. Request full content only when necessary. Use only arguments in the current schema; reuse session IDs only if accepted.

Do not use web_research, Decisions, verticals, Deep Research, Task Group, another provider or native search/readers. Retrieve source content or faithful extracts only; keep analysis and final writing in this assistant. Report source dates, exact tools and material evidence or freshness gaps.
```

### Parallel financial-source research

Template: public financial evidence with comparable periods and units.

```text
Use the multi-provider-research skill.

Compare [METRIC] for [COMPANIES] over [REPORTING PERIODS], as known on [DATE]. Use only Parallel retrieval operations; no native tools or other providers. Keep synthesis and calculations in this assistant; do not use web_research, Decisions or Task workflows.

Find primary filings, exchange/regulator records and issuer reports. If specialized records would materially improve field comparability, discover a matching vertical, inspect its schema and price, and use it only within [PROVIDER BUDGET]. Do not assume a finance-specific operation exists; use one only if live discovery returns a suitable match. Do not use an analysis operation under this retrieval-only instruction. If the budget or required control is unresolved, explain the gap before paid execution.

Return entity identifiers, reported values, reporting period, currency, units, filing date, source table/page and URL. Check amendments or restatements and explain differences in definitions. Label calculations and forecasts separately. Do not substitute a current value for a historical one or claim access to a licensed feed from web evidence alone. Report missing fields and actual dataset contributions.
```

### Parallel legal-source research

Template: primary legal evidence; also usable for a small jurisdiction comparison. This is an original prompt template, not a verified vendor cookbook.

```text
Use the multi-provider-research skill.

Question or rule to compare: [QUESTION]
Jurisdiction(s), court/agency and fact pattern: [SCOPE]
Law or policy as of: [DATE]

Use only Parallel web_search and web_fetch; no other providers or native tools. Keep synthesis here. Do not use web_research, Decisions or Tasks.

Prefer original courts, legislation and regulators. For each jurisdiction, report rule, scope, exceptions, issuer, identifier, decision/enactment/effective date, supporting passage, section/page and URL. Check source dates rather than relying on search metadata. Distinguish holdings from summaries, dissents and submissions, and rules from proposals or guidance. Preserve translation uncertainty and conflicts. Do not exclude older applicable authority solely because it is old.

Official-source preference is not a technical allowlist. If I require only specified domains to be queried, verify supported enforcement before that retrieval; otherwise explain the gap. Do not claim exhaustive coverage, current validity or a citator check without evidence. Report exact tools and unresolved source/status checks.
```

### Parallel specialized dataset lookup

Template based on a bounded lookup executed on 11 November 2026. The live response was truncated; this complete prompt has not been independently tested end to end.

Try the example trial below, or replace `NCT04280705` with your own NCT number.

```text
Use the multi-provider-research skill.

Find the official title, status and last-update date for trial NCT04280705. Use only Parallel specialized-source discovery and retrieval; keep analysis here. No web_research, Decisions, Tasks, other providers or native tools.

Use find_verticals to identify the appropriate ClinicalTrials.gov lookup. Inspect its returned ID, input schema and price; execute one matching record lookup only if the quoted call price is zero. If a needed schema is absent, refine discovery rather than guessing arguments.

Return the fields with the registry identifier and official citation. If the response is truncated or a field is missing, label it unverified and use a narrower supported retrieval only if available within these restrictions. Do not fill missing dates from memory. Report the selected operation and returned cost separately from the discovery quote.
```

### Parallel same-call research

Template: explicitly allows Parallel to research and synthesize. Connector selection must be supported by the current interface or existing configuration.

```text
Use the multi-provider-research skill.

Use only Parallel web_research to investigate [QUESTION] for [SCOPE AND DATE]. Provider-side research and synthesis are permitted within [PROVIDER BUDGET]. No Decisions, asynchronous Tasks, other providers or native tools.

Inspect the schema and select supported effort. Request primary evidence, exact records and reporting periods, useful included partner evidence, citations and unresolved gaps. Use existing permitted connector configuration; do not invent data_sources arguments or change configuration. If required connector selection or budget control is unavailable, explain the gap before proceeding with dependent work.

Inspect the returned status, answer and citations in the same call; no polling or duplicate run. Separate generated conclusions from underlying source evidence. Report the response ID, exposed effort/usage, actual connector contributions and any unverified Index Partner attribution. Do not call a cited answer independently verified when supporting content is unavailable.
```

### Parallel Deep Research

Advanced template: requires an accessible Task workflow, not just the unified MCP's web_research.

```text
Use the multi-provider-research skill.

Use only Parallel Deep Research to produce a substantial provider-generated report on [QUESTION], scoped to [DATES AND GEOGRAPHY], within [PROVIDER BUDGET]. Inspect the selected Task interface and resolve missing cost controls before creation. No other providers or native tools.

Retain the task URL or identifier and stop after creation; I will request monitoring separately. Label the report pending. Do not launch a duplicate Search workflow. When I request the result, retrieve the same task and distinguish provider synthesis from source evidence, reporting exposed processor, cost and gaps.
```

### Parallel Task Group

Advanced template: repeated enrichment with a shared output contract.

```text
Use the multi-provider-research skill.

Use only Parallel Task Group for these inputs: [THREE TO FIVE COMPANIES OR PRODUCTS]. Required fields: official name, primary domain, current product category, latest dated launch evidence and source URLs. Provider budget: [LIMIT]. Provider-side enrichment is permitted; no other providers or native tools.

Inspect the current Task schema, access and cost controls. Use one shared output schema. Do not expand the input set or change configuration. Preserve the task-group URL or identifier and return pending status after creation. Do not poll unless I request monitoring, and do not duplicate the batch.

When results are requested, retrieve the same group, inspect field-level evidence and missing rows, and report exposed processor and usage separately from any connector charges. Distinguish enabled connectors from actual source contributions.
```


### Perplexity Search

<a id="perplexity-fast-search"></a>
<a id="perplexity-standard-search-follow-up"></a>

Start here to find sources with Perplexity and have your own assistant turn the evidence into an answer. Copy the prompt and add your question; the assistant chooses the search type for you, using Fast Search for routine lookups and standard search for harder questions or important evidence gaps.

For the details, see [Fast or standard Search?](choosing-providers.md#fast-or-standard-search). Ask, Reason, and Research below are optional alternatives when you want Perplexity itself to generate an answer or analysis.

```text
Use the multi-provider-research skill.

Use Perplexity Search as the only external discovery provider. Prefer Fast Search for routine questions; use standard search for difficult or ambiguous questions or targeted follow-ups on material gaps. Inspect the live schema and apply only supported controls. If Fast Search is unavailable, disclose this and use standard Perplexity Search if supported.

Reuse sufficient excerpts. The application's native page reader may inspect selected sources; read a promising source before searching again when that can resolve the gap. Do not automatically run both search types or repeat answered work.

Keep all analysis in this assistant. Do not use Perplexity Ask, Reason, Research or another external provider. Cite supporting sources, say when standard search was used, and distinguish failed requests from unresolved evidence gaps. If permitted retrieval cannot supply the evidence, report the gap without changing provider or answer mode.

Research question: [YOUR QUESTION]
```

### Perplexity Ask

```text
Use the multi-provider-research skill.

Use Perplexity Ask as the only external research mode. You may use the harness-native page reader to verify cited sources; do not use another external provider. Use it for a focused factual answer or concise web-grounded explanation with citations. Make the input specific and apply authoritative-domain, recency, and context controls when the live schema exposes them.

Return no more than six bullets. If searches return only adjacent or outdated material, state the mismatch and do not guess.

Treat the generated answer as synthesis. Preserve its cited URLs and use the harness-native page reader to open the underlying sources supporting material claims before final citation.

Research question: How does Zotero help a student collect sources and create a bibliography? Use its official documentation.
```

### Perplexity Reason

```text
Use the multi-provider-research skill.

Use Perplexity Reason as the only external research mode. You may use the harness-native page reader to verify cited sources; do not use another external provider. Use it because the task requires evaluating alternatives against explicit criteria using current web evidence. Inspect the live schema and apply only the domain, recency, or context controls it supports.

Separate sourced facts from comparative reasoning. Preserve cited URLs and open the underlying sources supporting material claims before final citation.

Research question: Compare the compliance trade-offs of releasing a frontier model through an API versus publishing its weights under the current EU regulatory framework.
```

### Perplexity Research

Use Research only when comprehensive synthesis justifies its additional latency.

```text
Use the multi-provider-research skill.

Use Perplexity Research as the only external research mode. You may use the harness-native page reader to verify cited sources; do not use another external provider. Use it for a deep multi-source investigation. Inspect and follow the live Research schema rather than assuming that filters available to other Perplexity tools are supported.

Treat the generated report as synthesis. Retain its cited URLs, open the underlying sources for material claims, and report citations that cannot be verified.

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

Research question: Find posts by major AI laboratory leaders discussing model regulation during 2025.
```

## Exa Connect patterns

On 3 September 2026, the live Exa `dataSources` schema inspected while preparing this guide exposed eight self-serve Connect providers: Fiber, Financial Datasets, Similarweb, Baselayer, Affiliate.com, Particle, Jinko, and Polymarket. Treat this dated list as a routing hint rather than a permanent specification.

Exa also documents [additional partners](https://exa.ai/docs/reference/agent-api/connect/additional-partners) requiring account enablement.

Inspect the available Connect data sources and their schema before first use; reuse that knowledge unless the surface changes or validation fails. The Agent interface may expose these through a `dataSources` field or another supported control. Do not assume access or commercial terms from documentation.

Use this common structure:

```text
Use the multi-provider-research skill.

Use Exa Agent with only the [CONNECT PROVIDER] data source. Confirm that it appears in the live `dataSources` schema before starting.

Request provider-backed fields for [FIELDS] in the `outputSchema`. Include sources, observation dates, and field-level provenance where available.

Retain the run identifier and follow the selected interface’s lifecycle, resuming the same run when it remains active. Inspect completed results for actual provider contribution, field provenance, errors, and partial coverage. Requested data sources alone do not prove contribution. Do not replace unavailable provider-backed fields with generic web inference.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.

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

Research question: Find current offers for laptops with at least 32 GB of RAM, a discrete GPU, and a price below [BUDGET] in [COUNTRY].
```

### Particle

Use this pattern when Particle’s additional analytics or structured fields are required, or when you specifically want Particle-backed evidence. For ordinary episode discovery, transcript summaries, or quotations, use [Exa Search and Fetch](#exa-search-and-exa-fetch); see [podcast retrieval guidance](choosing-providers.md#podcast-transcripts-through-search).

```text
Use the multi-provider-research skill.

Use Exa Agent with only the Particle Connect provider. Confirm that Particle is present in the live dataSources schema.

Request provider-backed fields for show, episode, publication date, host, guest, speaker role, timestamp, transcript evidence, and position expressed.

Inspect the completed run to confirm that Particle contributed. Do not replace unavailable transcript evidence with generic podcast search.

Use only the named Connect data sources through Exa Agent. Do not add generic web search, another provider, or a native page reader. Provider-side Agent processing is permitted; distinguish returned provider-backed fields from generated conclusions.
Retain the run identifier and follow the selected interface’s lifecycle. Resume the same active run rather than starting a duplicate; report pending work separately from inspected completed results.

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

Research question: Compare mandatory frontier-model licensing with post-deployment incident reporting.
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
Retrieve source content or faithful extracts only; no provider-generated summaries, answers, reports, or agent analysis. Keep all analysis and final writing in this assistant.

Research question: How did researchers and developers react to the announcement of [MODEL OR PRODUCT]?
```

### Advanced multi-lane investigation

This pattern is for a comprehensive task that needs several distinct evidence families, not the normal default.

```text
Use the multi-provider-research skill.

You may use any supported provider family only when it has a distinct role: Octen, Exa, exactly one Perplexity mode, Parallel retrieval or permitted research, and authenticated X data.

- Octen: broad, multi-angle discovery.
- Exa: semantic cross-checking, controlled search, page reading, or relevant Connect data.
- Perplexity: choose one mode according to the required output.
- Parallel: objective-shaped Search/Fetch, relevant specialized records, or permitted provider research; avoid duplicate work.
- X: one authenticated X-native interface; use a dedicated structured interface only when its operation fits better.

Do not automatically duplicate queries or page reads. Use a provider only when it contributes a distinct evidence lane. Report all providers attempted, their contributions, failures, date ranges, and material gaps.

Research question: Produce a comprehensive evidence-backed analysis of reactions to the proposed U.S. AI liability framework.
```

## Flexible routing and provider audits

### Broad permission without mandatory use

```text
Use the multi-provider-research skill.

You may use Octen, Exa Search and Fetch, relevant Exa Connect providers, one task-appropriate Perplexity mode, Parallel, and authenticated X interfaces. Use only those that make a material contribution.

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
- authenticated X data through xurl or one X API integration

Attempt each required provider only for its distinct assigned role. Do not silently replace an unavailable provider.

For every provider, report the callable interface discovered, authentication and availability status, query or operation attempted, successful contribution, errors or limitations, and whether the final answer contains provider-backed evidence.

Research question: What are prominent podcast hosts, guests, journalists, and X users saying about AI regulation?
```

## General-purpose fill-in template

Use this when the short everyday prompt needs more control. Fill in the relevant fields and delete the rest; the skill supplies the shared research rules.

```text
Use the multi-provider-research skill.

Research question: [YOUR QUESTION]
Scope and desired output: [DATES, GEOGRAPHY, COMPARISON CRITERIA, FORMAT]

Providers:
- Required: [PROVIDERS AND THEIR ROLES]
- Optional: [OTHER PROVIDERS ALLOWED WHEN USEFUL]
- Excluded: [PROVIDERS OR OPERATIONS NOT TO USE]
- Is this an exclusive list? [YES / NO]

Native tools: [ALLOW SEARCH AND PAGE READING / PAGE READING ONLY / NEITHER]
Analysis: [SOURCE RETRIEVAL ONLY; THIS ASSISTANT DOES ALL ANALYSIS / PROVIDER-GENERATED ANALYSIS ALLOWED WITH DISCLOSURE]
If a required tool is unavailable: [REPORT THE GAP WITHOUT SUBSTITUTION / ASK BEFORE SUBSTITUTING / USE THIS PERMITTED FALLBACK: ...]
Budget: [SPENDING LIMIT AND ANY CALL, PAGE, OR TIME LIMITS]
```

Native-tool permission does not waive a required provider's role. If you make the provider list exclusive, the native-tools field states any exception. Spending limits need supported controls; text in a prompt is not an enforced provider-side cap. Ask for a fuller provider ledger only when you need an audit.

## Portability note

These prompts are portable at the language level, but provider access is not. Each application may expose integrations through built-in tools, MCP servers, command-line utilities, plugins, extensions, or none at all.

The prompt requires the agent to discover and disclose the tools available in the current session rather than pretend that a named provider is accessible.
