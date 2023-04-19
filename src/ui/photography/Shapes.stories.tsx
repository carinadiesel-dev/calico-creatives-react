import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from 'next/image'
import weddingImg from './Assets/wedding.jpg'
import studioImg from './Assets/studio.jpg'
import newbornImg from './Assets/newborn.png'
import lifestyleImg from './Assets/lifestyle.jpg'
import engagementsImg from './Assets/engagements.jpg'

import { Shapes } from '@/ui/photography/Shapes'; 

export default {
  title: 'Components/Shapes',
  argTypes: {
    variant: {
        options:["leftAligned", "rightAligned"],
        control: { type: "select"}
    },
    priceText: {
        control: {type: "text"}
      },
    // src: {
    //   options:[ weddingImg , studioImg , newbornImg , lifestyleImg, engagementsImg],
    //   control: {type: "select"}
    // } 
  }
} 

const Template: ComponentStory<typeof Shapes> = args => <Shapes {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "leftAligned",
  src: weddingImg
  
}

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  variant: "leftAligned",
  src: weddingImg
}

export const RightAligned = Template.bind({});
RightAligned.args = {
  variant: "rightAligned",
  src: engagementsImg
  
}