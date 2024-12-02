import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'INPUTS/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
    variant: {
      control: 'select',
      options: ['default', 'label'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  args: {
    size: 'default',
    variant: 'default',
  },
};

export const SwitchLabel: Story = {
  args: {
    size: 'default',
    variant: 'label',
  },
};
