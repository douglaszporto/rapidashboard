import { HTMLProps, MutableRefObject } from 'react';
import { FormError } from '../../types/FormError.type';

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'ref'> & {
    uid: string;
    depencencies?: Array<any>;
    onValidate?: ((value: string | null) => string | boolean) | null;
    formError?: FormError;
    reference?: MutableRefObject<HTMLInputElement | null>;
};
export declare const Input: ({ onValidate, depencencies, formError, reference, onKeyDown, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
