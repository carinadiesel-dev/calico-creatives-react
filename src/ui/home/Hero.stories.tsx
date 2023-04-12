import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Hero } from '@/ui/home/Hero'; 

export default {
  title: 'Components/Hero',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof Hero> = args => <Hero {...args} />;


export const Default = Template.bind({});
Default.args = {
 
}