import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Paragraph } from '@/ui/paragraph/Paragraph'; 

export default {
  title: 'Components/Paragraph',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof Paragraph> = args => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laudantium libero eius aliquid nisi aperiam ratione? Nesciunt, blanditiis. Laudantium velit reiciendis numquam voluptatem quaerat soluta provident sed. Esse, ducimus provident!"
 
}