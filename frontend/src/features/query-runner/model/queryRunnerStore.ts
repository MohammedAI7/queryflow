import { create } from "zustand";

import { executeQuery } from "../lib/executeQuery";

interface QueryRunnerState {
  isRunning: boolean;

  columns: string[];

  rows: Record<string, unknown>[];

  error: string | null;

  runQuery: (query: string) => Promise<void>;
}

export const useQueryRunnerStore = create<QueryRunnerState>((set) => ({
  isRunning: false,

  columns: [],

  rows: [],

  error: null,

  runQuery: async (query) => {
    set({
      isRunning: true,
      error: null,
    });

    try {
      const result = await executeQuery(query);

      set({
        columns: result.columns,
        rows: result.rows,
        isRunning: false,
      });
    } catch (error) {
      set({
        columns: [],
        rows: [],
        error: error instanceof Error ? error.message : "Unknown Error",
        isRunning: false,
      });
    }
  },
}));