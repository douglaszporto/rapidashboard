import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<{
        items: {
            [url: string]: string;
        };
        current: string;
        navigate?: ((url: string, options: any) => void) | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SingleItem: Story;
export declare const TwoItems: Story;
export declare const TreeItems: Story;
