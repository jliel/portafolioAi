import type { ReactNode } from 'react';
import { Terminal, Cpu, Database, Layout } from 'lucide-react';
import type { SkillCategory } from '../types';

const SKILL_CATEGORIES: (SkillCategory & { icon: ReactNode })[] = [
  {
    title: 'Frameworks de Agentes & Orquestación',
    icon: <Cpu className="w-5 h-5 text-cyber-accent" />,
    skills: [
      { name: 'LangGraph / LangChain', level: 'Avanzado' },
      { name: 'CrewAI (Multi-Agent Systems)', level: 'Avanzado' },
      { name: 'AutoGen & Microsoft Agents', level: 'Intermedio' },
      { name: 'LlamaIndex (Advanced RAG)', level: 'Avanzado' },
      { name: 'Antigravity Agent SDK', level: 'Avanzado' },
    ]
  },
  {
    title: 'Modelos de Lenguaje & APIs',
    icon: <Terminal className="w-5 h-5 text-cyber-accent" />,
    skills: [
      { name: 'Google Gemini (Flash, Pro, Live)', level: 'Avanzado' },
      { name: 'Anthropic Claude (Sonnet, Opus)', level: 'Avanzado' },
      { name: 'OpenAI (GPT-4o, Realtime API)', level: 'Avanzado' },
      { name: 'Modelos Locales (Ollama, vLLM)', level: 'Intermedio' },
      { name: 'Function Calling & Structured Outputs', level: 'Experto' },
    ]
  },
  {
    title: 'Backend, Vector DBs & Infraestructura',
    icon: <Database className="w-5 h-5 text-cyber-accent" />,
    skills: [
      { name: 'Python (AsyncIO, Pydantic)', level: 'Avanzado' },
      { name: 'FastAPI / REST / WebSockets', level: 'Avanzado' },
      { name: 'Vector DBs (ChromaDB, Qdrant, Pinecone)', level: 'Avanzado' },
      { name: 'Docker / Sandboxing / Contenedores', level: 'Intermedio' },
      { name: 'SQL & Cache (PostgreSQL, Redis)', level: 'Avanzado' },
    ]
  },
  {
    title: 'Frontend & Interfaces Interactivas',
    icon: <Layout className="w-5 h-5 text-cyber-accent" />,
    skills: [
      { name: 'React 19 / TypeScript', level: 'Avanzado' },
      { name: 'Vite / Bundlers modernos', level: 'Avanzado' },
      { name: 'Tailwind CSS (Sistemas de Diseño)', level: 'Experto' },
      { name: 'Streaming UI (Server-Sent Events)', level: 'Avanzado' },
      { name: 'Accesibilidad Web (A11y WCAG AA/AAA)', level: 'Avanzado' },
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-accent">
            <Terminal className="w-4 h-4" />
            <span>STACK // COMPETENCIAS TÉCNICAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text tracking-tight">
            Habilidades &amp; Tecnologías
          </h2>
          <p className="text-cyber-text-muted text-base max-w-2xl">
            Dominio de herramientas para todo el ciclo de vida de productos agénticos, desde el modelo fundacional hasta la interfaz de usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-cyber-border bg-cyber-surface p-6 space-y-4 hover:border-cyber-accent transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyber-bg border border-cyber-border">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-cyber-text text-base sm:text-lg">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2.5 pt-2 font-mono text-xs">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center justify-between p-2 rounded bg-cyber-bg border border-cyber-border text-cyber-text"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[11px] text-cyber-accent font-semibold px-2 py-0.5 rounded bg-cyber-surface">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
