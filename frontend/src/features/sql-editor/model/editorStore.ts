import { create } from "zustand";

import { defaultQuery } from "../lib/defaultQuery";

interface EditorState {
  query: string;
  setQuery: (query: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  query: defaultQuery,

  setQuery: (query) =>
    set({
      query,
    }),
}));