import {HTMLProps, FormEvent, KeyboardEvent, FocusEvent, useState, useEffect, MutableRefObject} from 'react'

import * as Tags from './styles';
import { FormError } from '../../types/FormError.type';

type InputProps = Omit<HTMLProps<HTMLInputElement>,'ref'> & {
    uid: string,
    depencencies ?: Array<any>,
    onValidate ?: ((value:string | null)=>string | boolean) | null
    formError?: FormError,
    reference?: MutableRefObject<HTMLInputElement|null>,
}

export const Input = ({onValidate, depencencies, formError, reference, onKeyDown, ...props}: InputProps) => {

    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(e);
        }
    }

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        document.querySelector("body")?.click();
        
        if (props.onFocus) {
            props.onFocus(e);
        }

        setHasFocus(true);
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
        if (props.onBlur) {
            props.onBlur(e);
        }

        if (onValidate) {
            let validation = onValidate(e.target.value) ?? '';
            setError(validation !== true ? String(validation) : "");
        } else {
            setError("");
        }

        setHasFocus(false);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDown) {
            onKeyDown(e);
        }
    }

    useEffect(()=>{
        if (depencencies && depencencies.length && onValidate) {
            let validation = onValidate(String(props.value ?? "")) ?? '';
            setError(validation !== true ? String(validation) : "");
        }
    }, depencencies);

    useEffect(()=>{
        if (extError && typeof extError.message === 'string') {
            setError(extError.message);
        }else {
            setError(extError?.message[0] ?? '');
        }
    }, [extError]);

    useEffect(()=>{
        setExtError(formError);
    }, [formError]);

    return <Tags.InputWrapper className={props.className ?? ''} style={props.style ?? {}}>
        <Tags.InputElement 
            id={props.uid}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder ?? ''}
            ref={reference}
            onChange={handleChange}
            onFocus={(e)=>handleFocus(e)}
            onBlur={(e)=>handleBlur(e)}
            onKeyDown={(e)=>handleKeyDown(e)}
        />
        <Tags.ErrorMessage htmlFor={props.uid}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
        { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'big' : ''} /> : null }
    </Tags.InputWrapper>
}