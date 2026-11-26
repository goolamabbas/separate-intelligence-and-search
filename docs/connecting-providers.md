# Installing and testing external research providers

Connect a research provider to the AI assistant you already use and check that it returns useful results. You can try the setup and starter prompts before deciding whether to add the optional `multi-provider-research` skill.

Choose a provider for one useful question, then check that your application supports the required connection and tools before paying. Provider charges are separate from your AI subscription; check current pricing for the operation you intend to use.

The optional skill is a routing layer. It tells an agent which provider to use and how to preserve evidence, but it does not create provider access.

**Setup overview checked:** 11 November 2026 against the linked provider documentation. This is not an end-to-end test of each connection. Historical tests below retain their own dates; endpoints, authentication and tool availability can change.

[Choosing research tools for your AI assistant](README.md)

## On this page

- [ChatGPT: try the Parallel app](#chatgpt-try-the-parallel-app)
- [Claude Code: connect directly to Exa](#claude-code-connect-directly-to-exa)
- [Install only what you need](#install-only-what-you-need)
- [Choose an access route](#choose-an-access-route)
- [Installation and verification checklist](#installation-and-verification-checklist)
- [Installation does not authorize every task](#installation-does-not-authorize-every-task)
- [A connected tool may use a different model](#a-connected-tool-may-use-a-different-model)
- [Worked example: enabling all Exa MCP tools in Codex](#worked-example-enabling-all-exa-mcp-tools-in-codex)
- [Verify Perplexity Context](#verify-perplexity-context)
- [Parallel verification notes](#parallel-verification-notes)
- [Read-only X research](#read-only-x-research)
- [Optional project-instruction snippets](#optional-project-instruction-snippets)
- [Continue reading](#continue-reading)
- [Official setup documentation](#official-setup-documentation)

## ChatGPT: try the Parallel app

1. Open the [Parallel listing in OpenAI’s directory](https://openai.com/business/plugins/parallel-search/) and choose the install option. Review the permissions and follow any connection prompts. If Parallel is already installed, go straight to the next step.
2. Start a new chat in ChatGPT Work with Parallel enabled. Try this public question. Parallel receives the search query.

```text
Use Parallel Search to find the official WordPress note about the upgrade to WordPress 6.6. What was the minimum PHP version it required? Link to the note. If Parallel is unavailable, tell me.
```

**Check what ran.** Look at the activity for this answer. A completed search attributed to **Parallel** confirms the app handled it. If your view shows individual tool names, look for `web_search` under Parallel. A generic “searched the web” label leaves the provider unclear. If the activity is unclear, select Parallel explicitly in a new chat and retry. The result to check is **PHP 7.2.24** in the [WordPress developer note](https://make.wordpress.org/core/2024/04/08/dropping-support-for-php-7-1/).

## Claude Code: connect directly to Exa

1. In a terminal, open the folder where you use Claude Code. Run this command there to add Exa for your own use in that folder. Exa offers limited search access without an API key. [Exa’s hosted MCP](https://exa.ai/docs/reference/exa-mcp) · [Claude Code’s connection instructions](https://code.claude.com/docs/en/mcp)

```sh
claude mcp add --transport http exa https://mcp.exa.ai/mcp
```

2. Start `claude` in that same folder. Type `/mcp` and check that **exa** shows as connected. If you already have that connection, you can start here.
3. Paste this question. If Claude asks for permission to use Exa Search, approve it for this search.

```text
Use Exa Search to find the original Acquired interview with Nvidia CEO Jensen Huang from October 2023. Give me the episode title and the link to its transcript. If Exa is unavailable, say so.
```

**Check what ran.** Find the tool call above Claude’s answer and expand its details if needed. Look for the **exa** server and **web_search_exa** returning a result. In a transcript the full name can appear as `mcp__exa__web_search_exa`. The expected result is Acquired’s [NVIDIA CEO Jensen Huang](https://www.acquired.fm/episodes/jensen-huang). The `/mcp` screen tells you the connection is ready. The completed search tells you Claude used it for this answer.

## Install only what you need


You can try a provider without installing the routing skill. Connect a provider that fits your first task, verify it, and add others only when a distinct need arises.

Use providers that are callable, permitted, and relevant. A required provider must be attempted for its assigned role; “only” or “exactly” restricts the permitted set. If a required provider is unavailable, report the gap and follow the stated fallback policy.

## Choose an access route

Look for the provider in your assistant’s apps or connectors. If it’s listed, follow its setup instructions. Some assistants use MCP, a standard way to connect an assistant to outside tools. The table below links to the supported route for each provider and explains when you may need to sign in or pay for usage.

Once connected, return to the question you chose or [try the release-notes prompt](research-prompts.md#one-question-without-the-skill). A working connection should give you a source you can open and check. [Other ways to connect](#other-connection-options)

| Provider | First route to try | Access and capability boundary |
| --- | --- | --- |
| **Exa** | [Official plugin or hosted MCP](https://exa.ai/docs/reference/exa-mcp) at `https://mcp.exa.ai/mcp` | Search/Fetch can be tried keyless at free rate limits. OAuth (`?login`) or an API key enables Agent by default; Advanced Search is opt-in. An explicit tool list replaces defaults. |
| **Keenable** | [Hosted MCP](https://docs.keenable.ai/mcp-server); choose the [endpoint for your access route](#keenable-connection-readiness) | Search/Fetch can run keyless at shared limits; sign-in or a key uses organization credits. Public schemas can omit mode selection. |
| **Octen** | [Hosted MCP](https://docs.octen.ai/integrations/octen-mcp-server) at `https://mcp.octen.ai/mcp` | Follow the documented sign-in or API-key route for your client. An account and API usage balance apply. Video Search requires early-access entitlement; a visible tool alone does not establish access. |
| **Perplexity** | [Recommended hosted MCP](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server) at `https://api.perplexity.ai/mcp` | OAuth sign-in or bearer API key; calls bill the selected API organization/key. Context is supported by the hosted server and requires v1.5.0 or later on the local server. |
| **Parallel** | [Parallel app in ChatGPT](https://openai.com/business/plugins/parallel-search/) or [direct hosted MCP](#parallel-connection-readiness) | The app supplies tools through its connection. The direct hosted MCP offers keyless Search/Fetch at lower limits. Check the selected connection for the operations you need. |
| **X (optional)** | [xurl](https://github.com/xdevplatform/xurl) or the [official read-only MCP](#read-only-x-research) | Check authentication, required read scopes and which developer account pays for usage. |

See [allowances and charging boundaries](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/#provider-allowances-and-access) before adding funds. The links above are documentation and setup routes, not confirmation that every tool is available in your account.

<a id="keenable-connection-readiness"></a>

### Keenable connection readiness

Keenable documents `https://api.keenable.ai/mcp` for usual API-key setups, `/mcp-oauth` for browser sign-in and `/mcp-public` for keyless Codex or clients that have trouble with OAuth discovery. Inspect the actual tools: `search_web_pages` and `fetch_page_content`. The public endpoint can omit `mode`; do not copy unsupported options from another interface. Complete a useful read to confirm execution. [Endpoint and client guidance](https://docs.keenable.ai/mcp-server)

For source-only research, set `disable_cards: true` on Search and leave Fetch's `prompt` unset. Generated cards and prompted Fetch are provider-written output. Use task instructions to choose Keenable; adding it does not require disabling native search or configuring every application.

### Remote MCP

A remote MCP server needs a server URL; some offer limited keyless access, while others require sign-in or an API key. The provider operates and updates the server, so the reader does not need to keep a local process running. It is often the simplest portable starting point.

### Local or stdio MCP

Use a local MCP server when:

- the provider does not offer a suitable remote endpoint;
- the application supports only local MCP processes;
- a pinned local version or direct local control is important.

### Plugin or connector

A marketplace plugin or connector can be the simplest option when it bundles the provider connection, skills, and safety guidance. You must still inspect the tools it exposes after installation.

<a id="other-connection-options"></a>

### Other ways to connect

#### If your coding assistant can run terminal commands

Any compatible coding agent can use both MCP and a provider’s command-line tool (CLI). Check each route in the current session. For MCP, confirm the enabled connection exposes the required tool. For a CLI, confirm the command is available to the agent and has the account, network and execution access it needs. Check the installed version’s help for supported commands and flags.

Use the route that supplies the operation or controls you need. For example, use Parallel’s MCP Fetch to read a supplied page. For a task that calls for a list of companies meeting explicit criteria, consider Parallel CLI’s FindAll if the operation and its charges fit the task. Reuse sufficient evidence when both routes cover the same job. [Parallel CLI](https://docs.parallel.ai/integrations/cli) · [Parallel MCP tools](https://docs.parallel.ai/integrations/mcp/quickstart#tools)

#### Provider skill

A provider-specific skill can teach a compatible agent to use that provider’s CLI or supply scripts for a supported connection. Check its prerequisites and the actual tools it makes available. The optional skill in this guide gives your assistant reusable instructions for research across its available tools.

#### Direct API or command-line access

Follow the provider’s CLI or API documentation for setup, authentication and parameters. Use credentials through the supported secret or account mechanism. If you are building research into your own product, use the provider’s developer docs for programmatic MCP, direct API and SDK integration. [Example developer overview from Parallel](https://docs.parallel.ai/integrations/developer-quickstart)

## Installation and verification checklist

1. Choose one supported connection for the task. Start with the official app, plugin or connector if it covers the tools you need.
2. Use keyless access when it covers the task, or create/sign in to the required provider account.
3. If an API key is needed, store it using the application’s secret, environment-variable, or credential-management mechanism.
4. Restart the application or begin a fresh task when required.
5. Inspect the live tool list and the schemas of the tools you intend to use.
6. Run one harmless search, fetch, or read-only lookup. A useful first research read can serve as this check; do not add a duplicate probe when access is already established.
7. Distinguish configuration, reachability, authentication, successful execution, and useful evidence.
8. **Optional:** once provider access is working and you have inspected its sources, follow the [current skill installation and update instructions](https://github.com/goolamabbas/multi-provider-research#install). Installing the skill requires compatible skill support and file access, not just a provider connection. The instructions include a one-line request your coding agent can follow to install the skill, plus a manual alternative.

A configuration entry proves only that the setup was recorded. It does not prove that the provider is reachable, authenticated, callable in the current task, or returning useful evidence.

## Installation does not authorize every task

Connecting a provider makes it available; your task instructions determine whether to use it. For native-only work, explicitly exclude external tools and specify what to do if native retrieval fails.

The [prompt library](research-prompts.md) contains a complete native-only prompt. If this restriction must be technically enforced, use a profile with the excluded tools unavailable and review the tool-call record.

## A connected tool may use a different model

Connecting a provider does not pass your selected model into that provider’s own analysis tools. Use the [full explanation and examples](choosing-providers.md#retrieval-and-provider-side-synthesis) to distinguish source retrieval from provider-generated analysis.

If your policy requires the model selected in your application to perform all visible reasoning and synthesis, inspect output modes as well as endpoint names. A retrieval tool can also offer generated summaries or answers. Use:

```
Use provider tools only for search, retrieval, extraction, and page reading.

Do not use Octen News storylines; Keenable generated cards or prompted Fetch; Perplexity Ask, Reason, or Research; Exa Agent; Parallel web_research, Decisions, Deep Research or Task Group; or another provider-side answer or agent endpoint.

Choose source-content or faithful extraction modes. Do not request generated summaries or freeform answers through a fetch or scrape tool. Disable provider-generated summaries, storylines, cards and answers when enabled by default. If a required control is unavailable, report the limitation and use another permitted source-content operation when sufficient.

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

The documentation checked on 11 November 2026 enables `web_search_exa` and `web_fetch_exa` by default. With OAuth or an API key, `agent_run` is also enabled by default. `web_search_advanced_exa` is opt-in.

For browser sign-in, use `https://mcp.exa.ai/mcp?login`. If your client cannot complete OAuth, use its supported API-key mechanism. Keyless access has free rate limits and network restrictions; see the [official troubleshooting guidance](https://exa.ai/docs/reference/exa-mcp#troubleshooting) if it fails.

An explicit `tools` list replaces the defaults: include every tool you want. A successful basic connection does not establish access to Agent, Connect datasets or every Advanced Search option. Inspect the tools exposed in your application.

Never place a real API key in a public page, prompt, checked-in file, or shared configuration.

For example, a Codex BYOK configuration requesting all four tools can use:

```toml
[mcp_servers.exa]
url = "https://mcp.exa.ai/mcp?tools=web_search_exa,web_fetch_exa,web_search_advanced_exa,agent_run"
env_http_headers = {"x-api-key" = "EXA_API_KEY" }
```

`EXA_API_KEY` is the name of an environment variable inherited by Codex—not the secret itself.

After changing an MCP configuration, fully restart the client or start a fresh task. Verify that every requested tool is visible and callable.

### Check Exa Library content controls

Ordinary Exa Search can retrieve Library records; accessing a collection does not itself require Agent or Connect. Check whether your current interface exposes domain/category filters, search-time text and structured response fields. Direct API examples are not connector schemas.

For Places, request text during Search because later Fetch is unreliable. The direct API uses `contents.text`; the Advanced Search interface inspected on 10 November 2026 exposes `textMaxCharacters`, while regular Search exposes no explicit content option. Use the supported control and inspect the returned text. If the required content is unavailable, report the gap rather than inventing an argument. A schema check does not establish that every Library collection works through that interface. [Places documentation](https://exa.ai/library/place) · [Library and retrieval guidance](choosing-providers.md#request-places-content-during-search)

### Verify Perplexity Search types

API support and connector support can differ. Inspect the live `perplexity_search` schema for `search_type` before requesting `"fast"` or `"web"`; do not assume every client exposes it.

On **27 September 2026**, our Perplexity MCP connection exposed both values. A call with `query: "opus 5.5 release"`, `search_type: "fast"`, and `max_results: 3` succeeded and returned three results, including Claude platform documentation and Reuters. This verifies an accepted explicit Fast Search request and useful retrieval through that connection. The result did not expose backend or billing telemetry, so this was not an independent latency or billing audit.

Omitting the parameter retains standard `web` search. Fast Search is a Search API retrieval option, not Ask's Agent API `fast` preset. Read the [selection guidance](choosing-providers.md#fast-or-standard-search) and [official documentation](https://docs.perplexity.ai/docs/search/fast-search), then try the [Perplexity Search prompt](research-prompts.md#perplexity-search), which selects supported search types and discloses availability limits.

<a id="verify-ultra-controls-before-starting"></a>

### Verify Ultra controls before starting

An Agent connection can expose `effort: "ultra"` without exposing every direct API control. Inspect the current effort enum, spending and duration fields, and run lifecycle operations. Do not infer access from a provider's documentation or from a successful Search call.

In the MCP schema inspected on 26 September 2026, `agent_run` accepted `ultra`, `runId`, `previousRunId`, `input.data`, and `input.exclusion`, but exposed neither `budget` nor a stop operation. This is a dated observation about that interface, not a permanent limitation of Exa or all integrations. A subsequent [single Ultra run](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/) completed through that interface using the documented default cap; custom budget and stop controls were not tested.

The [direct API](https://exa.ai/docs/reference/agent-api/create-a-run.md) documents `budget.maxCostDollars` and Ultra's soft `budget.maxDurationSeconds` limit; [Ultra's guide](https://exa.ai/docs/agent/agent-ultra.md) also documents graceful stopping. If your required limit cannot be expressed in the available interface, resolve the access or budget choice before starting. Do not silently use the default $20 Ultra cap, invent unsupported arguments, or treat a prompt as an enforced limit.

Retain the run ID and resume that run after an interrupted wait. A client polling timeout does not cancel provider work. Exa's SDK polling helpers default to one hour, which can be shorter than an Ultra run; use supported longer polling or streaming when appropriate. `previousRunId` starts a new follow-up from a completed run and can incur additional charges. It does not resume polling. Check the returned stop reason and actual cost separately from the run's status.

No costly Agent run is necessary merely to check whether these controls are visible. Use the [Ultra decision guide](choosing-providers.md#when-agent-ultra-is-worth-it) before choosing this route.

## Verify Perplexity Context

Check for `perplexity_context` when you need to read a known URL. Perplexity documents support on the hosted MCP and local version 1.5.0 or later. On 26 November 2026, a two-URL live request to Context returned both documentation pages with individual `ok` statuses. Check your organization’s batch and usage limits, and use the [Context prompt](research-prompts.md#perplexity-context) for a useful first read. [Perplexity MCP setup](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server)

## Parallel verification notes

<a id="parallel-connection-readiness"></a>

### Parallel connection readiness

**Using ChatGPT desktop? Start with the Parallel app from the plugin directory.** It’s the simplest way to try Search and Fetch, which work without a Parallel account. The listing also describes Decisions and asks you to connect a Parallel account for Research. Start with one useful question and check which tools your chat exposes. [Parallel app listing](https://openai.com/business/plugins/parallel-search/)

Consider the direct hosted MCP when you need a specific operation missing from the app, such as a supported dataset lookup, or when you need to configure which tools or search controls the connection exposes. Your client must support the chosen setup. For ChatGPT, check the custom MCP instructions and your workspace permissions before adding a server. [Custom MCP setup in ChatGPT](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt)

| Connection | What we verified on 26 November 2026 |
| --- | --- |
| **Parallel app in ChatGPT** | A Codex chat in ChatGPT desktop ran the app’s dedicated `flight_search` and `product_search` tools. One sample fare search returned 20 itineraries with booking links, and one product search returned two priced merchant listings. The two dataset tools below were absent from the app’s tool list in that chat. Availability in other modes, workspaces or clients remains unverified. |
| **Direct hosted Parallel MCP** at `https://mcp.parallel.ai/mcp` | An anonymous connection listed `web_search`, `web_fetch`, `web_decisions`, `image_search`, `find_verticals` and `search_vertical` among its tools. It returned ClinicalTrials.gov discovery results. A separate check on 11 November retrieved one registry record. |

The app can supply its own tools even when a separately configured Parallel MCP server is disabled. [Hosted MCP installation guide](https://docs.parallel.ai/integrations/mcp/installation)

#### Direct hosted MCP setup

1. **Connect and authenticate as needed.** Search, Fetch, Decisions and fast-mode Image Search work without a key at lower rate limits. For authenticated research and higher limits, use OAuth at `https://mcp.parallel.ai/mcp?login`, or a securely stored API key in a supported client header. Authenticated calls are billed to your Parallel account after applicable free usage. Account funds do not replace dataset entitlements.
2. **Inspect the tools actually exposed.** The quickstart explains five core web tools in its table and separately lists `find_verticals` and `search_vertical` among the default tools. Check the selected host, authentication and tool list. A `tools` URL parameter replaces the default list, so include every operation needed. [Hosted MCP quickstart](https://docs.parallel.ai/integrations/mcp/quickstart#tools)
3. **Check the control you need.** Per-call MCP arguments, authenticated connection settings and direct API request fields are different surfaces. The `x-parallel-mcp-config` JSON header supports `override` values enforced for every call and `model_choice` paths exposed to the agent. Overrides apply last. Custom-header support is required; reconnect and inspect the resulting schema after a configuration change.
4. **Verify relevant data access.** If the connection exposes both dataset tools, use `find_verticals` to inspect a matching operation’s schema and price. Use `search_vertical` for a bounded lookup when the match, access and cost fit the task. For research connectors, check supported selection, effort and organization access. If access fails, report the precise missing capability and available setup route rather than assuming the dataset does not exist.
5. **Inspect the result.** Confirm usable evidence and actual source contribution, not just tool visibility. Preserve returned usage and limitations. Some client wrappers omit billing metadata; do not interpret missing cost as zero.

For web retrieval and supported dataset lookups through the direct hosted MCP, request these tools:

```text
https://mcp.parallel.ai/mcp?tools=web_search,web_fetch,find_verticals,search_vertical
```

For authenticated same-call research, include `web_research` and use the authenticated connection. Do not change a user's configuration merely because a broader list is possible.

#### Enable research connectors deliberately

**Advanced setup for authenticated hosted MCP.** Use the example below when your client supports custom headers and your research needs these connectors. The `x-parallel-mcp-config` value enables two documented free research connectors and fixes a compatible effort level.

```json
{
  "web_research": {
    "override": {
      "reasoning": { "effort": "medium" },
      "data_sources": { "free": ["clinical_trials", "pubmed"] }
    }
  }
}
```

This is connection configuration, not an argument to the default `web_research` tool. The connectors have no connector fee, but research still has its own usage charge. Account rollout and access rules still apply. If users want the agent to select supported connectors per call, `model_choice` can expose `data_sources`; inspect the resulting argument schema rather than guessing its shape. Do not add Index Partner names to this field. For licensed/private sources, use the supported Task/Responses BYOL interface; the MCP configuration header rejects research tool overrides containing credentials. [Connector access and restrictions](https://docs.parallel.ai/resources/data-connectors)

#### Preferences and enforced controls

“Prefer official sources” belongs in a search objective. A requirement to retrieve only from particular domains needs a supported source-policy control or verified connection override. A `site:` query or filtering citations afterward is not equivalent enforcement. If the required restriction cannot be enforced, stop that restricted retrieval and explain the configuration gap. Source-policy date filters can exclude older but still-applicable legal authority. [Source Policy](https://docs.parallel.ai/resources/source-policy)

The current MCP defaults Search to `fast`; configuration can select another supported mode. Session IDs and optional client-model metadata should be supplied only when the current schema accepts them. Session IDs correlate calls, not guaranteed memory or duplicate suppression.

**Earlier hosted MCP check, 11 November 2026:** Search accepted only `objective` and `search_queries`; Fetch accepted URLs and retrieval options, but neither accepted session or model metadata. Research exposed input, effort and previous response ID, with no `data_sources` argument. Specialized discovery and one ClinicalTrials.gov lookup succeeded; the record was truncated. We did not change configuration, validate connector overrides, run paid research or test licensed sources. See the [capability guide](choosing-providers.md#parallel).

For asynchronous reports and list enrichment, use the [Task MCP](https://docs.parallel.ai/integrations/mcp/task-mcp), Task API or CLI when that workflow is needed. Inspect their schemas separately; do not launch a report merely to prove installation.

## Read-only X research

For research-only use with the official X MCP, connect to `https://api.x.com/mcp?read_only=true`. X omits write tools from this connection and refuses write calls even if the token has write scopes. Read operations still require the appropriate OAuth scopes. If you use a personal and a team developer account, verify the account linked to the app for credits and billing. Authenticated [xurl](https://github.com/xdevplatform/xurl) is also a suitable read route. [X MCP setup](https://docs.x.com/tools/mcp) · [Developer account switching](https://devcommunity.x.com/t/announcement-multi-account-support/281774)

## Optional project-instruction snippets

These snippets are optional. Merge one into the appropriate section of your existing project-instructions file. Copy only the contents of the code block; retain unrelated instructions.

### Portable snippet

Use this version in `AGENTS.md`, `CLAUDE.md`, or an equivalent file when you want application-neutral wording.

```markdown
## Provider-aware research

Honor the user's explicit provider, interface, and synthesis restrictions.
For native-only work, do not load the multi-provider-research skill or call external providers; report a native-tool gap without substitution.
Before external research, inspect relevant callable tools and schemas.
Prefer a specialized connected dataset when it materially supplies the requested evidence within the permitted scope.
Verify actual provider contribution from completed results, not configuration or requested provider names.
Use the multi-provider-research skill for research through a named provider, materially matched specialized data, batch enrichment, or external source retrieval.
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
Use $multi-provider-research for research through a named provider, materially matched specialized data, batch enrichment, or external source retrieval.
Do not activate it solely because a task mentions a provider or involves a browser.
Use the minimum sufficient provider set and inspect only relevant schemas; reuse schema knowledge unless the surface changes or validation fails.
Complete independent permitted work when one evidence lane is blocked, while respecting its fallback policy and the selected tool's lifecycle.
Report tools used, contributions, and material limitations proportionally.
```

## Continue reading

- [Choosing research tools for your AI assistant](README.md)
- [Choosing an external research provider](choosing-providers.md)
- [Research prompt examples](research-prompts.md)

## Official setup documentation

- [Keenable MCP](https://docs.keenable.ai/mcp-server)
- [Exa MCP](https://exa.ai/docs/reference/exa-mcp)
- [Octen MCP](https://docs.octen.ai/integrations/octen-mcp-server)
- [Octen skills](https://docs.octen.ai/integrations/octen-skills)
- [Perplexity MCP](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server)
- [Parallel unified MCP](https://docs.parallel.ai/integrations/mcp/quickstart)
- [Parallel Task MCP](https://docs.parallel.ai/integrations/mcp/task-mcp)
- [xurl](https://github.com/xdevplatform/xurl)
- [Codex MCP configuration](https://developers.openai.com/codex/mcp)
- [Codex skills](https://developers.openai.com/codex/skills)
