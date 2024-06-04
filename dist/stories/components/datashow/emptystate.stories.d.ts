import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<{
        title: string | import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>> | import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>>[];
        icon: string;
        size?: number | undefined;
        margin?: string | undefined;
        padding?: string | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {
        title: string;
        icon: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const SizeChanged: Story;
