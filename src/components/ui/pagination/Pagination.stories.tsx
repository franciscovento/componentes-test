import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'simple'],
      },
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Playground: Story = {
  args: {
    total: 10,
    current: 1,
    pageSize: 10,
  },
};
