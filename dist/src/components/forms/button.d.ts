import { HTMLProps } from 'react';

type ButtonProps = HTMLProps<HTMLButtonElement> & {
    icon?: string;
    onClick?: Function;
    color?: string;
    title?: string;
    tooltip?: string;
    hideTextOnMobile?: boolean;
    disabled?: boolean;
    border?: boolean;
    size?: number | string;
};
export declare const Button: React.FC<ButtonProps>;
declare const ButtonRowElement: import('styled-components').IStyledComponent<"web", import('styled-components/dist/types').FastOmit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export { ButtonRowElement as ButtonRow };
