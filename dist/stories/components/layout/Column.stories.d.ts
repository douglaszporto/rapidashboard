/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("../../../src/components/layout/Column").ColumnProps>;
    parameters: {
        layout: string;
    };
    render: (args: import("../../../src/components/layout/Column").ColumnProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        children: import("react/jsx-runtime").JSX.Element[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Centred: Story;
export declare const Spaced: Story;
