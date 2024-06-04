/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<{
        value: any;
        form: import("../../../src").QuestionsType[];
    }>;
    parameters: {
        layout: string;
    };
    render: (args: {
        value: any;
        form: import("../../../src").QuestionsType[];
    }) => import("react/jsx-runtime").JSX.Element;
    args: {
        value: {
            "100": string;
            "101": {
                "1": string;
                "3": string;
            };
            "102": string;
            "103": string;
        };
        form: ({
            type: "TEXT";
            title: string;
            order: number;
            id: number;
            options?: undefined;
        } | {
            type: "CHECK";
            title: string;
            order: number;
            id: number;
            options: {
                id: number;
                label: string;
            }[];
        } | {
            type: "RADIO";
            title: string;
            order: number;
            id: number;
            options: {
                id: number;
                label: string;
            }[];
        } | {
            type: "RATING";
            title: string;
            order: number;
            id: number;
            options: {
                id: number;
                label: string;
            }[];
        })[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
