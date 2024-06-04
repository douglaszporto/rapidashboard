/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../../src/components/layout/PageContent").PageContentProps>>;
    parameters: {
        layout: string;
    };
    args: {
        children: import("react/jsx-runtime").JSX.Element[];
        padding: string;
        style: {
            border: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
