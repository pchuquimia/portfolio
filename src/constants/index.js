export const servicesData = [
  {
    title: "Frontend Development (React, Tailwind CSS, GSAP, Vite)",
    description:
      "Diseño y desarrollo interfaces modernas, rápidas y responsivas. Cada proyecto combina estética, rendimiento y una experiencia de usuario fluida.",
    items: [
      {
        title: "UI Development (React, Tailwind CSS)",
        description:
          "Construcción de interfaces modulares, responsivas y accesibles con diseño limpio y mantenible.",
      },
      {
        title: "Animations & Interactions (GSAP, Framer Motion)",
        description:
          "Experiencias visuales atractivas mediante animaciones fluidas y microinteracciones controladas.",
      },
      {
        title: "Performance & SEO (Vite, Lighthouse, SSR)",
        description:
          "Carga optimizada, renderizado rápido y métricas de rendimiento superiores.",
      },
    ],
  },
  {
    title: "Backend & Tools (Node.js, Express, MongoDB, Firebase)",
    description:
      "Construyo APIs seguras y escalables con Node.js y Express, integradas con bases de datos y servicios en la nube. Priorizo estabilidad, seguridad y arquitectura limpia.",
    items: [
      {
        title: "API Development (Node.js, Express)",
        description:
          "Diseño de endpoints REST seguros, estructurados y fáciles de mantener.",
      },
      {
        title: "Database Management (MongoDB, Firebase)",
        description:
          "Modelado y optimización de datos para aplicaciones en tiempo real y offline-first.",
      },
      {
        title: "Auth & Security (JWT, Middleware, HTTPS)",
        description:
          "Implementación de autenticación robusta, control de acceso y validación de datos.",
      },
    ],
  },
  {
    title: "DevOps & Automation (Docker, Jenkins, GitHub Actions)",
    description:
      "Automatizo procesos de desarrollo y despliegue continuo para mantener entornos estables, reproducibles y eficientes.",
    items: [
      {
        title: "CI/CD Pipelines (GitHub Actions, Jenkins)",
        description:
          "Integración y entrega continua con pruebas automáticas y despliegues confiables.",
      },
      {
        title: "Containerization (Docker)",
        description:
          "Entornos aislados, consistentes y listos para producción mediante contenedores ligeros.",
      },
      {
        title: "Version Control (Git, GitHub)",
        description:
          "Gestión ordenada del código, ramas limpias y commits documentados.",
      },
    ],
  },
  {
    title: "Mobile Development (Flutter, Dart, Riverpod, Hive, Firebase)",
    description:
      "Desarrollo aplicaciones móviles multiplataforma con Flutter, priorizando el rendimiento, la fluidez y la sincronización en tiempo real. Me enfoco en crear experiencias estables y coherentes para Android e iOS.",
    items: [
      {
        title: "Cross-Platform Apps (Flutter, Firebase)",
        description:
          "Aplicaciones nativas para Android e iOS con sincronización en tiempo real y almacenamiento local.",
      },
      {
        title: "State Management (Riverpod, Hive)",
        description:
          "Gestión eficiente del estado y persistencia de datos con arquitecturas limpias y escalables.",
      },
      {
        title: "Testing & Deployment (Firebase App Distribution)",
        description:
          "Validación en dispositivos reales, versiones dev/prod y despliegues controlados.",
      },
    ],
  },
  {
    title: "Soft Skills & Languages (Comunicación, Creatividad, Inglés B2)",
    description:
      "Además del código, valoro el trabajo en equipo, la comunicación efectiva y la mejora continua. Busco aportar valor tanto técnico como humano en cada proyecto.",
    items: [
      {
        title: "Team Collaboration",
        description:
          "Empatía, cooperación y responsabilidad en entornos ágiles y multidisciplinarios.",
      },
      {
        title: "Problem Solving & Creativity",
        description:
          "Pensamiento crítico, visión técnica y enfoque artístico para soluciones innovadoras.",
      },
      {
        title: "Languages (Español / Inglés)",
        description:
          "Español nativo e inglés técnico-intermedio avanzado (B2) con comunicación fluida.",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Sistema de Gestión para Restaurante",
    description:
      "Aplicación web completa para administrar pedidos, ventas e inventario en tiempo real. Diseñada con arquitectura limpia, panel administrativo y sincronización con Firebase.",
    href: "https://pos-frontend-bajm.onrender.com/",
    image: "",
    bgImage: "/assets/backgrounds/blanket.jpg",
    images: [
      "/assets/projects/pos-1.jpeg",
      "/assets/projects/pos-2.jpeg",
      "/assets/projects/pos-3.jpeg",
      "/assets/projects/pos-4.jpeg",
      "/assets/projects/pos-5.jpeg",
      "/assets/projects/pos-6.jpeg",
      "/assets/projects/pos-7.jpeg",
      "/assets/projects/pos-8.jpeg",
      "/assets/projects/pos-9.jpeg",
    ],
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Firebase" },
      { id: 6, name: "Figma" },
    ],
  },
  {
    id: 2,
    name: "Tetris en JavaScript",
    description:
      "Juego clásico de Tetris implementado en JavaScript con enfoque funcional, renderizado en canvas y control de piezas, rotación y colisiones personalizadas.",
    href: "https://pchuquimia.github.io/TetrisGame/",
    image: "/assets/projects/tetris-1.jpg",
    bgImage: "",
    images: [
      "/assets/projects/tetris-1.jpeg",
      "/assets/projects/tetris-2.jpeg",
    ],
    frameworks: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "HTML5 Canvas" },
      { id: 3, name: "CSS3" },
    ],
  },
  {
    id: 3,
    name: "Sistema de Gestión y Seguimiento de Entrenamientos",
    description:
      "Aplicación web para el registro, análisis y seguimiento de entrenamientos de gimnasio. Incluye dashboard analítico, biblioteca de ejercicios, control de volumen, progreso por sesión y objetivos personalizados.",
    href: "https://gym-frontend-t65c.onrender.com/",
    image: "/assets/projects/gymDashboard.jpeg",
    bgImage: "/assets/projects/gymDashboard.jpeg",
    images: [
      "/assets/projects/gymDashboard.jpeg",
      "/assets/projects/gymDashboard-2.jpeg",
      "/assets/projects/gymDashboard-3.jpeg",
      "/assets/projects/gymDashboard-4.jpeg",
      "/assets/projects/gymDashboard-5.jpeg",
      "/assets/projects/gymDashboard-6.jpeg",
      "/assets/projects/gymDashboard-7.jpeg",
    ],
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "Figma" },
    ],
  },
];
export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/pchuquimia/" },
  { name: "GitHub", href: "https://github.com/pchuquimia" },
];
