(function () {
  "use strict";

  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    console.error("PORTFOLIO_CONFIG missing. Ensure data/portfolio-config.js loads before js/app.js.");
    return;
  }

  const state = {
    activeCategory: "All Cases",
    heroCaseIndex: 0,
    lightboxOpen: false,
    lightboxCaseIndex: 0,
    zoom: 1,
    panX: 0,
    panY: 0,
    brightness: 100,
    contrast: 100,
    inverted: false,
    enhanced: false,
    formMode: "dentist", // "dentist" | "clinic" | "patient"
    lastTriggerEl: null,
  };

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function competencyIconSvg(kind) {
    const icons = {
      endodontics:
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" opacity="0.45"/><path d="M9.2 7.5c0 2.3.8 4.8 1.1 7.8.1.8.5 1.4.7 1.4s.6-.6.7-1.4c.3-3 1.1-5.5 1.1-7.8 0-1.1-.7-1.8-1.8-1.8s-1.8.7-1.8 1.8Z"/><path d="M12 19v3"/></svg>',
      complications:
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
      photography:
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3.5"/></svg>',
      teaching:
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
      research:
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    };
    return icons[kind] || icons.endodontics;
  }

  function hydrateProfileAndSections() {
    const doc = config.doctor;
    const c = config.contact;
    const r = config.research;

    document.getElementById("brand-name").textContent = doc.name;
    document.getElementById("brand-sub").textContent = doc.credentials;
    document.getElementById("header-linkedin").href = c.linkedin;
    document.getElementById("hero-linkedin").href = c.linkedin;
    document.getElementById("about-linkedin-link").href = c.linkedin;

    document.getElementById("hero-eyebrow").textContent = doc.heroEyebrow;
    document.getElementById("hero-title").innerHTML =
      esc(doc.heroHeadline) + ' <span class="accent-italic">' + esc(doc.heroHeadlineAccent) + "</span>";
    document.getElementById("hero-subtitle").textContent = doc.heroSubtitle;
    document.getElementById("hero-availability-text").textContent = doc.availabilityBadge;

    document.getElementById("hero-metrics").innerHTML = doc.metrics
      .map(
        (m) =>
          '<div class="metric-item"><span class="metric-value">' +
          esc(m.value) +
          '</span><span class="metric-label">' +
          esc(m.label) +
          "</span></div>"
      )
      .join("");

    if (r) {
      document.getElementById("research-quote-text").textContent = "“" + r.quote + "”";
      document.getElementById("research-quote-source").textContent = r.quoteSource;

      document.getElementById("research-study-card").innerHTML =
        '<div><span class="tag tag--cyan">LANDMARK COHORT STUDY · IEJ 2025</span></div>' +
        '<h3 class="study-title">' +
        esc(r.studyTitle) +
        "</h3>" +
        '<p class="study-citation">' +
        esc(r.citation) +
        "</p>" +
        '<div class="study-stats-grid">' +
        r.stats
          .map(
            (st) =>
              '<div class="study-stat-box"><span class="study-stat-value">' +
              esc(st.value) +
              '</span><span class="study-stat-label">' +
              esc(st.label) +
              "</span></div>"
          )
          .join("") +
        "</div>" +
        '<p class="study-sustainability">' +
        esc(r.sustainabilityNote) +
        "</p>" +
        '<div class="study-links">' +
        '<a class="btn btn--secondary btn--sm" href="' +
        esc(r.doiUrl) +
        '" target="_blank" rel="noopener noreferrer">Read Full Paper (DOI: ' +
        esc(r.doi) +
        ") ↗</a>" +
        '<a class="btn btn--ghost btn--sm" href="' +
        esc(r.pmidUrl) +
        '" target="_blank" rel="noopener noreferrer">PubMed PMID: ' +
        esc(r.pmid) +
        " ↗</a>" +
        "</div>";

      document.getElementById("service-media-list").innerHTML = r.serviceAndMedia
        .map(
          (item) =>
            '<li class="publication-item">' +
            '<span class="pub-kind">' +
            esc(item.kind) +
            "</span>" +
            '<div class="publication-title">' +
            esc(item.title) +
            "</div>" +
            '<div class="publication-journal">' +
            esc(item.meta) +
            "</div>" +
            (item.url
              ? '<a class="pub-link" href="' +
                esc(item.url) +
                '" target="_blank" rel="noopener noreferrer">' +
                esc(item.urlLabel || "External Link") +
                " ↗</a>"
              : "") +
            "</li>"
        )
        .join("");
    }

    document.getElementById("competencies-grid").innerHTML = (config.competencies || [])
      .map(
        (comp) =>
          '<article class="protocol-card">' +
          '<div class="protocol-icon" aria-hidden="true">' +
          competencyIconSvg(comp.icon) +
          "</div>" +
          '<span class="protocol-step">' +
          esc(comp.step) +
          "</span>" +
          '<h3 class="protocol-title">' +
          esc(comp.title) +
          "</h3>" +
          '<p class="protocol-desc">' +
          esc(comp.desc) +
          "</p>" +
          '<div class="competency-chips">' +
          (comp.skills || []).map((s) => '<span class="chip">' + esc(s) + "</span>").join("") +
          "</div>" +
          "</article>"
      )
      .join("");

    document.getElementById("about-heading").innerHTML =
      esc(doc.aboutHeading) + ' <span class="accent-italic">' + esc(doc.aboutHeadingAccent) + "</span>";
    document.getElementById("about-monogram").textContent = doc.monogram;
    document.getElementById("about-name").textContent = doc.name;
    document.getElementById("about-role").textContent = doc.role;
    document.getElementById("about-bio").innerHTML = doc.aboutBio.map((p) => "<p>" + esc(p) + "</p>").join("");

    document.getElementById("languages-list").innerHTML = (doc.languages || [])
      .map((lang) => '<span class="chip">' + esc(lang) + "</span>")
      .join("");

    document.getElementById("education-list").innerHTML = (doc.education || [])
      .map(
        (ed) =>
          '<li class="credential-item"><div>' +
          '<span class="credential-title">' +
          esc(ed.title) +
          "</span>" +
          '<span class="credential-org">' +
          esc(ed.org) +
          "</span>" +
          (ed.detail ? '<span class="credential-detail">' + esc(ed.detail) + "</span>" : "") +
          '</div><span class="credential-year">' +
          esc(ed.year) +
          "</span></li>"
      )
      .join("");

    document.getElementById("experience-timeline").innerHTML = (doc.experience || [])
      .map(
        (exp) =>
          '<article class="exp-card">' +
          '<div class="exp-head">' +
          "<div>" +
          '<h3 class="exp-role">' +
          esc(exp.role) +
          "</h3>" +
          '<p class="exp-org">' +
          esc(exp.org) +
          " · " +
          esc(exp.location) +
          "</p>" +
          "</div>" +
          '<span class="exp-period">' +
          esc(exp.period) +
          "</span>" +
          "</div>" +
          '<ul class="exp-bullets">' +
          (exp.bullets || []).map((b) => "<li>" + esc(b) + "</li>").join("") +
          "</ul>" +
          "</article>"
      )
      .join("");

    document.getElementById("clinic-info-card").innerHTML = [
      { label: "Location", val: c.location },
      { label: "Clinical Availability", val: c.availability },
      { label: "Direct Phone / WhatsApp", val: c.phone, href: c.phoneHref },
      { label: "Email", val: c.email, href: "mailto:" + c.email },
      { label: "LinkedIn", val: c.linkedinLabel, href: c.linkedin, external: true },
    ]
      .map(function (row) {
        let valueHtml = '<span class="info-value">' + esc(row.val) + "</span>";
        if (row.href) {
          const extAttrs = row.external ? ' target="_blank" rel="noopener noreferrer"' : "";
          valueHtml =
            '<a class="info-value" style="color:var(--accent-cyan)" href="' +
            esc(row.href) +
            '"' +
            extAttrs +
            ">" +
            esc(row.val) +
            "</a>";
        }
        return '<div class="info-row"><span class="info-label">' + esc(row.label) + "</span>" + valueHtml + "</div>";
      })
      .join("");

    document.getElementById("referral-checklist").innerHTML = c.referralChecklist
      .map((item) => "<li><span>" + esc(item) + "</span></li>")
      .join("");

    document.getElementById("footer-brand").textContent = doc.name + " · " + doc.credentials;
    document.getElementById("footer-sub").textContent = doc.role;
    document.getElementById("footer-disclaimer").textContent = config.disclaimer;
  }

  // Hero 4-Case Switcher (Uncropped Radiograph Stage + Zero Badge Overlap)
  function renderHeroSwitcher() {
    const switcherEl = document.getElementById("hero-switcher");

    switcherEl.innerHTML = config.cases
      .map(
        (c, idx) =>
          '<button type="button" class="showcase-tab" role="tab" data-hero-idx="' +
          idx +
          '" aria-selected="' +
          (idx === state.heroCaseIndex ? "true" : "false") +
          '">' +
          '<span class="showcase-tab-num">' +
          esc(c.caseNumber) +
          " · " +
          esc(c.stageBadge) +
          "</span>" +
          '<span class="showcase-tab-name">' +
          esc(c.category) +
          "</span>" +
          "</button>"
      )
      .join("");

    switcherEl.querySelectorAll(".showcase-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.heroCaseIndex = Number(btn.getAttribute("data-hero-idx"));
        updateHeroShowcase();
      });
    });

    updateHeroShowcase();

    document.getElementById("hero-stage-trigger").addEventListener("click", function (e) {
      openLightbox(state.heroCaseIndex, e.currentTarget);
    });
    document.getElementById("hero-open-lightbox").addEventListener("click", function (e) {
      openLightbox(state.heroCaseIndex, e.currentTarget);
    });
  }

  function updateHeroShowcase() {
    const c = config.cases[state.heroCaseIndex];
    if (!c) return;

    document.querySelectorAll("#hero-switcher .showcase-tab").forEach(function (tab, idx) {
      tab.setAttribute("aria-selected", idx === state.heroCaseIndex ? "true" : "false");
    });

    const heroImg = document.getElementById("hero-case-img");
    heroImg.src = c.image;
    heroImg.alt = c.title + " (" + c.stageBadge + ")";

    document.getElementById("hero-strip-left").textContent = c.caseNumber + " · " + c.toothLabel;
    document.getElementById("hero-strip-right").textContent = c.stageBadge;
    document.getElementById("hero-case-title").textContent = c.title;
    document.getElementById("hero-case-meta").textContent = c.category + " · " + c.keyMetric;
  }

  // Case Filters & 2x2 Gallery Grid
  function renderFilters() {
    const counts = { "All Cases": config.cases.length };
    const categories = ["All Cases"];
    config.cases.forEach(function (c) {
      if (!counts[c.category]) {
        counts[c.category] = 0;
        categories.push(c.category);
      }
      counts[c.category] += 1;
    });

    const filterBar = document.getElementById("case-filters");
    filterBar.innerHTML = categories
      .map(
        (cat) =>
          '<button type="button" class="filter-pill" data-cat="' +
          esc(cat) +
          '" aria-pressed="' +
          (cat === state.activeCategory ? "true" : "false") +
          '">' +
          "<span>" +
          esc(cat) +
          '</span><span class="filter-count">' +
          counts[cat] +
          "</span></button>"
      )
      .join("");

    filterBar.querySelectorAll(".filter-pill").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.activeCategory = btn.getAttribute("data-cat");
        filterBar.querySelectorAll(".filter-pill").forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        renderCasesGrid();
      });
    });
  }

  function renderCasesGrid() {
    const grid = document.getElementById("cases-grid");
    const filtered = config.cases.filter(
      (c) => state.activeCategory === "All Cases" || c.category === state.activeCategory
    );

    grid.innerHTML = filtered
      .map(function (c) {
        const caseIdx = config.cases.indexOf(c);
        return (
          '<article class="case-card" data-case-id="' +
          esc(c.id) +
          '">' +
          '<div class="dicom-strip dicom-strip--card">' +
          '<span class="dicom-strip-left">' +
          esc(c.caseNumber) +
          " · " +
          esc(c.toothLabel) +
          "</span>" +
          '<span class="dicom-strip-right">' +
          esc(c.stageBadge) +
          "</span>" +
          "</div>" +
          '<div class="case-media">' +
          '<button type="button" class="case-media-trigger" data-open-case="' +
          caseIdx +
          '" aria-label="Open diagnostic radiograph lightbox for ' +
          esc(c.title) +
          '">' +
          '<img src="' +
          esc(c.image) +
          '" alt="' +
          esc(c.title) +
          '" loading="lazy" />' +
          "</button>" +
          "</div>" +
          '<div class="case-body">' +
          '<div class="case-meta-row">' +
          '<span class="tag tag--cyan">' +
          esc(c.category) +
          "</span>" +
          '<span class="tag tag--gold">' +
          esc(c.keyMetric) +
          "</span>" +
          "</div>" +
          '<h3 class="case-title">' +
          esc(c.title) +
          "</h3>" +
          '<p class="case-tooth">' +
          esc(c.diagnosis) +
          "</p>" +
          '<p class="case-summary">' +
          esc(c.summary) +
          "</p>" +
          '<div class="case-chips">' +
          c.armamentarium.map((a) => '<span class="chip">' + esc(a) + "</span>").join("") +
          "</div>" +
          '<div class="case-footer">' +
          '<span class="recall-label">✓ ' +
          esc(c.difficulty) +
          "</span>" +
          '<button type="button" class="inspect-btn" data-open-case="' +
          caseIdx +
          '">Inspect in Lightbox →</button>' +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    grid.querySelectorAll("[data-open-case]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const idx = Number(btn.getAttribute("data-open-case"));
        openLightbox(idx, e.currentTarget);
      });
    });
  }

  // =========================================================================
  // Diagnostic Radiograph Lightbox Controller
  // =========================================================================
  function applyViewerCalibration() {
    const canvas = document.getElementById("lb-stage-canvas");
    const stage = document.getElementById("lb-viewer-stage");
    canvas.style.transform =
      "translate(" + state.panX + "px, " + state.panY + "px) scale(" + state.zoom.toFixed(2) + ")";

    stage.classList.toggle("is-pannable", state.zoom > 1);
    document.getElementById("lb-zoom-readout").textContent = Math.round(state.zoom * 100) + "%";

    const effectiveContrast = state.enhanced ? Math.round(state.contrast * 1.32) : state.contrast;
    const effectiveBrightness = state.enhanced ? Math.round(state.brightness * 1.05) : state.brightness;
    const filterCss =
      "brightness(" +
      effectiveBrightness +
      "%) contrast(" +
      effectiveContrast +
      "%)" +
      (state.inverted ? " invert(1)" : "");

    const singleImg = document.getElementById("lb-single-img");
    if (singleImg) {
      singleImg.style.filter = filterCss;
    }

    document.querySelectorAll(".view-tab[data-zoom]").forEach(function (tab) {
      const targetZoom = Number(tab.getAttribute("data-zoom"));
      tab.setAttribute("aria-pressed", Math.abs(state.zoom - targetZoom) < 0.05 ? "true" : "false");
    });

    document.getElementById("lb-brightness").value = String(state.brightness);
    document.getElementById("lb-contrast").value = String(state.contrast);
    document.getElementById("lb-invert").setAttribute("aria-pressed", state.inverted ? "true" : "false");
    document.getElementById("lb-enhance").setAttribute("aria-pressed", state.enhanced ? "true" : "false");
  }

  function populateLightboxCase() {
    const c = config.cases[state.lightboxCaseIndex];
    if (!c) return;

    document.getElementById("lb-topbar-label").textContent =
      c.caseNumber + " · " + c.stageBadge + " · " + c.toothLabel;

    const singleImg = document.getElementById("lb-single-img");
    singleImg.src = c.image;
    singleImg.alt = c.title + " (" + c.stageBadge + ")";

    document.getElementById("lb-category-tag").textContent = c.category;
    document.getElementById("lb-metric-tag").textContent = c.keyMetric;
    document.getElementById("lb-case-title").textContent = c.title;
    document.getElementById("lb-tooth").textContent = c.toothLabel;
    document.getElementById("lb-difficulty").textContent = c.difficulty;
    document.getElementById("lb-stage-badge").textContent = c.stageBadge;
    document.getElementById("lb-diagnosis").textContent = c.diagnosis;
    document.getElementById("lb-challenge").textContent = c.challenge;
    document.getElementById("lb-outcome").textContent = c.outcome;

    document.getElementById("lb-protocol-steps").innerHTML = c.protocolSteps
      .map((s) => "<li>" + esc(s) + "</li>")
      .join("");
    document.getElementById("lb-armamentarium").innerHTML = c.armamentarium
      .map((a) => '<span class="chip">' + esc(a) + "</span>")
      .join("");

    applyViewerCalibration();
  }

  function resetLightboxTransformAndFilters() {
    state.zoom = 1;
    state.panX = 0;
    state.panY = 0;
    state.brightness = 100;
    state.contrast = 100;
    state.inverted = false;
    state.enhanced = false;
    applyViewerCalibration();
  }

  function openLightbox(caseIndex, triggerEl) {
    state.lightboxCaseIndex = Math.max(0, Math.min(config.cases.length - 1, caseIndex));
    state.lastTriggerEl = triggerEl || document.activeElement;
    state.lightboxOpen = true;
    resetLightboxTransformAndFilters();

    const modal = document.getElementById("lightbox-modal");
    modal.hidden = false;
    document.body.classList.add("modal-open");
    populateLightboxCase();
    document.getElementById("lb-close").focus();
  }

  function closeLightbox() {
    state.lightboxOpen = false;
    document.getElementById("lightbox-modal").hidden = true;
    document.body.classList.remove("modal-open");
    if (state.lastTriggerEl && typeof state.lastTriggerEl.focus === "function") {
      state.lastTriggerEl.focus();
    }
  }

  function initLightbox() {
    document.getElementById("lb-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-modal").addEventListener("click", function (e) {
      if (e.target.id === "lightbox-modal") closeLightbox();
    });

    document.getElementById("lb-prev-case").addEventListener("click", function () {
      state.lightboxCaseIndex = (state.lightboxCaseIndex - 1 + config.cases.length) % config.cases.length;
      resetLightboxTransformAndFilters();
      populateLightboxCase();
    });

    document.getElementById("lb-next-case").addEventListener("click", function () {
      state.lightboxCaseIndex = (state.lightboxCaseIndex + 1) % config.cases.length;
      resetLightboxTransformAndFilters();
      populateLightboxCase();
    });

    document.querySelectorAll(".view-tab[data-zoom]").forEach(function (tab) {
      tab.addEventListener("click", function () {
        state.zoom = Number(tab.getAttribute("data-zoom"));
        if (state.zoom <= 1) {
          state.panX = 0;
          state.panY = 0;
        }
        applyViewerCalibration();
      });
    });

    document.getElementById("lb-zoom-in").addEventListener("click", function () {
      state.zoom = Math.min(3.5, Number((state.zoom + 0.25).toFixed(2)));
      applyViewerCalibration();
    });

    document.getElementById("lb-zoom-out").addEventListener("click", function () {
      state.zoom = Math.max(1.0, Number((state.zoom - 0.25).toFixed(2)));
      if (state.zoom <= 1) {
        state.panX = 0;
        state.panY = 0;
      }
      applyViewerCalibration();
    });

    document.getElementById("lb-brightness").addEventListener("input", function (e) {
      state.brightness = Number(e.target.value);
      applyViewerCalibration();
    });

    document.getElementById("lb-contrast").addEventListener("input", function (e) {
      state.contrast = Number(e.target.value);
      applyViewerCalibration();
    });

    document.getElementById("lb-invert").addEventListener("click", function () {
      state.inverted = !state.inverted;
      applyViewerCalibration();
    });

    document.getElementById("lb-enhance").addEventListener("click", function () {
      state.enhanced = !state.enhanced;
      applyViewerCalibration();
    });

    document.getElementById("lb-reset").addEventListener("click", function () {
      resetLightboxTransformAndFilters();
    });

    const stage = document.getElementById("lb-viewer-stage");
    stage.addEventListener(
      "wheel",
      function (e) {
        if (!state.lightboxOpen) return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.25 : -0.25;
        state.zoom = Math.max(1.0, Math.min(3.5, Number((state.zoom + delta).toFixed(2))));
        if (state.zoom <= 1) {
          state.panX = 0;
          state.panY = 0;
        }
        applyViewerCalibration();
      },
      { passive: false }
    );

    let panning = false;
    let panStartX = 0;
    let panStartY = 0;

    stage.addEventListener("pointerdown", function (e) {
      if (state.zoom <= 1) return;
      panning = true;
      panStartX = e.clientX - state.panX;
      panStartY = e.clientY - state.panY;
      stage.classList.add("is-panning");
    });

    window.addEventListener("pointermove", function (e) {
      if (!panning) return;
      state.panX = Math.max(-420, Math.min(420, e.clientX - panStartX));
      state.panY = Math.max(-260, Math.min(260, e.clientY - panStartY));
      applyViewerCalibration();
    });

    window.addEventListener("pointerup", function () {
      if (!panning) return;
      panning = false;
      stage.classList.remove("is-panning");
    });

    document.getElementById("lb-refer-similar").addEventListener("click", function () {
      const c = config.cases[state.lightboxCaseIndex];
      closeLightbox();
      setFormMode("dentist");
      const catSelect = document.getElementById("case-category");
      if (c && Array.from(catSelect.options).some((opt) => opt.value === c.category)) {
        catSelect.value = c.category;
      }
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      setTimeout(function () {
        document.getElementById("tooth-number").focus();
      }, 350);
    });

    document.addEventListener("keydown", function (e) {
      if (!state.lightboxOpen) return;
      const tag = document.activeElement ? document.activeElement.tagName : "";
      const isSlider = tag === "INPUT" && document.activeElement.type === "range";

      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "ArrowLeft" && !isSlider) {
        e.preventDefault();
        document.getElementById("lb-prev-case").click();
      } else if (e.key === "ArrowRight" && !isSlider) {
        e.preventDefault();
        document.getElementById("lb-next-case").click();
      } else if ((e.key === "i" || e.key === "I") && tag !== "INPUT" && tag !== "TEXTAREA") {
        state.inverted = !state.inverted;
        applyViewerCalibration();
      } else if ((e.key === "r" || e.key === "R") && tag !== "INPUT" && tag !== "TEXTAREA") {
        resetLightboxTransformAndFilters();
      }
    });
  }

  // =========================================================================
  // 3-Mode Inquiry / Referral Form & Mobile Navigation
  // =========================================================================
  function setFormMode(mode) {
    state.formMode = mode === "patient" || mode === "clinic" ? mode : "dentist";

    document.querySelectorAll(".mode-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-mode") === state.formMode ? "true" : "false");
    });

    const isDentist = state.formMode === "dentist";
    const isClinic = state.formMode === "clinic";

    const nameLabel = document.getElementById("label-sender-name");
    const nameInput = document.getElementById("sender-name");
    const practiceWrap = document.getElementById("field-clinic-wrap");
    const practiceLabel = document.getElementById("label-sender-practice");
    const practiceInput = document.getElementById("sender-practice");
    const clinicalRow = document.getElementById("clinical-fields-row");
    const uploadField = document.getElementById("radiograph-upload-field");
    const notesLabel = document.getElementById("label-clinical-notes");
    const notesInput = document.getElementById("clinical-notes");

    if (isDentist) {
      nameLabel.textContent = "Referring Dentist Name *";
      nameInput.placeholder = "Dr. Name";
      practiceWrap.hidden = false;
      practiceLabel.textContent = "Practice / Clinic Name";
      practiceInput.placeholder = "Referring Dental Practice";
      clinicalRow.hidden = false;
      uploadField.hidden = false;
      notesLabel.textContent = "Clinical Notes & Symptoms *";
      notesInput.placeholder =
        "Briefly describe symptoms, previous treatment attempts, separated file/ledge level, or restorative plan...";
    } else if (isClinic) {
      nameLabel.textContent = "Director / Recruiter Name *";
      nameInput.placeholder = "Your Full Name";
      practiceWrap.hidden = false;
      practiceLabel.textContent = "Class A Clinic / Medical Center";
      practiceInput.placeholder = "Clinic or Medical Group Name";
      clinicalRow.hidden = true;
      uploadField.hidden = true;
      notesLabel.textContent = "Consultant Endodontist Role / Workshop Details *";
      notesInput.placeholder =
        "Share details regarding the Consultant Endodontist role, schedule, or postgraduate dental photography workshop...";
    } else {
      nameLabel.textContent = "Patient Full Name *";
      nameInput.placeholder = "Your Full Name";
      practiceWrap.hidden = true;
      clinicalRow.hidden = true;
      uploadField.hidden = true;
      notesLabel.textContent = "Symptoms & Consultation Notes *";
      notesInput.placeholder =
        "Briefly describe your tooth symptoms, prior root canal history, and preferred appointment timing...";
    }
  }

  function initFormAndNav() {
    document.querySelectorAll(".mode-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setFormMode(btn.getAttribute("data-mode"));
      });
    });

    const fileInput = document.getElementById("radiograph-file");
    const previewBox = document.getElementById("upload-preview");
    const previewImg = document.getElementById("upload-preview-img");
    const previewName = document.getElementById("upload-preview-name");

    fileInput.addEventListener("change", function () {
      const file = fileInput.files && fileInput.files[0];
      if (!file) {
        previewBox.hidden = true;
        return;
      }
      const reader = new FileReader();
      reader.onload = function (ev) {
        previewImg.src = String(ev.target.result || "");
        previewName.textContent = file.name + " (" + Math.round(file.size / 1024) + " KB)";
        previewBox.hidden = false;
      };
      reader.readAsDataURL(file);
    });

    const form = document.getElementById("referral-form");
    const statusBox = document.getElementById("form-status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("sender-name").value.trim();
      const email = document.getElementById("sender-email").value.trim();
      const notes = document.getElementById("clinical-notes").value.trim();

      if (!name || !email || !notes) {
        statusBox.hidden = false;
        statusBox.style.background = "rgba(248, 113, 113, 0.14)";
        statusBox.style.borderColor = "rgba(248, 113, 113, 0.45)";
        statusBox.textContent = "Please complete your name, email address, and message notes before continuing.";
        return;
      }

      const mode = state.formMode;
      const practice = document.getElementById("sender-practice").value.trim();
      const phone = document.getElementById("sender-phone").value.trim();
      const tooth = document.getElementById("tooth-number").value.trim();
      const category = document.getElementById("case-category").value;

      let subjectText = "[Patient Consultation] — " + name;
      let modeLabel = "Patient Consultation";
      let summaryText = "Your consultation inquiry is ready to send.";

      if (mode === "dentist") {
        modeLabel = "Referring Dentist";
        subjectText = "[Endo Referral] " + category + (tooth ? " · Tooth " + tooth : "") + " — " + name;
        summaryText =
          "Case summary ready for " + esc(category) + (tooth ? " (Tooth " + esc(tooth) + ")" : "") + ".";
      } else if (mode === "clinic") {
        modeLabel = "Clinic / Consultant Inquiry";
        subjectText = "[Consultant Endodontist Inquiry] " + (practice || name);
        summaryText = "Clinic recruitment / consultant inquiry ready for " + esc(practice || name) + ".";
      }

      const bodyLines = [
        "Inquiry Type: " + modeLabel,
        "Name: " + name,
        "Email: " + email,
        phone ? "Phone / WhatsApp: " + phone : "",
        mode !== "patient" && practice ? "Clinic / Practice: " + practice : "",
        mode === "dentist" && tooth ? "Tooth: " + tooth : "",
        mode === "dentist" ? "Clinical Challenge: " + category : "",
        "",
        "Message / Notes:",
        notes,
      ]
        .filter(Boolean)
        .join("\n");

      const mailtoHref =
        "mailto:" +
        config.contact.referralEmail +
        "?subject=" +
        encodeURIComponent(subjectText) +
        "&body=" +
        encodeURIComponent(bodyLines);

      statusBox.hidden = false;
      statusBox.style.background = "";
      statusBox.style.borderColor = "";
      statusBox.innerHTML =
        "<strong>Email draft prepared for " +
        esc(config.doctor.name) +
        " (" +
        esc(config.contact.referralEmail) +
        ").</strong> " +
        summaryText +
        '<div class="form-status-actions">' +
        '<a class="btn btn--primary btn--sm" href="' +
        esc(mailtoHref) +
        '">Open in Email Client</a>' +
        '<button type="button" class="btn btn--ghost btn--sm" id="reset-form-btn">New Request</button>' +
        "</div>";

      document.getElementById("reset-form-btn").addEventListener("click", function () {
        form.reset();
        previewBox.hidden = true;
        statusBox.hidden = true;
      });
    });

    const navToggle = document.getElementById("nav-toggle");
    const drawer = document.getElementById("mobile-drawer");
    navToggle.addEventListener("click", function () {
      const open = drawer.hidden;
      drawer.hidden = !open;
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        drawer.hidden = true;
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    hydrateProfileAndSections();
    renderHeroSwitcher();
    renderFilters();
    renderCasesGrid();
    initLightbox();
    initFormAndNav();
  });
})();
