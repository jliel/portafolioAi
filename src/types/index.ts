export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  architectureDetails?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; iconName?: string }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
}
