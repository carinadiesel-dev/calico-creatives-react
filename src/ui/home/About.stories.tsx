import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { About } from '@/ui/home/About'; 

export default {
  title: 'Components/About',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof About> = args => <About {...args} />;

// const About = 'Once upon there was a south african girly girl named Suané. She was always drawn to light and beauty, so she decided to paint with light to show off the colours this world have to offer. She studied graphic design in vancouver, canada. Never defined by a place or a thing, she always aims to try and be a master of all trades, a jack of none.'

let card1 = {
    backgroundColor: 'bg-calicoPink-400',
    image: "",
    btnText: 'Photography'
}

let card2 = {
    backgroundColor: 'bg-calicoOrange-400',
    image: "",
    btnText: 'Photography'
}

let card3 = {
    backgroundColor: 'bg-calicoPeach-400',
    image: "",
    btnText: 'Photography'
}

const cards = [card1,card2,card3];


export const Default = Template.bind({});
Default.args = {
 
}