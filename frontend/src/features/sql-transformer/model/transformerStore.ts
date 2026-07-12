import { create } from "zustand";

interface TransformerState {
  uppercaseKeywords: boolean;

  toggleUppercase: () => void;
}

export const useTransformerStore = create<TransformerState>((set) => ({
  uppercaseKeywords: true,

  toggleUppercase: () =>
    set((state) => ({
      uppercaseKeywords: !state.uppercaseKeywords,
    })),
}));