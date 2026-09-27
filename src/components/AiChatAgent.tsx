import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw } from 'lucide-react';
import type { ChatMessage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AiChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

// Base de conocimiento del asistente del portafolio
function generateAgentResponse(query: string, lang: 'es' | 'en'): string {
  const q = query.toLowerCase();

  if (lang === 'en') {
    if (q.includes('project') || q.includes('shopping') || q.includes('pet') || q.includes('repo')) {
      return 'Juan Antonio has developed several real-world projects available on GitHub:\n\n1. **ShoppingCart (TypeScript & React):** Decoupled state management, modular components, and strict typing.\n2. **PetRegistry (Mobile-First):** Controlled responsive form architecture with real-time validation.\n3. **C# & ASP.NET Backend Services:** Layered architecture, RESTful API design, and dependency injection.\n4. **Neural Networks & Image Processing (Python):** Matrix pipelines and mathematical models in NumPy.\n5. **CS50 Computer Science Foundations:** Data structures (linked lists, trees, hash tables) and algorithm complexity analysis.';
    }

    if (q.includes('java') || q.includes('c#') || q.includes('python') || q.includes('stack') || q.includes('desktop') || q.includes('experience')) {
      return 'Juan Antonio has verified programming competence across:\n\n- **Languages:** Java (OOP, algorithms, core software design), C# (.NET, desktop and backend services), TypeScript / JavaScript (React 19, web apps), Python (scripting, data logic), and SQL.\n- **Software Engineering:** Solid grasp of classic design patterns (Singleton, Factory, Observer), layered architecture, and university project documentation.\n- **AI Exploration:** He uses AI tools to assist his web workflows and is currently actively learning and exploring AI integrations.';
    }

    if (q.includes('pattern') || q.includes('architecture') || q.includes('document')) {
      return 'He actively uses classic design patterns (Singleton, Factory, Observer, etc.) and architectural separation of concerns (MVC, layers, modular components). In addition, he has experience producing technical documentation for university software projects (SRS specifications, architecture diagrams, user manuals).';
    }

    if (q.includes('english') || q.includes('spanish') || q.includes('language')) {
      return 'Juan Antonio is fully bilingual: Native Spanish speaker and Advanced / Professional in English (fluent reading of technical documentation, writing, and engineering communication).';
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('github')) {
      return 'You can contact Juan Antonio directly:\n- **Email:** kiritobaz@gmail.com\n- **GitHub:** https://github.com/jliel\n\nHe is open to software engineering, web development, and desktop application opportunities!';
    }

    return `I received your question about "${query}". Juan Antonio is a software developer with verified skills in Java, C#, TypeScript, Python, design patterns, clean architecture, and technical documentation, and is currently working on learning AI. What specific topic would you like to know more about?`;
  }

  // Spanish answers
  if (q.includes('proyecto') || q.includes('shopping') || q.includes('pet') || q.includes('repositorio')) {
    return 'Juan Antonio cuenta con proyectos reales verificables en su GitHub:\n\n1. **ShoppingCart (TypeScript & React):** Gestión desacoplada de estado, componentes modulares y tipado estricto.\n2. **PetRegistry (Mobile-First):** Arquitectura de formularios controlados con validación en tiempo real.\n3. **Servicios Backend en C# y ASP.NET:** Arquitectura por capas, controladores RESTful e inyección de dependencias.\n4. **Red Neuronal & Visión Computacional (Python):** Procesamiento digital de imágenes y cálculos matriciales con NumPy.\n5. **Algoritmia y CS50:** Estructuras de datos (árboles, tablas hash, listas) y análisis de complejidad algorítmica.';
  }

  if (q.includes('java') || q.includes('c#') || q.includes('python') || q.includes('stack') || q.includes('escritorio') || q.includes('experiencia')) {
    return 'Juan Antonio tiene un dominio sólido y comprobado en:\n\n- **Lenguajes:** Java (orientación a objetos, algoritmos, software base), C# (.NET, aplicaciones de escritorio y servicios backend), TypeScript / JavaScript (React 19, web moderna), Python (scripts, lógica de datos) y SQL.\n- **Ingeniería de Software:** Aplicación práctica de patrones de diseño (Singleton, Factory, Observer), arquitectura limpia y documentación técnica de proyectos universitarios.\n- **Inteligencia Artificial:** Aprovecha herramientas de IA en su flujo web y se encuentra aprendiendo y explorando activamente la integración con IA.';
  }

  if (q.includes('patron') || q.includes('patrones') || q.includes('arquitectura') || q.includes('document')) {
    return 'Aplica patrones de diseño clásicos (Singleton, Factory, Observer, etc.) y principios de arquitectura de software (separación de responsabilidades, modularidad, diseño en capas). Además, cuenta con experiencia documentando proyectos universitarios de software mediante especificaciones técnicas y diagramas.';
  }

  if (q.includes('ingles') || q.includes('español') || q.includes('idioma')) {
    return 'Es completamente bilingüe: Español como lengua materna (Nativo) e Inglés a nivel Avanzado / Profesional (lectura fluida de documentación técnica, redacción y comunicación profesional).';
  }

  if (q.includes('contacto') || q.includes('correo') || q.includes('email') || q.includes('github') || q.includes('contratar')) {
    return 'Puedes comunicarte directamente con Juan Antonio:\n- **Correo electrónico:** kiritobaz@gmail.com\n- **GitHub:** https://github.com/jliel\n\n¡Está disponible para proyectos de software, desarrollo web y nuevos retos técnicos!';
  }

  return `Comprendo tu consulta sobre "${query}". Juan Antonio es un desarrollador de software con dominio comprobado en Java, C#, TypeScript, Python, patrones de diseño, arquitectura limpia, documentación técnica y actualmente aprendiendo sobre IA. ¿Te gustaría conocer más sobre sus proyectos, habilidades o contacto?`;
}

export const AiChatAgent = ({ isOpen, onClose }: AiChatAgentProps) => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize or re-initialize welcome message on language change
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'agent',
        text: t.agent.welcomeMsg,
        timestamp: language === 'en' ? 'Now' : 'Ahora',
      }
    ]);
  }, [language, t.agent.welcomeMsg]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAgentResponse(messageText, language);
      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 500);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'agent',
        text: t.agent.welcomeMsg,
        timestamp: language === 'en' ? 'Now' : 'Ahora',
      }
    ]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onClose}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-cyber-accent text-cyber-accent-contrast shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-cyber-accent/50 group cursor-pointer"
        aria-label="Abrir asistente virtual / Open assistant"
        title={t.nav.aiAgent}
      >
        <div className="relative">
          <Bot className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyber-accent rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyber-accent rounded-full" />
        </div>
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio Virtual Assistant"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[440px] h-[590px] max-h-[85vh] rounded-2xl border border-cyber-border bg-cyber-surface shadow-2xl flex flex-col overflow-hidden text-left font-sans"
    >
      {/* Header */}
      <div className="p-4 border-b border-cyber-border bg-cyber-bg/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center">
            <Bot className="w-4 h-4 text-cyber-accent" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-cyber-text">{t.agent.title}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyber-surface border border-cyber-border text-cyber-accent">
                {t.agent.online}
              </span>
            </div>
            <p className="text-[11px] text-cyber-text-muted">{t.agent.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-cyber-text-muted hover:text-cyber-accent hover:bg-cyber-surface transition-colors cursor-pointer"
            title="Reset"
            aria-label="Reset chat"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-cyber-text-muted hover:text-cyber-accent hover:bg-cyber-surface transition-colors cursor-pointer"
            title="Close"
            aria-label="Close chat window"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl p-3 leading-relaxed whitespace-pre-line ${
                msg.sender === 'user'
                  ? 'bg-cyber-accent text-cyber-accent-contrast font-medium'
                  : 'bg-cyber-bg border border-cyber-border text-cyber-text'
              }`}
            >
              {msg.text}
            </div>
            <span className="text-[10px] font-mono text-cyber-text-muted mt-1 px-1">
              {msg.timestamp}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-cyber-bg border border-cyber-border max-w-[75%]">
            <Sparkles className="w-3.5 h-3.5 text-cyber-accent animate-spin" />
            <span className="text-cyber-text-muted font-mono text-[11px]">{t.agent.typing}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested quick chips */}
      <div className="px-3 py-2 border-t border-cyber-border bg-cyber-bg/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {t.agent.suggestedPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            disabled={isTyping}
            className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-full border border-cyber-border bg-cyber-surface text-cyber-text hover:border-cyber-accent hover:text-cyber-accent transition-colors disabled:opacity-50 cursor-pointer"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 border-t border-cyber-border bg-cyber-surface flex items-center gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.agent.placeholder}
          className="flex-1 bg-cyber-bg border border-cyber-border rounded-lg px-3 py-2 text-xs text-cyber-text placeholder:text-cyber-text-muted focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent font-mono"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="p-2 rounded-lg bg-cyber-accent text-cyber-accent-contrast disabled:opacity-40 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyber-accent cursor-pointer"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
