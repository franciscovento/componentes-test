import type { Meta, StoryObj } from '@storybook/react';
import Steps from './Steps';

const meta: Meta<typeof Steps> = {
  title: 'UI/Steps',
  component: Steps,
  parameters: {
    layout: 'padded',
  },
  args: {
    items: [{}, {}, {}, {}],
    current: 0,
  },
  argTypes: {
    current: {
      control: 'number',
    },
    variant: {
      control: 'select',
      options: ['default', 'custom'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Playground: Story = {
  args: {
    variant: 'default',
    responsive: false,
  },
};
