import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('../../../src/components/layout/Card').CardProps>;
    parameters: {
        layout: string;
    };
    render: (args: Omit<import('react').HTMLProps<HTMLDivElement>, "title"> & {
        title?: import('react').ReactNode | import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>> | string[] | import('react').ReactNode[] | import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>>[];
    }) => import("react/jsx-runtime").JSX.Element;
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithButton: Story;
