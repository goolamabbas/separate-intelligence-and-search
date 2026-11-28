// Build the India SaaS controlled A/B/C worked example from its maintained Markdown source.
const fs = require('node:fs');
const path = require('node:path');
const { Marked } = require('marked');
const root = path.resolve(__dirname, '..');
const output = path.join(root, '_site', 'guide', 'india-saas-case-study');
const source = fs.readFileSync(path.join(root, 'docs/india-saas-case-study.md'), 'utf8');
const github = 'https://github.com/goolamabbas/separate-intelligence-and-search/blob/main/docs/';
const introduction = 'https://goolamabbas.github.io/separate-intelligence-and-search/';
const escape = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const slug = text => text.toLowerCase().replace(/[^\p{L}\p{N}_\- ]/gu, '').replaceAll(' ', '-');
const title = source.match(/^# (.+)$/m)[1];
const subtitle = 'Same open-weight model in OpenCode v2.4.2 across bare, native websearch, and Parallel + Exa MCP with v0.12.0.';
const headings = [...source.replace(/```[\s\S]*?```/g, '').matchAll(/^## (.+)$/gm)].map(m => m[1]);
const toc = headings.map(h => `<a href="#${slug(h)}">${escape(h)}</a>`).join('\n');
let body = source.replace(/^# .+\n\n/, '')
  .replace(/^\[← Start with the introduction\].*\n/m, '');
let parent = '';
const markdown = new Marked();
markdown.use({renderer: {
  heading({tokens,depth,text}) {
    if (depth === 2) parent = slug(text);
    const id = depth > 2 ? parent + '-' + slug(text) : slug(text);
    return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}<a class="heading-anchor" href="#${id}" aria-label="Link to ${escape(text)}">#</a></h${depth}>\n`;
  },
  link({href,title,tokens}) {
    if (href === 'README.md') href = introduction + 'guide/';
    else if (href === '../README.md') href = introduction;
    else if (/^research-prompts\.md(?:#.*)?$/.test(href)) href = introduction + 'guide/research-prompts/' + (href.includes('#') ? href.slice(href.indexOf('#')) : '');
    else if (/^choosing-providers\.md(?:#.*)?$/.test(href)) href = introduction + 'guide/choosing-providers/' + (href.includes('#') ? href.slice(href.indexOf('#')) : '');
    else if (/^connecting-providers\.md(?:#.*)?$/.test(href)) href = introduction + 'guide/connecting-providers/' + (href.includes('#') ? href.slice(href.indexOf('#')) : '');
    else if (/^costs\.md(?:#.*)?$/.test(href)) href = introduction + 'guide/costs/' + (href.includes('#') ? href.slice(href.indexOf('#')) : '');
    return `<a href="${escape(href)}"${title ? ` title="${escape(title)}"` : ''}>${this.parser.parseInline(tokens)}</a>`;
  }
}});
let html = markdown.parse(body);
let tableCount = 0;
html = html.replace(/<table>/g, () => `<div class="table-scroll" tabindex="0" role="region" aria-label="Comparison table ${++tableCount}"><table>`).replaceAll('</table>', '</table></div>');
const sections = html.split(/(?=<h2 )/);
html = `<div class="opening">${sections.shift()}</div>` + sections.map(s => {
  const id = s.match(/id="([^"]+)"/)[1];
  return `<section class="guide-section ${id}">${s}</section>`;
}).join('\n');
const guideNav = `<a href="${introduction}guide/">Overview</a><a href="${introduction}guide/choosing-providers/">Choosing providers</a><a href="${introduction}guide/connecting-providers/">Connecting providers</a><a href="${introduction}guide/research-prompts/">Research prompts</a>`;
const document = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escape(subtitle)}"><link rel="canonical" href="${introduction}guide/india-saas-case-study/"><meta property="og:type" content="website"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(subtitle)}"><meta property="og:url" content="${introduction}guide/india-saas-case-study/"><meta property="og:image" content="${introduction}assets/intelligence-and-search.png"><meta name="twitter:card" content="summary_large_image"><meta name="color-scheme" content="light"><title>${escape(title)}</title><link rel="stylesheet" href="guide.css"><link rel="stylesheet" href="connecting.css"></head><body>
<a href="#main" class="skip">Skip to worked example</a>

<header class="header"><div class="header-inner"><a class="brand" href="${introduction}"><span class="mark" aria-hidden="true">↗</span> Separate intelligence & search</a><nav aria-label="Site navigation"><a href="${introduction}">Introduction</a><a href="${github}india-saas-case-study.md">View source on GitHub ↗</a></nav></div></header>
<div class="layout"><aside class="sidebar"><nav class="guide-nav" aria-label="Guide pages"><p class="nav-label">THE RESEARCH GUIDE</p>${guideNav}</nav><nav class="toc" aria-label="On this page"><p class="nav-label">ON THIS PAGE</p>${toc}</nav><a class="sidebar-bottom" href="#main">Back to top ↑</a></aside>
<main id="main"><div class="page-heading"><div class="breadcrumb"><a href="${introduction}">Introduction</a><span aria-hidden="true">/</span><a href="${introduction}guide/">Guide</a><span aria-hidden="true">/</span><span>Worked example</span></div><p class="eyebrow">WORKED EXAMPLE · 28 NOVEMBER 2026</p><h1>${escape(title)}</h1><p class="subtitle">${escape(subtitle)}</p><div class="page-meta"><span>By Yusuf Goolamabbas</span><span>Controlled A/B/C test</span></div></div>
<details class="mobile-navigation"><summary>Explore the guide & this page <span aria-hidden="true">+</span></summary><nav aria-label="Mobile guide pages">${guideNav}</nav><nav class="toc" aria-label="Mobile table of contents">${toc}</nav></details>
<article>${html}</article>
<footer class="article-footer"><a href="${introduction}guide/">← Back to the main guide</a><a href="${github}india-saas-case-study.md">View Markdown source ↗</a></footer></main></div><script src="guide.js"></script></body></html>`;
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'index.html'), document);
for (const name of ['guide.css', 'guide.js', 'connecting.css']) fs.copyFileSync(path.join(root, 'site', name), path.join(output, name));
console.log(`Built India SaaS case study: ${headings.length} sections, ${tableCount} tables.`);
