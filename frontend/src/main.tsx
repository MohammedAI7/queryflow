import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import "@/app/styles/animations.css";

import { initializeDatabase } from "@/features/query-runner";

// Initialize DuckDB once when the application starts
initializeDatabase().catch(console.error);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);