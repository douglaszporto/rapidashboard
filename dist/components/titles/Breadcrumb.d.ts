/// <reference types="react" />
type BreadcrumbProps = {
    items: {
        [url: string]: string;
    };
    current: string;
    navigate?: (url: string, options: any) => void;
};
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export {};
