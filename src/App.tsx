import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { TabNav } from './components/TabNav';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiChatAgent } from './components/AiChatAgent';

const TAB_ORDER = ['all', 'hero', 'proyectos', 'habilidades', 'sobre-mi', 'contacto'];

function PortfolioContent() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [slideDirection, setSlideDirection] = useState<'tab-slide-forward' | 'tab-slide-backward'>('tab-slide-forward');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSelectTab = (newTabId: string) => {
    if (newTabId === activeTab) return;

    const oldIndex = TAB_ORDER.indexOf(activeTab);
    const newIndex = TAB_ORDER.indexOf(newTabId);
    const direction = newIndex >= oldIndex ? 'tab-slide-forward' : 'tab-slide-backward';

    // View Transitions API support if available
    const updateDOM = () => {
      setSlideDirection(direction);
      setActiveTab(newTabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(updateDOM);
    } else {
      updateDOM();
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text flex flex-col selection:bg-cyber-accent selection:text-cyber-accent-contrast">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Quick Tabs Nav with sliding support */}
      <TabNav
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Main View Area with Directional Slide Transition */}
      <main className="flex-1 overflow-hidden">
        {activeTab === 'all' && (
          <div className="space-y-0 tab-slide-forward">
            <Hero
              onOpenChat={() => setIsChatOpen(true)}
              onNavigateToProjects={() => handleSelectTab('proyectos')}
            />
            <ProjectsSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection onOpenChat={() => setIsChatOpen(true)} />
          </div>
        )}

        {activeTab === 'hero' && (
          <div key="hero" className={slideDirection}>
            <Hero
              onOpenChat={() => setIsChatOpen(true)}
              onNavigateToProjects={() => handleSelectTab('proyectos')}
            />
          </div>
        )}

        {activeTab === 'proyectos' && (
          <div key="proyectos" className={slideDirection}>
            <ProjectsSection />
          </div>
        )}

        {activeTab === 'habilidades' && (
          <div key="habilidades" className={slideDirection}>
            <SkillsSection />
          </div>
        )}

        {activeTab === 'sobre-mi' && (
          <div key="sobre-mi" className={slideDirection}>
            <AboutSection />
          </div>
        )}

        {activeTab === 'contacto' && (
          <div key="contacto" className={slideDirection}>
            <ContactSection onOpenChat={() => setIsChatOpen(true)} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating / Modal AI Chat Agent */}
      <AiChatAgent
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(prev => !prev)}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
