import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('react').HTMLProps<HTMLButtonElement> & {
        icon?: string | undefined;
        onClick?: Function | undefined;
        color?: string | undefined;
        title?: string | undefined;
        tooltip?: string | undefined;
        hideTextOnMobile?: boolean | undefined;
        disabled?: boolean | undefined;
        border?: boolean | undefined;
        size?: string | number | undefined;
    }>;
    parameters: {
        layout: string;
    };
    render: (args: import('react').HTMLProps<HTMLButtonElement> & {
        icon?: string | undefined;
        onClick?: Function | undefined;
        color?: string | undefined;
        title?: string | undefined;
        tooltip?: string | undefined;
        hideTextOnMobile?: boolean | undefined;
        disabled?: boolean | undefined;
        border?: boolean | undefined;
        size?: string | number | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    args: {
        title: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Icon: Story;
export declare const IconAndText: Story;
export declare const Complete: Story;
export declare const Border: Story;
export declare const Disabled: Story;
export declare const HideOnMobile: Story;
