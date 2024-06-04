import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';
type IntegerInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    formError?: FormError;
    min?: number;
    max?: number;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const IntegerInput: React.FC<IntegerInputProps>;
export {};
