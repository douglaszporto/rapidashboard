import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('react').HTMLProps<HTMLDivElement> & {
        uid: string;
        labelContent?: any;
        isVertical?: boolean | undefined;
        checked?: boolean | undefined;
        onCheck?: Function | undefined;
    }>;
    parameters: {
        layout: string;
    };
    render: (args: import('react').HTMLProps<HTMLDivElement> & {
        uid: string;
        labelContent?: any;
        isVertical?: boolean | undefined;
        checked?: boolean | undefined;
        onCheck?: Function | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    args: {
        uid: string;
        labelContent: string;
        isVertical: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Vertical: Story;
