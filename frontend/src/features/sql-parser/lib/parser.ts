import { extractTableNames } from "./extractTableNames";

export interface ParsedQuery {
  tables: string[];
}

export function parseQuery(query: string): ParsedQuery {
  return {
    tables: extractTableNames(query),
  };
}