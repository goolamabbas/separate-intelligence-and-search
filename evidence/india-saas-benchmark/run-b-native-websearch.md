I'll research this systematically, starting with primary regulatory sources and then startup discovery.

# India B2B SaaS Launch Memo
**Prepared:** 28 November 2026 · **Scope:** recurring-payment regulation + DPDP compliance + 10-company market map

---

## Part 1 — Regulatory rules

### 1.1 RBI recurring e-mandates (cards, PPIs, UPI Autopay)

**Bottom line:** The operative instrument is no longer the 2021 “e-mandate framework.” RBI consolidated eight circulars into a single Master Direction on **21 April 2026**. The general no-AFA threshold remains **₹15,000 per transaction**; a **₹1,00,000** threshold applies only to three named categories.

| Item | Detail |
|---|---|
| Official name | **Digital Payments – E-mandate Framework, 2026** [1] |
| Reference numbers | **RBI/DPSS/2026-27/396**; **RBI/CO.DPSS.POLC.No.S56/02.14.003/2026-27** [1] |
| Date | **21 April 2026**; effective immediately (clause 1(b)) [1] |
| Coverage | Recurring transactions, domestic and cross-border, on **cards / PPI / UPI** (clause 2) [1] |
| Supersedes | Eight circulars dated 2019–2024, including the 31 Mar 2021 framework, 16 Jun 2022, 12 Dec 2023 and 22 Aug 2024 circulars (clause 11) [1] |

**Transaction limits (clause 8):**

| Scenario | No-AFA limit per transaction |
|---|---|
| All recurring transactions (general rule) | **₹15,000** [1] |
| Insurance premiums, mutual-fund subscriptions, credit-card bill payments | **₹1,00,000** [1] |
| Above the applicable limit | AFA required on **each** transaction [1] |

**Other rules a subscription business must design around** [1]:
- **AFA at registration** and on the **first transaction** (may be combined into one step).
- Mandate must state a **validity period**; customer can modify/withdraw at any time (AFA required).
- Variable mandates: customer must be able to set a **maximum transaction value**.
- **Pre-debit notice at least 24 hours** before each charge, with merchant name, amount, date/time, mandate reference and reason; customer can opt out of a single debit or the mandate.
- **Post-debit notice** with grievance-redressal details.
- **No charges** to the customer for using the e-mandate facility.
- Pre-debit notice is **not** required for FASTag/NCMC auto-replenishment.
- Acquirers must ensure merchants they onboard comply.

**Why the ₹15,000 figure matters and what it is not:** It is an **AFA-exemption threshold, not a cap on mandate value**. A mandate can be registered for a higher amount, but each debit above ₹15,000 needs fresh authentication [1]. For a B2B SaaS, the ₹1 lakh category does **not** apply — education fees, SaaS subscriptions and loan EMIs are not in the named list [1][3].

**Decision implications:**
1. Price Indian plans so each **debit** stays at or below ₹15,000 (monthly/quarterly), or accept re-authentication on annual plans above that.
2. Build around the **24-hour pre-debit window**: charge files must be submitted early enough, and retries must respect the notice cycle.
3. Make cancellation/withdrawal obvious in-product; this is both an RBI requirement and a churn/RBI-complaint risk.
4. The direction binds issuers/PSPs; merchant obligations flow through your **acquirer/PA contract**, so confirm the gateway’s implementation rather than assuming the RBI text is self-executing for you.

---

### 1.2 DPDP Act and DPDP Rules — status as of late November 2026

**Bottom line:** The law is **phased, not fully live**. As of 28 November 2026, only the **Consent Manager registration** phase has just commenced. The core obligations on Data Fiduciaries — notice, consent, security, breach reporting, retention, children’s data, SDF duties, data-principal rights and penalties — are scheduled for **13 May 2027**.

| Instrument | Reference / date | Status |
|---|---|---|
| Digital Personal Data Protection Act, 2023 | **Act No. 22 of 2023**; Presidential assent **11 August 2023** [9] | Enacted; commenced in phases |
| DPDP Rules, 2025 | **G.S.R. 846(E)**, Gazette of India (Extraordinary), Part II Sec. 3(ii), **13 November 2025** (MeitY library lists 14.11.2025) [5][7] | Notified; phased commencement |
| Commencement notification | **G.S.R. 843(E)**, **13 November 2025** [6] | Sets the three phases |
| Corrigendum to Rules | **G.S.R. 892(E)**, December 2025 [5] | Textual corrections only |
| Removal of Difficulties Order, 2026 | **S.O. 5458(E)**, made **5 October 2026**, published **6 October 2026** [8] | In force; textual fixes to s.9(1) and s.10(2)(c)(ii); **no date change** |

**Commencement timeline:**

| Date | What takes effect | Legal basis |
|---|---|---|
| **13 November 2025** | Definitions; establishment/constitution of the Data Protection Board; rule-making and general provisions; Rules 1, 2 and 17–21 | G.S.R. 843(E)(a); Rule 1(2) [6][7] |
| **13 November 2026** | **Consent Manager registration** (s.6(9), s.27(1)(d)); Rule 4 and First Schedule | G.S.R. 843(E)(b); Rule 1(3) [4][6] |
| **13 May 2027** | Sections 3–5, 6(1)–(8) and 6(10), 7–17, 27 (except 27(1)(d)), 28–34, 36–37, 44(2); Rules 3, 5–16, 22–23 — i.e. notice, consent, security, breach, retention, children, SDF, rights, cross-border, penalties | G.S.R. 843(E)(c); Rule 1(4) [6][7] |

**What is actually in force now (late Nov 2026):**
- The **Data Protection Board** was established on 13 Nov 2025 [6].
- **Consent Manager registration opened on 13 November 2026**; MeitY launched the application portal **dpbi.gov.in** on **14 November 2026** [4].
- Eligibility: company incorporated in India, adequate technical/operational/financial capacity, **minimum net worth ₹2 crore**, independently certified platform; the Board assesses applications and publishes the register [4].

**What arrives on 13 May 2027** (the real build deadline) [7]:
- **Notice** (Rule 3): standalone, plain-language, itemised data and purposes, withdrawal/rights/complaint links.
- **Consent** and withdrawal mechanics (s.6).
- **Reasonable security safeguards** (Rule 6): encryption/masking/tokenisation, access control, logs, backups, processor contracts.
- **Breach reporting** (Rule 7): affected Data Principals **without delay**; Board intimation **without delay**, with detailed report **within 72 hours** (extendable in writing).
- **Retention/erasure** (Rule 8): erasure when purpose is served; three-year inactivity rule for large e-commerce/gaming/social platforms, with **48 hours’** pre-erasure notice; minimum one-year log retention.
- **Children’s data** (Rules 10–11), **Significant Data Fiduciary** duties (Rules 12–13), **data-principal rights** (Rule 14), **cross-border transfer** (Rule 15).
- **Penalties up to ₹250 crore** per breach under the Act’s Schedule [9].

**Two caveats worth flagging to a founder:**
1. **The notifications set periods, not calendar dates.** The Gazette masthead is 13 Nov 2025 but the eGazette file code and MeitY library say 14 Nov 2025. The computed dates are therefore **13 or 14 May 2027**. Plan to the **earlier** date [5][6].
2. **The Board may not yet be operationally functional.** The PIB release names no Board members, and reporting (secondary) says the Centre told the Kerala High Court in October 2026 that the Board was not yet functional. Treat consent-manager registration timelines as politically/administratively uncertain [4].

**Decision implications:**
- Do **not** wait for May 2027: enterprise buyers will ask DPDP questions in RFPs through 2026–27, and processor contracts will need Rule 6 terms before then.
- A B2B SaaS typically acts as a **Data Processor** for customer-account data and a **Data Fiduciary** for its own website, marketing, sales and HR data. Both roles need work.
- Most “consent management” vendors are **tooling providers, not registered Consent Managers**. Registration is a separate licensed role with a ₹2 crore net-worth floor [4]. If you intend to become a Consent Manager, that is a different business decision from buying a CMP.

---

## Part 2 — Indian startup market map

**Method:** 10 Indian companies founded **2022 or later**, with **fewer than 100 employees** (per the latest available directory estimate), building either (a) UPI Autopay / recurring-billing / mandate infrastructure or (b) DPDP privacy / consent-management tooling. Employee figures are **third-party estimates** from Tracxn, Inc42, LinkedIn or PitchBook — not statutory filings. Founding years are company-stated or directory-stated.

| # | Company | Website | Founded | Employees (as-of) | 1-yr growth | Focus | One-sentence product summary |
|---|---|---|---|---|---|---|---|
| 1 | **RocketPay** | rocketpay.co.in | 2022 | **57** (May 2026); LinkedIn shows 60 | n/a; **−5% in last 90 days** (Inc42) | UPI Autopay + eNACH mandate collections | B2B collections infrastructure that automates EMIs, subscriptions, deposits and trade credit through UPI Autopay and eNACH mandates, with retries, reconciliation and device-locking add-ons [S1] |
| 2 | **Dodo Payments** | dodopayments.com | 2024 | **72** (Jul 2026); LinkedIn 84 | n/a | Global billing + merchant of record | Merchant-of-record and billing platform for SaaS/AI companies, handling subscriptions, usage/credit billing, tax and 40+ local payment methods including UPI and RuPay [S2] |
| 3 | **Flexprice** | flexprice.io | 2024 | **28** (Sep–Oct 2026) | n/a | Open-source usage/credit billing | Open-source, self-hostable billing and metering engine for usage-based, credit-based and hybrid pricing, with integrations to Stripe, Adyen and Razorpay [S3] |
| 4 | **SubversePay** | subversepay.in | 2025 | **5** (Jul 2026) | n/a | Recurring collections for offline subscriptions | Subscription-management and recurring-collections platform for offline/Tier-2 businesses (starting with cable-TV operators), using UPI Autopay, NACH, WhatsApp reminders and AI retries [S4] |
| 5 | **Originpay** | originpay.in | 2023 (claimed) | **2** (May 2026); band 11–50 | n/a | Payment orchestration + subscription billing | Payment-orchestration platform with a subscription-billing engine that manages UPI mandates, card auto-charges, proration, dunning and revenue recovery [S5] |
| 6 | **GoTrust** | gotrust.tech | 2023 | **80–82** (Jun 2026); Inc42 later shows 110 | n/a; Inc42 shows **+44.6% in last 90 days** on one snapshot | DPDP/GDPR consent + privacy automation | Noida-based privacy platform combining consent/preference management, data discovery, DSPM, DLP and DSR workflows for DPDPA, GDPR and other regimes [S6] |
| 7 | **Redacto** | redacto.ai | 2024 | **46** (Sep 2026) | n/a; **+12.2% in last 90 days** (Inc42) | AI privacy/data-governance platform | AI-driven privacy suite with data discovery/mapping, ConsentFlow for consent management, VendorShield for third-party risk and TrustCentre for compliance evidence [S7] |
| 8 | **KavachOne** | kavachone.com | 2023 | **36** (Oct 2026) | n/a | DPDP consent + privacy suite | Cybersecurity/compliance firm whose **ConsentiQo** product provides purpose-based DPDP consent, cookie scanning, DSARs, RoPA/DPIA and seven-year audit logs across 22 Indian languages [S8] |
| 9 | **DPDP.ai** | dpdp.ai | 2023 | **2–10** (LinkedIn) | n/a | DPDP compliance suite | DPDP-focused platform covering consent, cookie consent, PII discovery, data-principal rights, RoPA/DPIA and breach/vendor management, with 22-language notices [S9] |
| 10 | **Consently** | consently.in | 2025 | **3–4** (2026) | n/a | DPDPA-native consent management | Low-cost, India-only CMP offering cookie consent, purpose-based DPDPA consent, rights requests, breach and vendor management with published INR pricing and 22 languages [S10] |

### Verification notes and red flags

- **RocketPay** is the cleanest fit: founded 2022, ~57–60 staff, explicit UPI Autopay/eNACH product, and a subscription-collections line [S1].
- **Dodo Payments** is Indian-founded and Bengaluru-based, but its LinkedIn primary HQ is **Dover, US**; treat “Indian startup” as qualified. Employee estimates range 62–84 across 2026 snapshots [S2].
- **Flexprice** is India-founded (Bengaluru per Indexed/PitchBook) but LinkedIn lists **San Francisco** as HQ. Its 28-person team is well under 100; “Indian startup” needs entity-level confirmation [S3].
- **SubversePay** is pre-revenue/beta (cable-TV operators first), DPIIT-recognised, 5 people. Useful as a signal, not a competitor at scale [S4].
- **Originpay** claims “since 2023,” but its legal entity **Speedx Innovations Pvt Ltd** carries a 2025 CIN; the founding-year claim and the incorporation date do not match. It also has only ~2 visible employees. Treat as very early [S5].
- **GoTrust** is the strongest DPDP-consent fit by product, but headcount is unstable across sources (80 / 81 / 82 / 110). It may have **crossed 100** by late 2026; verify before relying on the <100 filter [S6].
- **Redacto** is the best-funded and fastest-growing pure-play privacy startup in the set (₹12 crore seed, Oct 2025; 46 staff; +12.2% in 90 days) [S7].
- **KavachOne** is primarily a cybersecurity/PCI-DSS consultancy; ConsentiQo is a product line, not the whole company. Still fits the DPDP-tooling criterion [S8].
- **DPDP.ai** is extremely small (2–10) and its November 2026 release describes it as “powered by Surepass Technologies”; ownership/control is unclear [S9].
- **Consently** is a 3–4 person, unfunded Delhi startup with published INR pricing; useful as a price benchmark, not an enterprise threat [S10].

### What the map says about the market

1. **Two distinct clusters.** Mandate/billing infrastructure (RocketPay, Dodo, Flexprice, Originpay, SubversePay) competes on rails, success rates and billing logic. DPDP tooling (GoTrust, Redacto, KavachOne, DPDP.ai, Consently) competes on consent evidence, languages and audit readiness.
2. **The DPDP tooling market is crowded at the low end** (many sub-10-person CMPs) but thin at the enterprise/regulated-BFSI end, where GoTrust and Redacto are positioning. Price competition will be severe for a generic CMP.
3. **Nobody in this set combines recurring billing and DPDP consent.** For a B2B SaaS, that is a partnership/integration opportunity rather than a single-vendor purchase.
4. **Registered Consent Manager status is a moat, not a feature.** Only companies meeting the ₹2 crore net-worth and certification conditions can register; none of the 10 is confirmed as a registered Consent Manager as of 28 Nov 2026.

---

## What I could not verify (explicit gaps)

**Regulatory**
- I could **not open the MeitY PDFs or eGazette PDFs directly** (HTTP 403 / transport errors). The Rules’ rule-by-rule content was checked against multiple mirrors of the Gazette text and the PIB release, but not against the signed PDF itself.
- The **exact publication date** of the DPDP Rules is genuinely ambiguous: Gazette masthead 13 Nov 2025; MeitY library and some PIB material say 14 Nov 2025. I have used 13 Nov 2025 and flagged the one-day difference.
- I could not independently confirm whether the **Data Protection Board has appointed members** or is functioning; the PIB release names none, and the Kerala High Court statement is secondary reporting.
- I found **no amending notification** that shortens the 18-month window, but I could not exhaustively search the Gazette index; absence of evidence is not proof.
- I found **no post-21 April 2026 RBI circular** changing the ₹15,000/₹1 lakh thresholds, but did not review every RBI notification after that date.

**Startup data**
- **Employee counts are estimates**, not statutory filings. Sources conflict materially for GoTrust (80–110) and RocketPay (26–60).
- **One-year headcount growth is not published** for most companies; where I show growth it is a **90-day** change from Inc42, not annual.
- **Originpay’s founding year** (2023 claim vs 2025 incorporation) and **DPDP.ai’s ownership** (Surepass relationship) are unresolved.
- **Flexprice’s and Dodo’s “Indian startup” status** is qualified by US headquarters listings.
- No company confirmed its own data; no revenue, cap-table or customer diligence was possible.

---

## Tools & gaps

**Tools actually used:** `websearch` (multiple queries on RBI, DPDP, and company discovery) and `webfetch` (successful direct fetch of `rbi.org.in` Master Direction page; attempted `meity.gov.in`, `egazette.gov.in`, and PDF fetches, which returned 403, transport errors, or unsupported PDF content). No Crunchbase/Tracxn API, no LinkedIn login, no files created.

**Primary-source status:** RBI direction verified directly from `rbi.org.in`. DPDP instruments verified via PIB (official) and indexed Gazette text; the MeitY/eGazette PDFs themselves were not directly accessible. Startup facts are directory/company-page estimates and are labelled as such.

---

### Sources

**Regulatory**
1. RBI, *Digital Payments – E-mandate Framework, 2026*, RBI/DPSS/2026-27/396, 21 Apr 2026 — https://rbi.org.in/SCRIPTs/BS_ViewMasDirections.aspx?id=13374 (PDF: https://rbidocs.rbi.org.in/rdocs/notification/PDFs/396MDD002E435ECA145509929FC3ACBCFD0E9.PDF)
2. RBI, *Processing of e-mandates for recurring transactions*, CO.DPSS.POLC.No.S-518/02.14.003/2022-23, 16 Jun 2022 — https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12341&Mode=0
3. RBI, *Processing of e-mandates for recurring transactions*, CO.DPSS.POLC.No.S-882/02.14.003/2023-24, 12 Dec 2023 — https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12570&Mode=0
4. PIB, *Consent Manager Registration Framework Comes into Effect…*, Release ID 2336151, 14 Nov 2026 — https://www.pib.gov.in/PressReleasePage.aspx?PRID=2336151
5. MeitY, *Digital Personal Data Protection Rules 2025* document library (Rules published 14.11.2025; corrigendum 16.12.2025) — https://www.meity.gov.in/documents/act-and-policies/digital-personal-dataprotection-rules-2025-gDOxUjMtQWa
6. G.S.R. 843(E), commencement notification, 13 Nov 2025 — https://egazette.gov.in/WriteReadData/2025/267647.pdf
7. G.S.R. 846(E), DPDP Rules 2025, 13 Nov 2025 — https://egazette.gov.in/WriteReadData/2025/267650.pdf
8. S.O. 5458(E), *Digital Personal Data Protection (Removal of Difficulties) Order, 2026*, 5 Oct 2026 — https://egazette.gov.in/WriteReadData/2026/276885.pdf
9. DPDP Act, 2023 (Act 22 of 2023) — https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf
10. Rule 7 text (72-hour breach intimation) — https://www.dpdpa.in/dpdpa_rules_2025/Rule_7.htm

**Startups**
- [S1] https://www.rocketpay.co.in/about ; https://tracxn.com/d/companies/rocketpay/__2HHSfwRmhNzDNMJHgmF2bqkuxPJF5DUGQ9IQlbYU7XI ; https://inc42.com/company/rocketpay/
- [S2] https://www.dodopayments.com/about ; https://tracxn.com/d/companies/dodo-payments/__gd4LAG8sid7fH3BYl5wYs_OlbZlBQMIIOc80O5VZn2I ; https://www.linkedin.com/company/dodopayments
- [S3] https://flexprice.io/about ; https://tracxn.com/d/companies/flexprice/__QbaVP7MYn9gpT_KWHEWZsjgCqjep3c4oDaLIWgZlAok ; https://indexed.vc/companies/flexprice
- [S4] https://www.linkedin.com/company/subverse-pay ; https://tracxn.com/d/companies/subversepay-technologies/__O0_K9mSXuBVQR789efwL_AI1le1xAET7UCpD1lsDMXs ; https://subversepay.in/
- [S5] https://originpay.in/about-us ; https://www.linkedin.com/company/originpay ; https://originpay.in/products/subscriptions
- [S6] https://www.gotrust.tech/ ; https://tracxn.com/d/companies/gotrust/__v9k5eEtwl8Wl4ljwfZxmIMRXUb9rsQNj6Rw_aKSNFhU ; https://inc42.com/company/gotrust
- [S7] https://tracxn.com/d/companies/redacto/__yEi0eKotixQxv2moSuUTb7nbXThbJ4G-tanmPqh-1gM ; https://inc42.com/company/redacto ; https://entrackr.com/snippets/redacto-raises-rs-12-cr-in-seed-round-led-by-peercapital-10606066
- [S8] https://www.linkedin.com/company/kavachonesolutions ; https://yourstory.com/companies/kavachone ; https://kavachone.com/
- [S9] https://www.dpdp.ai/about-us ; https://www.linkedin.com/company/dpdp-ai ; https://forpressrelease.com/forpressrelease/679337/21/surepass-introduces-dpdpai-an-all-in-one-compliance-management-platform
- [S10] https://consently.in/ ; https://tracxn.com/d/companies/consently/__fw1q3zSxoKcU6UdQ95b9xB31j8stCzYzf-2eF_j1zsE ; https://www.linkedin.com/company/consentlyindia
