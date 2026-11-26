(() => {
  "use strict";

  if (document.getElementById("lnd-bot-root")) return;

  const STORAGE_KEY = "old_lnd_bot_state_v2";
  const CONTACT_EMAIL = "old.lnd.sto@gmail.com";
  const MAX_HISTORY = 40;

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
      text: "¡Hola! Soy el asistente lógico de **OLD-LND 2026**. Te ayudo a conocer la carrera de Negocios Digitales, explorar hallazgos de **185 vacantes reales** o usar las herramientas del Kit. ¿Qué te gustaría hacer?",
      options: [
        { label: "¿Qué es la carrera LND?", next: "que_es_lnd" },
        { label: "Soy Estudiante LND", next: "estudiante" },
        { label: "Soy Empresa / Reclutador", next: "empresa" },
        { label: "Encontrar mi sector ideal", next: "quiz_1" },
        { label: "Datos y Salarios 2026", next: "datos" },
      ],
    },
    que_es_lnd: {
      text: "La **Licenciatura en Negocios Digitales (LND)** forma perfiles híbridos capaces de unir **estrategia comercial**, **analítica de datos** y **tecnología aplicada**.\n\nA diferencia de carreras puramente administrativas o de programación aislada, un egresado LND traduce necesidades de negocio en soluciones digitales medibles en áreas como:\n• Producto Digital y UX/CRO\n• Analítica BI, SQL e IA Aplicada\n• E-commerce, Retail Media, Growth y CRM\n• Transformación Digital y Gestión Ágil",
      links: [
        { label: "Explorar competencias demandadas", href: "./competencias.html" },
        { label: "Ver los 5 sectores donde trabajamos", href: "./sectores.html" },
      ],
      options: [
        { label: "¿Qué es este Observatorio?", next: "que_es_old" },
        { label: "Datos y Salarios 2026", next: "datos" },
        { label: "Encontrar sector afín", next: "quiz_1" },
        { label: "Menú principal", next: "inicio" },
      ],
    },
    que_es_old: {
      text: "**OLD-LND 2026** (Observatorio Laboral Digital) es una investigación aplicada desarrollada por estudiantes de LND (Equipo 6).\n\nAnalizamos **185 vacantes reales** en 5 sectores SCIAN de México para cerrar la brecha entre lo que las empresas piden y cómo los estudiantes comunican sus competencias.",
      links: [
        { label: "Conocer la Metodología", href: "./metodologia.html" },
        { label: "Ver Resultados 2026", href: "./resultados.html" },
      ],
      options: [
        { label: "¿Qué es la carrera LND?", next: "que_es_lnd" },
        { label: "Ver Kit de Comunicación", next: "kit_info" },
        { label: "Menú principal", next: "inicio" },
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
      text: "Resumen ejecutivo de la **Base de datos 2026 (N = 185 vacantes)**:\n• Salario promedio global: **$35,947 MXN**\n• Clúster mejor pagado: **Producto Digital y UX/CRO ($47,792 MXN)** seguido de **IA y Ciencia de Datos ($43,875 MXN)**\n• Modalidad más frecuente: **Híbrida (38.4%)**, mientras que **Remota** promedia **$41,080 MXN**.",
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
     MOTOR LÓGICO BLINDADO (TOKENIZACIÓN + PESOS + DESAMBIGUACIÓN)
     ========================================================= */
  const STOPWORDS = new Set([
    "de", "la", "el", "en", "y", "o", "a", "para", "por", "con", "soy", "me",
    "mi", "mis", "que", "es", "una", "un", "unos", "unas", "los", "las", "pero",
    "saber", "esta", "este", "esto", "ese", "esa", "sobre", "como", "del", "al",
    "se", "su", "sus", "nos", "te", "lo", "mas", "muy", "puedo", "quiero",
    "gustaria", "hola", "buenas", "tengo", "hacen", "hace",
  ]);

  const OUT_OF_SCOPE_TOKENS = new Set([
    "clima", "lluvia", "temperatura", "futbol", "partido", "receta", "cocina",
    "chiste", "broma", "musica", "cancion", "pelicula", "serie", "horoscopo",
    "chatgpt", "openai", "dolar", "bitcoin", "crypto", "novia", "novio",
    "videojuego", "fortnite", "minecraft", "tacos", "comida",
  ]);

  const INTENTS = [
    {
      node: "que_es_lnd",
      label: "¿Qué es la carrera LND?",
      phrases: [
        { text: "otra carrera", weight: 6 },
        { text: "esta carrera", weight: 6 },
        { text: "que es lnd", weight: 6 },
        { text: "negocios digitales", weight: 5 },
        { text: "de que trata", weight: 5 },
        { text: "que estudian", weight: 5 },
        { text: "que hace un", weight: 4 },
      ],
      words: [
        { text: "carrera", weight: 4 },
        { text: "licenciatura", weight: 4 },
        { text: "lnd", weight: 3 },
        { text: "perfil", weight: 3 },
        { text: "materias", weight: 3 },
        { text: "egresado", weight: 3 },
        { text: "estudian", weight: 3 },
        { text: "estudia", weight: 3 },
        { text: "trata", weight: 2 },
      ],
    },
    {
      node: "que_es_old",
      label: "¿Qué es OLD-LND 2026?",
      phrases: [
        { text: "que es old", weight: 6 },
        { text: "observatorio laboral", weight: 6 },
        { text: "este proyecto", weight: 5 },
        { text: "esta pagina", weight: 5 },
        { text: "equipo 6", weight: 5 },
      ],
      words: [
        { text: "observatorio", weight: 4 },
        { text: "proyecto", weight: 3 },
        { text: "metodologia", weight: 4 },
        { text: "fuentes", weight: 4 },
        { text: "investigacion", weight: 4 },
        { text: "encuesta", weight: 3 },
        { text: "muestra", weight: 3 },
      ],
    },
    {
      node: "ingles",
      label: "Impacto del inglés (+96.5%)",
      phrases: [
        { text: "nivel de ingles", weight: 6 },
        { text: "prima salarial", weight: 5 },
      ],
      words: [
        { text: "ingles", weight: 5 },
        { text: "english", weight: 5 },
        { text: "idioma", weight: 4 },
        { text: "bilingue", weight: 4 },
        { text: "b2", weight: 4 },
        { text: "c1", weight: 4 },
        { text: "b1", weight: 4 },
      ],
    },
    {
      node: "ir_simulador",
      label: "Simulador de Entrevista",
      phrases: [
        { text: "metodo star", weight: 6 },
        { text: "simulador de entrevista", weight: 6 },
        { text: "practicar entrevista", weight: 6 },
      ],
      words: [
        { text: "entrevista", weight: 5 },
        { text: "entrevistas", weight: 5 },
        { text: "simulador", weight: 5 },
        { text: "reclutador", weight: 4 },
        { text: "practicar", weight: 3 },
        { text: "preguntas", weight: 3 },
        { text: "star", weight: 4 },
      ],
    },
    {
      node: "kit_info",
      label: "Kit de Comunicación (CV, Pitch, LinkedIn)",
      phrases: [
        { text: "kit de comunicacion", weight: 6 },
        { text: "elevator pitch", weight: 6 },
        { text: "hoja de vida", weight: 5 },
      ],
      words: [
        { text: "kit", weight: 4 },
        { text: "cv", weight: 5 },
        { text: "curriculum", weight: 5 },
        { text: "portafolio", weight: 5 },
        { text: "linkedin", weight: 5 },
        { text: "pitch", weight: 5 },
        { text: "traductor", weight: 4 },
        { text: "plantilla", weight: 4 },
        { text: "plantillas", weight: 4 },
        { text: "rubrica", weight: 4 },
        { text: "autodiagnostico", weight: 4 },
      ],
    },
    {
      node: "datos",
      label: "Salarios y Resultados 2026",
      phrases: [
        { text: "cuanto pagan", weight: 6 },
        { text: "cuanto gana", weight: 6 },
        { text: "cuanto se gana", weight: 6 },
        { text: "salario promedio", weight: 6 },
      ],
      words: [
        { text: "salario", weight: 5 },
        { text: "salarios", weight: 5 },
        { text: "sueldo", weight: 5 },
        { text: "sueldos", weight: 5 },
        { text: "gana", weight: 4 },
        { text: "ganan", weight: 4 },
        { text: "pagan", weight: 4 },
        { text: "dinero", weight: 4 },
        { text: "mxn", weight: 4 },
        { text: "promedio", weight: 3 },
        { text: "remoto", weight: 4 },
        { text: "remota", weight: 4 },
        { text: "hibrido", weight: 4 },
        { text: "hibrida", weight: 4 },
        { text: "presencial", weight: 4 },
        { text: "resultados", weight: 4 },
        { text: "grafica", weight: 4 },
        { text: "graficas", weight: 4 },
        { text: "vacantes", weight: 3 },
        { text: "185", weight: 4 },
      ],
    },
    {
      node: "competencias",
      label: "Competencias y Modelo Tripartito",
      phrases: [
        { text: "modelo tripartito", weight: 6 },
        { text: "inteligencia artificial", weight: 5 },
        { text: "power bi", weight: 5 },
      ],
      words: [
        { text: "competencia", weight: 5 },
        { text: "competencias", weight: 5 },
        { text: "habilidad", weight: 4 },
        { text: "habilidades", weight: 4 },
        { text: "tripartito", weight: 5 },
        { text: "herramientas", weight: 4 },
        { text: "herramienta", weight: 4 },
        { text: "ia", weight: 4 },
        { text: "sql", weight: 5 },
        { text: "excel", weight: 4 },
        { text: "python", weight: 5 },
        { text: "scrum", weight: 4 },
        { text: "crm", weight: 4 },
        { text: "erp", weight: 4 },
        { text: "bi", weight: 4 },
      ],
    },
    {
      node: "contacto",
      label: "Contacto y Vinculación Empresarial",
      phrases: [
        { text: "escaparate de talento", weight: 6 },
        { text: "soy empresa", weight: 5 },
        { text: "quiero contratar", weight: 5 },
      ],
      words: [
        { text: "contacto", weight: 5 },
        { text: "correo", weight: 5 },
        { text: "email", weight: 5 },
        { text: "gmail", weight: 5 },
        { text: "vincular", weight: 5 },
        { text: "vinculacion", weight: 5 },
        { text: "contratar", weight: 5 },
        { text: "empresa", weight: 4 },
        { text: "empresas", weight: 4 },
        { text: "reclutar", weight: 4 },
        { text: "escaparate", weight: 5 },
        { text: "practicante", weight: 4 },
        { text: "practicantes", weight: 4 },
      ],
    },
    {
      node: "privacidad",
      label: "Privacidad, Cookies y Derechos ARCO",
      phrases: [
        { text: "datos personales", weight: 6 },
        { text: "aviso de privacidad", weight: 6 },
        { text: "derechos arco", weight: 6 },
        { text: "terminos de uso", weight: 6 },
      ],
      words: [
        { text: "privacidad", weight: 5 },
        { text: "cookies", weight: 5 },
        { text: "cookie", weight: 5 },
        { text: "arco", weight: 5 },
        { text: "terminos", weight: 4 },
        { text: "legal", weight: 4 },
        { text: "lfpdppp", weight: 5 },
      ],
    },
    {
      node: "quiz_1",
      label: "Descubridor de Sector Ideal",
      phrases: [
        { text: "sector ideal", weight: 6 },
        { text: "que sector", weight: 5 },
        { text: "sectores scian", weight: 5 },
      ],
      words: [
        { text: "sector", weight: 4 },
        { text: "sectores", weight: 4 },
        { text: "scian", weight: 5 },
        { text: "recomienda", weight: 4 },
        { text: "recomiendas", weight: 4 },
        { text: "telas", weight: 4 },
        { text: "cosmeticos", weight: 4 },
        { text: "perfumeria", weight: 4 },
        { text: "consultoria", weight: 4 },
        { text: "infraestructura", weight: 4 },
        { text: "nube", weight: 4 },
      ],
    },
    {
      node: "inicio",
      label: "Menú principal",
      phrases: [{ text: "buenos dias", weight: 3 }, { text: "buenas tardes", weight: 3 }],
      words: [
        { text: "hola", weight: 3 },
        { text: "buenas", weight: 3 },
        { text: "ayuda", weight: 3 },
        { text: "menu", weight: 4 },
        { text: "inicio", weight: 4 },
        { text: "empezar", weight: 3 },
        { text: "gracias", weight: 3 },
      ],
    },
  ];

  function normalizeText(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function isNegated(clean, term) {
    const escaped = escapeRegex(term);
    const negRegex = new RegExp(`(?:^|\\s)(?:no|sin|tampoco|nunca)(?:\\s+\\w+){0,3}\\s+${escaped}(?:$|\\s)`);
    return negRegex.test(clean);
  }

  // Distancia de Levenshtein rápida con límite 1 para tolerar errores tipográficos en palabras >= 5 letras
  function isOneEditAway(a, b) {
    if (Math.abs(a.length - b.length) > 1) return false;
    let i = 0;
    let j = 0;
    let edits = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) {
        i += 1;
        j += 1;
      } else {
        edits += 1;
        if (edits > 1) return false;
        if (a.length > b.length) i += 1;
        else if (b.length > a.length) j += 1;
        else {
          i += 1;
          j += 1;
        }
      }
    }
    if (i < a.length || j < b.length) edits += 1;
    return edits <= 1;
  }

  function matchIntent(userInput) {
    const clean = normalizeText(userInput);
    if (!clean) return { status: "empty" };

    const rawTokens = clean.split(" ").filter(Boolean);
    const activeTokens = rawTokens.filter((t) => !STOPWORDS.has(t));
    const tokenSet = new Set(rawTokens);

    const scored = [];

    INTENTS.forEach((intent) => {
      let score = 0;

      // 1. Frases exactas respetando límites de palabra
      (intent.phrases || []).forEach(({ text, weight }) => {
        const phraseRegex = new RegExp(`(?:^|\\s)${escapeRegex(text)}(?:$|\\s)`);
        if (phraseRegex.test(clean) && !isNegated(clean, text)) {
          score += weight;
        }
      });

      // 2. Tokens completos (cero coincidencias dentro de otra palabra como "star" en "gustaria")
      (intent.words || []).forEach(({ text, weight }) => {
        if (tokenSet.has(text)) {
          if (!isNegated(clean, text)) {
            score += weight;
          }
          return;
        }

        // Tolerancia a 1 error de dedo solo para palabras >= 5 caracteres que no son stopwords
        if (text.length >= 5) {
          const fuzzyHit = activeTokens.some((tok) => tok.length >= 5 && isOneEditAway(tok, text));
          if (fuzzyHit && !isNegated(clean, text)) {
            score += Math.max(2, weight - 1);
          }
        }
      });

      if (score > 0) {
        scored.push({ node: intent.node, label: intent.label, score });
      }
    });

    scored.sort((a, b) => b.score - a.score);

    // Escudo fuera de alcance si no hay coincidencia válida del dominio
    const hasOutOfScope = rawTokens.some((tok) => OUT_OF_SCOPE_TOKENS.has(tok));
    if (scored.length === 0 || (hasOutOfScope && scored[0].score < 4)) {
      return { status: hasOutOfScope ? "out_of_scope" : "unknown" };
    }

    const top = scored[0];
    // Desambiguación cuando hay empate o diferencia mínima (<= 1 pt) entre temas distintos
    const closeCandidates = scored.filter(
      (item) => item.node !== "inicio" && top.score - item.score <= 1
    );

    if (closeCandidates.length >= 2 && top.score < 6) {
      return {
        status: "ambiguous",
        candidates: closeCandidates.slice(0, 3),
      };
    }

    return { status: "match", node: top.node };
  }

  function formatBotHtml(text) {
    return String(text || "")
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
          placeholder="Pregunta sobre la carrera, salarios, CV..."
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
     ESTADO, CONCURRENCIA Y PERSISTENCIA EN SESIÓN
     ========================================================= */
  const panel = document.getElementById("lnd-bot-panel");
  const launcher = document.getElementById("lnd-bot-launcher");
  const closeBtn = document.getElementById("lnd-bot-close");
  const resetBtn = document.getElementById("lnd-bot-reset");
  const messagesEl = document.getElementById("lnd-bot-messages");
  const optionsEl = document.getElementById("lnd-bot-options");
  const botForm = document.getElementById("lnd-bot-form");
  const botInput = document.getElementById("lnd-bot-input");
  const botSendBtn = botForm?.querySelector("button[type='submit']");
  const iconOpen = launcher.querySelector(".bot-icon-open");
  const iconClose = launcher.querySelector(".bot-icon-close");

  let isReplying = false;
  let replyTimer = null;

  let state = {
    messages: [],
    currentOptions: [],
    quizSector: "sistemas",
  };

  function isValidMessage(msg) {
    return (
      msg &&
      typeof msg === "object" &&
      (msg.sender === "user" || msg.sender === "bot") &&
      typeof msg.text === "string"
    );
  }

  function loadState() {
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (
          parsed &&
          Array.isArray(parsed.messages) &&
          parsed.messages.length > 0 &&
          parsed.messages.every(isValidMessage)
        ) {
          state = {
            messages: parsed.messages.slice(-MAX_HISTORY),
            currentOptions: Array.isArray(parsed.currentOptions) ? parsed.currentOptions : NODES.inicio.options,
            quizSector: QUIZ_RESULTS[parsed.quizSector] ? parsed.quizSector : "sistemas",
          };
          return true;
        }
      }
    } catch {
      // Ignora si sessionStorage no está disponible o está corrupto
    }
    return false;
  }

  function saveState() {
    try {
      if (state.messages.length > MAX_HISTORY) {
        state.messages = state.messages.slice(-MAX_HISTORY);
      }
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignora restricciones de almacenamiento
    }
  }

  function setReplyingLock(locked) {
    isReplying = locked;
    if (botSendBtn) botSendBtn.disabled = locked;
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
          Array.isArray(msg.links) && msg.links.length > 0
            ? `<div class="lnd-msg-links">${msg.links
              .map((l) => `<a href="${l.href}">${formatBotHtml(l.label)} →</a>`)
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
          `<button type="button" class="lnd-bot-chip" data-opt-idx="${idx}">${formatBotHtml(opt.label)}</button>`
      )
      .join("");
  }

  function pushBotReply(payload) {
    window.clearTimeout(replyTimer);
    setReplyingLock(true);

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const delay = prefersReduced ? 0 : 280;

    if (delay > 0 && messagesEl) {
      const typing = document.createElement("div");
      typing.className = "lnd-msg lnd-msg-bot lnd-typing";
      typing.innerHTML = '<div class="lnd-msg-bubble"><span></span><span></span><span></span></div>';
      messagesEl.appendChild(typing);
      scrollMessagesToBottom();
    }

    replyTimer = window.setTimeout(() => {
      state.messages.push({
        sender: "bot",
        text: payload.text,
        links: payload.links || [],
      });
      state.currentOptions = payload.options || [];
      saveState();
      renderMessages();
      renderOptions();
      setReplyingLock(false);
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
    window.clearTimeout(replyTimer);
    setReplyingLock(false);
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
    if (isReplying) return;
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
    if (isReplying) return;
    const raw = botInput?.value.trim() || "";
    if (!raw) return;

    botInput.value = "";
    state.messages.push({ sender: "user", text: raw });
    renderMessages();

    const result = matchIntent(raw);
    if (result.status === "match") {
      handleNode(result.node);
    } else if (result.status === "ambiguous") {
      const candidateOptions = result.candidates.map((c) => ({
        label: c.label,
        next: c.node,
      }));
      candidateOptions.push({ label: "Menú principal", next: "inicio" });
      pushBotReply({
        text: "Tu consulta se relaciona con más de un tema del Observatorio. ¿Cuál te gustaría explorar primero?",
        options: candidateOptions,
      });
    } else if (result.status === "out_of_scope") {
      pushBotReply({
        text: `Soy un asistente guiado enfocado exclusivamente en el Observatorio **OLD-LND 2026** (carrera de Negocios Digitales, salarios, sectores SCIAN, Kit de Comunicación y vinculación).\n\nNo cuento con información fuera de ese ámbito, pero puedes elegir una ruta abajo o escribir a **${CONTACT_EMAIL}**.`,
        options: NODES.inicio.options,
      });
    } else {
      pushBotReply({
        text: "No encontré una coincidencia exacta para esa frase, pero puedo explicarte **qué es la carrera LND**, mostrarte **salarios e inglés**, guiarte al **Kit y Simulador** o conectarte con **empresas**. Elige una ruta:",
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
