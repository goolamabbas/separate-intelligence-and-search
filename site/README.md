# Introduction website

The public introduction is published at https://goolamabbas.github.io/separate-intelligence-and-search/ . The detailed guide remains in `docs/` and website links open its GitHub edition.

## Content and design

`../README.md` supplies the explanatory copy, glossary, setup details, dated pricing examples, and research prompt. `build.cjs` supplies the landing-page structure and short presentation copy; `style.css` controls its appearance and `script.js` supplies prompt copying. Edit the Markdown source for substantive content updates; do not edit generated HTML.

The September 2026 source qualifications remain in the page. Publishing the website is not a new pricing or provider audit.

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
