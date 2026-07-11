import * as duckdb from "@duckdb/duckdb-wasm";

import duckdbWasm from "@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url";
import duckdbWasmEh from "@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url";

import mvpWorker from "@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url";
import ehWorker from "@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url";

import { customers, orders } from "@/shared/config/mock/data";

import { getDatabase, setDatabase } from "./database";

const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
  mvp: {
    mainModule: duckdbWasm,
    mainWorker: mvpWorker,
  },
  eh: {
    mainModule: duckdbWasmEh,
    mainWorker: ehWorker,
  },
};

export async function initializeDatabase() {
  const existingDatabase = getDatabase();

  if (existingDatabase) {
    return existingDatabase;
  }

  const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);

  const worker = new Worker(bundle.mainWorker!);

  const logger = new duckdb.ConsoleLogger();

  const db = new duckdb.AsyncDuckDB(logger, worker);

  await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

  setDatabase(db);

  const connection = await db.connect();

  await connection.query(`
    CREATE TABLE customers (
      customer_id INTEGER,
      customer_name VARCHAR,
      city VARCHAR
    );
  `);

  await connection.query(`
    CREATE TABLE orders (
      order_id INTEGER,
      customer_id INTEGER,
      amount INTEGER
    );
  `);

  for (const customer of customers) {
    await connection.query(`
      INSERT INTO customers VALUES (
        ${customer.customer_id},
        '${customer.customer_name}',
        '${customer.city}'
      );
    `);
  }

  for (const order of orders) {
    await connection.query(`
      INSERT INTO orders VALUES (
        ${order.order_id},
        ${order.customer_id},
        ${order.amount}
      );
    `);
  }

  await connection.close();

  return db;
}