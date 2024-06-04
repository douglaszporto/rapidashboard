import { ReactElement } from 'react';
type EmptyStateProps = {
    title: string | ReactElement | ReactElement[];
    icon: string;
    size?: number;
    margin?: string;
    padding?: string;
};
export declare const EmptyState: React.FC<EmptyStateProps>;
export {};
