import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImageRow } from '@/ui/branding/ImageRow'; 

export default {
  title: 'Components/ImageRow',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof ImageRow> = args => <ImageRow {...args} />;

export const Default = Template.bind({});
Default.args = {
}