import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Form } from '@/ui/contact/Form'; 

export default {
  title: 'Components/Form',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof Form> = args => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
}