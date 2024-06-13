import { MouseEvent } from "react";
export interface SimpleTopbarProps {
    items: Array<{
        action: (e: MouseEvent<HTMLAnchorElement>) => void;
        label: string;
    }>;
    photo?: string;
    userName?: string;
    helpLabel?: string;
    onMenuOpen?: Function;
    onOpenHelp?: Function;
}
export declare const SimpleTopbar: React.FC<SimpleTopbarProps>;
