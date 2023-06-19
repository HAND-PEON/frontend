import type { Meta, StoryObj } from '@storybook/react';

import ProductEventCard from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductEventCard> = {
  title: 'Example/ProductEventCard',
  component: ProductEventCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductEventCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'ProductEventCard',
  },
};
