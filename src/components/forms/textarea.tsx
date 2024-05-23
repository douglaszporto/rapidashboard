import {HTMLProps, FormEvent, FocusEvent, useState, useEffect} from 'react'

import { FormError } from '../../types/FormError.type';
import * as Tags from './styles';

type TextareaProps = HTMLProps<HTMLTextAreaElement> & {
    uid: string,
    depencencies ?: Array<any>,
    onValidate ?: ((value:string | null)=>string | boolean) | null,
    formError?: FormError,
}

export const Textarea:React.FC<TextareaProps> = ({onValidate, depencencies, formError, ...props}: TextareaProps) => {

    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    
    const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
        if (props.onChange) {
            props.onChange(e);
        }
    }

    const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
        document.querySelector("body")?.click();
        
        if (props.onFocus) {
            props.onFocus(e);
        }

        setHasFocus(true);
    }

    const handleBlur = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
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

    return <Tags.TextareaWrapper className={props.className ?? ''} style={props.style ?? {}}>
        <Tags.TextareaElement 
            id={props.uid}
            value={props.value}
            onChange={handleChange}
            onFocus={(e)=>handleFocus(e)}
            onBlur={(e)=>handleBlur(e)}
            placeholder={props.placeholder ?? ''}
        />
        <Tags.ErrorMessage htmlFor={props.uid}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
        { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'big' : ''} /> : null }
    </Tags.TextareaWrapper>
}