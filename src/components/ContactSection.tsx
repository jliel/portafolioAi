import { useState } from 'react';
import { Mail, Check, Copy, Send, MessageSquare } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onOpenChat: () => void;
}

export const ContactSection = ({ onOpenChat }: ContactSectionProps) => {
  const [copied, setCopied] = useState(false);
  const email = 'kiritobaz@gmail.com';
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-20 border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-accent">
            <Mail className="w-4 h-4" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text tracking-tight">
            {t.contact.title}
          </h2>

          <p className="text-cyber-text-muted text-base max-w-xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {/* Email button */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold uppercase tracking-wider bg-cyber-accent text-cyber-accent-contrast hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyber-accent"
            >
              <Send className="w-4 h-4" />
              <span>{t.contact.sendEmail}</span>
            </a>

            {/* Copy email */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-sm font-medium border border-cyber-border bg-cyber-surface text-cyber-text hover:border-cyber-accent transition-colors cursor-pointer"
              aria-label="Copiar correo electrónico al portapapeles"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-cyber-accent" />
                  <span className="text-cyber-accent font-bold">{t.contact.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{email}</span>
                </>
              )}
            </button>

            {/* Chatbot button */}
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-sm font-medium border border-cyber-border bg-cyber-surface text-cyber-text hover:border-cyber-accent transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-cyber-accent" />
              <span>{t.contact.askAgent}</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="pt-8 flex items-center justify-center gap-6 text-sm font-mono text-cyber-text-muted">
            <a
              href="https://github.com/jliel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-cyber-accent transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{t.contact.github}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
