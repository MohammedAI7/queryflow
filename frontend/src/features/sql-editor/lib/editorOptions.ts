import type { editor } from "monaco-editor";

export const editorOptions: editor.IStandaloneEditorConstructionOptions = {
  minimap: {
    enabled: false,
  },

  fontSize: 15,

  fontFamily: "JetBrains Mono, monospace",

  automaticLayout: true,

  scrollBeyondLastLine: false,

  wordWrap: "on",

  roundedSelection: true,

  padding: {
    top: 16,
  },
};