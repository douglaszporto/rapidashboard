/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ onValidate, depencencies, formError, reference, onKeyDown, ...props }: Omit<import("react").HTMLProps<HTMLInputElement>, "ref"> & {
        uid: string;
        depencencies?: any[] | undefined;
        onValidate?: ((value: string | null) => string | boolean) | null | undefined;
        formError?: import("../../../src/types/FormError.type").FormError | undefined;
        reference?: import("react").MutableRefObject<HTMLInputElement | null> | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    args: {
        uid: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
