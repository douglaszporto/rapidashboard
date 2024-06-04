/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
    parameters: {
        layout: string;
    };
    render: (args: import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>) => import("react/jsx-runtime").JSX.Element;
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
