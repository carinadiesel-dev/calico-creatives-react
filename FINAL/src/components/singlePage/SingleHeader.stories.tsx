import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SingleHeader } from '@/ui/singlePage/SingleHeader'; 

export default {
  title: 'Components/SingleHeader',
  argTypes: {
    title: {
        control: {type: "text"}
    }
    
  }
} 

const Template: ComponentStory<typeof SingleHeader> = args => <SingleHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Calico Test String"
}