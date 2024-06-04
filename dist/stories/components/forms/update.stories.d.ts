/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<Omit<import("react").HTMLProps<HTMLTextAreaElement>, "onChange" | "value"> & {
        uid: string;
        value?: any;
        labelUpload?: string | undefined;
        multiple?: boolean | undefined;
        externalFiles: import("../../../src/components/forms/upload").FileItemExternal[];
        horizontal?: boolean | undefined;
        onChange?: Function | undefined;
        onRemoveFileExternal?: ((id: string) => void) | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {
        uid: string;
        labelUpload: string;
        value: never[];
        externalFiles: never[];
        horizontal: false;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Multiple: Story;
export declare const Horizontal: Story;
export declare const WithExternalFiles: Story;
