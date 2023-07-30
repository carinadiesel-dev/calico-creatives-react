import React, {AnchorHTMLAttributes, FunctionComponent, PropsWithChildren, useState} from 'react'
import { CCLogo } from '../logos/CCLogo';
import { cn } from '@/lib/utils';
import "../../App.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { Route, Routes, Link } from "react-router-dom"

type NavRow = {
  title: string
  link: string
  subMenu?: { title: string; href: string; description: string }[]
}

const subMenu: { title: string; href: string; description: string }[] = [
  {
    title: "Logo Design",
    href: "/graphic-design/logo-design",
    description:
      "We create professional logos from scratch based on your needs and preferences",
  },
  {
    title: "Animated Graphics",
    href: "/graphic-design/animated-graphics",
    description:
      "To bring a uniqueness to your logo, we can add some motion.",
  },
  {
    title: "Web Design",
    href: "/graphic-design/web-design",
    description:
      "You are currently viewing one of our websites.",
  },
  {
    title: "Branding & Social",
    href: "/graphic-design/branding-and-social-media",
    description: "Social media increases the amount of exposure a brand receives and increases traffic",
  },
  {
    title: "Stationary & Events",
    href: "/graphic-design/stationary-and-events",
    description:
      "We offer luxury stationery for all of life’s special celebrations and events.",
  },
  {
    title: "Poster & Ads",
    href: "/graphic-design/posters-and-ads",
    description:
      "Turn anything into a poster",
  },
]

type NavItem = {

}

type NavigationMenuDesktopProps = {
  navItems: NavItem[]
}

const NavItem : FunctionComponent<NavRow> = ({
  title,
  link,
  subMenu
}) => {
  const hasSubMenu = subMenu !== undefined ? true : false;
  return (
  <NavigationMenuItem>
    {hasSubMenu === true ?
      <><NavigationMenuTrigger>{title}</NavigationMenuTrigger><NavigationMenuContent className='bg-calicoPink-100'>
            <ul className="grid w-[25rem] gap-3 p-4 md:w-[31.25rem] md:grid-cols-2 lg:w-[37.5rem] ">
              {subMenu && subMenu.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent></>
      :
  <Link to={link}>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      {title}
    </NavigationMenuLink>
  </Link>
}
</NavigationMenuItem>
  )
}


export const NavigationMenuDesktop = ({navItems}:NavigationMenuDesktopProps) => {
return (

<NavigationMenu>
  <NavigationMenuList>
  <div className='ml-10 translate-y-2'>
  <CCLogo width={223}/>
  </div>
  
  {/* <div>
  {navItems.map(navItem =>{
            return (
            <NavItem {...navItem}/>
            )
        })}
  </div> */}
  <NavigationMenuItem>
  <Link to="/">
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Home
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

<NavigationMenuItem>
  <Link to="/photography">
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Photography
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>


  <NavigationMenuItem>
      <NavigationMenuTrigger>Graphic Design</NavigationMenuTrigger>
      <NavigationMenuContent className='bg-calicoPink-100'>
        <ul className="grid w-[25rem] gap-3 p-4 md:w-[31.25rem] md:grid-cols-2 lg:w-[37.5rem] ">
        {subMenu.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

<NavigationMenuItem>
  <Link to="#">
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Photo Gallery
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

<NavigationMenuItem>
  <Link to="/contact">
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Contact
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-xs xl:text-base hover:ring-calicoRedOrange-400 hover:ring-2",
            className
          )}
          {...props}
        >
          <div className="font-bold leading-none text-md text-calicoRedOrange-400">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground text-calicoGray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"