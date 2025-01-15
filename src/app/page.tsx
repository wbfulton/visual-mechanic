import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  SidebarProvider,
} from "@/core-ui";
import { AppSidebar } from "./side-panel/Sidebar";
import { Visualizer3D } from "./visualizer/Visualizer3D";

const SIDEBAR_WIDTH = 35;
const PANEL_WIDTH = 65;

export default function Home() {
  return (
    <main className="h-screen w-full max-w-full">
      <SidebarProvider defaultOpen={true}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={SIDEBAR_WIDTH}>
            <AppSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={PANEL_WIDTH}>
            <Visualizer3D />
          </ResizablePanel>
        </ResizablePanelGroup>
        <footer
          className="absolute bottom-0 right-0 z-50 flex flex-wrap items-center justify-center
            bg-transparent p-2">
          Created by Will Fulton
        </footer>
      </SidebarProvider>
    </main>
  );
}
