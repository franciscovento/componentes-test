import { SvgSearch } from '@/components/svg';
import SvgMapPin from '@/components/svg/SvgMapPin';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'INPUTS/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    status: { control: 'select', options: ['error', 'warning'] },
    assistiveText: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    label: 'Label',
    assistiveText: 'Assistive text',
    error: '',
    placeholder: 'Placeholder',
    required: true,
    prefix: <SvgMapPin width={16} height={16} />,
  },
};

export const InputError: Story = {
  args: {
    label: 'Label',
    assistiveText: '',
    error: 'This is an error message',
    status: 'error',
    placeholder: 'Placeholder',
    required: true,
    prefix: <SvgMapPin width={16} height={16} />,
  },
};

export const SearchInput: Story = {
  args: {
    label: '',
    error: '',
    placeholder: 'Placeholder',
    required: false,
    prefix: <SvgSearch className="text-app-black" width={16} height={16} />,
    allowClear: true,
  },
};
