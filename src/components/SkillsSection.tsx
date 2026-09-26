import { Terminal, Cpu, Database, Layout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICONS = [
  <Terminal className="w-5 h-5 text-cyber-accent" />,
  <Cpu className="w-5 h-5 text-cyber-accent" />,
  <Layout className="w-5 h-5 text-cyber-accent" />,
  <Database className="w-5 h-5 text-cyber-accent" />,
];

export const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="habilidades" className="py-20 border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-accent">
            <Terminal className="w-4 h-4" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-cyber-text-muted text-base max-w-2xl">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {t.skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-cyber-border bg-cyber-surface p-6 space-y-4 hover:border-cyber-accent transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyber-bg border border-cyber-border">
                  {ICONS[idx % ICONS.length]}
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
