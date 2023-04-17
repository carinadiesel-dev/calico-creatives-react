import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {IconSettings} from '@/ui/icons/IconSettings';
import {IconChat} from '@/ui/icons/IconChat';
import {IconBook} from '@/ui/icons/IconBook';
import {IconInbox} from '@/ui/icons/IconInbox';
import {IconGrid} from '@/ui/icons/IconGrid';
import {IconChecklist} from '@/ui/icons/IconChecklist';
import {IconTeam} from '@/ui/icons/IconTeam';
import {IconFilter} from '@/ui/icons/IconFilter'
import {IconEye} from '@/ui/icons/IconEye'
import {IconDocument} from '@/ui/icons/IconDocument'
import {IconTaskSquare} from './IconTaskSquare'
import {IconHeadphone} from './IconHeadphone'
import {IconBookmark2} from './IconBookmark2'
import {IconCalendarEdit} from './IconCalendarEdit'
import {IconHourglass} from './IconHourglass'
import {IconCheckmarkCircle} from './IconCheckmarkCircle'
import {IconXCircle} from './IconXCircle'
import {IconLock} from './IconLock'
import {IconEmail} from './IconEmail'
import {IconWeb} from './IconWeb'
import {IconFacebook} from './IconFacebook'
import {IconInsta} from './IconInsta'
import {IconWhatsapp} from './IconWhatsapp'
import {IconCloud} from './IconCloud'
import {IconCircleFilled} from './IconCircleFilled'
import {IconOvalFilled} from './IconOvalFilled'
import {IconPhotography} from './IconPhotography'
import {IconGraphicDesign} from './IconGraphicDesign'
import {IconTravel} from './IconTravel'

export default {
  title: 'Components/SVGIcons',
  argTypes: {

  }
}

const args = {
  size: 8
}

export const Grid: ComponentStory<typeof IconGrid> = args => <IconGrid {...args} />;
Grid.args = { ...args }

export const TaskSquare: ComponentStory<typeof IconTaskSquare> = args => <IconTaskSquare {...args} />;
TaskSquare.args = { ...args }

export const Inbox: ComponentStory<typeof IconInbox> = args => <IconInbox {...args} />;
Inbox.args = { ...args }

export const Chat: ComponentStory<typeof IconChat> = args => <IconChat {...args} />;
Chat.args = { ...args }

export const Team: ComponentStory<typeof IconTeam> = args => <IconTeam {...args} />;
Team.args = { ...args }

export const Settings: ComponentStory<typeof IconSettings> = args => <IconSettings {...args} />;
Settings.args = { ...args }

export const Headphone: ComponentStory<typeof IconHeadphone> = args => <IconHeadphone {...args} />;
Headphone.args = { ...args }

export const Lock: ComponentStory<typeof IconLock> = args => <IconLock {...args} />;
Lock.args = { ...args }

export const Bookmark2: ComponentStory<typeof IconBookmark2> = args => <IconBookmark2 {...args} />;
Bookmark2.args = { ...args }

export const CalendarEdit: ComponentStory<typeof IconCalendarEdit> = args => <IconCalendarEdit {...args} />;
CalendarEdit.args = { ...args }

export const Hourglass: ComponentStory<typeof IconHourglass> = args => <IconHourglass {...args} />;
Hourglass.args = { ...args }

export const CheckmarkCircle: ComponentStory<typeof IconCheckmarkCircle> = args => <IconCheckmarkCircle {...args} />;
CheckmarkCircle.args = { ...args }

export const XCircle: ComponentStory<typeof IconXCircle> = args => <IconXCircle {...args} />;
XCircle.args = { ...args }

export const Email: ComponentStory<typeof IconEmail> = args => <IconEmail {...args} />;
Email.args = { ...args }

export const Web: ComponentStory<typeof IconWeb> = args => <IconWeb {...args} />;
Web.args = { ...args }

export const Facebook: ComponentStory<typeof IconFacebook> = args => <IconFacebook {...args} />;
Facebook.args = { ...args }

export const Instagram: ComponentStory<typeof IconInsta> = args => <IconInsta {...args} />;
Instagram.args = { ...args }

export const Whatsapp: ComponentStory<typeof IconWhatsapp> = args => <Whatsapp {...args} />;
Whatsapp.args = { ...args }

export const Cloud: ComponentStory<typeof IconCloud> = args => <Cloud {...args} />;
Cloud.args = { ...args }

export const CircleFilled: ComponentStory<typeof IconCircleFilled> = args => <CircleFilled {...args} />;
CircleFilled.args = { ...args }

export const OvalFilled: ComponentStory<typeof IconOvalFilled> = args => <IconOvalFilled {...args} />;
OvalFilled.args = { ...args }

export const Photography: ComponentStory<typeof IconPhotography> = args => <IconPhotography {...args} />;
Photography.args = { ...args }

export const GraphicDesign: ComponentStory<typeof IconGraphicDesign> = args => <IconGraphicDesign {...args} />;
GraphicDesign.args = { ...args }

export const Travel: ComponentStory<typeof IconTravel> = args => <IconTravel {...args} />;
Travel.args = { ...args }