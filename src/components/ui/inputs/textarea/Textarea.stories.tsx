import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'INPUTS/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    showCount: {
      control: 'boolean',
    },
    maxLength: {
      control: 'number',
    },
    rows: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
  render: (args) => (
    <div className="sui-w-[350px]">
      {' '}
      <Textarea {...args} />
    </div>
  ),
  args: {
    showCount: true,
    maxLength: 100,
    rows: 5,
  },
};
