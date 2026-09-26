import { useState } from 'react';
import { Bot, Terminal, Menu, X, Languages } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenChat: () => void;
}

export const Navbar = ({ activeTab, onSelectTab, onOpenChat }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const navLinks = [
    { id: 'hero', label: t.tabs.hero },
    { id: 'proyectos', label: t.nav.projects },
    { id: 'habilidades', label: t.nav.skills },
    { id: 'sobre-mi', label: t.nav.about },
    { id: 'contacto', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyber-border bg-cyber-surface/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => onSelectTab('hero')}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-md bg-cyber-bg border border-cyber-border flex items-center justify-center group-hover:border-cyber-accent transition-colors">
            <Terminal className="w-4 h-4 text-cyber-accent" />
          </div>
          <span className="font-mono font-bold tracking-tight text-cyber-text text-sm sm:text-base">
            jliel<span className="text-cyber-accent">.agent</span>
          </span>
        </button>

        {/* Desktop Nav Tabs with Active Indicator */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium bg-cyber-bg/60 p-1 rounded-lg border border-cyber-border">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onSelectTab(link.id)}
                className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyber-surface text-cyber-accent border border-cyber-border shadow-xs font-bold'
                    : 'text-cyber-text-muted hover:text-cyber-text hover:bg-cyber-surface/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions: Language Toggle + Theme Toggle + AI Agent button */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-cyber-border bg-cyber-surface text-cyber-text hover:border-cyber-accent text-xs font-mono transition-colors cursor-pointer"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label="Cambiar idioma / Toggle language"
          >
            <Languages className="w-3.5 h-3.5 text-cyber-accent" />
            <span className="font-bold">{language.toUpperCase()}</span>
          </button>

          <ThemeToggle />

          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider bg-cyber-accent text-cyber-accent-contrast hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyber-accent cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            <span>{t.nav.aiAgent}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-1.5 rounded-lg border border-cyber-border text-xs font-mono font-bold text-cyber-accent"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-cyber-border text-cyber-text hover:border-cyber-accent"
            aria-label={t.nav.openMenu}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-cyber-border bg-cyber-surface px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onSelectTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left block text-sm font-mono py-2 px-3 rounded-lg ${
                activeTab === link.id
                  ? 'bg-cyber-bg text-cyber-accent border border-cyber-border font-bold'
                  : 'text-cyber-text hover:bg-cyber-bg'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-cyber-border">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider bg-cyber-accent text-cyber-accent-contrast"
            >
              <Bot className="w-4 h-4" />
              <span>{t.nav.aiAgent}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
