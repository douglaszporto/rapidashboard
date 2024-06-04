/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<Omit<import("react").HTMLProps<HTMLSelectElement>, "onFocus" | "onBlur" | "onChange" | "onClick"> & {
        uid: string;
        labelValue?: string | undefined;
        loader?: ((page?: number | undefined, filter?: string | undefined) => Promise<any>) | undefined;
        transform?: ((t: any, index: number) => any) | undefined;
        formError?: import("../../../src/types/FormError.type").FormError | undefined;
        onChange?: ((option: {
            value: string;
            label: string;
        }) => any) | undefined;
        onClick?: ((e: import("react").FocusEvent<Element, Element>) => any) | undefined;
        onFocus?: ((e: import("react").FocusEvent<Element, Element>) => any) | undefined;
        onBlur?: ((e: import("react").FocusEvent<Element, Element>) => any) | undefined;
        onValidate?: ((value: string | null) => string | boolean) | null | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {
        uid: string;
        loader: () => Promise<any>;
        transform: (t: any, index: number) => any;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
