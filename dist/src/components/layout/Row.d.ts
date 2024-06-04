import { HTMLProps } from 'react';

export interface RowProps extends HTMLProps<HTMLDivElement> {
    align?: string;
    justify?: string;
    margin?: string;
}
interface RowTransientProps extends HTMLProps<HTMLDivElement> {
    $align?: string;
    $justify?: string;
    $margin?: string;
}
export declare const RowElement: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').Substitute<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RowTransientProps>>;
export declare const Row: React.FC<RowProps>;
export {};
