import { SqlEditor } from "@/features/sql-editor";
import { Panel } from "@/shared/ui/panel";

export function EditorPanel() {
  return (
    <Panel title="SQL Editor">
      <SqlEditor />
    </Panel>
  );
}