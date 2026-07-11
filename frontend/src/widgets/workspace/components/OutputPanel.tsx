import { Panel } from "@/shared/ui/panel";
import { useQueryRunnerStore } from "@/features/query-runner";

export function OutputPanel() {
  const { columns, rows, error, isRunning } = useQueryRunnerStore();

  if (isRunning) {
    return (
      <Panel title="Query Output">
        <div className="flex h-40 items-center justify-center text-emerald-300">
          Running query...
        </div>
      </Panel>
    );
  }

  if (error) {
    return (
      <Panel title="Query Output">
        <div className="rounded-lg border border-red-900 bg-red-950 p-4 text-red-300">
          {error}
        </div>
      </Panel>
    );
  }

  if (columns.length === 0) {
    return (
      <Panel title="Query Output">
        <div className="flex h-40 items-center justify-center text-slate-500">
          Run a query to see the results.
        </div>
      </Panel>
    );
  }

  return (
    <Panel title="Query Output">
      <div className="overflow-auto rounded-lg border border-emerald-950">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-emerald-950">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="border-b border-emerald-900 px-4 py-3 text-left font-semibold text-emerald-200"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-emerald-950 hover:bg-emerald-950/40"
              >
                {columns.map((column) => (
                  <td
                    key={column}
                    className="px-4 py-3 text-emerald-100"
                  >
                    {String(row[column] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}