import { SvgEditPencil } from '@/components/svg';
import type { Meta, StoryObj } from '@storybook/react';
import { InformationCard } from './InformationCard';

const meta: Meta<typeof InformationCard> = {
  title: 'CARDS/InformationCard',
  component: InformationCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InformationCard>;

export const Playground: Story = {
  render: ({ icon, title, description, items }) => (
    <div className="sui-w-[526px]">
      <InformationCard
        icon={icon}
        title={title}
        description={description}
        items={items}
      />
    </div>
  ),
  args: {
    icon: (
      <span className="sui-border sui-border-app-border-primary sui-rounded-full sui-w-10 sui-h-10 sui-flex sui-items-center sui-justify-center">
        <SvgEditPencil />
      </span>
    ),
    title: 'Información personal',
    description: 'Descripción',
    items: [
      { label: 'CUIT', content: '20-34137640-9' },
      { label: 'CUIT', content: '20-34137640-9' },
      {
        label: 'CUIT',
        content: '20-34137640-9',
      },
    ],
  },
};
