import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PageTitle } from '@/ui/pageTitle/PageTitle'; 

export default {
  title: 'Components/PageTitle',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof PageTitle> = args => <PageTitle {...args} />;


export const pageTitlePink = Template.bind({});
pageTitlePink.args = {
    title: 'Photography',
    titleColor: 'text-calicoPeach-400', 
    backgroundGradient: 'bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400'
 
}

export const pageTitleOrange = Template.bind({});
pageTitleOrange.args = {
    title: 'Logo Design',
    titleColor: 'text-calicoPink-400', 
    backgroundGradient: 'bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400'
}

export const pageTitlePeach = Template.bind({});
pageTitlePeach.args = {
    title: 'Animated Graphics',
    titleColor: 'text-calicoPeach-400', 
    backgroundGradient: 'bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300'
}