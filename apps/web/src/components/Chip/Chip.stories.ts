import type { Meta, StoryObj } from '@storybook/react';

import Chip from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Chip> = {
  title: 'Example/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
