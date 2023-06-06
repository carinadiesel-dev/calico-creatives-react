import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StationaryGallery } from '@/ui/stationary/StationaryGallery'; 

export default {
  title: 'Components/StationaryGallery',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof StationaryGallery> = args => <StationaryGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
}