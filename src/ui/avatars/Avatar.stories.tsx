import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {Avatar} from '@/ui/avatars/Avatar'

export default {
  title: 'Components/Avatar',
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" }
    }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Image = Template.bind({});
Image.args = {
  size: "large",
  avatarUrl: "https://lh3.googleusercontent.com/ogw/AAEL6sgph_0hXoH6QbrJNS023j7yMfgXJZOCzgf_NzVKVg=s32-c-mo",
}

export const Initials = Template.bind({});
Initials.args = {
  size: "large",
  color: "white",
  backgroundColor: "#1EA7FD",
  initials: "DH"
}