import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    message: {
      control: 'text',
    },
    showIcon: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    closable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  args: {
    message: 'This is a success message',
    type: 'success',
    showIcon: true,
    closable: true,
  },
};

export const Warning: Story = {
  args: {
    message: 'This is a warning message',
    type: 'warning',
    showIcon: true,
    closable: true,
  },
};

export const Info: Story = {
  args: {
    message: 'This is a info message',
    type: 'info',
    showIcon: true,
    closable: true,
  },
};
