import { HTMLProps } from 'react';

type PaginatorProps = HTMLProps<HTMLDivElement> & {
    page: number;
    total: number;
    onPageChange: Function;
};
export declare const Paginator: ({ page, total, onPageChange, ...props }: PaginatorProps) => import("react/jsx-runtime").JSX.Element;
export {};
