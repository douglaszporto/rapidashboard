import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<Omit<import('react').HTMLProps<HTMLDivElement>, "onChange"> & {
        labelDrag?: string | undefined;
        labelOr?: string | undefined;
        labelMaxSize?: string | undefined;
        labelSearch?: string | undefined;
        uid: string;
        value?: string | undefined;
        onChange?: Function | undefined;
    }>;
    parameters: {
        layout: string;
    };
    render: (args: Omit<import('react').HTMLProps<HTMLDivElement>, "onChange"> & {
        labelDrag?: string | undefined;
        labelOr?: string | undefined;
        labelMaxSize?: string | undefined;
        labelSearch?: string | undefined;
        uid: string;
        value?: string | undefined;
        onChange?: Function | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    args: {
        labelDrag: string;
        labelOr: string;
        labelMaxSize: string;
        labelSearch: string;
        uid: string;
        value: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
