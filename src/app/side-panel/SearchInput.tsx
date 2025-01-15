import {
  Label,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/core-ui";
import { Search } from "lucide-react";

export function SearchInput({ ...props }: React.ComponentProps<"form">) {
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
