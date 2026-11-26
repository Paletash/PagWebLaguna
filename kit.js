(() => {
  "use strict";

  const labRoot = document.getElementById("kit-lab");
  if (!labRoot) return;

  /* =========================================================
     DATOS EMPÍRICOS POR SECTOR SCIAN (N = 185 · OLD-LND 2026)
     ========================================================= */
  const KIT_SECTORS = {
    "diseno-sistemas": {
      id: "diseno-sistemas",
      shortName: "Diseño de Sistemas",
      fullName: "Diseño de sistemas de cómputo y servicios relacionados",
      vacantes: "60 vacantes (32.4%)",
      salary: "$28,879 MXN",
      exp: "2.6 años",
      focus: "Traducción entre requerimientos de negocio, productos digitales, CRM y equipos técnicos.",
      translations: [
        {
          category: "Analítica y Producto",
          student: "Sé usar Excel y hice encuestas de usuarios en una materia de proyectos.",
          company: "Levantamiento de hallazgos UX y análisis de embudos de adopción en Power BI para priorizar mejoras en el roadmap del producto.",
          why: "En sistemas de cómputo, los reclutadores buscan puente entre el usuario y el equipo de ingeniería, no tareas aisladas.",
        },
        {
          category: "CRM y Operación Comercial",
          student: "Conozco cómo funcionan los CRM y llevé la materia de comercio electrónico.",
          company: "Diseño de flujos de seguimiento y automatización de ciclo de vida del cliente (CRM/Customer Success) orientados a retención.",
          why: "Roles como CRM Specialist y Customer Success lideran la entrada LND en este sector.",
        },
        {
          category: "Metodologías Ágiles",
          student: "Trabajé en equipo para entregar un proyecto final por avances.",
          company: "Coordinación de entregables bajo marco Scrum (historias de usuario, backlog en Jira y ceremonias ágiles) asegurando entregas a tiempo.",
          why: "Demostrar vocabulario operativo ágil reduce la curva de adaptación percibida por especialistas.",
        },
        {
          category: "Frontera IA 2026",
          student: "Uso ChatGPT para resumir lecturas y apoyarme con mis trabajos escolares.",
          company: "Implementación de flujos asistidos con IA generativa y copilotos para acelerar documentación funcional, pruebas y soporte.",
          why: "El 35% de las vacantes del sector ya valoran competencias emergentes de IA aplicada.",
        },
      ],
      cvTemplate: {
        targetRoles: "UX Researcher Jr. · CRM Specialist · Analista de Transformación Digital · Product Operations",
        summaryHint: "Enfoca tu resumen en tu capacidad para traducir necesidades del cliente en requerimientos claros, métricas de adopción y procesos digitales.",
        academicProject: "Caso sugerido: Rediseño de flujo de registro o prototipo funcional de app/plataforma evaluado con pruebas de usabilidad y KPIs de conversión.",
        metricsToInclude: ["% de reducción en fricción o pasos del usuario", "Tiempo de respuesta / adopción en prototipo", "Entregables completados en sprints"],
      },
      portfolioSections: [
        "01. Problema de negocio y perfil del usuario investigado",
        "02. Arquitectura de solución / flujo en Figma, Notion o Jira",
        "03. Tablero de métricas de adopción y retención (Power BI / Looker)",
        "04. Aprendizajes clave y siguientes iteraciones propuestas",
      ],
      pitches: {
        p30: "Hola, soy [Tu Nombre], estudiante de los últimos semestres de Negocios Digitales. Me especializo en conectar las necesidades del negocio con equipos de tecnología a través de análisis de datos, CRM y metodologías ágiles. En mi último proyecto apliqué investigación de usuarios y tableros en Power BI para reducir en [X]% la fricción del flujo digital. Busco aportar esa visión híbrida en [Nombre de la Empresa].",
        p60: "Soy [Tu Nombre], próximo egresado de la Licenciatura en Negocios Digitales con enfoque en transformación digital y operación de productos tecnológicos. Durante mi formación noté que muchos proyectos fallan por falta de comunicación entre el área comercial y desarrollo; por eso me he capacitado en Jira, SQL básico, CRM y analítica en Power BI. En un proyecto aplicado para [tipo de organización], estructuré el backlog funcional y un tablero de seguimiento que permitió identificar cuellos de botella y proponer mejoras medibles en retención. Me entusiasma el enfoque de [Nombre de la Empresa] en diseño de sistemas y quiero sumarme para ayudar a que cada solución tecnológica se traduzca en valor tangible para sus clientes.",
        english: "Hi, I'm [Your Name], a Digital Business senior focused on bridging business goals and technical teams. I combine analytical literacy in Power BI and SQL with agile coordination in Jira and CRM operations. In a recent capstone project, I mapped user friction points and built a KPI dashboard that improved workflow efficiency by [X]%. I'm excited to bring this business-tech mindset to [Company Name]—especially knowing how valuable bilingual collaboration is for scaling digital solutions.",
        star: {
          situacion: "Un proyecto escolar de plataforma digital presentaba abandono de usuarios antes de completar el registro y carecía de métricas claras de seguimiento.",
          tarea: "Diagnosticar el punto exacto de fuga y proponer un rediseño priorizado para el equipo técnico en 4 semanas.",
          accion: "Realicé pruebas de usabilidad con 15 usuarios, documenté historias de usuario en Jira y construí un tablero de embudo en Power BI para validar prioridades.",
          resultado: "Se simplificó el flujo de 6 a 3 pasos, elevando la tasa de finalización simulada en 32% y entregando documentación lista para desarrollo.",
        },
      },
      linkedin: {
        headline: "Negocios Digitales (LND) | Transformación Digital, CRM & Analítica BI | Scrum · Jira · Power BI · SQL | Inglés B2",
        about: "Estudiante de Negocios Digitales enfocado en traducir objetivos comerciales en soluciones digitales escalables.\n\nTrabajo en la intersección entre estrategia, experiencia de usuario y datos:\n• Analítica y seguimiento: Power BI, Excel avanzado y consultas SQL.\n• Operación de producto y cliente: Marcos ágiles (Scrum/Jira), CRM y mapeo de procesos.\n• Innovación aplicada: Flujos asistidos con IA generativa para documentación y análisis.\n\nBusco colaborar en equipos de Diseño de Sistemas y Transformación Digital en México donde la claridad de negocio acelere el impacto tecnológico.",
        keywords: {
          siempre: ["Excel avanzado", "Power BI", "Jira / Scrum", "Inglés B1–B2"],
          algunas: ["SQL", "HubSpot / Salesforce", "UX Research", "Product Ops"],
          nunca: ["AI Agents", "Jira AI / Copilot", "Flujos agénticos"],
        },
      },
    },

    "comercio-telas": {
      id: "comercio-telas",
      shortName: "Telas y Retail",
      fullName: "Comercio al por menor de telas",
      vacantes: "35 vacantes (18.9%)",
      salary: "$47,750 MXN",
      exp: "3.4 años",
      focus: "Growth marketing basado en retorno (ROAS/LTV), e-commerce rentable e IA aplicada a demanda.",
      translations: [
        {
          category: "Growth y Rentabilidad",
          student: "Sé manejar redes sociales y crear campañas de marketing digital.",
          company: "Gestión de adquisición digital orientada a rentabilidad (ROAS, CAC y LTV) con pruebas A/B para optimizar conversión en e-commerce.",
          why: "Este sector registra el salario promedio más alto ($47,750 MXN) cuando el perfil conecta marketing con margen real.",
        },
        {
          category: "Analítica Comercial",
          student: "Hago reportes de ventas y tablas dinámicas en Excel.",
          company: "Modelado de indicadores comerciales (ticket promedio, rotación de catálogo y embudo de compra) en Power BI y Looker Studio.",
          why: "En retail y comercialización, los datos deben responder qué SKU promover y dónde se pierde margen.",
        },
        {
          category: "Operación E-commerce",
          student: "Creé una tienda en línea de prueba para un proyecto de la escuela.",
          company: "Administración de catálogo digital, arquitectura de conversión (CRO) y experiencia omnicanal en plataformas como Shopify o VTEX.",
          why: "Posicionar proyectos escolares como operación comercial aplicada valida dominio del ciclo de venta.",
        },
        {
          category: "Frontera IA 2026",
          student: "Sé generar textos e imágenes con herramientas de inteligencia artificial.",
          company: "Automatización de activos creativos, segmentación predictiva y optimización de pujas en Retail Media mediante IA aplicada.",
          why: "El 52% de la muestra en este sector concentra demanda en frontera tecnológica e IA aplicada.",
        },
      ],
      cvTemplate: {
        targetRoles: "Growth Marketing & AI Specialist · e-Commerce Specialist · Product Owner Jr. · Analista BI Retail",
        summaryHint: "Destaca tu enfoque en crecimiento rentable: cómo combinas analítica comercial, optimización de conversión y herramientas de IA.",
        academicProject: "Caso sugerido: Plan de crecimiento e-commerce con presupuesto simulado, proyección de ROAS/CAC y tablero de seguimiento en Looker Studio.",
        metricsToInclude: ["ROAS / ROI proyectado o alcanzado", "Tasa de conversión (CVR) y ticket promedio", "Reducción de costo de adquisición (CAC)"],
      },
      portfolioSections: [
        "01. Diagnóstico comercial del catálogo y cliente objetivo",
        "02. Estrategia de adquisición, embudo de conversión y Retail Media",
        "03. Dashboard de rentabilidad (GMV, ROAS, CAC y LTV)",
        "04. Flujo de automatización con IA generativa para contenido o pujas",
      ],
      pitches: {
        p30: "Hola, soy [Tu Nombre], estudiante de Negocios Digitales con enfoque en Growth, E-commerce y analítica comercial. Me dedico a convertir datos de clientes y campañas en decisiones de rentabilidad usando Power BI, Looker Studio e IA aplicada. En mi proyecto más reciente diseñé una estrategia de embudo digital proyectando mejoras directas en conversión y ROAS. Me encantaría aportar este enfoque de crecimiento a [Nombre de la Empresa].",
        p60: "Soy [Tu Nombre], estudiante de últimos semestres de Negocios Digitales especializado en comercio electrónico, analítica y crecimiento basado en datos. A lo largo de mi carrera he combinado formación financiera y comercial con herramientas digitales como Looker Studio, Power BI, SQL básico y plataformas e-commerce. En un proyecto aplicado de comercialización digital, analicé el comportamiento de compra por segmento y propuse optimizaciones de catálogo y pauta asistidas con IA que elevaron la eficiencia del presupuesto. Dado que el retail moderno exige perfiles que hablen el idioma del margen y la tecnología, busco integrarme a [Nombre de la Empresa] para impulsar sus canales digitales con métricas claras.",
        english: "Hi, I'm [Your Name], a Digital Business senior focused on E-commerce Growth, Business Intelligence, and Applied AI. I help turn customer and campaign data into profitable decisions by tracking core KPIs like ROAS, CAC, LTV, and conversion rate across Looker Studio and Power BI. In a recent applied project, I built an acquisition and retention model that optimized ad spend efficiency. I'd love to bring this data-driven growth mindset to [Company Name].",
        star: {
          situacion: "Una marca de retail en caso de estudio invertía en pauta digital sin claridad sobre qué categorías generaban retorno real ni recompra.",
          tarea: "Estructurar un modelo de medición comercial y reasignar la estrategia de canales digitales para mejorar rentabilidad.",
          accion: "Consolidé datos de ventas y campañas en Looker Studio, calculé CAC y LTV por línea de producto y diseñé variaciones de anuncios asistidas con IA.",
          resultado: "Se identificó el 30% de inversión improductiva y se diseñó un plan omnicanal con proyección de mejora de +22% en ROAS.",
        },
      },
      linkedin: {
        headline: "Negocios Digitales (LND) | Growth Marketing, E-commerce & Applied AI | ROAS · Power BI · Looker Studio · VTEX/Shopify",
        about: "Estudiante de Negocios Digitales orientado a resultados comerciales en ecosistemas e-commerce y retail moderno.\n\nLo que aporto a equipos de crecimiento:\n• Decisiones con métricas de negocio: control de ROAS, CAC, LTV, GMV y tasa de conversión.\n• Visualización y análisis: Power BI, Looker Studio, Excel avanzado y fundamentos de SQL/Python.\n• Innovación en Growth: aplicación de IA generativa y automatización para escalar campañas y contenido.\n\nAbierto a oportunidades en Growth Marketing, E-commerce y Product Management en México.",
        keywords: {
          siempre: ["ROAS / CAC / LTV", "Power BI", "Looker Studio", "Inglés B2–C1"],
          algunas: ["Shopify / VTEX", "SQL / Python", "Scrum CSPO", "CRO / Growth"],
          nunca: ["Applied AI", "Pacvue / Retail Media IA", "IA Generativa en campañas"],
        },
      },
    },

    "infraestructura-computo": {
      id: "infraestructura-computo",
      shortName: "Infraestructura y Nube",
      fullName: "Provisión de infraestructura de cómputo y procesamiento",
      vacantes: "35 vacantes (18.9%)",
      salary: "$32,724 MXN",
      exp: "2.5 años",
      focus: "Operación digital estructurada, ecosistemas marketplace/web, analítica basal y ejecución confiable.",
      translations: [
        {
          category: "Analítica Operativa",
          student: "Sé usar Excel y revisar estadísticas de páginas web.",
          company: "Monitoreo operativo de tráfico, desempeño web y conversión (GA4 y Excel avanzado) para asegurar continuidad y cumplimiento de metas.",
          why: "El 51% de las vacantes de este sector exigen dominio sólido del umbral basal analítico desde el día uno.",
        },
        {
          category: "E-commerce y Marketplaces",
          student: "Ayudé a subir productos y revisar pedidos en plataformas en línea.",
          company: "Gestión operativa de catálogos, disponibilidad, pricing y desempeño en marketplaces (Amazon, Mercado Libre) alineada a SLAs.",
          why: "Grandes empleadores del sector (retail tech y telecom) valoran precisión operativa y control de incidencias.",
        },
        {
          category: "Sistemas Empresariales",
          student: "Vi temas de ERP y bases de datos en la universidad.",
          company: "Integración de información comercial entre canales digitales y sistemas ERP/CRM para conciliación de inventario y reportes ejecutivos.",
          why: "Conectar el canal digital con la operación back-office diferencia a un perfil LND de un perfil solo creativo.",
        },
        {
          category: "Automatización e IA",
          student: "Uso herramientas digitales para ahorrar tiempo en tareas repetitivas.",
          company: "Estandarización de reportes recurrentes y documentación operativa mediante macros, flujos automatizados y asistentes de IA.",
          why: "Reducir tiempos operativos demuestra madurez en entornos de alta demanda y procesamiento.",
        },
      ],
      cvTemplate: {
        targetRoles: "Analista de E-commerce y Marketplace · Strategy Analyst Jr. · Web Master Digital · Operaciones Digitales",
        summaryHint: "Subraya tu rigor operativo, dominio de Excel avanzado/GA4 y capacidad para mantener ecosistemas digitales ordenados y medibles.",
        academicProject: "Caso sugerido: Auditoría técnica y comercial de sitio web o tienda marketplace con tablero de KPIs operativos y plan de mejora SEO/conversión.",
        metricsToInclude: ["% de mejora en tiempos de reporte u operación", "Precisión de catálogo / reducción de errores", "Incremento de tráfico orgánico o conversión"],
      },
      portfolioSections: [
        "01. Diagnóstico del ecosistema digital (web, marketplace y flujo de datos)",
        "02. Matriz de KPIs operativos y tablero automatizado en Excel / BI",
        "03. Plan de optimización de catálogo, SEO técnico y experiencia de compra",
        "04. Protocolo de seguimiento y estandarización de procesos",
      ],
      pitches: {
        p30: "Hola, soy [Tu Nombre], estudiante de Negocios Digitales con enfoque en operación digital, marketplaces y analítica de desempeño. Me destaco por traducir datos de Excel avanzado, Google Analytics 4 y Power BI en procesos claros que evitan fugas operativas y mejoran la conversión. Busco aportar orden, análisis y ejecución ágil al equipo digital de [Nombre de la Empresa].",
        p60: "Soy [Tu Nombre], estudiante de Negocios Digitales enfocado en estrategia y operación de canales digitales. He desarrollado bases sólidas en analítica web (GA4), modelado en Excel avanzado, administración de marketplaces y entendimiento de sistemas empresariales como ERP y CRM. En un proyecto universitario de auditoría digital, estructuré un tablero de control que redujo el tiempo de consolidación de indicadores y detectó oportunidades directas en catálogo y posicionamiento. Me interesa sumarme a [Nombre de la Empresa] porque valoro los entornos de infraestructura robusta donde la precisión operativa impacta directamente en el negocio.",
        english: "Hi, I'm [Your Name], a Digital Business student specialized in digital operations, marketplace analytics, and web performance. I rely on advanced Excel, GA4, and Power BI to keep digital channels accurate, measurable, and aligned with commercial KPIs. In my latest applied audit, I streamlined reporting workflows and identified high-impact conversion fixes. I'm eager to bring structured execution and analytical rigor to [Company Name].",
        star: {
          situacion: "Un proyecto de canal digital contaba con reportes dispersos en múltiples hojas de cálculo, retrasando decisiones de inventario y pauta.",
          tarea: "Unificar las métricas de tráfico, catálogo y conversión en un sistema de seguimiento claro y replicable.",
          accion: "Limpié y normalicé las fuentes en Excel avanzado y GA4, definí 8 KPIs críticos y armé un tablero automatizado con alertas de variación.",
          resultado: "Se redujo en 60% el tiempo semanal de generación de reportes y se detectaron 4 productos clave con fuga de conversión.",
        },
      },
      linkedin: {
        headline: "Negocios Digitales (LND) | Operaciones Digitales, E-commerce & Analítica | Excel Avanzado · GA4 · Power BI · Marketplaces",
        about: "Estudiante de Negocios Digitales apasionado por la operación estructurada y la analítica aplicada a canales digitales.\n\nÁreas donde genero valor inmediato:\n• Control y análisis: Excel avanzado, Google Analytics 4 y tableros ejecutivos en Power BI.\n• Operación comercial: gestión de marketplaces, catálogos web y optimización de conversión.\n• Integración de procesos: documentación clara, trabajo ágil y automatización de reportes.\n\nEn búsqueda de retos en Operaciones Digitales, Estrategia y E-commerce en México.",
        keywords: {
          siempre: ["Excel avanzado", "Google Analytics 4", "KPIs de conversión", "Inglés funcional"],
          algunas: ["Amazon / Mercado Libre", "SAP / ERP", "SEO / SEM", "Operaciones Cloud"],
          nunca: ["Automatización de reportes", "Copilot / Claude", "Analytics predictivo"],
        },
      },
    },

    "consultoria-admin": {
      id: "consultoria-admin",
      shortName: "Consultoría Admin.",
      fullName: "Servicios de consultoría en administración",
      vacantes: "30 vacantes (16.2%)",
      salary: "$37,414 MXN",
      exp: "3.7 años",
      focus: "Estructuración de casos de negocio (ROI), gestión de proyectos digitales y diagnóstico basado en datos.",
      translations: [
        {
          category: "Estrategia y Business Case",
          student: "Hice planes de negocio y presentaciones de estrategia en la carrera.",
          company: "Estructuración de casos de negocio (ROI, análisis de viabilidad y hoja de ruta de transformación) para presentar recomendaciones a dirección.",
          why: "En consultoría (salario promedio $37,414 MXN) se evalúa claridad ejecutiva y sustento financiero.",
        },
        {
          category: "Gestión de Proyectos",
          student: "Fui líder de equipo en varios proyectos semestrales.",
          company: "Gestión integral de alcance, cronograma, riesgos y comunicación con stakeholders bajo marcos híbridos (Scrum/PMO).",
          why: "Roles como Project Manager Digital y Account Manager exigen control formal de entregables y expectativas.",
        },
        {
          category: "Diagnóstico con Datos",
          student: "Analicé bases de datos para entregas de estadística e investigación.",
          company: "Diagnóstico cuantitativo de procesos comerciales y construcción de tableros ejecutivos (Power BI/SQL) para fundamentar decisiones.",
          why: "La consultoría moderna ya no entrega solo diapositivas: respalda cada diagnóstico con evidencia analítica.",
        },
        {
          category: "Transformación con IA",
          student: "Investigué sobre inteligencia artificial aplicada a las empresas.",
          company: "Evaluación de casos de uso de IA generativa y automatización para optimizar procesos administrativos y productividad de equipos.",
          why: "IA y Ciencia de Datos es el clúster #1 demandado dentro de consultoría en nuestra base 2026.",
        },
      ],
      cvTemplate: {
        targetRoles: "Consultor Jr. de Transformación Digital · Project Manager Digital · Analista de Estrategia · RevOps Analyst",
        summaryHint: "Enfatiza pensamiento estructurado, comunicación ejecutiva, modelado de ROI y dominio de herramientas analíticas y de gestión.",
        academicProject: "Caso sugerido: Consultoría aplicada o diagnóstico integral de transformación digital para una PyME mexicana con análisis costo-beneficio.",
        metricsToInclude: ["ROI o ahorro proyectado en horas/costos", "Número de procesos diagnosticados y rediseñados", "Cumplimiento de hitos y entregables"],
      },
      portfolioSections: [
        "01. Resumen ejecutivo: reto del cliente e hipótesis de diagnóstico",
        "02. Análisis de datos y hallazgos clave (gráficos y brechas detectadas)",
        "03. Hoja de ruta priorizada (matriz impacto vs. esfuerzo y ROI estimado)",
        "04. Plan de gestión del cambio e indicadores de éxito (OKRs/KPIs)",
      ],
      pitches: {
        p30: "Hola, soy [Tu Nombre], estudiante de Negocios Digitales con enfoque en estrategia, gestión de proyectos y diagnóstico basado en datos. Me especializo en transformar problemas operativos complejos en hojas de ruta claras con impacto medible en ROI usando Power BI, marcos ágiles e IA aplicada. Busco aportar pensamiento estructurado y ejecución al equipo de consultoría de [Nombre de la Empresa].",
        p60: "Soy [Tu Nombre], próximo egresado de Negocios Digitales con fuerte orientación a consultoría y transformación digital. Mi formación une análisis administrativo y financiero con tecnología aplicada: domino Power BI, Excel avanzado, metodologías ágiles y evaluación de casos de uso con IA. En un proyecto de diagnóstico empresarial para una organización local, analicé sus flujos comerciales, construí un caso de negocio con retorno estimado y entregué un plan de implementación por fases. Me motiva integrarme a [Nombre de la Empresa] para colaborar en proyectos multidisciplinarios donde el rigor analítico se traduzca en decisiones estratégicas para los clientes.",
        english: "Hi, I'm [Your Name], a Digital Business senior focused on digital strategy, project management, and data-driven consulting. I structure ambiguous business challenges into clear roadmaps backed by ROI analysis, Power BI dashboards, and practical AI use cases. In a recent consulting-style academic engagement, I mapped operational bottlenecks and built a phased transformation plan. I'd be thrilled to contribute structured problem-solving to [Company Name].",
        star: {
          situacion: "Una PyME evaluada en proyecto académico tenía procesos manuales de cotización y seguimiento que limitaban su capacidad de escalar.",
          tarea: "Diagnosticar cuellos de botella y proponer una hoja de ruta de digitalización viable en presupuesto y tiempo.",
          accion: "Entrevisté a responsables clave, modelé tiempos y costos en Excel/Power BI y estructuré una matriz impacto-esfuerzo incorporando CRM y automatización con IA.",
          resultado: "Se entregó un business case ejecutivo con reducción proyectada de 40% en tiempo administrativo y plan de adopción en 90 días.",
        },
      },
      linkedin: {
        headline: "Negocios Digitales (LND) | Estrategia Digital, Project Management & Analítica | Power BI · Scrum · Business Case · IA",
        about: "Estudiante de Negocios Digitales enfocado en consultoría estratégica, gestión de proyectos digitales y optimización basada en datos.\n\nCómo ayudo a organizaciones a tomar mejores decisiones:\n• Diagnóstico y estrategia: estructuración de casos de negocio (ROI), mapeo de procesos y OKRs.\n• Analítica ejecutiva: modelado de indicadores en Power BI, Excel avanzado y fundamentos de SQL.\n• Ejecución ágil e innovación: coordinación PMO/Scrum y evaluación práctica de herramientas de IA.\n\nConectemos para colaborar en proyectos de Transformación Digital y Consultoría en México.",
        keywords: {
          siempre: ["Business Case / ROI", "Power BI", "Gestión ágil de proyectos", "Inglés B2–C1"],
          algunas: ["PMP / Scrum", "SQL / ETL", "Change Management", "RevOps"],
          nunca: ["Orquestación de IA", "Automatización de procesos", "Diagnóstico asistido por IA"],
        },
      },
    },

    "comercio-cosmeticos": {
      id: "comercio-cosmeticos",
      shortName: "Cosméticos y Belleza",
      fullName: "Comercio al por menor de cosméticos y perfumería",
      vacantes: "25 vacantes (13.5%)",
      salary: "$35,916 MXN",
      exp: "3.5 años",
      focus: "Inteligencia de negocios (BI), sell-in/sell-out, retail media algorítmico y fidelización omnicanal.",
      translations: [
        {
          category: "Business Intelligence",
          student: "Sé hacer gráficas y reportes en Power BI para analizar ventas.",
          company: "Desarrollo de tableros de Inteligencia de Negocios (sell-in, sell-out, participación y margen por SKU) para guiar decisiones comerciales.",
          why: "Analista y Coordinador de BI son puestos protagonistas en cosméticos y consumo masivo ($35,916 MXN prom.).",
        },
        {
          category: "Retail Media y E-commerce",
          student: "Conozco cómo vender en Amazon, Mercado Libre y tiendas en línea.",
          company: "Optimización de visibilidad digital, Buy Box, contenido A+ y campañas de Retail Media enfocadas en GMV y tasa de conversión.",
          why: "En belleza y cuidado personal, ganar la primera posición digital define directamente el volumen de venta.",
        },
        {
          category: "CRM y Fidelización",
          student: "Sé crear correos promocionales y encuestas de satisfacción.",
          company: "Segmentación de clientes y automatización de campañas de recompra (CRM/Lifecycle) para incrementar frecuencia y valor de vida (LTV).",
          why: "La recurrencia de compra es el motor financiero clave en perfumería y cosmética.",
        },
        {
          category: "Analítica Predictiva e IA",
          student: "Entiendo conceptos de inteligencia artificial y tendencias de consumo.",
          company: "Aprovechamiento de plataformas de inteligencia retail (ej. Luminate, scoring y pricing dinámico) para anticipar demanda y promociones.",
          why: "El 28% de las vacantes del sector ya incorporan herramientas avanzadas de inteligencia comercial e IA.",
        },
      ],
      cvTemplate: {
        targetRoles: "Business Intelligence Analyst Jr. · E-commerce & Retail Media Analyst · CRM Specialist · Business Development Jr.",
        summaryHint: "Combina tu capacidad técnica en BI/SQL con sensibilidad comercial hacia consumo masivo, recompra y desempeño en marketplaces.",
        academicProject: "Caso sugerido: Tablero BI de desempeño por categoría de producto (sell-out simulado, estacionalidad y estrategia de recompra CRM).",
        metricsToInclude: ["Crecimiento de GMV / sell-out por categoría", "Tasa de recompra o retención CRM", "Mejora en conversión (CVR) o margen"],
      },
      portfolioSections: [
        "01. Análisis de categoría, estacionalidad y comportamiento del consumidor",
        "02. Modelo de datos y tablero ejecutivo BI (SQL + Power BI / Looker)",
        "03. Estrategia de Retail Media y optimización de fichas en marketplaces",
        "04. Flujo de fidelización CRM para impulsar recompra recurrente",
      ],
      pitches: {
        p30: "Hola, soy [Tu Nombre], estudiante de Negocios Digitales con enfoque en Business Intelligence, Retail Media y fidelización de clientes. Traduzco datos comerciales de sell-out, conversión y recompra en tableros accionables en Power BI y SQL para acelerar ventas digitales. Me encantaría sumar este enfoque analítico y comercial a [Nombre de la Empresa].",
        p60: "Soy [Tu Nombre], próximo egresado de la Licenciatura en Negocios Digitales especializado en inteligencia comercial y comercio electrónico para consumo. He desarrollado habilidades prácticas en Power BI, SQL, análisis de indicadores como GMV, CVR y LTV, además de estrategias de CRM para impulsar la recompra. En un proyecto académico de inteligencia de negocios, modelé el comportamiento estacional de un catálogo de consumo y propuse ajustes promocionales que mejoraron el margen proyectado. Me entusiasma el dinamismo de [Nombre de la Empresa] en el sector belleza y busco aportar análisis claro que potencie tanto el canal digital como la relación con el consumidor.",
        english: "Hi, I'm [Your Name], a Digital Business senior specializing in Business Intelligence, E-commerce, and Retail Media. I turn sales and customer behavior data into actionable Power BI dashboards and CRM retention flows, focusing on GMV, conversion rate, and repeat purchase. In a recent capstone project, I modeled category seasonality to optimize promotional ROI. I'm excited to bring this analytical and consumer-centric lens to [Company Name].",
        star: {
          situacion: "Un catálogo de productos de consumo en caso práctico mostraba altas ventas en temporada promocional pero baja recompra en meses posteriores.",
          tarea: "Identificar los productos con mayor potencial de fidelización y diseñar un sistema de seguimiento BI y CRM.",
          accion: "Estructuré la base de ventas con SQL y Power BI, segmenté clientes por frecuencia y ticket promedio, y diseñé un flujo automatizado de recompra.",
          resultado: "Se priorizó el top 20% de SKUs responsables del 68% del margen y se planteó una estrategia CRM con meta de +18% en retención.",
        },
      },
      linkedin: {
        headline: "Negocios Digitales (LND) | Business Intelligence, E-commerce & Retail Media | Power BI · SQL · CRM · GMV/CVR",
        about: "Estudiante de Negocios Digitales enfocado en inteligencia de negocios, comercio electrónico y crecimiento de marcas de consumo.\n\nCompetencias clave que integro:\n• Business Intelligence: modelado y visualización de indicadores comerciales (sell-out, margen, GMV) en Power BI y SQL.\n• Canales digitales y Retail Media: optimización de marketplaces, conversión (CVR) y desempeño de catálogo.\n• Retención y valor del cliente: estrategias CRM orientadas a recompra y LTV.\n\nInteresado en aportar en equipos de BI, E-commerce y Desarrollo de Negocio en México.",
        keywords: {
          siempre: ["Power BI / Looker", "GMV / CVR", "Sell-in & Sell-out", "Inglés B2"],
          algunas: ["SQL / Snowflake", "Retail Media / Buy Box", "CRM / Fidelización", "SAP"],
          nunca: ["Walmart Luminate", "Pricing algorítmico", "Perpetua AI"],
        },
      },
    },
  };

  /* =========================================================
     CRITERIOS DE LA RÚBRICA DE AUTODIAGNÓSTICO (MÓDULO 5)
     ========================================================= */
  const RUBRIC_CRITERIA = [
    {
      id: "c1",
      weight: 20,
      title: "Lenguaje de impacto cuantificable (Antes vs. Después)",
      desc: "Tus logros en CV y entrevistas incluyen métricas (%, $, ahorro de tiempo o volumen) en lugar de listar materias cursadas.",
      tip: "Usa el Módulo 1 (Traductor) para reescribir al menos 3 viñetas de tu CV con verbo de acción + herramienta + resultado medible.",
    },
    {
      id: "c2",
      weight: 15,
      title: "Dominio visible del Umbral Basal (Lo que siempre piden)",
      desc: "Tu perfil refleja manejo práctico de Excel avanzado, visualización BI (Power BI/Looker) e indicadores digitales de rentabilidad.",
      tip: "Destaca en el primer tercio de tu CV las herramientas del umbral basal analítico; son el primer filtro de selección.",
    },
    {
      id: "c3",
      weight: 20,
      title: "Alineación con diferenciadores de tu sector SCIAN",
      desc: "Adaptaste tu perfil con al menos 2 herramientas o conceptos clave del sector al que postulas (ej. SQL, CRM, ERP, Scrum o Retail Media).",
      tip: "Revisa las keywords de la sección 'Algunas veces' en el Módulo 4 para personalizar tu CV según la vacante.",
    },
    {
      id: "c4",
      weight: 15,
      title: "Proyectos académicos documentados como experiencia aplicada",
      desc: "Cuentas con un portafolio o sección de proyectos estructurada bajo método STAR (Situación, Tarea, Acción, Resultado).",
      tip: "Descarga la Guía de Portafolio del Módulo 2 y documenta 2 proyectos universitarios como casos reales de negocio.",
    },
    {
      id: "c5",
      weight: 15,
      title: "Proyección verificable de inglés técnico (Prima +96.5%)",
      desc: "Indicas tu nivel real de inglés (B1–C1) y tienes preparado un elevator pitch breve en inglés para entrevistas.",
      tip: "Practica y adapta el Pitch en Inglés del Módulo 3; dominar B2–C1 casi duplica el salario promedio en nuestra muestra.",
    },
    {
      id: "c6",
      weight: 15,
      title: "LinkedIn optimizado con keywords del Modelo Tripartito",
      desc: "Tu titular profesional, extracto 'Acerca de' y sección de destacados muestran evidencias y palabras clave buscadas en 2026.",
      tip: "Aplica el Checklist de LinkedIn del Módulo 4 y copia el bloque de titular y extracto adaptado a tu sector.",
    },
  ];

  const LINKEDIN_CHECKLIST_ITEMS = [
    "Titular profesional con fórmula: Perfil LND + Especialidad del sector + 3 herramientas clave.",
    "Extracto 'Acerca de' en primera persona enfocado en problemas de negocio que sabes resolver.",
    "Sección 'Destacados' con al menos 1 tablero BI, presentación ejecutiva o caso de estudio en PDF/enlace.",
    "Sección 'Aptitudes' actualizada con keywords de los 3 niveles (Umbral Basal, Diferenciador y Frontera IA).",
    "Experiencia académica o servicio social redactado con viñetas de impacto (sin jerga escolar pasiva).",
  ];

  /* =========================================================
     ESTADO GLOBAL DEL LABORATORIO
     ========================================================= */
  let activeSectorId = "diseno-sistemas";
  let activeDimension = "mensaje"; // mensaje | canales | validacion
  let translatorMode = "empresa"; // estudiante | empresa
  let cardOverrides = {}; // { index: "estudiante" | "empresa" }
  let activePitchTab = "p30"; // p30 | p60 | english | star
  const linkedinChecked = new Set();
  const rubricChecked = new Set();

  /* =========================================================
     REFERENCIAS DEL DOM
     ========================================================= */
  const sectorButtons = Array.from(document.querySelectorAll(".sector-chip"));
  const sectorContextBar = document.getElementById("kit-sector-context");

  const dimTabs = Array.from(document.querySelectorAll('#kit-dim-tabs [role="tab"]'));
  const dimPanels = {
    mensaje: document.getElementById("dim-panel-mensaje"),
    canales: document.getElementById("dim-panel-canales"),
    validacion: document.getElementById("dim-panel-validacion"),
  };

  // Dimensión 1: Traductor
  const modeButtons = Array.from(document.querySelectorAll("[data-translator-mode]"));
  const translatorGrid = document.getElementById("translator-grid");

  // Dimensión 2: Canales (Módulos 2, 3 y 4)
  const cvPreviewBox = document.getElementById("cv-sector-preview");
  const pitchSubTabs = Array.from(document.querySelectorAll(".pitch-tab"));
  const pitchStage = document.getElementById("pitch-stage");
  const linkedinHeadlineEl = document.getElementById("linkedin-headline-text");
  const linkedinAboutEl = document.getElementById("linkedin-about-text");
  const linkedinKeywordsBox = document.getElementById("linkedin-keywords-box");
  const linkedinChecklistEl = document.getElementById("linkedin-checklist");

  // Dimensión 3: Validación (Módulo 5)
  const rubricListEl = document.getElementById("rubric-list");
  const scoreValueEl = document.getElementById("rubric-score-value");
  const scoreRingEl = document.getElementById("rubric-progress-bar");
  const scoreBadgeEl = document.getElementById("rubric-status-badge");
  const scoreTitleEl = document.getElementById("rubric-status-title");
  const scoreDescEl = document.getElementById("rubric-status-desc");
  const scoreTipsEl = document.getElementById("rubric-tips-list");

  // Feedback / Toast accesible
  const liveToast = document.getElementById("kit-live-toast");
  let toastTimer = null;

  function showToast(message) {
    if (!liveToast) return;
    liveToast.textContent = message;
    liveToast.classList.add("visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      liveToast.classList.remove("visible");
    }, 3400);
  }

  /* =========================================================
     UTILIDADES: COPIADO Y DESCARGA DIRECTA REAL
     ========================================================= */
  async function copyToClipboard(text, buttonEl, labelSuccess = "¡Copiado!") {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }

      if (buttonEl) {
        const originalHTML = buttonEl.dataset.originalHtml || buttonEl.innerHTML;
        buttonEl.dataset.originalHtml = originalHTML;
        buttonEl.classList.add("copied");
        buttonEl.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m5 12 4 4L19 6" />
          </svg>
          <span>${labelSuccess}</span>
        `;
        window.setTimeout(() => {
          buttonEl.classList.remove("copied");
          buttonEl.innerHTML = originalHTML;
        }, 2000);
      }
      showToast("Contenido copiado al portapapeles listo para pegar.");
    } catch {
      showToast("No se pudo copiar automáticamente. Selecciona el texto manualmente.");
    }
  }

  function triggerFileDownload(filename, content, mimeType = "text/markdown;charset=utf-8") {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(`Descarga iniciada: ${filename}`);
  }

  function buildCvMarkdown(sector) {
    return `# PLANTILLA DE CV ORIENTADA A IMPACTO — OLD-LND 2026
Sector objetivo: ${sector.fullName}
Referencia salarial del sector (N=185): ${sector.salary} MXN promedio · Experiencia media: ${sector.exp}
Roles afines: ${sector.cvTemplate.targetRoles}

============================================================
[TU NOMBRE COMPLETO]
Ciudad de México / Remoto · Teléfono · Correo profesional · linkedin.com/in/tu-perfil · Portafolio
============================================================

## PERFIL PROFESIONAL
${sector.cvTemplate.summaryHint}

Ejemplo de extracto:
"${sector.linkedin.about.split("\n")[0]}"

## COMPETENCIAS CLAVE (MODELO TRIPARTITO OLD-LND 2026)
- Umbral Basal (Siempre): ${sector.linkedin.keywords.siempre.join(" | ")}
- Diferenciadores del Sector: ${sector.linkedin.keywords.algunas.join(" | ")}
- Frontera Tecnológica / IA: ${sector.linkedin.keywords.nunca.join(" | ")}

## EXPERIENCIA APLICADA Y PROYECTOS UNIVERSITARIOS (FORMATO IMPACTO)
[Nombre del Proyecto Aplicado / Prácticas Profesionales] — Rol desempeñado (Mes Año – Mes Año)
${sector.cvTemplate.academicProject}

Viñetas modelo (Modo Empresa):
${sector.translations.map((t) => `- [${t.category}] ${t.company}`).join("\n")}

Métricas clave que debes cuantificar en tus viñetas:
${sector.cvTemplate.metricsToInclude.map((m) => `* ${m}`).join("\n")}

## FORMACIÓN ACADÉMICA
Licenciatura en Negocios Digitales (LND) — Institución / Semestre actual
Certificaciones relevantes: [Ej. Power BI, Google Analytics 4, Scrum Fundamentals, SQL]

## IDIOMAS
- Español: Nativo
- Inglés: [B1 / B2 / C1] — Recuerda: el dominio B2–C1 genera hasta +96.5% de prima salarial en el estudio OLD-LND 2026.
`;
  }

  function buildPortfolioMarkdown(sector) {
    return `# GUÍA DE PORTAFOLIO APLICADO POR SECTOR — OLD-LND 2026
Sector objetivo: ${sector.fullName}

¿Por qué un portafolio?
En el estudio OLD-LND 2026, los especialistas confirmaron que las evidencias tangibles (tableros, casos de negocio y procesos documentados) sustituyen la falta de experiencia formal en perfiles junior.

## ESTRUCTURA RECOMENDADA PARA TU CASO DE ESTUDIO (NOTION / PDF / BEHANCE / GITHUB)
${sector.portfolioSections.map((s) => `${s}`).join("\n")}

## PROYECTO SUGERIDO PARA ESTE SECTOR
${sector.cvTemplate.academicProject}

## HISTORIA EN MÉTODO STAR PARA PRESENTAR TU PORTAFOLIO
- Situación: ${sector.pitches.star.situacion}
- Tarea: ${sector.pitches.star.tarea}
- Acción: ${sector.pitches.star.accion}
- Resultado: ${sector.pitches.star.resultado}

## INDICADORES QUE DEBEN APARECER EN TUS CAPTURAS O TABLEROS
${sector.cvTemplate.metricsToInclude.map((m) => `- ${m}`).join("\n")}
`;
  }

  function buildFullKitHtml(sector) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Kit de Comunicación LND 2026 — ${sector.shortName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #111; max-width: 820px; margin: 32px auto; padding: 0 24px; line-height: 1.6; }
    header { border-bottom: 3px solid #750946; padding-bottom: 16px; margin-bottom: 24px; }
    h1 { margin: 0 0 6px; color: #750946; font-size: 24px; }
    .meta { font-size: 13px; color: #52555a; }
    h2 { color: #0a0a0c; border-left: 4px solid #750946; padding-left: 10px; margin-top: 28px; font-size: 18px; }
    .card { border: 1px solid #ddd; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; background: #fafafa; }
    .before { color: #8c2d4a; font-size: 13px; }
    .after { color: #0f5132; font-weight: 600; margin-top: 6px; }
    .pill { display: inline-block; padding: 3px 9px; border-radius: 999px; background: #f3e6ee; color: #750946; font-size: 12px; font-weight: 600; margin: 2px 4px 2px 0; }
    pre { white-space: pre-wrap; font-family: inherit; background: #f7f6f8; padding: 14px; border-radius: 8px; border: 1px solid #e5e5ea; }
    @media print { .no-print { display: none; } body { margin: 0; } }
  </style>
</head>
<body>
  <header>
    <p class="no-print" style="font-size:12px;color:#750946;font-weight:700;">💡 Presiona Ctrl + P (o Cmd + P) para guardar este Kit completo en formato PDF.</p>
    <h1>Kit de Comunicación LND 2026 · ${sector.fullName}</h1>
    <div class="meta">Observatorio Laboral Digital (OLD-LND · Equipo 6) · ${sector.vacantes} · Salario promedio: ${sector.salary} · Exp. media: ${sector.exp}</div>
  </header>

  <h2>Módulo 1 · Traductor de Competencias (Estudiante vs. Especialista)</h2>
  ${sector.translations
    .map(
      (t) => `<div class="card">
      <strong>${t.category}</strong>
      <div class="before"><strong>Antes (Escolar):</strong> ${t.student}</div>
      <div class="after"><strong>Después (Impacto de negocio):</strong> ${t.company}</div>
      <div style="font-size:12px;color:#52555a;margin-top:4px;"><em>Clave Fase 3:</em> ${t.why}</div>
    </div>`
    )
    .join("")}

  <h2>Módulo 2 · Enfoque de CV y Portafolio para el Sector</h2>
  <p><strong>Roles objetivo:</strong> ${sector.cvTemplate.targetRoles}</p>
  <p><strong>Proyecto académico sugerido:</strong> ${sector.cvTemplate.academicProject}</p>
  <ul>${sector.portfolioSections.map((s) => `<li>${s}</li>`).join("")}</ul>

  <h2>Módulo 3 · Guiones de Elevator Pitch y Método STAR</h2>
  <p><strong>Pitch 30 segundos:</strong></p><pre>${sector.pitches.p30}</pre>
  <p><strong>Pitch 60 segundos:</strong></p><pre>${sector.pitches.p60}</pre>
  <p><strong>Versión en Inglés (B2–C1 · Prima salarial +96.5%):</strong></p><pre>${sector.pitches.english}</pre>
  <div class="card">
    <strong>Respuesta Modelo STAR</strong>
    <p><strong>S (Situación):</strong> ${sector.pitches.star.situacion}</p>
    <p><strong>T (Tarea):</strong> ${sector.pitches.star.tarea}</p>
    <p><strong>A (Acción):</strong> ${sector.pitches.star.accion}</p>
    <p><strong>R (Resultado):</strong> ${sector.pitches.star.resultado}</p>
  </div>

  <h2>Módulo 4 · LinkedIn y Keywords Tripartitas</h2>
  <p><strong>Titular recomendado:</strong> ${sector.linkedin.headline}</p>
  <pre>${sector.linkedin.about}</pre>
  <p><strong>Siempre:</strong> ${sector.linkedin.keywords.siempre.map((k) => `<span class="pill">${k}</span>`).join("")}</p>
  <p><strong>Algunas veces:</strong> ${sector.linkedin.keywords.algunas.map((k) => `<span class="pill">${k}</span>`).join("")}</p>
  <p><strong>Frontera IA:</strong> ${sector.linkedin.keywords.nunca.map((k) => `<span class="pill">${k}</span>`).join("")}</p>

  <h2>Módulo 5 · Rúbrica de Autodiagnóstico</h2>
  <ul>${RUBRIC_CRITERIA.map((c) => `<li><strong>[${c.weight}%] ${c.title}:</strong> ${c.desc}</li>`).join("")}</ul>
</body>
</html>`;
  }

  /* =========================================================
     RENDERIZADORES POR DIMENSIÓN
     ========================================================= */
  function renderSectorContext() {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector || !sectorContextBar) return;

    sectorContextBar.innerHTML = `
      <div class="kit-context-main">
        <span class="kit-context-label">Sector activo (Fase 2)</span>
        <strong>${sector.fullName}</strong>
        <p>${sector.focus}</p>
      </div>
      <div class="kit-context-stats">
        <div>
          <small>Muestra</small>
          <b>${sector.vacantes}</b>
        </div>
        <div>
          <small>Salario prom.</small>
          <b>${sector.salary}</b>
        </div>
        <div>
          <small>Exp. media</small>
          <b>${sector.exp}</b>
        </div>
      </div>
    `;
  }

  function renderTranslator() {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector || !translatorGrid) return;

    translatorGrid.innerHTML = sector.translations
      .map((item, idx) => {
        const cardMode = cardOverrides[idx] || translatorMode;
        const isCompany = cardMode === "empresa";

        return `
          <article class="translator-card ${isCompany ? "mode-company" : "mode-student"}" data-card-index="${idx}">
            <div class="translator-card-head">
              <span class="translator-cat">${item.category}</span>
              <button
                type="button"
                class="card-flip-btn"
                data-flip-index="${idx}"
                aria-pressed="${isCompany}"
                title="Alternar entre redacción escolar e impacto de negocio"
              >
                <span class="mode-dot" aria-hidden="true"></span>
                ${isCompany ? "Modo Empresa · Después" : "Modo Estudiante · Antes"}
              </button>
            </div>

            <blockquote class="translator-quote">
              “${isCompany ? item.company : item.student}”
            </blockquote>

            <p class="translator-why">
              <strong>${isCompany ? "Por qué funciona (Fase 3):" : "Brecha detectada (Fase 3):"}</strong>
              ${item.why}
            </p>

            <div class="translator-card-actions">
              <button type="button" class="mini-action-btn" data-flip-index="${idx}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M17 2l4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="M7 22l-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" />
                </svg>
                ${isCompany ? "Ver antes (escolar)" : "Traducir a empresa"}
              </button>
              <button type="button" class="mini-copy-btn" data-copy-translation="${idx}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copiar versión empresa</span>
              </button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderCvAndPortfolio() {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector || !cvPreviewBox) return;

    cvPreviewBox.innerHTML = `
      <div class="cv-preview-grid">
        <div class="cv-preview-block">
          <span class="sub-eyebrow">Roles objetivo en este sector</span>
          <p class="cv-roles-text">${sector.cvTemplate.targetRoles}</p>
          <p class="cv-hint">${sector.cvTemplate.summaryHint}</p>
          <div class="cv-project-box">
            <strong>Proyecto escolar como experiencia aplicada</strong>
            <p>${sector.cvTemplate.academicProject}</p>
          </div>
        </div>
        <div class="cv-preview-block">
          <span class="sub-eyebrow">Estructura de portafolio (4 bloques)</span>
          <ul class="kit-bullet-list">
            ${sector.portfolioSections.map((s) => `<li>${s}</li>`).join("")}
          </ul>
          <span class="sub-eyebrow" style="margin-top:14px;">Métricas que esperan los especialistas</span>
          <div class="pill-row">
            ${sector.cvTemplate.metricsToInclude.map((m) => `<span class="tool-pill">${m}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderPitchStage() {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector || !pitchStage) return;

    if (activePitchTab === "star") {
      const s = sector.pitches.star;
      const starText = `MÉTODO STAR (${sector.shortName}):\n• Situación: ${s.situacion}\n• Tarea: ${s.tarea}\n• Acción: ${s.accion}\n• Resultado: ${s.resultado}`;
      pitchStage.innerHTML = `
        <div class="star-grid">
          <div class="star-item"><span>S</span><div><strong>Situación</strong><p>${s.situacion}</p></div></div>
          <div class="star-item"><span>T</span><div><strong>Tarea</strong><p>${s.tarea}</p></div></div>
          <div class="star-item"><span>A</span><div><strong>Acción</strong><p>${s.accion}</p></div></div>
          <div class="star-item"><span>R</span><div><strong>Resultado</strong><p>${s.resultado}</p></div></div>
        </div>
        <div class="pitch-footer">
          <small>Úsalo en entrevistas por competencias para transformar proyectos escolares en resultados verificables.</small>
          <button type="button" class="mini-copy-btn" id="copy-pitch-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>Copiar estructura STAR</span>
          </button>
        </div>
      `;
      document.getElementById("copy-pitch-btn")?.addEventListener("click", (e) => {
        copyToClipboard(starText, e.currentTarget);
      });
      return;
    }

    const metaMap = {
      p30: {
        badge: "30 segundos · Ferias de empleo y networking",
        text: sector.pitches.p30,
        note: "Tip: Reemplaza los corchetes [ ] por un dato real de tu proyecto universitario más sólido.",
      },
      p60: {
        badge: "60 segundos · Entrevista inicial (\"Háblame de ti\")",
        text: sector.pitches.p60,
        note: "Tip: Conecta tu perfil híbrido negocio-tecnología con el reto real del sector.",
      },
      english: {
        badge: "English Pitch B2–C1 · Evidencia OLD-LND: +96.5% prima salarial",
        text: sector.pitches.english,
        note: "En nuestra muestra de 185 vacantes, los perfiles con inglés avanzado promedian $53,347 MXN frente a $27,147 MXN sin especificar.",
      },
    };

    const current = metaMap[activePitchTab] || metaMap.p30;
    pitchStage.innerHTML = `
      <div class="pitch-badge-row">
        <span class="pitch-meta-badge ${activePitchTab === "english" ? "highlight" : ""}">${current.badge}</span>
      </div>
      <p class="pitch-script-text">${current.text}</p>
      <div class="pitch-footer">
        <small>${current.note}</small>
        <button type="button" class="mini-copy-btn" id="copy-pitch-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>Copiar guion</span>
        </button>
      </div>
    `;
    document.getElementById("copy-pitch-btn")?.addEventListener("click", (e) => {
      copyToClipboard(current.text, e.currentTarget);
    });
  }

  function renderLinkedInModule() {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector) return;

    if (linkedinHeadlineEl) linkedinHeadlineEl.textContent = sector.linkedin.headline;
    if (linkedinAboutEl) linkedinAboutEl.textContent = sector.linkedin.about;

    if (linkedinKeywordsBox) {
      linkedinKeywordsBox.innerHTML = `
        <div class="kw-tier">
          <span class="kw-tier-label basal">Umbral Basal · Siempre</span>
          <div class="pill-row">
            ${sector.linkedin.keywords.siempre.map((k) => `<span class="tool-pill">${k}</span>`).join("")}
          </div>
        </div>
        <div class="kw-tier">
          <span class="kw-tier-label diff">Diferenciadoras · Algunas veces</span>
          <div class="pill-row">
            ${sector.linkedin.keywords.algunas.map((k) => `<span class="tool-pill">${k}</span>`).join("")}
          </div>
        </div>
        <div class="kw-tier">
          <span class="kw-tier-label frontier">Frontera IA · Innovadoras 2026</span>
          <div class="pill-row">
            ${sector.linkedin.keywords.nunca.map((k) => `<span class="tool-pill frontier-pill">${k}</span>`).join("")}
          </div>
        </div>
      `;
    }

    if (linkedinChecklistEl) {
      linkedinChecklistEl.innerHTML = LINKEDIN_CHECKLIST_ITEMS.map((text, idx) => {
        const checked = linkedinChecked.has(idx);
        return `
          <label class="kit-check-item ${checked ? "done" : ""}">
            <input type="checkbox" data-li-check="${idx}" ${checked ? "checked" : ""} />
            <span>${text}</span>
          </label>
        `;
      }).join("");
    }
  }

  function renderRubric() {
    const sector = KIT_SECTORS[activeSectorId];
    if (rubricListEl) {
      rubricListEl.innerHTML = RUBRIC_CRITERIA.map((crit) => {
        const isChecked = rubricChecked.has(crit.id);
        return `
          <label class="rubric-item ${isChecked ? "checked" : ""}">
            <input type="checkbox" data-rubric-id="${crit.id}" ${isChecked ? "checked" : ""} />
            <div class="rubric-item-body">
              <div class="rubric-item-top">
                <strong>${crit.title}</strong>
                <span class="rubric-weight">+${crit.weight}%</span>
              </div>
              <p>${crit.desc}</p>
            </div>
          </label>
        `;
      }).join("");
    }

    let score = 0;
    const missingTips = [];
    RUBRIC_CRITERIA.forEach((crit) => {
      if (rubricChecked.has(crit.id)) {
        score += crit.weight;
      } else {
        missingTips.push(crit.tip);
      }
    });

    if (scoreValueEl) scoreValueEl.textContent = `${score}%`;
    if (scoreRingEl) {
      scoreRingEl.style.width = `${score}%`;
      scoreRingEl.setAttribute("aria-valuenow", String(score));
    }

    let levelClass = "status-low";
    let badgeText = "En construcción";
    let statusTitle = `Perfil inicial para ${sector.shortName}`;
    let statusDesc =
      "Marca las evidencias que ya aplicas en tu CV y portafolio para calcular tu afinidad con los estándares OLD-LND 2026.";

    if (score > 0 && score < 50) {
      levelClass = "status-low";
      badgeText = "En construcción";
      statusTitle = `Brecha comunicativa detectada (${score}%)`;
      statusDesc = `Tu perfil aún comunica competencias en formato escolar frente a lo que espera ${sector.shortName}.`;
    } else if (score >= 50 && score < 80) {
      levelClass = "status-mid";
      badgeText = "Competitivo en progreso";
      statusTitle = `Buen avance hacia ${sector.shortName} (${score}%)`;
      statusDesc =
        "Ya integras bases sólidas. Completar los criterios pendientes elevará tu visibilidad frente a especialistas.";
    } else if (score >= 80) {
      levelClass = "status-high";
      badgeText = "Listo para vinculación";
      statusTitle = `Alta afinidad con ${sector.shortName} (${score}%)`;
      statusDesc =
        "Tu narrativa proyecta impacto cuantificable, dominio técnico y visibilidad digital alineada al mercado 2026.";
    }

    if (scoreBadgeEl) {
      scoreBadgeEl.className = `rubric-badge ${levelClass}`;
      scoreBadgeEl.textContent = badgeText;
    }
    if (scoreRingEl) {
      scoreRingEl.className = `rubric-progress-fill ${levelClass}`;
    }
    if (scoreTitleEl) scoreTitleEl.textContent = statusTitle;
    if (scoreDescEl) scoreDescEl.textContent = statusDesc;

    if (scoreTipsEl) {
      if (missingTips.length === 0) {
        scoreTipsEl.innerHTML =
          '<li class="tip-success">Cumples con los 6 criterios del Observatorio. Ya puedes postular o compartir tu perfil con empresas.</li>';
      } else {
        scoreTipsEl.innerHTML = missingTips
          .slice(0, 3)
          .map((tip) => `<li>${tip}</li>`)
          .join("");
      }
    }
  }

  function renderAll() {
    renderSectorContext();
    renderTranslator();
    renderCvAndPortfolio();
    renderPitchStage();
    renderLinkedInModule();
    renderRubric();
    resetInterviewSimulator();
  }

  /* =========================================================
     EVENTOS E INTERACTIVIDAD
     ========================================================= */

  // 1. Selector global por sector SCIAN
  sectorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextSector = btn.dataset.kitSector;
      if (!nextSector || !KIT_SECTORS[nextSector]) return;
      activeSectorId = nextSector;
      cardOverrides = {}; // Reinicia overrides individuales al cambiar de sector
      sectorButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      renderAll();
    });
  });

  // 2. Navegación por las 3 Dimensiones (Tabs accesibles con teclado)
  function activateDimension(tabBtn) {
    const dim = tabBtn.dataset.dimension;
    if (!dim || !dimPanels[dim]) return;
    activeDimension = dim;

    dimTabs.forEach((btn) => {
      const selected = btn === tabBtn;
      btn.classList.toggle("active", selected);
      btn.setAttribute("aria-selected", String(selected));
      btn.setAttribute("tabindex", selected ? "0" : "-1");
    });

    Object.entries(dimPanels).forEach(([key, panel]) => {
      if (panel) panel.hidden = key !== dim;
    });
  }

  dimTabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => activateDimension(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIdx = null;
      if (event.key === "ArrowRight") nextIdx = (idx + 1) % dimTabs.length;
      if (event.key === "ArrowLeft") nextIdx = (idx - 1 + dimTabs.length) % dimTabs.length;
      if (event.key === "Home") nextIdx = 0;
      if (event.key === "End") nextIdx = dimTabs.length - 1;
      if (nextIdx !== null) {
        event.preventDefault();
        dimTabs[nextIdx].focus();
        activateDimension(dimTabs[nextIdx]);
      }
    });
  });

  // 3. Switch Global Modo Estudiante vs. Modo Empresa (Módulo 1)
  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      translatorMode = btn.dataset.translatorMode;
      cardOverrides = {};
      modeButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      renderTranslator();
    });
  });

  // Delegación para flip individual y copiado en tarjetas del traductor
  translatorGrid?.addEventListener("click", (event) => {
    const flipBtn = event.target.closest("[data-flip-index]");
    if (flipBtn) {
      const idx = flipBtn.getAttribute("data-flip-index");
      const current = cardOverrides[idx] || translatorMode;
      cardOverrides[idx] = current === "empresa" ? "estudiante" : "empresa";
      renderTranslator();
      return;
    }

    const copyBtn = event.target.closest("[data-copy-translation]");
    if (copyBtn) {
      const idx = Number(copyBtn.getAttribute("data-copy-translation"));
      const item = KIT_SECTORS[activeSectorId]?.translations[idx];
      if (item) copyToClipboard(item.company, copyBtn);
    }
  });

  // 4. Sub-tabs del Módulo 3 (Pitch 30s / 60s / Inglés / STAR)
  pitchSubTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      activePitchTab = btn.dataset.pitch;
      pitchSubTabs.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      renderPitchStage();
    });
  });

  // 5. Botones de copiado en Módulo 4 (LinkedIn)
  document.getElementById("copy-headline-btn")?.addEventListener("click", (e) => {
    const sector = KIT_SECTORS[activeSectorId];
    if (sector) copyToClipboard(sector.linkedin.headline, e.currentTarget);
  });

  document.getElementById("copy-about-btn")?.addEventListener("click", (e) => {
    const sector = KIT_SECTORS[activeSectorId];
    if (sector) copyToClipboard(sector.linkedin.about, e.currentTarget);
  });

  document.getElementById("copy-keywords-btn")?.addEventListener("click", (e) => {
    const kw = KIT_SECTORS[activeSectorId]?.linkedin.keywords;
    if (!kw) return;
    const block = [...kw.siempre, ...kw.algunas, ...kw.nunca].join(" · ");
    copyToClipboard(block, e.currentTarget);
  });

  linkedinChecklistEl?.addEventListener("change", (event) => {
    const input = event.target.closest("[data-li-check]");
    if (!input) return;
    const idx = Number(input.getAttribute("data-li-check"));
    if (input.checked) linkedinChecked.add(idx);
    else linkedinChecked.delete(idx);
    renderLinkedInModule();
  });

  // 6. Descargas Directas (Módulo 2 y Kit Completo)
  document.getElementById("download-cv-btn")?.addEventListener("click", () => {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector) return;
    triggerFileDownload(`CV_LND_2026_${sector.id}.md`, buildCvMarkdown(sector));
  });

  document.getElementById("download-portfolio-btn")?.addEventListener("click", () => {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector) return;
    triggerFileDownload(`Portafolio_LND_2026_${sector.id}.md`, buildPortfolioMarkdown(sector));
  });

  document.getElementById("download-full-kit-btn")?.addEventListener("click", () => {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector) return;
    triggerFileDownload(
      `Kit_Comunicacion_OLD_LND_2026_${sector.id}.html`,
      buildFullKitHtml(sector),
      "text/html;charset=utf-8"
    );
  });

  // 7. Rúbrica Interactiva de Autodiagnóstico (Módulo 5)
  rubricListEl?.addEventListener("change", (event) => {
    const input = event.target.closest("[data-rubric-id]");
    if (!input) return;
    const id = input.getAttribute("data-rubric-id");
    if (input.checked) rubricChecked.add(id);
    else rubricChecked.delete(id);
    renderRubric();
  });

  document.getElementById("reset-rubric-btn")?.addEventListener("click", () => {
    rubricChecked.clear();
    renderRubric();
    showToast("Autodiagnóstico reiniciado.");
  });

  document.getElementById("download-rubric-btn")?.addEventListener("click", () => {
    const sector = KIT_SECTORS[activeSectorId];
    if (!sector) return;
    let total = 0;
    const lines = RUBRIC_CRITERIA.map((c) => {
      const ok = rubricChecked.has(c.id);
      if (ok) total += c.weight;
      return `[${ok ? "X" : " "}] (${c.weight}%) ${c.title}\n    ${ok ? "Cumplido" : "Acción sugerida: " + c.tip}`;
    });
    const report = `REPORTE DE AUTODIAGNÓSTICO DE COMUNICACIÓN — OLD-LND 2026
Sector evaluado: ${sector.fullName}
Puntaje de afinidad: ${total}%
Fecha: ${new Date().toLocaleDateString("es-MX")}

DETALLE POR CRITERIO:
${lines.join("\n\n")}
`;
    triggerFileDownload(`Autodiagnostico_LND_${sector.id}.txt`, report, "text/plain;charset=utf-8");
  });

  /* =========================================================
     8. BOT SIMULADOR DE ENTREVISTA LND (estrategia.html)
     ========================================================= */
  const INTERVIEW_SCENARIOS = {
    "diseno-sistemas": {
      recruiter: "Líder de Producto y Talento · Diseño de Sistemas",
      questions: [
        {
          topic: "Herramientas y puente negocio–TI",
          prompt: "En nuestros proyectos de software necesitamos alguien que hable con clientes y con desarrolladores. ¿Cómo has trabajado con herramientas de seguimiento y datos?",
          options: [
            {
              letter: "A",
              level: "escolar",
              points: 5,
              text: "Llevé materias de administración de proyectos y sé usar Excel y Word para entregar reportes de equipo.",
              feedback: "Demasiado escolar. Mencionar materias no demuestra operación ágil ni lenguaje técnico de producto.",
            },
            {
              letter: "B",
              level: "especialista",
              points: 34,
              text: "Documenté historias de usuario y backlog en Jira bajo Scrum, y construí un tablero de adopción en Power BI para priorizar mejoras con el equipo técnico.",
              feedback: "Excelente respuesta Modo Empresa: conectas marco ágil (Jira/Scrum), analítica (Power BI) y valor de producto.",
            },
            {
              letter: "C",
              level: "intermedio",
              points: 20,
              text: "He usado Jira y Power BI en proyectos escolares para organizar tareas y graficar encuestas de usuarios.",
              feedback: "Buen nivel técnico, pero falta explicar qué decisión de negocio o mejora concreta lograste con esas herramientas.",
            },
          ],
        },
        {
          topic: "Enfoque CRM y retención",
          prompt: "Si detectas que los usuarios abandonan una plataforma durante su registro, ¿qué propondrías primero?",
          options: [
            {
              letter: "A",
              level: "intermedio",
              points: 20,
              text: "Haría una encuesta de satisfacción y le pediría al equipo de diseño que cambie los colores y botones.",
              feedback: "Es intuitivo, pero un especialista prioriza medir el punto exacto de fuga antes de rediseñar visualmente.",
            },
            {
              letter: "B",
              level: "escolar",
              points: 5,
              text: "Revisaría la teoría de experiencia de usuario que vimos en clase para proponer ideas creativas.",
              feedback: "Falta aterrizaje operativo. Las empresas de sistemas buscan diagnóstico basado en embudo y datos reales.",
            },
            {
              letter: "C",
              level: "especialista",
              points: 33,
              text: "Mediría el embudo paso a paso para ubicar dónde cae la conversión, haría pruebas con 10–15 usuarios y priorizaría reducir fricción junto con alertas en CRM.",
              feedback: "Respuesta sólida: combinas medición de embudo, validación UX y seguimiento comercial en CRM.",
            },
          ],
        },
        {
          topic: "Situacional STAR + IA 2026",
          prompt: "Cuéntame brevemente cómo has usado IA o automatización para resolver un cuello de botella real.",
          options: [
            {
              letter: "A",
              level: "especialista",
              points: 33,
              text: "En un proyecto con documentación dispersa (S), estandaricé historias de usuario y pruebas apoyándome en copilotos de IA y plantillas en Jira (A), reduciendo 40% el tiempo de entrega (R).",
              feedback: "Impecable uso de STAR + Frontera IA: demuestras criterio práctico y resultado cuantificable.",
            },
            {
              letter: "B",
              level: "escolar",
              points: 5,
              text: "Uso ChatGPT seguido para resumir PDFs largos y corregir ortografía en mis tareas de la universidad.",
              feedback: "Uso demasiado básico. En 2026 los reclutadores buscan aplicación de IA en procesos y productividad real.",
            },
            {
              letter: "C",
              level: "intermedio",
              points: 20,
              text: "Usé inteligencia artificial para generar ideas de prototipos y redactar textos de una app escolar.",
              feedback: "Buen inicio, pero necesitas estructurarlo con método STAR y agregar el impacto medible obtenido.",
            },
          ],
        },
      ],
    },
    "comercio-telas": {
      recruiter: "Head of Growth & E-commerce · Retail de Telas",
      questions: [
        {
          topic: "Métricas de rentabilidad digital",
          prompt: "Nuestro presupuesto de pauta digital debe justificarse cada semana. ¿Qué indicadores revisarías primero?",
          options: [
            {
              letter: "A",
              level: "especialista",
              points: 34,
              text: "Evaluaría ROAS, CAC frente a LTV, tasa de conversión (CVR) y margen por categoría en Looker Studio para reasignar inversión hacia los SKU más rentables.",
              feedback: "Exacto: en este sector (salario prom. $47,750 MXN) el perfil ganador habla el idioma del margen y retorno.",
            },
            {
              letter: "B",
              level: "escolar",
              points: 5,
              text: "Revisaría cuántos likes, comentarios y seguidores nuevos ganaron las publicaciones de la semana.",
              feedback: "Métricas de vanidad. Un especialista de Growth descarta perfiles que no conectan pauta con ventas y margen.",
            },
            {
              letter: "C",
              level: "intermedio",
              points: 20,
              text: "Analizaría el alcance, los clics y el costo por clic en redes sociales para ver qué anuncio funcionó mejor.",
              feedback: "Vas por buen camino, pero te quedaste en la parte alta del embudo sin conectar con CAC, ROAS ni rentabilidad.",
            },
          ],
        },
        {
          topic: "Analítica comercial y catálogo",
          prompt: "¿Cómo aportarías valor si nuestra tienda en línea tiene mucho tráfico pero pocas compras?",
          options: [
            {
              letter: "A",
              level: "intermedio",
              points: 20,
              text: "Revisaría las fotos de los productos y probaría poner más descuentos para incentivar las ventas.",
              feedback: "Bajar precios sin diagnóstico erosiona el margen. Primero hay que identificar dónde se rompe el checkout.",
            },
            {
              letter: "B",
              level: "especialista",
              points: 33,
              text: "Auditaría el embudo CRO (ficha, carrito y pago), cruzaría ticket promedio y rotación en Power BI y correría pruebas A/B antes de tocar precios.",
              feedback: "Gran criterio comercial y analítico: proteges margen y resuelves conversión con hipótesis medibles.",
            },
            {
              letter: "C",
              level: "escolar",
              points: 5,
              text: "Hice una tienda de prueba en la escuela y subiría más publicaciones en Instagram para atraer más gente.",
              feedback: "Si el tráfico no convierte, traer más tráfico solo quema presupuesto. Falta diagnóstico de embudo.",
            },
          ],
        },
        {
          topic: "Frontera IA aplicada a Retail",
          prompt: "El 52% de nuestras vacantes valoran IA aplicada. ¿Cómo la integrarías en Growth o E-commerce?",
          options: [
            {
              letter: "A",
              level: "escolar",
              points: 5,
              text: "Le pediría a una IA que escriba los copys de redes sociales para ahorrar tiempo.",
              feedback: "Es el uso mínimo esperado. No diferencia a un perfil de Negocios Digitales en 2026.",
            },
            {
              letter: "B",
              level: "intermedio",
              points: 20,
              text: "Usaría herramientas de IA para generar variaciones de anuncios e imágenes de catálogo más rápido.",
              feedback: "Útil en producción creativa, pero suma mucho más si lo vinculas a pruebas A/B y desempeño de pujas.",
            },
            {
              letter: "C",
              level: "especialista",
              points: 33,
              text: "Combinaría IA generativa para iterar creatividades con análisis de cohortes y optimización de pujas en Retail Media para elevar el ROAS proyectado.",
              feedback: "Nivel especialista: unes creatividad escalable, datos de clientes y optimización algorítmica de inversión.",
            },
          ],
        },
      ],
    },
    "infraestructura-computo": {
      recruiter: "Gerente de Operaciones Digitales · Infraestructura y Nube",
      questions: [
        {
          topic: "Umbral basal operativo",
          prompt: "Aquí manejamos catálogos grandes y reportes diarios. ¿Cuál es tu fortaleza real en Excel y analítica web?",
          options: [
            {
              letter: "A",
              level: "intermedio",
              points: 20,
              text: "Manejo tablas dinámicas, fórmulas básicas y sé entrar a Google Analytics para ver visitas.",
              feedback: "Aceptable como base, pero en este sector (51% umbral basal) esperan automatización y precisión operativa.",
            },
            {
              letter: "B",
              level: "especialista",
              points: 34,
              text: "Normalizo bases en Excel avanzado y GA4 para construir tableros de seguimiento de conversión y disponibilidad, reduciendo errores y tiempos de reporte.",
              feedback: "Excelente: proyectas orden, confiabilidad operativa y orientación directa a resultados.",
            },
            {
              letter: "C",
              level: "escolar",
              points: 5,
              text: "Tengo nivel intermedio de Excel porque lo usamos en casi todas las materias de la licenciatura.",
              feedback: "Muy genérico. Decir 'intermedio' sin explicar qué problemas resuelves no convence en entrevista técnica.",
            },
          ],
        },
        {
          topic: "Marketplaces y operación ERP",
          prompt: "Si un producto estrella se agota en almacén pero sigue activo en Mercado Libre o Amazon, ¿qué impacto ves y cómo actúas?",
          options: [
            {
              letter: "A",
              level: "especialista",
              points: 33,
              text: "Afecta reputación, cancelaciones y SLA; pausaría la publicación de inmediato, conciliaría inventario contra el ERP y establecería una alerta preventiva de stock mínimo.",
              feedback: "Visión integral de Negocios Digitales: proteges la reputación del marketplace y resuelves la causa raíz en back-office.",
            },
            {
              letter: "B",
              level: "escolar",
              points: 5,
              text: "Le avisaría al cliente por mensaje que espere unos días a que llegue el producto.",
              feedback: "En marketplaces eso dispara penalizaciones de cuenta y pérdida de Buy Box.",
            },
            {
              letter: "C",
              level: "intermedio",
              points: 20,
              text: "Pausaría el producto en la plataforma y avisaría al equipo de almacén por correo.",
              feedback: "Resuelves la urgencia, pero falta proponer la conciliación sistémica (ERP) para evitar que vuelva a ocurrir.",
            },
          ],
        },
        {
          topic: "Situacional STAR",
          prompt: "Describe una situación donde ordenaste información desestructurada para facilitar una decisión.",
          options: [
            {
              letter: "A",
              level: "escolar",
              points: 5,
              text: "En varios trabajos en equipo yo era quien juntaba las partes de todos en un solo archivo antes de entregar.",
              feedback: "Hablar de 'juntar partes de tareas' no proyecta rigor profesional ni impacto medible.",
            },
            {
              letter: "B",
              level: "especialista",
              points: 33,
              text: "Ante reportes dispersos en un caso de canal digital (S), limpié las fuentes en Excel y GA4 creando un tablero con 8 KPIs críticos (A), reduciendo 60% el tiempo de reporte semanal (R).",
              feedback: "Respuesta STAR impecable: clara, concisa y con una métrica concreta de eficiencia operativa.",
            },
            {
              letter: "C",
              level: "intermedio",
              points: 20,
              text: "Organicé una base de datos de ventas de un proyecto escolar para que se entendiera mejor en una exposición.",
              feedback: "Buena experiencia, pero necesitas cuantificar el beneficio y nombrar las herramientas usadas.",
            },
          ],
        },
      ],
    },
    "consultoria-admin": {
      recruiter: "Senior Manager de Transformación · Consultoría Admin.",
      questions: [
        {
          topic: "Estructuración de Business Case",
          prompt: "Un cliente tradicional quiere 'digitalizarse', pero su presupuesto es limitado. ¿Cómo arrancas el diagnóstico?",
          options: [
            {
              letter: "A",
              level: "especialista",
              points: 34,
              text: "Mapeo sus procesos críticos para detectar cuellos de botella, cuantifico tiempos y costos en Power BI/Excel y propongo una matriz impacto-esfuerzo con ROI estimado.",
              feedback: "Mentalidad consultora pura: diagnóstico con datos, priorización financiera y hoja de ruta ejecutable.",
            },
            {
              letter: "B",
              level: "intermedio",
              points: 20,
              text: "Entrevisto a los directivos para conocer sus objetivos y les recomiendo implementar un CRM y redes sociales.",
              feedback: "Falta sustento cuantitativo. En consultoría no se recomiendan herramientas sin antes modelar viabilidad y ROI.",
            },
            {
              letter: "C",
              level: "escolar",
              points: 5,
              text: "Haría un análisis FODA y una presentación explicando la importancia de la transformación digital.",
              feedback: "Demasiado teórico. Los clientes de consultoría pagan por decisiones accionables y retorno, no por teoría general.",
            },
          ],
        },
        {
          topic: "Gestión de proyectos y stakeholders",
          prompt: "¿Qué haces si un área del cliente se resiste a adoptar la nueva herramienta digital que propusiste?",
          options: [
            {
              letter: "A",
              level: "escolar",
              points: 5,
              text: "Le digo a su jefe directo para que los obligue a usar el sistema nuevo.",
              feedback: "Escalar sin gestión del cambio suele fracasar y rompe la relación con el cliente.",
            },
            {
              letter: "B",
              level: "intermedio",
              points: 20,
              text: "Les daría una capacitación extra con un manual en PDF para que vean cómo funciona.",
              feedback: "Ayuda, pero la resistencia suele venir de fricción operativa o miedo al cambio, no solo falta de manual.",
            },
            {
              letter: "C",
              level: "especialista",
              points: 33,
              text: "Aplico gestión del cambio: identifico sus dolores diarios, muestro una victoria rápida que les ahorre trabajo y defino hitos de adopción medibles con acompañamiento.",
              feedback: "Sobresaliente: combinas empatía organizacional, comunicación ejecutiva y control de adopción.",
            },
          ],
        },
        {
          topic: "IA y Ciencia de Datos en consultoría",
          prompt: "IA y Datos es el clúster #1 en nuestras vacantes. ¿Cómo sustentarías un caso de uso de IA ante dirección?",
          options: [
            {
              letter: "A",
              level: "intermedio",
              points: 20,
              text: "Explicaría las últimas tendencias de IA en el mercado y qué herramientas están usando sus competidores.",
              feedback: "Buen contexto, pero a dirección le importa el retorno interno concreto en costos, tiempo o ingresos.",
            },
            {
              letter: "B",
              level: "especialista",
              points: 33,
              text: "Elegiría un proceso repetitivo de alto costo, plantearía un piloto de 60 días con métricas claras (horas ahorradas y tasa de error) y un análisis costo-beneficio.",
              feedback: "Respuesta de nivel consultor: bajas el hype de la IA a un piloto controlado y financieramente defendible.",
            },
            {
              letter: "C",
              level: "escolar",
              points: 5,
              text: "Mencionaría que la IA es el futuro y que las empresas que no la usen van a desaparecer.",
              feedback: "Cliché genérico. Nunca sustituye un argumento financiero ni una propuesta concreta.",
            },
          ],
        },
      ],
    },
    "comercio-cosmeticos": {
      recruiter: "BI & Retail Media Lead · Cosméticos y Belleza",
      questions: [
        {
          topic: "Inteligencia de Negocios (Sell-in / Sell-out)",
          prompt: "En consumo y belleza necesitamos leer rápido qué productos se mueven. ¿Cómo estructurarías un tablero comercial?",
          options: [
            {
              letter: "A",
              level: "escolar",
              points: 5,
              text: "Pondría gráficas de barras y pastel con las ventas totales de cada mes para que se vea presentable.",
              feedback: "Un tablero ejecutivo no es solo estético; debe separar desempeño por categoría, margen y rotación.",
            },
            {
              letter: "B",
              level: "especialista",
              points: 34,
              text: "Modelaría en SQL y Power BI el sell-in vs. sell-out, margen por SKU, estacionalidad y tasa de recompra para detectar quiebres y oportunidades promocionales.",
              feedback: "Nivel especialista: dominas vocabulario clave de consumo masivo y herramientas técnicas (SQL + BI).",
            },
            {
              letter: "C",
              level: "intermedio",
              points: 20,
              text: "Usaría Power BI para mostrar las ventas por producto y los meses donde se vende más.",
              feedback: "Correcto como punto de partida, pero agregar sell-out, margen y recompra marca la diferencia en BI.",
            },
          ],
        },
        {
          topic: "Fidelización CRM y LTV",
          prompt: "Las promociones atraen muchos compradores nuevos, pero pocos regresan al segundo mes. ¿Qué estrategia propondrías?",
          options: [
            {
              letter: "A",
              level: "intermedio",
              points: 20,
              text: "Mandaría correos semanales con cupones de descuento a toda la base de clientes.",
              feedback: "Enviar cupones masivos sin segmentación entrena al cliente a solo comprar con descuento y baja el margen.",
            },
            {
              letter: "B",
              level: "escolar",
              points: 5,
              text: "Hacer sorteos en redes sociales para que la gente recuerde la marca.",
              feedback: "Los sorteos atraen cazadores de premios, no recompra rentable ni valor de vida (LTV).",
            },
            {
              letter: "C",
              level: "especialista",
              points: 33,
              text: "Segmentaría por ciclo de reposición del producto en CRM para disparar flujos personalizados (cross-sell y recordatorio) midiendo retención y LTV.",
              feedback: "Brillante: en cosméticos el ciclo de reposición es el disparador más rentable de recompra.",
            },
          ],
        },
        {
          topic: "Retail Media y conversión",
          prompt: "¿Cómo mejorarías las ventas de una línea de perfumería dentro de marketplaces competidos?",
          options: [
            {
              letter: "A",
              level: "especialista",
              points: 33,
              text: "Optimizaría fichas A+, reseñas y disponibilidad de Buy Box, combinándolo con pujas de Retail Media monitoreando GMV y tasa de conversión (CVR).",
              feedback: "Excelente dominio del ecosistema Retail Media actual en México.",
            },
            {
              letter: "B",
              level: "escolar",
              points: 5,
              text: "Subiría buenas fotos y pondría un precio más barato que la competencia.",
              feedback: "Competir solo por precio destruye posicionamiento de marca y rentabilidad.",
            },
            {
              letter: "C",
              level: "intermedio",
              points: 20,
              text: "Mejoraría las descripciones de los productos y pagaría anuncios dentro de Amazon y Mercado Libre.",
              feedback: "Buena dirección; súmale el control de Buy Box, GMV y CVR para hablar como especialista.",
            },
          ],
        },
      ],
    },
  };

  const simSectorBadge = document.getElementById("sim-sector-badge");
  const simRecruiterRole = document.getElementById("sim-recruiter-role");
  const simStepLabel = document.getElementById("sim-step-label");
  const simProgressDots = document.getElementById("sim-progress-dots");
  const simTranscript = document.getElementById("sim-transcript");
  const simChoices = document.getElementById("sim-choices");
  const simScoreNum = document.getElementById("sim-score-num");
  const simScoreTag = document.getElementById("sim-score-tag");
  const simSummaryText = document.getElementById("sim-summary-text");
  const simResetBtn = document.getElementById("sim-reset-btn");

  let simState = {
    step: 0,
    score: 0,
    history: [],
    finished: false,
  };

  function renderInterviewSimulator() {
    if (!simTranscript || !simChoices) return;
    const sector = KIT_SECTORS[activeSectorId];
    const scenario = INTERVIEW_SCENARIOS[activeSectorId];
    if (!sector || !scenario) return;

    const totalQ = scenario.questions.length;

    if (simSectorBadge) simSectorBadge.textContent = `Sector: ${sector.shortName}`;
    if (simRecruiterRole) simRecruiterRole.textContent = scenario.recruiter;
    if (simStepLabel) {
      simStepLabel.textContent = simState.finished
        ? `Entrevista completada · ${totalQ} de ${totalQ} preguntas`
        : `Pregunta ${simState.step + 1} de ${totalQ} · ${scenario.questions[simState.step].topic}`;
    }

    if (simProgressDots) {
      simProgressDots.innerHTML = scenario.questions
        .map((_, idx) => {
          const cls =
            idx < simState.step || simState.finished
              ? "done"
              : idx === simState.step
                ? "current"
                : "";
          return `<span class="sim-dot ${cls}"></span>`;
        })
        .join("");
    }

    if (simScoreNum) simScoreNum.textContent = `${simState.score} / 100`;
    if (simScoreTag) {
      if (!simState.finished && simState.step === 0) {
        simScoreTag.className = "sim-level-tag";
        simScoreTag.textContent = "En curso";
      } else if (simState.score >= 80) {
        simScoreTag.className = "sim-level-tag level-expert";
        simScoreTag.textContent = "Modo Especialista";
      } else if (simState.score >= 50) {
        simScoreTag.className = "sim-level-tag level-mid";
        simScoreTag.textContent = "Nivel Intermedio";
      } else {
        simScoreTag.className = "sim-level-tag level-student";
        simScoreTag.textContent = "Modo Estudiante";
      }
    }

    // Construir transcripción de la entrevista
    const itemsHtml = simState.history
      .map((entry) => {
        if (entry.type === "question") {
          return `<div class="sim-msg sim-msg-recruiter"><small>${entry.topic}</small><p>${entry.text}</p></div>`;
        }
        if (entry.type === "answer") {
          return `<div class="sim-msg sim-msg-user"><p>${entry.text}</p></div>`;
        }
        return `<div class="sim-msg sim-msg-feedback fb-${entry.level}"><strong>${entry.label} (+${entry.points} pts):</strong> ${entry.text}</div>`;
      })
      .join("");

    simTranscript.innerHTML = itemsHtml;
    simTranscript.scrollTop = simTranscript.scrollHeight;

    if (simState.finished) {
      const verdict =
        simState.score >= 80
          ? `¡Excelente desempeño para ${sector.shortName}! Tu discurso proyecta lenguaje de negocio, métricas y herramientas alineadas a 2026.`
          : simState.score >= 50
            ? `Buen avance en ${sector.shortName}, pero aún puedes elevar tu impacto. Refuerza el Módulo 1 (Traductor) y el Módulo 3 (Método STAR).`
            : `Tus respuestas aún suenan en formato escolar frente a lo que espera ${sector.shortName}. Practica primero en el Módulo 1 (Traductor) y vuelve a intentarlo.`;

      if (simSummaryText) simSummaryText.textContent = verdict;
      simChoices.innerHTML = `
        <div class="sim-finish-bar">
          <p><strong>Resultado final: ${simState.score}/100</strong> — ${verdict}</p>
          <button type="button" class="button button-primary" id="sim-replay-btn">Practicar de nuevo</button>
        </div>
      `;
      document.getElementById("sim-replay-btn")?.addEventListener("click", resetInterviewSimulator);
      return;
    }

    if (simSummaryText && simState.step === 0) {
      simSummaryText.innerHTML =
        'Elige la respuesta que darías en una entrevista real. Cada turno evaluará si hablas en <strong>Modo Estudiante</strong> o en <strong>Modo Especialista</strong>.';
    }

    const currentQ = scenario.questions[simState.step];
    simChoices.innerHTML = currentQ.options
      .map(
        (opt, idx) => `
        <button type="button" class="sim-choice-btn" data-sim-opt="${idx}">
          <span class="sim-choice-letter">${opt.letter}</span>
          <span>${opt.text}</span>
        </button>
      `
      )
      .join("");
  }

  function resetInterviewSimulator() {
    const scenario = INTERVIEW_SCENARIOS[activeSectorId];
    if (!scenario) return;
    const firstQ = scenario.questions[0];
    simState = {
      step: 0,
      score: 0,
      finished: false,
      history: [{ type: "question", topic: firstQ.topic, text: firstQ.prompt }],
    };
    renderInterviewSimulator();
  }

  simChoices?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-sim-opt]");
    if (!btn || simState.finished) return;

    const scenario = INTERVIEW_SCENARIOS[activeSectorId];
    const currentQ = scenario?.questions[simState.step];
    const chosen = currentQ?.options[Number(btn.getAttribute("data-sim-opt"))];
    if (!chosen) return;

    const labelMap = {
      especialista: "Feedback Especialista · Alto impacto",
      intermedio: "Feedback Especialista · Mejorable",
      escolar: "Feedback Especialista · Brecha Fase 3",
    };

    simState.score = Math.min(100, simState.score + chosen.points);
    simState.history.push({ type: "answer", text: chosen.text });
    simState.history.push({
      type: "feedback",
      level: chosen.level,
      label: labelMap[chosen.level],
      points: chosen.points,
      text: chosen.feedback,
    });

    if (simState.step + 1 < scenario.questions.length) {
      simState.step += 1;
      const nextQ = scenario.questions[simState.step];
      simState.history.push({ type: "question", topic: nextQ.topic, text: nextQ.prompt });
    } else {
      simState.finished = true;
    }

    renderInterviewSimulator();
  });

  simResetBtn?.addEventListener("click", () => {
    resetInterviewSimulator();
    showToast("Simulador de entrevista reiniciado.");
  });

  // Render inicial
  renderAll();
})();
