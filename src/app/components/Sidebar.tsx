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
import { SouqPartGroups } from "@/data";
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

const ROOT_GROUP_ID = "0";

const PartGroupsSubMenu = ({ parentGroupId }: { parentGroupId: string }) => {
  const groups = SouqPartGroups[parentGroupId].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const Menu = parentGroupId === ROOT_GROUP_ID ? SidebarMenu : SidebarMenuSub;
  const MenuItem =
    parentGroupId === ROOT_GROUP_ID ? SidebarMenuItem : SidebarMenuSubItem;
  const MenuButton =
    parentGroupId === ROOT_GROUP_ID ? SidebarMenuButton : SidebarMenuSubButton;

  return (
    <Menu className="mr-0 pr-0 text-sm">
      {groups.map((group, i) => {
        const hasSubGroups = !!SouqPartGroups[group.group_number];
        const GroupIcon = groupNameToIcon[group.name.toLowerCase()];
        return (
          <>
            {hasSubGroups ? (
              <Collapsible
                className={"group/collapsible hover:cursor-pointer"}
                key={group.group_number + "-collapsible-" + i}>
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
                    <PartGroupsSubMenu
                      parentGroupId={group.group_number + ""}
                    />
                  </CollapsibleContent>
                </MenuItem>
              </Collapsible>
            ) : (
              <MenuItem
                className="hover:cursor-pointer"
                key={group.group_number + "-sub-menu-" + i}>
                <MenuButton className="h-fit p-1">
                  <span>{capitalizeMenuItemName(group.name)}</span>
                  <PanelLeftOpen className={"ml-auto"} />
                </MenuButton>
              </MenuItem>
            )}
          </>
        );
      })}
    </Menu>
  );
};

const PartsGroupsMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="p-1">{"Part Groups"}</SidebarGroupLabel>
      <SidebarGroupContent>
        <PartGroupsSubMenu parentGroupId={ROOT_GROUP_ID} />
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="overflow-hidden">
        <span className="font-semi-bold text-lg">Land Cruiser 100 Series</span>
        <span className="text-xs">UZJ100L-GNPEKA, 1998-2002</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator />
        <SearchForm className="py-2" />
        <PartsGroupsMenu />
      </SidebarContent>
    </Sidebar>
  );
}
