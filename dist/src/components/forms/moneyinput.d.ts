import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';

type MoneyInputProps = Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange'> & {
    uid: string;
    value?: number;
    depencencies?: Array<any>;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
    onChange?: (value?: number) => any;
};
export declare const MoneyInput: React.FC<MoneyInputProps>;
export {};
