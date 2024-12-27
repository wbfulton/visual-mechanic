import { SouqPartGroups } from "@/data";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/ui/sidebar";
import { ChevronDown } from "lucide-react";

// const catToIcon: {
//   [key: string]: React.ForwardRefExoticComponent<
//     Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
//   >;
// } = {
//   Electrical: CircuitBoard,
//   "Body/Interior": Car,
//   "Power Train/Chassis": Dumbbell,
//   "Engine/Fuel/Tool": Cog,
// };

export function AppSidebar() {
  // const items = Lc100OverviewPartsModel.map((cat) => {
  //   return {
  //     title: cat.part_category,
  //     url: "#",
  //     icon: catToIcon[cat.part_category],
  //   };
  // });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="overflow-hidden">
        <span className="headerText">Land Cruiser 100 Series</span>
        <span className="headerText text-sm">UZJ100L-GNPEKA, 1998-2002</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Part Groups (Search)</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SouqPartGroups["0"]
                .sort((a, b) => {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                })
                .map((group, i) => (
                  <Collapsible className="group/collapsible" key={"collapsible-menu-" + i}>
                    <SidebarMenuItem key={group.name + i + "main"}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <>
                            {/* <item.icon /> */}
                            <span>{group.name}</span>
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {SouqPartGroups[group.group_number]
                            ?.sort((a, b) => {
                              if (a.name < b.name) {
                                return -1;
                              }
                              if (a.name > b.name) {
                                return 1;
                              }
                              return 0;
                            })
                            .map((diagram) => {
                              return (
                                <SidebarMenuSubItem key={"collapsible-sub-menu" + i}>
                                  <SidebarMenuSubButton className="h-fit">
                                    {
                                      <>
                                        <span>
                                          {diagram.name
                                            .toLowerCase()
                                            .split(" ")
                                            .map(
                                              (word) =>
                                                word.charAt(0).toUpperCase() + word.slice(1),
                                            )
                                            .join(" ")}
                                        </span>
                                      </>
                                    }
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              );
                            })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// {Lc100OverviewPartsModel.filter(
//   (model) => model.part_category === item.title,
// )[0]
//   .diagrams.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   })
//   .map((diagram) => {
//     return (
//       <SidebarMenuSubItem>
//         <SidebarMenuSubButton className="h-fit">
//           {
//             <>
//               <span>
//                 {diagram.title
//                   .toLowerCase()
//                   .split(" ")
//                   .map(
//                     (word) =>
//                       word.charAt(0).toUpperCase() + word.slice(1),
//                   )
//                   .join(" ") +
//                   ": " +
//                   diagram.souq_uid}
//               </span>
//             </>
//           }
//         </SidebarMenuSubButton>
//       </SidebarMenuSubItem>
//     );
//   })}
