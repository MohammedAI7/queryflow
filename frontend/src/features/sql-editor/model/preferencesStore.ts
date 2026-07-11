import { create } from "zustand";

interface PreferencesState {
  autoUppercase: boolean;
  wordWrap: boolean;
  minimap: boolean;
  fontSize: number;

  toggleAutoUppercase: () => void;
  toggleWordWrap: () => void;
  toggleMinimap: () => void;
  setFontSize: (size: number) => void;
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  autoUppercase: true,
  wordWrap: true,
  minimap: false,
  fontSize: 15,

  toggleAutoUppercase: () =>
    set((state) => ({
      autoUppercase: !state.autoUppercase,
    })),

  toggleWordWrap: () =>
    set((state) => ({
      wordWrap: !state.wordWrap,
    })),

  toggleMinimap: () =>
    set((state) => ({
      minimap: !state.minimap,
    })),

  setFontSize: (size) =>
    set({
      fontSize: size,
    }),
}));