# Educational website

The public introduction is published at https://goolamabbas.github.io/separate-intelligence-and-search/ . The main guide is published at https://goolamabbas.github.io/separate-intelligence-and-search/guide/ . Its maintained source remains `docs/README.md`. The research prompt cookbook is published at https://goolamabbas.github.io/separate-intelligence-and-search/guide/research-prompts/ . Choosing providers is published at https://goolamabbas.github.io/separate-intelligence-and-search/guide/choosing-providers/ . Connecting providers still opens its GitHub Markdown edition.

## Content and design

`../README.md` supplies the explanatory copy, glossary, setup details, dated pricing examples, and research prompt. `build.cjs` supplies the landing-page structure and short presentation copy; `style.css` controls its appearance and `script.js` supplies prompt copying. Edit the Markdown source for substantive content updates; do not edit generated HTML.

The September 2026 source qualifications remain in the page. Publishing the website is not a new pricing or provider audit.

`build-guide.cjs` renders the main guide with `guide.css` and `guide.js`, preserving its prompts and diagrams. `build-cookbook.cjs` renders `docs/research-prompts.md`, preserving complete code blocks and explanatory text, with search, group filters, expandable examples, and direct links. It shares the guide styles and copy behavior and adds `cookbook.css` and `cookbook.js`. The main build clears generated output and rebuilds all four pages. `build-choosing.cjs` renders the provider reference from `docs/choosing-providers.md` with shared guide styles and `choosing.css`.

## Build and preview

Use Node.js 22 or later:

```sh
npm ci --ignore-scripts
npm run build
python3 -m http.server 8765 --bind 127.0.0.1 --directory _site
```

Open http://127.0.0.1:8765/ . The output contains only HTML, CSS, JavaScript, and the existing infographic. There are no analytics, cookies, external fonts, or browser-side packages.

## Publication and rollback

The Pages workflow builds on relevant pushes to `main`, or can be run manually. Only `_site/` is uploaded. Dependencies are pinned in the lockfile; no package installation scripts are required. GitHub Pages uses the repository's Actions publishing source.

To revise the design, edit the website source and publish a new commit. To retire the website, disable its deployment workflow and unpublish it in the repository's Pages settings. The original README and detailed guide remain available on GitHub. Revert a design commit to restore an earlier version; review the deployment result after any rollback.

Social preview metadata uses the existing infographic. Messaging applications may cache previews independently of the current website.
