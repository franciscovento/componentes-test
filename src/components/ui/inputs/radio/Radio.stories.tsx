import type { Meta, StoryObj } from '@storybook/react';
import { Group } from 'antd/es/radio';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'INPUTS/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  render: () => (
    <div>
      <Group>
        <Radio name="item" value={'1'}>
          A
        </Radio>
        <Radio name="item" value={'2'}>
          B
        </Radio>
      </Group>
    </div>
  ),
};
