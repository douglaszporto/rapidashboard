import { HTMLProps } from 'react';
import { FormError } from '../../types/FormError.type';
type TimeInputProps = HTMLProps<HTMLInputElement> & {
    uid: string;
    depencencies?: Array<any>;
    timepicker?: boolean;
    formError?: FormError;
    onValidate?: ((value: string | null) => string | boolean) | null;
};
export declare const TimeInput: React.FC<TimeInputProps>;
export {};
