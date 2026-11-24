# Dr. Ahmed Elmaasarawi — Senior Endodontist Portfolio

A standalone, zero-build portfolio website built for **Dr. Ahmed Elmaasarawi** (Senior Endodontist · Clinical Educator · Professional Dental Photographer · PhD Candidate at Kiel University, Germany), featuring his clinical radiographs, a DICOM-inspired diagnostic zoom/contrast lightbox, doctoral survival research, core competencies, career timeline, and referral/clinic contact tools.

---

## Quick Start

No Node.js, npm, or build tools are required.

1. **Open directly in any browser**: Double-click `index.html` inside `endodontist-portfolio/`.
2. **Or run a local static server** (optional):
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

---

## Radiographs Included (`assets/radiographs/`)

Only the four uploaded clinical case radiographs are included and wired:
- `case-01-broken-file-1.jpg` — Separated instrument retrieval (3-stage sequence)
- `case-02-severe-curvature.jpg` — Treatment of severely curved molar canals (Post-Op)
- `case-03-broken-file-2.jpg` — Apical-third broken file retrieval (4-stage sequence)
- `case-04-broken-file-3.jpg` — Tooth `#47` MB canal middle-third broken file retrieval (Pre-Op & Post-Op)

---

## Updating Profile, Experience, Research & Cases

All content is stored in one structured file:

**[`data/portfolio-config.js`](data/portfolio-config.js)**

Edit values inside `window.PORTFOLIO_CONFIG` (`doctor`, `research`, `competencies`, `contact`, and `cases`), save the file, and refresh the browser.

---

## Free Static Hosting

Upload the entire `endodontist-portfolio/` folder to:
- **Netlify Drop**: [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages**
- **Cloudflare Pages**
