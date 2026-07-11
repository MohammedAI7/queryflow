import type * as monaco from "monaco-editor";

export function defineQueryFlowTheme(monacoInstance: typeof monaco) {
  monacoInstance.editor.defineTheme("queryflow-dark", {
    base: "vs-dark",
    inherit: true,

    rules: [
      {
        token: "keyword",
        foreground: "22C55E",
        fontStyle: "bold",
      },

      {
        token: "comment",
        foreground: "6B7280",
        fontStyle: "italic",
      },

      {
        token: "string",
        foreground: "34D399",
      },

      {
        token: "number",
        foreground: "FBBF24",
      },
    ],

    colors: {
      "editor.background": "#03150F",
      "editor.foreground": "#F8FAFC",

      "editor.lineHighlightBackground": "#0B221B",

      "editorCursor.foreground": "#22C55E",

      "editor.selectionBackground": "#14532D",

      "editor.inactiveSelectionBackground": "#0F2F26",

      "editorLineNumber.foreground": "#365B50",

      "editorLineNumber.activeForeground": "#22C55E",
    },
  });
}