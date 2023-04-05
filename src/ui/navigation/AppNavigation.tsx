import React, {AnchorHTMLAttributes, PropsWithChildren} from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {CCLogo} from '@/ui/logos/CCLogo'

type AppNavigationProps = {}

export const AppNavigation = ({}: AppNavigationProps) => {
  return <div className="bg-calicoPink-100 rounded-r-2xl w-screen flex justify-between px-16">
    <div className='flex my-4'>
      <div className='mt-2'>
        <CCLogo />
      </div>

      <div className="flex pl-8">
        <nav className="text-calicoRedOrange-400 text-xl font-bold gap-8">
          <ul className='flex justify-around'>
            <li>
              <NavButton active>
                Home
              </NavButton>
            </li>
            <li>
              <NavButton>
                Photography
              </NavButton>
            </li>
            <li>
              <NavButton>
                Graphic Design
              </NavButton>
            </li>
            <li>
              <NavButton>
                Photo Gallery
              </NavButton>
            </li>
            <li>
              <NavButton>
                Contact
              </NavButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </div>;
}

type NavButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean
  compact?: boolean
}

const NavButton = ({ active = false, compact = false, ...rest }: NavButtonProps) => {
  const className = `flex items-center gap-8 px-8 font-light cursor-pointer relative
    ${compact ? "h-[55px]":"h-[96px]"}
    transition
    hover:bg-calicoRedOrange-400
    hover:text-calicoPink-200
    hover:rounded-2xl
    group-[.active]:bg-calicoRedOrange-400
    group-[.active]:text-calicoWhite-300
    group-[.active]:font-bold
    group-[.active]:rounded-2xl
  `;

  return <span className={`group ${active ? "active":""}`}>
    <a className={className} {...rest} />
  </span>
}

