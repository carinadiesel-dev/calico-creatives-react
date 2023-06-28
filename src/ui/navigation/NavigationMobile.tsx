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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { IconHamburger } from '../icons/IconHamburger';

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
    href: "/graphic-design/logo-design",
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
    href: "/graphic-design/branding-and-social",
    description: "Social media increases the amount of exposure a brand receives and increases traffic",
  },
  {
    title: "Stationary'",
    href: "/graphic-design/stationary",
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

type NavigationMenuBarProps = {
  navItems: NavItem[]
}

const NavItem : FunctionComponent<NavRow> = ({
  title,
  link,
  subMenu
}) => {
  const hasSubMenu = subMenu !== undefined ? true : false;
  return (
  <NavigationMenuItem className='h-full'>
    {hasSubMenu === true ?
      <>
      {/* <NavigationMenuTrigger>{title}</NavigationMenuTrigger><NavigationMenuContent className='bg-calicoPink-100'> */}
     {/* //       <ul className="grid w-[25rem] gap-3 p-4 md:w-[31.25rem] md:grid-cols-2 lg:w-[37.5rem] ">

      //           <ListItem
      //             key={item.title}
      //             title={item.title}
      //             href={item.href}
      //           >
      //             {item.description}
      //           </ListItem>
      //         ))}
      //       </ul>
      //     </NavigationMenuContent>
    */}
          <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>
    <ul>
    {subMenu && subMenu.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
    </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>
</>
      :
  <Link href={link} legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      {title}
    </NavigationMenuLink>
  </Link>
}
</NavigationMenuItem>
  )
}


export const NavigationMobile = ({navItems}:NavigationMenuBarProps) => {
return (
  <div className='flex justify-between px-6 bg-calicoPink-100 bg-opacity-60'>
<div className='translate-y-4'>
  <CCLogo width={223}/>
  </div>
  
<Popover>
  <PopoverTrigger><IconHamburger size={2}/></PopoverTrigger>
  <PopoverContent>
    <NavigationMenu>
  <NavigationMenuList>
  
  
  {/* <div>
  {navItems.map(navItem =>{
            return (
            <NavItem {...navItem}/>
            )
        })}
  </div> */}
  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Home
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

<NavigationMenuItem>
  <Link href="/photography" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Photography
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>




  <NavigationMenuItem>
  <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Graphic Design</AccordionTrigger>
    <AccordionContent>
    <ul>
      <ListItem key={'Logo Design'}
                  title={'Logo Design'}
                   href={'/graphic-design/logo-design'} />
      <ListItem key={'Animated Graphics'}
                  title={'Animated Graphics'}
                   href={'/graphic-design/animated-graphics'} />
      <ListItem key={'Web Design'}
                  title={'Web Design'}
                   href={'/graphic-design/web-design'} />
      <ListItem key={'Branding & Social'}
                  title={'Branding & Social'}
                   href={'/graphic-design/branding-and-social'} />
      <ListItem key={'Stationary'}
                  title={'Stationary'}
                   href={'/graphic-design/stationary'} />
      <ListItem key={'Poster & Ads'}
                  title={'Poster & Ads'}
                   href={'/graphic-design/posters-and-ads'} />
    </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>
      {/* <NavigationMenuTrigger>Graphic Design</NavigationMenuTrigger>
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
    </NavigationMenuItem> */}

{/* <NavigationMenuItem>
  <Link href="#" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Photo Gallery
    </NavigationMenuLink>
  </Link>*/}
</NavigationMenuItem> 

<NavigationMenuItem>
  <Link href="/contact" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Contact
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu></PopoverContent>
</Popover>
</div>

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