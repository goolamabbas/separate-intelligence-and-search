# Research prompt cookbook

Every prompt below is short enough to actually use in ChatGPT, Claude, Cursor, Grok Bot, or a coding agent. Replace anything in `[square brackets]` with your details, or paste the ready-to-run starters as-is.

You do not need the optional `multi-provider-research` skill for any prompt outside the **Using the optional routing skill** section. Your assistant just needs one connected provider ([setup guide](connecting-providers.md)).

## Four starters

Start here right after connecting a provider. All four work without the optional skill.

| Start with… | What it gives you | Good providers to try |
| --- | --- | --- |
| [Build a startup market map](#build-a-startup-market-map) | 10 qualifying startups with founding year, headcount, and growth | [Exa](choosing-providers.md#exa) (free $10/mo, no card) or [Parallel](choosing-providers.md#parallel) |
| [Check an upgrade or policy before acting](#check-an-upgrade-or-policy-before-acting) | Exact current rule and caveats from official docs | Any connected search provider |
| [Compare two tools from official docs](#compare-two-tools-from-official-docs) | Side-by-side comparison backed by primary help pages | [Exa](choosing-providers.md#exa), [Keenable](choosing-providers.md#keenable), or [Parallel](choosing-providers.md#parallel) |
| [Read one long page or PDF cleanly](#read-one-long-page-or-pdf-cleanly) | Exact quoted passage and plain-English explanation from a URL | [Parallel](choosing-providers.md#parallel), [Keenable](choosing-providers.md#keenable), [Octen](choosing-providers.md#octen), [Exa](choosing-providers.md#exa), or [Perplexity](choosing-providers.md#perplexity) |

### Build a startup market map

Ready to paste as-is with no brackets to fill in. Swap `Exa Search` for whichever provider you connected, or change the country and industry to match your own work.

```text
Use Exa Search to build a market map of 10 UK startups founded in 2023 or later with fewer than 50 employees building AI tools for compliance, KYC/AML, or accounting teams. For each company, give the website, founding year, employee count, 1-year headcount growth if available, and a 1-sentence summary of what the product does. If Exa is unavailable, tell me instead of falling back to built-in search.
```

### Check an upgrade or policy before acting

<span id="one-question-without-the-skill"></span>
Use this before upgrading software, migrating tools, or relying on a product policy (for example, checking Notion workspace export rules or a framework release).

```text
Before I upgrade or switch to [product and version], is there anything I need to watch out for? Use [my connected search provider] to read the official release notes or help docs. Tell me who needs to take action, flag any deprecated features or deadlines, and link to the exact official pages. If the docs give no action items, say so.
```

### Compare two tools from official docs

Forces the assistant onto primary documentation instead of outdated comparison blog posts.

```text
Use [my connected search provider] to compare [Product A] and [Product B] on [2–3 specific criteria, e.g. free-plan limits, export formats, and data retention]. Rely on official help docs and pricing pages rather than third-party blogs. Link every source, quote key limits or caveats, and flag anything that is unclear or missing.
```

### Read one long page or PDF cleanly

Useful when built-in page readers choke on a long PDF, JavaScript-heavy documentation page, or dense terms page.

```text
Read [URL] using [Parallel Fetch / Keenable Fetch / Octen Extract / Exa Fetch / Perplexity Context]. Answer this question from the page: [my question]. Quote the exact passage that supports your answer, explain any conditions or exceptions, and tell me if the page could not be read completely.
```

## Everyday research tasks

Task-first prompts for work, investing, learning, and creative projects. Each works with any suitable connected provider.

### Find firsthand podcast or interview quotes

Works well with [Exa](choosing-providers.md#podcast-transcripts-through-search) (which indexes podcast transcripts in Exa Library) or general web search.

```text
Use [my connected search provider] to find 3 firsthand interviews or podcast transcripts where practitioners discuss [topic or creative challenge]. Prefer original interviews or transcripts over news summaries. For each, give the speaker, episode or publication date, direct link, a verbatim quote (with timestamp if available), and the key takeaway. Flag anything you could not verify directly.
```

### Research a public company against a thesis

Brings together filings, earnings releases, and management commentary without blending reported facts and opinions.

```text
Use [my connected search provider] to research [company and ticker] against this thesis: [my thesis]. Compare its latest reported period with the same period a year earlier on revenue, margins, cash flow, and management outlook. Prefer SEC filings and official earnings releases. Label reporting periods, link every source, list evidence both for and against the thesis, and flag missing or incomparable data.
```

### Explain two conflicting numbers in the news

Especially useful when two articles cite different earnings, market-size, or survey figures. Works with source retrieval (Exa, Parallel, Keenable) or a cited reasoning mode ([Perplexity Reason](choosing-providers.md#perplexity)).

```text
Use [my connected search provider] to explain why two recent reports cite different figures for [metric or company and quarter]. Trace both figures back to the original release, filing, or methodology. Give both numbers, their exact definitions, what adjustments explain the gap, and direct links to the primary sources.
```

### Discover prospective B2B accounts

Built for structured company search (such as [Exa](choosing-providers.md#exa)) or broad discovery. Keeps verified facts separate from inferred fit.

```text
Use [my connected search provider] to find 10 businesses in [region or market] that match [customer criteria] for [our product]. For each, link primary evidence of fit, approximate size or funding if available, and one recent dated development. Suggest likely buying roles separately from verified facts, and do not guess private contact details.
```

### Check local places and current hours

Pairs well with [Octen Place Search](choosing-providers.md#octen), then verifies hours or closures on the official venue page.

```text
Use [Octen Place Search / my connected search provider] to find 5 [type of venue, e.g. quiet coworking spaces or public libraries] near [neighborhood or station] that are open on [day and time]. For each, give the address, reported hours, and a link to the official venue page so I can confirm holiday or weekend changes.
```

### Find official visual references or logos

Pairs well with [Parallel Image Search](choosing-providers.md#parallel) or [Octen Image Search](choosing-providers.md#octen).

```text
Use [Parallel Image Search / Octen Image Search] to find official, high-resolution images of [subject, e.g. Python logo for a slide deck]. Return the direct image link, the source page where it appears, pixel dimensions if available, and note any attribution or usage terms stated on the source page.
```

## Specialist data and deeper research

Use these when ordinary public web search is not enough. Check [Costs and access](costs.md#provider-allowances-and-access) before running paid datasets, batch jobs, or deep research modes.

### Enrich a list of companies consistently

Designed for [Parallel FindAll / Task Group](choosing-providers.md#parallel) or [Exa Agent](choosing-providers.md#exa) when you want the exact same structured columns filled across many rows.

```text
Use [Parallel Task Group / Exa Agent] to research these companies: [list 3–5 companies to test first]. For each company, return the same fields: [e.g. headquarters, pricing model, SOC 2 status, latest major launch with date, and source URL for each field]. Leave a field blank if no primary source confirms it rather than guessing.
```

### Pull partner data (traffic, financials, or prediction markets)

For specialized third-party datasets through [Exa Agent + Connect](choosing-providers.md#exa) (such as Similarweb traffic, Fiber firmographics, Financial Datasets SEC metrics, Baselayer KYB, Particle podcasts, or Polymarket odds). Partner calls add charges on top of Agent usage.

```text
Use Exa Agent with [Similarweb / Fiber / Financial Datasets / Baselayer / Particle / Polymarket] to answer: [my question]. Confirm that the named data source is available before starting, return reporting periods and observation dates for every figure, and keep partner-backed fields separate from general web findings. If the dataset is unavailable, tell me instead of filling fields with web guesses.
```

### Look up a structured registry record

Uses [Parallel's vertical tools](choosing-providers.md#parallel) (`find_verticals` -> `search_vertical`) for structured registries such as ClinicalTrials.gov.

```text
Use Parallel's dataset discovery tools to look up [registry record, e.g. clinical trial NCT04280705]. Check the matching operation and its price first, then return the official record title, status, key dates, and registry link. If dataset lookup tools are unavailable on this connection, tell me and fall back to the official registry web page.
```

### Check what the web or a page said before a past date

Uses [Keenable's `query_time`](choosing-providers.md#keenable) (web index as of a past date) or [Perplexity Context's `snapshot_as_of`](choosing-providers.md#perplexity) (archived copy of a known URL).

```text
Use [Keenable Search with query_time / Perplexity Context with snapshot_as_of] to check what [topic or URL] showed as of [YYYY-MM-DD]. Clearly separate what was visible on or before that cutoff date from any current live content, and report if no archived snapshot is available.
```

### Check original posts, threads, or bookmarks on X

Uses an authenticated read-only X connection ([xurl or X MCP](choosing-providers.md#optional-authenticated-x-native-evidence)).

```text
Use my authenticated X connection (read-only) to find the original posts and clarifying replies about [topic or announcement] between [start date] and [end date]. Include the author handle, timestamp, direct link, and key quote for each post. Keep X-native evidence separate from general web articles.
```

### Run a deep multi-source investigation (with a budget check)

For high-effort research runs ([Exa Agent Ultra](choosing-providers.md#when-agent-ultra-is-worth-it), [Parallel Deep Research](choosing-providers.md#parallel), or [Perplexity Research](choosing-providers.md#perplexity)). Always confirm budget controls before starting.

```text
I want a deep multi-source investigation using [Exa Agent Ultra / Parallel Deep Research / Perplexity Research] on: [my research question]. Before starting the run, check whether this connection exposes a spending or effort cap and confirm the expected cost boundary with me (target max: [$X]). Once complete, separate verified primary evidence from provider-generated synthesis and flag remaining gaps.
```

## Using the optional routing skill

If you installed the optional **[multi-provider-research](https://github.com/goolamabbas/multi-provider-research)** skill in a coding agent or skill-capable app, keep your prompts short—the skill already supplies the routing and verification rules.

### Everyday skill prompt

```text
Use the multi-provider-research skill.

Research question: [YOUR QUESTION]
```

### Combine two providers for distinct jobs

Name each provider's role cleanly instead of repeating routing rules.

```text
Use the multi-provider-research skill.

Research question: [YOUR QUESTION]

Give each connected provider a distinct role:
- Use [Provider A, e.g. Exa] for [e.g. primary company records and official announcements].
- Use [Provider B, e.g. authenticated X] for [e.g. direct reactions from developers and founders].
Keep both lanes separate and summarize what each contributed.
```

## Optional strict and audit controls

Most everyday users can skip this section. Use these short add-on clauses when you need strict tool isolation, repeatable evaluations, or assistant-only reasoning.

### Before copying a prompt

Two quick reminders before sending a prompt to any external provider:

- **Privacy:** The search provider receives the search terms and any URLs your assistant sends. Use public descriptions rather than private client names or secret URLs.
- **Billing:** Ordinary Search and Fetch calls are free or cost fractions of a cent. Delegated agent runs, batch enrichments, and Connect partner datasets cost more—check [Costs and access](costs.md#provider-allowances-and-access) first.

### Native-only search (skip connected providers)

Handy when you want to test your assistant's built-in web search alone without disabling connectors in settings.

```text
Use only this assistant's built-in web search. Do not call any connected apps, plugins, MCP servers, or external search providers (such as Exa, Parallel, Keenable, Octen, or Perplexity). At the end of your reply, state which search tool you used.
```

### Keep all reasoning in your own assistant

<span id="model-boundary"></span>
Add this clause when you want connected providers to retrieve raw source content only and have your chosen model perform all analysis.

```text
Use external providers only to search and retrieve source content. Do not call provider-generated answer, reasoning, research, or agent endpoints, and disable default generated cards, storylines, or fetch summaries where supported. Have the model selected in this app write all analysis from the retrieved sources.
```

### Strict provider, fallback, and audit clauses

Mix and match whichever single-line boundary your task requires:

```text
Use only [Provider] for this task. If it is unavailable or lacks a required control, report the gap and stop rather than substituting another provider or built-in search.
```

```text
At the end of the answer, include a brief provenance note listing the exact tools called, date or domain filters applied, any failed reads, and what remains unverified.
```
