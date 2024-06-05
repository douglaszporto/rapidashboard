import { HTMLProps, ReactElement, ReactNode } from "react";
export type CardProps = Omit<HTMLProps<HTMLDivElement>, 'title'> & {
    title?: string | string[] | ReactNode | ReactNode[] | ReactElement | ReactElement[];
};
export declare const Card: React.FC<CardProps>;
