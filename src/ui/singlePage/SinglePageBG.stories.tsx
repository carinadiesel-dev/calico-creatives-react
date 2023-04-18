import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SinglePageBG } from '@/ui/singlePage/SinglePageBG'; 

export default {
  title: 'Components/SinglePageBG',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof SinglePageBG> = args => <SinglePageBG {...args} />;

export const Default = Template.bind({});
Default.args = {
}