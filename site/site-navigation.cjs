// Shared navigation and local-safe links for all generated pages.
// Run after the page builders and external-link policy.
const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, '..', '_site');
const base = new URL('https://goolamabbas.github.io/separate-intelligence-and-search/');
const pages = [
  ['guide/', 'Guide overview'],
  ['guide/tinyfish-beginner/', 'Start: ChatGPT + TinyFish'],
  ['guide/choosing-providers/', 'Provider reference'],
  ['guide/connecting-providers/', 'Connect & install'],
  ['guide/research-prompts/', 'Prompt library'],
  ['guide/costs/', 'Costs & access'],
  ['guide/exa-ultra-case-study/', 'Advanced: Exa Ultra'],
];
const esc = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
const relative = (current, target) => {
  const u = new URL(target, base);
  let dest = u.pathname.slice(base.pathname.length);
  if (dest.endsWith('/')) dest += 'index.html';
  let result = path.posix.relative(path.posix.dirname(current), dest || 'index.html');
  if (result === 'index.html') result = './';
  else if (result.endsWith('/index.html')) result = result.slice(0, -10);
  return result + u.search + u.hash;
};
const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#284c42"/><circle cx="27" cy="27" r="14" fill="none" stroke="#f7f6ef" stroke-width="5"/><path d="M38 38L51 51" stroke="#f7f6ef" stroke-width="6" stroke-linecap="round"/></svg>';
fs.writeFileSync(path.join(out, 'favicon.svg'), icon);
function visit(dir) {
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    const f = path.join(dir,e.name);
    if (e.isDirectory()) { visit(f); continue; }
    if (!e.name.endsWith('.html')) continue;
    const current = path.relative(out,f).split(path.sep).join('/');
    let html = fs.readFileSync(f,'utf8');
    const nav = '<p class="nav-label">EXPLORE THE GUIDE</p>' + pages.map(([url,label]) => {
      const active = current === url + 'index.html';
      return `<a href="${base.href}${url}"${active ? ' class="selected" aria-current="page"' : ''}>${label}${active ? ' <span>Reading now</span>' : ''}</a>`;
    }).join('');
    html = html.replace(/(<nav class="guide-nav"[^>]*>)[\s\S]*?<\/nav>/g, `$1${nav}</nav>`);
    html = html.replace(/(<details class="mobile-navigation">[\s\S]*?<\/summary>)<nav[^>]*>[\s\S]*?<\/nav>/g, `$1<nav aria-label="Guide pages">${nav}</nav>`);
    if (current.includes('exa-ultra-case-study')) {
      html = html.replace('<article>', `<details class="mobile-navigation"><summary>Explore the guide <span>+</span></summary><nav aria-label="Guide pages">${nav}</nav></details><article>`);
    }
    if (current === 'index.html') {
      html = html.replace('<a href="#idea">The idea</a>', `<a href="${base.href}guide/tinyfish-beginner/">Start here</a><a href="${base.href}guide/costs/">Costs</a>`);
    }
    // All internal navigation stays inside this build, including a localhost preview.
    html = html.replace(/<a\b([^>]*\bhref="([^"]+)"[^>]*)>([\s\S]*?)<\/a>/g, (whole,attrs,href,content) => {
      if (!href.startsWith(base.href)) return whole;
      const u = new URL(href.replaceAll('&amp;','&'));
      if (u.origin !== base.origin || !u.pathname.startsWith(base.pathname)) return whole;
      attrs = attrs.replace(`href="${href}"`, `href="${esc(relative(current,u.href))}"`).replace(/\s+target="[^"]*"/g,'').replace(/\s+rel="[^"]*"/g,'');
      if (!/class="brand/.test(attrs)) content = content.replace(/<span aria-hidden="true">↗<\/span>/g,'').replace(/<b aria-hidden="true">↗<\/b>/g,'').replace(/\s*↗/g,'');
      return `<a${attrs}>${content}</a>`;
    });
    // Same-page permalinks are not external destinations either.
    html = html.replace(/(Link to this example) ↗/g,'$1');
    html = html.replace('</head>', `<link rel="icon" type="image/svg+xml" href="${relative(current,base.href+'favicon.svg')}"><style>.guide-nav a{padding:8px 10px}.guide-nav .nav-label{margin-bottom:10px}.template-status{font-size:12px;color:var(--muted);margin:4px 0 14px}.mobile-navigation .nav-label{display:none}</style></head>`);
    if (current === 'guide/research-prompts/index.html') {
      html = html.replace('Harness-neutral research prompts for everyday questions, specific providers, and deeper investigations.','Research prompts for everyday questions, specific providers, and deeper investigations.');
      html = html.replace(/(<div class="example-body">)/g,'$1<p class="template-status">Reusable template · no end-to-end run record attached</p>');
    }
    fs.writeFileSync(f,html);
  }
}
visit(out);
