import { Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-cyber-bg border-t border-cyber-border text-xs font-mono text-cyber-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-cyber-accent" />
          <span>jliel // AI Agent &amp; Software Engineer</span>
        </div>

        <div className="flex items-center gap-1 text-[11px]">
          <span>Diseño Cyber Minimalista</span>
          <span className="text-cyber-border px-1">•</span>
          <span>React 19 + Vite + Tailwind CSS</span>
        </div>

        <div>
          <span>© {new Date().getFullYear()} Todos los derechos reservados</span>
        </div>

      </div>
    </footer>
  );
};
