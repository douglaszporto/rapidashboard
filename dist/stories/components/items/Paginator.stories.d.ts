/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ page, total, onPageChange, ...props }: import("react").HTMLProps<HTMLDivElement> & {
        page: number;
        total: number;
        onPageChange: Function;
    }) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    args: {
        page: number;
        total: number;
        onPageChange: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
