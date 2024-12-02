import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'INPUTS/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  args: {
    onApply: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Playground: Story = {};
