# Shivansh Singh · The space between

A three-page personal research portfolio with a warm illustrated landscape, peach and lavender colours, and a notebook-like reading experience.

## Publish on GitHub Pages

1. Unzip the download.
2. Create a GitHub repository. Name it `YOUR_USERNAME.github.io` for a main personal website, or use another repository name for a project site.
3. Upload the **contents** of the unzipped folder to the repository root and commit them to `main`. The root should contain `index.html`, `experience.html`, `publications.html`, `style.css`, `script.js`, `.nojekyll`, and `assets/`.
4. Open **Settings → Pages**. Choose **Deploy from a branch**, then **main** and **/(root)**, and save.
5. GitHub will display the website address after deployment completes.

When updating your existing repository, replace the old website files and add the two new HTML pages and `assets/quiet-landscape.webp`. Keep the entire `assets/` folder. All local URLs are relative, so the same export works at an account root or inside a repository path.

No build tools, package installation, API keys, database, or paid hosting are needed.

[Official GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## The pages

- **Home:** introduction, original pastel artwork, question-led research explorer, and current MAISA/Jinesis projects.
- **Experience:** six work and volunteer roles, two degrees, skills, academic service, and awards. The **Print résumé** action opens the browser print dialog, where you can choose Save as PDF. The print layout includes the Jinesis entry and professional contact details.
- **Publications:** nine research records with type and status labels, expanded, always-visible research descriptions, verified source links where available, filters, and citation copying. If automatic copying is unavailable, the citation appears as selectable text.

The research explorer uses reported evidence from the supplied manuscripts. Its three questions connect model control, felt understanding, and causal reasoning. The charts and measurements are explicitly scoped to their source studies; no live model inference is performed.

The particle sculpture and hidden-joke interactions from the first version have been replaced by the evidence explorer and practical portfolio tools.

## Edit the site

| File | Content |
| --- | --- |
| `index.html` | Homepage, research explorer, project summaries |
| `experience.html` | Work, education, skills, service, awards |
| `publications.html` | Research records, summaries, source links, and citation strings |
| `style.css` | Shared colour tokens, typography, layout, responsive and print styles |
| `script.js` | Question selector, publication filters, citation copying, and print action |
| `assets/quiet-landscape.webp` | Original illustrated hero landscape |
| `assets/favicon.svg` | Browser-tab monogram |
| `assets/FONT-LICENSES.txt` | Self-hosted font notices; retain with the fonts |
| `SOURCES.md` | Content provenance, bibliographic corrections, and status decisions |

Each HTML page has its own copy of the shared header and footer. Apply navigation or contact changes consistently across all three pages.

The source checkout stores the website in `dist/`. This downloadable export places its files directly at the root for GitHub Pages. Private preview configuration is excluded.

Open `index.html` directly to inspect the export, or run `python3 -m http.server 8000` in the unzipped folder and visit `http://localhost:8000`.

## Design and accessibility

The visual direction uses warm, pastel, hand-drawn dream-world qualities inspired by the reference the user gave. The landscape is original generated artwork; it is not a game screenshot or a borrowed game asset.

The site uses readable dark text, native links and buttons, labelled controls, keyboard focus indicators, reduced-motion support, and a responsive layout. All research and career content remains available without JavaScript; JavaScript supplies selection, filtering, copying, and printing actions. There is no analytics, tracking, autoplay audio, or external font service.

## Content and verification

Career details follow the supplied CV, with Jinesis volunteer work added from the user's prior account of their contributions. The master's programme remains marked in progress with the CV's 2025–2027 dates. The master’s thesis is marked published and links to its LUTPub record. Publication types distinguish journal articles, proceedings, theses, and manuscripts. No confidential paper PDFs or raw CV containing personal identifiers are bundled.

Validation performed: JavaScript syntax; all three HTML entrypoints; local asset and cross-page section references; unique IDs and accessible control references; six experience roles, two degree entries and nine research records; and export integrity. Primary publisher or university records were checked for the available publication links and metadata. Interactive browser and visual page testing were not performed in this environment.
