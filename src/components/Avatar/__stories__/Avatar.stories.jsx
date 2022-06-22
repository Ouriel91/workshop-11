import React from 'react';

import { Avatar } from '../Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Avatar {...args} />;
export const Round = Template.bind({});
Round.args = {
  shapes: 'round',
  src: 'https://files.monday.com/use1/photos/12322359/thumb/12322359-user_photo_2021_11_17_18_40_38.png?1637174438'
};

export const RoundLarge = Template.bind({});
RoundLarge.args = {
  size: 'large'
}

export const RoundMedium = Template.bind({});
RoundMedium.args = {
  size: 'medium'
}

export const RoundSmall = Template.bind({});
RoundSmall.args = {
  size: 'small'
}

export const RoundHide = Template.bind({});
RoundHide.args = {
  disabled: true,
  shapes: 'round',
  src: 'https://files.monday.com/use1/photos/12322359/thumb/12322359-user_photo_2021_11_17_18_40_38.png?1637174438'
};

export const RoundLetter = Template.bind({});
RoundLetter.args = {
  shapes: 'round',
  src: null,
  backgroundColor: 'green',
  content: "HI"
}

export const Square = Template.bind({});
Square.args = {
  shapes: 'square',
  src: 'https://cdn.shopify.com/app-store/listing_images/c40a6ffa6b00b28d4e7846f327b5f861/icon/CIri04KQlvACEAE=.png'
};

export const SquareHide = Template.bind({});
SquareHide.args = {
  disabled: true,
  shapes: 'square',
  src: 'https://cdn.shopify.com/app-store/listing_images/c40a6ffa6b00b28d4e7846f327b5f861/icon/CIri04KQlvACEAE=.png'
};

export const SquareLarge = Template.bind({});
SquareLarge.args = {
  size: 'large',
  shapes: 'square',
  src: 'https://cdn.shopify.com/app-store/listing_images/c40a6ffa6b00b28d4e7846f327b5f861/icon/CIri04KQlvACEAE=.png'
}

export const SquareMedium = Template.bind({});
SquareMedium.args = {
  size: 'medium',
  shapes: 'square',
  src: 'https://cdn.shopify.com/app-store/listing_images/c40a6ffa6b00b28d4e7846f327b5f861/icon/CIri04KQlvACEAE=.png'
}

export const SquareSmall = Template.bind({});
SquareSmall.args = {
  size: 'small',
  shapes: 'square',
  src: 'https://cdn.shopify.com/app-store/listing_images/c40a6ffa6b00b28d4e7846f327b5f861/icon/CIri04KQlvACEAE=.png'
}
