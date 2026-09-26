import { User, CheckCircle2, ShieldCheck, Zap, Compass } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 text-left">
            <div className="rounded-2xl border border-cyber-border bg-cyber-surface p-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-accent/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-16 h-16 rounded-xl bg-cyber-bg border border-cyber-border flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-cyber-accent" />
              </div>

              <h3 className="text-2xl font-bold text-cyber-text tracking-tight mb-2">
                jliel
              </h3>
              <p className="text-xs font-mono text-cyber-accent mb-4">
                AI Agent Engineer &amp; Full Stack Developer
              </p>
              
              <p className="text-sm text-cyber-text-muted leading-relaxed mb-6">
                Especializado en diseñar sistemas donde la inteligencia artificial va más allá de un simple chatbot:
                construyo entidades de software capaces de razonar, planificar, ejecutar código de manera segura y coordinarse en equipo para resolver problemas complejos.
              </p>

              <div className="space-y-3 font-mono text-xs border-t border-cyber-border pt-4">
                <div className="flex items-center justify-between text-cyber-text">
                  <span className="text-cyber-text-muted">Ubicación:</span>
                  <span>Remoto / Global</span>
                </div>
                <div className="flex items-center justify-between text-cyber-text">
                  <span className="text-cyber-text-muted">Enfoque:</span>
                  <span className="text-cyber-accent">Multi-Agent Systems</span>
                </div>
                <div className="flex items-center justify-between text-cyber-text">
                  <span className="text-cyber-text-muted">Disponibilidad:</span>
                  <span>Inmediata</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-accent">
                <Compass className="w-4 h-4" />
                <span>FILOSOFÍA // INGENIERÍA DE AGENTES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text tracking-tight">
                De Modelos Predictivos a Agentes Proactivos
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-cyber-border bg-cyber-surface space-y-2">
                <div className="flex items-center gap-2 font-bold text-cyber-text text-sm">
                  <Zap className="w-4 h-4 text-cyber-accent" />
                  <span>Razonamiento Determinista</span>
                </div>
                <p className="text-xs text-cyber-text-muted leading-relaxed">
                  Diseño de grafos de estados y esquemas tipados (Pydantic / Zod) que garantizan salidas estructuradas y trazabilidad completa.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-cyber-border bg-cyber-surface space-y-2">
                <div className="flex items-center gap-2 font-bold text-cyber-text text-sm">
                  <ShieldCheck className="w-4 h-4 text-cyber-accent" />
                  <span>Seguridad &amp; Sandboxing</span>
                </div>
                <p className="text-xs text-cyber-text-muted leading-relaxed">
                  Ejecución controlada de herramientas y entornos aislados para evitar fugas de datos y ejecuciones no autorizadas.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-cyber-border bg-cyber-surface space-y-2">
                <div className="flex items-center gap-2 font-bold text-cyber-text text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyber-accent" />
                  <span>Auto-Reflexión (Critique)</span>
                </div>
                <p className="text-xs text-cyber-text-muted leading-relaxed">
                  Implementación de bucles de auto-corrección donde los agentes evalúan su propio código o respuesta antes de emitir un resultado final.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-cyber-border bg-cyber-surface space-y-2">
                <div className="flex items-center gap-2 font-bold text-cyber-text text-sm">
                  <Zap className="w-4 h-4 text-cyber-accent" />
                  <span>RAG Semántico Avanzado</span>
                </div>
                <p className="text-xs text-cyber-text-muted leading-relaxed">
                  Estrategias de enrutamiento contextual, compresión de contexto e indexación jerárquica para eliminar alucinaciones.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
