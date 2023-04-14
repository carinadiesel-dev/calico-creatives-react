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
    // btnText: {"Get a quote", "View Gallery","Coming Soon"}
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Pink = Template.bind({});
Pink.args = {
  variant: "pink",
  // btntext: "Get a quote"
  
}

export const PinkFocus = Template.bind({});
PinkFocus.args = {
  variant: "pinkFocus",
  // btntext: "Get a quote"
}

export const Orange = Template.bind({});
Orange.args = {
  variant: "orange",
  // btntext: "Get a quote"
  
}

export const Peach = Template.bind({});
Peach.args = {
  variant: "peach",
  // btntext: "Get a quote"
  
}


