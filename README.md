# Choose Your AI. Choose How It Searches.

Flagship AI subscriptions pay for intelligence first, free chat plans cap your usage, and low-cost desktop apps like Cursor, Command Code, and OpenCode ship with thin or missing search. Connect a free dedicated search provider to any of them, even if you never write a line of code.

If you use a flagship assistant like ChatGPT or Claude, its built-in web search is already surprisingly capable. On 28 November 2026, we tested ChatGPT (GPT-6.2 Astra, medium reasoning) with built-in search only on three everyday lookups: finding verbatim timestamped podcast quotes, naming five recent UK startups, and catching a quiet Notion deprecation notice for full-workspace PDF exports. Built-in search handled all three accurately.

So why connect a separate search provider? Because an AI subscription has to subsidize both intelligence and search, and AI labs compete primarily on intelligence. Built-in search is tuned to be fast and good enough for quick questions. A dedicated search provider's entire business depends on wider coverage, structured indexes, and retrieval controls, and you do not have to switch AI assistants to use one.

To see where that difference shows up in practice, we asked for a real market map: **15 UK startups founded in 2023 or later with fewer than 50 employees building AI tools for compliance, KYC/AML, or accounting, including founding year, employee count, and 1-year headcount growth.**

| What we compared (28 November 2026) | ChatGPT built-in search (GPT-6.2 Astra) | Exa company search (1 call, free tier) |
| --- | --- | --- |
| **Qualifying UK startups found** | 15 startups (5 drawn from Y Combinator profiles) | **20 startups** (founded 2023–2025, 2–17 employees) in one call |
| **Overlap between the two lists** | Only **1 company overlapped** ([Diligent](https://godiligent.ai/)) | **19 startups** built-in search never surfaced |
| **1-year headcount growth** | **`not found` on 12 of 15** (2 undated Growjo estimates; 1 FY2024–FY2025 filing) | Tracked **1-year growth on 10 of 20** (plus monthly growth on 3 newer startups) |
| **On the overlapping company ([Diligent](https://godiligent.ai/))** | 10 employees (YC profile); 1-year growth: `not found` | **17 employees**, **`+157.1% YoY`**, 5-country split, **$3.06M** across 3 dated rounds |

Exa's headcount and growth figures are tracked profile estimates rather than audited payroll filings, so you still check key facts before acting on them. What changed is coverage and structure: a single free call more than doubled the real market map and returned structured company records that general web snippets did not have.

**[Try it free in 2 minutes](#start-with-a-question-and-one-provider)** · **[Read the full guide](docs/README.md)**

## The pieces, in plain language

You do not need to know these terms beforehand:

| Term | What it means here |
| --- | --- |
| **Model** | The AI that interprets your request and generates a response. It can work with information supplied by external tools. |
| **Application** | The workspace around the model, sometimes called a harness. It manages your conversation and the tools the model can use. Think of it as the place where you work with AI. |
| **Provider** | In this guide, an external service that supplies search, retrieval, structured data, or analysis, such as Octen, Exa, Parallel, or Perplexity. |
| **App, plugin or connector** | A way for your application to access an external service. The name and setup process vary by application. You may also encounter **MCP**, a standard for connecting AI applications to tools. |
| **Skill** | A reusable package of instructions that an assistant can follow for a particular kind of task. The multi-provider-research skill gives guidance on using research tools. |

**Search** finds potentially useful sources. **Retrieval** brings back their contents so the assistant can use the evidence in its answer. Some providers also perform research and analysis using their own models. Choosing an Agent service such as Exa Agent Ultra delegates some reasoning to that service; it does not inherit your selected model.

In this guide, your **intelligence stack** means your application and models. Your **search and retrieval stack** means the tools you connect to find and read sources. The skill helps the assistant decide how to use those tools.

## Why choose them separately?

- **Wider coverage and structured indexes:** One bundled search only shows one slice of the web. Dedicated company, filing, paper, and transcript indexes uncover more of the market with structured fields attached.
- **Controls a search toggle hides:** Get domain locks, date and freshness filters, point-in-time search, ongoing monitors, live traffic or registry data, and authenticated X bookmarks in the same chat.
- **Multiply a low-cost workspace (no coding required):** Apps marketed as “coding agents” (such as Cursor Start, Command Code Desktop, or OpenCode Desktop) double as everyday chat workspaces for research, writing, and business work. Because they cannot subsidize heavy web search at low prices, plugging in a free MCP search provider upgrades them for $0 extra.

You can keep the assistant whose writing and reasoning you already like and add a research capability only when a task calls for it. Some providers also offer their own generated analysis, which is different from retrieving sources for your chosen model to interpret.

## Four questions to try

These are suggested uses for creative interests, personal learning and work, not searches performed for this guide. Replace the brackets with your details. Each starts with a connected search provider; specialist data is an optional extension.

### Explore ideas for a creative project

Developing a short film or essay? Interviews with people who have tackled a similar theme or creative challenge can reveal different approaches and the choices behind them. **Requires:** search and page retrieval. Ordinary web search can find published interviews; a provider with [searchable podcast transcripts](https://goolamabbas.github.io/separate-intelligence-and-search/guide/choosing-providers/#podcast-transcripts-through-search) may also find relevant passages within episodes. Coverage and timestamps vary by provider and source.

```text
Use [my connected search provider] to find firsthand interviews with people who have worked on [theme or creative challenge], to help me develop [my project]. Find three different perspectives and explain the creative choices, motivations or lessons each person describes. Prefer original interviews or transcripts. Include names, source links and dates, plus timestamps where available. Distinguish what the interviewees actually said from your suggestions for my project, and flag anything you cannot verify.
```

### Research a company before investing

Bring together results, filings and management commentary to examine a thesis. **Requires:** search and page retrieval that can reach original company or regulatory sources. Exa documents financial material in its [data index](https://exa.ai/docs/search/data/overview); other providers may also find the public documents you need.

```text
Use [my connected search provider] to research [company and ticker] against this thesis: [my thesis]. Compare its latest results with the same period last year: revenue, margins, cash flow and management outlook. Prefer company filings and original announcements. Link sources, label reporting periods, separate reported facts from interpretation, and identify evidence for and against the thesis. Flag missing or incomparable data.
```

### Understand consumers and messages to test

Explore consumer needs and how competing brands present themselves. **Requires:** public-web search and page retrieval. Public comments can suggest motivations; they do not establish how common a view is or who a brand’s customers are.

```text
Use [my connected search provider] to explore consumer needs for [product category] in [market] and compare how [two brands] describe their products. Find recurring motivations, frustrations and buying occasions in accessible public sources. Link and date the evidence, distinguish brand claims from consumer comments, and note sampling gaps. Suggest three audience and message hypotheses to validate through customer research or campaign tests. Do not infer audience demographics or purchase intent from web mentions.
```

For audience estimates beyond public web sources, a separate data service may help. [Similarweb through Exa Connect](https://exa.ai/docs/agent/connect/similarweb) offers **estimated** website demographics, audience overlap and traffic sources. Connect is accessed through **Exa Agent**, which researches and synthesises results for your assistant to review; ordinary Exa Search alone does not supply this partner data. Check [Connect access and additive charges](https://exa.ai/docs/agent/connect/overview) before requesting it.

### Find businesses that could become customers

Build an initial list of accounts worth investigating. **Requires:** company and public professional-source search, such as [Exa’s company and people search](https://exa.ai/docs/search/data/companies-people). A relevant role is not evidence that someone is currently buying.

```text
Use [my connected search provider] to find five businesses in [market] that match [customer criteria] for [our product]. For each, link evidence of fit and any relevant recent development, with dates. Suggest likely buying roles and explain your reasoning. Separate verified facts from inferred fit and roles; do not claim purchase intent or name a contact without supporting public evidence. Flag gaps and suggest what to validate next.
```

[Connect a provider for one of these questions](https://goolamabbas.github.io/separate-intelligence-and-search/guide/connecting-providers/).

Want to go further? The [prompt library](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/) also covers technical documentation and podcast transcripts.

## Start with a question and one provider

The full guide compares five providers neutrally (Exa, Parallel, Keenable, Octen, and Perplexity). To feel the difference in two minutes with no credit card, start with **Parallel** (keyless MCP, no account needed) or **Exa** (keyless Search/Fetch over MCP, or a free account with $10/month in recurring credits and no card).

### 1. Connect Exa (or Parallel) in your app

- **ChatGPT or Codex (including Free plans):** Open [Exa in OpenAI’s plugin directory](https://chatgpt.com/plugins/exa?open_in_app) and click Install (free account, no card), or install the [Parallel app](https://openai.com/business/plugins/parallel-search/) with no account needed (directory plugins work on Free plans too, subject to plan limits).
- **Claude (Web, Desktop, or Cowork — including Free plans):** In a new chat, click **+** → **Add connector**, then connect **Exa** (asks you to sign in to a free account) or the [Parallel Search connector](https://claude.com/marketplace/connectors/parallel-search) (search and page reading with no Parallel account). Claude Free includes directory connectors plus one custom remote MCP connector.
- **Cursor, Command Code, OpenCode, or Claude Code (desktop GUI or terminal):** Add `https://mcp.parallel.ai/mcp` (keyless, no account) or `https://mcp.exa.ai/mcp` (keyless Search/Fetch, or `?login` for $10/month free credits). Prefer a desktop window instead of a terminal? Use **Command Code Desktop** (**Settings → MCP**), **OpenCode Desktop** (`/mcps`), or **Cursor**'s 1-click marketplace. From a terminal:
  - Claude Code: `claude mcp add --transport http parallel https://mcp.parallel.ai/mcp`
  - Command Code: `cmd mcp add --transport http --scope user parallel https://mcp.parallel.ai/mcp`
  - OpenCode: `opencode mcp add parallel --global --url https://mcp.parallel.ai/mcp` (OpenCode also supports Exa and Parallel natively via `/connect` or API keys — see [OpenCode web search](https://opencode.ai/docs/websearch/))
- **Keyless vs. sign-in note:** Keyless endpoints connect without signing in. If a client shows `needs authentication` or you want an account’s free monthly allowance, use the `?login` URL or run `/mcp` (Command Code) / `/mcps` (OpenCode).

Using a different assistant, or want to compare all five providers first? See the [connection guide](https://goolamabbas.github.io/separate-intelligence-and-search/guide/connecting-providers/) and [provider reference](https://goolamabbas.github.io/separate-intelligence-and-search/guide/choosing-providers/).

### 2. Paste a ready-to-run prompt

Start a fresh chat with your new connector enabled and paste either prompt as-is (both work with Exa, Parallel, Keenable, or any connected search provider):

**Option A — Company list (plays to Exa’s company index):**

```text
Use my connected external search provider (not built-in web search) to build a market map of 10 UK startups founded in 2023 or later with fewer than 50 employees building AI tools for compliance, KYC/AML, or accounting teams. For each company, give the website, founding year, employee count, 1-year headcount growth if available, and a 1-sentence summary of what the product does. If no external search provider is connected, stop and tell me instead of falling back to built-in search.
```

**Option B — Primary-source policy check (plays to Parallel or Keenable):**

```text
Use my connected external search provider (not built-in web search) to check the current RBI rules for recurring e-mandates on cards and UPI in India. Give the official rbi.org.in direction name, reference number, date, the general per-transaction rupee cap without extra authentication (AFA), any higher category limits, and direct source links. If no external search provider is connected, stop and tell me instead of falling back to built-in search.
```

Open the tool activity above the answer and look for the provider you connected (not generic “Searched the web”), then open two links to inspect the evidence. Curious about the contrast? Ask just the market-map or RBI question in a fresh chat with connectors off and compare what comes back.

Once you see how it works, swap in any topic you care about, or try the [four starter prompts](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/#four-starters) and [provider reference](https://goolamabbas.github.io/separate-intelligence-and-search/guide/choosing-providers/). The routing skill below is optional.

## What the optional skill adds

After trying a provider, you may want reusable guidance for future research. Connecting tools gives your assistant access to them. The **multi-provider-research** skill supplies instructions for deciding how to use them in a research task.

I built it to help an assistant:

- Choose the smallest useful set of available providers. One can be enough.
- Give each provider a clear job when more than one is needed.
- Respect your instructions about which providers to use or exclude.
- Check source evidence and explain material gaps or failed retrievals.
- Distinguish retrieving sources from asking a provider to generate its own analysis.

The skill covers Octen, Keenable, Exa, Perplexity, Parallel, and authenticated X tools. You do not need all of them installed.

It is an instruction package, so its use depends on your application's support for skills and connected tools. It does not install providers, supply API keys, or include paid access to their services.

**[Get multi-provider-research on GitHub →](https://github.com/goolamabbas/multi-provider-research)**

### Add it when useful

A skill is a reusable package of instructions. Installing this optional skill requires an application that supports it and the appropriate file access; those are separate from the requirements for connecting a provider.

Ask your coding agent with local file access:

```text
Install the multi-provider-research skill by following https://raw.githubusercontent.com/goolamabbas/multi-provider-research/main/install.md
```

Inside a project, this defaults to installation for that project. Add “for all my projects” to request a personal installation for your application. The agent checks the supported location and may ask for permission to write there. For manual setup, follow the [installation instructions](https://github.com/goolamabbas/multi-provider-research#manual-installation).

Once the application can load it, ask the assistant to use `multi-provider-research` with your question. The skill does not install provider connections or supply paid access, and it is not supported by every AI application.

## This freedom of choice can also help with cost

You do not need a $20–$200/month subscription to start. **Claude Free** includes directory connectors plus one custom MCP connector, **ChatGPT Free** includes directory plugins (subject to plan limits), and **OpenCode Desktop** offers free models with no account needed. When free chat limits get in your way, do not be put off by the “coding agent” label: **Command Code Desktop** (Go plan US$1/month, UPI supported), **Cursor Start** (₹649/month in India, tax included, via UPI or card), and **OpenCode Desktop / Go** (free models, or US$10/month for ~30+ open-weight models) all have normal desktop chat windows you can use for everyday research, writing, business, and creative work.

At those prices, the app cannot afford to subsidize heavy web search. Connect one free-tier search provider over MCP and that same workspace gains dedicated search for **$0 extra** on ordinary queries: **Exa** gives $10/month in recurring credits with no credit card, **Keenable** gives 100,000 free requests a month with no credit card, and **Parallel** works through keyless MCP with no account at all.

Account for your AI subscription, research-provider charges, and local taxes separately: free retrieval still uses your assistant’s model allowance, and deep delegated runs or paid partner datasets cost extra. Check current pricing before adding funds.

[Compare free tiers, regional plans, and costs](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/). Each regional example retains its own source-check date.

## See the approach in practice

Two AI assistants researched Ethereum’s Glamsterdam upgrade using connected evidence providers. A third combined their reports. Explore where the tools filled gaps, where their contributions overlapped, and how the synthesis handled differences.

**[Explore the Glamsterdam worked example ↗](https://goolamabbas.github.io/understanding-glamsterdam/method.html)**

You do not need to reproduce this setup: start with one provider and add another when it fills a specific gap. This is a documented workflow, not a controlled comparison proving that more providers produce better results.

## Go deeper

- **[Multi-provider-research on GitHub](https://github.com/goolamabbas/multi-provider-research):** the skill package, installation instructions, and routing rules.
- **[Choosing research tools for your AI assistant](docs/README.md):** the detailed guide and copyable prompts, including examples that combine providers.
- **[My newsletter introduction](https://paragraph.com/@yusufg-ai-web3-curated-topics/a-practical-guide-to-choosing-external-research-tools-for-ai-agents):** more context on the approach.
- **[Artificial Analysis Search Index](https://artificialanalysis.ai/agents/search-api):** a benchmark resource to explore alongside your own task-based testing.

**Start with a question, connect one suitable provider, and inspect the evidence. Add the optional skill when reusable guidance would help.**
