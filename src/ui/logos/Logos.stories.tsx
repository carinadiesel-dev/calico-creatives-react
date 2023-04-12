import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {CCLogo} from '@/ui/logos/CCLogo'

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
