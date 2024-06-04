/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("../../../src/components/datashow/message").MessageProps>;
    parameters: {
        layout: string;
    };
    args: {
        messages: {
            content: string;
            messageType: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SuccessMessage: Story;
export declare const ErrorMessage: Story;
