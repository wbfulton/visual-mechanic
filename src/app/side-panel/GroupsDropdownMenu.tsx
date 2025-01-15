import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/core-ui";
import { useAllGroups } from "@/hooks";
import { capitalizeMenuItemName, groupNameToIcon } from "@/lib";
import { Group } from "@/types";
import { ChevronRight, PanelLeftOpen } from "lucide-react";
import { useContext } from "react";
import { SelectionContext } from "../shared-state/SelectionContext";

export const GroupsDropdownMenu = () => {
  const { groups, isError, isLoading } = useAllGroups();

  if (isLoading) return null;
  if (isError) return null;

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="p-1">{"Part Groups"}</SidebarGroupLabel>
      <SidebarGroupContent>
        {groups.map((group: Group) => (
          <RecursiveGroupSubMenu key={group.id} group={group} isRoot={true} />
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const RecursiveGroupSubMenu = ({
  group,
  isRoot = false,
}: {
  group: Group;
  isRoot?: boolean;
}) => {
  const { setSelectedGroupId } = useContext(SelectionContext);

  group?.children?.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const Menu = isRoot ? SidebarMenu : SidebarMenuSub;
  const MenuItem = isRoot ? SidebarMenuItem : SidebarMenuSubItem;
  const MenuButton = isRoot ? SidebarMenuButton : SidebarMenuSubButton;

  const hasSubGroups = group?.children?.length > 0;
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
              {group.children.map((subGroup) => (
                <RecursiveGroupSubMenu group={subGroup} key={subGroup.id} />
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
