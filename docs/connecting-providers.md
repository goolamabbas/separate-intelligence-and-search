# Installing and testing external research providers

This guide explains how to make an external research provider callable inside an AI harness and verify that it returns useful results before installing the `multi-provider-research` routing skill.

The skill is a routing layer. It tells an agent which provider to use and how to preserve evidence, but it does not create provider access.

**Last substantively reviewed:** September 2026. Provider endpoints, authentication methods, and harness configuration formats can change.

[Choosing External Research Tools for AI Agents](README.md)

## On this page

- [Install only what you need](#install-only-what-you-need)
- [Choose an access route](#choose-an-access-route)
- [Installation and verification checklist](#installation-and-verification-checklist)
- [Installation does not authorize every task](#installation-does-not-authorize-every-task)
- [A connected tool may use a different model](#a-connected-tool-may-use-a-different-model)
- [Worked example: enabling all Exa MCP tools in Codex](#worked-example-enabling-all-exa-mcp-tools-in-codex)
- [Parallel and Firecrawl verification notes](#parallel-and-firecrawl-verification-notes)
- [Optional project-instruction snippets](#optional-project-instruction-snippets)
- [Continue reading](#continue-reading)
- [Official setup documentation](#official-setup-documentation)

## Install only what you need

The skill works with any available subset of supported providers, including one. Connect a provider that fits your first task, verify it, and add others only when a distinct need arises.

Use providers that are callable, permitted, and relevant. A required provider must be attempted for its assigned role; “only” or “exactly” restricts the permitted set. If a required provider is unavailable, report the gap and follow the stated fallback policy.

## Choose an access route

Choose according to the capabilities your task needs and the interfaces your application supports. A provider may offer several routes: an official skill, a plugin or connector, hosted or local MCP, a command-line client, or direct API access. These routes are alternatives, not a required sequence. A successful check through one route establishes what worked through that route; it does not establish that all other routes work or are unsuitable.

| Service or platform | Practical access routes | Important note |
| --- | --- | --- |
| **Exa** | Official plugin where available, or the hosted remote MCP server | The base MCP endpoint exposes Search and Fetch by default; Advanced Search and Agent are opt-in tools |
| **Octen** | Official Octen skills, the hosted MCP endpoint, or the local `octen-mcp` server | Choose a supported interface and authenticate it. Inspect its live options and run a small read; availability and parameter shapes can differ |
| **Perplexity** | Hosted remote MCP server, or its optional local MCP package | Perplexity recommends the remote server when the client supports remote MCP |
| **Parallel** | Separate hosted Search MCP and Task MCP servers | Search/Fetch and asynchronous provider-side tasks have different schemas and lifecycle rules |
| **Firecrawl** | Official hosted or local MCP server | Inspect the live surface: it may expose search, scraping, mapping, crawling, parsing, agent, browser, developer, research, and monitoring tools |
| **TinyFish** | Curated plugin where available, or its hosted remote MCP server | Inspect whether the integration exposes Search, Fetch Content, Web Automation, or a subset; visibility does not establish useful results |
| **X** | xurl with its skill, or an authenticated X API MCP integration | These are alternative X-native interfaces; ordinary web evidence may corroborate, but it is not X-native evidence |

### Remote MCP

A remote MCP server normally requires a server URL and authentication. The provider operates and updates the server, so the reader does not need to keep a local process running. It is often the simplest portable starting point.

### Local or stdio MCP

Use a local MCP server when:

- the provider does not offer a suitable remote endpoint;
- the harness supports only local MCP processes;
- a pinned local version or direct local control is important.

### Provider skill

Use an official provider skill when it contains instructions or scripts that directly call the provider API. A skill is not automatically an MCP server, and an instruction-only skill does not create connectivity.

### Plugin or connector

A marketplace plugin or connector can be the simplest option when it bundles the provider connection, skills, and safety guidance. You must still inspect the tools it exposes after installation.

### Direct API or command-line access

Use a supported API or command-line client when the application can call it securely and it supplies the required capability. Inspect its own parameters and authentication requirements; do not copy MCP arguments into a direct API request without checking their shape. Keep credentials out of prompts, public pages, and logs.

Choose the route officially supported by both the provider and the harness that exposes the tools required for the task.

## Installation and verification checklist

1. Choose an official plugin, remote MCP, local MCP, provider skill, or command-line integration supported by the harness.
2. Create the required provider account and credential.
3. Store the credential using the harness’s secret, environment-variable, or credential-management mechanism.
4. Restart the harness or begin a fresh task when required.
5. Inspect the live tool list and the schemas of the tools you intend to use.
6. Run one harmless search, fetch, or read-only lookup. A useful first research read can serve as this check; do not add a duplicate probe when access is already established.
7. Distinguish configuration, reachability, authentication, successful execution, and useful evidence.
8. Once provider access is working, follow the [current skill installation instructions](https://github.com/goolamabbas/multi-provider-research#install). Keep the complete inner skill folder and supporting files intact. Back up and replace an existing installation instead of overlay-merging; the archive wrapper is not the installable folder.

A configuration entry proves only that the setup was recorded. It does not prove that the provider is reachable, authenticated, callable in the current task, or returning useful evidence.

### Check Alexandria separately when you need it

A Firecrawl connection may expose ordinary search and page extraction without Alexandria. Inspect the callable tools before assuming support. For the MCP workflow, look for `firecrawl_find_tools`, an Alexandria source on `firecrawl_search`, and an `alexandria` execution argument on `firecrawl_scrape`. Other supported integrations may use different names or argument shapes; follow the [official Alexandria guide](https://docs.firecrawl.dev/features/alexandria).

When you need structured provider data, a free targeted catalog query can confirm discovery access. A successful catalog response proves discovery works; a listed provider may still require account access or reviewed terms. Do not execute a paid capability merely to prove installation. Check the selected capability's contract and price when a real task calls for it.

## Installation does not authorize every task

Connecting a provider makes it available; your task instructions determine whether to use it. For native-only work, explicitly exclude external tools and specify what to do if native retrieval fails.

The [prompt library](research-prompts.md) contains a complete native-only prompt. If this restriction must be technically enforced, use a profile with the excluded tools unavailable and review the tool-call record.

## A connected tool may use a different model

A supported provider connection lets the harness-selected model call a provider tool. It does not automatically pass the harness’s model selection into that provider.

| Tool type | Model boundary |
| --- | --- |
| **Search, fetch, or extraction** | The provider returns ranked results or page content. The harness-selected model interprets the result and normally writes the answer. The provider may still use internal ranking or extraction models. |
| **Answer, reasoning, research, or agent** | The provider may run its own model or preset and return generated prose or structured output. The harness-selected model remains the outer orchestrator but is not the only model involved. |

The official Perplexity MCP makes this distinction explicit: Search uses the Search API, while Ask, Reason, and Research use provider-side Agent API presets. Parallel similarly separates its Search MCP from provider-side Task jobs, and Firecrawl exposes retrieval operations separately from its asynchronous Agent. A provider-side model or preset does not inherit the harness model. Inspect the parameter’s purpose: a field named `model_name` may instead be analytics metadata.

If your policy requires the harness-selected model to perform all visible reasoning and synthesis, inspect output modes as well as endpoint names. A retrieval tool can also offer generated summaries or answers. Use:

```
Use provider tools only for search, retrieval, extraction, and page reading.

Do not use Perplexity Ask, Reason, or Research; Exa Agent; Parallel Deep Research or Task Group; Firecrawl Agent; or another provider-side answer or agent endpoint.

Choose source-content or faithful extraction modes. Do not request generated summaries or freeform answers through a fetch or scrape tool.

Have the harness-selected model perform all analysis and final synthesis.

Report any provider-generated synthesis if a tool produces it despite this restriction.
```

For a fuller explanation [Retrieval and provider-side synthesis](choosing-providers.md#retrieval-and-provider-side-synthesis)

## Worked example: enabling all Exa MCP tools in Codex

This is an optional example for one application and access route. It is not a requirement for using Exa or the routing skill; use another officially supported integration when it better fits your application.

Exa’s base MCP endpoint is:

```
https://mcp.exa.ai/mcp
```

It enables these tools by default:

- `web_search_exa`
- `web_fetch_exa`

To expose the following tools, add them explicitly through the endpoint’s `tools` parameter:

- `web_search_advanced_exa`
- `agent_run`

A successfully connected Exa server may therefore lack Advanced Search, Agent, and Exa Connect. Inspect the live tool list instead of assuming that every documented capability was installed.

Exa’s documentation supports OAuth or an API key for Agent. In clients where OAuth cannot complete against a `?tools=...` endpoint, use the official Exa plugin or the client’s environment-backed API-key-header mechanism.

Never place a real API key in a public page, prompt, checked-in file, or shared configuration.

For example, a Codex BYOK configuration requesting all four tools can use:

```toml
[mcp_servers.exa]
url = "https://mcp.exa.ai/mcp?tools=web_search_exa,web_fetch_exa,web_search_advanced_exa,agent_run"
env_http_headers = {"x-api-key" = "EXA_API_KEY" }
```

`EXA_API_KEY` is the name of an environment variable inherited by Codex—not the secret itself.

After changing an MCP configuration, fully restart the client or start a fresh task. Verify that every requested tool is visible and callable.

<a id="verify-ultra-controls-before-starting"></a>

### Verify Ultra controls before starting

An Agent connection can expose `effort: "ultra"` without exposing every direct API control. Inspect the current effort enum, spending and duration fields, and run lifecycle operations. Do not infer access from a provider's documentation or from a successful Search call.

In the MCP schema inspected on September 26, 2026, `agent_run` accepted `ultra`, `runId`, `previousRunId`, `input.data`, and `input.exclusion`, but exposed neither `budget` nor a stop operation. This is a dated observation about that interface, not a permanent limitation of Exa or all integrations. A subsequent [single Ultra run](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/) completed through that interface using the documented default cap; custom budget and stop controls were not tested.

The [direct API](https://exa.ai/docs/reference/agent-api/create-a-run.md) documents `budget.maxCostDollars` and Ultra's soft `budget.maxDurationSeconds` limit; [Ultra's guide](https://exa.ai/docs/agent/agent-ultra.md) also documents graceful stopping. If your required limit cannot be expressed in the available interface, resolve the access or budget choice before starting. Do not silently use the default $20 Ultra cap, invent unsupported arguments, or treat a prompt as an enforced limit.

Retain the run ID and resume that run after an interrupted wait. A client polling timeout does not cancel provider work. Exa's SDK polling helpers default to one hour, which can be shorter than an Ultra run; use supported longer polling or streaming when appropriate. `previousRunId` starts a new follow-up from a completed run and can incur additional charges. It does not resume polling. Check the returned stop reason and actual cost separately from the run's status.

No costly Agent run is necessary merely to check whether these controls are visible. Use the [Ultra decision guide](choosing-providers.md#when-agent-ultra-is-worth-it) before choosing this route.

## Parallel and Firecrawl verification notes

Parallel’s Search MCP and Task MCP are separate services. A harmless installation check should call Search with a narrow objective and short query, then confirm that the completed result contains usable sources. Creating a Deep Research or Task Group run is a substantive asynchronous operation, so tool visibility and schema inspection are usually sufficient until the user asks for that work. Reuse the Search session identifier if Fetch is needed.

Firecrawl’s broad surface makes tool-level verification especially important. A small Map call is a low-cost way to prove that the server is reachable and can return useful official-site URLs without crawling page bodies. Scrape tests one known page; Crawl should be tested only with explicit, conservative path, depth, and page limits. Do not test Interact or Monitor merely to prove installation because those tools can change external state or create recurring work.

These verification choices prove different things. A successful Search or Map confirms current reachability and execution for that operation; it does not prove that every costly, asynchronous, interactive, or recurring tool is authorized or operational.

## Optional project-instruction snippets

These snippets are optional. Merge one into the appropriate section of your existing project-instructions file. Copy only the contents of the code block; retain unrelated instructions.

### Portable snippet

Use this version in `AGENTS.md`, `CLAUDE.md`, or an equivalent file when you want harness-neutral wording.

```markdown
## Provider-aware research

Honor the user's explicit provider, interface, and synthesis restrictions.
For native-only work, do not load the multi-provider-research skill or call external providers; report a native-tool gap without substitution.
Before external research, inspect relevant callable tools and schemas.
Prefer a specialized connected dataset when it materially supplies the requested evidence within the permitted scope.
Verify actual provider contribution from completed results, not configuration or requested provider names.
Use the multi-provider-research skill for research through a named provider, materially matched specialized data, batch enrichment, site extraction, or browser-based evidence gathering.
Do not activate it solely because a task mentions a provider or involves a browser.
Use the minimum sufficient provider set and inspect only relevant schemas; reuse schema knowledge unless the surface changes or validation fails.
Complete independent permitted work when one evidence lane is blocked, while respecting its fallback policy and the selected tool's lifecycle.
Report tools used, contributions, and material limitations proportionally.
```

### Codex snippet

Use this alternative if you prefer Codex’s explicit skill notation. Do not add both versions.

```markdown
## Provider-aware research

Honor the user's explicit provider, interface, and synthesis restrictions.
For native-only work, do not load $multi-provider-research or call external providers; report a native-tool gap without substitution.
Before external research, inspect relevant callable tools and schemas.
Prefer a specialized connected dataset when it materially supplies the requested evidence within the permitted scope.
Verify actual provider contribution from completed results, not configuration or requested provider names.
Use $multi-provider-research for research through a named provider, materially matched specialized data, batch enrichment, site extraction, or browser-based evidence gathering.
Do not activate it solely because a task mentions a provider or involves a browser.
Use the minimum sufficient provider set and inspect only relevant schemas; reuse schema knowledge unless the surface changes or validation fails.
Complete independent permitted work when one evidence lane is blocked, while respecting its fallback policy and the selected tool's lifecycle.
Report tools used, contributions, and material limitations proportionally.
```

## Continue reading

- [Choosing External Research Tools for AI Agents](README.md)
- [Choosing an external research provider](choosing-providers.md)
- [Research prompt examples](research-prompts.md)

## Official setup documentation

- [Exa MCP](https://exa.ai/docs/reference/exa-mcp)
- [Octen MCP](https://docs.octen.ai/integrations/octen-mcp-server)
- [Octen skills](https://docs.octen.ai/integrations/octen-skills)
- [Perplexity MCP](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server)
- [Parallel Search MCP](https://docs.parallel.ai/integrations/mcp/search-mcp)
- [Parallel Task MCP](https://docs.parallel.ai/integrations/mcp/task-mcp)
- [Firecrawl MCP server](https://github.com/firecrawl/firecrawl-mcp-server)
- [Firecrawl Map](https://docs.firecrawl.dev/features/map)
- [Firecrawl Scrape](https://docs.firecrawl.dev/features/scrape)
- [Firecrawl Crawl](https://docs.firecrawl.dev/features/crawl)
- [TinyFish MCP](https://docs.tinyfish.ai/mcp-integration)
- [xurl](https://github.com/xdevplatform/xurl)
- [Codex MCP configuration](https://developers.openai.com/codex/mcp)
- [Codex skills](https://developers.openai.com/codex/skills)
