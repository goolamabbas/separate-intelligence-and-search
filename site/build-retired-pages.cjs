// Preserve shared URLs without publishing the retired walkthrough.
const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, '..', '_site', 'guide', 'tinyfish-beginner');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Walkthrough retired</title><style>body{font:18px/1.6 system-ui;max-width:42rem;margin:10vh auto;padding:1.5rem;color:#182326}a{color:#086b67}</style></head><body><main><h1>This walkthrough has been retired</h1><p>The guide now focuses on Octen, Exa, Perplexity and Parallel. The earlier ChatGPT + TinyFish example is no longer maintained.</p><p><a href="../research-prompts/#four-starters">Choose a current starter prompt</a> or <a href="../choosing-providers/#other-tools-to-explore">explore other tools</a>.</p><p>The <a href="https://github.com/goolamabbas/separate-intelligence-and-search/tree/main/archive/tinyfish-beginner">historical walkthrough and evidence</a> remain in the repository.</p></main></body></html>`);
