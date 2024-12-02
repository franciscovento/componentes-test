import { SvgArrowRight } from '@/components/svg';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {
  ButtonSize,
} from 'antd/es/button';
import Button from './Button';

const buttonSizes: ButtonSize[] = ['small', 'middle', 'large'];

const meta: Meta<typeof Button> = {
  title: 'BUTTONS/Button',
  component: Button,
  argTypes: {
    type: {
      control: false,
    },
    color: {
      options: ["default", "primary","danger"],
      control: {
        type: 'select',
      },
    },
    size: {
      options: buttonSizes,
      control: {
        type: 'radio',
      },
    },
    icon: {
      control: {
        type: 'text',
      },
    },
    iconPosition: {
      options: ['start', 'end'],
      control: {
        type: 'radio',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: 'Button CTA',
    icon: '⚠️',
    iconPosition: 'start',
    loading: false,
    size: 'middle',
    variant: 'outlined',
    color: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Button CTA',
    icon: '⚠️',
    variant: 'solid',
    color: 'primary',
    size: 'middle',
  },
};

export const SecondaryGray: Story = {
  args: {
    children: 'Button CTA',
    variant: 'outlined',
    color: 'default',
    icon: '⚠️',
    size: 'middle',
  },
};

export const SecondaryColor: Story = {
  args: {
    children: 'Button CTA',
    variant: 'outlined',
    color: 'primary',
    icon: '⚠️',
    size: 'middle',
  },
};

export const TertiaryGray: Story = {
  args: {
    children: 'Button CTA',
    variant: 'text',
    color: 'default',
    icon: '⚠️',
    size: 'middle',
  },
};

export const TertiaryColor: Story = {
  args: {
    children: 'Button CTA',
    variant: 'text',
    color: 'primary',
    icon: '⚠️',
    size: 'middle',
  },
};

export const LinkGray: Story = {
  args: {
    children: 'Button CTA',
    variant: 'link',
    color: 'default',
    icon: '⚠️',
    size: 'middle',
  },
};

export const LinkColor: Story = {
  args: {
    children: 'Button CTA',
    variant: 'link',
    color: 'primary',
    icon: '⚠️',
    size: 'middle',
  },
};

export const OnlyIcon: Story = {
  args: {
    icon: <SvgArrowRight />,
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
};
