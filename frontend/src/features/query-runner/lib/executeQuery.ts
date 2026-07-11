import { getDatabase } from "./database";

export interface QueryResult {
  columns: string[];
  rows: Record<string, unknown>[];
}

export async function executeQuery(query: string): Promise<QueryResult> {
  const db = getDatabase();

  if (!db) {
    throw new Error("Database is not initialized.");
  }

  const connection = await db.connect();

  try {
    const result = await connection.query(query);

    return {
      columns: result.schema.fields.map((field) => field.name),
      rows: result.toArray() as Record<string, unknown>[],
    };
  } finally {
    await connection.close();
  }
}