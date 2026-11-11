# Plan your research budget

Count three things separately: your application or model plan, research-provider charges, and local taxes or currency conversion. Free retrieval still uses your assistant’s model allowance.

These are dated examples to help you compare options, not a promise of current prices or availability in your account. Prices and availability may have changed since these checks.

## Start with what you already have

If your current application supports the tools you need, try one useful task before adding subscriptions. Try a [starter prompt](research-prompts.md#four-starters) and inspect the sources it returns.

## Provider allowances and access

**Access and allowance guidance checked 11 November 2026.** These are published terms, not measured bills or a guarantee of access in every application. Each setup link explains the supported connection; check your account before a paid operation.

| Provider | How to try it | What can incur charges | Setup and terms |
| --- | --- | --- | --- |
| **Exa** | Keyless MCP Search/Fetch at free rate limits. Account credits are separate: $10 on signup, reset to $10 monthly; completing onboarding earns the first team a one-time $10 bonus. | Authenticated API usage consumes credits; Agent and Connect have their own usage and data charges. | [Connect Exa](connecting-providers.md#choose-an-access-route) · [MCP access](https://exa.ai/docs/reference/exa-mcp) · [Pricing](https://exa.ai/docs/reference/pricing) |
| **Keenable** | Keyless Search/Fetch: 1,000 requests/hour and up to 10 requests/second per IP per endpoint, shared with other users of that IP. Authenticated organizations receive 100,000 free requests monthly. | Standard pay-as-you-go: $4 per 1,000 after the allowance. Search and Fetch are separate calls; the four standard SKUs currently use one credit each. MCP has no separate surcharge. | [Connect Keenable](connecting-providers.md#keenable-connection-readiness) · [Pricing](https://keenable.ai/pricing) · [Credits](https://docs.keenable.ai/credits) · [Limits](https://docs.keenable.ai/rate-limits) |
| **Octen** | New accounts receive $5 in free balance. Connect through the supported hosted MCP route. | API usage draws from the balance. Broad Search can make several billable subqueries; optional plans have separate terms. | [Connect Octen](connecting-providers.md#choose-an-access-route) · [Pricing](https://docs.octen.ai/overview/pricing) |
| **Perplexity** | Sign in to the hosted MCP or supply an API key. Sign-in is an access route, not a free-use promise. | Tool calls are billed at standard API rates to the chosen organization or API key; your assistant subscription does not establish API credit. | [Hosted MCP and billing](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server) |
| **Parallel** | Keyless MCP Search/Fetch at lower rate limits. | Authenticated calls use API pricing after applicable free usage. Research and specialized data can have different charges; inspect the selected operation. | [Connect Parallel](connecting-providers.md#parallel-connection-readiness) · [MCP access and billing](https://docs.parallel.ai/integrations/mcp/quickstart) |

Keenable's allowance resets on the organization's monthly anniversary date. Its $1-per-1,000 dedicated-capacity price requires 100+ requests per second and is not the standard pay-as-you-go tier. Check account terms and exposed usage; missing billing metadata does not mean zero cost.

Start with the capability your question needs. A keyless connection may expose only basic tools; a free retrieval allowance does not cover every research or automation operation. Your assistant's model usage still applies.

For optional authenticated X research, check the selected interface's billing and result limits before running a query. This page does not estimate X charges or assume who pays through a third-party connector. See [X-native evidence](choosing-providers.md#optional-authenticated-x-native-evidence).

## Regional application examples

These retain their original dated source checks; the November access refresh above does not reverify these application offers.


Choosing these parts separately also lets you explore combinations that fit your budget. This can be especially useful in India, Pakistan, and other emerging markets, or anywhere you want to get more from what you already spend. A coding-oriented application can serve as a workspace for research and everyday assistance when it supports the necessary skills and tools.

**For readers in India, Cursor Start is a useful example.** Cursor [announced the plan on 28 July 2026](https://x.com/cursor_ai/status/2081978255004053560). Its [launch blog](https://cursor.com/blog/cursor-start-india) lists **₹649/month, including tax**, billed in INR with UPI or card, along with more agent requests than the free plan and support for plugins, MCP servers, hooks, and skills. Those connections are what make it relevant here: you can explore pairing Cursor's included model access with a separate research provider.

This is an India-specific offer, not a price to assume is available in Pakistan or other markets. Model names and allowances can change; confirm current eligibility, included usage, and pricing in your Cursor account before subscribing. The price above comes from the launch blog; the public pricing page retrieved for this guide did not display the regional Start offer.

**For a broader lower-cost option, Command Code lists its [Go plan at US$1/month](https://commandcode.ai/docs/plans/go) and its [GOAT plan at US$10/month](https://commandcode.ai/docs/plans/goat).** These are starting subscription prices with their own usage allowances, not promises of unlimited model use. Its [payment documentation](https://commandcode.ai/docs/resources/payment-methods) also describes UPI for INR-billed plans and Alipay for USD-billed plans. Check the payment options available to you at checkout.

One combination to explore is **Command Code Go + the multi-provider-research skill + Exa within its free credit allowance**. This pairs a low-cost model plan with a way to start retrieving sources without additional provider charges. It is a suggested combination, not an end-to-end setup tested for this guide. Confirm that the application exposes the connected tools to your chosen model.

If you already pay for a compatible application, start by exploring its supported connections. Account for three things separately: your application or model plan, any research-provider charges, and local taxes or currency conversion. Free retrieval still uses your assistant's model allowance when it reads sources and writes an answer.

*Regional application examples: sources checked on 19 September 2026. Cursor Start details are attributed to its launch announcement; other listed prices and provider terms reflect the official pages retrieved on that date. Check the linked pages and checkout for changes before signing up.*


## Compare costs without guessing

The advanced Exa case study reports one run’s cost, not an expected cost for every task. Use measured call counts and clearly attributed provider terms; do not treat that example as a typical-task price.

- [Advanced Exa run and reported cost](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/)
- [Provider reference](choosing-providers.md)
