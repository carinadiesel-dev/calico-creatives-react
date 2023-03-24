import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {MCPLogo} from '@/ui/logos/MCPLogo'

export default {
  title: 'Components/Logos',
  argTypes: {

  }
}

const MCPLogoTemplate: ComponentStory<typeof MCPLogo> = args => <MCPLogo {...args} />;

export const MCPLogo1 = MCPLogoTemplate.bind({});
MCPLogo1.args = {
  width: 107,
  height: 100
}