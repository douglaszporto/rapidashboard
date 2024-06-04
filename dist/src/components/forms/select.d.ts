import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';

type SelectProps = Omit<HTMLProps<HTMLSelectElement>, 'width'> & {
    uid: string;
    width?: string | number;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const Select: React.FC<SelectProps>;
export {};
