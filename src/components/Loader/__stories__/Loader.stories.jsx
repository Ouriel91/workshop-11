import React from 'react';

import { Loader } from '../Loader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Loader',
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Loader {...args} />;
export const XS = Template.bind({});
XS.args = {
  xy: 16,
  r: 10,
};

export const S = Template.bind({});
S.args = {
    xy: 23,
    r: 15,
};

export const M = Template.bind({});
M.args = {
    xy: 40,
    r: 20,
};

export const L = Template.bind({});
L.args = {
    xy: 64,
    r: 30,
}

export const Dark = Template.bind({});
Dark.args = {
    xy: 40,
    r: 20,
}

export const Primary = Template.bind({});
Primary.args = {
    xy: 40,
    r: 20,
    stroke: 'cyan'
}

export const Secondary = Template.bind({});
Secondary.args = {
    xy: 40,
    r: 20,
    stroke: 'gray'
}

export const onColor = Template.bind({});
onColor.args = {
    xy: 40,
    r: 20,
    stroke: 'white',
    backgroundColor: 'green'
}

export const VarientNo = Template.bind({});
VarientNo.args = {
    xy: 40,
    r: 20,
    varient: 'no'
}

export const VarientWith = Template.bind({});
VarientWith.args = {
    xy: 40,
    r: 20,
    varient: 'with'
}


