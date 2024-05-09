"use client"
import * as React from "react"
import { Link } from "react-router-dom"
import menuIcon from '../../../public/assets/icons/menuIcon.svg'

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

export function NavigationMenuDemo2() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <img src={menuIcon} alt="menu" height={55} width={35}/>
          </NavigationMenuTrigger>

            <NavigationMenuContent>

              <NavigationMenuItem>
                <Link to="/menus">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Menus
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/services">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/book">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Bookings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/home">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuContent>

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
