import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { NavigationMenuBar } from '@/ui/navigation/NavigationMenuBar';

export default {
  title: 'Components/AppNavigationMenu',
  component: NavigationMenuBar,
  argTypes: {

  }
} as ComponentMeta<typeof NavigationMenuBar>;

const Template: ComponentStory<typeof NavigationMenuBar> = (args) =>
  <div className="">
    <NavigationMenuBar {...args} />
  </div>
;

export const Default = Template.bind({});
Default.args = {

}




