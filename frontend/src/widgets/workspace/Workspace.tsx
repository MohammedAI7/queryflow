import {
  Header,
  EditorPanel,
  SchemaPanel,
  OutputPanel,
} from "@/widgets/workspace/components";

export function Workspace() {
  return (
    <>
      <Header />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col gap-6 p-6">
        <section className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
          <EditorPanel />
          <SchemaPanel />
        </section>

        <OutputPanel />
      </main>
    </>
  );
}