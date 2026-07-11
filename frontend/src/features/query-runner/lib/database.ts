import * as duckdb from "@duckdb/duckdb-wasm";

let database: duckdb.AsyncDuckDB | null = null;

export function getDatabase() {
  return database;
}

export function setDatabase(db: duckdb.AsyncDuckDB) {
  database = db;
}