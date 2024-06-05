import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';
type DateInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    locale?: string;
    depencencies?: Array<any>;
    formError?: FormError;
    calendar?: boolean;
    minViewmode?: 'century' | 'decade' | 'year' | 'month';
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const DateInput: React.FC<DateInputProps>;
export {};
