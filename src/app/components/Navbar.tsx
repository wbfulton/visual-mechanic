import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/ui/navigation-menu";
import Image from "next/image";
import { forwardRef } from "react";

export const Navbar = () => {
  return (
    <NavigationMenu className="header text-white w-full justify-start max-w-full bg-secondary border-b p-2">
      <NavigationMenuList className="text-sm flex justify-start items-center gap-4">
        {/* Image */}
        <NavigationMenuItem>
          <Image
            className="invert"
            src="/toyota.svg"
            alt="Toyota logo"
            width={50}
            height={38}
            priority
          />
        </NavigationMenuItem>
        {/* Title */}
        <NavigationMenuItem>
          <Button variant={"ghost"} className={cn("headerText", "active")}>
            100 SERIES
          </Button>
        </NavigationMenuItem>
        {/* Engine */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="headerText">ENGINE / FUEL / TOOL</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction">
                Example 1
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                Example 2
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Power Train */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="headerText">
            POWER TRAIN / CHASSIS
          </NavigationMenuTrigger>
          <div>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  Example 1
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  Example 2
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="headerText">BODY / INTERIOR</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction">
                Example 1
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                Example 2
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Electrical */}
        <NavigationMenuItem>
          <div className="relative z-10 flex max-w-max flex-1 items-center justify-center">
            <NavigationMenuTrigger className="headerText">ELECTRICAL</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  Example 1
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  Example 2
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
