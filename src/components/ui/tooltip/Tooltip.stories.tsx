import type { Meta, StoryObj } from '@storybook/react';
import { TooltipStory } from './Tooltip';

const meta: Meta<typeof TooltipStory> = {
  title: 'UI/Tooltip',
  component: TooltipStory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom',
      ],
    },
    arrow: {
      control: 'boolean',
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TooltipStory>;

export const Playground: Story = {
  args: {
    title: 'Tooltip',
    placement: 'top',
    arrow: true,
  },
};
