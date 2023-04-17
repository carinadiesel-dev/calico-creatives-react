import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Cards } from '@/ui/home/Cards'; 
import {Photography} from '@/ui/icons/IconPhotography'

export default {
  title: 'Components/Cards',
  argTypes: {
    
  }
} 

const Template: ComponentStory<typeof Cards> = args => <Cards {...args} />;

let card1 = {
    backgroundColor: 'bg-calicoPink-400',
    // image: `${<IconPhotography />}`,
    btnText: 'Photography'
}

let card2 = {
    backgroundColor: 'bg-calicoOrange-400',
    // image: "",
    btnText: 'Photography'
}

let card3 = {
    backgroundColor: 'bg-calicoPeach-400',
    // image: "",
    btnText: 'Photography'
}

const cards = [card1,card2,card3];


export const Default = Template.bind({});
Default.args = {
 cards
}