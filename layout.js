(() => {
  "use strict";

  const currentPage = document.body.dataset.page || "inicio";

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
          <span class="brand-mark" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
              <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
            </svg>
          </span>
          <span>OLD-LND <b>2026</b></span>
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
            <a class="brand light" href="./index.html">
              <span class="brand-mark" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
                  <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
                </svg>
              </span>
              <span>OLD-LND <b>2026</b></span>
            </a>
            <p>Observatorio Laboral Digital para la Licenciatura en Negocios Digitales.</p>
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
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 OLD-LND. Proyecto con fines académicos.</span>
          <span>Diseñado para conectar talento y oportunidad.</span>
        </div>
      </div>
    </footer>
  `;

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  if (headerMount) headerMount.outerHTML = HEADER_HTML;
  if (footerMount) footerMount.outerHTML = FOOTER_HTML;

  /* MENÚ MÓVIL */
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
})();
