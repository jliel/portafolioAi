import { User, CheckCircle2, ShieldCheck, Zap, Compass, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CARD_ICONS = [
  <Zap className="w-4 h-4 text-cyber-accent" />,
  <Compass className="w-4 h-4 text-cyber-accent" />,
  <ShieldCheck className="w-4 h-4 text-cyber-accent" />,
  <CheckCircle2 className="w-4 h-4 text-cyber-accent" />,
];

export const AboutSection = () => {
  const { t } = useLanguage();

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

              <h3 className="text-2xl font-bold text-cyber-text tracking-tight mb-1">
                {t.about.name}
              </h3>
              <p className="text-xs font-mono text-cyber-accent mb-4">
                {t.about.role}
              </p>
              
              <p className="text-sm text-cyber-text-muted leading-relaxed mb-6">
                {t.about.bio}
              </p>

              <div className="space-y-3 font-mono text-xs border-t border-cyber-border pt-4">
                <div className="flex items-center justify-between text-cyber-text">
                  <span className="text-cyber-text-muted">{t.about.locationLabel}</span>
                  <span>{t.about.locationVal}</span>
                </div>
                <div className="flex items-center justify-between text-cyber-text">
                  <span className="text-cyber-text-muted flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyber-accent" />
                    <span>{t.about.languagesLabel}</span>
                  </span>
                  <span className="text-cyber-text font-medium">{t.about.languagesVal}</span>
                </div>
                <div className="flex items-center justify-between text-cyber-text">
                  <span className="text-cyber-text-muted">{t.about.focusLabel}</span>
                  <span className="text-cyber-accent font-semibold">{t.about.focusVal}</span>
                </div>
                <div className="flex items-center justify-between text-cyber-text">
                  <span className="text-cyber-text-muted">{t.about.availableLabel}</span>
                  <span>{t.about.availableVal}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-accent">
                <Compass className="w-4 h-4" />
                <span>{t.about.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text tracking-tight">
                {t.about.headline}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-cyber-border bg-cyber-surface space-y-2 hover:border-cyber-accent transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-cyber-text text-sm">
                    {CARD_ICONS[idx % CARD_ICONS.length]}
                    <span>{card.title}</span>
                  </div>
                  <p className="text-xs text-cyber-text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
