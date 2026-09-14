const translations = {
  es: {
    "nav.inicio": "Inicio",
    "nav.sobre": "Sobre mí",
    "nav.proyectos": "Proyectos",
    "nav.experiencia": "Experiencia",
    "nav.formacion": "Formación",
    "nav.contacto": "Contacto",
    "nav.toggle": "Abrir menú",

    "hero.eyebrow": "Software Engineer · Junior",
    "hero.lead": "Desarrollador full-stack recién graduado, con experiencia construyendo aplicaciones web y móvil en proyectos académicos y en una empresa real. Me interesa especialmente el desarrollo full-stack y aplicar la tecnología a problemas concretos.",
    "hero.cta.primary": "Ver proyectos",
    "hero.cta.outline": "Contactar",
    "hero.photo.alt": "Foto de Miguel Penalva Caro",

    "about.title": "Sobre mí",
    "about.p1": "Graduado en BSc (Hons) Software Engineering por la York St John University (Reino Unido), con una base técnica previa consolidada a través del Grado Superior en Desarrollo de Aplicaciones Multiplataforma (EUSA — Cámara de Comercio de Sevilla). He construido aplicaciones full-stack tanto en proyectos académicos como durante unas prácticas en empresa, siempre dentro de equipos de desarrollo.",
    "about.p2": "Me adapto con facilidad a tecnologías y entornos nuevos, y disfruto especialmente descomponer un problema técnico hasta encontrar una solución que funcione de verdad. Fuera del código, la pesca, la navegación y el gimnasio ocupan buena parte de mi tiempo — la disciplina que exige el deporte es algo que también aplico al trabajo.",
    "about.stack.title": "Stack técnico",

    "projects.title": "Proyectos",
    "project1.tag": "2026 · Proyecto Final de Grado",
    "project1.title": "Sistema de Reservas de Instalaciones Deportivas",
    "project1.desc1": "Sistema full-stack de reservas de instalaciones deportivas, con validación en el backend para evitar reservas duplicadas. Incluye un mecanismo en Python que analiza datos meteorológicos en tiempo real (API de OpenWeatherMap) para recomendar automáticamente la pista disponible más adecuada según las condiciones previstas.",
    "project1.desc2": "Evaluado con la metodología Design Science Research, con un 100% de éxito en la detección de conflictos de reserva.",

    "project2.desc1": "Aplicación Android para registrar visitas a restaurantes y valorar comidas. Autenticación segura mediante hash de contraseñas SHA-256 y login biométrico por huella dactilar, con base de datos local aislada por usuario.",
    "project2.desc2": "Suite de tests automatizados completa (unitarios, integración y end-to-end) y accesibilidad implementada con Flutter Semantics. Calificación obtenida: 98/100.",

    "project3.tag": "Advanced Web Development · York St John University",
    "project3.desc1": "API REST para la gestión de reservas de un restaurante, con backend en Node.js, Express y MySQL. Asigna automáticamente la mesa más pequeña disponible que se ajuste al número de comensales y que esté libre en la fecha y hora solicitadas.",
    "project3.desc2": "Endpoints completos para crear, editar, listar y eliminar reservas y mesas, con frontend en JavaScript.",
    "project3.link.demo": "Ver demo en vivo →",
    "project3.link.code": "Código en GitHub →",

    "project4.tag": "Mar – Jun 2025 · Prácticas en empresa",
    "project4.title": "Desarrollo Full-Stack — Indexa Geodata",
    "project4.desc1": "Prácticas como desarrollador full-stack en Indexa Geodata. Trabajé como parte del equipo de desarrollo en una aplicación web y móvil construida con Flutter, desplegada con Docker y actualmente en producción.",
    "project4.desc2": "Colaboré activamente en la implementación técnica del producto dentro de un equipo de desarrollo real.",

    "projects.cta": "Ver más en GitHub →",

    "experience.title": "Experiencia",
    "exp1.title": "Desarrollador Full-Stack (Prácticas) — Indexa Geodata",
    "exp1.desc": "Desarrollo de una aplicación web y móvil en Flutter, desplegada con Docker y actualmente en producción. Trabajé como parte del equipo de desarrollo, colaborando activamente en la implementación técnica del producto.",
    "exp2.desc": "Participante en un campus intensivo de programación organizado por Telefónica (Málaga), centrado en resolución de problemas y trabajo en equipo bajo presión.",

    "education.title": "Formación",
    "edu1.sub": "York St John University — Reino Unido",
    "edu2.title": "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    "edu2.sub": "EUSA — Cámara de Comercio de Sevilla",
    "edu3.title": "Educación británica previa",
    "edu3.sub": "British School de Córdoba y British School de Sevilla",

    "contact.title": "Contacto",
    "contact.lead": "¿Quieres hablar de una oportunidad o de alguno de estos proyectos? Escríbeme.",
    "contact.location": "Sevilla, España",

    "meta.title": "Miguel Penalva Caro · Software Engineer",
    "meta.description": "Portfolio de Miguel Penalva Caro, desarrollador junior full-stack. BSc (Hons) Software Engineering, York St John University."
  },
  en: {
    "nav.inicio": "Home",
    "nav.sobre": "About",
    "nav.proyectos": "Projects",
    "nav.experiencia": "Experience",
    "nav.formacion": "Education",
    "nav.contacto": "Contact",
    "nav.toggle": "Open menu",

    "hero.eyebrow": "Software Engineer · Junior",
    "hero.lead": "Recently graduated full-stack developer, with experience building web and mobile applications across academic projects and a real company internship. I'm particularly interested in full-stack development and applying technology to real, concrete problems.",
    "hero.cta.primary": "View projects",
    "hero.cta.outline": "Get in touch",
    "hero.photo.alt": "Photo of Miguel Penalva Caro",

    "about.title": "About me",
    "about.p1": "BSc (Hons) Software Engineering graduate from York St John University (United Kingdom), with a technical foundation built through a Higher Vocational Training Diploma in Multi-Platform Application Development (EUSA — Seville Chamber of Commerce). I've built full-stack applications both in academic projects and during a company internship, always as part of a development team.",
    "about.p2": "I adapt easily to new technologies and environments, and particularly enjoy breaking down a technical problem until I find a solution that actually works. Outside of code, fishing, sailing and the gym take up a good part of my time — the discipline that sport demands is something I also bring to my work.",
    "about.stack.title": "Technical stack",

    "projects.title": "Projects",
    "project1.tag": "2026 · Final Year Project",
    "project1.title": "Sports Facility Booking System",
    "project1.desc1": "Full-stack sports facility booking system, with backend validation to prevent duplicate bookings. Includes a mechanism built in Python that analyses real-time weather data (OpenWeatherMap API) to automatically recommend the most suitable available court based on forecast conditions.",
    "project1.desc2": "Evaluated using the Design Science Research methodology, with a 100% success rate in detecting booking conflicts.",

    "project2.desc1": "Android app for logging restaurant visits and rating meals. Secure authentication via SHA-256 password hashing and fingerprint biometric login, with a local, per-user isolated database.",
    "project2.desc2": "Full automated test suite (unit, integration and end-to-end) and accessibility support implemented with Flutter Semantics. Grade obtained: 98/100.",

    "project3.tag": "Advanced Web Development · York St John University",
    "project3.desc1": "REST API for managing restaurant reservations, with a Node.js, Express and MySQL backend. Automatically assigns the smallest available table that fits the party size and is free at the requested date and time.",
    "project3.desc2": "Full endpoints to create, edit, list and delete reservations and tables, with a JavaScript frontend.",
    "project3.link.demo": "View live demo →",
    "project3.link.code": "Code on GitHub →",

    "project4.tag": "Mar – Jun 2025 · Company internship",
    "project4.title": "Full-Stack Development — Indexa Geodata",
    "project4.desc1": "Full-stack developer internship at Indexa Geodata. I worked as part of the development team on a web and mobile application built with Flutter, deployed with Docker and currently in production.",
    "project4.desc2": "I actively collaborated on the technical implementation of the product within a real development team.",

    "projects.cta": "See more on GitHub →",

    "experience.title": "Experience",
    "exp1.title": "Full-Stack Developer (Internship) — Indexa Geodata",
    "exp1.desc": "Development of a web and mobile application in Flutter, deployed with Docker and currently in production. I worked as part of the development team, actively collaborating on the technical implementation of the product.",
    "exp2.desc": "Participant in an intensive programming camp organized by Telefónica (Málaga), focused on problem-solving and teamwork under pressure.",

    "education.title": "Education",
    "edu1.sub": "York St John University — United Kingdom",
    "edu2.title": "Higher Vocational Training Diploma in Multi-Platform Application Development (DAM)",
    "edu2.sub": "EUSA — Seville Chamber of Commerce",
    "edu3.title": "British curriculum education",
    "edu3.sub": "British School of Córdoba and British School of Seville",

    "contact.title": "Contact",
    "contact.lead": "Want to talk about an opportunity or one of these projects? Get in touch.",
    "contact.location": "Seville, Spain",

    "meta.title": "Miguel Penalva Caro · Software Engineer",
    "meta.description": "Portfolio of Miguel Penalva Caro, junior full-stack developer. BSc (Hons) Software Engineering, York St John University."
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.setAttribute("alt", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });

  document.title = dict["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

  document.documentElement.setAttribute("lang", lang);
  document.body.setAttribute("data-lang", lang);

  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.textContent = lang === "es" ? "EN" : "ES";

  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch (e) {
    /* localStorage unavailable, ignore */
  }
}

function initLanguage() {
  let saved = null;
  try {
    saved = localStorage.getItem("portfolio-lang");
  } catch (e) {
    /* localStorage unavailable, ignore */
  }
  const lang = saved === "en" ? "en" : "es";
  applyLanguage(lang);

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = document.body.getAttribute("data-lang");
      applyLanguage(current === "es" ? "en" : "es");
    });
  }
}

initLanguage();
