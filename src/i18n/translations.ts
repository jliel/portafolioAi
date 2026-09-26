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
      projects: 'Proyectos & Agentes',
      skills: 'Stack & Habilidades',
      about: 'Sobre Mí & Enfoque',
      contact: 'Contacto',
    },
    hero: {
      statusBadge: 'DESARROLLO WEB CON IA // ENFOCADO EN AGENTES',
      titleStart: 'Desarrollo de Software, Creación Web con IA & ',
      titleAccent: 'Agentes Inteligentes',
      subtitle: 'Creo soluciones web y de escritorio combinando experiencia en Java, C#, TypeScript, Python y JavaScript con arquitecturas de agentes autónomos para automatizar flujos complejos.',
      ctaAgent: 'Interrogar a mi Agente',
      ctaProjects: 'Ver Proyectos',
      githubLabel: 'github/jliel',
      terminalTitle: 'agent_runtime.py',
      terminalInit: '> inicializando agente_orquestador...',
      terminalAgentRole: '[AGENTE: WebCrafter]',
      terminalAgentMsg: '"Analizando requerimientos de usuario: generando landing accesible, componentes React y validación en tiempo real."',
      terminalToolsTitle: '[HERRAMIENTAS: Gemini 2.5 + LangGraph + AST Linter]',
      terminalToolsMsg: '"Generación completada en 210ms. 0 errores sintácticos. Código listo para preview."',
      terminalStatus: 'status: esperando instrucciones en el chat interactivo',
    },
    projects: {
      badge: 'PORTAFOLIO // AGENTES & EXPERIENCIA REAL',
      title: 'Proyectos & Arquitecturas Agénticas',
      subtitle: 'Combinación de mis proyectos reales de software (TypeScript, Python, C#, React) con sistemas de agentes de inteligencia artificial listos para producción.',
      flagshipBadge: '★ PROYECTO INSIGNIA (AGENTE RECOMENDADO)',
      repoLabel: 'Ver código en GitHub',
      demoLabel: 'Probar demostración en vivo',
      architectureLabel: 'Arquitectura & Flujo',
      recommendedHeader: '¿Por qué este proyecto de Agente?',
      recommendedNotice: 'Este proyecto une directamente mi trabajo actual (creación de páginas web con IA) con una arquitectura multi-agente robusta y demostrable.',
      items: [
        {
          id: 'webcrafter-agent',
          title: 'WebCrafter Studio: Multi-Agent Web Builder',
          description: 'Estudio autónomo multi-agente que toma requerimientos en lenguaje natural, diseña una arquitectura UI Cyber Minimalista, genera componentes React 19 + Tailwind, valida accesibilidad (A11y) y despliega una vista previa interactiva en tiempo real.',
          tags: ['LangGraph', 'Python', 'React 19', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
          architectureDetails: 'Supervisor Agent -> UX Specifier -> React Coder Agent -> A11y Validator -> Sandbox Runner.',
          repoUrl: 'https://github.com/jliel/portafolioAi',
          highlight: true,
        },
        {
          id: 'shopping-cart-ai',
          title: 'ShoppingCart & Inventory Intelligence',
          description: 'Aplicación e-commerce en TypeScript con gestión de estado escalable, catálogo de productos y pipeline para recomendaciones inteligentes y búsqueda semántica de ítems.',
          tags: ['TypeScript', 'React', 'State Management', 'Vite', 'REST API'],
          architectureDetails: 'Arquitectura modular en TypeScript desacoplada, tipado estricto e integración de agentes de recomendación.',
          repoUrl: 'https://github.com/jliel/ShoppingCart',
        },
        {
          id: 'enterprise-csharp-asp',
          title: 'ASP.NET & C# Service Backend Suite',
          description: 'Soluciones empresariales backend desarrolladas en C# y ASP.NET con arquitectura orientada a servicios, manejo de persistencia relacional y endpoints de alto rendimiento para aplicaciones web y de escritorio.',
          tags: ['C#', '.NET', 'ASP.NET', 'SQL', 'Arquitectura N-Capas'],
          architectureDetails: 'Controladores RESTful, inyección de dependencias, Entity Framework y validación con contratos de datos.',
          repoUrl: 'https://github.com/jliel/learning_asp',
        },
        {
          id: 'python-vision-ml',
          title: 'Python Neural Networks & Vision Processing (PDI)',
          description: 'Módulos de procesamiento digital de imágenes y modelos de redes neuronales implementados en Python para clasificación, filtrado morfológico y análisis matemático de patrones.',
          tags: ['Python', 'Machine Learning', 'Computer Vision', 'NumPy', 'Algoritmos'],
          architectureDetails: 'Pipelines matriciales vectorizados y capas densas con entrenamiento por retropropagación.',
          repoUrl: 'https://github.com/jliel/red_neuronal',
        },
        {
          id: 'pet-registry-react',
          title: 'PetRegistry & Reactive Record Manager',
          description: 'Sistema responsivo para registro y auditoría de entidades con arquitectura Mobile-First, validación dinámica de formularios en tiempo real y persistencia optimizada.',
          tags: ['TypeScript', 'React', 'Mobile First', 'Tailwind', 'Form Validation'],
          architectureDetails: 'Componentes controlados, custom hooks reutilizables y manejo de cache optimista.',
          repoUrl: 'https://github.com/jliel/PetRegistry',
        },
        {
          id: 'cs50-foundations',
          title: 'Computer Science Core & Algorithm Engineering',
          description: 'Implementación de algoritmos fundamentales de estructuras de datos (árboles, grafos, tablas hash), gestión manual de memoria y algoritmos de optimización.',
          tags: ['C', 'Python', 'SQL', 'Estructuras de Datos', 'CS50'],
          architectureDetails: 'Diseño algorítmico de baja complejidad temporal O(n log n) y pruebas unitarias exhaustivas.',
          repoUrl: 'https://github.com/jliel/cs50_projects',
        },
      ],
    },
    skills: {
      badge: 'STACK TÉCNICO // MULTI-LENGUAJE & AGENTES',
      title: 'Habilidades & Tecnologías de Ingeniería',
      subtitle: 'Sólida base en lenguajes fuertemente tipados (Java, C#, TS), lenguajes dinámicos (Python, JS) y el nuevo ecosistema de agentes inteligentes.',
      categories: [
        {
          title: 'Lenguajes de Programación (Web & Desktop)',
          skills: [
            { name: 'Python (FastAPI, AsyncIO, AI SDKs)', level: 'Avanzado' },
            { name: 'TypeScript / JavaScript (ESNext, React)', level: 'Avanzado' },
            { name: 'C# / .NET (Backend & Escritorio)', level: 'Intermedio - Avanzado' },
            { name: 'Java (OOP, Algoritmos, Software Core)', level: 'Intermedio - Avanzado' },
            { name: 'SQL (PostgreSQL, SQLite, Consultas complejas)', level: 'Avanzado' },
          ],
        },
        {
          title: 'Ecosistema de Agentes de IA & LLMs',
          skills: [
            { name: 'LangGraph & LangChain (Orquestación de Grafos)', level: 'Avanzado' },
            { name: 'CrewAI (Flujos Multi-Agente con Roles)', level: 'Avanzado' },
            { name: 'Google Gemini API (Flash, Pro, Function Calling)', level: 'Avanzado' },
            { name: 'Pipelines RAG (Bases Vectoriales ChromaDB / Qdrant)', level: 'Avanzado' },
            { name: 'Diseño de Prompts Estructurados & Validaciones Zod/Pydantic', level: 'Experto' },
          ],
        },
        {
          title: 'Creación Web con IA & Frontend Moderno',
          skills: [
            { name: 'Generación Web con IA & Iteración Agéntica', level: 'Experto' },
            { name: 'React 19 / Vite (TypeScript)', level: 'Avanzado' },
            { name: 'Tailwind CSS (Sistemas Cyber Minimalista & Accesibles)', level: 'Experto' },
            { name: 'Diseño Responsivo & Mobile First', level: 'Avanzado' },
            { name: 'Accesibilidad Web (WCAG 2.1 AA / AAA)', level: 'Avanzado' },
          ],
        },
        {
          title: 'Backend, Arquitectura & Herramientas',
          skills: [
            { name: 'FastAPI / Node.js / Express', level: 'Avanzado' },
            { name: 'ASP.NET Core Web APIs', level: 'Intermedio' },
            { name: 'Git, GitHub Actions & CI/CD Pipelines', level: 'Avanzado' },
            { name: 'Docker & Ambientes en Contenedores', level: 'Intermedio' },
            { name: 'Fundamentos de Ciencias de la Computación (CS50)', level: 'Sólido' },
          ],
        },
      ],
    },
    about: {
      badge: 'PERFIL // TRAYECTORIA REAL',
      name: 'jliel',
      role: 'Software Engineer & AI Agent Developer',
      bio: 'Desarrollador con experiencia sólida en Java, C#, TypeScript, JavaScript y Python tanto en entornos web como de escritorio. Actualmente me dedico a crear páginas web de alto impacto utilizando Inteligencia Artificial, adentrándome profundamente en el diseño e implementación de agentes autónomos para llevar el desarrollo asistido al siguiente nivel.',
      locationLabel: 'Modalidad:',
      locationVal: 'Remoto / Híbrido',
      focusLabel: 'Especialidad:',
      focusVal: 'Web con IA & Agentes Autónomos',
      availableLabel: 'Disponibilidad:',
      availableVal: 'Inmediata para proyectos',
      headline: 'De la Programación Clásica a los Agentes Autónomos',
      cards: [
        {
          title: 'Experiencia Políglota Comprobada',
          description: 'Haber trabajado con Java y C# proporciona una disciplina arquitectónica y de tipado estricto que aplico directamente al desarrollo con TypeScript y Python.',
        },
        {
          title: 'Creación Web Acelerada con IA',
          description: 'Actualmente desarrollo páginas web impulsadas por IA, optimizando tiempos de entrega, diseño adaptativo y código de alta calidad.',
        },
        {
          title: 'Arquitecturas Multi-Agente Reales',
          description: 'No me limito a invocar prompts: diseño flujos donde múltiples agentes se supervisan, critican su trabajo, llaman a herramientas y corrigen errores en bucles cerrados.',
        },
        {
          title: 'Fundamentos de Algoritmia & Sistemas',
          description: 'Mi recorrido por proyectos tipo CS50 y procesamiento de datos me permite evaluar la complejidad, latencia y escalabilidad de las soluciones agénticas.',
        },
      ],
    },
    contact: {
      badge: 'CONEXIÓN // DISPONIBILIDAD',
      title: '¿Hablamos sobre tu próximo proyecto o equipo?',
      subtitle: 'Si buscas desarrollar aplicaciones web modernas, integrar agentes de IA en tus procesos o sumar un programador versátil, conversemos.',
      sendEmail: 'Enviar Correo',
      copied: '¡Copiado!',
      copyEmail: 'Copiar correo',
      askAgent: 'Consultar al Agente',
      github: 'github.com/jliel',
    },
    agent: {
      title: 'jliel-Agent',
      online: 'ONLINE',
      subtitle: 'Asistente agéntico interactivo',
      welcomeMsg: '¡Hola! Soy jliel-Agent. Conozco a detalle la experiencia de jliel en Java, C#, TypeScript, Python, su trabajo actual creando sitios web con IA y su transición hacia sistemas de agentes de IA autónomos. ¿Qué te gustaría saber?',
      typing: 'El agente está razonando su respuesta...',
      placeholder: 'Haz una pregunta sobre proyectos, stack o experiencia...',
      suggestedPrompts: [
        '¿Cuál es su proyecto insignia con agentes?',
        '¿Qué experiencia tiene en Java, C# y Python?',
        '¿Cómo crea páginas web usando IA?',
        '¿Cómo puedo ponerme en contacto con jliel?',
      ],
    },
    footer: {
      role: 'Software Engineer & AI Agent Architect',
      designSystem: 'Estética Cyber Minimalista (RNF-01)',
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
      all: 'Full Overview',
      hero: 'Home',
      projects: 'Projects & Agents',
      skills: 'Stack & Skills',
      about: 'About & Philosophy',
      contact: 'Contact',
    },
    hero: {
      statusBadge: 'AI-POWERED WEB DEV // AI AGENTS SPECIALIST',
      titleStart: 'Software Engineering, AI Web Creation & ',
      titleAccent: 'Intelligent Agents',
      subtitle: 'I engineer web and desktop solutions by merging background in Java, C#, TypeScript, Python, and JavaScript with autonomous AI agent architectures to automate complex workflows.',
      ctaAgent: 'Query My Agent',
      ctaProjects: 'View Projects',
      githubLabel: 'github/jliel',
      terminalTitle: 'agent_runtime.py',
      terminalInit: '> initializing orchestrator_agent...',
      terminalAgentRole: '[AGENT: WebCrafter]',
      terminalAgentMsg: '"Analyzing user specifications: synthesizing accessible landing page, React components and live validation sandbox."',
      terminalToolsTitle: '[TOOLS: Gemini 2.5 + LangGraph + AST Linter]',
      terminalToolsMsg: '"Generation completed in 210ms. 0 syntax errors. Code ready for live preview."',
      terminalStatus: 'status: waiting for instructions in interactive chat',
    },
    projects: {
      badge: 'PORTFOLIO // AGENTS & REAL EXPERIENCE',
      title: 'Featured Projects & Agentic Architectures',
      subtitle: 'Combining my real software engineering foundations (TypeScript, Python, C#, React) with production-ready AI agent systems.',
      flagshipBadge: '★ FLAGSHIP PROJECT (RECOMMENDED AGENT)',
      repoLabel: 'View code on GitHub',
      demoLabel: 'Try live demo',
      architectureLabel: 'Architecture & Flow',
      recommendedHeader: 'Why this Agent Project?',
      recommendedNotice: 'This project directly connects my current work (building websites with AI) with a verifiable, robust multi-agent architecture.',
      items: [
        {
          id: 'webcrafter-agent',
          title: 'WebCrafter Studio: Multi-Agent Web Builder',
          description: 'An autonomous multi-agent studio that receives natural language requirements, plans a Cyber Minimalist UI design system, writes React 19 + Tailwind code, verifies A11y accessibility, and deploys an interactive live preview.',
          tags: ['LangGraph', 'Python', 'React 19', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
          architectureDetails: 'Supervisor Agent -> UX Specifier -> React Coder Agent -> A11y Validator -> Sandbox Runner.',
          repoUrl: 'https://github.com/jliel/portafolioAi',
          highlight: true,
        },
        {
          id: 'shopping-cart-ai',
          title: 'ShoppingCart & Inventory Intelligence',
          description: 'Modern TypeScript e-commerce application with scalable state management, product catalog, and a pipeline for smart recommendations and semantic item search.',
          tags: ['TypeScript', 'React', 'State Management', 'Vite', 'REST API'],
          architectureDetails: 'Decoupled modular architecture with strict TypeScript types and recommendation agent integration.',
          repoUrl: 'https://github.com/jliel/ShoppingCart',
        },
        {
          id: 'enterprise-csharp-asp',
          title: 'ASP.NET & C# Service Backend Suite',
          description: 'Enterprise backend solutions developed in C# and ASP.NET with service-oriented architecture, relational persistence, and high-performance endpoints for web and desktop applications.',
          tags: ['C#', '.NET', 'ASP.NET', 'SQL', 'N-Tier Architecture'],
          architectureDetails: 'RESTful controllers, dependency injection, Entity Framework, and strong data contracts.',
          repoUrl: 'https://github.com/jliel/learning_asp',
        },
        {
          id: 'python-vision-ml',
          title: 'Python Neural Networks & Vision Processing (PDI)',
          description: 'Digital image processing modules and neural network models implemented in Python for morphological filtering, pattern classification, and mathematical matrix computation.',
          tags: ['Python', 'Machine Learning', 'Computer Vision', 'NumPy', 'Algorithms'],
          architectureDetails: 'Vectorized NumPy pipelines and custom multilayer perceptron with backpropagation training.',
          repoUrl: 'https://github.com/jliel/red_neuronal',
        },
        {
          id: 'pet-registry-react',
          title: 'PetRegistry & Reactive Record Manager',
          description: 'Responsive record management system with a mobile-first approach, real-time dynamic form validation, and optimized client-side state persistence.',
          tags: ['TypeScript', 'React', 'Mobile First', 'Tailwind', 'Form Validation'],
          architectureDetails: 'Controlled components, custom reusable hooks, and optimistic UI updates.',
          repoUrl: 'https://github.com/jliel/PetRegistry',
        },
        {
          id: 'cs50-foundations',
          title: 'Computer Science Core & Algorithm Engineering',
          description: 'Implementation of fundamental computer science data structures (trees, graphs, hash tables), manual memory management, and algorithm optimization.',
          tags: ['C', 'Python', 'SQL', 'Data Structures', 'CS50'],
          architectureDetails: 'Low time-complexity algorithmic design O(n log n) and comprehensive test cases.',
          repoUrl: 'https://github.com/jliel/cs50_projects',
        },
      ],
    },
    skills: {
      badge: 'TECHNICAL STACK // POLYGLOT & AGENTS',
      title: 'Engineering Skills & Technologies',
      subtitle: 'Strong foundation in statically typed languages (Java, C#, TS), dynamic languages (Python, JS), and modern autonomous AI agent frameworks.',
      categories: [
        {
          title: 'Programming Languages (Web & Desktop)',
          skills: [
            { name: 'Python (FastAPI, AsyncIO, AI SDKs)', level: 'Advanced' },
            { name: 'TypeScript / JavaScript (ESNext, React)', level: 'Advanced' },
            { name: 'C# / .NET (Backend & Desktop Apps)', level: 'Intermediate - Advanced' },
            { name: 'Java (OOP, Algorithms, Core Software)', level: 'Intermediate - Advanced' },
            { name: 'SQL (PostgreSQL, SQLite, Complex Queries)', level: 'Advanced' },
          ],
        },
        {
          title: 'AI Agent Ecosystem & LLMs',
          skills: [
            { name: 'LangGraph & LangChain (Graph Orchestration)', level: 'Advanced' },
            { name: 'CrewAI (Multi-Agent Role-Playing Systems)', level: 'Advanced' },
            { name: 'Google Gemini API (Flash, Pro, Function Calling)', level: 'Advanced' },
            { name: 'RAG Pipelines (ChromaDB / Qdrant Vector DBs)', level: 'Advanced' },
            { name: 'Structured Prompting & Zod/Pydantic Validations', level: 'Expert' },
          ],
        },
        {
          title: 'AI Web Building & Modern Frontend',
          skills: [
            { name: 'AI-Powered Web Generation & Agentic Iteration', level: 'Expert' },
            { name: 'React 19 / Vite (TypeScript)', level: 'Advanced' },
            { name: 'Tailwind CSS (Cyber Minimalist & Accessible Design)', level: 'Expert' },
            { name: 'Responsive & Mobile-First Design', level: 'Advanced' },
            { name: 'Web Accessibility (WCAG 2.1 AA / AAA)', level: 'Advanced' },
          ],
        },
        {
          title: 'Backend, Architecture & Tooling',
          skills: [
            { name: 'FastAPI / Node.js / Express', level: 'Advanced' },
            { name: 'ASP.NET Core Web APIs', level: 'Intermediate' },
            { name: 'Git, GitHub Actions & CI/CD Pipelines', level: 'Advanced' },
            { name: 'Docker & Containerized Environments', level: 'Intermediate' },
            { name: 'Computer Science Foundations (CS50)', level: 'Solid' },
          ],
        },
      ],
    },
    about: {
      badge: 'PROFILE // AUTHENTIC JOURNEY',
      name: 'jliel',
      role: 'Software Engineer & AI Agent Developer',
      bio: 'Software developer with solid experience across Java, C#, TypeScript, JavaScript, and Python in both web and desktop environments. I am currently dedicated to building high-converting websites using Artificial Intelligence while delving deeply into autonomous AI agent architecture to take assisted engineering to the next level.',
      locationLabel: 'Location:',
      locationVal: 'Remote / Global',
      focusLabel: 'Specialty:',
      focusVal: 'AI Web Creation & Autonomous Agents',
      availableLabel: 'Availability:',
      availableVal: 'Immediate for projects',
      headline: 'From Classical Software Engineering to Autonomous Agents',
      cards: [
        {
          title: 'Proven Polyglot Experience',
          description: 'Experience in Java and C# instilled architectural discipline and strict typing that I directly transfer to TypeScript and Python projects.',
        },
        {
          title: 'AI-Accelerated Web Engineering',
          description: 'Currently delivering modern websites with AI assistance, achieving rapid turnaround times, responsive layouts, and clean code.',
        },
        {
          title: 'Real Multi-Agent Architectures',
          description: 'Beyond single prompts: I build workflows where multiple specialized agents collaborate, critique each other, invoke tools, and correct errors in closed loops.',
        },
        {
          title: 'Algorithms & Systems Foundations',
          description: 'My background in CS50 projects and computer science fundamentals allows me to optimize latency, token efficiency, and system scalability.',
        },
      ],
    },
    contact: {
      badge: 'CONNECTION // AVAILABILITY',
      title: 'Ready to build something intelligent together?',
      subtitle: 'Whether you want to build cutting-edge web applications, automate internal workflows with AI agents, or hire a versatile engineer, let us talk.',
      sendEmail: 'Send Email',
      copied: 'Copied!',
      copyEmail: 'Copy Email',
      askAgent: 'Ask My Agent',
      github: 'github.com/jliel',
    },
    agent: {
      title: 'jliel-Agent',
      online: 'ONLINE',
      subtitle: 'Interactive autonomous agent',
      welcomeMsg: 'Hello! I am jliel-Agent. I know all about jliel’s software experience in Java, C#, TypeScript, Python, his current work creating websites with AI, and his transition into autonomous multi-agent systems. What would you like to explore?',
      typing: 'Agent is reasoning response...',
      placeholder: 'Ask about projects, stack, or experience...',
      suggestedPrompts: [
        'What is your flagship AI agent project?',
        'What is your background in Java, C# and Python?',
        'How do you build websites with AI?',
        'How can I get in touch with jliel?',
      ],
    },
    footer: {
      role: 'Software Engineer & AI Agent Architect',
      designSystem: 'Cyber Minimalist Design System (RNF-01)',
      rights: 'All rights reserved',
    },
  },
};
