# Jumma Mohammad Teli — Portfolio

A single, static personal portfolio site — clean, minimal, and aimed at UK
recruiters and hiring managers for ML/AI Engineer and Senior Data Analyst roles.
No framework, no build step: just serve the files.

```
index.html    Structure and content shell
styles.css    Theme (light default / dark), layout, responsive rules
script.js     Project + stack data, featured/section rendering, filter, theme,
              nav, reveal, contact form, live repo count
assets/       Your profile photo and CV PDF (see "Assets" below)
README.md     This file
```

The only external dependencies are Font Awesome (icons) and Google Fonts, both
from a CDN. Everything else is self-contained.

## Run locally

Any static server works:

```bash
cd portfolio
python -m http.server 8000
```

Then open <http://localhost:8000>.

> Opening `index.html` directly with `file://` mostly works, but a local server
> avoids browser quirks around fetch/CDN and gives accurate behaviour.

## Assets you need to add

Create these two files (an `assets/` folder is already included):

1. **Profile photo** — `assets/profile.jpg`
   A square image works best; it's shown in a softly-rounded frame in the hero.
   Until you add it, the page shows a neutral "JT" placeholder automatically
   (handled by an `onerror` fallback on the `<img>` — no broken image icon).

2. **CV PDF** — `assets/Jumma-Mohammad-Teli-CV.pdf`
   The "Download CV" buttons (hero + nav) link to this with a `download`
   attribute. Add the file at that exact path and the buttons just work.

Both paths are marked with `TODO` comments in `index.html` so they're easy to find.

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io) (free tier is fine):

1. Sign up at formspree.io and create a new form.
2. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. In `index.html`, find the contact `<form>` and replace **`YOUR_FORM_ID`** in
   its `action` with your real ID (e.g. `abcdwxyz`). A `TODO` comment marks the spot.

Until you set a real ID, the form validates input but shows a "not configured
yet" message instead of sending. Client-side validation (required fields + email
format) and success/error messaging are handled in `script.js` (`initContactForm`).

## Editing content

Almost everything you'll want to change lives in **`script.js`**:

- **Projects** — the `PROJECTS` object near the top. Each section (e.g. `mlops`,
  `ml`, `analytics`) is an array of card objects:

  ```js
  {
    name:      'Project name',
    highlight: 'One-line highlight shown on the card',
    tags:      ['Tech', 'Stack', 'Tags'],   // also feed the search box
    url:       'https://github.com/…',       // link target
  }
  ```

  To mark a repo **private**, drop the `url` and add `private: true`. The card
  renders a greyed-out "Private repo" badge instead of a link.

- **Featured work** — the `FEATURED` array (just below `STACK`). Each entry is
  `{ name, badge }`, where `name` must match a project's `name` exactly — the
  card's details are pulled from `PROJECTS`, so there's a single source of truth.
  Change the four names/badges to feature different projects.

- **Tech stack** — the `STACK` array controls the grouped pill lists.

- **Live repo count** — the "Public repositories" stat auto-updates from the
  GitHub API (`initRepoCount`); the number in `index.html` is the offline fallback.

Text that isn't project data (hero, about, experience timeline, education,
certifications, stats banner, contact blurb, footer) lives directly in
**`index.html`** as plain, commented HTML.

Colours and typography are CSS custom properties at the top of **`styles.css`**,
under `[data-theme="light"]` and `[data-theme="dark"]`. Change `--accent` to
re-skin the whole site with a different professional colour.

## Deploy to GitHub Pages

1. Push these files to the **root** of a repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **`main`** and folder **`/ (root)`**, then **Save**.
5. Wait a minute — your site publishes at `https://<username>.github.io/<repo>/`
   (or `https://<username>.github.io/` for a user site).

No build command is needed; Pages serves the static files directly. Make sure
`assets/profile.jpg` and the CV PDF are committed so they publish too.

## Deploy to Netlify

1. Create a new site from your Git provider (or drag-and-drop the folder).
2. Leave the **build command empty** and set the **publish directory** to the
   folder containing `index.html`.
3. Deploy. Netlify serves the static files as-is.

## Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), a skip link,
  ARIA labels, `aria-live` on the filter count and form status, and visible
  keyboard focus throughout.
- Contact form uses real `<label>`s, required fields, `aria-invalid` on errors,
  and a `role="status"` result message.
- `prefers-reduced-motion` disables reveal/scroll animation.
- Light is the default theme; the toggle overrides it and persists to
  `localStorage`, applied before first paint to avoid a flash.
- No JavaScript framework; icons-only CDN; a single small profile image.
```
