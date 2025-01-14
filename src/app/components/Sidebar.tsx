"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Label,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/core-ui";
import { Group } from "@/data/types";
import { capitalizeMenuItemName } from "@/lib";
import {
  AirVent,
  Armchair,
  ArrowUp10,
  Car,
  ChevronRight,
  Cloud,
  Cog,
  Cuboid,
  Fan,
  Fuel,
  LucideProps,
  OctagonPause,
  PackagePlus,
  PanelLeftOpen,
  Search,
  ShipWheel,
  Wrench,
  Zap,
} from "lucide-react";
import { useContext } from "react";
import useSWR from "swr";
import { DiagramsSidePanel } from "./DiagramsSidePanel";
import { SelectionContext } from "./SelectionContext";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search part groups..."
            className="pl-8"
          />
          <Search
            className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none
              opacity-50"
          />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}

const groupNameToIcon: {
  [key: string]: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
} = {
  accessories: PackagePlus,
  "body parts": Car,
  "brake system": OctagonPause,
  chassis: Cuboid,
  "cooling system": Fan,
  electrical: Zap,
  engine: Cog,
  "exhaust system": Cloud,
  "fuel system": Fuel,
  "heater / air conditioning": AirVent,
  "interior trim": Armchair,
  "service parts": Wrench,
  steering: ShipWheel,
  transmission: ArrowUp10,
};

// if has group, then render as collapsible
// if no group, then normal

const PartGroupsSubMenu = ({ group }: { group: Group }) => {
  const { setSelectedGroupId } = useContext(SelectionContext);

  group?.sub_groups?.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const Menu = group.parent_group_id == null ? SidebarMenu : SidebarMenuSub;
  const MenuItem =
    group.parent_group_id == null ? SidebarMenuItem : SidebarMenuSubItem;
  const MenuButton =
    group.parent_group_id == null ? SidebarMenuButton : SidebarMenuSubButton;

  const hasSubGroups = group?.sub_groups?.length > 0;
  const GroupIcon = groupNameToIcon[group.name.toLowerCase()];

  return (
    <Menu className="mr-0 pr-0 text-sm">
      {hasSubGroups ? (
        <Collapsible
          className={"group/collapsible hover:cursor-pointer"}
          key={group.id}>
          <MenuItem>
            <CollapsibleTrigger asChild>
              <MenuButton className="flex h-fit items-center p-1">
                <>
                  {!!GroupIcon && <GroupIcon />}
                  <span>{capitalizeMenuItemName(group.name)}</span>
                  <ChevronRight
                    className={`ml-auto transition-transform duration-200
                      group-data-[state=open]/collapsible:rotate-90`}
                  />
                </>
              </MenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {group.sub_groups.map((subGroup) => (
                <PartGroupsSubMenu group={subGroup} key={subGroup.id} />
              ))}
            </CollapsibleContent>
          </MenuItem>
        </Collapsible>
      ) : (
        <MenuItem className="hover:cursor-pointer" key={group.id}>
          <MenuButton
            className="h-fit p-1"
            onClick={() => {
              setSelectedGroupId(group.id);
            }}>
            <span>{capitalizeMenuItemName(group.name)}</span>
            <PanelLeftOpen className={"ml-auto"} />
          </MenuButton>
        </MenuItem>
      )}
    </Menu>
  );
};

const useGroups = (): {
  groups: Group[];
  isError: boolean;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8000/groups/",
    fetcher,
  );
  return { groups: data, isError: error, isLoading };
};

const PartsGroupsMenu = () => {
  const { groups, isError, isLoading } = useGroups();

  if (isLoading) return null;
  if (isError) return null;

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="p-1">{"Part Groups"}</SidebarGroupLabel>
      <SidebarGroupContent>
        {groups.map((group: Group) => (
          <PartGroupsSubMenu key={group.id} group={group} />
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const fetcher = (input: RequestInfo | URL) =>
  fetch(input).then((res) => res.json());

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
            <SearchForm className="py-2" />
            <PartsGroupsMenu />
          </>
        ) : (
          <DiagramsSidePanel selectedGroupId={selectedGroupId} />
        )}
      </SidebarContent>
    </Sidebar>
  );
}
