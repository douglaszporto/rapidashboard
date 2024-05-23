import { HTMLProps, FocusEvent, useState, useEffect } from 'react'
import Icon from '@mdi/react';
import { mdiPhone } from '@mdi/js';

import { FormError } from '../../types/FormError.type';
import * as Tags from './styles';

type PhoneInputProps = HTMLProps<HTMLInputElement> & {
    uid: string,
    depencencies ?: Array<any>,
    formError?: FormError,
    onValidate ?: ((value:string | null)=>string | boolean) | null,
}

export const PhoneInput:React.FC<PhoneInputProps> = ({onValidate, depencencies, formError, ...props}: PhoneInputProps) => {
    
    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [fieldValue, setFieldValue] = useState<string>("");

    const handleChange = (e: FocusEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/[^\d\/]/gi,'');
        let result = '('+val;

        if (val.length >= 2) {
            result = `(${val.substring(0,2)}) ${val.substring(2)}`;
        }
        if (val.length >= 6) {
            result = `(${val.substring(0,2)}) ${val.substring(2,6)}-${val.substring(6)}`;
        }
        if (val.length >= 11) {
            result = `(${val.substring(0,2)}) ${val.substring(2,7)}-${val.substring(7)}`;
        }
        if (val.length >= 12) {
            val = val.substring(0,14);
            result = `+${val.substring(0,val.length-11)} (${val.substring(val.length-11,val.length-9)}) ${val.substring(val.length-9,val.length-4)}-${val.substring(val.length-4, val.length)}`;
        }
        
        setFieldValue(result);
        
        if (props.onChange) {
            e.target.value = result;
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
        let val = fieldValue.replace(/[^\d]/gi,"");
        
        if (val.length < 10 || val.length > 14) {
            setFieldValue("");
        } else {
            e.target.value = fieldValue ?? ''; 
            if (props.onChange) {
                props.onChange(e);
            }
        }
        
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
        if (props.value !== null) {
            setFieldValue(String(props.value));
        }
    }, [props.value]);

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
        <Tags.InputContent width={props.width}>
            <Tags.DateInputElement 
                type="text"
                id={props.uid}
                value={fieldValue}
                onChange={handleChange}
                onFocus={(e)=>handleFocus(e)}
                onBlur={(e)=>handleBlur(e)}
            />
            <Tags.ErrorMessage htmlFor={props.uid} className={'hasIcon'}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
            { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'hasIcon big' : 'hasIcon'} /> : null }
        </Tags.InputContent>
        <Tags.FieldTypeIcon>
            <Icon size={1} path={mdiPhone} />
        </Tags.FieldTypeIcon>
    </Tags.InputWrapper>
}