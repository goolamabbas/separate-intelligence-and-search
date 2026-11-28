# Plan your research budget

[← Start with the introduction](../README.md)

Count three things separately: your AI assistant subscription, your research-provider usage, and local taxes or currency conversion. Free search still consumes your assistant's model allowance when the model reads returned pages and writes an answer.

Because search and intelligence are separate choices, you can start for **$0** on top of the assistant you already use—or pair an affordable regional workspace with generous free search allowances.

[Choosing research tools for your AI assistant](README.md)

## Provider allowances and access

**Published terms checked 28 November 2026.** Confirm current rates in your provider dashboard before running paid research or batch enrichments.

| Provider | Free & keyless access | Paid starting rates (after free tier) | Official pricing |
| --- | --- | --- | --- |
| **Exa** | Keyless MCP Search/Fetch at free rate limits. Free Starter account: **$10/month recurring credits + $10 onboarding bonus, no credit card required** (~2,500 Lite or ~1,400 Auto searches/mo). | Lite Search **$4/1k**, Auto Search **$7/1k**, Contents **$1/1k pages**. Agent runs and Connect partner datasets bill separately. | [Exa Pricing](https://exa.ai/pricing) · [MCP Setup](connecting-providers.md#choose-an-access-route) |
| **Keenable** | Keyless Search/Fetch: **1,000 req/hour per IP**. Free account (no credit card required): **100,000 free requests every month** (resets on signup anniversary). | Pay-as-you-go: **$4/1k requests** after the 100k monthly allowance. Search and Fetch count as 1 credit each; no MCP surcharge. | [Keenable Pricing](https://keenable.ai/pricing) · [MCP Setup](connecting-providers.md#keenable-connection-readiness) |
| **Parallel** | Keyless MCP (`mcp.parallel.ai/mcp`): **no account and no API key** for `web_search`, `web_fetch`, `web_decisions`, fast `image_search`, and verticals at lower limits. Orgs with a card on file get **$5/month free credits**. | Search **`fast`/`turbo` $1/1k**, `basic`/`advanced` **$5/1k**, Extract **$1/1k URLs**. `web_research`, Task Deep Research, and FindAll bill higher per-run rates. | [Parallel Pricing](https://docs.parallel.ai/getting-started/pricing) · [MCP Setup](connecting-providers.md#parallel-connection-readiness) |
| **Octen** | No keyless tier; new accounts receive **$5 one-time free balance** on registration. | Pulse **$0.10–$0.20/1k**, Web/Broad Search **$1/1k** (first 10 full-content results free on pay-as-you-go), Premier/Business/Place **$4–$5/1k**, Extract **$1–$2.50/1k URLs**. | [Octen Pricing](https://docs.octen.ai/overview/pricing) · [MCP Setup](connecting-providers.md#choose-an-access-route) |
| **Perplexity** | No free API tier or keyless MCP. Requires an API organization with billing enabled (consumer Perplexity Pro does not include API/MCP credits). | Search API: Fast Search **$1/1k**, standard Web Search **$5/1k**; Context **$1/1k URLs** (`ok` or `not_modified`). Ask/Reason/Research bill model tokens plus tool fees. | [Perplexity Pricing](https://docs.perplexity.ai/docs/getting-started/pricing) · [MCP Setup](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server) |

For optional authenticated X research, check your X developer account's billing tier and rate limits before running queries. See [authenticated X-native evidence](choosing-providers.md#optional-authenticated-x-native-evidence).

**Rule of thumb on surprise bills:** Ordinary Search and Fetch calls rarely cost more than pennies even after free tiers run out. Where spend adds up quickly is **delegated multi-step research** (Exa Agent Ultra, Parallel Deep Research / FindAll, Perplexity Research) and **paid partner datasets** (Exa Connect, paid Parallel connectors). Always check budget controls and test on 2–3 rows before scaling a batch.

## Low-cost and regional workspace combinations

Separating intelligence from search goes even further in India, Pakistan, and other price-sensitive markets, or whenever you want strong research without paying $20–$200/month. You can start at **$0** on **Claude Free** (directory connectors plus one custom MCP connector) or **ChatGPT Free** (directory plugins, subject to plan limits). When free chat caps run out, do not let the "coding agent" label put off non-programmers: Cursor, Command Code Desktop, and OpenCode Desktop all ship with regular desktop chat interfaces suitable for everyday research, writing, business analysis, and creative work.

Because low-cost workspaces are priced tightly for intelligence, they cannot afford to subsidize heavy built-in web search. Pairing one over MCP with a free-tier search provider (Exa's $10/month recurring credits, Keenable's 100k free monthly requests, or keyless Parallel) upgrades it into a capable everyday research assistant for **$0 extra** on ordinary search and fetch.

- **Zero-cost desktop start & global open-weight plan — OpenCode Desktop (free models, no account) & OpenCode Go (US$10/month):** [OpenCode Desktop](https://opencode.ai/desktop) (macOS, Windows, Linux) includes [free models](https://opencode.ai/) with no account needed, so pairing it with keyless Parallel, Exa, or Keenable gives you a $0 end-to-end desktop research workspace. When you want higher limits across ~30+ open-weight models, [OpenCode Go](https://opencode.ai/docs/console/go) is US$10/month (designed for international users; verify current models and limits in OpenCode Console).
- **Global low-cost option — Command Code Go (US$1/month) & GOAT (US$10/month):** Command Code's [Go plan](https://commandcode.ai/docs/plans/go) ($1/month + processing fee, $6–$10/month of per-model credit usage across 60+ models) and [GOAT plan](https://commandcode.ai/docs/plans/goat) ($10/month + processing fee, up to $100/month of per-model credits) accept UPI for INR, Alipay, WeChat Pay, crypto, and cards ([payment methods](https://commandcode.ai/docs/resources/payment-methods)) and ship as both a [Desktop app](https://commandcode.ai/docs/desktop) and CLI. Pair with free-tier Exa, Keenable, or Parallel MCP retrieval for $0 extra.
- **Cursor — Free, Plus (US$8/month), or legacy Cursor Start (₹649/month for existing India subscribers):** Cursor supports MCP servers, plugins, and skills across plans. Existing India subscribers on legacy [Cursor Start](https://cursor.com/help/account-and-billing/cursor-start) keep ₹649/month (tax inclusive, billed in INR via UPI or card), while new subscribers start on Cursor **Free** or **Plus** ($8/month or $80/year before tax). Pair any Cursor tier with free Exa, Keenable, or Parallel MCP search.

*All workspace plan details and Claude/ChatGPT Free connector rules above were checked on 28 November 2026. Confirm current prices, included model allowances, and local checkout terms before subscribing.*

## See a real delegated-run cost

Want to see what one high-effort delegated research run actually costs in practice? Read [Inside one Exa Ultra research run](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/), which documents one $11.66 run (92 searches, 54 qualifying records) rather than guessing typical prices.

## Continue reading

- [Choosing an external research provider](choosing-providers.md)
- [Connecting and testing providers](connecting-providers.md)
- [Research prompt cookbook](research-prompts.md)
