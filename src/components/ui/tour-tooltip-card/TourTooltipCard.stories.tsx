import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TourTooltipCard from './TourTooltipCard';

const meta: Meta<typeof TourTooltipCard> = {
  title: 'UI/TourTooltipCard',
  component: TourTooltipCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClose: fn(),
    onSecondaryBtn: fn(),
    onPrimaryBtn: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof TourTooltipCard>;

export const Playground: Story = {
  args: {
    totalSteps: 3,
    currentStep: 1,
    title: 'Title',
    description: 'Description',
    avatarSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7IMgI3jI3aABHar9UM98Ex5bG1kT_40fg2beZBfOHyEPQil7LgRY7BSGjYO4BS9ptik&usqp=CAU',
  },
};
