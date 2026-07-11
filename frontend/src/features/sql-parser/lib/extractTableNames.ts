const TABLE_PATTERN =
  /\b(?:FROM|JOIN|INTO|UPDATE|TABLE)\s+([a-zA-Z_][a-zA-Z0-9_]*)/gi;

export function extractTableNames(query: string): string[] {
  const tables = new Set<string>();

  let match: RegExpExecArray | null;

  while ((match = TABLE_PATTERN.exec(query)) !== null) {
    tables.add(match[1]);
  }

  return [...tables];
}