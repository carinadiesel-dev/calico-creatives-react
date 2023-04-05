import React, {AnchorHTMLAttributes, PropsWithChildren, useState} from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import {CCLogo} from '@/ui/logos/CCLogo'

type NavigationMenuBarProps = {}




export const NavigationMenuBar = ({}: NavigationMenuBarProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  }

  const navButton =`flex items-center justify-start gap-8 px-8 font-bold text-calicoRedOrange-400 cursor-pointer relative
  h-[96px]
  transition
  hover:bg-calicoRedOrange-400
  hover:text-calicoPink-200
  ${isActive && 'bg-calicoRedOrange-400'}
  ${isActive && 'text-calicoWhite-300'}
  `
;   
  return (
    <NavigationMenu.Root className="bg-calicoPink-100 bg-opacity-60 relative z-[1] flex w-screen px-16">
      <NavigationMenu.List className="flex justify-around items-center">
        <div className='mt-2'>
        <CCLogo />
        </div>
      
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#"
            onClick={handleClick}>
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#"
            onClick={handleClick}>
            Photography
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#"
            onClick={handleClick}>
            Graphic Design
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#"
            onClick={handleClick}>
            Photo Gallery
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={navButton}
            href="#"
            onClick={handleClick}>
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
