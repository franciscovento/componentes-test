import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'TYPOGRAPHY/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: false,
      description: 'The HTML tag to render the title',
    },
    variant: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm'],
    },
    children: {
      control: 'text',
    },
    weight: {
      control: 'radio',
      options: ['600', '700'],
    },
    className: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Playground: Story = {
  args: {
    as: 'h1',
    children: 'This a Xl title',
    variant: 'xl',
    weight: '700',
  },
};
