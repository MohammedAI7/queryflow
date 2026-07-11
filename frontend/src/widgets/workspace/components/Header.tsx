import { ExternalLink, Moon, Play } from "lucide-react";
import { useEditorStore } from "@/features/sql-editor";
import { useQueryRunnerStore } from "@/features/query-runner";

export function Header() {
  const { query } = useEditorStore();
  const { runQuery, isRunning } = useQueryRunnerStore();

  return (
    <header className="border-b border-emerald-900 bg-emerald-950">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    <h1 className="text-2xl font-bold tracking-tight text-emerald-50">
      QueryFlow
    </h1>

    <div className="flex items-center gap-4">
            <button
        onClick={() => runQuery(query)}
        disabled={isRunning}
        className="flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Play size={16} />
        {isRunning ? "Running..." : "Run"}
      </button>
      <button
        className="rounded-md p-2 text-emerald-300 transition-all duration-200 hover:bg-emerald-900 hover:text-emerald-100"
        aria-label="Project Repository"
      >
        <ExternalLink size={20} />
      </button>

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