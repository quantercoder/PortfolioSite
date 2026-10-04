# PortfolioSite

Personal portfolio of Sam Lam, live at [samlam.eu](https://samlam.eu).

Plain HTML, CSS and JavaScript. No build step: Cloudflare Pages serves the repo root, and every push to `main` deploys.

- `index.html`, `about.html`, `projects.html`, `contact.html`, `newsletter.html`
- `css/style.css`: all styles, including the scroll-driven animations
- `js/main.js`: contact and newsletter forms (posted to Google Sheets)
- `_redirects`: keeps the old `/HTML/...` URLs working

Preview locally with any static server that supports clean URLs, e.g. `npx serve .`
