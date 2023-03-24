import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {TextInput} from './TextInput'

export default {
  title: 'Components/Inputs',
  argTypes: {

  }
}

const InputTemplate: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Placeholder = InputTemplate.bind({});
Placeholder.args = {
  placeholder: "Name Surname",
  value: "",
  disabled: false
}

export const Filled = InputTemplate.bind({});
Filled.args = {
  placeholder: "Name Surname",
  value: "Dean Harber",
  disabled: false
}

export const Error = InputTemplate.bind({});
Error.args = {
  invalid: true,
  placeholder: "Name Surname",
  value: "Something invalid",
  disabled: false
}