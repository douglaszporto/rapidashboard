/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("../../../src/components/globals/SimpleTopbar").SimpleTopbarProps>;
    parameters: {
        layout: string;
    };
    args: {
        items: {
            action: () => void;
            label: string;
        }[];
        userName: string;
        onMenuOpen: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithPhoto: Story;
