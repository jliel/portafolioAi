# Portafolio Profesional de Desarrollador - Juan Antonio (jliel)

Este documento recopila y organiza los requerimientos, especificaciones, arquitectura y roadmap para la construcción del portafolio profesional de **Juan Antonio (jliel)**, enfocado en **Ingeniería de Software**, **Creación Web con Inteligencia Artificial** y **Desarrollo de Agentes de IA**.

---

## 1. Perfil Profesional & Experiencia Real Verificada
- **Identidad:** Juan Antonio Baez Carlos (`jliel`)
  - **GitHub:** [https://github.com/jliel](https://github.com/jliel)
  - **Correo:** `kiritobaz@gmail.com`
  - **Idiomas:** Español (Nativo) e Inglés (Avanzado / Profesional).
- **Actividad Actual:** Creación y maquetación de páginas web profesionales aprovechando herramientas de Inteligencia Artificial, adentrándose con rigor técnico en el ecosistema de **Agentes de IA**.
- **Competencias Técnicas Reales:**
  - **Dominio de Lenguajes:** Conoce a profundidad la sintaxis, buenas prácticas y paradigmas de los lenguajes que utiliza:
    - **TypeScript / JavaScript:** React 19, componentes reactivos, estado, Vite (`ShoppingCart`, `PetRegistry`, `notes-react`, `react-form-basis`).
    - **Python:** Scripts, lógica de datos, APIs, machine learning y procesamiento de imágenes (`red_neuronal`, `PDI`, `api_restaurante`, `todos_app`).
    - **C# / .NET:** Servicios backend y aplicaciones de escritorio (`learning_asp`, APIs con ASP.NET).
    - **Java:** Programación orientada a objetos (POO), herencia, polimorfismo y algoritmos.
    - **SQL:** Consultas relacionales, modelado y persistencia (PostgreSQL, SQLite).
  - **Ingeniería de Software & Arquitectura:**
    - Conocimiento y aplicación de **Patrones de Diseño** clásicos (Singleton, Factory, Observer, etc.).
    - Principios de **Arquitectura de Software** (separación de responsabilidades, MVC, diseño por capas, modularidad).
    - **Documentación Técnica:** Experiencia documentando proyectos universitarios (especificaciones de requerimientos, diagramas de arquitectura y manuales técnicos).
  - **Agentes de IA (Enfoque Honesto):**
    - En proceso de aprendizaje y especialización práctica.
    - Manejo de APIs de LLMs (Gemini, Claude, OpenAI), Structured Outputs, y diseño de flujos estructurados de trabajo agéntico sin inflar credenciales artificiales.

---

## 2. Proyecto con Agentes Recomendado: "WebCrafter Studio"
### 2.1. Justificación y Propuesta de Valor Realista
- **¿Por qué este proyecto?** Se alinea exactamente con su trabajo actual (*creación de sitios web con IA*) pero lo formaliza mediante una arquitectura estructurada y demostrable. En lugar de fingir años de experiencia en agentes, este proyecto demuestra cómo un desarrollador con bases sólidas en software puede diseñar un sistema de agentes funcional.
- **Flujo del Sistema:**
  1. **Supervisor / Planificador:** Recibe la descripción de la web a construir y genera la especificación de componentes.
  2. **Generador de Componentes (React + Tailwind):** Escribe el código tipado en TypeScript.
  3. **Revisor de Accesibilidad y Sintaxis:** Evalúa el código antes de mostrar el resultado en un visor interactivo.

---

## 3. Requerimientos Funcionales Implementados

### 3.1. Secciones y Estructura
- [x] **Hero / Presentación:** Mensaje transparente sobre su experiencia en software, creación web con IA y evolución hacia agentes; terminal de perfil técnico y llamadas a la acción directas.
- [x] **Showcase de Proyectos:**
  - Proyecto agéntico objetivo: **WebCrafter Studio**.
  - Proyectos reales de GitHub: `ShoppingCart` (TypeScript), `PetRegistry` (Mobile-First), `learning_asp` (C#), `red_neuronal` / `PDI` (Python), `cs50_projects` (Algoritmia y Ciencias de la Computación).
- [x] **Asistente Virtual del Portafolio (`jliel-Agent`):**
  - Chat interactivo modal y flotante.
  - Base de conocimiento bilingüe adaptada a su experiencia real (Java, C#, TS, Python, patrones de diseño, documentación, nivel de inglés).
  - Chips de preguntas sugeridas.
- [x] **Habilidades & Competencias:** Clasificadas en Lenguajes Dominados, Ingeniería de Software & Buenas Prácticas, Creación Web con IA, y Agentes & Idiomas.
- [x] **Sobre Mí & Trayectoria:** Detalle del enfoque en código limpio, patrones de diseño, documentación y perfil bilingüe.
- [x] **Contacto Directo:** Correo `kiritobaz@gmail.com` con botón de copia rápida y enlace a GitHub.

---

## 4. Requerimientos No Funcionales

### RNF-01: Sistema de Diseño y Paleta de Colores (Cyber Minimalista)
- **Modo Oscuro (Por defecto):** Fondo `#121212`, Superficies `#242424`, Texto `#E0E0E0`, Acento `#00FF66` (Verde Lima Eléctrico).
- **Modo Claro (Alternativo):** Fondo `#F9FAFB`, Superficies `#FFFFFF` con borde `#E5E7EB`, Texto `#111827`, Acento `#059669` (Verde Matriz).
- **Variables CSS & A11y:** Contraste WCAG AA/AAA, script anti-FOUC y soporte de modo claro/oscuro dinámico.

### RNF-02: Soporte Bilingüe Completo (Español Nativo / Inglés Avanzado)
- [x] Selector dinámico `ES` / `EN` en la barra de navegación con persistencia en `localStorage`.
- [x] Traducción completa de textos, badges, botones y respuestas del asistente virtual.

### RNF-03: Transición de Deslizamiento Direccional entre Pestañas
- [x] Barra de pestañas (`TabNav`) para alternar entre *Vista Completa*, *Inicio*, *Proyectos*, *Habilidades*, *Sobre Mí* y *Contacto*.
- [x] Animación de deslizamiento direccional en CSS (`tab-slide-forward` / `tab-slide-backward`) según el orden de navegación.
- [x] Soporte para la API nativa `startViewTransition` y respeto por `prefers-reduced-motion`.

---

## 5. Stack Tecnológico
- **Frontend Core:** React 19 + TypeScript + Vite 8
- **Estilos:** Tailwind CSS v4 + Lucide Icons
- **Internacionalización:** React Context (`LanguageProvider`)
- **Control de Versiones & CI/CD:** Git, GitHub (`https://github.com/jliel/portafolioAi.git`) y GitHub Actions para GitHub Pages.
