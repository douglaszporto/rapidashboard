import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<Omit<import('react').HTMLProps<HTMLSelectElement>, "width"> & {
        uid: string;
        width?: string | number | undefined;
        formError?: import('../../../src/types/FormError.type').FormError | undefined;
        onValidate?: ((value: string | null) => string | boolean) | null | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {
        uid: string;
        children: import("react/jsx-runtime").JSX.Element[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
