const fs = require('node:fs');
const path = require('node:path');
const {Marked} = require('marked');
const root = path.resolve(__dirname, '..');
const out = path.join(root, '_site', 'guide', 'research-prompts');
const source = fs.readFileSync(path.join(root, 'docs/research-prompts.md'), 'utf8');
const base = 'https://goolamabbas.github.io/separate-intelligence-and-search/';
const github = 'https://github.com/goolamabbas/separate-intelligence-and-search/blob/main/docs/';
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const slug = s => s.toLowerCase().replace(/[^\p{L}\p{N}_\- ]/gu,'').replaceAll(' ','-');
let count = 0, group = '';
const md = new Marked();
md.use({renderer:{
 heading({depth,text,tokens}) {return `<h${depth} id="${slug(text)}">${this.parser.parseInline(tokens)}<a class="heading-anchor" href="#${slug(text)}" aria-label="Link to ${esc(text)}">#</a></h${depth}>`;},
 link({href,tokens}) {if(href==='README.md') href=base+'guide/'; else if(/^(choosing-providers|connecting-providers)\.md/.test(href)) href=github+href; return `<a href="${esc(href)}">${this.parser.parseInline(tokens)}</a>`;},
 code({text}) {const n=++count; const clause=['Before copying a prompt','Useful control clauses'].includes(group); const label=clause?'clause':'prompt'; return `<div class="prompt-block"><div class="prompt-bar"><span>${clause?'OPTIONAL CONTROL CLAUSE':'RESEARCH PROMPT'}</span><button type="button" data-copy="prompt-${n}">Copy ${label} ⧉</button></div><pre id="prompt-${n}"><code>${esc(text)}</code></pre><p class="copy-status" role="status" aria-live="polite"></p></div>`;}
}});
const cleaned=source.replace(/^# .+\n/,'').replace(/^## On this page\n[\s\S]*?(?=^## )/m,'');
const parts=cleaned.split(/(?=^## )/m);
const opening=md.parse(parts.shift());
const index=[];const toc=[];
const sections=parts.map(part=>{
 group=part.match(/^## (.+)/)[1]; const id=slug(group);toc.push({id,title:group});
 const chunks=part.split(/(?=^### )/m); const lead=chunks.shift();
 if(lead.includes('```')) index.push({id,title:group,group,text:lead});
 let html=md.parse(lead);
 for(const chunk of chunks){const title=chunk.match(/^### (.+)/)[1];const hid=slug(title);const body=chunk.replace(/^### .+\n/,'');
 if(chunk.includes('```')) index.push({id:hid,title,group,text:chunk});
 html+=`<details class="example" id="${hid}"><summary><span>${esc(title)}</span><span class="expand" aria-hidden="true">+</span></summary><div class="example-body"><a class="permalink" href="#${hid}">Link to this example ↗</a>${md.parse(body)}</div></details>`;
 }
 return `<section class="guide-section ${id}">${html}</section>`;
}).join('\n');
const nav=`<a href="${base}guide/">Overview</a><a href="${github}choosing-providers.md">Choosing providers ↗</a><a href="${github}connecting-providers.md">Connecting providers ↗</a><a class="selected" href="#main" aria-current="page">Research prompts <span>Reading now</span></a>`;
const tocHtml=toc.map(x=>`<a href="#${x.id}">${esc(x.title)}</a>`).join('');
const options=[...new Set(index.map(x=>x.group))].map(g=>`<option>${esc(g)}</option>`).join('');
const cards=index.map(x=>`<a class="pattern" href="#${x.id}" data-group="${esc(x.group)}" data-search="${esc(x.text.toLowerCase())}"><span>${esc(x.title)}</span><small>${esc(x.group)}</small></a>`).join('');
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'index.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Find, adapt, and copy harness-neutral research prompts by provider and task."><link rel="canonical" href="${base}guide/research-prompts/"><meta property="og:type" content="website"><meta property="og:title" content="Research prompt cookbook"><meta property="og:description" content="Find, adapt, and copy research prompts by provider and task."><meta property="og:url" content="${base}guide/research-prompts/"><meta property="og:image" content="${base}assets/intelligence-and-search.png"><meta name="twitter:card" content="summary_large_image"><title>Research prompt cookbook</title><link rel="stylesheet" href="guide.css"><link rel="stylesheet" href="cookbook.css"></head><body><a class="skip" href="#main">Skip to cookbook</a><header class="header"><div class="header-inner"><a class="brand" href="${base}"><span class="mark">↗</span>Separate intelligence & search</a><nav aria-label="Site navigation"><a href="${base}guide/">Research guide</a><a href="${github}research-prompts.md">Read on GitHub ↗</a></nav></div></header><div class="layout"><aside class="sidebar"><nav class="guide-nav" aria-label="Guide pages"><p class="nav-label">THE RESEARCH GUIDE</p>${nav}</nav><nav class="toc" aria-label="On this page"><p class="nav-label">ON THIS PAGE</p><a href="#pattern-finder">Find a pattern</a>${tocHtml}</nav><a class="sidebar-bottom" href="#main">Back to top ↑</a></aside><main id="main"><div class="breadcrumb"><a href="${base}">Introduction</a> / <a href="${base}guide/">Guide</a> / Prompts</div><p class="eyebrow">THE RESEARCH COOKBOOK</p><h1>Find a pattern.<br>Make it your own.</h1><p class="subtitle">Harness-neutral research prompts for everyday questions, specific providers, and deeper investigations.</p><div class="page-meta"><span>By Yusuf Goolamabbas</span><span>Copy · adapt · research</span></div><details class="mobile-navigation"><summary>Explore the guide & this page <span>+</span></summary><nav>${nav}</nav><nav class="toc"><a href="#pattern-finder">Find a pattern</a>${tocHtml}</nav></details><div class="quick-start"><p class="eyebrow">START SIMPLE</p><h2>Let the question choose the tools.</h2><p>The recommended everyday prompt uses the minimum sufficient set of providers. Start there, then explore more specific patterns as you need them.</p><a href="#minimum-sufficient-provider-set">Open the everyday research prompt →</a></div><section class="finder" id="pattern-finder" aria-labelledby="finder-title"><h2 id="finder-title">Find a pattern</h2><p>Search by provider, task, or a phrase in the prompt. Open a result to read its context and copy the complete block.</p><div class="filters"><label>Search patterns<input type="search" id="search" placeholder="Try Octen, finance, or verification"></label><label>Pattern group<select id="group"><option value="">All groups</option>${options}</select></label></div><div class="result-meta"><span id="result-count" role="status"></span><button id="reset" type="button">Clear filters</button></div><div class="pattern-list">${cards}</div><p id="empty" hidden>No matching patterns. Try a provider name or clear the filters.</p></section><details class="source-intro"><summary>How to use these harness-neutral examples</summary><div>${opening}</div></details><article>${sections}</article><footer class="article-footer"><a href="${base}guide/">← Back to the main guide</a><a href="${github}research-prompts.md">View Markdown source ↗</a></footer></main></div><script src="guide.js"></script><script src="cookbook.js"></script></body></html>`);
for(const name of ['guide.css','guide.js']) fs.copyFileSync(path.join(root,'site',name),path.join(out,name));
for(const name of ['cookbook.css','cookbook.js']) fs.copyFileSync(path.join(__dirname,name),path.join(out,name));
console.log(`Built cookbook: ${count} complete code blocks; ${index.length} indexed patterns.`);
