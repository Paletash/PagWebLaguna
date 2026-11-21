(() => {
  "use strict";

  const currentPage = document.body.dataset.page || "inicio";
  const COOKIE_STORAGE_KEY = "old_lnd_cookie_consent";

  const NAV_ITEMS = [
    { id: "competencias", label: "Competencias", href: "./competencias.html" },
    { id: "sectores", label: "Sectores", href: "./sectores.html" },
    { id: "resultados", label: "Resultados 2026", href: "./resultados.html" },
    { id: "estrategia", label: "Estrategia", href: "./estrategia.html" },
    { id: "metodologia", label: "Metodología", href: "./metodologia.html" },
  ];

  const HEADER_HTML = `
    <header class="navbar-wrap">
      <div class="navbar">
        <a class="brand" href="./index.html" aria-label="OLD-LND 2026, ir al inicio"${currentPage === "inicio" ? ' aria-current="page"' : ""}>
          <div class="brand-badge-group">
            <img src="./img/LogoActualWebp.webp" alt="Emblema Oficial Negocios Digitales LND" class="brand-logo" width="38" height="38" />
            <img src="./img/LND6Webp.webp" alt="Insignia Equipo 6 LND" class="brand-logo brand-logo-team" width="34" height="31" />
          </div>
          <div class="brand-label">
            <span class="brand-title">OLD-LND <b>2026</b></span>
            <span class="brand-subtitle">Observatorio Laboral</span>
          </div>
        </a>

        <nav id="nav-links" class="nav-links" aria-label="Navegación principal">
          ${NAV_ITEMS.map(
            (item) =>
              `<a href="${item.href}"${currentPage === item.id ? ' aria-current="page" class="active"' : ""}>${item.label}</a>`
          ).join("")}
        </nav>

        <a href="./estrategia.html#contacto" class="button button-dark nav-cta">
          Vincular talento
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>

        <button
          type="button"
          class="menu-button"
          id="menu-toggle"
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
          aria-controls="nav-links"
        >
          <svg class="icon-menu" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg class="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" hidden>
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </header>
  `;

  const FOOTER_HTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="footer-logos">
              <div class="footer-logo-card" title="Licenciatura en Negocios Digitales">
                <img src="./img/LogoActualWebp.webp" alt="Emblema Oficial Negocios Digitales LND" class="footer-logo" width="48" height="48" loading="lazy" />
              </div>
              <div class="footer-logo-card" title="Iniciativa Equipo 6 LND">
                <img src="./img/LND6Webp.webp" alt="Insignia Equipo 6 LND" class="footer-logo" width="44" height="40" loading="lazy" />
              </div>
            </div>
            <a class="brand light" href="./index.html">
              <span class="brand-title">OLD-LND <b>2026</b></span>
            </a>
            <p>Observatorio Laboral Digital para la Licenciatura en Negocios Digitales.</p>
            <div class="footer-attribution">
              <span>Investigación académica y vinculación</span>
              <strong>Licenciatura en Negocios Digitales · Equipo 6</strong>
            </div>
          </div>

          <div>
            <h4>Explorar</h4>
            <a href="./competencias.html">Competencias</a>
            <a href="./sectores.html">Sectores</a>
            <a href="./resultados.html">Resultados 2026</a>
          </div>

          <div>
            <h4>Proyecto</h4>
            <a href="./estrategia.html">Estrategia</a>
            <a href="./metodologia.html">Metodología</a>
            <a href="./estrategia.html#contacto">Vinculación</a>
          </div>

          <div class="footer-note">
            <h4>Proyecto académico grupal</h4>
            <p>
              Desarrollado como estrategia de comunicación y vinculación del talento LND con los
              sectores económicos de México.
            </p>
            <div class="footer-tags">
              <span class="footer-tag">Negocios Digitales</span>
              <span class="footer-tag">Equipo 6</span>
              <span class="footer-tag">N = 185 vacantes</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 OLD-LND · Licenciatura en Negocios Digitales · Equipo 6. Proyecto académico.</span>
          <div class="footer-legal" aria-label="Enlaces legales">
            <a href="./privacidad.html">Aviso de Privacidad</a>
            <a href="./terminos.html">Términos de Uso</a>
            <a href="./privacidad.html#cookies">Cookies</a>
            <button type="button" class="footer-legal-btn" data-open-cookie-banner>
              Preferencias de cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  `;

  const COOKIE_BANNER_HTML = `
    <aside
      id="cookie-banner"
      class="cookie-banner"
      role="region"
      aria-label="Aviso de uso de cookies"
      hidden
    >
      <div class="cookie-banner-text">
        <strong>Privacidad y cookies</strong>
        <p>
          Usamos almacenamiento esencial para recordar tus preferencias y mejorar la navegación.
          Consulta nuestro <a href="./privacidad.html">Aviso de Privacidad</a> y
          <a href="./privacidad.html#cookies">Política de Cookies</a>.
        </p>
      </div>
      <div class="cookie-banner-actions">
        <button type="button" class="button button-secondary cookie-btn" data-cookie-choice="essential">
          Solo esenciales
        </button>
        <button type="button" class="button button-primary cookie-btn" data-cookie-choice="all">
          Aceptar todas
        </button>
      </div>
    </aside>
  `;

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  if (headerMount) headerMount.outerHTML = HEADER_HTML;
  if (footerMount) footerMount.outerHTML = FOOTER_HTML;
  document.body.insertAdjacentHTML("beforeend", COOKIE_BANNER_HTML);

  /* 1. MENÚ MÓVIL */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const iconMenu = menuToggle?.querySelector(".icon-menu");
  const iconClose = menuToggle?.querySelector(".icon-close");

  function setMenuState(isOpen) {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
    if (iconMenu) iconMenu.hidden = isOpen;
    if (iconClose) iconClose.hidden = !isOpen;
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      menuToggle.focus();
    }
  });

  /* 2. BANNER Y PREFERENCIAS DE COOKIES */
  const cookieBanner = document.getElementById("cookie-banner");
  const statusEl = document.getElementById("cookie-current-status");

  function readConsent() {
    try {
      return window.localStorage.getItem(COOKIE_STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function saveConsent(value) {
    try {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, value);
    } catch {
      // Ignora si el navegador bloquea localStorage
    }
    updateConsentStatus(value);
    if (cookieBanner) {
      cookieBanner.classList.remove("visible");
      window.setTimeout(() => {
        cookieBanner.hidden = true;
      }, 220);
    }
  }

  function updateConsentStatus(choice) {
    if (!statusEl) return;
    if (choice === "all") {
      statusEl.textContent = "Aceptaste cookies esenciales y analíticas opcionales.";
    } else if (choice === "essential") {
      statusEl.textContent = "Solo están activas las cookies técnicas esenciales.";
    } else {
      statusEl.textContent = "Aún no has guardado una preferencia de cookies.";
    }
  }

  function showBanner() {
    if (!cookieBanner) return;
    cookieBanner.hidden = false;
    window.requestAnimationFrame(() => {
      cookieBanner.classList.add("visible");
    });
  }

  const savedChoice = readConsent();
  updateConsentStatus(savedChoice);
  if (!savedChoice) {
    showBanner();
  }

  document.querySelectorAll("[data-cookie-choice]").forEach((btn) => {
    btn.addEventListener("click", () => saveConsent(btn.getAttribute("data-cookie-choice")));
  });

  document.querySelectorAll("[data-open-cookie-banner]").forEach((btn) => {
    btn.addEventListener("click", () => {
      showBanner();
      cookieBanner?.querySelector("button")?.focus();
    });
  });
})();
