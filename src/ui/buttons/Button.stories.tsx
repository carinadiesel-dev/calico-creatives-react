import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {Button} from '@/ui/buttons/Button'
import {IconEye} from '@/ui/icons/IconEye'
import {IconFilter} from '@/ui/icons/IconFilter'

export default {
  title: 'Components/Buttons',
  argTypes: {
    variant: {
      options: ["primary", "fancy"],
      control: { type: "select" }
    },
    size: {
      options: ["default", "lg"],
      control: { type: "select" }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  size: "default"
}

export const Fancy = Template.bind({});
Fancy.args = {
  variant: "fancy",
  children: <>
    <IconFilter /> Filter <span className="text-lg font-bold">2</span>
  </>
}

export const Icon = Template.bind({});
Icon.args = {
  children: <>
    <IconEye /> View all keyword reports
  </>
}