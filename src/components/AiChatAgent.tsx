import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw } from 'lucide-react';
import type { ChatMessage } from '../types';

interface AiChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome',
    sender: 'agent',
    text: '¡Hola! Soy jliel-Agent, el asistente autónomo de este portafolio. Estoy aquí para responder preguntas sobre la experiencia técnica de jliel, sus proyectos de IA agéntica, arquitectura de software o cómo ponerte en contacto. ¿Sobre qué te gustaría indagar?',
    timestamp: 'Ahora'
  }
];

const SUGGESTED_PROMPTS = [
  '¿Qué proyectos con agentes ha desarrollado?',
  '¿Cuál es su stack técnico principal?',
  '¿Cómo está construido este portafolio?',
  '¿Cómo puedo contactar a jliel?'
];

// Base de conocimiento autónoma del agente
function generateAgentResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('proyecto') || q.includes('agente') || q.includes('desarrollado')) {
    return 'jliel se especializa en arquitecturas agénticas avanzadas. Entre sus proyectos clave destacan:\n\n1. **Multi-Agent Code Auditor:** Orquestación con LangGraph donde agentes especializados analizan seguridad, rendimiento y tests de código.\n2. **Autonomous Research Agent:** Agente con loop ReAct, navegación web autónoma y memoria vectorial con ChromaDB.\n3. **Enterprise Contextual RAG:** Asistente con búsqueda híbrida densa/esparsa y reranking para soporte de operaciones.\n\nPuedes ver más detalles en la sección de Proyectos.';
  }

  if (q.includes('stack') || q.includes('tecnología') || q.includes('herramienta') || q.includes('lenguaje')) {
    return 'El stack principal de jliel comprende:\n- **Agentes & IA:** LangGraph, CrewAI, AutoGen, LlamaIndex, Gemini API, Claude API, OpenAI.\n- **Backend & Datos:** Python (FastAPI, AsyncIO), TypeScript, ChromaDB, Qdrant, PostgreSQL, Docker.\n- **Frontend:** React 19, Vite, TypeScript, Tailwind CSS con sistemas de diseño accesibles.';
  }

  if (q.includes('portafolio') || q.includes('construido') || q.includes('diseño') || q.includes('cyber')) {
    return 'Este portafolio está construido con **React + Vite + TypeScript** y **Tailwind CSS**. Sigue la especificación de diseño **Cyber Minimalista (RNF-01)**:\n- Modo Oscuro por defecto (fondo #121212, acento #00FF66).\n- Modo Claro alternativo (fondo #F9FAFB, acento #059669).\n- Cumplimiento de accesibilidad WCAG AA/AAA y variables CSS dinámicas.';
  }

  if (q.includes('contacto') || q.includes('correo') || q.includes('email') || q.includes('github') || q.includes('contratar')) {
    return 'Puedes ponerte en contacto directo con jliel a través de:\n- **Correo electrónico:** kiritobaz@gmail.com\n- **GitHub:** https://github.com/jliel\n- **Repositorio del proyecto:** https://github.com/jliel/portafolioAi\n\n¡Está disponible para nuevos retos y colaboraciones técnicas!';
  }

  return `Entiendo tu consulta sobre "${query}". Como agente de jliel, te comento que cuenta con amplia experiencia diseñando flujos cognitivos, integración de LLMs y automatización inteligente con Python y TypeScript. ¿Te gustaría saber más sobre sus proyectos, stack o formas de contacto?`;
}

export const AiChatAgent = ({ isOpen, onClose }: AiChatAgentProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

    // Simular tiempo de inferencia y respuesta agéntica fluida
    setTimeout(() => {
      const responseText = generateAgentResponse(messageText);
      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onClose}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-cyber-accent text-cyber-accent-contrast shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-cyber-accent/50 group cursor-pointer"
        aria-label="Abrir asistente de IA"
        title="Chatear con el Agente de IA"
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
      aria-label="Ventana de chat con el Agente de IA"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] rounded-2xl border border-cyber-border bg-cyber-surface shadow-2xl flex flex-col overflow-hidden text-left font-sans"
    >
      {/* Header */}
      <div className="p-4 border-b border-cyber-border bg-cyber-bg/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center">
            <Bot className="w-4 h-4 text-cyber-accent" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-cyber-text">jliel-Agent</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyber-surface border border-cyber-border text-cyber-accent">
                ONLINE
              </span>
            </div>
            <p className="text-[11px] text-cyber-text-muted">Asistente agéntico interactivo</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-cyber-text-muted hover:text-cyber-accent hover:bg-cyber-surface transition-colors cursor-pointer"
            title="Reiniciar conversación"
            aria-label="Reiniciar conversación"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-cyber-text-muted hover:text-cyber-accent hover:bg-cyber-surface transition-colors cursor-pointer"
            title="Cerrar chat"
            aria-label="Cerrar ventana de chat"
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
          <div className="flex items-center gap-2 p-3 rounded-xl bg-cyber-bg border border-cyber-border max-w-[70%]">
            <Sparkles className="w-3.5 h-3.5 text-cyber-accent animate-spin" />
            <span className="text-cyber-text-muted font-mono text-[11px]">Agente razonando respuesta...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested quick chips */}
      <div className="px-3 py-2 border-t border-cyber-border bg-cyber-bg/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {SUGGESTED_PROMPTS.map((prompt, idx) => (
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
          placeholder="Escribe tu consulta al agente..."
          className="flex-1 bg-cyber-bg border border-cyber-border rounded-lg px-3 py-2 text-xs text-cyber-text placeholder:text-cyber-text-muted focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent font-mono"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="p-2 rounded-lg bg-cyber-accent text-cyber-accent-contrast disabled:opacity-40 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyber-accent cursor-pointer"
          aria-label="Enviar mensaje"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
