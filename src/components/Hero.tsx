import { Bot, ArrowRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero = ({ onOpenChat }: HeroProps) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-cyber-border">
      {/* Background cyber grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--cyber-text) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Call to action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-border bg-cyber-surface text-xs font-mono text-cyber-text">
              <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
              <span>SISTEMA ACTIVO // ENFOCADO EN AGENTES DE IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cyber-text leading-[1.1]">
              Ingeniería de Software &amp; Arquitectura de{' '}
              <span className="text-cyber-accent">Agentes Autónomos</span>
            </h1>

            <p className="text-base sm:text-lg text-cyber-text-muted max-w-2xl leading-relaxed">
              Diseño e implemento flujos multi-agente, sistemas de razonamiento autónomo, 
              pipelines RAG y soluciones inteligentes que automatizan procesos complejos de ingeniería.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold uppercase tracking-wider bg-cyber-accent text-cyber-accent-contrast shadow-sm hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyber-accent"
              >
                <Bot className="w-4 h-4" />
                <span>Interrogar a mi Agente</span>
                <Sparkles className="w-3.5 h-3.5 ml-1" />
              </button>

              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium border border-cyber-border bg-cyber-surface text-cyber-text hover:border-cyber-accent transition-colors"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/jliel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-cyber-border bg-cyber-surface text-cyber-text hover:border-cyber-accent transition-colors text-sm"
                aria-label="Perfil de GitHub de jliel"
              >
                <GithubIcon className="w-5 h-5 text-cyber-accent" />
                <span className="font-mono text-xs hidden sm:inline">github/jliel</span>
              </a>
            </div>
          </div>

          {/* Right Column: Cyber Agent Terminal Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-cyber-border bg-cyber-surface overflow-hidden shadow-xl text-left font-mono text-xs">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 border-b border-cyber-border bg-cyber-bg/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-cyber-accent" />
                  <span className="ml-2 text-cyber-text-muted text-[11px]">agent_runtime.py</span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-cyber-text-muted" />
              </div>

              {/* Code / Agent Log simulation */}
              <div className="p-4 space-y-2.5 overflow-x-auto">
                <div className="text-cyber-text-muted flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-cyber-accent" />
                  <span>&gt; initializing multi_agent_team...</span>
                </div>
                
                <div className="p-2.5 rounded bg-cyber-bg border border-cyber-border text-cyber-text space-y-1">
                  <p className="text-cyber-accent font-semibold">[AGENT: Orchestrator]</p>
                  <p className="text-cyber-text-muted">&quot;Plan validado: 3 sub-agentes asignados a investigación, análisis y síntesis de código.&quot;</p>
                </div>

                <div className="p-2.5 rounded bg-cyber-bg border border-cyber-border text-cyber-text space-y-1">
                  <p className="text-cyber-accent font-semibold">[TOOLS: Gemini 2.5 / Vector Store]</p>
                  <p className="text-cyber-text-muted">&quot;Latencia: 180ms | Búsqueda semántica completada con 99.4% precisión.&quot;</p>
                </div>

                <div className="pt-2 text-[11px] text-cyber-accent flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-3 bg-cyber-accent animate-pulse" />
                  <span>status: esperando instrucciones en el chat interactivo</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
