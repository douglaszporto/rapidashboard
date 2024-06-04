import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';

type PhoneInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    depencencies?: Array<any>;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const PhoneInput: React.FC<PhoneInputProps>;
export {};
