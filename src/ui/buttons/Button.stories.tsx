import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {Button} from '@/ui/buttons/Button'

export default {
  title: 'Components/Buttons',
  argTypes: {
    variant: {
      options: ["pink", "pinkFocus", "orange", "peach"],
      control: { type: "select" },
    },
    buttonText: {
      control: {type: "text"}
    } 

  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Pink = Template.bind({});
Pink.args = {
  variant: "pink",
  
}

export const PinkFocus = Template.bind({});
PinkFocus.args = {
  variant: "pinkFocus",
}

export const Orange = Template.bind({});
Orange.args = {
  variant: "orange",
  
}

export const Peach = Template.bind({});
Peach.args = {
  variant: "peach",
  
}


