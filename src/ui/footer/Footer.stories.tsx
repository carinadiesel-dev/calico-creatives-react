import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Footer } from '@/ui/footer/Footer'; 

export default {
  title: 'Components/Footer',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const footerPink = Template.bind({});
footerPink.args = {
  credits: "Created by Calico Creatives",
  backgroundColor: 'bg-calicoPink-400'
}

export const footerOrange = Template.bind({});
footerOrange.args = {
  credits: "Created by Calico Creatives",
  backgroundColor: 'bg-calicoOrange-400'
}


export const footerPeach = Template.bind({});
footerPeach.args = {
  credits: "Created by Calico Creatives",
  backgroundColor: 'bg-calicoPeach-400'
}