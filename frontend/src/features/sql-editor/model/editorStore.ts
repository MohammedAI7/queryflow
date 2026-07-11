import { create } from "zustand";

import { parseQuery } from "@/features/sql-parser";
import { defaultQuery } from "../lib/defaultQuery";

interface EditorState {
  query: string;
  tables: string[];

  setQuery: (query: string) => void;
}

const parsed = parseQuery(defaultQuery);

export const useEditorStore = create<EditorState>((set) => ({
  query: defaultQuery,

  tables: parsed.tables,

  setQuery: (query) => {
    const parsedQuery = parseQuery(query);

    set({
      query,
      tables: parsedQuery.tables,
    });
  },
}));