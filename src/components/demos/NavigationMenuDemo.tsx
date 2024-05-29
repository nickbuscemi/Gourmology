"use client"
import * as React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Private Chef Experience",
    href: "/services/private-chef-experience",
    description:
      "We'll turn your home into a restaurant for the night.",
  },
  {
    title: "Sit Down Dinners",
    href: "/services/sit-down-dinners",
    description:
      "Experience the elegance of fine dining with our sit down dinner services.",
  },
  {
    title: "Servers Bartenders Grill Man",
    href: "/services/servers-bartenders-grill-man",
    description:
      "Elevate your event with our professional servers, bartenders, and grill experts.",
  },
  {
    title: "Buffett Service and Delivery",
    href: "/services/buffett-service-and-delivery",
    description: "Delight your guests with our diverse buffet service options, perfect for any event size.",
  },
  {
    title: "On Premise Cooking Stations",
    href: "/services/on-premise-cooking-stations",
    description:
      "Watch as our chefs prepare your meals fresh on-site.",
  },
  {
    title: "Rentals",
    href: "/services/rentals",
    description:
      "From tableware to tents, we have all the rental items you need for your next event.",
  },
]

export function NavigationMenuDemo() {

  const navigate = useNavigate();

  const handleTriggerClick = (path: string) => {
    navigate(path);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>

      <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => handleTriggerClick('/menus')}>
              menus
            </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr]">
                  
                  <ListItem href="/menus" title="Catering Menu">
                    Our perfectly curated menu packages for any event.
                  </ListItem>
                  
                </ul>
              </NavigationMenuContent>  
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => handleTriggerClick('/services')}>services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                    
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/aboutus" className={navigationMenuTriggerStyle()}>
              our team
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/*<NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/gallery" className={navigationMenuTriggerStyle()}>
              gallery
            </Link>
          </NavigationMenuLink>
                  </NavigationMenuItem>*/}

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/contact" className={navigationMenuTriggerStyle()}>
              contact us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 ease-in-out hover:bg-white/20 hover:opacity-70 hover:backdrop-blur-lg focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

