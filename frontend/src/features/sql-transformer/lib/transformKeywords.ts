import { format } from "sql-formatter";

export function formatQuery(
  query: string,
  uppercaseKeywords = true,
): string {
  try {
    return format(query, {
      language: "sql",
      keywordCase: uppercaseKeywords ? "upper" : "lower",
      tabWidth: 2,
      linesBetweenQueries: 1,
    });
  } catch {
    return query;
  }
}