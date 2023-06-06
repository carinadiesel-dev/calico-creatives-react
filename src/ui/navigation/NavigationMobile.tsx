import React, {AnchorHTMLAttributes, FunctionComponent, PropsWithChildren, useState} from 'react'
import {CCLogo} from '@/ui/logos/CCLogo';
import { IconHamburger } from '../icons/IconHamburger';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type NavRow = {
  title: string
  link: string
  subMenu?: { title: string; href: string; description: string }[]
}

const subMenu: { title: string; href: string; description: string }[] = [
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

// type NavItem = {

// }

type NavigationMobileProps = {
  // navItems: NavItem[]
}

// const NavItem : FunctionComponent<NavRow> = ({
//   title,
//   link,
//   subMenu
// }) => {
//   const hasSubMenu = subMenu !== undefined ? true : false;
//   return (
//   <NavigationMenuItem>
//     {hasSubMenu === true ?
//       <><NavigationMenuTrigger>{title}</NavigationMenuTrigger><NavigationMenuContent className='bg-calicoPink-100'>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {subMenu && subMenu.map((item) => (
//                 <ListItem
//                   key={item.title}
//                   title={item.title}
//                   href={item.href}
//                 >
//                   {item.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent></>
//       :
//   <Link href={link} legacyBehavior passHref>
//     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//       {title}
//     </NavigationMenuLink>
//   </Link>
// }
// </NavigationMenuItem>
//   )
// }


export const NavigationMobile = ({}:NavigationMobileProps) => {
return (
  <div className='flex justify-between'>
    <div className='ml-10 translate-y-2'>
  <CCLogo/>
  </div>
  <DropdownMenu>
  <DropdownMenuTrigger>
    <div>
    <HamburgerMenuIcon aria-setsize={2} />
    </div>
    
  </DropdownMenuTrigger>
  <DropdownMenuPortal>
  <DropdownMenuContent>
    <DropdownMenuItem>Home</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Photography</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Graphic Design</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Photo Gallery</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Contact</DropdownMenuItem>
    <DropdownMenuSeparator />
  </DropdownMenuContent>
  </DropdownMenuPortal>
</DropdownMenu>
  </div>
)
}