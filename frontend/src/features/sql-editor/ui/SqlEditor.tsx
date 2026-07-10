import Editor from "@monaco-editor/react";

import { defaultQuery } from "../lib/defaultQuery";
import { editorOptions } from "../lib/editorOptions";
import { useEditorStore } from "../model/editorStore";

export function SqlEditor() {
  const { query, setQuery } = useEditorStore();

  return (
    <Editor
      height="420px"
      defaultLanguage="sql"
      theme="vs-dark"
      value={query}
      onChange={(value) => setQuery(value ?? defaultQuery)}
      options={editorOptions}
    />
  );
}