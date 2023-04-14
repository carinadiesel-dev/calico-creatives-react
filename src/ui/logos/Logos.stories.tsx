import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {CCLogo} from '@/ui/logos/CCLogo'
import {CMELogo} from '@/ui/logos/CMELogo'

export default {
  title: 'Components/Logos',
  argTypes: {

  }
}

const CCLogoTemplate: ComponentStory<typeof CCLogo> = args => <CCLogo {...args} />;

export const CCLogoSmall = CCLogoTemplate.bind({});
CCLogoSmall.args = {
  width: 212,
  height: 96
}

export const CCLogoLarge = CCLogoTemplate.bind({});
CCLogoLarge.args = {
  width: 1024,
  height: 600
}

const CMELogoTemplate: ComponentStory<typeof CMELogo> = args => <CMELogo {...args} />;

export const CMELogoNormal = CMELogoTemplate.bind({});
CMELogo.args = {
  width: 911.491,
  height: 591.898
}

const AOCLogoTemplate: ComponentStory<typeof AOCLogo> = args => <AOCLogo {...args} />;

export const AOCLogoNormal = AOCLogoTemplate.bind({});
AOCLogo.args = {
  width: 1185.479,
  height: 614.711
}

