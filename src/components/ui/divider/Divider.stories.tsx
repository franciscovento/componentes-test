import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    dashed: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['dashed', 'dotted', 'solid'],
    },
    orientation: {
      control: 'select',
      options: ['left', 'right', 'center'],
    },
    orientationMargin: {
      control: 'number',
    },
    plain: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Playground: Story = {};
