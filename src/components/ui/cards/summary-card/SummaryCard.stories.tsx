import type { Meta, StoryObj } from '@storybook/react';
import SummaryCard from './SummaryCard';

const meta: Meta<typeof SummaryCard> = {
  title: 'CARDS/SummaryCard',
  component: SummaryCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SummaryCard>;

export const Playground: Story = {
  render: ({ label, title }) => (
    <div className="sui-w-[400px]">
      <SummaryCard label={label} title={title} />
    </div>
  ),
  args: {
    label: 'Label',
    title: '10',
  },
};
