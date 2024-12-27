import { SidebarTrigger } from "@/core-ui";
import { ActionsMenuBar } from "./components/ActionsMenuBar";
import { Visualizer3D } from "./components/Visualizer3D";

export default function Home() {
  return (
    <main className="relative w-full max-w-full">
      <nav className="absolute right-0 top-0 z-50 flex w-full items-center justify-between gap-2 bg-transparent p-2 text-center text-xs">
        <div className="flex items-center justify-start gap-2">
          <SidebarTrigger />
          <ActionsMenuBar />
        </div>
      </nav>
      <div className="flex h-screen w-full flex-col items-center justify-between">
        {/* <Navbar /> */}
        <Visualizer3D />
        <footer className="absolute bottom-0 right-0 z-50 flex flex-wrap items-center justify-center bg-transparent p-2">
          Created by Will Fulton
        </footer>
      </div>
    </main>
  );
}
