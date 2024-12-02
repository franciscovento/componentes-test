import type { Meta, StoryObj } from '@storybook/react';
import { BaseCard } from './BaseCard';

const meta: Meta<typeof BaseCard> = {
  title: 'CARDS/BaseCard',
  component: BaseCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseCard>;

export const Playground: Story = {
  args: {
    children: 'This is a base card with text',
  },
};
