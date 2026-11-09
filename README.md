# Choose Your AI. Choose How It Searches.

A practical guide to choosing useful sources for the AI assistant you already use.

**You’ve invested in an AI assistant. It’s worth investing a little in the information it can access.** That can begin with time spent connecting a useful provider and learning to inspect its sources; it need not mean another paid subscription.

When we use an AI assistant, the model and its search tools can feel like one service. But they perform different jobs. The model interprets your question, reasons with the information it receives and writes the answer. Search and retrieval tools find sources and bring back their contents.

Your application is the workspace around these parts. In a compatible application, you can choose a model you like and connect providers that suit your needs. The application determines which models and connections are available; choosing a model does not automatically unlock every tool.

Start with one question and one suitable provider. Try the sources it returns before deciding whether you need anything more.

**[Try your first question](#start-with-a-question-and-one-provider)** · **[Read the full guide](docs/README.md)**

## The pieces, in plain language

You do not need to know these terms beforehand:

| Term | What it means here |
| --- | --- |
| **Model** | The AI that interprets your request and generates a response. It can work with information supplied by external tools. |
| **Application** | The workspace around the model, sometimes called a harness. It manages your conversation and the tools the model can use. Think of it as the place where you work with AI. |
| **Provider** | In this guide, an external service that supplies search, retrieval, structured data, or analysis, such as Octen, TinyFish, Exa, or Perplexity. |
| **Connector or plugin** | A way for your application to access an external service. The name and setup process vary by application. You may also encounter **MCP**, a standard for connecting AI applications to tools. |
| **Skill** | A reusable package of instructions that an assistant can follow for a particular kind of task. The multi-provider-research skill gives guidance on using research tools. |

**Search** finds potentially useful sources. **Retrieval** brings back their contents so the assistant can use the evidence in its answer. Some providers also perform research and analysis using their own models. Choosing an Agent service such as Exa Agent Ultra delegates some reasoning to that service; it does not inherit your selected model.

In this guide, your **intelligence stack** means your application and models. Your **search and retrieval stack** means the tools you connect to find and read sources. The skill helps the assistant decide how to use those tools.

## Why choose them separately?

You might like your assistant's writing and reasoning but want another way to find technical documentation, explore a topic from several angles, or read a webpage. A connected provider gives it another route to the information it needs, within the same workspace.

For example, when comparing two products, a search provider can find their official documentation, a retrieval tool can bring back the relevant pages, and your chosen assistant can use that evidence to explain the tradeoffs. Some providers also offer their own generated analysis. That is different from retrieving sources for your assistant to interpret.

You can keep a setup that works for you and add a capability when you need it. You can also try a different research provider without choosing a new model solely for its bundled search. Better results still depend on the task, the sources, and how the assistant uses them.

This is useful for more than recent news. Research also means finding older documents, checking an original source, and distinguishing what the evidence supports from what remains uncertain.

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

Want to go further? The [prompt library](https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/) also covers technical documentation and podcast transcripts.

## Start with a question and one provider

### 1. Choose a question and check compatibility

Pick a question you care about, perhaps one of the examples above. Choose a relevant provider that your AI application can connect to. Check the supported connection and the tools it exposes before creating a paid account. You do not need local skill support to use a provider.

Use the [provider reference](https://goolamabbas.github.io/separate-intelligence-and-search/guide/choosing-providers/) to match the question to a capability. Start with tools you already have if they are sufficient.

### 2. Connect the provider

Follow the provider’s official instructions for your application. A connector, plugin or MCP server gives the application access to external tools; the available routes depend on the application and plan.

The [connection guide](https://goolamabbas.github.io/separate-intelligence-and-search/guide/connecting-providers/) explains the options. For a concrete example, [try ChatGPT + TinyFish](https://goolamabbas.github.io/separate-intelligence-and-search/guide/tinyfish-beginner/). The walkthrough includes a suggested first prompt and a separately labelled recorded run.

### 3. Ask a question and inspect the sources

Replace the brackets below with your details, or use one of the examples above:

```text
Use [my connected provider] to answer [my question]. Retrieve original sources and have this assistant analyse them. Link the evidence, give relevant dates, distinguish facts from inference, and flag anything you cannot verify. If the provider is unavailable, explain the gap.
```

Open a few links. Do they support the claims? Are dates and reporting periods appropriate? Does the answer acknowledge missing evidence? A useful first search also checks the connection; there is no need to repeat it solely to test access.

If this meets your needs, keep the setup simple. Add another provider when a specific gap calls for it.

## What the optional skill adds

After trying a provider, you may want reusable guidance for future research. Connecting tools gives your assistant access to them. The **multi-provider-research** skill supplies instructions for deciding how to use them in a research task.

I built it to help an assistant:

- Choose the smallest useful set of available providers. One can be enough.
- Give each provider a clear job when more than one is needed.
- Respect your instructions about which providers to use or exclude.
- Check source evidence and explain material gaps or failed retrievals.
- Distinguish retrieving sources from asking a provider to generate its own analysis.

The skill covers Octen, Exa, Perplexity, Parallel, Firecrawl, TinyFish, and authenticated X tools. You do not need all of them installed.

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
- **[Choosing External Research Tools for AI Agents](docs/README.md):** the detailed guide and copyable prompts, including examples that combine providers.
- **[My newsletter introduction](https://paragraph.com/@yusufg-ai-web3-curated-topics/a-practical-guide-to-choosing-external-research-tools-for-ai-agents):** more context on the approach.
- **[Artificial Analysis Search Index](https://artificialanalysis.ai/agents/search-api):** a benchmark resource to explore alongside your own task-based testing.

**Start with a question, connect one suitable provider, and inspect the evidence. Add the optional skill when reusable guidance would help.**
