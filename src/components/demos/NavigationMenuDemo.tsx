"use client"
import * as React from "react"
import { Link } from "react-router-dom"

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
    title: "In Home Private Events",
    href: "/services/private-events",
    description:
      "We'll turn your home into a restaurant for the night.",
  },
  {
    title: "Outside Catering",
    href: "/services/outside-catering",
    description:
      "Have a venue in mind? We'll bring the food to you.",
  },
  {
    title: "Holiday Packages",
    href: "/services/holiday-packages",
    description:
      "Celebrate your favorite holidays with our special holiday packages.",
  },
  {
    title: "Rentals",
    href: "/services/rentals",
    description: "Rent fine cutlery, plates, chargers, chafers and more for your next event.",
  },
  {
    title: "Mobile Bar",
    href: "/services/mobile-bar",
    description:
      "We'll bring the party to any event with our mobile bar service.",
  },
  {
    title: "Meal Prep, Plates, and trays",
    href: "/services/plates-trays",
    description:
      "Save time and eat better with our meal prep services.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

      <NavigationMenuItem>
        <Link to="/menus">
            <NavigationMenuTrigger>menus</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr]">
                  
                  <ListItem href="/menus/catering-menu" title="Catering Menu">
                    Our perfectly curated menu packages for any event.
                  </ListItem>
                  <ListItem href="/menus/meal-prep" title="Meal Preperation">
                    Save time and eat better with our meal prep services.
                  </ListItem>
                  
                </ul>
              </NavigationMenuContent>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/services">
            <NavigationMenuTrigger>services</NavigationMenuTrigger>
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
          </Link>
          </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/book">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              bookings
            </NavigationMenuLink>
          </Link>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
  )
})
ListItem.displayName = "ListItem"