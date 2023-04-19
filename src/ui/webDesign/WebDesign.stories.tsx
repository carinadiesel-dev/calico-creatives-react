import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContactUs } from '@/ui/webDesign/WebDesign'; 

export default {
  title: 'Components/WebDesign',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof WebDesign> = args => <WebDesign {...args} />;

export const Default = Template.bind({});
Default.args = {
}