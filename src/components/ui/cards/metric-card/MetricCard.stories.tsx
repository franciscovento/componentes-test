import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MetricCard } from './MetricCard';

const meta: Meta<typeof MetricCard> = {
  title: 'CARDS/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Playground: Story = {
  render: ({ title, value, detail, status, menuProps }) => (
    <div className="sui-w-[240px]">
      <MetricCard
        title={title}
        value={value}
        detail={detail}
        status={status}
        menuProps={menuProps}
      />
    </div>
  ),
  args: {
    title: 'Title',
    value: 10,
    detail: '+10.01%',
    status: 'up',
    menuProps: {
      items: [
        {
          key: 'item-1',
          label: 'item 1',
          onClick: fn(),
        },
        {
          key: 'item-2',
          label: 'item 2',
          onClick: fn(),
        },
      ],
    },
  },
};
