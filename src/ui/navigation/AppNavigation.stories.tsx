import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { AppNavigation } from '@/ui/navigation/AppNavigation';

export default {
  title: 'Components/AppNavigation',
  component: AppNavigation,
  argTypes: {

  }
} as ComponentMeta<typeof AppNavigation>;

const Template: ComponentStory<typeof AppNavigation> = (args) =>
  <div className="w-screen">
    <AppNavigation {...args} />
  </div>
;

export const Default = Template.bind({});
Default.args = {

}



