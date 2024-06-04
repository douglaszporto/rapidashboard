import { HTMLProps, FocusEvent } from 'react';
import { FormError } from '../../types/FormError.type';

type SelectPagedProps = Omit<HTMLProps<HTMLSelectElement>, 'onClick' | 'onFocus' | 'onBlur' | 'onChange'> & {
    uid: string;
    labelValue?: string;
    loader?: (page?: number, filter?: string) => Promise<any>;
    transform?: (t: any, index: number) => any;
    formError?: FormError;
    onChange?: (option: {
        value: string;
        label: string;
    }) => any;
    onClick?: (e: FocusEvent) => any;
    onFocus?: (e: FocusEvent) => any;
    onBlur?: (e: FocusEvent) => any;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const SelectPaged: React.FC<SelectPagedProps>;
export {};
