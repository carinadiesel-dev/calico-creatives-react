import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContactForm } from '@/ui/contact/ContactForm'; 

export default {
  title: 'Components/ContactForm',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof ContactForm> = args => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
}