import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Shapes } from '@/ui/photography/Shapes'; 

export default {
  title: 'Components/Shapes',
  argTypes: {
    variant: {
        options:["leftAligned", "rightAligned"],
        control: { type: "select"}
    },
    priceText: {
        control: {type: "text"}
      } 
    
  }
} 

const Template: ComponentStory<typeof Shapes> = args => <Shapes {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "leftAligned",
  
}

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  variant: "leftAligned",
  
}

export const RightAligned = Template.bind({});
RightAligned.args = {
  variant: "rightAligned",
  
}