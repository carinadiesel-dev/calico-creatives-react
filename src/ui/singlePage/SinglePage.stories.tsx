import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SinglePage } from '@/ui/singlePage/SinglePage'; 

export default {
  title: 'Components/SinglePage',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof SinglePage> = args => <SinglePage {...args} />;

export const Default = Template.bind({});
Default.args = {
}