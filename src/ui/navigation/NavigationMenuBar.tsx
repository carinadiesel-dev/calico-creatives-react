import React, {AnchorHTMLAttributes, FunctionComponent, PropsWithChildren, useState} from 'react'
import {CCLogo} from '@/ui/logos/CCLogo';
import Link from 'next/link';
import { cn } from '@/utils/cn';
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

type NavRow = {
  title: string
  link: string
}

const components: { title: string; href: string; description?: string }[] = [
  {
    title: "Logo Design",
    href: "#",
    description:
      "We create professional logos from scratch based on your needs and preferences",
  },
  {
    title: "Animated Graphics",
    href: "#",
    description:
      "To bring a uniqueness to your logo, we can add some motion.",
  },
  {
    title: "Web Design",
    href: "#",
    description:
      "You are currently viewing one of our websites.",
  },
  {
    title: "Branding & Social",
    href: "#",
    description: "Social media increases the amount of exposure a brand receives and increases traffic",
  },
  {
    title: "Stationary'",
    href: "#",
    description:
      "We offer luxury stationery for all of life’s special celebrations and events.",
  },
  {
    title: "Poster & Ads",
    href: "#",
    description:
      "Turn anything into a poster",
  },
]

const NavItem : FunctionComponent<NavRow> = ({
  title,
  link
}) => {
  return (
  <NavigationMenuItem>
  <Link href={link} legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      {title}
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
  )
}

type NavItem = {

}

type NavigationMenuBarProps = {
  navItems: NavItem[]
}

export const NavigationMenuBar = ({navItems}:NavigationMenuBarProps) => {
return (

<NavigationMenu>
  <NavigationMenuList>
  <div className='ml-10 translate-y-2'>
  <CCLogo width={223}/>
  </div>

  <NavigationMenuItem>
  <Link href="#" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Home
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

<NavigationMenuItem>
  <Link href="#" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Photography
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

<NavigationMenuItem>
  <NavigationMenuItem>
      <NavigationMenuTrigger>Graphic Design</NavigationMenuTrigger>
      <NavigationMenuContent className='bg-calicoPink-100'>
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
</NavigationMenuItem>

<NavigationMenuItem>
  <Link href="#" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Photo Gallery
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

<NavigationMenuItem>
  <Link href="#" legacyBehavior passHref>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[15px]hover:ring-calicoRedOrange-400 hover:ring-2",
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