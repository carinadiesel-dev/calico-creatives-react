import React, {AnchorHTMLAttributes, FunctionComponent, PropsWithChildren, useState} from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { z } from "zod";
import {CCLogo} from '@/ui/logos/CCLogo'

const navSubItems = z.object({
  title: z.string(),
  description: z.string()
})

type NavItemButton = typeof z.object({
  title: z.string(),
  link: z.string(),
  isActive: z.boolean(),
  subMenu?: z.array(navSubItems)
});

const navButton =`flex items-center justify-start gap-8 px-8 font-bold  cursor-pointer relative h-[96px] transition hover:bg-calicoRedOrange-400 hover:text-calicoPink-200 text-calicoRedOrange-400`;

const navButtonActive = `bg-calicoRedOrange-400 text-calicoWhite-300 `;

const NavItem : FunctionComponent<NavItemButton> = ({
  title,
  link,
  isActive,
  subMenu
}) => {
<NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href={link}>
            {title}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
}

type NavItem = {

}

type NavItemProps = {
  title: string
  navItems: NavItem[]
}


type NavigationMenuBarProps = {}

export const NavigationMenuBar = ({}: NavigationMenuBarProps) => {  

  
  
  

  // const className = `[data-active] ? ${navButtonActive} : ${navButton}`;
  return (
    <NavigationMenu.Root className="bg-calicoPink-100 bg-opacity-60 relative z-[1] flex w-screen px-16">
      <NavigationMenu.List className="flex justify-around items-center">
        <div className='mt-2'>
        <CCLogo />
        </div>
      
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#home"
            >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#">
            Photography
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
        <NavigationMenu.Trigger className={navButton}>
            Graphic Design{' '}
            <CaretDownIcon
              className="text-calicoRedOrange-400 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden/>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0  w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Logo Design" href="#">
              We create professional logos from scratch based on your needs and preferences.
              </ListItem>
              <ListItem title="Animated Graphics" href="#">
              To bring a uniqueness to your logo, we can add some motion.
              </ListItem>
              <ListItem title="Web Design" href="#">
              You are currently viewing one of our websites.
              </ListItem>
              <ListItem title="Branding & Social" href="#">
              Social media increases the amount of exposure a brand receives and increases traffic
              </ListItem>
              <ListItem title="Stationary" href="#">
              We offer luxury stationery for all of life’s special celebrations and events.
              </ListItem>
              <ListItem title="Posters & Ads" href="#">
              Turn anything into a poster
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#">
            Photo Gallery
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#"
            >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-calicoRedOrange-400 mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-calicoGray-400 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

