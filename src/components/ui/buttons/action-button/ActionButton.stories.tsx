import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ActionButton from './ActionButton';

const meta: Meta<typeof ActionButton> = {
  title: 'BUTTONS/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Playground: Story = {
  args: {
    children: 'Action',
  },
};
