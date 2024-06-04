import { HTMLProps } from "react";
export interface RowOrColumnProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
    rowAlign?: string;
    rowJustify?: string;
    rowMargin?: string;
    columnAlign?: string;
    columnJustify?: string;
    columnMargin?: string;
    children?: JSX.Element | JSX.Element[] | null;
}
interface RowTransientProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
    $rowAlign?: string;
    $rowJustify?: string;
    $rowMargin?: string;
    $columnAlign?: string;
    $columnJustify?: string;
    $columnMargin?: string;
    children?: JSX.Element | JSX.Element[] | null;
}
export declare const RowOrColumnElement: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowTransientProps>>;
export declare const RowOrColumn: React.FC<RowOrColumnProps>;
export {};
