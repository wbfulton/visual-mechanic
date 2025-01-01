import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  SidebarProvider,
  SidebarTrigger,
} from "@/core-ui";
import { groupPartDiagrams } from "@/data";
import Image from "next/image";
import { ActionsMenuBar } from "./components/ActionsMenuBar";
import { AppSidebar } from "./components/Sidebar";
import { Visualizer3D } from "./visualizer/Visualizer3D";

export default function Home() {
  return (
    <main className="relative w-full max-w-full">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20} className="p-2">
            <h3 className="mb-2">{groupPartDiagrams[0].title}</h3>
            {/* USE CSS GRID */}
            {groupPartDiagrams[0].parts.map((part, i) => {
              return (
                <div
                  key={groupPartDiagrams[0].title + "_part_" + i}
                  className="flex items-center gap-2 py-1 text-sm">
                  <span>{part.name || "N/A"}</span>
                  <span>{part.number}</span>
                  <span>{part.amount}</span>
                  <span>{part.date_range}</span>
                </div>
              );
            })}
            <Image
              width="200"
              height="200"
              src={groupPartDiagrams[0].img_url}
              alt="parts-diagram-photo"
            />
            <nav
              className="absolute right-0 top-0 z-50 flex w-full items-center justify-between gap-2
                bg-transparent p-2 text-center text-xs">
              <div className="flex items-center justify-start gap-2">
                <SidebarTrigger />
                <ActionsMenuBar />
              </div>
            </nav>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80}>
            <div className="flex h-screen w-full flex-col items-center justify-between">
              <Visualizer3D />
              <footer
                className="absolute bottom-0 right-0 z-50 flex flex-wrap items-center justify-center
                  bg-transparent p-2">
                Created by Will Fulton
              </footer>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </SidebarProvider>
    </main>
  );
}
