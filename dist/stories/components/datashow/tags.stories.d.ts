import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
    parameters: {
        layout: string;
    };
    args: {
        children: string;
        color: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LongText: Story;
