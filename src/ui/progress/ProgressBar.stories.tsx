import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ProgressBar} from '@/ui/progress/ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = args =>
  <div className={"p-4 bg-gray-100"}>
    <ProgressBar {...args} />
  </div>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  progress: .73,
  settings: {
    barColor: "#f87171",
    backgroundColor: "white"
  }
}