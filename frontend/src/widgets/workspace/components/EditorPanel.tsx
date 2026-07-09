import { Panel } from "@/shared/ui/panel";

const lineNumbers = Array.from({ length: 12 }, (_, index) => index + 1);

export function EditorPanel() {
  return (
    <Panel title="SQL Editor">
      <div className="min-h-[420px] rounded-lg border border-emerald-950 bg-[#03150F] p-4 font-mono text-sm shadow-inner">
        {lineNumbers.map((line) => (
          <div key={line} className="flex">
            <span className="mr-4 w-6 select-none text-emerald-900">
              {line}
            </span>

            <span className="text-emerald-100">
               {line === 1 && (
                <>
                  -- Write your SQL query here...
                  <span className="editor-cursor">|</span>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}