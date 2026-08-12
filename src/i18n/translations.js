const shared = {
  name: "Pablo Iván Chuquimia Huanca",
  role: "Frontend Developer",
};

export const translations = {
  es: {
    meta: {
      title: "Pablo Iván Chuquimia | Frontend Developer",
      description:
        "Portafolio de Pablo Iván Chuquimia, Frontend Developer especializado en React, JavaScript y OpenAI API.",
    },
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      mainLabel: "Navegación principal",
      mobileLabel: "Navegación móvil",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      language: "Idioma",
      spanish: "Ver portafolio en español",
      english: "Ver portafolio en inglés",
    },
    hero: {
      ...shared,
      eyebrow: "Perfil profesional",
      meta: "Frontend Developer · La Paz, Bolivia",
      focus: "React, JavaScript y creación de interfaces web",
      value:
        "Construyo experiencias web claras, rápidas y mantenibles, conectando diseño de producto, APIs y pruebas para convertir requisitos complejos en interfaces útiles.",
      availability: "Disponible para oportunidades remotas y locales",
      viewProjects: "Ver proyectos",
      downloadCV: "Descargar CV",
      cvPath: "/cv/Pablo_Chuquimia_CV_Frontend_ES.pdf",
      contactMe: "Contactarme",
      portraitAlt: "Retrato profesional de Pablo Iván Chuquimia",
      primary: "Especialización principal",
      appliedIntegration: "Integración aplicada",
      bilingualProduct: "Producto bilingüe",
    },
    projects: {
      subtitle: "Trabajo seleccionado y verificable",
      title: "Proyectos",
      intro: `Interfaces construidas para resolver problemas reales,
con integración, pruebas y atención al detalle,
desde el concepto hasta una demo funcional.`,
      featured: "Proyecto principal",
      live: "Demo pública disponible",
      details: "Ver detalles",
      demo: "Abrir demo",
      technologies: "Tecnologías de",
      additionalTechnologies: "tecnologías adicionales",
      carousel: {
        screenshot: "Captura",
        of: "de",
        screenshots: "Capturas de",
        show: "Mostrar captura",
        previous: "Ver captura anterior de",
        next: "Ver captura siguiente de",
        pause: "Pausar carrusel de",
        resume: "Reanudar carrusel de",
      },
      modal: {
        close: "Cerrar detalles del proyecto",
        website: "sitio web",
        outside: "Haz clic fuera para cerrar",
        view: "Abrir proyecto",
      },
      items: {
        3: {
          name: "Apex Performance | Gym Training Platform",
          description:
            "Plataforma web diseñada, desarrollada y desplegada de forma independiente para planificar, registrar y analizar entrenamientos. Incluye 18 pantallas, 56 componentes reutilizables, 87 rutas API, 12 modelos MongoDB, roles de Cliente, Entrenador y Administrador y un catálogo bilingüe de aproximadamente 1.300 ejercicios. Integra OpenAI Images API, Cloudinary y TanStack React Query. Cuenta con 16 pruebas automatizadas aprobadas, casos E2E de autenticación, una colección Postman/Newman para 6 endpoints y validación en escritorio y móvil con más de 10 beta testers. Código fuente disponible durante procesos de selección.",
        },
        1: {
          name: "Sistema de Gestión para Restaurante",
          description:
            "Aplicación web para centralizar pedidos, ventas e inventario y reducir la fragmentación de la operación diaria. Implementé la aplicación, sus flujos principales y el panel administrativo. Demo pública disponible.",
        },
        2: {
          name: "Tetris en JavaScript",
          description:
            "Recreación de la lógica del juego clásico con renderizado en Canvas, control preciso de piezas, rotaciones, colisiones y puntuación. Desarrollé la lógica y los controles con JavaScript sin frameworks. Demo pública disponible.",
        },
      },
    },
    skills: {
      subtitle: "Capacidades aplicadas, no solo herramientas",
      title: "Habilidades técnicas",
      intro: `Construyo frontend mantenible con React y JavaScript,
integro APIs y datos,
y valido la calidad con pruebas automatizadas.`,
      technologies: "Tecnologías de",
      groups: [
        {
          label: "Especialización principal",
          title: "Desarrollo Frontend",
          technologies: ["React", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
          description:
            "Desarrollo interfaces web semánticas, responsivas y mantenibles, priorizando claridad, accesibilidad y una experiencia de usuario consistente.",
          items: [
            {
              title: "Interfaces (React, HTML5, CSS3, Tailwind CSS)",
              description: "Construcción de componentes reutilizables e interfaces adaptables a escritorio y móvil.",
            },
            {
              title: "Navegación y estado (React Router, Redux Toolkit, Context)",
              description: "Organización de navegación y estado de interfaz con herramientas del ecosistema React.",
            },
            {
              title: "Diseño responsive y accesibilidad (HTML semántico, ARIA)",
              description: "Experiencias utilizables mediante estructura semántica, diseño responsive y atributos ARIA.",
            },
          ],
        },
        {
          label: "Integración y estado",
          title: "Integración de APIs y estado",
          technologies: ["TanStack React Query", "Axios", "APIs REST", "JWT", "OpenAI Images API", "Cloudinary"],
          description: "Integro servicios y datos remotos en interfaces React, gestionando estados de carga, errores, caché y autenticación.",
          items: [
            {
              title: "Estado del servidor (TanStack React Query)",
              description: "Consulta, sincronización y caché de datos procedentes del backend.",
            },
            {
              title: "APIs REST y autenticación (Axios, JWT)",
              description: "Consumo de APIs REST y manejo de sesiones autenticadas desde el frontend.",
            },
            {
              title: "OpenAI Images API y Cloudinary",
              description: "Integraciones aplicadas en Apex Performance para generación y gestión de imágenes.",
            },
          ],
        },
        {
          label: "Calidad de software",
          title: "Testing y calidad",
          technologies: ["Vitest", "React Testing Library", "Jest", "Supertest", "Playwright", "Cypress"],
          description: "Valido componentes, integraciones, APIs y flujos críticos mediante pruebas automatizadas y comprobaciones en escritorio y móvil.",
          items: [
            {
              title: "Pruebas frontend (Vitest, React Testing Library)",
              description: "Pruebas unitarias y de integración enfocadas en el comportamiento de la interfaz.",
            },
            {
              title: "Pruebas API (Jest, Supertest, Postman, Newman)",
              description: "Validación automatizada de rutas y endpoints del backend.",
            },
            {
              title: "E2E y validación (Playwright, Cypress)",
              description: "Casos E2E de autenticación y validación en dispositivos de escritorio y móviles.",
            },
          ],
        },
        {
          label: "Capacidad complementaria",
          title: "Backend complementario",
          technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "MySQL"],
          description: "Cuento con conocimientos complementarios para comprender e implementar el flujo completo que consume el frontend, sin presentarlo como mi especialización principal.",
          items: [
            {
              title: "APIs (Node.js, Express)",
              description: "Desarrollo de rutas REST y lógica de servidor para proyectos propios.",
            },
            {
              title: "Datos (MongoDB, Mongoose, MySQL)",
              description: "Modelado y persistencia de datos como capacidad complementaria al desarrollo frontend.",
            },
            {
              title: "Seguridad y observabilidad",
              description: "Experiencia transferible en monitoreo, análisis de fallos, seguridad y documentación técnica.",
            },
          ],
        },
        {
          label: "Herramientas y formación",
          title: "Flujo de trabajo, nube e idiomas",
          technologies: ["Git", "GitHub", "Docker", "GitHub Actions", "Jenkins", "Inglés B2"],
          description: "Trabajo con Git y GitHub. Mi contacto con contenedores, automatización y nube corresponde a proyectos y formación, sin sugerir experiencia profesional avanzada.",
          items: [
            {
              title: "Control de versiones (Git, GitHub)",
              description: "Control de versiones, ramas y documentación del trabajo técnico.",
            },
            {
              title: "Exposición (Docker, Compose, Jenkins, GitHub Actions)",
              description: "Conocimientos obtenidos mediante formación y proyectos propios.",
            },
            {
              title: "Idiomas (Español nativo / Inglés B2)",
              description: "Español nativo, inglés B2 actual y certificación TOEIC B1 obtenida en octubre de 2025.",
            },
          ],
        },
      ],
    },
    contact: {
      subtitle: "Construyamos interfaces con propósito",
      title: "Contacto",
      intro: `Disponible para oportunidades Frontend remotas y locales.
La Paz, Bolivia.`,
      kicker: "Contacto directo",
      headline: "Conversemos sobre tu próxima interfaz web.",
      summary:
        "Si buscas un Frontend Developer con enfoque en React, JavaScript, integración de APIs y calidad de producto, puedes contactarme directamente o revisar mis perfiles y trabajo.",
      locationLabel: "Ubicación",
      availabilityLabel: "Disponibilidad",
      availability: "Oportunidades remotas y locales",
      email: "Correo",
      phone: "Teléfono",
      emailAction: "Enviar correo a Pablo",
      phoneAction: "Llamar a Pablo",
      resourcesEyebrow: "Perfiles y documentos",
      resourcesTitle: "Enlaces profesionales",
      open: "Abrir",
      download: "Descargar",
      backToTop: "Volver al inicio",
      resources: {
        linkedin: {
          name: "LinkedIn",
          description: "Experiencia y trayectoria profesional",
        },
        github: {
          name: "GitHub",
          description: "Perfil general y proyectos públicos",
        },
        apex: {
          name: "Apex Performance",
          description: "Abrir la demostración del proyecto principal",
        },
        cvEs: {
          name: "CV en español",
          description: "Descargar versión PDF",
        },
        cvEn: {
          name: "CV en inglés",
          description: "Descargar versión PDF",
        },
      },
    },
  },
  en: {
    meta: {
      title: "Pablo Iván Chuquimia | Frontend Developer",
      description: "Portfolio of Pablo Iván Chuquimia, a Frontend Developer focused on React, JavaScript, and the OpenAI API.",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      mainLabel: "Main navigation",
      mobileLabel: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      spanish: "View portfolio in Spanish",
      english: "View portfolio in English",
    },
    hero: {
      ...shared,
      eyebrow: "Professional profile",
      meta: "Frontend Developer · La Paz, Bolivia",
      focus: "React, JavaScript, and web interface development",
      value: "I build clear, fast, maintainable web experiences, connecting product design, APIs, and testing to turn complex requirements into useful interfaces.",
      availability: "Open to remote and local opportunities",
      viewProjects: "View projects",
      downloadCV: "Download résumé",
      cvPath: "/cv/Pablo_Chuquimia_CV_Frontend_EN.pdf",
      contactMe: "Contact me",
      portraitAlt: "Professional portrait of Pablo Iván Chuquimia",
      primary: "Primary specialization",
      appliedIntegration: "Applied integration",
      bilingualProduct: "Bilingual product",
    },
    projects: {
      subtitle: "Selected and verifiable work",
      title: "Projects",
      intro: `Interfaces built to solve real problems,
with integration, testing, and attention to detail,
from initial concept to a working demo.`,
      featured: "Featured project",
      live: "Public demo available",
      details: "View details",
      demo: "Open live demo",
      technologies: "Technologies used in",
      additionalTechnologies: "additional technologies",
      carousel: {
        screenshot: "Screenshot",
        of: "of",
        screenshots: "Screenshots of",
        show: "Show screenshot",
        previous: "View previous screenshot of",
        next: "View next screenshot of",
        pause: "Pause slideshow for",
        resume: "Resume slideshow for",
      },
      modal: {
        close: "Close project details",
        website: "website",
        outside: "Click outside to close",
        view: "Open project",
      },
      items: {
        3: {
          name: "Apex Performance | Gym Training Platform",
          description: "A web platform I independently designed, developed, and deployed to plan, log, and analyze training. It includes 18 screens, 56 reusable components, 87 API routes, 12 MongoDB models, Client, Coach, and Administrator roles, and a bilingual catalog of approximately 1,300 exercises. It integrates the OpenAI Images API, Cloudinary, and TanStack React Query. Validation includes 16 passing automated tests, authentication E2E cases, a Postman/Newman collection covering 6 endpoints, and desktop and mobile testing with more than 10 beta testers. Source code available upon request during hiring processes.",
        },
        1: {
          name: "Restaurant Management System",
          description: "A web application that centralizes orders, sales, and inventory to reduce fragmentation in daily operations. I implemented the application, its main workflows, and the administration dashboard. A public demo is available.",
        },
        2: {
          name: "Tetris in JavaScript",
          description: "A recreation of the classic game using Canvas rendering, precise piece controls, rotations, collision detection, and scoring. I developed the game logic and controls in JavaScript without frameworks. A public demo is available.",
        },
      },
    },
    skills: {
      subtitle: "Applied capabilities, not just tools",
      title: "Technical Skills",
      intro: `I build maintainable frontends with React and JavaScript,
integrate APIs and data,
and validate quality through automated testing.`,
      technologies: "Technologies used in",
      groups: [
        {
          label: "Primary specialization",
          title: "Frontend Development",
          technologies: ["React", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
          description: "I develop semantic, responsive, and maintainable web interfaces, prioritizing clarity, accessibility, and a consistent user experience.",
          items: [
            { title: "Interfaces (React, HTML5, CSS3, Tailwind CSS)", description: "Reusable components and interfaces adapted for desktop and mobile devices." },
            { title: "Routing & State (React Router, Redux Toolkit, Context)", description: "Navigation and interface-state organization with tools from the React ecosystem." },
            { title: "Responsive Design & Accessibility (Semantic HTML, ARIA)", description: "Usable experiences built with semantic structure, responsive design, and ARIA attributes." },
          ],
        },
        {
          label: "Integration and state",
          title: "API Integration & State",
          technologies: ["TanStack React Query", "Axios", "REST APIs", "JWT", "OpenAI Images API", "Cloudinary"],
          description: "I integrate remote services and data into React interfaces while handling loading states, errors, caching, and authentication.",
          items: [
            { title: "Server State (TanStack React Query)", description: "Querying, synchronizing, and caching data received from the backend." },
            { title: "REST APIs & Authentication (Axios, JWT)", description: "REST API consumption and authenticated session management from the frontend." },
            { title: "OpenAI Images API & Cloudinary", description: "Integrations implemented in Apex Performance for image generation and management." },
          ],
        },
        {
          label: "Software quality",
          title: "Testing & Quality",
          technologies: ["Vitest", "React Testing Library", "Jest", "Supertest", "Playwright", "Cypress"],
          description: "I validate components, integrations, APIs, and critical workflows through automated testing and desktop and mobile checks.",
          items: [
            { title: "Frontend Tests (Vitest, React Testing Library)", description: "Unit and integration tests focused on interface behavior." },
            { title: "API Tests (Jest, Supertest, Postman, Newman)", description: "Automated validation of backend routes and endpoints." },
            { title: "E2E & Validation (Playwright, Cypress)", description: "Authentication E2E cases and validation across desktop and mobile devices." },
          ],
        },
        {
          label: "Complementary capability",
          title: "Complementary Backend",
          technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "MySQL"],
          description: "I have complementary knowledge to understand and implement the complete flow consumed by the frontend, without presenting backend development as my main specialization.",
          items: [
            { title: "APIs (Node.js, Express)", description: "REST routes and server-side logic developed for personal projects." },
            { title: "Data (MongoDB, Mongoose, MySQL)", description: "Data modeling and persistence as a complementary frontend capability." },
            { title: "Security & Observability", description: "Transferable experience in monitoring, failure analysis, security, and technical documentation." },
          ],
        },
        {
          label: "Tools and education",
          title: "Workflow, Cloud Exposure & Languages",
          technologies: ["Git", "GitHub", "Docker", "GitHub Actions", "Jenkins", "English B2"],
          description: "I work with Git and GitHub. My exposure to containers, automation, and cloud platforms comes from projects and education and does not imply advanced professional experience.",
          items: [
            { title: "Version Control (Git, GitHub)", description: "Version control, branches, and technical work documentation." },
            { title: "Exposure (Docker, Compose, Jenkins, GitHub Actions)", description: "Knowledge acquired through education and personal projects." },
            { title: "Languages (Native Spanish / English B2)", description: "Native Spanish, current English level B2, and a TOEIC B1 certification earned in October 2025." },
          ],
        },
      ],
    },
    contact: {
      subtitle: "Let's build purposeful interfaces",
      title: "Contact",
      intro: `Available for remote and local Frontend opportunities.
La Paz, Bolivia.`,
      kicker: "Direct contact",
      headline: "Let's discuss your next web interface.",
      summary:
        "If you are looking for a Frontend Developer focused on React, JavaScript, API integration, and product quality, contact me directly or review my profiles and work.",
      locationLabel: "Location",
      availabilityLabel: "Availability",
      availability: "Remote and local opportunities",
      email: "Email",
      phone: "Phone",
      emailAction: "Email Pablo",
      phoneAction: "Call Pablo",
      resourcesEyebrow: "Profiles and documents",
      resourcesTitle: "Professional links",
      open: "Open",
      download: "Download",
      backToTop: "Back to top",
      resources: {
        linkedin: {
          name: "LinkedIn",
          description: "Professional background and experience",
        },
        github: {
          name: "GitHub",
          description: "General profile and public projects",
        },
        apex: {
          name: "Apex Performance",
          description: "Open the featured project's live demo",
        },
        cvEs: {
          name: "Spanish résumé",
          description: "Download the PDF version",
        },
        cvEn: {
          name: "English résumé",
          description: "Download the PDF version",
        },
      },
    },
  },
};
