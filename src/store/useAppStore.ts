import { create } from 'zustand';
import { AppState, AppActions } from '../types';

interface AppStore extends AppState, AppActions {}

export const useAppStore = create<AppStore>((set) => ({
  // State
  isMenuOpen: false,
  currentSection: 'home',
  theme: 'dark',
  isLoading: false,

  // Actions
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setCurrentSection: (section) => set({ currentSection: section }),
  setTheme: (theme) => set({ theme }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
