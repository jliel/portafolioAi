# Portafolio Profesional de Desarrollador - Especializado en Agentes de IA

Este documento recopila y organiza los requerimientos, especificaciones, arquitectura y roadmap para la construcción de tu portafolio profesional centrado en desarrollo de software y soluciones con **Agentes de Inteligencia Artificial**.

---

## 1. Visión General del Proyecto
- **Objetivo:** Mostrar tu perfil técnico, experiencia, proyectos destacados y capacidades en el desarrollo de arquitecturas basadas en IA / Agentes inteligentes de forma interactiva y moderna.
- **Público Objetivo:** Reclutadores técnicos, líderes de ingeniería, clientes de consultoría y otros desarrolladores/colaboradores.

---

## 2. Requerimientos Funcionales

### 2.1. Secciones Principales
- [x] **Hero / Presentación:** 
  - Nombre (`jliel`), título/rol profesional y propuesta de valor enfocada en Agentes de IA.
  - Llamadas a la acción (CTA): Contactar, Descargar CV, Probar demo interactiva del agente.
- [x] **Proyectos Destacados (Showcase):**
  - Fichas interactivas de proyectos con agentes autónomos, flujos multi-agente, integraciones con LLMs, RAG, etc.
  - Enlaces a demos en vivo, repositorios en GitHub y diagramas de arquitectura.
- [x] **Agente Interactivo en el Portafolio (Demo Integrada / Embebido):**
  - Un asistente virtual o agente conversacional incrustado en la web que responda dudas sobre tu experiencia, proyectos y habilidades en tiempo real.
  - Soporte de interfaz de chat moderna (chips de preguntas frecuentes, simulación de razonamiento agéntico).
- [x] **Habilidades y Stack Tecnológico:**
  - Frameworks de IA & Agentes (LangChain, LangGraph, CrewAI, AutoGen, LlamaIndex, Antigravity SDK).
  - Modelos y APIs (Gemini, Claude, OpenAI, modelos locales/Ollama).
  - Desarrollo frontend y backend (React, TypeScript, Tailwind CSS, Python, FastAPI, Node.js).
  - Bases de datos vectoriales y orquestación.
- [x] **Sobre Mí / Trayectoria:**
  - Filosofía de desarrollo, trayectoria, principios de ingeniería de agentes (razonamiento, seguridad, autorreflexión).
- [x] **Contacto / Redes:**
  - Canales directos: correo (`kiritobaz@gmail.com`), GitHub (`https://github.com/jliel`), opción de consultar al agente.

---

## 3. Requerimientos No Funcionales

### RNF-01: Sistema de Diseño y Paleta de Colores (Cyber Minimalista)
La interfaz de usuario debe implementar un sistema de paleta de colores adaptable (Modo Oscuro y Modo Claro) basado en la estética "Cyber Minimalista". Los colores deben garantizar un contraste adecuado para la accesibilidad web.

#### 1.1. Modo Oscuro (Tema por defecto)
* **Fondo Principal (`#121212` - Carbón Profundo):** Uso exclusivo para el fondo global de la aplicación (`body`) y secciones de descanso visual.
* **Superficies (`#242424` - Gris Pizarra):** Uso destinado a contenedores de nivel superior, incluyendo tarjetas de proyectos, barras de navegación lateral/superior y modales.
* **Texto Principal (`#E0E0E0` - Blanco Humo):** Uso obligatorio para tipografía general (párrafos, listas y descripciones) para minimizar la fatiga visual.
* **Color de Acento (`#00FF66` - Verde Lima Eléctrico):** Uso estrictamente restringido a elementos interactivos primarios (botones *Call to Action*, enlaces, estados de *hover*, contornos de *focus* en inputs e indicadores de progreso).

#### 1.2. Modo Claro (Tema alternativo)
* **Fondo Principal (`#F9FAFB` - Gris Nube):** Uso para el fondo global de la aplicación para evitar el deslumbramiento de un blanco puro.
* **Superficies (`#FFFFFF` - Blanco Puro):** Uso en contenedores de proyectos y tarjetas, requiriendo un borde sutil (`#E5E7EB`) o sombra ligera para separarlos del fondo.
* **Texto Principal (`#111827` - Gris Asfalto):** Uso para tipografía general, asegurando un índice de contraste alto (WCAG AAA) sobre el fondo claro.
* **Color de Acento (`#059669` - Verde Matriz):** Variante oscurecida del verde lima original, obligatoria en modo claro para asegurar la legibilidad del texto e iconos superpuestos.

#### 1.3. Restricciones de Implementación
* **Gestión de Estados:** Los colores deben definirse globalmente mediante variables CSS (Custom Properties) para permitir la transición dinámica sin recargar la página.
* **Integración de Estilos:** La paleta debe registrarse en el archivo de configuración del framework de estilos (ej. extendiendo el tema en `src/index.css` con `@theme`) para mantener un uso centralizado en todos los componentes.
* **Accesibilidad (A11y):** Las combinaciones de texto y fondo, así como texto sobre botones de acento, deben cumplir con un ratio de contraste mínimo de 4.5:1 (Nivel AA de las WCAG 2.1).

### Otros Requerimientos No Funcionales
- **Rendimiento y Carga Rápida:** Optimización de assets, lazy loading y carga ultrarrápida (Core Web Vitals con Vite).
- **Diseño Responsivo:** Adaptación fluida a dispositivos móviles, tablets y monitores de escritorio.
- **Seguridad en el Agente de IA:** Protección de API keys, limitación de tasa (rate limiting) y manejo seguro de tokens en la demo conversacional.

---

## 4. Stack Tecnológico Definido
- **Frontend Core:** React 19 + Vite + TypeScript
- **Estilos & UI:** Tailwind CSS v4 (configurado con variables CSS para el sistema Cyber Minimalista) + Lucide Icons
- **Agente de IA Embebido:** Chat widget interactivo (`jliel-Agent`) con base de conocimiento, simulación de razonamiento agéntico y diseño Cyber Minimalista
- **Control de Versiones:** Git & GitHub (`https://github.com/jliel/portafolioAi.git`)
- **Despliegue Objetivo:** GitHub Pages

---

## 5. Estado de Implementación
1. [x] Inicializar la estructura del proyecto con **Vite + React (TypeScript)** dentro del repositorio.
2. [x] Instalar y configurar **Tailwind CSS** con la paleta de colores **Cyber Minimalista** (variables CSS para Modo Oscuro por defecto y Modo Claro).
3. [x] Diseñar e implementar la estructura modular de componentes (`Navbar`, `Hero`, `ProjectsSection`, `SkillsSection`, `AboutSection`, `ContactSection`, `Footer`).
4. [x] Desarrollar el **Agente de IA embebido (`AiChatAgent`)** con chips de consulta rápida, simulación de razonamiento y respuestas sobre jliel.
5. [ ] Configurar despliegue automatizado en GitHub Pages (GitHub Actions workflow).
