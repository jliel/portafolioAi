# Portafolio Profesional de Desarrollador - Especializado en Agentes de IA

Este documento recopila y organiza los requerimientos, especificaciones, arquitectura y roadmap para la construcción del portafolio profesional de **jliel**, enfocado en **Ingeniería de Software**, **Creación Web con Inteligencia Artificial** y **Arquitectura de Agentes de IA**.

---

## 1. Perfil Profesional & Trayectoria Real (Ground Truth)
- **Desarrollador:** `jliel` (GitHub: [github.com/jliel](https://github.com/jliel) | Correo: `kiritobaz@gmail.com`).
- **Enfoque Actual:** Creación de páginas web de alto impacto y conversión utilizando Inteligencia Artificial, adentrándose de forma especializada en el diseño e implementación de **Agentes de IA Autónomos**.
- **Stack & Lenguajes con Experiencia Comprobada (Web & Escritorio):**
  - **Python:** Machine learning, redes neuronales (`red_neuronal`), procesamiento digital de imágenes (`PDI`), APIs con FastAPI / Django (`api_restaurante`, `todos_app`).
  - **TypeScript & JavaScript:** Aplicaciones web completas en React 19, Vite, formularios reactivos (`ShoppingCart`, `PetRegistry`, `notes-react`, `react-form-basis`, `FlashCards`).
  - **C# / .NET:** Desarrollo de servicios backend y software de escritorio (`learning_asp`, APIs RESTful con ASP.NET).
  - **Java:** Fundamentos sólidos de programación orientada a objetos (POO), algoritmos y arquitectura de software.
  - **Ciencias de la Computación:** Algoritmia, estructuras de datos y gestión de memoria (Harvard CS50 - `cs50_projects`).

---

## 2. Proyecto con Agentes Recomendado: "WebCrafter Studio"
### 2.1. Justificación y Propuesta de Valor
- **¿Por qué este proyecto?** Une directamente la actividad actual de jliel (*creación de sitios web con IA*) con la disciplina de la *ingeniería de agentes de IA*. En lugar de ser un simple generador de texto, es un **equipo autónomo multi-agente** que planifica, codifica, valida sintaxis/accesibilidad y genera un preview ejecutable.
- **Demuestra habilidad técnica real:**
  - Orquestación con **LangGraph** (Python) o **Antigravity SDK**.
  - Bucle de retroalimentación cerrada (Reflexión y Crítica): si el linter o validador A11y detecta un fallo, el agente programador lo repara antes de entregarlo.
  - Generación de código tipado (React 19 + Tailwind CSS) y sandboxing.

### 2.2. Arquitectura del Agente Recomendado
1. **Supervisor Agent (Orquestador):** Recibe el prompt o especificación del usuario (ej. *"landing page para startup de logística con modo oscuro y formulario de contacto"*).
2. **UX & Architecture Specifier Agent:** Define la jerarquía de secciones, tokens de diseño Cyber Minimalistas y componentes requeridos.
3. **React Coder Agent:** Genera el código TypeScript y Tailwind modular.
4. **A11y & Linter Critic Agent:** Analiza el código con reglas de contraste (WCAG AA/AAA), atributos semánticos ARIA y sintaxis válida.
5. **Sandbox Runner / Live Preview:** Monta el iframe interactivo con Vite o un bundle en memoria para que el usuario interactúe con el sitio generado.

---

## 3. Requerimientos Funcionales Implementados

### 3.1. Navegación & Estructura
- [x] **Hero / Presentación:** Titular centrado en ingeniería de software, creación web con IA y agentes autónomos; terminal interactiva simulada y CTAs de acción directa.
- [x] **Showcase de Proyectos:**
  - Proyecto insignia: **WebCrafter Studio (Multi-Agent Web Builder)**.
  - Proyectos reales de GitHub: `ShoppingCart` (TypeScript/React), `ASP.NET Backend Suite` (C#), `Neural Networks & PDI` (Python), `PetRegistry` (Mobile-First), `CS50 Algorithms` (C/Python/SQL).
- [x] **Agente de IA Embebido (`jliel-Agent`):**
  - Chat interactivo modal y flotante.
  - Base de conocimiento bilingüe (ES / EN) sobre experiencia en Java, C#, TS, Python, proyectos y contacto.
  - Chips de consulta rápida.
- [x] **Habilidades & Competencias:** Clasificadas en Lenguajes (Java, C#, TS, JS, Python), Ecosistema de Agentes, Creación Web con IA y Backend/DevOps.
- [x] **Sobre Mí & Filosofía:** Principios de ingeniería agéntica (razonamiento determinista, sandboxing, autorreflexión).
- [x] **Contacto Directo:** Correo `kiritobaz@gmail.com` con botón de copia rápida y enlace a GitHub.

---

## 4. Requerimientos No Funcionales

### RNF-01: Sistema de Diseño y Paleta de Colores (Cyber Minimalista)
- **Modo Oscuro (Por defecto):** Fondo `#121212`, Superficies `#242424`, Texto `#E0E0E0`, Acento `#00FF66` (Verde Lima Eléctrico).
- **Modo Claro (Alternativo):** Fondo `#F9FAFB`, Superficies `#FFFFFF` (borde `#E5E7EB`), Texto `#111827`, Acento `#059669` (Verde Matriz).
- **Variables CSS & A11y:** Ratio de contraste >= 4.5:1 (WCAG AA/AAA), script anti-FOUC en `index.html`.

### RNF-02: Soporte Bilingüe (Internacionalización - ES / EN)
- [x] Selector de idioma dinámico en la barra de navegación (`ES` / `EN`).
- [x] Traducción completa de todas las secciones, proyectos, tarjetas técnicas y respuestas del agente conversacional.
- [x] Persistencia en `localStorage` y detección inicial del idioma del navegador.

### RNF-03: Transición de Deslizamiento Direccional entre Pestañas
- [x] Barra de pestañas (`TabNav`) para alternar entre *Vista Completa*, *Inicio*, *Proyectos*, *Habilidades*, *Sobre Mí* y *Contacto*.
- [x] Efecto de deslizamiento direccional: al avanzar a una pestaña posterior, el contenido se desliza desde la derecha (`tab-slide-forward`); al retroceder, desde la izquierda (`tab-slide-backward`).
- [x] Compatible con la API nativa de `document.startViewTransition()` con degradación elegante y respeto por `prefers-reduced-motion`.

---

## 5. Stack Tecnológico
- **Frontend Core:** React 19 + TypeScript + Vite 8
- **Estilos:** Tailwind CSS v4 con variables CSS temáticas + Lucide Icons
- **Gestión de Idioma:** React Context (`LanguageProvider` con tipado estricto)
- **Despliegue Continuo:** GitHub Pages con GitHub Actions (`.github/workflows/deploy.yml`)
- **Repositorio:** [https://github.com/jliel/portafolioAi.git](https://github.com/jliel/portafolioAi.git)
