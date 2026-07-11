import { Database, Table, Columns3 } from "lucide-react";

import { useEditorStore } from "@/features/sql-editor";
import { schema } from "@/shared/config/mock/schema";
import { Panel } from "@/shared/ui/panel";

export function SchemaPanel() {
  const { tables } = useEditorStore();

  return (
    <Panel title="Schema Viewer">
      <div className="min-h-[420px] space-y-5 text-sm">
        <div className="flex items-center gap-2 text-emerald-400">
          <Database size={18} />
          <span className="font-medium">QueryFlow DB</span>
        </div>

        {schema.map((table) => {
          const isActive = tables.includes(table.name);

          return (
            <div key={table.name}>
              <div
                className={`mb-2 flex items-center gap-2 rounded-md px-2 py-1 transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-900/40 text-emerald-300 shadow-[0_0_12px_rgba(34,197,94,0.35)]"
                    : "text-emerald-100"
                }`}
              >
                <Table size={16} />
                <span>{table.name}</span>
              </div>

              <div className="ml-6 space-y-2">
                {table.columns.map((column) => (
                  <div
                    key={column}
                    className={`flex items-center gap-2 transition-colors duration-300 ${
                      isActive
                        ? "text-emerald-200"
                        : "text-emerald-300"
                    }`}
                  >
                    <Columns3 size={14} />
                    <span>{column}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}