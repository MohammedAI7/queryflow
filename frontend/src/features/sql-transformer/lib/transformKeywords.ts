/**
 * TODO (Milestone 5)
 * Replace regex implementation with parser/token-based transformation.
 * Current implementation is intentionally not used.
 */
import { SQL_KEYWORDS } from "./sqlKeywords";

export function transformKeywords(query: string): string {
  return query.replace(/\b[a-zA-Z][a-zA-Z0-9_]*\b/g, (word) => {
    const upperWord = word.toUpperCase();

    return SQL_KEYWORDS.has(upperWord)
      ? upperWord
      : word;
  });
}