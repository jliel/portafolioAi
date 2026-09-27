import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw } from 'lucide-react';
import type { ChatMessage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AiChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

// Base de conocimiento autónoma bilingüe
function generateAgentResponse(query: string, lang: 'es' | 'en'): string {
  const q = query.toLowerCase();

  if (lang === 'en') {
    if (q.includes('flagship') || q.includes('project') || q.includes('agent') || q.includes('webcrafter')) {
      return 'jliel’s flagship agent project is **WebCrafter Studio: Multi-Agent Web Builder**:\n\n- **Purpose:** Bridges his current AI web generation work with autonomous multi-agent engineering.\n- **Orchestration:** Built with LangGraph & Python. Features a Supervisor Agent, UX Specifier, React Coder, and an A11y Validator in closed feedback loops.\n- **Outcome:** Generates accessible, responsive React 19 + Tailwind web apps with live sandboxed previews.\n\nHe also has real-world projects in TypeScript (`ShoppingCart`, `PetRegistry`), C# (`learning_asp`), and Python (`red_neuronal`, `cs50_projects`).';
    }

    if (q.includes('java') || q.includes('c#') || q.includes('python') || q.includes('stack') || q.includes('desktop') || q.includes('experience')) {
      return 'jliel has a strong polyglot background:\n\n- **Languages:** Java (OOP, algorithmics), C# (.NET, desktop & backend APIs), TypeScript / JavaScript (React 19, web apps), Python (AI agent frameworks, ML & vision).\n- **Agent Frameworks:** LangGraph, CrewAI, AutoGen, LlamaIndex, Google Gemini API.\n- **Web with AI:** Currently builds high-performance websites using AI workflows, optimizing UX, responsiveness, and clean code.';
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('github')) {
      return 'You can reach jliel directly:\n- **Email:** kiritobaz@gmail.com\n- **GitHub:** https://github.com/jliel\n- **Project Repository:** https://github.com/jliel/portafolioAi\n\nHe is ready for new engineering challenges and consulting!';
    }

    return `I received your question about "${query}". As jliel's autonomous agent, I can confirm he merges classical software engineering (Java, C#, Python, TS) with modern AI web building and multi-agent workflows. What specific topic would you like to explore further?`;
  }

  // Spanish answers
  if (q.includes('insignia') || q.includes('proyecto') || q.includes('agente') || q.includes('webcrafter')) {
    return 'El proyecto insignia con agentes de jliel es **WebCrafter Studio: Multi-Agent Web Builder**:\n\n- **Propósito:** Conecta directamente su labor actual de creación web con IA con una arquitectura multi-agente rigurosa.\n- **Orquestación:** Desarrollado con LangGraph y Python. Incluye un Supervisor Agent, Especificador UX, Programador React y Validador A11y en bucle de retroalimentación cerrada.\n- **Resultado:** Generación de código React 19 + Tailwind accesible y ejecutable en sandbox con vista previa en vivo.\n\nAdemás cuenta con repositorios reales en GitHub como `ShoppingCart`, `PetRegistry`, backend en C# (`learning_asp`) y redes neuronales en Python (`red_neuronal`).';
  }

  if (q.includes('java') || q.includes('c#') || q.includes('python') || q.includes('stack') || q.includes('escritorio') || q.includes('experiencia')) {
    return 'jliel cuenta con un perfil técnico políglota y versátil:\n\n- **Lenguajes:** Java (orientación a objetos y algoritmos), C# (.NET, software de escritorio y APIs), TypeScript/JavaScript (React 19, desarrollo web moderno), Python (agentes de IA, machine learning y visión computacional).\n- **Ecosistema de Agentes:** LangGraph, CrewAI, AutoGen, LlamaIndex, Gemini API, ChromaDB.\n- **Creación Web con IA:** Actualmente crea sitios web aprovechando herramientas de IA, garantizando código limpio, diseño adaptativo y alta conversión.';
  }

  if (q.includes('contacto') || q.includes('correo') || q.includes('email') || q.includes('github') || q.includes('contratar')) {
    return 'Puedes contactar directamente a jliel en:\n- **Correo electrónico:** kiritobaz@gmail.com\n- **GitHub:** https://github.com/jliel\n- **Repositorio:** https://github.com/jliel/portafolioAi\n\n¡Está disponible de inmediato para proyectos y colaboraciones técnicas!';
  }

  return `Comprendo tu inquietud sobre "${query}". Como asistente de jliel, te comparto que une la solidez del desarrollo de software tradicional (Java, C#, Python, TypeScript) con la innovación de creación web con IA y agentes autónomos. ¿Deseas saber más sobre sus proyectos, stack o formas de contacto?`;
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
    }, 550);
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
        aria-label="Abrir asistente de IA / Open AI Assistant"
        title={t.nav.aiAgent}
      >
        <div className="relative">
          <Bot className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
        </div>
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="AI Chat Agent Window"
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
