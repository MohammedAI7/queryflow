import { Database, Table, Columns3 } from "lucide-react";

import { Panel } from "@/shared/ui/panel";

import { schema } from "@/shared/config/mock/schema";

export function SchemaPanel() {
  return (
    <Panel title="Schema Viewer">
      <div className="min-h-[420px] space-y-5 text-sm">
        <div className="flex items-center gap-2 text-emerald-400">
          <Database size={18} />
          <span className="font-medium">QueryFlow DB</span>
        </div>

        {schema.map((table) => (
          <div key={table.name}>
            <div className="mb-2 flex items-center gap-2 text-emerald-100">
              <Table size={16} />
              <span>{table.name}</span>
            </div>

            <div className="ml-6 space-y-2">
              {table.columns.map((column) => (
                <div
                  key={column}
                  className="flex items-center gap-2 text-emerald-300"
                >
                  <Columns3 size={14} />
                  <span>{column}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}