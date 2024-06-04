import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import('../../../src/components/layout/Grid').GridProps>>;
    parameters: {
        layout: string;
    };
    render: (args: import('styled-components/dist/types').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('../../../src/components/layout/Grid').GridProps> & import('../../../src/components/layout/Grid').GridProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        style: {
            width: string;
            height: string;
        };
        children: import("react/jsx-runtime").JSX.Element[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TwoColumns: Story;
export declare const TreeColumns: Story;
