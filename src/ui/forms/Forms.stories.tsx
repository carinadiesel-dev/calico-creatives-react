import React from 'react';
import { ComponentStory } from '@storybook/react';
import {ContactForm} from './ContactForm'

export default {
  title: 'Forms/SignUp',
  argTypes: {

  }
}

const Template: ComponentStory<typeof ContactForm> = args => <div className="p-10 bg-white">
  <ContactForm {...args} />
</div>;

export const Empty = Template.bind({});
Empty.args = {

}

export const Filled = Template.bind({});
Filled.args = {
  initialValues: {
    firstName: "Dean Harber",
    email: "dean@codeswop.com",
  }
}

export const Errors = Template.bind({});
Errors.args = {
  validateOnMount: true,
  initialValues: {
    firstName: "Dean Harber",
    email: "deancodeswop.com",
  }
}