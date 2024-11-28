import type { Meta, StoryObj } from '@storybook/react';
import Upload from './Upload';

const meta: Meta<typeof Upload> = {
  title: 'UI/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Playground: Story = {
  args: {
    variant: 'drag',
  },
};
