import React, {AnchorHTMLAttributes, PropsWithChildren} from 'react'
import {MCPLogo} from '@/ui/logos/MCPLogo'
import {IconGrid} from '@/ui/icons/IconGrid'
import {IconChat} from '@/ui/icons/IconChat'
import {IconChecklist} from '@/ui/icons/IconChecklist'
import {IconInbox} from '@/ui/icons/IconInbox'
import {IconTeam} from '@/ui/icons/IconTeam'
import {IconSettings} from '@/ui/icons/IconSettings'
import {IconBook} from '@/ui/icons/IconBook'

type AppNavigationProps = {}

export const AppNavigation = ({}: AppNavigationProps) => {
  return <div className="bg-orange-gradient-vertical rounded-r-2xl min-h-screen flex flex-col justify-between">
    <div>
      <div className="flex justify-center px-4 py-8">
        <MCPLogo />
      </div>

      <div className="mt-8">
        <nav className="text-white">
          <ul>
            <li>
              <NavButton>
                <IconGrid />
                Overview
              </NavButton>
            </li>
            <li>
              <NavButton>
                <IconTeam />
                Team
              </NavButton>
            </li>
            <li>
              <NavButton>
                <IconInbox />
                Inbox
              </NavButton>
            </li>
            <li>
              <NavButton active>
                <IconChecklist />
                Projects
              </NavButton>
            </li>
            <li>
              <NavButton>
                <IconChat />
                Chat
              </NavButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div>
      <hr className="text-white my-8" />

      <nav className="text-white pb-10">
        <ul>
          <li>
            <NavButton compact>
              <IconSettings />
              Settings
            </NavButton>
          </li>
          <li>
            <NavButton compact>
              <IconBook />
              Help
            </NavButton>
          </li>
        </ul>
      </nav>
    </div>

  </div>;
}

type NavButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean
  compact?: boolean
}

const NavButton = ({ active = false, compact = false, ...rest }: NavButtonProps) => {
  const className = `flex items-center gap-8 px-6 font-light cursor-pointer relative
    ${compact ? "h-[55px]":"h-[85px]"}
    transition
    hover:bg-orange-600
    group-[.active]:bg-orange-600
    group-[.active]:font-semibold
    group-[.active]:before:content-['']
    group-[.active]:before:block
    group-[.active]:before:absolute
    group-[.active]:before:bg-white
    group-[.active]:before:w-[10px]
    group-[.active]:before:h-full
    group-[.active]:before:left-0
  `;

  return <span className={`group ${active ? "active":""}`}>
    <a className={className} {...rest} />
  </span>
}