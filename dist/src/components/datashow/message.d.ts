/// <reference types="react" />
export interface MessageProps {
    messages?: {
        content: string;
        messageType: string;
    }[];
    onPop?: () => void;
}
export declare const Message: React.FC<MessageProps>;
