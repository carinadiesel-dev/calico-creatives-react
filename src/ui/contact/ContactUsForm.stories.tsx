import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContactUsForm } from '@/ui/contact/ContactUsForm'; 

export default {
  title: 'Components/ContactUsForm',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof ContactUsForm> = args => <ContactUsForm {...args} />;

export const Default = Template.bind({});
Default.args = {
}