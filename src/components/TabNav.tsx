import { Layers, Sparkles, Terminal, User, Mail, Grid } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface TabItem {
  id: string;
  label: string;
  icon: typeof Terminal;
}

interface TabNavProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const TabNav = ({ activeTab, onSelectTab }: TabNavProps) => {
  const { t } = useLanguage();

  const tabs: TabItem[] = [
    { id: 'all', label: t.tabs.all, icon: Grid },
    { id: 'hero', label: t.tabs.hero, icon: Terminal },
    { id: 'proyectos', label: t.tabs.projects, icon: Sparkles },
    { id: 'habilidades', label: t.tabs.skills, icon: Layers },
    { id: 'sobre-mi', label: t.tabs.about, icon: User },
    { id: 'contacto', label: t.tabs.contact, icon: Mail },
  ];

  return (
    <div className="w-full bg-cyber-bg border-b border-cyber-border py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto p-1 bg-cyber-surface rounded-xl border border-cyber-border">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-cyber-accent text-cyber-accent-contrast shadow-sm font-bold'
                    : 'text-cyber-text-muted hover:text-cyber-text hover:bg-cyber-bg'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-cyber-text-muted">
          <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
          <span>TRANSIBIÓN DIRECCIONAL ACTIVADA // VISTA REACTIVA</span>
        </div>
      </div>
    </div>
  );
};
