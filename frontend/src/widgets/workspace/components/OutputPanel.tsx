import { Panel } from "@/shared/ui/panel";

import { outputColumns } from "@/shared/config/mock/output";

export function OutputPanel() {
  return (
    <Panel title="Query Output">
      <div className="min-h-[220px] overflow-hidden rounded-lg border border-emerald-900">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-emerald-950">
            <tr>
              {outputColumns.map((outputColumns) => (
                <th
                  key={outputColumns}
                  className="border-b border-slate-800 px-4 py-3 text-left font-medium text-emerald-100"
                >
                  {outputColumns}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
                        <tr>
              <td
                colSpan={outputColumns.length}
                className="px-4 py-10"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <p className="text-emerald-300 font-medium">
                    Run a SQL query to see results.
                  </p>

                  <div className="flex gap-8 text-sm text-emerald-500">
                    <span>Execution Time: --</span>
                    <span>Rows: --</span>
                    <span>Columns: --</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Panel>
  );
}