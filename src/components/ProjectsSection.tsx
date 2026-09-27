import { ExternalLink, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-20 border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-accent">
            <Cpu className="w-4 h-4" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyber-text tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-cyber-text-muted text-base max-w-3xl">
            {t.projects.subtitle}
          </p>
        </div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project) => (
            <article
              key={project.id}
              className={`rounded-xl border ${
                project.highlight
                  ? 'border-cyber-accent shadow-md bg-cyber-surface/90'
                  : 'border-cyber-border bg-cyber-surface'
              } p-6 flex flex-col justify-between hover:border-cyber-accent transition-all duration-200 group text-left`}
            >
              <div className="space-y-4">
                {/* Highlight Badge */}
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[11px] rounded px-2.5 py-0.5 border ${
                    project.highlight
                      ? 'bg-cyber-accent text-cyber-accent-contrast font-bold border-cyber-accent'
                      : 'text-cyber-accent border-cyber-border bg-cyber-bg'
                  }`}>
                    {project.highlight ? t.projects.flagshipBadge : 'GITHUB SHOWCASE'}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-text-muted hover:text-cyber-accent transition-colors p-1"
                        aria-label={`${t.projects.repoLabel}: ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-text-muted hover:text-cyber-accent transition-colors p-1"
                        aria-label={`${t.projects.demoLabel}: ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-cyber-text-muted leading-relaxed">
                  {project.description}
                </p>

                {project.architectureDetails && (
                  <div className="text-xs font-mono text-cyber-text-muted/90 bg-cyber-bg p-2.5 rounded border border-cyber-border flex items-start gap-2">
                    <Layers className="w-3.5 h-3.5 text-cyber-accent shrink-0 mt-0.5" />
                    <span>{project.architectureDetails}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="pt-6 mt-4 border-t border-cyber-border flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
