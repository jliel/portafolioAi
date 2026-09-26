import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') === 'light';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.setAttribute('data-theme', 'light');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight(prev => !prev)}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyber-border bg-cyber-surface text-cyber-text hover:border-cyber-accent focus:outline-none focus:ring-2 focus:ring-cyber-accent transition-colors text-xs font-mono"
      aria-label={isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      title={isLight ? 'Modo Oscuro' : 'Modo Claro'}
    >
      {isLight ? (
        <>
          <Moon className="w-4 h-4 text-cyber-accent" />
          <span>MODO: OSCURO</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4 text-cyber-accent" />
          <span>MODO: CLARO</span>
        </>
      )}
    </button>
  );
};
