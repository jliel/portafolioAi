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
    ctaProjects: string;
    ctaAgent: string;
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
    repoLabel: string;
    demoLabel: string;
    architectureLabel: string;
    items: {
      id: string;
      title: string;
      description: string;
      tags: string[];
      architectureDetails: string;
      repoUrl?: string;
      demoUrl?: string;
      categoryBadge: string;
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
      aiAgent: 'Asistente',
      openMenu: 'Abrir menú',
    },
    tabs: {
      all: 'Vista Completa',
      hero: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades & Stack',
      about: 'Sobre Mí',
      contact: 'Contacto',
    },
    hero: {
      statusBadge: 'DESARROLLO DE SOFTWARE // WEB & ESCRITORIO',
      titleStart: 'Desarrollador de Software ',
      titleAccent: 'Web & Escritorio',
      subtitle: 'Programador con sólida base y dominio comprobado en Java, C#, TypeScript, Python y JavaScript. Enfocado en patrones de diseño, arquitectura de software limpia y documentación técnica. Actualmente aprendiendo y explorando la integración con Inteligencia Artificial.',
      ctaProjects: 'Ver Mis Proyectos',
      ctaAgent: 'Asistente Virtual',
      githubLabel: 'github/jliel',
      terminalTitle: 'developer_profile.ts',
      terminalInit: '> cargando perfil técnico...',
      terminalAgentRole: '[DEV: Juan Antonio / jliel]',
      terminalAgentMsg: '"Enfoque técnico: dominio de lenguajes, patrones de diseño, código limpio, documentación y aprendizaje continuo en IA."',
      terminalToolsTitle: '[STACK: Java + C# + TS/JS + Python + SQL]',
      terminalToolsMsg: '"Bilingüe: Español (Nativo) e Inglés (Avanzado). Software mantenible y estructurado."',
      terminalStatus: 'status: disponible para proyectos de software y desarrollo web',
    },
    projects: {
      badge: 'PROYECTOS // EXPERIENCIA REAL',
      title: 'Proyectos Desarrollados',
      subtitle: 'Una muestra transparente de mis desarrollos reales en TypeScript, React, C#, Python y Ciencias de la Computación.',
      repoLabel: 'Ver código en GitHub',
      demoLabel: 'Ver demostración',
      architectureLabel: 'Arquitectura & Buenas Prácticas',
      items: [
        {
          id: 'shopping-cart-ts',
          title: 'ShoppingCart (TypeScript & React)',
          description: 'Aplicación de carrito de compras implementada en TypeScript. Manejo desacoplado de estado, renderizado optimizado de listas, diseño responsivo y tipado estricto.',
          tags: ['TypeScript', 'React', 'Gestión de Estado', 'Vite', 'Clean Code'],
          architectureDetails: 'Separación clara entre componentes de presentación y lógica de negocio mediante Custom Hooks.',
          repoUrl: 'https://github.com/jliel/ShoppingCart',
          categoryBadge: 'TYPESCRIPT / REACT',
        },
        {
          id: 'pet-registry-mobile',
          title: 'PetRegistry: Registro & Formularios Reactivos',
          description: 'Sistema web para registro y administración de datos con enfoque Mobile-First, validación exhaustiva de entradas y persistencia estructurada.',
          tags: ['TypeScript', 'React', 'Mobile First', 'Validación de Formularios'],
          architectureDetails: 'Arquitectura modular de formularios controlados y diseño adaptativo a pantallas móviles.',
          repoUrl: 'https://github.com/jliel/PetRegistry',
          categoryBadge: 'FRONTEND / MOBILE FIRST',
        },
        {
          id: 'backend-csharp-asp',
          title: 'Servicios Backend en C# y ASP.NET',
          description: 'Desarrollo de servicios y lógica de backend utilizando C# y el framework ASP.NET, aplicando patrones de diseño para el manejo de solicitudes y persistencia.',
          tags: ['C#', '.NET', 'ASP.NET', 'POO', 'Patrones de Diseño'],
          architectureDetails: 'Inyección de dependencias, controladores RESTful y separación por capas.',
          repoUrl: 'https://github.com/jliel/learning_asp',
          categoryBadge: 'C# / .NET BACKEND',
        },
        {
          id: 'python-red-neuronal',
          title: 'Red Neuronal & Procesamiento Digital de Imágenes (PDI)',
          description: 'Implementación en Python de algoritmos de procesamiento de imágenes y estructuras de redes neuronales para análisis matricial y clasificación de patrones.',
          tags: ['Python', 'NumPy', 'Visión Computacional', 'Matemáticas Aplicadas'],
          architectureDetails: 'Cálculos matriciales vectorizados y modelos matemáticos implementados con NumPy.',
          repoUrl: 'https://github.com/jliel/red_neuronal',
          categoryBadge: 'PYTHON / ML & PDI',
        },
        {
          id: 'cs50-algorithms',
          title: 'Fundamentos de Algoritmia & Ciencias de la Computación',
          description: 'Resolución de problemas algorítmicos fundamentales: estructuras de datos (listas enlazadas, árboles, tablas hash), complejidad computacional y gestión de memoria.',
          tags: ['C', 'Python', 'SQL', 'Estructuras de Datos', 'CS50'],
          architectureDetails: 'Algoritmos optimizados para eficiencia de tiempo O(n) y uso disciplinado de memoria.',
          repoUrl: 'https://github.com/jliel/cs50_projects',
          categoryBadge: 'ALGORITMOS & CS',
        },
        {
          id: 'react-notes-forms',
          title: 'Notes & Form Foundation (React + TS)',
          description: 'Aplicación reactiva para creación y administración de notas con persistencia local y componentes de formulario reutilizables.',
          tags: ['TypeScript', 'React', 'Hooks', 'UX Responsiva'],
          architectureDetails: 'Diseño componentizado con reutilización de inputs y manejo predecible de eventos.',
          repoUrl: 'https://github.com/jliel/notes-react',
          categoryBadge: 'REACT COMPONENTS',
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
          title: 'Ingeniería de Software & Arquitectura',
          skills: [
            { name: 'Patrones de Diseño (Singleton, Factory, Observer, etc.)', level: 'Aplicación Práctica' },
            { name: 'Arquitectura de Software (MVC, Capas, Modularidad)', level: 'Sólido' },
            { name: 'Documentación Técnica de Proyectos de Software', level: 'Experiencia Académica' },
            { name: 'Clean Code, Tipado Estricto & Mantenibilidad', level: 'Aplicación Continua' },
            { name: 'Control de Versiones (Git, GitHub, Flujos de Trabajo)', level: 'Dominio Alto' },
          ],
        },
        {
          title: 'Desarrollo Web & Frontend Moderno',
          skills: [
            { name: 'React 19 / Vite / Componentes Reutilizables', level: 'Dominio Alto' },
            { name: 'Tailwind CSS (Sistemas de Diseño & Modo Oscuro/Claro)', level: 'Dominio Alto' },
            { name: 'Diseño Responsivo (Mobile-First) & Accesibilidad Web', level: 'Sólido' },
            { name: 'Creación y maquetación web asistida por herramientas de IA', level: 'Práctica Habitual' },
          ],
        },
        {
          title: 'Aprendizaje Activo & Idiomas',
          skills: [
            { name: 'Inteligencia Artificial & Agentes (APIs de LLMs, Structured Outputs)', level: 'En Aprendizaje Activo' },
            { name: 'Español (Lengua Materna / Nativo)', level: 'Nativo' },
            { name: 'Inglés (Lectura técnica, redacción y comunicación fluida)', level: 'Avanzado / Profesional' },
          ],
        },
      ],
    },
    about: {
      badge: 'TRAYECTORIA // TRANSPARENCIA',
      name: 'Juan Antonio (jliel)',
      role: 'Desarrollador de Software // Web & Escritorio',
      bio: 'Programador apasionado por el código bien estructurado. Domino los lenguajes en los que he trabajado (Java, C#, TypeScript, JavaScript y Python) tanto en entornos web como de escritorio. Aplico patrones de diseño y principios de arquitectura para construir software legible y documentado. Cuento con experiencia documentando proyectos universitarios de software y actualmente me encuentro aprendiendo y explorando activamente la integración con Inteligencia Artificial.',
      locationLabel: 'Modalidad:',
      locationVal: 'Remoto / Híbrido',
      languagesLabel: 'Idiomas:',
      languagesVal: 'Español (Nativo) • Inglés (Avanzado)',
      focusLabel: 'Enfoque:',
      focusVal: 'Software Limpio & Web Moderna',
      availableLabel: 'Disponibilidad:',
      availableVal: 'Abierto a oportunidades y proyectos',
      headline: 'Compromiso con el Código Limpio y la Arquitectura Sólida',
      cards: [
        {
          title: 'Dominio Real de Lenguajes',
          description: 'Comprendo la naturaleza de cada herramienta: tipado estricto y POO en Java y C#, asincronía y reactividad en TS/JS, y la potencia de Python.',
        },
        {
          title: 'Patrones de Diseño & Arquitectura',
          description: 'Aplico patrones clásicos para resolver problemas de estructuración, desacoplamiento de dependencias y modularidad en el código.',
        },
        {
          title: 'Documentación Clara y Rigurosa',
          description: 'Experiencia documentando proyectos universitarios con especificaciones de requerimientos, diagramas de arquitectura y manuales técnicos.',
        },
        {
          title: 'Aprendizaje Continuo en IA',
          description: 'Aprovecho herramientas de IA en mi flujo de trabajo web y me encuentro aprendiendo de forma activa sobre integración de modelos y agentes.',
        },
      ],
    },
    contact: {
      badge: 'CONTACTO // CONEXIÓN DIRECTA',
      title: '¿Tienes un proyecto o buscas un desarrollador confiable?',
      subtitle: 'Conversemos sobre cómo puedo aportar a tu desarrollo de software, proyecto web o equipo de ingeniería.',
      sendEmail: 'Enviar Correo',
      copied: '¡Copiado!',
      copyEmail: 'Copiar correo',
      askAgent: 'Preguntar al Asistente',
      github: 'github.com/jliel',
    },
    agent: {
      title: 'jliel-Assistant',
      online: 'ONLINE',
      subtitle: 'Asistente informativo del portafolio',
      welcomeMsg: '¡Hola! Soy el asistente virtual de este portafolio. Conozco el perfil real de Juan Antonio (jliel): su dominio de Java, C#, TypeScript, Python, su aplicación de patrones de diseño y arquitectura, su experiencia documentando proyectos universitarios, su nivel bilingüe (Español nativo / Inglés avanzado) y su interés en aprender sobre Inteligencia Artificial. ¿Qué deseas consultar?',
      typing: 'El asistente está escribiendo...',
      placeholder: 'Pregunta sobre su experiencia, lenguajes o proyectos...',
      suggestedPrompts: [
        '¿Cuál es su experiencia en Java, C# y Python?',
        '¿Qué conocimientos tiene en patrones y arquitectura?',
        '¿Qué proyectos reales ha desarrollado?',
        '¿Cuál es su nivel de inglés y español?',
      ],
    },
    footer: {
      role: 'Desarrollador de Software // Web & Escritorio',
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
      aiAgent: 'Assistant',
      openMenu: 'Open menu',
    },
    tabs: {
      all: 'Full View',
      hero: 'Home',
      projects: 'Projects',
      skills: 'Skills & Stack',
      about: 'About Me',
      contact: 'Contact',
    },
    hero: {
      statusBadge: 'SOFTWARE DEVELOPMENT // WEB & DESKTOP',
      titleStart: 'Software Developer ',
      titleAccent: 'Web & Desktop',
      subtitle: 'Software programmer with solid foundations and verified proficiency in Java, C#, TypeScript, Python, and JavaScript for web and desktop solutions. Focused on design patterns, clean software architecture, and technical documentation. Currently learning and exploring AI integrations.',
      ctaProjects: 'View My Projects',
      ctaAgent: 'Virtual Assistant',
      githubLabel: 'github/jliel',
      terminalTitle: 'developer_profile.ts',
      terminalInit: '> loading developer profile...',
      terminalAgentRole: '[DEV: Juan Antonio / jliel]',
      terminalAgentMsg: '"Technical focus: strong language foundations, design patterns, clean code, documentation, and active learning in AI."',
      terminalToolsTitle: '[STACK: Java + C# + TS/JS + Python + SQL]',
      terminalToolsMsg: '"Bilingual: Native Spanish and Advanced English. Maintainable and structured software."',
      terminalStatus: 'status: open for software and web development projects',
    },
    projects: {
      badge: 'PROJECTS // REAL EXPERIENCE',
      title: 'Delivered Projects',
      subtitle: 'A transparent showcase of my real repositories across TypeScript, React, C#, Python, and Computer Science foundations.',
      repoLabel: 'View source on GitHub',
      demoLabel: 'View demo',
      architectureLabel: 'Architecture & Best Practices',
      items: [
        {
          id: 'shopping-cart-ts',
          title: 'ShoppingCart (TypeScript & React)',
          description: 'E-commerce shopping cart web application built with TypeScript. Features decoupled state management, optimized list rendering, responsive layout, and strict static typing.',
          tags: ['TypeScript', 'React', 'State Management', 'Vite', 'Clean Code'],
          architectureDetails: 'Clear separation between presentational UI components and business logic using reusable Custom Hooks.',
          repoUrl: 'https://github.com/jliel/ShoppingCart',
          categoryBadge: 'TYPESCRIPT / REACT',
        },
        {
          id: 'pet-registry-mobile',
          title: 'PetRegistry: Dynamic Records & Forms',
          description: 'Mobile-first web system for record management, featuring robust client-side input validations and structured local persistence.',
          tags: ['TypeScript', 'React', 'Mobile First', 'Form Validation'],
          architectureDetails: 'Modular controlled form components designed with an accessible, mobile-first UI approach.',
          repoUrl: 'https://github.com/jliel/PetRegistry',
          categoryBadge: 'FRONTEND / MOBILE FIRST',
        },
        {
          id: 'backend-csharp-asp',
          title: 'Backend Architecture in C# and ASP.NET',
          description: 'Backend services and business logic developed with C# and the ASP.NET framework, applying design patterns for structured request handling.',
          tags: ['C#', '.NET', 'ASP.NET', 'OOP', 'Design Patterns'],
          architectureDetails: 'Dependency injection, RESTful controllers, and layered separation of concerns.',
          repoUrl: 'https://github.com/jliel/learning_asp',
          categoryBadge: 'C# / .NET BACKEND',
        },
        {
          id: 'python-red-neuronal',
          title: 'Neural Networks & Digital Image Processing (PDI)',
          description: 'Python implementations of image processing techniques and neural network architectures for matrix calculations and pattern recognition.',
          tags: ['Python', 'NumPy', 'Computer Vision', 'Applied Math'],
          architectureDetails: 'Vectorized NumPy matrix pipelines and mathematical models implemented from scratch.',
          repoUrl: 'https://github.com/jliel/red_neuronal',
          categoryBadge: 'PYTHON / ML & PDI',
        },
        {
          id: 'cs50-algorithms',
          title: 'Computer Science & Algorithmic Foundations',
          description: 'Problem-solving based on computer science foundations: dynamic memory allocation, data structures (linked lists, trees, hash tables), and algorithm efficiency.',
          tags: ['C', 'Python', 'SQL', 'Data Structures', 'CS50'],
          architectureDetails: 'Time-complexity optimization O(n) and disciplined low-level memory usage.',
          repoUrl: 'https://github.com/jliel/cs50_projects',
          categoryBadge: 'ALGORITHMS & CS',
        },
        {
          id: 'react-notes-forms',
          title: 'Notes & Form Foundation (React + TS)',
          description: 'Reactive web application for note taking and management with client-side persistence and reusable form elements.',
          tags: ['TypeScript', 'React', 'Hooks', 'Responsive UX'],
          architectureDetails: 'Componentized design with input reusability and predictable event handling.',
          repoUrl: 'https://github.com/jliel/notes-react',
          categoryBadge: 'REACT COMPONENTS',
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
          title: 'Software Engineering & Architecture',
          skills: [
            { name: 'Design Patterns (Singleton, Factory, Observer, etc.)', level: 'Practical Application' },
            { name: 'Software Architecture (MVC, Layered Design, Modular Code)', level: 'Solid' },
            { name: 'Technical Project Documentation (Academic & Software Specs)', level: 'Proven Experience' },
            { name: 'Clean Code, Strict Typing & Maintainability', level: 'Continuous Practice' },
            { name: 'Version Control (Git, GitHub, Branching Workflows)', level: 'High Proficiency' },
          ],
        },
        {
          title: 'Web Development & Modern Frontend',
          skills: [
            { name: 'React 19 / Vite / Reusable Component Design', level: 'High Proficiency' },
            { name: 'Tailwind CSS (Cyber Minimalist Systems & Dark/Light Themes)', level: 'High Proficiency' },
            { name: 'Responsive Mobile-First Design & Web Accessibility (A11y)', level: 'Solid' },
            { name: 'AI-assisted web prototyping and layout workflows', level: 'Regular Practice' },
          ],
        },
        {
          title: 'Active Learning & Languages',
          skills: [
            { name: 'Artificial Intelligence & Agents (LLM APIs, Structured Outputs)', level: 'Active Learning' },
            { name: 'Spanish (Mother Tongue / Native)', level: 'Native' },
            { name: 'English (Technical Reading, Writing & Professional Communication)', level: 'Advanced / Fluent' },
          ],
        },
      ],
    },
    about: {
      badge: 'BACKGROUND // TRANSPARENCY',
      name: 'Juan Antonio (jliel)',
      role: 'Software Developer // Web & Desktop',
      bio: 'Software developer dedicated to clean, reliable code. I have a thorough understanding of the languages I build with (Java, C#, TypeScript, JavaScript, and Python) across web and desktop ecosystems. I actively use design patterns and architectural principles to deliver maintainable, well-documented applications. I have experience documenting university software projects, and I am currently actively learning and exploring AI integrations.',
      locationLabel: 'Work Mode:',
      locationVal: 'Remote / Hybrid',
      languagesLabel: 'Languages:',
      languagesVal: 'Spanish (Native) • English (Advanced)',
      focusLabel: 'Focus:',
      focusVal: 'Clean Software & Modern Web',
      availableLabel: 'Availability:',
      availableVal: 'Open to projects and developer roles',
      headline: 'Commitment to Clean Code and Strong Architecture',
      cards: [
        {
          title: 'Real Language Competence',
          description: 'I understand strict typing and OOP in Java and C#, the asynchronous event loop in TS/JS, and the data capabilities of Python.',
        },
        {
          title: 'Design Patterns & Architecture',
          description: 'I understand classical design patterns and employ them to solve separation of concerns, decoupling, and maintainability challenges.',
        },
        {
          title: 'Clear Technical Documentation',
          description: 'Hands-on experience documenting academic and engineering software projects, producing requirement specifications and architecture diagrams.',
        },
        {
          title: 'Active Learning in AI',
          description: 'I use AI tools to accelerate web workflows and am actively studying and experimenting with modern AI and agent concepts.',
        },
      ],
    },
    contact: {
      badge: 'CONTACT // GET IN TOUCH',
      title: 'Looking for a reliable, versatile developer?',
      subtitle: 'Let us connect and discuss how I can contribute to your software engineering, web development, or engineering team.',
      sendEmail: 'Send Email',
      copied: 'Copied!',
      copyEmail: 'Copy Email',
      askAgent: 'Ask My Assistant',
      github: 'github.com/jliel',
    },
    agent: {
      title: 'jliel-Assistant',
      online: 'ONLINE',
      subtitle: 'Portfolio informational assistant',
      welcomeMsg: 'Hello! I am this portfolio’s virtual assistant. I can answer questions about Juan Antonio’s (jliel) real experience with Java, C#, TypeScript, Python, his practice with design patterns and documentation, his bilingual background (Native Spanish / Advanced English), and his active learning in AI. How can I assist you?',
      typing: 'Assistant is typing...',
      placeholder: 'Ask about his experience, languages, or projects...',
      suggestedPrompts: [
        'What is his real experience in Java, C# and Python?',
        'What are his software design & architecture skills?',
        'What projects has he developed?',
        'What is his level in English and Spanish?',
      ],
    },
    footer: {
      role: 'Software Developer // Web & Desktop',
      designSystem: 'Cyber Minimalist Design System (RNF-01)',
      rights: 'All rights reserved',
    },
  },
};
