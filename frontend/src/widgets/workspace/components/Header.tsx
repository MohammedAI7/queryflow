import { ExternalLink, Moon } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-emerald-900 bg-emerald-950">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    <h1 className="text-2xl font-bold tracking-tight text-emerald-50">
      QueryFlow
    </h1>

    <div className="flex items-center gap-4">
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