# Controlled A/B/C test: OpenCode + an open-weight model + v0.12.0

[← Start with the introduction](../README.md)

What actually changes when you hold a fast, low-cost open-weight model constant and upgrade only its search layer?

On **28 November 2026**, we ran the same India B2B SaaS launch brief three times in **OpenCode v2.4.2** using **`DeepSeek-V4.1-Flash-1017-Fast`** (`isoquant/deepseek-v4.1-flash-1017-fast`, 1M context, tools and reasoning enabled):

1. **Run A (Bare model):** No web search, no `webfetch`, no MCP servers, no skills.
2. **Run B (OpenCode native `websearch` + built-in `webfetch`):** OpenCode's environment-variable search shortcut (`PARALLEL_API_KEY` pinned to `parallel`), no MCP servers, no skills.
3. **Run C (Parallel + Exa MCP + `multi-provider-research` v0.12.0):** Native `websearch` and local `webfetch` disabled; remote Parallel and Exa MCP servers enabled (`codemode: false` so every call is logged transparently) with the lean `v0.12.0` routing skill.

To keep all three runs fair, `shell`, `edit`, `subagent`, and global `octen` MCP were disabled everywhere so none of the runs could fall back to `curl` or hidden tools.

[Choosing research tools for your AI assistant](README.md)

## The brief we tested

Each run received the same two-part brief (Run C added only *"Use the `@multi-provider-research` skill. Do not use any provider other than the connected Parallel and Exa MCP servers."*):

- **Part 1 (Primary-source regulation):** Current RBI recurring e-mandate rules for cards and UPI Autopay (official `rbi.org.in` direction name, reference number, date, general per-transaction cap without AFA, higher category caps) plus the current status and compliance milestones of India's DPDP Rules (`meity.gov.in` / Gazette source, date, timelines as of late November 2026).
- **Part 2 (Structured market map):** 10 Indian startups founded in 2022 or later with fewer than 100 employees building UPI Autopay/recurring-billing or DPDP privacy/consent tools, including website, founding year, employee count, 1-year growth where available, and a 1-sentence summary.

## Side-by-side results (28 November 2026)

| Metric | Run A: Bare model | Run B: OpenCode native `websearch` + `webfetch` | Run C: Parallel + Exa MCP + `v0.12.0` skill |
| --- | --- | --- | --- |
| **Wall-clock time** | 58 s | 170 s | **138 s** (19% faster than Run B) |
| **Agent turns (steps)** | 10 | 19 | **8** (58% fewer turns than Run B) |
| **Web search / fetch calls** | 0 (blocked) | **33** (`28 websearch` + `5 webfetch`, **4/5 fetches errored**) | **13** (`4 parallel_web_search` + `6 exa_web_search_exa` + `3 parallel_web_fetch` covering **16 URLs**, **0 errors**) |
| **Input / cache-read tokens** | 18.5k / 118k | 176.9k / 1.68M | **74.8k / 260k** (58% less input, 84% less cache) |
| **Model inference cost (reported)** | $0.0054 | $0.0231 | **$0.0111** (52% cheaper than Run B) |
| **Est. search API cost (list rates)** | $0.00 | about $0.028 (28 Parallel fast searches; about $0.051 total at list rates) | **about $0.062** (4 Parallel searches + 16 extract URLs + 6 Exa searches; about $0.073 total at list rates, **$0 search out of pocket** on free tiers) |
| **RBI 2026 Master Direction (`RBI/DPSS/2026-27/396`, 21 Apr 2026)** | Missed (recalled 2019/2020 only) | Verified directly from `rbi.org.in` | **Verified directly from `rbi.org.in` + caught NPCI 18 Sep 2026 Consolidated Circular v1.0** |
| **DPDP Rules (`G.S.R. 846(E)` + 13 Nov 2026 Phase 2 + 13 May 2027 Phase 3)** | Unverified memory only | Verified via snippets (`webfetch` failed on `meity.gov.in` page and 3 PDFs) | **Verified directly via `parallel_web_fetch` on `meity.gov.in` and `pib.gov.in` web pages** (PDFs not fetched directly) |
| **10 startups: live website fetch** | 0 / 10 | 0 / 10 (snippets only) | **10 / 10 fetched live in 1 batch call** (12 URLs in a single `parallel_web_fetch`) |
| **10 startups: 1-year headcount growth** | 0 / 10 | **0 / 10** (3 had 90-day Inc42 deltas) | **6 / 10 LinkedIn-reported YoY growth** (`+50%`, `+33.3%`, `+60%`, `-28.1%`, `+112.5%`, `+250%`, via Exa) |

## What MCP, two providers, and v0.12.0 changed

OpenCode lets you plug in search providers via environment variables (`PARALLEL_API_KEY`, `EXA_API_KEY`) without configuring MCP. That shortcut worked in Run B—and at list rates Run B's total spend (about $0.051) was actually slightly lower than Run C's (about $0.073)—so what actually drove the drop in turns, model cost, and fetch errors in Run C?

1. **Richer MCP fetch and multi-query search tools:** OpenCode's native `websearch` wraps a single provider behind a basic `{ query }` interface and relies on OpenCode's local `webfetch` to open pages. On like-for-like regulatory searches, Run C used **4** structured Parallel MCP searches (`objective` + multi-query) vs. Run B's **7** single-string regulatory queries. On page reads, **4 of 5 local `webfetch` calls errored** in Run B (3 PDFs with unsupported-PDF errors, plus the `meity.gov.in` DPDP Rules page); in Run C, **Parallel's server-side `web_fetch`** succeeded **3 of 3 times across 16 HTML pages** (including `meity.gov.in`, `rbi.org.in`, `pib.gov.in`, and **12 startup homepages in one batched call**; Gazette PDFs were not fetched directly in Run C).
2. **Two providers collaborating in one session (provider effect, not MCP alone):** Native `websearch` picks one provider per session, and Run B was pinned to Parallel only. Over MCP, Run C paired **Parallel** (government web pages and batched homepage verification) with **Exa** (**6** startup/LinkedIn searches vs. Run B's **21** Parallel startup queries). Adding Exa is what produced the **6/10 LinkedIn-reported YoY growth figures** vs. 0/10 in Run B (OpenCode native `websearch` also accepts `EXA_API_KEY`, so this gain reflects having both providers together).
3. **Disciplined routing from `multi-provider-research` v0.12.0:** Run C loaded `SKILL.md` (5.8 KB) and read only `references/parallel.md` (3.4 KB) and `references/exa.md` (3.5 KB)—about 12.7 KB total. It stayed retrieval-first (zero expensive delegated `agent_run` or `web_research` calls), verified all 10 startup homepages live, and explicitly excluded older incumbents/parents (`DemandPay` 2017, `Leegality` 2016, `IDfy` 2011).

**Practical rule for OpenCode users:** Native `websearch` via `/connect` or environment variables is a convenient 30-second shortcut for quick, single-provider lookups. Connect providers via **MCP** whenever you want server-side page extraction on government web pages (PDFs were not tested in Run C), multi-URL batch reads, structured search parameters, or two providers working together in one session.

## What Run C actually verified

Independently checked against `rbi.org.in` and `meity.gov.in` on 28 November 2026:

- **RBI recurring e-mandates:** Consolidated Master Direction **Digital Payments – E-mandate Framework, 2026** (`RBI/DPSS/2026-27/396`, `21 April 2026`), setting a **₹15,000** general per-transaction cap without AFA and **₹1,00,000** only for insurance premiums, mutual-fund subscriptions, and credit-card bills (SaaS subscriptions sit on the ₹15,000 tier), plus NPCI's **18 September 2026** UPI Consolidated Circular v1.0 (`1 attempt + 3 retries`).
- **India DPDP Rules:** **DPDP Rules, 2025** (`G.S.R. 846(E)` / `G.S.R. 843(E)`, `13/14 November 2025`, plus Corrigendum `G.S.R. 892(E)` and Removal of Difficulties Order `S.O. 5458(E)` on `5 October 2026`). **Phase 2 (Rule 4 Consent Manager registration, ₹2 crore net worth floor, `dpbi.gov.in`) went live on 13–14 November 2026**, while core Data Fiduciary obligations (notice, security, 72-hour breach reporting, erasure, rights, penalties) take effect **13–14 May 2027**.
- **10 verified Indian startups (2022+, <100 staff, websites fetched live):** `RocketPay` (2022), `TransactBridge` (2023, +50% YoY), `CirclePay` (2024), `AUCUR` (2024, +33.3% YoY), `SubversePay` (2025), `PrivEzi` (2022, +60% YoY), `Concur` (2023, −28.1% YoY), `Redacto` (2024, +112.5% YoY), `Digital Anumati` (2023), and `Fortifyze` (2023, +250% YoY).

## Honest limits and audit notes

- **One run per arm; Run B tested Parallel only:** This is a single-run snapshot on one model and one brief, and Run B pinned OpenCode native `websearch` to Parallel (not Exa). The Run C gains therefore reflect **MCP tools + adding Exa alongside Parallel + the `v0.12.0` skill** together (we did not run a fourth MCP-without-skill or native-Exa variant).
- **Estimated search API spend and total cost:** OpenCode's JSONL transcript did not serialize MCP `_meta["parallel/usage"]`, so search costs (about $0.028 in Run B, about $0.062 in Run C) are estimated from published 28 November 2026 rate cards. At list rates, Run C's combined model + search cost (about $0.073) is higher than Run B's (about $0.051), though both search totals fit inside free starter allowances ($0 out of pocket).
- **LLM self-count drift:** In its prose footer, Run C wrote `Parallel web_search ×3, Exa ×5` and `20 URLs total`, whereas the authoritative JSONL log (`summary.json`) recorded `4` Parallel searches, `6` Exa searches, and `16` fetched URLs across 3 batches. Execution logs beat self-reported counts.
- **Run A workspace note:** An archived draft from an earlier aborted run remained in `run-a-bare/` during Run A; the model detected it, refused to copy its unverified numbers, and reported 0/10 verified startups.
- **Third-party startup headcounts:** LinkedIn and Tracxn employee figures are directional estimates, not audited payroll filings (for small teams, a single hire swings YoY percentage sharply—for example, +33.3% on 4 employees).

## Inspect the saved artifacts

All non-secret inputs, configs, full memos, and the parsed JSONL metrics live in the repository under [`evidence/india-saas-benchmark/`](https://github.com/goolamabbas/separate-intelligence-and-search/tree/main/evidence/india-saas-benchmark):

- [`BRIEF.txt`](https://github.com/goolamabbas/separate-intelligence-and-search/blob/main/evidence/india-saas-benchmark/BRIEF.txt) — Exact brief sent to all three runs
- [`run-a-bare.md`](https://github.com/goolamabbas/separate-intelligence-and-search/blob/main/evidence/india-saas-benchmark/run-a-bare.md), [`run-b-native-websearch.md`](https://github.com/goolamabbas/separate-intelligence-and-search/blob/main/evidence/india-saas-benchmark/run-b-native-websearch.md), [`run-c-mcp-skill.md`](https://github.com/goolamabbas/separate-intelligence-and-search/blob/main/evidence/india-saas-benchmark/run-c-mcp-skill.md) — Unedited generated memos
- [`summary.json`](https://github.com/goolamabbas/separate-intelligence-and-search/blob/main/evidence/india-saas-benchmark/summary.json) — Parsed turn counts, token totals, model costs, and exact tool-call ledger
- [`configs/`](https://github.com/goolamabbas/separate-intelligence-and-search/tree/main/evidence/india-saas-benchmark/configs) — Exact `opencode.jsonc` isolation configs for Runs A, B, and C

## Continue reading

- [Plan your research budget](https://goolamabbas.github.io/separate-intelligence-and-search/guide/costs/)
- [Connecting and testing providers](connecting-providers.md)
- [Choosing an external research provider](choosing-providers.md)
- [Research prompt cookbook](research-prompts.md)
