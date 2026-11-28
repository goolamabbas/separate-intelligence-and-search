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

Separating intelligence from search is an even bigger multiplier when you are in India, Pakistan, or another price-sensitive market, or simply want strong research without stacking $20–$200/month subscriptions. Low-cost coding agents are priced tightly for intelligence and cannot afford to subsidize heavy built-in search, so they often ship with thin or missing web search. Because they support MCP, pairing one with a free-tier search provider (Exa's $10/month recurring credits, Keenable's 100k free monthly requests, or keyless Parallel) upgrades a low-cost workspace into a capable everyday research assistant for **$0 extra** on ordinary search and fetch.

- **India example — Cursor Start (₹649/month, tax included):** Announced [28 July 2026](https://x.com/cursor_ai/status/2081978255004053560) ([launch blog](https://cursor.com/blog/cursor-start-india)), billed in INR via UPI or card, with support for MCP servers, plugins, and skills. Pairing Cursor Start with Exa's $10/month free credits, Keenable's 100k free monthly requests, or keyless Parallel gives you a full research workspace at local pricing. *(India-specific offer; verify current eligibility and limits in your Cursor account.)*
- **Global low-cost option — Command Code Go (US$1/month) & GOAT (US$10/month):** Command Code's [Go plan](https://commandcode.ai/docs/plans/go) and [GOAT plan](https://commandcode.ai/docs/plans/goat) ([payment methods](https://commandcode.ai/docs/resources/payment-methods) include UPI for INR and Alipay for USD) offer low-cost starting model allowances that you can pair with free-tier Exa, Keenable, or Parallel MCP retrieval.

*Regional workspace examples above were checked on 19 September 2026. Confirm current prices, included model allowances, and local checkout terms before subscribing.*

## See a real delegated-run cost

Want to see what one high-effort delegated research run actually costs in practice? Read [Inside one Exa Ultra research run](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/), which documents one $11.66 run (92 searches, 54 qualifying records) rather than guessing typical prices.

## Continue reading

- [Choosing an external research provider](choosing-providers.md)
- [Connecting and testing providers](connecting-providers.md)
- [Research prompt cookbook](research-prompts.md)
