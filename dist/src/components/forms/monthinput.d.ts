import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';
type MonthInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'value'> & {
    uid: string;
    value?: Date;
    locale?: string;
    depencencies?: Array<any>;
    formError?: FormError;
    calendar?: boolean;
    onChange?: ((value?: Date) => any);
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const MonthInput: React.FC<MonthInputProps>;
export {};
