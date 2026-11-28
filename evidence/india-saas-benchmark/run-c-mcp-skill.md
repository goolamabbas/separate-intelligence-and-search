I'll start by loading the skill, then run the regulatory research and startup discovery in parallel.

# India B2B SaaS Launch Memo — Recurring Payments & Data Protection
**Prepared 28 November 2026 · sources accessed 28 Nov 2026 · research via connected Parallel + Exa MCP only**

**Bottom line.** Two regimes apply to your launch. (1) Recurring billing on cards/UPI is now governed by a *single* consolidated RBI direction (April 2026): **₹15,000 per debit without AFA**, ₹1,00,000 only for insurance premiums, mutual-fund subscriptions and credit-card bills — software subscriptions sit on the ₹15,000 tier. (2) DPDP is in a phased rollout: the **Consent Manager registration regime went live on 13 Nov 2026**, while the obligations that actually bind your product — notice, consent, security, breach intimation, erasure, data-principal rights — start **13 May 2027**. Plan pricing around the ₹15,000 debit ceiling and plan privacy work to a May 2027 deadline.

---

## Part 1 — Regulatory rules

### 1.1 RBI recurring e-mandates (cards, PPI and UPI Autopay)

| Item | Detail |
|---|---|
| Direction name | **Digital Payments – E-mandate Framework, 2026** (a Master Direction) |
| Reference no. | **RBI/DPSS/2026-27/396** · RBI/CO.DPSS.POLC.No.S56/02.14.003/2026-27 |
| Date / effect | **21 April 2026**, "effective immediately"; repeals 8 circulars issued Aug 2019 – Aug 2024 [1] |
| Scope | All Payment System Providers/Participants, recurring transactions **domestic or cross-border**, using **cards / PPI / UPI** [1] |
| **General cap without AFA** | **₹15,000 per transaction**; above that, AFA applies to each debit [1] |
| **Higher category caps** | **₹1,00,000 per transaction** for (a) insurance premiums, (b) subscription to mutual funds, (c) credit-card bill payments — *software/SaaS subscriptions are not in this list* [1][4] |

**Rules your checkout and billing stack must implement (all from [1]):**
- One-time mandate registration **with AFA**; first transaction also requires AFA (may be combined with registration if processed together).
- Mandate must carry a **validity period**, with customer facility to modify it or withdraw at any time; **modification or withdrawal itself requires AFA**.
- Mandate may be **fixed-amount or variable** (variable mandates require a customer-set maximum).
- Issuer must send a **pre-debit notification ≥24 hours before each charge**, naming merchant, amount, date/time, mandate reference and reason for debit; customer chooses channel (SMS/email). Exemption only for FASTag/NCMC auto-replenishment.
- **Post-debit notification** must include grievance-redressal details.
- **No charges** may be levied on the customer for the e-mandate facility; issuers must run velocity checks; card mandates may be mapped to reissued cards.
- "Payments under e-mandates shall not be subject to any other limits/controls set by the customer."

**UPI-specific overlay (NPCI, 18 Sep 2026):** UPI Autopay must support Intent and QR registration flows; the same ₹15,000/₹1,00,000 AFA thresholds apply per MCC; execution is limited to **1 attempt + 3 retries per mandate**; no other user-set limits apply [5][6].

**Superseded figures (do not cite):** ₹2,000 (21 Aug 2019 card circular, DPSS.CO.PD.No.447/02.14.003/2019-20) [2]; ₹5,000 (level in force before June 2022); ₹15,000 (16 Jun 2022, CO.DPSS.POLC.No.S-518/02.14.003/2022-23) [3]; ₹1,00,000 category cap (12 Dec 2023, CO.DPSS.POLC.No.S-882/02.14.003/2023-24) [4].

### 1.2 DPDP Act and Rules — status as at late November 2026

| Instrument | Identifier | Date |
|---|---|---|
| DPDP Act, 2023 | Act 22 of 2023 | 11 Aug 2023 |
| **DPDP Rules, 2025** | **G.S.R. 846(E)**, Gazette No. 760 (CG-DL-E-14112025-267650) | **13 Nov 2025** [7][8] |
| Corrigendum (typographical only) | G.S.R. 892(E) | Dec 2025 [9] |
| Commencement notification (Act provisions) | G.S.R. 843(E), Gazette No. 757 | 13 Nov 2025 [10] |
| Removal of Difficulties Order, 2026 (wording only: s.9(1), s.10(2)(c)(ii)) | S.O. 5458(E) | 5 Oct 2026, gazette 6 Oct 2026 [11] |

**Milestones (Rule 1(2)–(4) of the Rules):**
| Tranche | What starts | Date |
|---|---|---|
| Immediate | Rules 1, 2, 17–21 (definitions; Data Protection Board constitution/staffing); Act definitions and Board sections | **13 Nov 2025** — in force [7][10] |
| +12 months | **Rule 4** — Consent Manager registration and obligations; Act s.6(9) and s.27(1)(d) | **13 Nov 2026** — in force [7][9][12] |
| +18 months | **Rules 3, 5–16, 22, 23** and the core Act duties (notice, consent, security safeguards, breach intimation, retention/erasure, children's data, SDF obligations, rights, cross-border) + penalties | **13 May 2027** — pending [7][12] |

**What is live right now (novel since 13 Nov 2026):**
- Consent Manager registration framework is **in force**; MeitY launched the portal **dpbi.gov.in** on 14 Nov 2026. Applicants must be India-incorporated with adequate technical/operational/financial capacity and **net worth ≥ ₹2 crore**; the Board assesses applications and publishes the register [12].
- PIB confirms the remaining obligations (data-principal rights, data-fiduciary duties, Board inquiry/penalty process) are scheduled for **13 May 2027** [12].
- No Significant Data Fiduciary designations yet (s.10 starts only in May 2027) [10].
- The January 2026 proposal to compress the 18-month window to 12 months was **not notified** [10].

**Practical reading for a B2B SaaS (interpretation, not legal advice):** you are likely a *Data Processor* for customer-tenant data and a *Data Fiduciary* for your own website/marketing/HR data. You have ~5.5 months to ship consent notices, grievance/DSR workflows, breach-intimation process, retention/erasure logic and processor contracts. Becoming a *registered* Consent Manager is a different business with a ₹2 crore net-worth gate — most startups will be vendors to fiduciaries rather than registered CMs.

---

## Part 2 — Indian startup market map

**Selection:** founded 2022+, <100 employees, product built around (a) UPI Autopay / e-mandate / recurring billing or (b) DPDP consent/privacy compliance. All ten websites were fetched live on 28 Nov 2026 and matched to the described product. Employee counts are LinkedIn self-reported (accessed 28 Nov 2026).

| # | Company | Website | Founded | Employees (1-yr growth) | Focus | Product in one sentence |
|---|---|---|---|---|---|---|
| 1 | **RocketPay** | rocketpay.co.in | 2022 | 44 — Tracxn shows 60 (30 Sep 2026); growth n/a [C1][C1b] | (a) UPI Autopay + eNACH mandate infrastructure | Single API / Tally plugin / Android app that registers and executes UPI Autopay and eNACH mandates for EMIs, deposits, trade credit and SaaS subscriptions [C1c] |
| 2 | **TransactBridge** | transactbridge.com | 2023 | 26 (+50.0% YoY) [C2] | (a) Merchant-of-record + subscription billing with UPI Autopay | India-market MoR stack adding UPI Autopay, e-mandates and recurring card instructions plus GST/compliance so overseas SaaS can bill Indian customers in INR [C2b] |
| 3 | **CirclePay** | circlepay.in | 2024 | 1–10 band; exact count and growth not published [C3] | (a) UPI Autopay B2B collections | Mobile-first app that lets distributors/wholesalers place UPI Autopay mandates on retailer credit so dues debit automatically on the due date [C3b] |
| 4 | **AUCUR** | aucurx.com | 2024 | 4 (+33.3% YoY) [C4] | (a) NACH/UPI mandate automation (rental) | PG/hostel management platform where tenant rent is auto-collected through a NACH mandate or UPI AutoPay with KYC and digital agreements [C4b] |
| 5 | **SubversePay** | subversepay.in | 2025 | 5 (growth n/a) [C5] | (a) WhatsApp-first recurring collections | Recurring-billing "OS" for cable/ISP and offline subscription businesses combining UPI mandates, WhatsApp journeys and AI churn-recovery [C5b] |
| 6 | **PrivEzi** | privezi.ai | 2022 (Q4) | 8 (+60.0% YoY) [C6] | (b) DPDP privacy-management suite | Modular privacy platform (consent, cookies, data discovery, DSR, vendor risk, breach) built specifically for the DPDP Act [C6b] |
| 7 | **Concur** | concur.live | 2023 | 23 (−28.1% YoY) [C7] | (b) Consent management / CMP | Blockchain-backed consent and data-principal management platform for DPDP notice, consent capture, audit and provenance [C7b] |
| 8 | **Redacto** | redacto.ai | 2024 | 44 (+112.5% YoY) [C8] | (b) Privacy / data-governance with consent | One governance layer unifying consent, cookie consent, DSAR/grievance and data discovery for DPDPA [C8b] |
| 9 | **Digital Anumati** | digitalanumati.com | 2023 | 3 (growth n/a) [C9] | (b) DPDP consent management platform | DPDP-native consent suite with purpose-bound notices, immutable receipts, data-principal-rights workflows and audit exports [C9b] |
| 10 | **Fortifyze** | http://fortifyze.com | 2023 | 6 (+250.0% YoY) [C10] | (b) GRC + privacy management | Compliance platform covering consent, rights requests, RoPA, DPIA and breach response on a shared GRC/security engine [C10b] |

**What the map tells you**
- The *payments* side is being attacked horizontally (mandate rails: RocketPay, TransactBridge) and vertically (CirclePay for distribution credit, AUCUR for rentals, SubversePay for cable/ISP) — nobody yet owns "recurring billing for Indian B2B SaaS" as a category, which is the gap your product sits in.
- Pricing across this cohort is usage/quote-based, not self-serve SaaS — an opening for transparent self-serve pricing.
- On privacy, the field is crowded and sub-scale (3–44 people, mostly 2023–24 vintage) and pivoting from GDPR-style tools to DPDP-native messaging; distribution, not features, is the differentiator. All are CMP vendors, not registered Consent Managers (registration only opened 13 Nov 2026).

**Considered but excluded:** DemandPay (strong fit: UPI AutoPay + eNACH for 500+ ISPs, 8 employees) — founded **2017**; Qila (blockchain consent, launched mid-2022) — founding year ambiguous, part of the older SWPL/SCIPL group; Consentin (Leegality, 2016) and Privy (IDfy, 2011) — parent companies too old; Neostra (2024, 5), Patronus (2024, 7), Zeeks (2024, 1–10) and Transversal (2024, 5) — qualified alternates if you want a larger privacy sample.

---

## Verified vs. unverified

**Verified (primary/official):** all RBI direction text, references, dates and limits [1]–[6]; DPDP Rules identifier, gazette date, three-tranche commencement scheme [7]–[9]; Consent Manager go-live date, portal, ₹2 crore net worth, 13 May 2027 date [12]; Removal of Difficulties Order text and date [11].

**Verified but third-party sourced:** LinkedIn headcount and YoY growth for all ten startups; Tracxn headcount for RocketPay; founding years (LinkedIn + company "about" pages, cross-checked).

**Estimates / judgement:** RocketPay's "true" headcount (44 vs 60 — both <100, so the criterion holds either way); CirclePay's headcount (band only); the strategic reads in "What the map tells you"; the characterization of your processor/fiduciary role.

**Could not verify — listed rather than guessed:**
1. Whether any **Data Protection Board Chairperson or Member has been appointed** — PIB release of 14 Nov 2026 names none; a Kerala HC statement (Oct 2026) said the Board was "constituted but not functional" [10]. No appointment notification located.
2. Whether **any Consent Manager has actually been registered** — no public register entry found.
3. Whether **certification standards for Consent Managers** (First Schedule, Part A) have been published — reportedly not, as of 9 Nov 2026 [10].
4. The **G.S.R. 843(E) gazette PDF itself** — cited via law-firm summary and secondary trackers; not opened directly.
5. **CirclePay's exact employee count**, and any YoY growth figure LinkedIn reports for it (the −100% figure appears to be a data artifact).
6. **NPCI's 30-year maximum mandate tenure** — appeared only in a vendor blog; not confirmed in NPCI primary text.
7. **Any RBI amendment to the 2026 framework after 21 Apr 2026** — none found; rbi.org.in master-direction page (last updated 14 Nov 2026) still lists it as current.
8. The reported **UPI MDR change effective 15 Oct 2026** (Finance Ministry gazette S.O. 5075(E), 14 Sep 2026, with Autopay exempt) — secondary source only, but worth confirming with your PG because it affects pricing.

---

## Tools & gaps

**Tools actually used:** `multi-provider-research` skill (routing reference); **Parallel** `web_search` ×3 and `web_fetch` ×3 batches (20 URLs total, incl. rbi.org.in, egazette.gov.in, pib.gov.in, meity.gov.in, npci.org.in); **Exa** `web_search` ×5 (semantic company discovery + LinkedIn/company profiles). No native web search, no Exa Agent/Connect, no Parallel `web_research`/`web_decisions` — all discovery was retrieval-first, with synthesis written here.

**Gaps:** startup financials, funding and customer counts were not verified (out of scope and low-reliability); employee data is self-reported and ±20–30% unreliable; Board appointment and Consent Manager register status require periodic re-checks (dpbi.gov.in) as they may change before your launch; DPDP timelines are computed from Rule 1's period language and officially confirmed by PIB only for 13 Nov 2026 and 13 May 2027 — the 13 vs 14 Nov 2025 gazette-date ambiguity affects derived dates by one day.

---

### Sources
[1] RBI, *Digital Payments – E-mandate Framework, 2026*, 21 Apr 2026 — https://rbi.org.in/SCRIPTS/BS_ViewMasDirections.aspx?id=13374 · PDF: https://rbidocs.rbi.org.in/rdocs/notification/PDFs/396MDD002E435ECA145509929FC3ACBCFD0E9.PDF
[2] RBI, *Processing of e-mandate on cards for recurring transactions*, 21 Aug 2019 — https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11668
[3] RBI, *Processing of e-mandates for recurring transactions*, 16 Jun 2022 — https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12341
[4] RBI, *Processing of e-mandates for recurring transactions*, 12 Dec 2023 — https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12570
[5] NPCI, *UPI Consolidated Circular v1.0*, 18 Sep 2026, §14 — https://www.npci.org.in/uploads/UPI_Consolidated_Circular_f9c023a0ef.pdf
[6] NPCI, UPI AutoPay product page — https://www.npci.org.in/product/autopay
[7] *DPDP Rules, 2025*, G.S.R. 846(E), 13 Nov 2025 — https://egazette.gov.in/WriteReadData/2025/267650.pdf · https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf
[8] MeitY, DPDP Rules 2025 document page (corrigendum entry 16.12.2025; enforcement timeline PDF) — https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa
[9] Corrigendum G.S.R. 892(E), Dec 2025 — https://www.meity.gov.in/static/uploads/2025/12/3c7ebbae0e5456f493f486e6845df86b.pdf
[10] AZB & Partners, *India's DPDP Act: Phased Rollout and Key Compliance Milestones*, 14 Nov 2025 — https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones ; dpdprules.org status tracker (updated 24 Nov 2026) — https://dpdprules.org/timeline
[11] *DPDP (Removal of Difficulties) Order, 2026*, S.O. 5458(E), 5 Oct 2026 — https://egazette.gov.in/WriteReadData/2026/276885.pdf
[12] PIB, *Consent Manager Registration Framework Comes into Effect*, 14 Nov 2026 — https://www.pib.gov.in/PressReleasePage.aspx?PRID=2336151

**Company sources** (LinkedIn accessed 28 Nov 2026; sites fetched 28 Nov 2026)
[C1] https://linkedin.com/company/rocketpayment · [C1b] https://tracxn.com/d/companies/rocketpay/__2HHSfwRmhNzDNMJHgmF2bqkuxPJF5DUGQ9IQlbYU7XI · [C1c] https://www.rocketpay.co.in/ and https://www.rocketpay.co.in/solutions/saas
[C2] https://linkedin.com/company/thetransactbridge · [C2b] https://transactbridge.com/
[C3] https://linkedin.com/company/circlepayapp · [C3b] https://www.circlepay.in/
[C4] https://linkedin.com/company/aucur · [C4b] https://aucurx.com/
[C5] https://linkedin.com/company/subverse-pay · [C5b] https://subversepay.in/
[C6] https://linkedin.com/company/privezi-solutions-private-limited · [C6b] https://privezi.ai/ and https://privezi.ai/about.html
[C7] https://linkedin.com/company/concur-live · [C7b] https://concur.live/
[C8] https://linkedin.com/company/redacto-io · [C8b] https://redacto.ai/
[C9] https://linkedin.com/company/digital-anumati · [C9b] https://digitalanumati.com/
[C10] https://linkedin.com/company/fortifyze · [C10b] https://fortifyze.com/
