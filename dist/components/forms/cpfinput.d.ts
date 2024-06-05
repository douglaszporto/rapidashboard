import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';
type CPFInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const CPFInput: React.FC<CPFInputProps>;
export {};
