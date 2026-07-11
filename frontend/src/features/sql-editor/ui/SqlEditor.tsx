import Editor from "@monaco-editor/react";

import { defaultQuery } from "../lib/defaultQuery";
/*import { editorOptions } from "../lib/editorOptions";*/
import { defineQueryFlowTheme } from "../lib/queryflowTheme";
import { useEditorStore } from "../model/editorStore";



export function SqlEditor() {
  const { query, setQuery } = useEditorStore();

function handleEditorBeforeMount(monaco: typeof import("monaco-editor")) {
  defineQueryFlowTheme(monaco);
}
  return (
    <Editor
      height="420px"
      defaultLanguage="sql"
      theme="queryflow-dark"
      beforeMount={handleEditorBeforeMount}
      value={query}
       onChange={(value) => {
        setQuery(value ?? defaultQuery);
      }}
    />
  );
}