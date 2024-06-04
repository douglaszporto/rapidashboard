import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('react').HTMLProps<HTMLInputElement> & {
        uid: string;
        depencencies?: any[] | undefined;
        timepicker?: boolean | undefined;
        formError?: import('../../../src/types/FormError.type').FormError | undefined;
        onValidate?: ((value: string | null) => string | boolean) | null | undefined;
    }>;
    parameters: {
        layout: string;
    };
    args: {
        uid: string;
        value: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
