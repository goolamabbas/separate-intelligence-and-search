# Choose Your AI. Choose How It Searches.

Pick the best AI intelligence you can afford, from $0 free plans and $1–$10 desktop apps to $20–$200 frontier subscriptions. What you spend on intelligence should never limit the web coverage or datasets you can access: connect a dedicated search provider for $0 to pennies (often free for everyday use) to get deeper sources and structured data. Setup takes a couple of minutes, even if you never write a line of code.

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
| **Provider** | In this guide, an external service that supplies search, retrieval, structured data, or analysis, such as Exa, Parallel, Keenable, Octen, or Perplexity. |
| **App, plugin or connector** | A way for your application to access an external service. The name and setup process vary by application. You may also encounter **MCP**, a standard for connecting AI applications to tools. |
| **Skill** | A reusable package of instructions that an assistant can follow for a particular kind of task. The multi-provider-research skill gives guidance on using research tools. |

**Search** finds potentially useful sources. **Retrieval** brings back their contents so the assistant can use the evidence in its answer. Some providers also run their own models to research and write reports; when you use a delegated research mode, that service's model does the reasoning rather than your chosen assistant.

In this guide, your **intelligence stack** means your application and models. Your **search and retrieval stack** means the tools you connect to find and read sources. The skill helps the assistant decide how to use those tools.

## Why choose them separately?

- **Wider coverage and structured indexes:** One bundled search only shows one slice of the web. Dedicated company, filing, paper, and transcript indexes uncover more of the market with structured fields attached.
- **Control where it looks:** Limit search to official sites, recent dates, full PDFs, or public records instead of relying on whatever top snippets a built-in search pulls back.
- **Better search in low-cost apps:** Affordable desktop workspaces like OpenCode and Command Code are priced for models, not heavy web search, and work well for everyday research and writing even if you never code. Connect one free search provider for $0 extra.

You can keep the assistant whose writing and reasoning you already like and add a research capability only when a task calls for it. Some providers also offer their own generated analysis, which is different from retrieving sources for your chosen model to interpret.

## Four questions to try

Once a search provider is connected, you can use it for everyday work and personal projects, not just coding. Each starter below links directly to a short, copy-paste prompt in the cookbook:

- **Podcasts, interviews & craft:** Search inside real podcast transcripts and practitioner interviews for exact quotes and methods instead of generic blog listicles. [Interview & transcript prompt](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/#find-firsthand-podcast-or-interview-quotes).
- **Startups, markets & experts:** Build a structured startup map with headcount and growth, or find verified domain experts and speakers with career histories in one search. [Market-map prompt](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/#build-a-startup-market-map) · [Find experts & speakers](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/#find-domain-experts-or-speakers).
- **Official PDFs & live registries:** Read dense government circulars (such as RBI or tax PDFs) cleanly, or query live public registries like ClinicalTrials.gov and PubMed directly for $0. [PDF & policy check](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/#read-one-long-page-or-pdf-cleanly) · [Live registry lookup](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/#look-up-a-structured-registry-record).
- **Local places & honest reviews:** Check live opening hours, ratings, and recent customer reviews (not stale “Top 10” blogs) to catch practical details like weekend laptop rules or closures. [Local places & reviews prompt](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/#check-local-places-and-current-hours).

Browse all 22 short prompts in the [prompt cookbook](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/) (including before-and-after page checks, public-company filings, and authenticated X threads), or [connect a provider](https://goolamabbas.github.io/separate-intelligence-and-search/guide/connecting-providers/).

## Start with a question and one provider

The full guide compares five providers neutrally (Exa, Parallel, Keenable, Octen, and Perplexity). To try the idea with no credit card, start with **Parallel** (works without creating an account) or **Exa** (a free account gives you US$10 of free search credit each month, nothing to pay).

### 1. Connect Exa (or Parallel) in your app

- **ChatGPT (Web, Desktop, or Mobile — including Free plans):** Open [Exa in OpenAI’s directory](https://chatgpt.com/plugins/exa?open_in_app) and click Install (free account, no card), or install the [Parallel app](https://openai.com/business/plugins/parallel-search/) with no account needed (directory plugins work on Free plans too, subject to plan limits).
- **Claude (Web, Desktop, Cowork, or Mobile — including Free plans):** In a new chat, click **+** → **Add connector**, then connect **Exa** (asks you to sign in to a free account) or the [Parallel Search connector](https://claude.com/marketplace/connectors/parallel-search) (search and page reading with no Parallel account). Claude Free includes directory connectors plus one custom connector.

<details class="plain-details">
<summary>Using a desktop app (Cursor, Command Code, OpenCode) or a terminal? <span>+</span></summary>
<div class="prose">

- **Desktop apps (no terminal needed):** Download [Command Code Desktop](https://commandcode.ai/docs/desktop) (**Settings → MCP**) or [OpenCode Desktop](https://opencode.ai/desktop) (pick a free model and type `/mcps`), then paste `https://mcp.parallel.ai/mcp` (no account needed) or `https://mcp.exa.ai/mcp` (free search/fetch, or `?login` for your free account's US$10 monthly credit). In **Cursor**, install Exa or Parallel from the 1-click marketplace.
- **Terminal 1-liners:**
  - Claude Code: `claude mcp add --transport http parallel https://mcp.parallel.ai/mcp`
  - Command Code CLI: `cmd mcp add --transport http --scope user parallel https://mcp.parallel.ai/mcp`
  - OpenCode CLI: `opencode mcp add parallel --global --url https://mcp.parallel.ai/mcp` (OpenCode also supports Exa and Parallel via `/connect` or API keys — see [OpenCode web search](https://opencode.ai/docs/websearch/))
- **Sign-in note:** The bare URLs above connect without signing in. If your app asks to authenticate or you want an account’s free monthly allowance, use `?login` or run `/mcp` (Command Code) / `/mcps` (OpenCode).

</div>
</details>

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

Out of the box, AI models often misuse connected search tools: sending vague queries, fetching pages one by one, missing specialized filters or $0 registries, or papering over failed page reads.

The free **[multi-provider-research](https://github.com/goolamabbas/multi-provider-research)** skill (`v0.12.0`) adds a tested research playbook across Exa, Parallel, Keenable, Octen, Perplexity, and authenticated X:

- **Gets more from even a single provider:** Reaches for structured company and people indexes, clean PDF fetchers, date filters, local reviews, and $0 public registries instead of treating every tool like a plain search box.
- **Cuts wasted turns and model cost:** Batches page reads, reuses snippets when they already answer the question, and avoids redundant searches (in the [worked example below](#see-the-approach-in-practice), it helped finish in 8 turns for $0.011 in model cost).
- **Coordinates multiple providers cleanly:** Gives each tool a distinct job when you connect more than one, without duplicating searches or blurring sources.
- **Protects your budget and evidence:** Flags failed reads or gaps honestly, keeps primary sources separate from provider-written summaries, and warns before launching paid delegated runs.

It is an instruction package only (you still connect your own free or paid provider) and works in any skill-capable app, including Claude Desktop/Cowork, OpenCode Desktop, Command Code Desktop, Codex, and Claude Code.

**[Explore multi-provider-research on GitHub →](https://github.com/goolamabbas/multi-provider-research)**

### Quick install

In OpenCode, Command Code, Claude Code, Codex, or any agent with local file access, paste:

```text
Install the multi-provider-research skill for all my projects by following https://raw.githubusercontent.com/goolamabbas/multi-provider-research/main/install.md
```

Omit `for all my projects` to install only in the current folder. Using Claude Desktop/Cowork or another GUI app? Upload the latest verified ZIP from [GitHub Releases](https://github.com/goolamabbas/multi-provider-research/releases/latest) (or follow the [manual installation guide](https://github.com/goolamabbas/multi-provider-research#manual-installation)). Then start a fresh chat and ask your assistant to use `multi-provider-research`.

## Do more with less

- **Start at $0:** Connect a free search provider (Parallel, Exa, or Keenable) to **Claude Free**, **ChatGPT Free**, or **OpenCode Desktop’s free models**. Free search still uses your assistant’s message limit when the model reads returned pages, so you spend tokens on better evidence instead of dead-end snippets.
- **Stay at $1–$10/month:** Global desktop apps like [Command Code Desktop](https://commandcode.ai/docs/desktop) (Go at $1/month or GOAT at $10/month; accepts cards, UPI, Alipay, WeChat Pay, and crypto) and [OpenCode Desktop](https://opencode.ai/desktop) (free models, or Go at $10/month) are priced for models, not heavy web search, and double as regular chat apps for everyday research and writing even if you never code. Adding a free search provider upgrades them for **$0 extra** on ordinary queries.
- **Already paying $20–$200/month?** Higher tiers buy more intelligence and usage, not a different search index. Keeping your current plan and plugging in a free dedicated search provider adds wider coverage and structured data for **$0 extra** on ordinary queries; only delegated multi-step runs and commercial partner datasets cost real money.

[Compare provider free tiers, low-cost apps, and when paying is worth it →](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/)

## See the approach in practice

We ran the same India B2B SaaS brief (RBI recurring e-mandate rules, DPDP Rules milestones, and a 10-startup market map) three times on one open-weight model (`DeepSeek-V4.1-Flash-1017-Fast`) in OpenCode `v2.4.2`: bare model vs. OpenCode native `websearch` (pinned to Parallel) vs. Parallel + Exa MCP with `multi-provider-research` `v0.12.0`. The MCP + `v0.12.0` run finished in **138s** for **$0.011** in model inference (52% lower model cost and 58% fewer turns than native `websearch`; search about $0.06 at list rates, **$0 on free tiers**), had **0 fetch errors** across 16 live web pages (vs. 4 of 5 local fetch errors), and returned **6/10 LinkedIn-reported YoY startup growth figures** (by pairing Exa with Parallel) vs. 0/10.

**[Read the controlled A/B/C worked example →](https://goolamabbas.github.io/separate-intelligence-and-search/guide/india-saas-case-study/)**

You do not need two providers to start: connect one free provider first and add a second only when a distinct job calls for it. Full memos, configs, and parsed JSONL logs are published in the repository for inspection.

## Go deeper

- **[Multi-provider-research on GitHub](https://github.com/goolamabbas/multi-provider-research):** the skill package, installation instructions, and routing rules.
- **[Choosing research tools for your AI assistant](docs/README.md):** the detailed guide and copyable prompts, including examples that combine providers.
- **[My newsletter introduction](https://paragraph.com/@yusufg-ai-web3-curated-topics/a-practical-guide-to-choosing-external-research-tools-for-ai-agents):** more context on the approach.
- **[Artificial Analysis Search Index](https://artificialanalysis.ai/agents/search-api):** a benchmark resource to explore alongside your own task-based testing.

**Start with a question, connect one suitable provider, and inspect the evidence. Add the optional skill when reusable guidance would help.**
