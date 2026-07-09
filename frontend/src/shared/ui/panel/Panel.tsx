import type { ReactNode } from "react";

interface PanelProps {
  title: string;
  children: ReactNode;
}

export function Panel({ title, children }: PanelProps) {
  return (
    <section className="rounded-xl border border-emerald-900 bg-emerald-950/60 shadow-lg transition-all duration-200 hover:border-emerald-700 hover:shadow-xl">
      <header className="border-b border-emerald-900 px-5 py-3">
        <h2 className="text-sm font-semibold tracking-wide text-emerald-100">
          {title}
        </h2>
      </header>

      <div className="p-5">{children}</div>
    </section>
  );
}