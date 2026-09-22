// Apply one external-link policy to every generated educational page.
const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, '..', '_site');
const website = new URL('https://goolamabbas.github.io/separate-intelligence-and-search/');
function visit(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes:true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { visit(file); continue; }
    if (!entry.name.endsWith('.html')) continue;
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/<a\b([^>]*\bhref="([^"]+)"[^>]*)>([\s\S]*?)<\/a>/g, (original, attributes, href, content) => {
      const destination = new URL(href.replaceAll('&amp;', '&'), website);
      const internal = destination.origin === website.origin && destination.pathname.startsWith(website.pathname);
      if (!['http:', 'https:'].includes(destination.protocol) || internal) return original;
      return `<a${attributes} target="_blank" rel="noopener noreferrer">${content}<span class="external-note"> (new tab)</span></a>`;
    });
    html = html.replace('</head>', '<style>.external-note{font-size:.75em;font-weight:400;letter-spacing:normal;white-space:nowrap}.masthead nav .external-note{display:block;font-size:9px}@media print{.external-note{display:none}}</style></head>');
    fs.writeFileSync(file, html);
  }
}
visit(output);
