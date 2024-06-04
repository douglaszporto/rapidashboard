/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("react").HTMLProps<HTMLDivElement> & {
        uid: string;
        label: string;
        isVertical?: boolean | undefined;
        noWrap?: boolean | undefined;
        checked?: boolean | undefined;
        onCheck?: Function | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {
        uid: string;
        label: string;
        isVertical: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Checked: Story;
export declare const Vertical: Story;
