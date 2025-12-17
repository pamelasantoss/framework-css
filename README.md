# Framework CSS

Lightweight CSS framework and responsive grid system written in SASS. Designed as a small, reusable set of styles to use instead of larger UI frameworks. Includes base typography, buttons, tables, form styles and a modular SASS structure.

Status: Prototype — SCSS source files and Gulp build tasks are included.

### Key features
- Responsive grid
- Base typography and variables
- Buttons, tables and form controls
- Modular SASS partials in `src/scss/`

### Where to edit
- Entry SCSS: `src/scss/style.scss`
- Generated CSS: `css/style.css` and `css/style.min.css`
- Example page: `index.html`

### Requirements
- Node.js (LTS recommended) and npm
- Gulp is listed in `package.json` (v3.x). Use `npx gulp` if you do not have a global CLI installed.

### Quick start
1. Install dependencies:

```
npm install
```
2. Build the CSS (one option):

```
npx gulp
```
3. Open `index.html` to preview the styles.

If the `gulpfile.js` includes a watch/serve task, `npx gulp` may also start a development server with live reload (`browser-sync`).

### Project structure
- `src/scss/` — SASS partials and `style.scss` (source)
- `css/` — compiled outputs (`style.css`, `style.min.css`)
- `index.html` — demo/example page
- `gulpfile.js` — build tasks

### Next steps
- Upgrade to Gulp 4 for improved compatibility and maintainability
- Add npm scripts for common tasks (`build`, `watch`, `start`) in `package.json`
- Produce component documentation (grid usage, utility classes, button variants)
- Refine variables/tokens (`src/scss/_variables.scss`) for colors, spacing and typography
- Add automated release/publishing (npm package or CDN)

### Contributing
- Open issues for bugs or feature requests
- Send pull requests with focused changes and clear descriptions

### License

ISC

---

Made with ❤️ by [Pamela Santos](https://pamelasantos.dev.br/)