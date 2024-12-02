import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PresetStatusColorTypes } from 'antd/es/_util/colors';
import { PresetColors } from 'antd/es/theme/internal';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: [...PresetColors, ...PresetStatusColorTypes],
    },
    children: {
      control: {
        type: 'text',
      },
    },
    bordered: {
      control: 'boolean',
    },
    closable: {
      control: 'boolean',
    },
  },
  args: {
    onClose: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: {
    children: 'this is a tag',
    color: 'blue',
    bordered: true,
    closable: false,
  },
};
