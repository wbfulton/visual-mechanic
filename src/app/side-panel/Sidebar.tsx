"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
} from "@/core-ui";
import { useContext } from "react";
import { SelectionContext } from "../shared-state/SelectionContext";
import { GroupPanel } from "./GroupPanel";
import { GroupsDropdownMenu } from "./GroupsDropdownMenu";
import { SearchInput } from "./SearchInput";

export function AppSidebar() {
  const { selectedGroupId } = useContext(SelectionContext);

  return (
    <Sidebar collapsible="icon" className="w-full">
      <SidebarHeader className="overflow-hidden">
        <span className="font-semi-bold text-lg">Land Cruiser 100 Series</span>
        <span className="text-xs">UZJ100L-GNPEKA, 1998-2002</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator />
        {selectedGroupId === undefined ? (
          <>
            <SearchInput className="py-2" />
            <GroupsDropdownMenu />
          </>
        ) : (
          <GroupPanel selectedGroupId={selectedGroupId} />
        )}
      </SidebarContent>
    </Sidebar>
  );
}
