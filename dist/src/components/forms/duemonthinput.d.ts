import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';

type DueMonthInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'value'> & {
    uid: string;
    value?: Date;
    formError?: FormError;
    onChange?: ((value?: Date) => any);
};
export declare const DueMonthInput: React.FC<DueMonthInputProps>;
export {};
