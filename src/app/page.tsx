"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  SidebarProvider,
  SidebarTrigger,
} from "@/core-ui";
import { groupPartDiagrams } from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import { ActionsMenuBar } from "./components/ActionsMenuBar";
import { AppSidebar } from "./components/Sidebar";
import { Visualizer3D } from "./visualizer/Visualizer3D";

export default function Home() {
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  }>({
    height: 0,
    width: 0,
  });

  const handleImageLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const { naturalHeight, naturalWidth } = e.currentTarget;
    setDimensions({ height: naturalHeight, width: naturalWidth });
  };

  return (
    <main className="relative w-full max-w-full">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={20}
            className="flex flex-col items-center justify-center gap-2 p-2">
            <h3 className="w-full">{groupPartDiagrams[0].title}</h3>
            {/* Header row */}
            <div className="grid grid-cols-4 gap-2 text-sm font-semibold">
              <div>Name</div>
              <div>Number</div>
              <div>Amount</div>
              <div>Date Range</div>
            </div>
            {/* Parts grid */}
            <div className="grid grid-cols-4 gap-2 text-sm">
              {groupPartDiagrams[0].parts.map((part, i) => (
                <React.Fragment key={groupPartDiagrams[0].title + "_part_" + i}>
                  <div>{part.name || "N/A"}</div>
                  <div className="break-all">{part.number}</div>
                  <div>{part.amount}</div>
                  <div>{part.date_range}</div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex w-4/5">
              <Image
                onLoad={handleImageLoad}
                height={dimensions.height}
                width={dimensions.width}
                src={groupPartDiagrams[0].img_url}
                alt="parts-diagram-photo"
              />
            </div>
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
