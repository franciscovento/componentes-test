import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'TYPOGRAPHY/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: false,
    },
    variant: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
    },
    weight: {
      control: 'radio',
      options: ['500', '600', '700'],
    },
    children: {
      control: 'text',
    },
    className: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.  ',
    as: 'p',
    variant: 'md',
    weight: '500',
  },
};
