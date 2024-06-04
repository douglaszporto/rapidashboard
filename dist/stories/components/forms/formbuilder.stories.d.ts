/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<{
        labelNew?: string | undefined;
        labelText?: string | undefined;
        labelCheck?: string | undefined;
        labelRadio?: string | undefined;
        labelRating?: string | undefined;
        labelTemplate?: string | undefined;
        labelTitle?: string | undefined;
        labelTextArea?: string | undefined;
        labelAnswer?: string | undefined;
        labelNoData?: string | undefined;
        value: any;
        templates?: {
            id: string;
            label: string;
        }[] | undefined;
        onChange: Function;
        onTemplateSelect?: Function | undefined;
    }>;
    parameters: {
        layout: string;
    };
    render: (args: {
        labelNew?: string | undefined;
        labelText?: string | undefined;
        labelCheck?: string | undefined;
        labelRadio?: string | undefined;
        labelRating?: string | undefined;
        labelTemplate?: string | undefined;
        labelTitle?: string | undefined;
        labelTextArea?: string | undefined;
        labelAnswer?: string | undefined;
        labelNoData?: string | undefined;
        value: any;
        templates?: {
            id: string;
            label: string;
        }[] | undefined;
        onChange: Function;
        onTemplateSelect?: Function | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    args: {
        labelNew: string;
        labelText: string;
        labelCheck: string;
        labelRadio: string;
        labelRating: string;
        labelTemplate: string;
        labelTitle: string;
        labelTextArea: string;
        labelAnswer: string;
        labelNoData: string;
        value: ({
            type: string;
            title: string;
            order: number;
            id: number;
            options?: undefined;
        } | {
            type: string;
            title: string;
            order: number;
            id: number;
            options: {
                id: number;
                label: string;
            }[];
        })[];
        onChange: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
