import { HTMLProps } from "react";
type PaginatorProps = HTMLProps<HTMLDivElement> & {
    page: number;
    total: number;
    labelPaginator?: string;
    onPageChange: Function;
};
export declare const Paginator: ({ page, total, labelPaginator, onPageChange, ...props }: PaginatorProps) => import("react/jsx-runtime").JSX.Element;
export {};
