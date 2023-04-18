import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Travel } from '@/ui/travel/Travel'; 

export default {
  title: 'Components/Travel',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof Travel> = args => <Travel {...args} />;

export const Default = Template.bind({});
Default.args = {
}