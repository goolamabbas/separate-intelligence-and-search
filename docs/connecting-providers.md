# Installing and testing external research providers

[← Start with the introduction](../README.md)

Connect one search provider to the AI assistant you already use, run one real question, and verify that the provider actually handled the search. You do not need the optional routing skill to use any provider.

**Privacy & billing check before connecting:** When your assistant calls a connected provider, that provider receives the search terms (or URL) your assistant sends. Start with public topics, and check whether your chosen route uses a free allowance or bills an API account. [Compare free tiers and costs](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/#provider-allowances-and-access).

[Choosing research tools for your AI assistant](README.md)

## Quick setup by assistant

Already signed in to your assistant? Pick a route below to try your first free search with no credit card when starting with Exa, Parallel, or Keenable.

### ChatGPT (Web, Desktop, or Codex)

- **Exa (plugin + skills):** Open [chatgpt.com/plugins/exa](https://chatgpt.com/plugins/exa?open_in_app), click Install, and sign in to Exa when prompted (free Starter accounts get $10/month in credits, no card).
- **Parallel (no account required):** Open [Parallel in OpenAI’s directory](https://openai.com/business/plugins/parallel-search/) and click Install to use Search and Fetch without creating a Parallel account.
- **Keenable:** Search for **Keenable** in OpenAI's Plugins Directory, or connect via custom MCP if your workspace supports it.

*Free-plan note:* Directory plugins are available across plans including ChatGPT Free and Go (subject to each plan's usage and feature limits), while adding a custom remote MCP server on ChatGPT web requires higher plans.

### Claude (Web, Desktop, or Cowork)

1. Start a new chat and click **+** (bottom left) -> **Add connector** (or **Customize -> Connectors**).
2. Search for **Exa**, **Parallel**, or **Keenable Web Search** and click **Connect**.
3. Start a new chat and toggle the connector on if needed.

In Claude's directory, **Exa** asks you to sign in to a free account, while **Parallel Search** (`search.parallel.ai/mcp`) lets you search and read pages with no Parallel account. If you later want Parallel's image search or structured-data tools, choose **Add custom connector** and paste `https://mcp.parallel.ai/mcp` (the same custom-connector route works for Perplexity or any other remote MCP server in the table below). *Free-plan note:* Claude Free includes directory connectors plus one custom remote MCP connector, subject to Free message limits.

### Cursor & VS Code

- **One-click marketplace / deeplinks:** Install **Exa** from the [Cursor Marketplace](https://cursor.com/marketplace/exa) (or use the 1-click links on [Exa MCP](https://exa.ai/docs/reference/exa-mcp)), **Parallel** from [parallel.ai/mcp](https://parallel.ai/mcp), or **Keenable** from [docs.keenable.ai/mcp-server](https://docs.keenable.ai/mcp-server).
- **Config file (any MCP provider):** Add the provider's remote URL under `mcpServers` in `~/.cursor/mcp.json` (Cursor) or `servers` in `.vscode/mcp.json` (VS Code).

### Grok Bot / Grok Build

- **Parallel in Grok Bot:** Install via the 1-click plugin link on [parallel.ai/mcp](https://parallel.ai/mcp) (`x.ai/bot/plugin/698`).
- **Exa in Grok Build:** Run `/marketplace`, select **exa**, press `i`, then run `/mcp` to sign in (free monthly credits included).

<span id="claude-code-connect-directly-to-exa"></span>
### Command Code, OpenCode, Claude Code, Codex CLI, and terminal agents

You do not need to be a programmer or use a terminal to use Command Code or OpenCode for everyday research:

- **Command Code Desktop** ([macOS, Windows, Linux](https://commandcode.ai/docs/desktop)): Open the account menu -> **Settings -> MCP**, paste a hosted remote MCP URL (`https://mcp.parallel.ai/mcp` or `https://mcp.exa.ai/mcp`), and test the connection.
- **OpenCode Desktop** ([macOS, Windows, Linux](https://opencode.ai/desktop)): Start with free built-in models (no account needed) or connect a plan, then run `/mcps` in a chat to manage MCP servers (or `/connect` for native web search).

Prefer a terminal? Connect a hosted remote MCP server in one command (no local server process to maintain):

```bash
# Claude Code (keyless; use ?login on Exa for OAuth + Agent)
claude mcp add --transport http parallel https://mcp.parallel.ai/mcp
claude mcp add --transport http exa https://mcp.exa.ai/mcp
claude mcp add --transport http keenable https://api.keenable.ai/mcp

# Command Code (add --scope user for all projects; run /mcp inside a session for OAuth/status)
cmd mcp add --transport http --scope user parallel https://mcp.parallel.ai/mcp
cmd mcp add --transport http --scope user exa https://mcp.exa.ai/mcp

# OpenCode (add --global for all projects; check status with `opencode mcp list` or `/mcps`)
opencode mcp add parallel --global --url https://mcp.parallel.ai/mcp
opencode mcp add exa --global --url https://mcp.exa.ai/mcp
```

- **Codex CLI:** Use `codex mcp add <name> --url <url>` (for keyless Keenable in Codex, use `https://api.keenable.ai/mcp-public`).
- **Claude Code plugin:** Exa is also available as an official plugin (`claude plugin install exa@claude-plugins-official`).
- **OpenCode native web search (quick shortcut vs. MCP):** For quick single-provider lookups without MCP, OpenCode natively supports Exa (`EXA_API_KEY`) and Parallel (`PARALLEL_API_KEY`) via `/connect` or environment variables—see [OpenCode Web Search](https://opencode.ai/docs/websearch/). For multi-page research, government/PDF reading, or combining two providers in one session, connect them via **MCP** instead (see our [OpenCode A/B/C worked example](https://goolamabbas.github.io/separate-intelligence-and-search/guide/india-saas-case-study/#what-mcp-two-providers-and-v0120-changed)).
- **Keyless vs. OAuth note:** Keyless endpoints (`mcp.parallel.ai/mcp`, `mcp.exa.ai/mcp`, `api.keenable.ai/mcp`) connect without signing in. If a client flags `needs authentication` or you want an account's free monthly allowance, switch to the `?login` URL and sign in via `/mcp` (Command Code) or `/mcps` (OpenCode). Note that Command Code hides MCP tools while in `plan` mode.

## Verify it actually ran

An installed connector can still be bypassed if your assistant quietly falls back to its built-in web search. Start a **fresh chat** and paste this ready-to-run prompt (works with any connected search provider):

```text
Use my connected external search provider (not built-in web search) to build a market map of 10 UK startups founded in 2023 or later with fewer than 50 employees building AI tools for compliance, KYC/AML, or accounting teams. For each company, give the website, founding year, employee count, 1-year headcount growth if available, and a 1-sentence summary of what the product does. If no external search provider is connected, stop and tell me instead of falling back to built-in search.
```

**How to confirm it worked:**
- Look at the tool activity pill above the answer: you should see the provider's name (such as **Exa**, **Parallel**, or **Keenable**) or a tool name like `web_search_exa`, `web_search`, or `search_web_pages`—not a generic "Searched the web" label.
- Open two returned links and verify the company details match what the assistant wrote.

## Choose an access route

<span id="keenable-connection-readiness"></span>
<span id="parallel-connection-readiness"></span>
<span id="octen-setup"></span>
Every provider below offers a hosted remote MCP server, which is the simplest cross-app setup because you do not need to run a local process.

| Provider | Hosted MCP URL | Auth & free-access boundary | Official setup docs |
| --- | --- | --- | --- |
| **Exa** | `https://mcp.exa.ai/mcp` (`?login` for OAuth) | Keyless Search/Fetch at free limits (requires direct IPv4). Free account gives **$10/mo credits + $10 bonus (no card)** and unlocks Agent. | [Exa MCP](https://exa.ai/docs/reference/exa-mcp) |
| **Parallel** | `https://mcp.parallel.ai/mcp` (`?login` for OAuth) | **No key / no account** for Search, Fetch, Decisions, fast Image Search, and Verticals. Sign in for `web_research` ($5/mo credits with card on file). | [Parallel MCP](https://docs.parallel.ai/integrations/mcp/quickstart) |
| **Keenable** | `https://api.keenable.ai/mcp` (`/mcp-oauth` for browser sign-in; `/mcp-public` for keyless Codex/Antigravity) | Keyless: **1,000 req/hr per IP**. Free account (no card): **100,000 req/mo** plus Monitors tools. | [Keenable MCP](https://docs.keenable.ai/mcp-server) |
| **Octen** | `https://mcp.octen.ai/mcp` | Requires account sign-in or API key. New accounts start with **$5 free balance**. | [Octen MCP](https://docs.octen.ai/integrations/octen-mcp-server) |
| **Perplexity** | `https://api.perplexity.ai/mcp` | Requires OAuth sign-in or API key billed to a **funded API organization** (consumer Pro does not cover MCP/API). | [Perplexity MCP](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server) |
| **X (optional)** | `https://api.x.com/mcp?read_only=true` or `xurl` | Read-only MCP omits write tools; requires X OAuth scopes and developer account billing. | [X MCP](https://docs.x.com/tools/mcp) · [xurl](https://github.com/xdevplatform/xurl) |

### Troubleshooting the 3 most common hiccups

1. **Assistant still used built-in search:** Start a brand-new chat, confirm the connector is toggled on in that chat, and name the provider explicitly in your prompt (e.g., *"Use Exa Search..."*).
2. **403 / 429 on keyless Exa MCP:** Keyless Exa requires direct IPv4 and uses shared free rate limits. Switch to OAuth (`https://mcp.exa.ai/mcp?login`) or create a free API key ($10/mo credits, no card).
3. **Tools missing after editing a config file:** Fully restart your app or reload MCP servers, and check whether an explicit `?tools=...` query parameter replaced the server's default tool list.

## Advanced setup (coding agents, custom MCP, and project rules)

Skip this section if 1-click connectors already cover what you need.

### Provider CLIs & custom MCP options

- **Provider CLIs:** Coding agents with terminal access can combine MCP with a provider's CLI (for example, [Parallel CLI](https://docs.parallel.ai/integrations/cli) for `FindAll` list-building or `keenable configure-mcp --all` to wire up multiple editors at once).
- **Custom tool lists & headers:** Both Exa (`?tools=web_search_exa,web_fetch_exa,web_search_advanced_exa,agent_run`) and Parallel (`?tools=...` plus the `x-parallel-mcp-config` header for session-wide overrides) let power users customize exposed tools and defaults. Keep API keys in environment variables, never in prompts or checked-in repo files.
- <span id="verify-ultra-controls-before-starting"></span>**Budget controls for delegated runs:** Before launching high-effort provider research (such as Exa Agent Ultra or Parallel Deep Research), inspect whether your MCP integration exposes budget or stop controls. A spending cap written in prompt text is not an enforced API limit.

### Optional `AGENTS.md` / `CLAUDE.md` snippet

If you use a coding agent with the optional `multi-provider-research` skill, you can add this short block to your project instructions file (`AGENTS.md` or `CLAUDE.md`) so the agent respects provider restrictions and skips the skill on unrelated coding tasks:

```text
## Provider-aware research

- Honor explicit provider, interface, and synthesis restrictions (including native-only requests).
- Use the multi-provider-research skill for external research, named-provider tasks, specialized datasets, or batch enrichment—not merely because a prompt mentions a provider or browser.
- Inspect live tool schemas before calling a provider, use the smallest sufficient provider set, avoid duplicate reads, and report tools used and material gaps concisely.
```

*(If you use Codex's explicit skill syntax, replace `multi-provider-research` with `$multi-provider-research`.)*

## Continue reading

- [Choosing an external research provider](choosing-providers.md)
- [Research prompt cookbook](research-prompts.md)
- [Plan your research budget](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/)

## Official setup documentation

- [Exa MCP](https://exa.ai/docs/reference/exa-mcp)
- [Parallel MCP](https://docs.parallel.ai/integrations/mcp/quickstart)
- [Keenable MCP](https://docs.keenable.ai/mcp-server)
- [Octen MCP](https://docs.octen.ai/integrations/octen-mcp-server)
- [Perplexity MCP](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server)
- [xurl (X CLI)](https://github.com/xdevplatform/xurl)
- [Codex MCP docs](https://developers.openai.com/codex/mcp)
- [Claude Code MCP docs](https://code.claude.com/docs/en/mcp)
- [Command Code MCP docs](https://commandcode.ai/docs/mcp) · [Command Code Desktop](https://commandcode.ai/docs/desktop)
- [OpenCode MCP docs](https://opencode.ai/docs/mcp-servers/) · [OpenCode Desktop](https://opencode.ai/desktop)
- [OpenCode Web Search docs](https://opencode.ai/docs/websearch/)
