import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Footer } from '@/ui/footer/Footer'; 

export default {
  title: 'Components/Footer',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

let footerPink = {
    backgroundColor: 'bg-calicoPink-400'
}

let footerPeach = {
    backgroundColor: 'bg-calicoPeach-400'
}

let footerOrange = {
    backgroundColor: 'bg-calicoOrange-400'
}

const footerTypes = [footerPink,footerPeach,footerOrange]


export const Default = Template.bind({});
Default.args = {
  credits: "Created by Calico Creatives",
//   backgroundColor: 'bg-calicoPink-400'
}