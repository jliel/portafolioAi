# Portafolio Profesional de Desarrollador - Juan Antonio (jliel)

Este documento recopila y organiza los requerimientos, especificaciones, arquitectura y roadmap para la construcción del portafolio profesional de **Juan Antonio (jliel)**, enfocado en **Desarrollo de Software**, **Soluciones Web y de Escritorio**, **Patrones de Diseño** y **Buenas Prácticas de Ingeniería**, mencionando su proceso de aprendizaje continuo en **Inteligencia Artificial**.

---

## 1. Perfil Profesional & Experiencia Real Verificada
- **Identidad:** Juan Antonio Baez Carlos (`jliel`)
  - **GitHub:** [https://github.com/jliel](https://github.com/jliel)
  - **Correo:** `kiritobaz@gmail.com`
  - **Idiomas:** Español (Nativo) e Inglés (Avanzado / Profesional).
- **Rol:** Desarrollador de Software // Web y Escritorio.
- **Competencias Técnicas Reales:**
  - **Dominio de Lenguajes:**
    - **TypeScript / JavaScript:** React 19, componentes reactivos, estado, Vite (`ShoppingCart`, `PetRegistry`, `notes-react`, `react-form-basis`).
    - **Python:** Scripts, lógica de datos, APIs, machine learning y procesamiento de imágenes (`red_neuronal`, `PDI`, `api_restaurante`, `todos_app`).
    - **C# / .NET:** Servicios backend y aplicaciones de escritorio (`learning_asp`, APIs con ASP.NET).
    - **Java:** Programación orientada a objetos (POO), herencia, polimorfismo, algoritmos y software base.
    - **SQL:** Consultas relacionales, modelado y persistencia (PostgreSQL, SQLite).
  - **Ingeniería de Software & Arquitectura:**
    - Conocimiento y aplicación práctica de **Patrones de Diseño** (Singleton, Factory, Observer, etc.).
    - Principios de **Arquitectura de Software** (separación de responsabilidades, diseño por capas, MVC, modularidad).
    - **Documentación Técnica:** Experiencia documentando proyectos universitarios de software (especificaciones de requerimientos, diagramas de arquitectura y manuales de usuario/técnicos).
  - **Inteligencia Artificial:**
    - Uso de herramientas de IA en el flujo de trabajo web.
    - Actualmente aprendiendo y explorando de forma activa el desarrollo con modelos y agentes de IA.

---

## 2. Proyectos Reales en Showcase
Se presentan exclusivamente proyectos reales y verificables en su cuenta de GitHub:
1. **ShoppingCart (TypeScript & React):** Aplicación e-commerce con gestión desacoplada de estado y tipado estricto.
2. **PetRegistry (Frontend / Mobile-First):** Sistema de administración y formularios controlados con validación reactiva en tiempo real.
3. **Servicios Backend en C# y ASP.NET:** Desarrollo de servicios backend con inyección de dependencias y controladores RESTful.
4. **Red Neuronal & Procesamiento Digital de Imágenes (Python):** Cálculos matriciales vectorizados con NumPy y modelos matemáticos.
5. **Fundamentos de Algoritmia & Ciencias de la Computación (CS50):** Estructuras de datos (árboles, tablas hash, listas) y optimización de complejidad temporal y memoria.
6. **Notes & Form Foundation (React + TS):** Componentes modulares reutilizables y manejo predecible de eventos.

---

## 3. Requerimientos Funcionales Implementados

### 3.1. Secciones y Estructura
- [x] **Hero / Presentación:** Titular enfocado en Desarrollo de Software (Web y Escritorio), terminal técnica y botones directos a proyectos y asistente virtual.
- [x] **Showcase de Proyectos:** 6 proyectos reales de GitHub con tags técnicos, detalles arquitectónicos y enlaces a sus repositorios.
- [x] **Asistente Virtual del Portafolio (`jliel-Assistant`):**
  - Chat interactivo modal y flotante.
  - Base de conocimiento bilingüe adaptada a su experiencia real (Java, C#, TS, Python, patrones de diseño, documentación, nivel de inglés y aprendizaje de IA).
- [x] **Habilidades & Competencias:** Clasificadas en Lenguajes Dominados, Ingeniería de Software & Arquitectura, Desarrollo Web & Frontend, y Aprendizaje Activo & Idiomas.
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
