import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';
type TextareaProps = HTMLProps<HTMLTextAreaElement> & {
    uid: string;
    depencencies?: Array<any>;
    onValidate?: ((value: string | null) => string | boolean) | null;
    formError?: FormError;
};
export declare const Textarea: React.FC<TextareaProps>;
export {};
