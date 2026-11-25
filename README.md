# Dr. Ahmed Elmaasarawi — Senior Endodontist Portfolio

A standalone, zero-build portfolio website built for **Dr. Ahmed Elmaasarawi** (Senior Endodontist · Clinical Educator · Professional Dental Photographer · PhD candidate (thesis submitted, defense pending) at Kiel University, Germany), featuring his clinical radiographs, a DICOM-inspired diagnostic zoom/contrast lightbox, doctoral survival research, *Dental Tribune International* interview link, core competencies, career timeline, and referral/clinic contact tools.

---

## Quick Start

No Node.js, npm, or build tools are required.

1. **Open directly in any browser**: Double-click `index.html` inside `Portfolio (Endodontics)/`.
2. **Or run a local static server** (optional):
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

---

## Assets Included (`assets/`)

### Doctor Portrait (`assets/profile/`)
- `dr-ahmed-elmaasarawi.jpg` — Executive clinician portrait displayed in the Hero clinician strip and the Career & Academic Background profile card

### Radiographs Included (`assets/radiographs/`)

Seven selected challenging clinical cases are included (highlighting referral-grade difficulties rather than routine cases):
- `case-01-five-canals.jpg` — Mandibular molar with 5 canals (`MB`, `ML`, `middle mesial`, `DB`, `DL`) scouted with magnification & C-files
- `case-02-severe-curvature.jpg` — Treatment of severely curved molar canals (Post-Op, rotary NiTi protocol)
- `case-03-broken-file-2.jpg` — Apical-third broken file retrieval (4-stage sequence)
- `case-04-open-apex.jpg` — Open apex management with bioceramic apical plug creation (Pre-Op & Post-Op)
- `case-05-internal-resorption.jpg` — Internal root resorption managed with PUI & flowable gutta-percha (Pre-Op & Post-Op)
- `case-06-c-shaped-47.jpg` — Tooth `#47` C-shaped canal management (Pre-Op & Post-Op)
- `case-07-large-radiolucency.jpg` — Non-surgical management of large apical radiolucency (PA & CBCT sequence)

---

## Updating Profile, Experience, Research & Cases

All content is stored in one structured file:

**[`data/portfolio-config.js`](data/portfolio-config.js)**

Edit values inside `window.PORTFOLIO_CONFIG` (`doctor`, `research`, `competencies`, `contact`, and `cases`), save the file, and refresh the browser.

---

## Free Static Hosting

Upload the contents inside `Portfolio (Endodontics)/` to **GitHub Pages**, **Vercel**, or **Cloudflare Pages**.
