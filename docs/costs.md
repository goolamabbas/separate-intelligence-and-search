# Plan your research budget

Count three things separately: your application or model plan, research-provider charges, and local taxes or currency conversion. Free retrieval still uses your assistant’s model allowance.

These are dated examples to help you compare options, not a promise of current prices or availability in your account. Prices and availability may have changed since these checks.

## Start with what you already have

If your current application supports the tools you need, try one useful task before adding subscriptions. The [ChatGPT + TinyFish walkthrough](https://goolamabbas.github.io/separate-intelligence-and-search/guide/tinyfish-beginner/) records the actual calls and what billing information was unavailable.

## Provider allowances and access

**Access and allowance guidance checked 11 November 2026.** These are published terms, not measured bills or a guarantee of access in every application. Each setup link explains the supported connection; check your account before a paid operation.

| Provider | How to try it | What can incur charges | Setup and terms |
| --- | --- | --- | --- |
| **Exa** | Keyless MCP Search/Fetch at free rate limits. Account credits are separate: $10 on signup, reset to $10 monthly; completing onboarding earns the first team a one-time $10 bonus. | Authenticated API usage consumes credits; Agent and Connect have their own usage and data charges. | [Connect Exa](connecting-providers.md#choose-an-access-route) · [MCP access](https://exa.ai/docs/reference/exa-mcp) · [Pricing](https://exa.ai/docs/reference/pricing) |
| **Octen** | New accounts receive $5 in free balance. Connect through the supported hosted MCP route. | API usage draws from the balance. Broad Search can make several billable subqueries; optional plans have separate terms. | [Connect Octen](connecting-providers.md#choose-an-access-route) · [Pricing](https://docs.octen.ai/overview/pricing) |
| **Perplexity** | Sign in to the hosted MCP or supply an API key. Sign-in is an access route, not a free-use promise. | Tool calls are billed at standard API rates to the chosen organization or API key; your assistant subscription does not establish API credit. | [Hosted MCP and billing](https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server) |
| **Parallel** | Keyless MCP Search/Fetch at lower rate limits. | Authenticated calls use API pricing after applicable free usage. Research and specialized data can have different charges; inspect the selected operation. | [Connect Parallel](connecting-providers.md#parallel-connection-readiness) · [MCP access and billing](https://docs.parallel.ai/integrations/mcp/quickstart) |
| **Firecrawl** | Keyless MCP Search, Scrape and Parse within daily limits, in supported clients. | Sign-in or an API key enables the team's plan and broader tool surface. Check operation and dataset charges before crawling, Agent work or paid data retrieval. | [Keyless access](https://docs.firecrawl.dev/mcp-server/keyless) · [Sign-in](https://docs.firecrawl.dev/mcp-server/oauth) · [Limits](https://docs.firecrawl.dev/rate-limits) |
| **TinyFish** | An account and supported connection; Search and Fetch are free within a daily allowance. | Automation and other services are metered separately; legacy account plans can differ. | [Beginner setup](https://goolamabbas.github.io/separate-intelligence-and-search/guide/tinyfish-beginner/) · [MCP rates and access](https://docs.tinyfish.ai/mcp-integration) |

Start with the capability your question needs. A keyless connection may expose only basic tools; a free retrieval allowance does not cover every research or automation operation. Your assistant's model usage still applies.

For optional authenticated X research, check the selected interface's billing and result limits before running a query. This page does not estimate X charges or assume who pays through a third-party connector. See [X-native evidence](choosing-providers.md#optional-authenticated-x-native-evidence).

## Regional application examples

These retain their original dated source checks; the November access refresh above does not reverify these application offers.


Choosing these parts separately also lets you explore combinations that fit your budget. This can be especially useful in India, Pakistan, and other emerging markets, or anywhere you want to get more from what you already spend. A coding-oriented application can serve as a workspace for research and everyday assistance when it supports the necessary skills and tools.

**For readers in India, Cursor Start is a useful example.** Cursor [announced the plan on 28 July 2026](https://x.com/cursor_ai/status/2081978255004053560). Its [launch blog](https://cursor.com/blog/cursor-start-india) lists **₹649/month, including tax**, billed in INR with UPI or card, along with more agent requests than the free plan and support for plugins, MCP servers, hooks, and skills. Those connections are what make it relevant here: you can explore pairing Cursor's included model access with a separate research provider.

This is an India-specific offer, not a price to assume is available in Pakistan or other markets. Model names and allowances can change; confirm current eligibility, included usage, and pricing in your Cursor account before subscribing. The price above comes from the launch blog; the public pricing page retrieved for this guide did not display the regional Start offer.

**For a broader lower-cost option, Command Code lists its [Go plan at US$1/month](https://commandcode.ai/docs/plans/go) and its [GOAT plan at US$10/month](https://commandcode.ai/docs/plans/goat).** These are starting subscription prices with their own usage allowances, not promises of unlimited model use. Its [payment documentation](https://commandcode.ai/docs/resources/payment-methods) also describes UPI for INR-billed plans and Alipay for USD-billed plans. Check the payment options available to you at checkout.

Two combinations to explore are **Command Code Go + the multi-provider-research skill + Exa within its free credit allowance**, or **the same application and skill + TinyFish Search and Fetch within its free limits**. Both pair a low-cost model plan with a way to start retrieving sources without additional provider charges. These are suggested combinations, not end-to-end setups tested for this guide. Confirm that the application exposes the connected tools to your chosen model.

If you already pay for a compatible application, start by exploring its supported connections. Account for three things separately: your application or model plan, any research-provider charges, and local taxes or currency conversion. Free retrieval still uses your assistant's model allowance when it reads sources and writes an answer.

*Regional application examples: sources checked on 19 September 2026. Cursor Start details are attributed to its launch announcement; other listed prices and provider terms reflect the official pages retrieved on that date. Check the linked pages and checkout for changes before signing up.*


## Compare costs without guessing

The beginner comparison used three searches and two fetch batches covering six URLs. It did not return billing metadata. The advanced Exa case study reports one run’s cost, not an expected cost for every task. Use measured call counts and clearly attributed provider terms; do not treat either example as a typical-task price.

- [Beginner example and call ledger](https://goolamabbas.github.io/separate-intelligence-and-search/guide/tinyfish-beginner/#5-check-what-the-tools-actually-did)
- [Advanced Exa run and reported cost](https://goolamabbas.github.io/separate-intelligence-and-search/guide/exa-ultra-case-study/)
- [Provider reference](choosing-providers.md)
