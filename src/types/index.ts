export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface AppState {
  isMenuOpen: boolean;
  currentSection: string;
  theme: 'dark' | 'light';
  isLoading: boolean;
}

export interface AppActions {
  toggleMenu: () => void;
  setCurrentSection: (section: string) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  setLoading: (loading: boolean) => void;
}
