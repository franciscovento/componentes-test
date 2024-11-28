import type { Meta, StoryObj } from '@storybook/react';
import { IconsStory } from './IconsStory';

const meta: Meta<typeof IconsStory> = {
  title: 'Icons/IconsStory',
  component: IconsStory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    textColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconsStory>;

export const Playground: Story = {
  args: {
    textColor: '#344054',
  },
};
