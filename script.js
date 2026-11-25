(() => {
  "use strict";

  const ICONS = {
    target:
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    chart: '<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',
    spark:
      '<path d="m12 3-1.2 4.3a5 5 0 0 1-3.5 3.5L3 12l4.3 1.2a5 5 0 0 1 3.5 3.5L12 21l1.2-4.3a5 5 0 0 1 3.5-3.5L21 12l-4.3-1.2a5 5 0 0 1-3.5-3.5Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    people:
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    briefcase:
      '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  };

  /* =========================================================
     1. MODELO TRIPARTITO OIL-ND (competencias.html)
     ========================================================= */
  const TRIPARTITO = {
    siempre: {
      heading: "Umbral basal obligatorio",
      desc: "Filtro inicial indispensable para acceder a roles de negocios digitales.",
      count: "58",
      pct: "31.4%",
      cards: [
        {
          icon: "chart",
          title: "Alfabetismo analítico y BI",
          text: "Lectura de tableros, limpieza de datos y traducción de métricas a decisiones.",
          pills: ["Excel avanzado", "Power BI", "Looker Studio"],
        },
        {
          icon: "target",
          title: "Rentabilidad y métricas digitales",
          text: "Control de indicadores comerciales para evaluar campañas, retención y retorno.",
          pills: ["ROI / ROAS", "CAC & LTV", "GMV / CVR"],
        },
        {
          icon: "people",
          title: "Colaboración ágil e inglés funcional",
          text: "Trabajo interfuncional en entornos cloud con comunicación clara en inglés B1–C1.",
          pills: ["Jira / Asana", "Confluence", "Inglés B1–C1"],
        },
      ],
    },
    algunas: {
      heading: "Mandos medios y diferenciadores",
      desc: "Competencias especializadas según el modelo de negocio y madurez tecnológica.",
      count: "70",
      pct: "37.8%",
      salary: "$28,710",
      cards: [
        {
          icon: "chart",
          title: "Datos relacionales y analítica",
          text: "Extracción, modelado y automatización de consultas sobre grandes volúmenes.",
          pills: ["SQL", "Python / R", "Snowflake / ETL"],
        },
        {
          icon: "grid",
          title: "Ecosistemas ERP, CRM y Marketplaces",
          text: "Administración operativa de plataformas de venta y gestión comercial avanzada.",
          pills: ["Salesforce / HubSpot", "SAP / NetSuite", "Amazon / VTEX"],
        },
        {
          icon: "briefcase",
          title: "Certificaciones y operaciones clave",
          text: "Marcos formales para escalar productos digitales, ingresos y operación regional.",
          pills: ["Scrum CSPO / PMP", "RevOps / Product Ops", "DV360"],
        },
      ],
    },
    nunca: {
      heading: "Frontera tecnológica disruptiva 2026",
      desc: "Atributos emergentes de vanguardia con la mayor prima salarial del mercado.",
      count: "57",
      pct: "30.8%",
      salary: "$42,853",
      cards: [
        {
          icon: "spark",
          title: "Agentes de IA y flujos agénticos",
          text: "Diseño y orquestación de flujos autónomos para atención, análisis y operación.",
          pills: ["AI Agents", "Manus AI", "Genesys Cloud"],
        },
        {
          icon: "target",
          title: "Retail Media algorítmico y ML",
          text: "Optimización autónoma de pujas, Buy Box, scoring predictivo y análisis PLN.",
          pills: ["Pacvue / Perpetua AI", "Walmart Luminate", "Machine Learning"],
        },
        {
          icon: "grid",
          title: "IA Generativa en producto y contenido",
          text: "Aceleración de prototipos, historias de usuario y activos comerciales a escala.",
          pills: ["ChatGPT / Claude", "Copilot / Jira AI", "Midjourney / Firefly"],
        },
      ],
    },
  };

  const tabButtons = Array.from(document.querySelectorAll('#competencias [role="tab"]'));
  const tabPanel = document.getElementById("panel-competencias");
  const summaryBox = document.getElementById("tripartito-summary");

  if (tabButtons.length > 0 && tabPanel) {
    const renderTripartito = (key, tabId) => {
      const data = TRIPARTITO[key];
      if (!data) return;

      if (summaryBox) {
        summaryBox.innerHTML = `
          <div class="summary-text">
            <strong>${data.heading}</strong>
            <span>${data.desc}</span>
          </div>
          <div class="summary-metrics">
            <span><b>${data.count}</b> vacantes (${data.pct})</span>
          </div>
        `;
      }

      tabPanel.setAttribute("aria-labelledby", tabId);
      tabPanel.innerHTML = data.cards
        .map(
          (item, index) => `
          <article class="competency-card">
            <div class="card-top">
              <span class="icon-box" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  ${ICONS[item.icon] || ""}
                </svg>
              </span>
              <span class="card-index">0${index + 1}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <div class="pill-row">
              ${item.pills.map((pill) => `<span class="tool-pill">${pill}</span>`).join("")}
            </div>
          </article>
        `
        )
        .join("");
    };

    const activateTab = (button) => {
      tabButtons.forEach((btn) => {
        const selected = btn === button;
        btn.classList.toggle("active", selected);
        btn.setAttribute("aria-selected", String(selected));
        btn.setAttribute("tabindex", selected ? "0" : "-1");
      });
      renderTripartito(button.dataset.tab, button.id);
    };

    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => activateTab(button));
      button.addEventListener("keydown", (event) => {
        let nextIndex = null;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % tabButtons.length;
        if (event.key === "ArrowLeft")
          nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabButtons.length - 1;
        if (nextIndex !== null) {
          event.preventDefault();
          tabButtons[nextIndex].focus();
          activateTab(tabButtons[nextIndex]);
        }
      });
    });
  }

  /* =========================================================
     2. PANEL LATERAL DE SECTORES (sectores.html)
     ========================================================= */
  const SECTORS_DETAIL = {
    "diseno-sistemas": {
      eyebrow: "32.4% de la muestra · 60 vacantes",
      title: "Diseño de sistemas de cómputo y servicios relacionados",
      salary: "$28,879 MXN",
      range: "$12,000 – $50,000 MXN",
      exp: "2.6 años",
      tripartito: { siempre: 28, algunas: 37, nunca: 35 },
      clusters: [
        "Transformación Digital y Estrategia (15)",
        "Operaciones Digitales, FinTech y TI (11)",
        "Inteligencia Artificial y Ciencia de Datos (8)",
      ],
      roles: [
        "CRM Specialist — IT-Seekers",
        "Customer Success Manager — NTP Agency",
        "UX Researcher — Scalepex",
        "Especialista en Transformación Digital — Empacadora San Marcos",
      ],
    },
    "comercio-telas": {
      eyebrow: "18.9% de la muestra · 35 vacantes",
      title: "Comercio al por menor de telas",
      salary: "$47,750 MXN",
      range: "$5,667 – $225,000 MXN",
      exp: "3.4 años",
      tripartito: { siempre: 17, algunas: 31, nunca: 52 },
      clusters: [
        "Marketing Digital, Growth y Medios (10)",
        "Analítica de Datos y Business Intelligence (6)",
        "Inteligencia Artificial y Ciencia de Datos (6)",
      ],
      roles: [
        "Growth Marketing & AI Specialist — SITRES Latam",
        "AI Specialist (Applied AI) — Caravel",
        "Product Owner — BBVA México",
        "e-Commerce Specialist — Davines Group",
      ],
    },
    "infraestructura-computo": {
      eyebrow: "18.9% de la muestra · 35 vacantes",
      title: "Provisión de infraestructura de cómputo y procesamiento",
      salary: "$32,724 MXN",
      range: "$8,750 – $75,000 MXN",
      exp: "2.5 años",
      tripartito: { siempre: 51, algunas: 43, nunca: 6 },
      clusters: [
        "Marketing Digital, Growth y Medios (8)",
        "Transformación Digital y Estrategia (7)",
        "Comercio Electrónico y Retail Media (6)",
      ],
      roles: [
        "Strategy Senior Analyst — Walmart de México",
        "Analista Digital Web Master — Nestlé",
        "Analista de E-commerce y Marketplace — Telcel",
        "Ecommerce Junior — Mensch México",
      ],
    },
    "consultoria-admin": {
      eyebrow: "16.2% de la muestra · 30 vacantes",
      title: "Servicios de consultoría en administración",
      salary: "$37,414 MXN",
      range: "$16,000 – $85,000 MXN",
      exp: "3.7 años",
      tripartito: { siempre: 37, algunas: 33, nunca: 30 },
      clusters: [
        "Inteligencia Artificial y Ciencia de Datos (10)",
        "Transformación Digital y Estrategia (6)",
        "Marketing Digital, Growth y Medios (3)",
      ],
      roles: [
        "Gerente de Estrategia Digital",
        "Project Manager Digital",
        "Digital Media Manager",
        "Account Manager Digital Offer",
      ],
    },
    "comercio-cosmeticos": {
      eyebrow: "13.5% de la muestra · 25 vacantes",
      title: "Comercio al por menor de cosméticos y perfumería",
      salary: "$35,916 MXN",
      range: "$12,500 – $90,000 MXN",
      exp: "3.5 años",
      tripartito: { siempre: 24, algunas: 48, nunca: 28 },
      clusters: [
        "Transformación Digital y Estrategia (8)",
        "Comercio Electrónico y Retail Media (6)",
        "Inteligencia Artificial y Ciencia de Datos (4)",
      ],
      roles: [
        "Business Intelligence Analyst Sr. — Skandia",
        "Analista de Inteligencia de Negocios — Laboratorios Sanfer",
        "Business Intelligence Coordinator",
        "Business Development Manager",
      ],
    },
  };

  const drawer = document.getElementById("sector-drawer");
  const backdrop = document.getElementById("sector-backdrop");
  const drawerClose = document.getElementById("drawer-close");
  const drawerEyebrow = document.getElementById("drawer-eyebrow");
  const drawerTitle = document.getElementById("drawer-title");
  const drawerBody = document.getElementById("drawer-body");
  let lastFocusedTrigger = null;

  function closeDrawer() {
    if (!drawer || !backdrop) return;
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    window.setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
    }, 220);
    document.body.style.overflow = "";
    lastFocusedTrigger?.focus();
  }

  function openDrawer(sectorKey, triggerEl) {
    const info = SECTORS_DETAIL[sectorKey];
    if (!info || !drawer || !backdrop || !drawerBody) return;

    lastFocusedTrigger = triggerEl;
    if (drawerEyebrow) drawerEyebrow.textContent = info.eyebrow;
    if (drawerTitle) drawerTitle.textContent = info.title;

    drawerBody.innerHTML = `
      <div class="drawer-kpis">
        <div>
          <small>Salario promedio</small>
          <strong>${info.salary}</strong>
          <span>Rango: ${info.range}</span>
        </div>
        <div>
          <small>Experiencia media</small>
          <strong>${info.exp}</strong>
          <span>Promedio del sector</span>
        </div>
      </div>

      <div class="drawer-block">
        <h4>Distribución Modelo Tripartito OIL-ND</h4>
        <div class="tripartito-bar" role="img" aria-label="Siempre ${info.tripartito.siempre}%, Algunas veces ${info.tripartito.algunas}%, Frontera IA ${info.tripartito.nunca}%">
          <span class="seg-siempre" style="width: ${info.tripartito.siempre}%"></span>
          <span class="seg-algunas" style="width: ${info.tripartito.algunas}%"></span>
          <span class="seg-nunca" style="width: ${info.tripartito.nunca}%"></span>
        </div>
        <div class="tripartito-legend">
          <span><i class="dot-siempre"></i> Siempre (${info.tripartito.siempre}%)</span>
          <span><i class="dot-algunas"></i> Algunas veces (${info.tripartito.algunas}%)</span>
          <span><i class="dot-nunca"></i> Frontera IA (${info.tripartito.nunca}%)</span>
        </div>
      </div>

      <div class="drawer-block">
        <h4>Top 3 clústeres digitales demandados</h4>
        <div class="pill-row">
          ${info.clusters.map((c) => `<span class="tool-pill">${c}</span>`).join("")}
        </div>
      </div>

      <div class="drawer-block">
        <h4>Puestos reales representativos</h4>
        <ul class="drawer-list">
          ${info.roles.map((r) => `<li>${r}</li>`).join("")}
        </ul>
      </div>

      <a href="./estrategia.html#contacto" class="button button-primary drawer-cta">
        Vincular talento en este sector →
      </a>
    `;

    drawer.hidden = false;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => {
      drawer.classList.add("open");
      backdrop.classList.add("open");
      drawerClose?.focus();
    });
  }

  document.querySelectorAll(".sector-trigger").forEach((btn) => {
    btn.addEventListener("click", () => openDrawer(btn.dataset.sector, btn));
  });

  drawerClose?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer && !drawer.hidden) {
      closeDrawer();
    }
  });

  /* =========================================================
     3. GRÁFICO INTERACTIVO DE RESULTADOS (resultados.html)
     ========================================================= */
  const CHARTS = {
    cluster: {
      eyebrow: "Compensación mensual promedio (MXN)",
      title: "Demanda y salario por clúster digital",
      items: [
        { label: "Producto Digital y UX/CRO", sub: "21 vacantes · 11.4%", value: "$47,792", pct: 100, highlight: true },
        { label: "IA y Ciencia de Datos", sub: "29 vacantes · 15.7%", value: "$43,875", pct: 92, highlight: true },
        { label: "CRM, RevOps y Comercial B2B", sub: "12 vacantes · 6.5%", value: "$39,967", pct: 84, highlight: true },
        { label: "Analítica de Datos y BI", sub: "17 vacantes · 9.2%", value: "$39,810", pct: 83, highlight: true },
        { label: "Marketing Digital y Growth", sub: "31 vacantes · 16.8%", value: "$33,838", pct: 71, highlight: false },
        { label: "Operaciones, FinTech y TI", sub: "18 vacantes · 9.7%", value: "$33,070", pct: 69, highlight: false },
        { label: "Transformación Digital", sub: "36 vacantes · 19.5%", value: "$31,066", pct: 65, highlight: false },
        { label: "E-commerce y Retail Media", sub: "21 vacantes · 11.4%", value: "$25,746", pct: 54, highlight: false },
      ],
    },
    modalidad: {
      eyebrow: "Distribución y compensación por esquema",
      title: "Modalidad de trabajo normalizada",
      items: [
        { label: "Remota", sub: "18 vacantes · 9.7%", value: "$41,080", pct: 100, highlight: true },
        { label: "No especificada", sub: "33 vacantes · 17.8%", value: "$35,830", pct: 87, highlight: false },
        { label: "Híbrida", sub: "71 vacantes · 38.4%", value: "$35,772", pct: 87, highlight: true },
        { label: "Presencial", sub: "63 vacantes · 34.1%", value: "$35,041", pct: 85, highlight: false },
      ],
    },
    ingles: {
      eyebrow: "Brecha salarial por dominio de idioma",
      title: "Impacto del inglés en el salario mensual",
      items: [
        { label: "Inglés Avanzado (B2–C1)", sub: "44 vacantes", value: "$53,347", pct: 100, highlight: true },
        { label: "Inglés Avanzado (C1)", sub: "6 vacantes", value: "$50,167", pct: 94, highlight: true },
        { label: "Inglés Profesional (B2)", sub: "5 vacantes", value: "$37,700", pct: 71, highlight: false },
        { label: "Inglés Requerido (N/E)", sub: "20 vacantes", value: "$31,471", pct: 59, highlight: false },
        { label: "Inglés Intermedio (B1)", sub: "17 vacantes", value: "$29,250", pct: 55, highlight: false },
        { label: "No especificado", sub: "74 vacantes", value: "$27,147", pct: 51, highlight: false },
      ],
    },
  };

  const chartButtons = Array.from(document.querySelectorAll(".chart-switcher [role='tab']"));
  const chartContainer = document.getElementById("dynamic-chart");
  const chartEyebrow = document.getElementById("chart-eyebrow");
  const chartTitle = document.getElementById("chart-title");

  if (chartButtons.length > 0 && chartContainer) {
    const renderChart = (key) => {
      const cfg = CHARTS[key];
      if (!cfg) return;
      if (chartEyebrow) chartEyebrow.textContent = cfg.eyebrow;
      if (chartTitle) chartTitle.textContent = cfg.title;
      chartContainer.innerHTML = cfg.items
        .map(
          (item) => `
          <div class="single-bar-row">
            <div class="bar-label">
              <span>${item.label}</span>
              <small>${item.sub}</small>
            </div>
            <div class="bar-track">
              <span class="bar ${item.highlight ? "specialists-bar" : "students-bar"}" style="width: ${item.pct}%">
                <b>${item.value}</b>
              </span>
            </div>
          </div>
        `
        )
        .join("");
    };

    const activateChart = (btn) => {
      chartButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", String(active));
        b.setAttribute("tabindex", active ? "0" : "-1");
      });
      renderChart(btn.dataset.chart);
    };

    chartButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => activateChart(btn));
      btn.addEventListener("keydown", (event) => {
        let next = null;
        if (event.key === "ArrowRight") next = (idx + 1) % chartButtons.length;
        if (event.key === "ArrowLeft") next = (idx - 1 + chartButtons.length) % chartButtons.length;
        if (next !== null) {
          event.preventDefault();
          chartButtons[next].focus();
          activateChart(chartButtons[next]);
        }
      });
    });
  }

  /* =========================================================
     4. ACORDEÓN DE METODOLOGÍA (metodologia.html)
     ========================================================= */
  const accordionItems = Array.from(document.querySelectorAll(".accordion-item"));

  accordionItems.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    trigger?.addEventListener("click", () => {
      const isCurrentlyOpen = item.classList.contains("open");
      accordionItems.forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
      });
      if (!isCurrentlyOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* =========================================================
     5. RECURSOS DEL KIT Y FORMULARIO (estrategia.html)
     ========================================================= */
  const kitFeedback = document.getElementById("kit-feedback");
  let feedbackTimer = null;

  if (kitFeedback) {
    document.querySelectorAll("[data-resource]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const resourceName = btn.getAttribute("data-resource");
        kitFeedback.textContent = `Recurso seleccionado: "${resourceName}" (próximamente disponible para descarga).`;
        window.clearTimeout(feedbackTimer);
        feedbackTimer = window.setTimeout(() => {
          kitFeedback.textContent = "";
        }, 5000);
      });
    });
  }

  const CONTACT_EMAIL = "old.lnd.sto@gmail.com";
  const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

  const form = document.getElementById("contact-form");
  const formError = document.getElementById("form-error");
  const formSuccess = document.getElementById("form-success");
  const resetBtn = document.getElementById("reset-form");
  const submitBtn = document.getElementById("submit-btn");
  const submitBtnText = submitBtn?.querySelector(".submit-btn-text");

  function buildMailtoHref({ nombre, empresa, correo, sector, mensaje }) {
    const subject = `Vinculación OLD-LND 2026 — ${empresa}`;
    const body = [
      "Hola equipo OLD-LND 2026,",
      "",
      "Me gustaría vincular talento de la Licenciatura en Negocios Digitales con nuestra organización:",
      `- Nombre: ${nombre}`,
      `- Empresa: ${empresa}`,
      `- Correo corporativo: ${correo}`,
      `- Sector de interés: ${sector}`,
      `- Reto o perfil buscado: ${mensaje || "No especificado"}`,
      "",
      "Enviado desde el Escaparate de Talento OLD-LND 2026.",
    ].join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid");
      if (formError) {
        formError.textContent =
          firstInvalid?.id === "acepto-privacidad"
            ? "Debes aceptar el Aviso de Privacidad y los Términos de Uso para enviar tu solicitud."
            : "Por favor completa todos los campos requeridos con un correo válido.";
        formError.hidden = false;
      }
      firstInvalid?.focus();
      return;
    }

    const nombre = form.querySelector("#nombre")?.value.trim() || "";
    const empresa = form.querySelector("#empresa")?.value.trim() || "";
    const correo = form.querySelector("#correo")?.value.trim() || "";
    const sector = form.querySelector("#sector")?.value || "";
    const mensaje = form.querySelector("#mensaje")?.value.trim() || "";
    const honey = form.querySelector('input[name="_honey"]')?.value || "";

    if (honey) return;

    if (formError) formError.hidden = true;
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.textContent = "Enviando solicitud...";

    const payload = {
      Nombre: nombre,
      Empresa: empresa,
      "Correo corporativo": correo,
      _replyto: correo,
      "Sector de interés": sector,
      "Reto o perfil buscado": mensaje || "No especificado",
      _subject: `Vinculación OLD-LND 2026 — ${empresa} (${sector})`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      form.hidden = true;
      if (formSuccess) formSuccess.hidden = false;
    } catch {
      const mailtoUrl = buildMailtoHref({ nombre, empresa, correo, sector, mensaje });
      if (formError) {
        formError.innerHTML = `No se pudo enviar automáticamente desde esta conexión. Puedes enviarlo directamente a <a href="${mailtoUrl}" class="error-mailto-link">${CONTACT_EMAIL}</a> con tus datos precargados.`;
        formError.hidden = false;
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = "Conectar con talento";
    }
  });

  resetBtn?.addEventListener("click", () => {
    form?.reset();
    if (formError) formError.hidden = true;
    if (formSuccess) formSuccess.hidden = true;
    if (form) {
      form.hidden = false;
      form.querySelector("input")?.focus();
    }
  });
})();
