// Build the main guide from its maintained Markdown source.
const fs = require('node:fs');
const path = require('node:path');
const { Marked } = require('marked');
const root = path.resolve(__dirname, '..');
const output = path.join(root, '_site', 'guide', 'connecting-providers');
const source = fs.readFileSync(path.join(root, 'docs/connecting-providers.md'), 'utf8');
const github = 'https://github.com/goolamabbas/separate-intelligence-and-search/blob/main/docs/';
const introduction = 'https://goolamabbas.github.io/separate-intelligence-and-search/';
const escape = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const slug = text => text.toLowerCase().replace(/[^\p{L}\p{N}_\- ]/gu, '').replaceAll(' ', '-');
const title = source.match(/^# (.+)$/m)[1];
const subtitle = 'Connect one provider, verify useful results, then add the routing skill.';
const headings = [...source.replace(/```[\s\S]*?```/g, '').matchAll(/^## (.+)$/gm)].map(m => m[1]).filter(h => h !== 'On this page');
const toc = headings.map(h => `<a href="#${slug(h)}">${escape(h)}</a>`).join('\n');
let body = source.replace(/^# .+\n\n/, '')
  .replace(/^\[← Start with the introduction\].*\n/m, '')
  .replace(/^## On this page\n[\s\S]*?(?=^## )/m, '');
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
    return `<a href="${escape(href)}"${title ? ` title="${escape(title)}"` : ''}>${this.parser.parseInline(tokens)}</a>`;
  }
}});
let html = markdown.parse(body);
let promptCount = 0;
html = html.replace(/<pre><code(?: class="[^"]*")?>([\s\S]*?)<\/code><\/pre>/g, (_, code) => {
  const i = ++promptCount;
  const label = ['prompt', 'endpoint', 'configuration', 'instructions', 'instructions'][i-1] || 'example';
  return `<div class="prompt-block"><div class="prompt-bar"><span>COPYABLE ${label.toUpperCase()}</span><button type="button" data-copy="prompt-${i}" aria-label="Copy ${label} ${i}">Copy ${label} <span aria-hidden="true">⧉</span></button></div><pre id="prompt-${i}"><code>${code}</code></pre><p class="copy-status" role="status" aria-live="polite"></p></div>`;
});
let tableCount = 0;
html = html.replace(/<table>/g, () => `<div class="table-scroll" tabindex="0" role="region" aria-label="Reference table ${++tableCount}"><table>`).replaceAll('</table>', '</table></div>');
html = html.replace(/<p><img ([\s\S]*?)><\/p>/g, '<figure><img $1 loading="lazy"></figure>');
const sections = html.split(/(?=<h2 )/);
html = `<div class="opening">${sections.shift()}</div>` + sections.map(s => {
  const id = s.match(/id="([^"]+)"/)[1];
  return `<section class="guide-section ${id}">${s}</section>`;
}).join('\n');
const guideNav = `<a href="${introduction}guide/">Overview</a><a href="${introduction}guide/choosing-providers/">Choosing providers</a><a href="#main" class="selected" aria-current="page">Connecting providers <span>Reading now</span></a><a href="${introduction}guide/research-prompts/">Research prompts</a>`;
const document = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escape(subtitle)}"><link rel="canonical" href="${introduction}guide/connecting-providers/"><meta property="og:type" content="website"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(subtitle)}"><meta property="og:url" content="${introduction}guide/connecting-providers/"><meta property="og:image" content="${introduction}assets/intelligence-and-search.png"><meta name="twitter:card" content="summary_large_image"><meta name="color-scheme" content="light"><title>${title}</title><link rel="stylesheet" href="guide.css"><link rel="stylesheet" href="connecting.css"></head><body>
<a href="#main" class="skip">Skip to guide</a>

<header class="header"><div class="header-inner"><a class="brand" href="${introduction}"><span class="mark" aria-hidden="true">↗</span> Separate intelligence & search</a><nav aria-label="Site navigation"><a href="${introduction}">Introduction</a><a href="${github}connecting-providers.md">View source on GitHub ↗</a></nav></div></header>
<div class="layout"><aside class="sidebar"><nav class="guide-nav" aria-label="Guide pages"><p class="nav-label">THE RESEARCH GUIDE</p>${guideNav}</nav><nav class="toc" aria-label="On this page"><p class="nav-label">ON THIS PAGE</p>${toc}</nav><a class="sidebar-bottom" href="#main">Back to top ↑</a></aside>
<main id="main"><div class="page-heading"><div class="breadcrumb"><a href="${introduction}">Introduction</a><span aria-hidden="true">/</span><a href="${introduction}guide/">Guide</a><span aria-hidden="true">/</span><span>Connecting providers</span></div><p class="eyebrow">CONNECT & VERIFY</p><h1>${escape(title)}</h1><p class="subtitle">${escape(subtitle)}</p><div class="page-meta"><span>By Yusuf Goolamabbas</span><span>Connecting providers</span></div></div>
<details class="mobile-navigation"><summary>Explore the guide & this page <span aria-hidden="true">+</span></summary><nav aria-label="Mobile guide pages">${guideNav}</nav><nav class="toc" aria-label="Mobile table of contents">${toc}</nav></details>
<article>${html}</article>
<footer class="article-footer"><a href="${introduction}guide/">← Back to the main guide</a><a href="${github}connecting-providers.md">View Markdown source ↗</a></footer></main></div><script src="guide.js"></script></body></html>`;
fs.mkdirSync(path.join(output, 'assets'), { recursive: true });
fs.writeFileSync(path.join(output, 'index.html'), document);
for (const name of ['guide.css','guide.js']) fs.copyFileSync(path.join(root,'site',name),path.join(output,name));
fs.copyFileSync(path.join(__dirname,'connecting.css'),path.join(output,'connecting.css'));
console.log(`Built connecting providers: ${headings.length} sections, ${promptCount} prompts, ${tableCount} tables.`);
// Copy feedback applies to prompts, configuration, endpoints, and instructions.
const scriptPath = path.join(output, 'guide.js');
fs.writeFileSync(scriptPath, fs.readFileSync(scriptPath, 'utf8').replace('Copied. Paste into your assistant and adapt the placeholders.', 'Copied the complete block.').replace('Prompt selected. Use your browser’s Copy command.', 'Block selected. Use your browser’s Copy command.'));
