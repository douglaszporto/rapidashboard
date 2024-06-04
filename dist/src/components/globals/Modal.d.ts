/// <reference types="react" />
type ReactContent = JSX.Element | JSX.Element[] | undefined;
export interface ModalProps {
    content?: ReactContent;
    show?: boolean;
    onClose?: Function;
}
export declare const Modal: React.FC<ModalProps>;
export {};
