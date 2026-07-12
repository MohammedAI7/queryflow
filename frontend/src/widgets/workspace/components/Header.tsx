import { useEffect } from "react";
import { ExternalLink, Moon, Play, Wand2 } from "lucide-react";

import { useEditorStore } from "@/features/sql-editor";
import { useQueryRunnerStore } from "@/features/query-runner";
import {
  formatQuery,
  useTransformerStore,
} from "@/features/sql-transformer";

export function Header() {
  const { query, setQuery } = useEditorStore();

  const { runQuery, isRunning } = useQueryRunnerStore();

  const {
    uppercaseKeywords,
    toggleUppercase,
  } = useTransformerStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        event.shiftKey &&
        event.key.toLowerCase() === "f"
      ) {
        event.preventDefault();

        setQuery(formatQuery(query, uppercaseKeywords));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [query, setQuery, uppercaseKeywords]);

  return (
    <header className="border-b border-emerald-900 bg-emerald-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-50">
          QueryFlow
        </h1>

        <div className="flex items-center gap-4">

          {/* Run Button */}
          <button
            onClick={() => runQuery(query)}
            disabled={isRunning}
            className="flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Play size={16} />
            {isRunning ? "Running..." : "Run"}
          </button>

          {/* Format Button */}
          <button
            onClick={() =>
              setQuery(formatQuery(query, uppercaseKeywords))
            }
            className="flex items-center gap-2 rounded-md border border-emerald-700 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-900"
          >
            <Wand2 size={16} />
            Format
          </button>

          {/* Uppercase Toggle */}
          <button
            onClick={toggleUppercase}
            className={`rounded-md px-3 py-2 text-sm font-medium transition ${
              uppercaseKeywords
                ? "bg-emerald-600 text-white"
                : "border border-emerald-700 text-emerald-300"
            }`}
          >
            {uppercaseKeywords ? "UPPERCASE" : "lowercase"}
          </button>

          {/* Repository */}
          <button
            className="rounded-md p-2 text-emerald-300 transition-all duration-200 hover:bg-emerald-900 hover:text-emerald-100"
            aria-label="Project Repository"
          >
            <ExternalLink size={20} />
          </button>

          {/* Theme */}
          <button
            className="rounded-md p-2 text-emerald-300 transition-all duration-200 hover:bg-emerald-900 hover:text-emerald-100"
            aria-label="Toggle Theme"
          >
            <Moon size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}