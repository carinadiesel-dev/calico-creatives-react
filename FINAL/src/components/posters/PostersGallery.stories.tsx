import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PostersGallery } from '@/ui/posters/PostersGallery'; 

export default {
  title: 'Components/PostersGallery',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof PostersGallery> = args => <PostersGallery {...args} />;

export const Default = Template.bind({});
Default.args = {

}