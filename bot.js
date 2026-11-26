(() => {
  "use strict";

  if (document.getElementById("lnd-bot-root")) return;

  const STORAGE_KEY = "old_lnd_bot_state_v1";
  const CONTACT_EMAIL = "old.lnd.sto@gmail.com";

  /* =========================================================
     ÁRBOL DE DECISIÓN Y CONOCIMIENTO EMPÍRICO (N = 185)
     ========================================================= */
  const QUIZ_RESULTS = {
    sistemas: {
      name: "Diseño de sistemas de cómputo y servicios relacionados",
      salary: "$28,879 MXN",
      exp: "2.6 años",
      roles: "CRM Specialist, UX Researcher, Transformación Digital",
      why: "Es el sector con mayor volumen de vacantes (32.4% de la muestra) y busca perfiles puente entre usuarios, CRM y equipos técnicos.",
    },
    telas: {
      name: "Comercio al por menor de telas (Retail & Growth)",
      salary: "$47,750 MXN",
      exp: "3.4 años",
      roles: "Growth Marketing & AI Specialist, Product Owner, e-Commerce Specialist",
      why: "Presenta el salario promedio más alto de los 5 sectores y concentra el 52% de su demanda en frontera tecnológica e IA aplicada.",
    },
    infraestructura: {
      name: "Provisión de infraestructura de cómputo y procesamiento",
      salary: "$32,724 MXN",
      exp: "2.5 años",
      roles: "Strategy Senior Analyst, Web Master Digital, Analista de Marketplaces",
      why: "Exige bases operativas muy sólidas (51% umbral basal: Excel avanzado, GA4 y control de marketplaces).",
    },
    consultoria: {
      name: "Servicios de consultoría en administración",
      salary: "$37,414 MXN",
      exp: "3.7 años",
      roles: "Project Manager Digital, Gerente de Estrategia Digital, Account Manager",
      why: "Valora el pensamiento estructurado, casos de negocio con ROI y la integración de IA y Ciencia de Datos.",
    },
    cosmeticos: {
      name: "Comercio al por menor de cosméticos y perfumería",
      salary: "$35,916 MXN",
      exp: "3.5 años",
      roles: "Business Intelligence Analyst, BI Coordinator, Business Development",
      why: "Prioriza inteligencia comercial (Power BI, SQL, sell-in/sell-out), Retail Media y fidelización CRM.",
    },
  };

  const NODES = {
    inicio: {
      text: "¡Hola! Soy el asistente lógico de **OLD-LND 2026**. Te ayudo a explorar los hallazgos de **185 vacantes reales** o ir directo a las herramientas del Kit. ¿Cuál es tu perfil?",
      options: [
        { label: "Soy Estudiante LND", next: "estudiante" },
        { label: "Soy Empresa / Reclutador", next: "empresa" },
        { label: "Encontrar mi sector ideal", next: "quiz_1" },
        { label: "Datos y Salarios 2026", next: "datos" },
      ],
    },
    estudiante: {
      text: "Perfecto. Para estudiantes de Negocios Digitales tenemos el **Kit de Comunicación LND** (5 módulos en 3 dimensiones) y el **Simulador de Entrevista**. ¿Qué necesitas ahora?",
      options: [
        { label: "Encontrar mi sector ideal", next: "quiz_1" },
        { label: "Practicar en el Simulador", next: "ir_simulador" },
        { label: "Impacto del inglés (+96.5%)", next: "ingles" },
        { label: "CV, Pitch y LinkedIn", next: "kit_info" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    empresa: {
      text: "El perfil **LND** combina análisis de datos (Power BI, SQL), estrategia comercial (ROI, e-commerce, CRM) y operación ágil. Puedes vincular tu organización directamente con nuestra comunidad estudiantil.",
      links: [
        { label: "Ir al Escaparate de Talento", href: "./estrategia.html#contacto" },
        { label: "Explorar los 5 sectores SCIAN", href: "./sectores.html" },
      ],
      options: [
        { label: "Ver correo de vinculación", next: "contacto" },
        { label: "Ver competencias LND", next: "competencias" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    datos: {
      text: "Resumen ejecutivo de la **Base Maestra 2026 (N = 185 vacantes, 179 únicas)**:\n• Salario promedio global: **$35,947 MXN**\n• Clúster mejor pagado: **Producto Digital y UX/CRO ($47,792 MXN)** seguido de **IA y Ciencia de Datos ($43,875 MXN)**\n• Modalidad más frecuente: **Híbrida (38.4%)**, mientras que **Remota** promedia **$41,080 MXN**.",
      links: [
        { label: "Ver Resultados 2026", href: "./resultados.html" },
        { label: "Ver Metodología", href: "./metodologia.html" },
      ],
      options: [
        { label: "Impacto del inglés", next: "ingles" },
        { label: "Modelo Tripartito", next: "competencias" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    ingles: {
      text: "El inglés es el mayor multiplicador salarial del estudio (**+96.5% de prima**):\n• Sin especificar: **$27,147 MXN** promedio\n• Intermedio (B1): **$29,250 MXN**\n• Avanzado (B2–C1): **$53,347 MXN**\n\nEn el Módulo 3 del Kit incluimos un **English Pitch** adaptado por sector.",
      links: [
        { label: "Abrir English Pitch en el Kit", href: "./estrategia.html#kit-lab" },
        { label: "Ver gráfica de inglés", href: "./resultados.html" },
      ],
      options: [
        { label: "Practicar entrevista", next: "ir_simulador" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    competencias: {
      text: "El **Modelo Tripartito OIL-ND** divide las competencias en 3 niveles:\n1. **Siempre (31.4%):** Excel avanzado, Power BI, ROI/ROAS, Jira e inglés funcional.\n2. **Algunas veces (37.8%):** SQL, Python, CRM (Salesforce/HubSpot), ERP y Scrum.\n3. **Frontera IA (30.8%):** Agentes de IA, Retail Media algorítmico e IA Generativa ($42,853 MXN prom.).",
      links: [{ label: "Explorar Modelo Tripartito", href: "./competencias.html" }],
      options: [
        { label: "Traducir mis habilidades", next: "kit_info" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    kit_info: {
      text: "El **Kit de Comunicación LND** organiza 5 herramientas prácticas en 3 dimensiones:\n• **Dimensión 1:** Traductor Estudiante ↔ Empresa.\n• **Dimensión 2:** Plantillas de CV/Portafolio descargables, Pitch 30s/60s/Inglés + STAR y Checklist de LinkedIn.\n• **Dimensión 3:** Rúbrica de Autodiagnóstico + Simulador de Entrevista.",
      links: [{ label: "Ir al Kit de Comunicación", href: "./estrategia.html#kit-lab" }],
      options: [
        { label: "Ir al Simulador de Entrevista", next: "ir_simulador" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    ir_simulador: {
      text: "El **Simulador de Entrevista LND** te hace 3 preguntas reales de reclutamiento (herramientas, negocio y método STAR) adaptadas a cualquiera de los 5 sectores SCIAN, y califica tus respuestas al instante.",
      links: [{ label: "Abrir Simulador de Entrevista", href: "./estrategia.html#simulador-entrevista" }],
      options: [
        { label: "Encontrar mi sector ideal", next: "quiz_1" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    contacto: {
      text: `Puedes escribir directamente al correo oficial de vinculación: **${CONTACT_EMAIL}** o llenar el formulario del Escaparate de Talento para conectar con perfiles LND.`,
      links: [
        { label: "Ir al formulario de contacto", href: "./estrategia.html#contacto" },
        { label: `Enviar correo a ${CONTACT_EMAIL}`, href: `mailto:${CONTACT_EMAIL}` },
      ],
      options: [
        { label: "Aviso de Privacidad", next: "privacidad" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    privacidad: {
      text: "Cumplimos con la **LFPDPPP de México**. No recabamos datos sensibles y puedes ejercer tus **Derechos ARCO** o ajustar tus preferencias de cookies en cualquier momento.",
      links: [
        { label: "Leer Aviso de Privacidad", href: "./privacidad.html" },
        { label: "Leer Términos de Uso", href: "./terminos.html" },
      ],
      options: [{ label: "Menú principal", next: "inicio" }],
    },
    quiz_1: {
      text: "**Paso 1 de 2 · Descubridor de Sector**\n¿Qué tipo de actividad disfrutas más en un proyecto digital?",
      options: [
        { label: "Producto, UX y CRM", next: "quiz_2", quizSector: "sistemas" },
        { label: "Growth, Marketing e IA", next: "quiz_2", quizSector: "telas" },
        { label: "Operación Web y Marketplaces", next: "quiz_2", quizSector: "infraestructura" },
        { label: "Estrategia y Consultoría", next: "quiz_2", quizSector: "consultoria" },
        { label: "Business Intelligence y Consumo", next: "quiz_2", quizSector: "cosmeticos" },
      ],
    },
    quiz_2: {
      text: "**Paso 2 de 2 · Nivel de inglés**\n¿Cuál describe mejor tu nivel actual de inglés para entornos laborales?",
      options: [
        { label: "Básico o Intermedio (A2–B1)", next: "quiz_result", quizEnglish: "b1" },
        { label: "Profesional o Avanzado (B2–C1)", next: "quiz_result", quizEnglish: "b2" },
      ],
    },
  };

  /* =========================================================
     MOTOR DE PALABRAS CLAVE (NLP LIGERO SIN BACKEND)
     ========================================================= */
  const INTENTS = [
    {
      node: "ingles",
      keywords: ["ingles", "english", "idioma", "b2", "c1", "b1", "bilingue", "prima"],
    },
    {
      node: "ir_simulador",
      keywords: ["entrevista", "simulador", "reclutador", "practicar", "preguntas", "star"],
    },
    {
      node: "kit_info",
      keywords: ["kit", "cv", "curriculum", "portafolio", "linkedin", "pitch", "traductor", "plantilla", "rubrica", "autodiagnostico"],
    },
    {
      node: "datos",
      keywords: ["salario", "sueldo", "cuanto pagan", "dinero", "mxn", "promedio", "remoto", "hibrido", "resultados", "grafica", "metodologia", "fuentes", "185"],
    },
    {
      node: "competencias",
      keywords: ["competencia", "habilidad", "tripartito", "siempre", "algunas", "frontera", "ia", "inteligencia artificial", "sql", "power bi", "excel", "python", "scrum"],
    },
    {
      node: "contacto",
      keywords: ["contacto", "correo", "mail", "gmail", "vincular", "contratar", "empresa", "reclutar", "escaparate", "talento"],
    },
    {
      node: "privacidad",
      keywords: ["privacidad", "cookies", "arco", "datos personales", "terminos", "legal", "lfpdppp"],
    },
    {
      node: "quiz_1",
      keywords: ["sector", "scian", "recomienda", "ideal", "telas", "cosmeticos", "consultoria", "sistemas", "infraestructura", "nube"],
    },
    {
      node: "inicio",
      keywords: ["hola", "buenas", "ayuda", "menu", "inicio", "empezar", "gracias"],
    },
  ];

  function normalizeText(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function matchIntent(userInput) {
    const clean = normalizeText(userInput);
    if (!clean) return null;

    let bestNode = null;
    let bestScore = 0;

    INTENTS.forEach((intent) => {
      let score = 0;
      intent.keywords.forEach((kw) => {
        if (clean.includes(kw)) {
          score += kw.includes(" ") ? 3 : 2;
        }
      });
      if (score > bestScore) {
        bestScore = score;
        bestNode = intent.node;
      }
    });

    return bestNode;
  }

  function formatBotHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br />");
  }

  /* =========================================================
     INYECCIÓN DEL WIDGET FLOTANTE DISCRETO
     ========================================================= */
  const botRoot = document.createElement("div");
  botRoot.id = "lnd-bot-root";
  botRoot.className = "lnd-bot-root";
  botRoot.innerHTML = `
    <section
      id="lnd-bot-panel"
      class="lnd-bot-panel"
      role="dialog"
      aria-label="Asistente lógico OLD-LND 2026"
      hidden
    >
      <header class="lnd-bot-header">
        <div class="lnd-bot-identity">
          <img src="./img/LogoActualWebp.webp" alt="" class="lnd-bot-avatar" width="30" height="30" />
          <div>
            <strong>Guía OLD-LND 2026</strong>
            <small>Bot lógico · Base N=185</small>
          </div>
        </div>
        <div class="lnd-bot-header-actions">
          <button type="button" class="lnd-bot-icon-btn" id="lnd-bot-reset" aria-label="Reiniciar conversación" title="Reiniciar conversación">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>
          <button type="button" class="lnd-bot-icon-btn" id="lnd-bot-close" aria-label="Cerrar asistente" title="Cerrar">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </header>

      <div class="lnd-bot-messages" id="lnd-bot-messages" role="log" aria-live="polite"></div>
      <div class="lnd-bot-options" id="lnd-bot-options" aria-label="Opciones rápidas"></div>

      <form class="lnd-bot-form" id="lnd-bot-form" autocomplete="off">
        <label for="lnd-bot-input" class="sr-only">Escribe tu consulta sobre OLD-LND</label>
        <input
          id="lnd-bot-input"
          type="text"
          placeholder="Pregunta sobre salarios, inglés, CV..."
          maxlength="160"
        />
        <button type="submit" class="lnd-bot-send" aria-label="Enviar consulta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4Z" />
          </svg>
        </button>
      </form>
    </section>

    <button
      type="button"
      id="lnd-bot-launcher"
      class="lnd-bot-launcher"
      aria-expanded="false"
      aria-controls="lnd-bot-panel"
      aria-label="Abrir asistente guiado OLD-LND"
    >
      <svg class="bot-icon-open" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <svg class="bot-icon-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" hidden>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
      <span class="bot-launcher-label">Guía LND</span>
    </button>
  `;
  document.body.appendChild(botRoot);

  /* =========================================================
     ESTADO Y PERSISTENCIA EN SESIÓN
     ========================================================= */
  const panel = document.getElementById("lnd-bot-panel");
  const launcher = document.getElementById("lnd-bot-launcher");
  const closeBtn = document.getElementById("lnd-bot-close");
  const resetBtn = document.getElementById("lnd-bot-reset");
  const messagesEl = document.getElementById("lnd-bot-messages");
  const optionsEl = document.getElementById("lnd-bot-options");
  const botForm = document.getElementById("lnd-bot-form");
  const botInput = document.getElementById("lnd-bot-input");
  const iconOpen = launcher.querySelector(".bot-icon-open");
  const iconClose = launcher.querySelector(".bot-icon-close");

  let state = {
    messages: [],
    currentOptions: [],
    quizSector: "sistemas",
  };

  function loadState() {
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.messages) && parsed.messages.length > 0) {
          state = parsed;
          return true;
        }
      }
    } catch {
      // Ignora si sessionStorage no está disponible
    }
    return false;
  }

  function saveState() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignora restricciones de almacenamiento
    }
  }

  function scrollMessagesToBottom() {
    if (messagesEl) {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  }

  function renderMessages() {
    if (!messagesEl) return;
    messagesEl.innerHTML = state.messages
      .map((msg) => {
        if (msg.sender === "user") {
          return `<div class="lnd-msg lnd-msg-user"><span>${formatBotHtml(msg.text)}</span></div>`;
        }
        const linksHtml =
          msg.links && msg.links.length > 0
            ? `<div class="lnd-msg-links">${msg.links
                .map((l) => `<a href="${l.href}">${l.label} →</a>`)
                .join("")}</div>`
            : "";
        return `
          <div class="lnd-msg lnd-msg-bot">
            <div class="lnd-msg-bubble">
              <p>${formatBotHtml(msg.text)}</p>
              ${linksHtml}
            </div>
          </div>
        `;
      })
      .join("");
    scrollMessagesToBottom();
  }

  function renderOptions() {
    if (!optionsEl) return;
    optionsEl.innerHTML = (state.currentOptions || [])
      .map(
        (opt, idx) =>
          `<button type="button" class="lnd-bot-chip" data-opt-idx="${idx}">${opt.label}</button>`
      )
      .join("");
  }

  function pushBotReply(payload) {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const delay = prefersReduced ? 0 : 280;

    if (delay > 0 && messagesEl) {
      const typing = document.createElement("div");
      typing.className = "lnd-msg lnd-msg-bot lnd-typing";
      typing.innerHTML = '<div class="lnd-msg-bubble"><span></span><span></span><span></span></div>';
      messagesEl.appendChild(typing);
      scrollMessagesToBottom();
    }

    window.setTimeout(() => {
      state.messages.push({
        sender: "bot",
        text: payload.text,
        links: payload.links || [],
      });
      state.currentOptions = payload.options || [];
      saveState();
      renderMessages();
      renderOptions();
    }, delay);
  }

  function handleNode(nodeKey, extra = {}) {
    if (extra.quizSector) state.quizSector = extra.quizSector;

    if (nodeKey === "quiz_result") {
      const rec = QUIZ_RESULTS[state.quizSector] || QUIZ_RESULTS.sistemas;
      const engAdvice =
        extra.quizEnglish === "b2"
          ? "Con inglés **B2–C1** accedes a la franja mejor remunerada (+96.5% sobre el promedio base)."
          : "Recomendación clave: subir a **B2–C1** casi duplica el salario promedio en la muestra ($53,347 MXN). Practica el *English Pitch* en el Kit.";
      pushBotReply({
        text: `Tu sector SCIAN más afín es **${rec.name}**.\n• Salario promedio: **${rec.salary}** · Exp. media: **${rec.exp}**\n• Puestos clave: ${rec.roles}.\n\n${rec.why}\n\n${engAdvice}`,
        links: [
          { label: "Abrir Kit de Comunicación", href: "./estrategia.html#kit-lab" },
          { label: "Practicar en el Simulador", href: "./estrategia.html#simulador-entrevista" },
        ],
        options: [
          { label: "Repetir test de sector", next: "quiz_1" },
          { label: "Menú principal", next: "inicio" },
        ],
      });
      return;
    }

    const node = NODES[nodeKey];
    if (node) {
      pushBotReply(node);
    }
  }

  function resetConversation() {
    state = {
      messages: [
        {
          sender: "bot",
          text: NODES.inicio.text,
          links: [],
        },
      ],
      currentOptions: NODES.inicio.options,
      quizSector: "sistemas",
    };
    saveState();
    renderMessages();
    renderOptions();
  }

  function setBotOpen(isOpen) {
    panel.hidden = !isOpen;
    launcher.setAttribute("aria-expanded", String(isOpen));
    launcher.setAttribute(
      "aria-label",
      isOpen ? "Cerrar asistente guiado OLD-LND" : "Abrir asistente guiado OLD-LND"
    );
    if (iconOpen) iconOpen.hidden = isOpen;
    if (iconClose) iconClose.hidden = !isOpen;
    if (isOpen) {
      scrollMessagesToBottom();
      botInput?.focus();
    }
  }

  /* =========================================================
     EVENTOS
     ========================================================= */
  launcher.addEventListener("click", () => {
    const open = launcher.getAttribute("aria-expanded") === "true";
    setBotOpen(!open);
  });

  closeBtn?.addEventListener("click", () => {
    setBotOpen(false);
    launcher.focus();
  });

  resetBtn?.addEventListener("click", () => {
    resetConversation();
    botInput?.focus();
  });

  optionsEl?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-opt-idx]");
    if (!btn) return;
    const opt = state.currentOptions[Number(btn.getAttribute("data-opt-idx"))];
    if (!opt) return;

    state.messages.push({ sender: "user", text: opt.label });
    state.currentOptions = [];
    renderMessages();
    renderOptions();
    handleNode(opt.next, opt);
  });

  botForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const raw = botInput?.value.trim() || "";
    if (!raw) return;

    botInput.value = "";
    state.messages.push({ sender: "user", text: raw });
    renderMessages();

    const matchedNode = matchIntent(raw);
    if (matchedNode) {
      handleNode(matchedNode);
    } else {
      pushBotReply({
        text: "No encontré una coincidencia exacta para esa frase, pero puedo ayudarte con **salarios, inglés, competencias, CV/Pitch, simulador de entrevista o vinculación con empresas**. Elige una ruta:",
        options: NODES.inicio.options,
      });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && launcher.getAttribute("aria-expanded") === "true") {
      setBotOpen(false);
      launcher.focus();
    }
  });

  // Inicialización
  if (!loadState()) {
    resetConversation();
  } else {
    renderMessages();
    renderOptions();
  }
})();
