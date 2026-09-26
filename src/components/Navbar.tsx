import { useState } from 'react';
import { Bot, Terminal, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar = ({ onOpenChat }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyber-border bg-cyber-surface/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-cyber-bg border border-cyber-border flex items-center justify-center group-hover:border-cyber-accent transition-colors">
            <Terminal className="w-4 h-4 text-cyber-accent" />
          </div>
          <span className="font-mono font-bold tracking-tight text-cyber-text text-sm sm:text-base">
            jliel<span className="text-cyber-accent">.agent</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#proyectos" className="text-cyber-text hover:text-cyber-accent transition-colors">
            Proyectos
          </a>
          <a href="#habilidades" className="text-cyber-text hover:text-cyber-accent transition-colors">
            Habilidades
          </a>
          <a href="#sobre-mi" className="text-cyber-text hover:text-cyber-accent transition-colors">
            Sobre Mí
          </a>
          <a href="#contacto" className="text-cyber-text hover:text-cyber-accent transition-colors">
            Contacto
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider bg-cyber-accent text-cyber-accent-contrast hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyber-accent"
          >
            <Bot className="w-4 h-4" />
            <span>Agente IA</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-cyber-border text-cyber-text hover:border-cyber-accent"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-cyber-border bg-cyber-surface px-4 py-4 space-y-3">
          <a
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-cyber-text hover:text-cyber-accent py-1"
          >
            Proyectos
          </a>
          <a
            href="#habilidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-cyber-text hover:text-cyber-accent py-1"
          >
            Habilidades
          </a>
          <a
            href="#sobre-mi"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-cyber-text hover:text-cyber-accent py-1"
          >
            Sobre Mí
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-cyber-text hover:text-cyber-accent py-1"
          >
            Contacto
          </a>
          <div className="pt-2 border-t border-cyber-border">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider bg-cyber-accent text-cyber-accent-contrast"
            >
              <Bot className="w-4 h-4" />
              <span>Abrir Agente IA</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
