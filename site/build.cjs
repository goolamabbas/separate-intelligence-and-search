// Build the public introduction from the repository README.
// Usage: npm run build
const fs=require('node:fs');const path=require('node:path');
const {marked}=require('marked');
const root=path.resolve(__dirname,'..');const source=fs.readFileSync(path.join(root,'README.md'),'utf8');
const guide='https://goolamabbas.github.io/separate-intelligence-and-search/guide/';
const skill='https://github.com/goolamabbas/multi-provider-research';
const out=path.join(root,'_site');
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(path.join(out,'assets'),{recursive:true});
const sections={};for(const part of source.split(/^## /m).slice(1)){const [title,...body]=part.split('\n');sections[title]=body.join('\n').trim();}
const render=s=>marked.parse(s.replaceAll('(#start-with-a-question-and-one-provider)', '(#start)').replaceAll('(docs/README.md)',`(${guide})`).replaceAll('(assets/','(assets/'));
const setup=sections['Start with a question and one provider'].split(/^### /m).slice(1).map(x=>{const [title,...body]=x.split('\n');return {title,body:body.join('\n')}});
const openingParagraphs=source.split('**[Try it free in 2 minutes]')[0].trimEnd().split('\n\n');
const audience=openingParagraphs[1];
const introLead=openingParagraphs.slice(2,5).join('\n\n');
const introCaveat=openingParagraphs.at(-1);
const prompt=setup[1].body.match(/```text\n([\s\S]*?)```/)[1].trim();
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const html=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><meta name="description" content="Choose your AI assistant and its search tools separately. Keep the AI you like and connect a dedicated search provider for free when you need wider coverage or structured data."><link rel="canonical" href="https://goolamabbas.github.io/separate-intelligence-and-search/"><meta property="og:type" content="website"><meta property="og:title" content="Choose Your AI. Choose How It Searches."><meta property="og:description" content="Your AI subscription pays for intelligence first and bundles search as an add-on. Keep the assistant you like and connect a dedicated search provider for free."><meta property="og:url" content="https://goolamabbas.github.io/separate-intelligence-and-search/"><meta property="og:image" content="https://goolamabbas.github.io/separate-intelligence-and-search/assets/intelligence-and-search.png"><meta property="og:image:alt" content="Intelligence and search are separate choices."><meta name="twitter:card" content="summary_large_image"><title>Choose Your AI. Choose How It Searches.</title><link rel="stylesheet" href="style.css"></head>
<body><a class="skip" href="#main">Skip to content</a>

<header class="masthead wrap"><a class="brand" href="#"><span class="brand-mark" aria-hidden="true">↗</span> Separate intelligence & search</a><nav aria-label="Main navigation"><a href="#idea">The idea</a><a href="${guide}">Detailed guide</a><a href="${skill}">Optional skill <span aria-hidden="true">↗</span></a></nav></header>
<main id="main">
<section class="hero wrap"><div class="eyebrow"><span></span> A practical guide by Yusuf Goolamabbas</div><h1>Choose your AI.<br>Choose <em>how it searches.</em></h1><div class="hero-bottom"><p>${escape(audience)}</p><div class="actions"><a class="button" href="#start">Try it free in 2 minutes <span aria-hidden="true">→</span></a><a class="text-link" href="#idea">See the side-by-side test <span aria-hidden="true">↓</span></a></div></div>
</section>
<section class="section wrap idea idea-text" id="idea"><div><span class="eyebrow">A REAL SIDE-BY-SIDE TEST · 28 NOVEMBER 2026</span><h2>Built-in search is good.<br>It still misses most of the field.</h2><div class="prose">${render(introLead)}</div>
<div class="compare-grid" aria-label="Side-by-side comparison of ChatGPT built-in search and Exa company search">
<div class="compare-card compare-baseline"><span class="compare-label">CHATGPT BUILT-IN SEARCH ONLY</span><h3>GPT-6.2 Astra · 15 startups</h3><ul><li>Found <strong>15 qualifying UK startups</strong> (5 pulled from Y Combinator profiles).</li><li>Returned <strong><code>not found</code> on 12 of 15</strong> for 1-year headcount growth (2 undated Growjo estimates; 1 FY2024–FY2025 filing).</li><li>On <a href="https://godiligent.ai/">Diligent</a> (the one overlapping company): reported <strong>10 employees</strong> from YC and <strong><code>not found</code></strong> for growth.</li></ul></div>
<div class="compare-card compare-external"><span class="compare-label">EXA COMPANY SEARCH · 1 FREE CALL</span><h3>Exa index · 20 startups (19 new)</h3><ul><li>Returned <strong>20 qualifying UK startups</strong> (founded 2023–2025, 2–17 employees) in a single call.</li><li><strong>19 of the 20</strong> did not appear anywhere in ChatGPT’s list (<strong>only 1 company overlapped</strong>).</li><li>Returned tracked <strong>1-year growth on 10 of 20</strong> (plus monthly growth on 3 newer startups), and on <a href="https://godiligent.ai/">Diligent</a> returned <strong>17 employees</strong>, <strong>+157.1% YoY</strong>, 5-country split, and <strong>$3.06M</strong> across 3 dated rounds.</li></ul></div>
</div>
<div class="prose compare-note">${render(introCaveat)}</div>
<div class="why-grid" aria-label="Where dedicated search pulls ahead">
<div class="why-item"><span class="why-num">01</span><h3>Wider coverage & structured indexes</h3><p>One bundled search only shows one slice of the web. Dedicated company, filing, paper, and transcript indexes uncover more of the market with structured fields attached.</p></div>
<div class="why-item"><span class="why-num">02</span><h3>Controls a search toggle hides</h3><p>Get domain locks, date and freshness filters, point-in-time search, ongoing monitors, live traffic or registry data, and authenticated X bookmarks in the same chat.</p></div>
<div class="why-item"><span class="why-num">03</span><h3>Multiply a low-cost agent</h3><p>Affordable coding agents such as Cursor Start or Command Code Go cannot afford to subsidize heavy web search. Connect one free MCP search provider to upgrade them for $0 extra. <a href="#budget">See budget setups</a>.</p></div>
</div>
</div></section>
<section class="wrap" aria-label="How the assistant uses research tools"><div class="choice-map" aria-label="Two separate choices, working together"><div class="choice"><div class="choice-label">01 / YOUR INTELLIGENCE</div><h2>The assistant you like.</h2><p>Interprets your question.<br> Reasons with evidence. Writes the answer.</p><div class="tags"><span>Your application</span><span>Your model</span></div></div><div class="map-join" aria-hidden="true">+</div><div class="choice search-choice"><div class="choice-label">02 / YOUR RESEARCH TOOLS</div><h2>The evidence you need.</h2><p>Finds relevant sources.<br> Retrieves the content for your assistant.</p><div class="tags"><span>Search</span><span>Retrieve</span><span>Verify</span></div></div><div class="map-caption"><span class="connector-line" aria-hidden="true"></span><p>Your application connects the tools. Your chosen model writes the answer using the sources they return.</p></div></div>
<p class="hero-footnote">Keep your assistant. Add one free search provider when coverage or structured data matters.</p></section>
<section class="start-band" id="start"><div class="wrap"><span class="eyebrow">TRY IT FREE IN 2 MINUTES</span><div class="section-heading"><h2>One connector.<br>One real test.</h2><p>The full guide compares five providers neutrally. For a 2-minute, no-card test, start with Exa or Parallel.</p></div><div class="steps"><div class="step connect-step"><div class="step-title"><span class="step-number">01</span><span><h3>${escape(setup[0].title.replace(/^\d+\. /,''))}</h3><p>No credit card required. Exa gives $10/month in free credits; Parallel works with no account at all.</p></span></div><div class="step-body prose">${render(setup[0].body)}</div></div><div class="step prompt-step"><div class="step-title"><span class="step-number">02</span><span><h3>${escape(setup[1].title.replace(/^\d+\. /,''))}</h3><p>Ready to paste as-is. No brackets to fill in.</p></span></div><div class="prompt"><div class="prompt-toolbar"><span>READY-TO-RUN TEST PROMPT</span><button id="copy-prompt" type="button">Copy prompt <span aria-hidden="true">⧉</span></button></div><pre id="research-prompt">${escape(prompt)}</pre></div><p id="copy-status" class="copy-status" role="status" aria-live="polite"></p><p class="step-end">Check the tool activity above the answer to confirm <strong>Exa</strong> ran (not generic “Searched the web”), then open two links to inspect the evidence. Curious about the contrast? Paste the same prompt into a fresh chat with connectors off and count how many companies overlap and how many growth figures come back <code>not found</code>.</p></div></div><p class="dated-note">${marked.parseInline(setup[1].body.trim().split('\n\n').at(-1))}</p></div></section>
<section class="section wrap examples" id="examples"><span class="eyebrow">QUESTIONS FOR YOUR INTERESTS AND WORK</span><h2>What would you like to find out?</h2><div class="prose">${render(sections['Four questions to try']).replace('<h3>Explore ideas for a creative project</h3>', '<h3 id="creative-project">Explore ideas for a creative project</h3>')}</div></section>
<section class="terms-band"><div class="wrap"><div class="section-heading"><div><span class="eyebrow">THE PIECES, IN PLAIN LANGUAGE</span><h2>A few terms. No prerequisites.</h2></div><p>You do not need to know the terminology before you begin.</p></div><div class="terms-grid">${[...sections['The pieces, in plain language'].matchAll(/^\| \*\*(.*?)\*\* \| (.*?) \|$/gm)].filter(m=>m[1]!=='Skill').map((m,i)=>`<div class="term"><span class="term-number">0${i+1}</span><h3>${m[1]}</h3><p>${marked.parseInline(m[2])}</p></div>`).join('')}</div><p class="terms-note"><strong>Search</strong> finds useful sources. <strong>Retrieval</strong> brings back their contents. Some services also research and analyze using their own models. <a href="${guide}choosing-providers/#when-agent-ultra-is-worth-it">Exa Agent Ultra is one optional example</a>; it does not inherit your selected model.</p></div></section>
<section class="section wrap skill-section" id="optional-skill"><div><span class="eyebrow">OPTIONAL REUSABLE GUIDANCE</span><h2>Give each tool<br>a clear job.</h2><p class="lead">Once you have tried a provider, decide whether reusable instructions would help.</p></div><div class="skill-copy prose">${render(sections['What the optional skill adds'])}</div></section>
<section class="section wrap budget" id="budget"><div><span class="eyebrow">MAKE YOUR SETUP WORK FOR YOU</span><h2>More choice.<br>A budget that fits.</h2></div><div><p class="lead">Low-cost coding agents cannot afford to subsidize heavy web search. Pair one over MCP with a free-tier search provider to turn a budget workspace into a strong research assistant.</p><div class="prose">${render(sections['This freedom of choice can also help with cost'])}</div></div></section>
<section class="worked-example wrap" aria-labelledby="worked-example-title"><span class="eyebrow">A WORKED EXAMPLE</span><h2 id="worked-example-title">See the approach in practice.</h2><div class="prose">${render(sections['See the approach in practice'])}</div></section>
<section class="next wrap"><span class="eyebrow">WHEN YOU’RE READY TO GO DEEPER</span><h2>Build on what works.</h2><p>Find the right capability, connect it, and put it to work.</p><div class="next-grid"><a href="${guide}"><span>01 / THE GUIDE</span><h3>Explore the possibilities.</h3><p>Provider comparisons, connection guidance, and copyable research prompts.</p><b aria-hidden="true">↗</b></a><a href="${skill}"><span>02 / OPTIONAL SKILL</span><h3>Bring the tools together.</h3><p>The installable instructions, current setup guidance, and routing rules.</p><b aria-hidden="true">↗</b></a></div></section>
</main><footer class="wrap"><div><strong>Separate intelligence & search</strong><p>A practical guide by Yusuf Goolamabbas.</p></div><div><a href="https://github.com/goolamabbas/separate-intelligence-and-search">View source on GitHub ↗</a><a href="https://paragraph.com/@yusufg-ai-web3-curated-topics/a-practical-guide-to-choosing-external-research-tools-for-ai-agents">Newsletter introduction ↗</a><a href="https://artificialanalysis.ai/agents/search-api">Search benchmark ↗</a></div></footer><script src="script.js"></script></body></html>`;
fs.writeFileSync(path.join(out,'index.html'),html);
for (const name of ['style.css','script.js']) fs.copyFileSync(path.join(__dirname,name),path.join(out,name));
fs.copyFileSync(path.join(root,'assets/intelligence-and-search.png'),path.join(out,'assets/intelligence-and-search.png'));
console.log('Built _site/ from README.md');

require('./build-guide.cjs');

require('./build-cookbook.cjs');

require('./build-choosing.cjs');

require('./build-connecting.cjs');

require("./build-ultra-case.cjs");

require("./build-retired-pages.cjs");

require("./build-costs.cjs");

require("./external-links.cjs");

require("./site-navigation.cjs");
