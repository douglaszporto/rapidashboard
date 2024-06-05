import { MouseEvent } from "react";
export interface SimpleTopbarProps {
    items: Array<{
        action: (e: MouseEvent<HTMLAnchorElement>) => void;
        label: string;
    }>;
    photo?: string;
    userName?: string;
    onMenuOpen?: Function;
}
export declare const SimpleTopbar: React.FC<SimpleTopbarProps>;
