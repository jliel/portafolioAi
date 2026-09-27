export type Language = 'es' | 'en';

export interface TranslationContent {
  nav: {
    projects: string;
    skills: string;
    about: string;
    contact: string;
    aiAgent: string;
    openMenu: string;
  };
  tabs: {
    all: string;
    hero: string;
    projects: string;
    skills: string;
    about: string;
    contact: string;
  };
  hero: {
    statusBadge: string;
    titleStart: string;
    titleAccent: string;
    subtitle: string;
    ctaAgent: string;
    ctaProjects: string;
    githubLabel: string;
    terminalTitle: string;
    terminalInit: string;
    terminalAgentRole: string;
    terminalAgentMsg: string;
    terminalToolsTitle: string;
    terminalToolsMsg: string;
    terminalStatus: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    flagshipBadge: string;
    repoLabel: string;
    demoLabel: string;
    architectureLabel: string;
    recommendedHeader: string;
    recommendedNotice: string;
    items: {
      id: string;
      title: string;
      description: string;
      tags: string[];
      architectureDetails: string;
      repoUrl?: string;
      demoUrl?: string;
      highlight?: boolean;
    }[];
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      title: string;
      skills: { name: string; level: string }[];
    }[];
  };
  about: {
    badge: string;
    name: string;
    role: string;
    bio: string;
    locationLabel: string;
    locationVal: string;
    languagesLabel: string;
    languagesVal: string;
    focusLabel: string;
    focusVal: string;
    availableLabel: string;
    availableVal: string;
    headline: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    sendEmail: string;
    copied: string;
    copyEmail: string;
    askAgent: string;
    github: string;
  };
  agent: {
    title: string;
    online: string;
    subtitle: string;
    welcomeMsg: string;
    typing: string;
    placeholder: string;
    suggestedPrompts: string[];
  };
  footer: {
    role: string;
    designSystem: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  es: {
    nav: {
      projects: 'Proyectos',
      skills: 'Habilidades',
      about: 'Sobre Mí',
      contact: 'Contacto',
      aiAgent: 'Agente IA',
      openMenu: 'Abrir menú',
    },
    tabs: {
      all: 'Vista Completa',
      hero: 'Inicio',
      projects: 'Proyectos & Experiencia',
      skills: 'Habilidades & Stack',
      about: 'Sobre Mí & Enfoque',
      contact: 'Contacto',
    },
    hero: {
      statusBadge: 'CREACIÓN WEB CON IA // ENFOCADO EN INGENIERÍA REAL',
      titleStart: 'Desarrollador de Software, Creación Web con IA & ',
      titleAccent: 'Agentes Inteligentes',
      subtitle: 'Programador con sólida base en Java, C#, TypeScript, Python y JavaScript para proyectos web y de escritorio. Especializado en crear páginas web asistidas por IA, aplicando patrones de diseño, arquitectura limpia y adentrándome en el desarrollo de agentes de IA.',
      ctaAgent: 'Preguntar a mi Asistente',
      ctaProjects: 'Ver Mis Proyectos',
      githubLabel: 'github/jliel',
      terminalTitle: 'developer_profile.ts',
      terminalInit: '> cargando perfil técnico...',
      terminalAgentRole: '[PERFIL: Juan Antonio / jliel]',
      terminalAgentMsg: '"Enfoque honesto: dominio comprobado de lenguajes de programación, patrones de diseño, documentación rigurosa y creación web con IA."',
      terminalToolsTitle: '[HABILIDADES: Java + C# + TS/JS + Python + A11y]',
      terminalToolsMsg: '"Bilingüe: Español (Nativo) e Inglés (Avanzado). Código mantenible y estructurado."',
      terminalStatus: 'status: disponible para proyectos web y desarrollo de software',
    },
    projects: {
      badge: 'PROYECTOS // EXPERIENCIA REAL & EXPLORACIÓN',
      title: 'Proyectos Desarrollados & Proyecto Propuesto',
      subtitle: 'Una muestra transparente de mis desarrollos reales en TypeScript, Python, C# y React, junto a mi proyecto planificado con agentes de IA.',
      flagshipBadge: '★ PROYECTO OBJETIVO (AGENTE DE IA)',
      repoLabel: 'Ver código en GitHub',
      demoLabel: 'Ver demostración',
      architectureLabel: 'Arquitectura & Buenas Prácticas',
      recommendedHeader: 'Proyecto con Agentes en Desarrollo:',
      recommendedNotice: 'Este proyecto fue diseñado específicamente para combinar mi experiencia real en maquetación web con IA, TypeScript y Python hacia una arquitectura multi-agente.',
      items: [
        {
          id: 'webcrafter-agent',
          title: 'WebCrafter Studio: Generador Web Multi-Agente',
          description: 'Proyecto agéntico en desarrollo: toma requerimientos en lenguaje natural y coordina agentes especializados (Planificador de UX, Generador de componentes React y Revisor de Accesibilidad/Linter) para producir sitios web funcionales.',
          tags: ['Python', 'TypeScript', 'React 19', 'Gemini API', 'Patrones de Diseño'],
          architectureDetails: 'Patrón Supervisor y bucle de validación sintáctica/accesibilidad antes de generar el preview.',
          repoUrl: 'https://github.com/jliel/portafolioAi',
          highlight: true,
        },
        {
          id: 'shopping-cart-ts',
          title: 'ShoppingCart (TypeScript & React)',
          description: 'Aplicación de carrito de compras implementada en TypeScript. Manejo desacoplado de estado, renderizado optimizado de listas, diseño responsivo y tipado estricto.',
          tags: ['TypeScript', 'React', 'Gestión de Estado', 'Vite', 'Clean Code'],
          architectureDetails: 'Separación clara entre componentes de presentación y lógica de negocio mediante Custom Hooks.',
          repoUrl: 'https://github.com/jliel/ShoppingCart',
        },
        {
          id: 'pet-registry-mobile',
          title: 'PetRegistry: Registro & Formularios Reactivos',
          description: 'Sistema web para registro y administración de datos con enfoque Mobile-First, validación exhaustiva de entradas y persistencia estructurada.',
          tags: ['TypeScript', 'React', 'Mobile First', 'Validación de Formularios'],
          architectureDetails: 'Arquitectura modular de formularios controlados y diseño adaptativo a pantallas móviles.',
          repoUrl: 'https://github.com/jliel/PetRegistry',
        },
        {
          id: 'backend-csharp-asp',
          title: 'Arquitectura Backend en C# y ASP.NET',
          description: 'Desarrollo de servicios y lógica de backend utilizando C# y el framework ASP.NET, aplicando patrones de diseño para el manejo de solicitudes y persistencia.',
          tags: ['C#', '.NET', 'ASP.NET', 'POO', 'Patrones de Diseño'],
          architectureDetails: 'Inyección de dependencias, controladores RESTful y separación por capas.',
          repoUrl: 'https://github.com/jliel/learning_asp',
        },
        {
          id: 'python-red-neuronal',
          title: 'Red Neuronal & Procesamiento Digital de Imágenes (PDI)',
          description: 'Implementación en Python de algoritmos de procesamiento de imágenes y estructuras de redes neuronales para análisis matricial y clasificación de patrones.',
          tags: ['Python', 'NumPy', 'Visión Computacional', 'Matemáticas Aplicadas'],
          architectureDetails: 'Cálculos matriciales vectorizados y modelos matemáticos directos.',
          repoUrl: 'https://github.com/jliel/red_neuronal',
        },
        {
          id: 'cs50-algorithms',
          title: 'Fundamentos de Algoritmia & Ciencias de la Computación',
          description: 'Resolución de problemas algorítmicos fundamentales: estructuras de datos (listas enlazadas, árboles, tablas hash), complejidad computacional y gestión de memoria.',
          tags: ['C', 'Python', 'SQL', 'Estructuras de Datos', 'CS50'],
          architectureDetails: 'Algoritmos optimizados para eficiencia de tiempo O(n) y uso disciplinado de memoria.',
          repoUrl: 'https://github.com/jliel/cs50_projects',
        },
      ],
    },
    skills: {
      badge: 'HABILIDADES // BASE SÓLIDA & DOMINIO',
      title: 'Competencias Técnicas Reales',
      subtitle: 'Conocimiento profundo de la sintaxis y buenas prácticas en cada lenguaje utilizado, con fuerte comprensión de patrones de diseño y documentación.',
      categories: [
        {
          title: 'Lenguajes de Programación Dominados',
          skills: [
            { name: 'TypeScript & JavaScript (React, Node, Web)', level: 'Dominio Alto' },
            { name: 'Python (Scripts, APIs, Lógica de Datos)', level: 'Dominio Alto' },
            { name: 'C# / .NET (Backend & Aplicaciones de Escritorio)', level: 'Sólido' },
            { name: 'Java (Programación Orientada a Objetos, Algoritmos)', level: 'Sólido' },
            { name: 'SQL (Consultas relacionales, modelado de bases de datos)', level: 'Sólido' },
          ],
        },
        {
          title: 'Ingeniería de Software & Buenas Prácticas',
          skills: [
            { name: 'Patrones de Diseño (Singleton, Factory, Observer, etc.)', level: 'Aplicación Práctica' },
            { name: 'Arquitectura de Software (MVC, Capas, Modularidad)', level: 'Sólido' },
            { name: 'Documentación Técnica de Proyectos de Software', level: 'Experiencia Académica' },
            { name: 'Clean Code, Tipado Estricto & Mantenibilidad', level: 'Aplicación Continua' },
            { name: 'Control de Versiones (Git, GitHub, Flujos de Trabajo)', level: 'Dominio Alto' },
          ],
        },
        {
          title: 'Creación Web Asistida por IA & Frontend',
          skills: [
            { name: 'Creación y maquetación web con herramientas de IA', level: 'Especialidad Actual' },
            { name: 'React 19 / Vite / Componentes Reutilizables', level: 'Dominio Alto' },
            { name: 'Tailwind CSS (Sistemas de Diseño & Modo Oscuro/Claro)', level: 'Dominio Alto' },
            { name: 'Diseño Responsivo (Mobile-First) & Accesibilidad Web', level: 'Sólido' },
          ],
        },
        {
          title: 'Agentes de IA & Idiomas',
          skills: [
            { name: 'Integración de Modelos de Lenguaje (APIs de Gemini, Claude, OpenAI)', level: 'En Expansión' },
            { name: 'Diseño de Prompts Estructurados & Flujos de Agentes', level: 'En Aprendizaje Activo' },
            { name: 'Español (Lengua Materna / Nativo)', level: 'Nativo' },
            { name: 'Inglés (Lectura técnica, redacción y comunicación fluida)', level: 'Avanzado / Profesional' },
          ],
        },
      ],
    },
    about: {
      badge: 'TRAYECTORIA // TRANSPARENCIA',
      name: 'Juan Antonio (jliel)',
      role: 'Desarrollador de Software & Creador Web con IA',
      bio: 'Programador apasionado por el código bien estructurado. Domino los lenguajes en los que he trabajado (Java, C#, TypeScript, JavaScript y Python) tanto en entornos web como de escritorio. Aplico patrones de diseño y principios de arquitectura para construir software legible y documentado. Actualmente me dedico a crear páginas web aprovechando la Inteligencia Artificial, mientras estudio y desarrollo mis primeros proyectos con arquitecturas de agentes autónomos.',
      locationLabel: 'Modalidad:',
      locationVal: 'Remoto / Híbrido',
      languagesLabel: 'Idiomas:',
      languagesVal: 'Español (Nativo) • Inglés (Avanzado)',
      focusLabel: 'Especialidad:',
      focusVal: 'Creación Web con IA & Software Limpio',
      availableLabel: 'Disponibilidad:',
      availableVal: 'Abierto a oportunidades y proyectos',
      headline: 'Compromiso con el Código Limpio y la Evolución Continua',
      cards: [
        {
          title: 'Dominio Real de Lenguajes',
          description: 'No uso lenguajes superficialmente: comprendo su tipado, paradigmas de objetos en Java y C#, la naturaleza asíncrona de JavaScript/TypeScript y la versatilidad de Python.',
        },
        {
          title: 'Patrones de Diseño & Arquitectura',
          description: 'Conozco patrones de diseño clásicos y los aplico para resolver problemas de estructuración, desacoplamiento y escalabilidad en mis aplicaciones.',
        },
        {
          title: 'Documentación Clara y Rigurosa',
          description: 'Experiencia documentando proyectos universitarios con especificaciones de requerimientos, diagramas y guías claras para facilitar el mantenimiento.',
        },
        {
          title: 'Flujo Bilingüe (Español / Inglés)',
          description: 'Capacidad comprobada para comprender documentación técnica en inglés, comunicarme efectivamente y desarrollar proyectos para audiencias internacionales.',
        },
      ],
    },
    contact: {
      badge: 'CONTACTO // CONEXIÓN DIRECTA',
      title: '¿Tienes un proyecto o buscas un desarrollador confiable?',
      subtitle: 'Conversemos sobre cómo puedo aportar a tu proyecto web, desarrollo de software o integración de herramientas inteligentes.',
      sendEmail: 'Enviar Correo',
      copied: '¡Copiado!',
      copyEmail: 'Copiar correo',
      askAgent: 'Preguntar al Asistente',
      github: 'github.com/jliel',
    },
    agent: {
      title: 'jliel-Agent',
      online: 'ONLINE',
      subtitle: 'Asistente informativo del portafolio',
      welcomeMsg: '¡Hola! Soy el asistente virtual de este portafolio. Conozco el perfil real de Juan Antonio (jliel): su dominio de Java, C#, TypeScript, Python, su experiencia documentando proyectos con patrones de diseño, su trabajo actual creando webs con IA y su nivel bilingüe (Español nativo / Inglés avanzado). ¿Qué deseas consultar?',
      typing: 'El asistente está formulando su respuesta...',
      placeholder: 'Pregunta sobre su experiencia real, lenguajes o proyectos...',
      suggestedPrompts: [
        '¿Cuál es su experiencia real en Java, C# y Python?',
        '¿Qué conocimientos tiene en patrones y arquitectura?',
        '¿Cómo trabaja la creación de páginas web con IA?',
        '¿Cuál es su nivel de inglés y español?',
      ],
    },
    footer: {
      role: 'Desarrollador de Software & Creador Web con IA',
      designSystem: 'Diseño Cyber Minimalista (RNF-01)',
      rights: 'Todos los derechos reservados',
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      about: 'About Me',
      contact: 'Contact',
      aiAgent: 'AI Agent',
      openMenu: 'Open menu',
    },
    tabs: {
      all: 'Full View',
      hero: 'Home',
      projects: 'Projects & Work',
      skills: 'Skills & Stack',
      about: 'About & Background',
      contact: 'Contact',
    },
    hero: {
      statusBadge: 'AI-ASSISTED WEB CREATION // GROUNDED ENGINEERING',
      titleStart: 'Software Developer, AI-Assisted Web Creation & ',
      titleAccent: 'Intelligent Agents',
      subtitle: 'Software programmer with a solid foundation in Java, C#, TypeScript, Python, and JavaScript for web and desktop environments. Specialized in building modern AI-assisted websites, applying design patterns, clean architecture, and advancing into AI agent engineering.',
      ctaAgent: 'Ask My Virtual Assistant',
      ctaProjects: 'View Real Projects',
      githubLabel: 'github/jliel',
      terminalTitle: 'developer_profile.ts',
      terminalInit: '> loading verified developer profile...',
      terminalAgentRole: '[PROFILE: Juan Antonio / jliel]',
      terminalAgentMsg: '"Authentic technical focus: proven mastery of programming languages, design patterns, thorough documentation, and AI-accelerated web creation."',
      terminalToolsTitle: '[SKILLS: Java + C# + TS/JS + Python + A11y]',
      terminalToolsMsg: '"Bilingual: Native Spanish and Advanced English. Readable, well-structured software."',
      terminalStatus: 'status: open for web and software development opportunities',
    },
    projects: {
      badge: 'PROJECTS // REAL EXPERIENCE & ROADMAP',
      title: 'Delivered Projects',
      subtitle: 'A transparent showcase of my real repositories across TypeScript, Python, C#, and React, alongside my planned autonomous agent project.',
      flagshipBadge: '★ ROADMAP TARGET (AI AGENT PROJECT)',
      repoLabel: 'View source on GitHub',
      demoLabel: 'View demo',
      architectureLabel: 'Architecture & Best Practices',
      recommendedHeader: 'Planned AI Agent Project:',
      recommendedNotice: 'Designed specifically to bridge my current hands-on web creation workflow with an autonomous multi-agent architecture.',
      items: [
        {
          id: 'shopping-cart-ts',
          title: 'ShoppingCart (TypeScript & React)',
          description: 'E-commerce shopping cart web application built with TypeScript. Features decoupled state management, optimized list rendering, responsive layout, and strict static typing.',
          tags: ['TypeScript', 'React', 'State Management', 'Vite', 'Clean Code'],
          architectureDetails: 'Clear separation between presentational UI components and business logic using reusable Custom Hooks.',
          repoUrl: 'https://github.com/jliel/ShoppingCart',
        },
        {
          id: 'pet-registry-mobile',
          title: 'PetRegistry: Dynamic Records & Forms',
          description: 'Mobile-first web system for record management, featuring robust client-side input validations and structured local persistence.',
          tags: ['TypeScript', 'React', 'Mobile First', 'Form Validation'],
          architectureDetails: 'Modular controlled form components designed with an accessible, mobile-first UI approach.',
          repoUrl: 'https://github.com/jliel/PetRegistry',
        },
        {
          id: 'backend-csharp-asp',
          title: 'Backend Architecture in C# and ASP.NET',
          description: 'Backend services and business logic developed with C# and the ASP.NET framework, applying design patterns for structured request handling.',
          tags: ['C#', '.NET', 'ASP.NET', 'OOP', 'Design Patterns'],
          architectureDetails: 'Dependency injection, RESTful controllers, and layered separation of concerns.',
          repoUrl: 'https://github.com/jliel/learning_asp',
        },
        {
          id: 'python-red-neuronal',
          title: 'Neural Networks & Digital Image Processing (PDI)',
          description: 'Python implementations of image processing techniques and neural network architectures for matrix calculations and pattern recognition.',
          tags: ['Python', 'NumPy', 'Computer Vision', 'Applied Math'],
          architectureDetails: 'Vectorized NumPy matrix pipelines and mathematical models implemented from scratch.',
          repoUrl: 'https://github.com/jliel/red_neuronal',
        },
        {
          id: 'cs50-algorithms',
          title: 'Computer Science & Algorithmic Foundations',
          description: 'Problem-solving based on computer science foundations: dynamic memory allocation, data structures (linked lists, trees, hash tables), and algorithm efficiency.',
          tags: ['C', 'Python', 'SQL', 'Data Structures', 'CS50'],
          architectureDetails: 'Time-complexity optimization O(n) and disciplined low-level memory usage.',
          repoUrl: 'https://github.com/jliel/cs50_projects',
        },
      ],
    },
    skills: {
      badge: 'SKILLS // STRONG FOUNDATIONS & MASTERY',
      title: 'Real Technical Competencies',
      subtitle: 'In-depth understanding of the syntax and paradigms of each language I use, backed by design patterns and solid documentation skills.',
      categories: [
        {
          title: 'Mastered Programming Languages',
          skills: [
            { name: 'TypeScript & JavaScript (React, Node, Web)', level: 'High Proficiency' },
            { name: 'Python (Scripting, APIs, Data Logic)', level: 'High Proficiency' },
            { name: 'C# / .NET (Backend Services & Desktop Applications)', level: 'Solid' },
            { name: 'Java (Object-Oriented Programming, Algorithms)', level: 'Solid' },
            { name: 'SQL (Relational Queries, Database Modeling)', level: 'Solid' },
          ],
        },
        {
          title: 'Software Engineering & Best Practices',
          skills: [
            { name: 'Design Patterns (Singleton, Factory, Observer, etc.)', level: 'Practical Application' },
            { name: 'Software Architecture (MVC, Layered Design, Modular Code)', level: 'Solid' },
            { name: 'Technical Project Documentation (Academic & Software Specs)', level: 'Proven Experience' },
            { name: 'Clean Code, Strict Typing & Maintainability', level: 'Continuous Practice' },
            { name: 'Version Control (Git, GitHub, Branching Workflows)', level: 'High Proficiency' },
          ],
        },
        {
          title: 'AI-Assisted Web Creation & Modern Frontend',
          skills: [
            { name: 'AI-Powered Web Page Generation & Prototyping', level: 'Current Specialty' },
            { name: 'React 19 / Vite / Reusable Component Design', level: 'High Proficiency' },
            { name: 'Tailwind CSS (Cyber Minimalist Systems & Dark/Light Themes)', level: 'High Proficiency' },
            { name: 'Responsive Mobile-First Design & Web Accessibility (A11y)', level: 'Solid' },
          ],
        },
        {
          title: 'AI Agents & Languages',
          skills: [
            { name: 'LLM Model Integration (Gemini, Claude, OpenAI APIs)', level: 'Expanding' },
            { name: 'Structured Prompting & Autonomous Agent Architectures', level: 'Active Learning' },
            { name: 'Spanish (Mother Tongue / Native)', level: 'Native' },
            { name: 'English (Technical Reading, Writing & Professional Communication)', level: 'Advanced / Fluent' },
          ],
        },
      ],
    },
    about: {
      badge: 'BACKGROUND // TRANSPARENCY',
      name: 'Juan Antonio (jliel)',
      role: 'Software Developer & AI-Assisted Web Creator',
      bio: 'Passionate software developer dedicated to clean, reliable code. I have a thorough understanding of the languages I build with (Java, C#, TypeScript, JavaScript, and Python) across both web and desktop ecosystems. I actively use design patterns and architectural principles to deliver maintainable, well-documented applications. Currently, I create high-converting websites leveraging AI workflows, while exploring and building my first autonomous AI agent architectures.',
      locationLabel: 'Work Mode:',
      locationVal: 'Remote / Hybrid',
      languagesLabel: 'Languages:',
      languagesVal: 'Spanish (Native) • English (Advanced)',
      focusLabel: 'Specialty:',
      focusVal: 'AI Web Creation & Clean Software Engineering',
      availableLabel: 'Availability:',
      availableVal: 'Open to projects and developer roles',
      headline: 'Commitment to Clean Code and Constant Evolution',
      cards: [
        {
          title: 'Real Language Competence',
          description: 'I do not use languages superficially: I understand strict typing, object-oriented paradigms in Java and C#, the asynchronous event loop in TS/JS, and the flexibility of Python.',
        },
        {
          title: 'Design Patterns & Architecture',
          description: 'I understand classical design patterns and employ them to solve separation of concerns, decoupling, and maintainability challenges.',
        },
        {
          title: 'Clear Technical Documentation',
          description: 'Hands-on experience documenting academic and engineering software projects, producing requirement specifications, architecture diagrams, and clear user guides.',
        },
        {
          title: 'Bilingual Fluency (Spanish / English)',
          description: 'Comfortable digesting complex English documentation, collaborating with international teams, and building software for global audiences.',
        },
      ],
    },
    contact: {
      badge: 'CONTACT // GET IN TOUCH',
      title: 'Looking for a reliable, versatile developer?',
      subtitle: 'Let us connect and discuss how I can contribute to your web development, software engineering, or AI integration needs.',
      sendEmail: 'Send Email',
      copied: 'Copied!',
      copyEmail: 'Copy Email',
      askAgent: 'Ask My Assistant',
      github: 'github.com/jliel',
    },
    agent: {
      title: 'jliel-Agent',
      online: 'ONLINE',
      subtitle: 'Portfolio informational assistant',
      welcomeMsg: 'Hello! I am this portfolio’s virtual assistant. I can answer questions about Juan Antonio’s (jliel) real experience with Java, C#, TypeScript, Python, his practice with design patterns and documentation, his current AI-assisted web creation work, and his bilingual background (Native Spanish / Advanced English). How can I assist you?',
      typing: 'Assistant is reasoning answer...',
      placeholder: 'Ask about his real experience, languages, or projects...',
      suggestedPrompts: [
        'What is his real experience in Java, C# and Python?',
        'What are his software design & architecture skills?',
        'How does he build websites using AI?',
        'What is his level in English and Spanish?',
      ],
    },
    footer: {
      role: 'Software Developer & AI-Assisted Web Creator',
      designSystem: 'Cyber Minimalist Design System (RNF-01)',
      rights: 'All rights reserved',
    },
  },
};
