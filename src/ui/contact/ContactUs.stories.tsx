import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContactUs } from '@/ui/contact/ContactUs'; 

export default {
  title: 'Components/ContactUs',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof ContactUs> = args => <ContactUs {...args} />;

export const Default = Template.bind({});
Default.args = {
}