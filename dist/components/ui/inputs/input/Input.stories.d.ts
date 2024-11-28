import { default as Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof Input>;
export declare const Playground: Story;
export declare const InputError: Story;
export declare const SearchInput: Story;
