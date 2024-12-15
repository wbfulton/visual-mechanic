import { cn } from "@/lib/utils";
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
import { Visualizer3D } from "./components/Visualizer3D";

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

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between font-[family-name:var(--font-geist-sans)]">
      <NavigationMenu className="text-white w-full justify-start max-w-full bg-secondary border-b p-2">
        <NavigationMenuList className="flex justify-start items-center gap-4">
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
            <h1 className="text-2xl font-bold">100 Series</h1>
          </NavigationMenuItem>
          {/* Engine */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Engine / Fuel / Tool</NavigationMenuTrigger>
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
            <NavigationMenuTrigger>Power Train / Chassis</NavigationMenuTrigger>
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
            <NavigationMenuTrigger>Body / Interior</NavigationMenuTrigger>

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
              <NavigationMenuTrigger>Electrical</NavigationMenuTrigger>
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

      <main className="w-full h-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full h-full">
          <Visualizer3D />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
      </footer>
    </div>
  );
}
