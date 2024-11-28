import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const mockOptions = [
  { title: 'Option 1', value: '1', label: 'Option 1' },
  { title: 'Option 2', value: '2', label: 'Option 2' },
  { title: 'Option 3', value: '3', label: 'Option 3' },
  { title: 'Option 4', value: '4', label: 'Option 4' },
  { title: 'Option 5', value: '5', label: 'Option 5' },
  { title: 'Option 6', value: '6', label: 'Option 6' },
];

const meta: Meta<typeof Select> = {
  title: 'INPUTS/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    mode: {
      control: 'select',
      options: ['', 'multiple', 'tags'],
    },
    labelClassName: {
      control: false,
    },
    status: {
      control: 'select',
      options: ['error', 'warning', ''],
    },
    maxTagCount: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['small', 'large', 'middle'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  render: (args) => (
    <div className="sui-w-[350px]">
      {' '}
      <Select {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    required: true,
    options: mockOptions,
    placeholder: 'Selecciona tu favorito',
    assistiveText: 'Assistive text',
    size: 'middle',
    maxTagCount: 'responsive',
  },
};
