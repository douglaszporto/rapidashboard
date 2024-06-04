import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';

type CreditCardInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const CreditCardInput: React.FC<CreditCardInputProps>;
export {};
