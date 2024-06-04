import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('react').HTMLProps<HTMLDivElement> & {
        uid: string;
        copyLabel?: string | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {
        uid: string;
        copyLabel: string;
        value: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
