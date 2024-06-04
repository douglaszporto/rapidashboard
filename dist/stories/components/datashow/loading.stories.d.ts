/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("../../../src/components/datashow/loading").LoadingProps>;
    parameters: {
        layout: string;
    };
    args: {
        loading: string[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
