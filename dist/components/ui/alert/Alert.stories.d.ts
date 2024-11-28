import { default as Alert } from './Alert';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;
export declare const Playground: Story;
export declare const Warning: Story;
export declare const Info: Story;
