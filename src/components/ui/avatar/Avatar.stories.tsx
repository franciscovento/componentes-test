import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
    draggable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {
  args: {
    src: 'https://s3-alpha-sig.figma.com/img/7d38/18fb/b6557590ac351a2af64a86f3049b8e64?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSUyAxPnK8e89ObKKOTzkMCF3YNf1rX3f6dkoO3UjzKQqMSYsEcA8Xip-~opQhy4Qje~czzIoLmMT83g9XyPgc5LvSm50Kosh98V6eSR5zRT1iJcQ91SdbYnwuzQc~GzVzI8-LpfVv3vy1J3vi19Pf62ibdHy1-yvjG4-NSQo3vT3uTEo1PrmlvMtK7PtNFbFef0QHKZ5GAhMJCxvWtjKwHfsOycdO1Z0Brg6u9gfY5sBDwQ~qjNvmHMfbdXZoUONhGx02oYmRWDi7C5krB2-38NNXVsA7K4kpuDD3UsLkyA1z8SUM~wNFu6YllPrb4YZJwjBc3SlZ5yLFLaIa9tHA__',
    size: 48,
    shape: 'circle',
    draggable: true,
  },
};
