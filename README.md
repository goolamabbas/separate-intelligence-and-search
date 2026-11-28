# Choose Your AI. Choose How It Searches.

Your AI subscription pays for intelligence first and bundles search as an add-on. Keep the assistant you already like, and connect a dedicated search provider for free when you need deeper coverage or structured data.

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
- **Better search in every workspace:** Coding agents, Cursor, CLI tools, and lower-cost plans often ship with thin or missing search. Connect one free provider to upgrade any of them without switching models.

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

The full guide compares five providers neutrally (Exa, Parallel, Keenable, Octen, and Perplexity). To feel the difference in two minutes with no credit card, start with **Exa** ($10/month in free credits, no payment method required) or **Parallel** (works without an account at all).

### 1. Connect Exa (or Parallel) in your app

- **ChatGPT or Codex:** Open [Exa in OpenAI’s plugin directory](https://chatgpt.com/plugins/exa?open_in_app) and click Install (or install the [Parallel app](https://openai.com/business/plugins/parallel-search/) with no account needed).
- **Claude (Web, Desktop, or Cowork):** In a new chat, click **+** → **Add connector**, search for **Exa**, and click **Connect** (or install the [Parallel connector](https://claude.com/marketplace/connectors/parallel-search)).
- **Claude Code, Cursor, or another MCP client:** Add `https://mcp.exa.ai/mcp` (for example, `claude mcp add --transport http exa https://mcp.exa.ai/mcp`), or `https://mcp.parallel.ai/mcp` for Parallel.

Using a different assistant, or want to compare all five providers first? See the [connection guide](https://goolamabbas.github.io/separate-intelligence-and-search/guide/connecting-providers/) and [provider reference](https://goolamabbas.github.io/separate-intelligence-and-search/guide/choosing-providers/).

### 2. Paste a ready-to-run prompt

Start a fresh chat with your new connector enabled and paste this prompt as-is (if you connected Parallel instead of Exa, swap `Exa Search` for `Parallel Search`):

```text
Use Exa Search to build a market map of 10 UK startups founded in 2023 or later with fewer than 50 employees building AI tools for compliance, KYC/AML, or accounting teams. For each company, give the website, founding year, employee count, 1-year headcount growth if available, and a 1-sentence summary of what the product does. If Exa is unavailable, tell me instead of falling back to built-in search.
```

Check the tool activity above the answer to confirm **Exa** ran (not generic “Searched the web”), and open two links to inspect the evidence. Curious about the contrast? Paste the same prompt into a separate chat with connectors off and count how many companies overlap and how many growth figures come back `not found`.

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

Start with the application you already use. Provider charges are separate from your AI subscription. A free allowance or small credit balance may support initial basic searches, depending on the provider and tool. Premium datasets and deeper research can cost more. Check the provider’s current pricing before adding funds or requesting paid data.

[Explore free retrieval allowances and regional pricing examples](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/). Each example retains its own source-check date.

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
