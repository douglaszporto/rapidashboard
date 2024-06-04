import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('react').HTMLProps<HTMLTextAreaElement> & {
        uid: string;
        depencencies?: any[] | undefined;
        onValidate?: ((value: string | null) => string | boolean) | null | undefined;
        formError?: import('../../../src/types/FormError.type').FormError | undefined;
    }>;
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
