import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiChatAgent } from './components/AiChatAgent';

export function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text flex flex-col selection:bg-cyber-accent selection:text-cyber-accent-contrast">
      {/* Top Navigation */}
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection onOpenChat={() => setIsChatOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive AI Agent Drawer/Modal & Floating Button */}
      <AiChatAgent
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(prev => !prev)}
      />
    </div>
  );
}

export default App;
