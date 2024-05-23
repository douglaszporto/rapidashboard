import { HTMLProps, FocusEvent, useState, useEffect } from 'react'

import { FormError } from '../../types/FormError.type';
import * as Tags from './styles';

type IntegerInputProps = HTMLProps<HTMLInputElement> & {
    uid: string,
    formError?: FormError,
    min?:number,
    max?:number,
    onValidate ?: ((value:string | null)=>string | boolean) | null,
}

export const IntegerInput:React.FC<IntegerInputProps> = ({onValidate, formError, min, max, ...props}: IntegerInputProps) => {
    
    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [fieldValue, setFieldValue] = useState<string>("");

    const handleChange = (e: FocusEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/[^\d]/gi,'');
        val = val.substring(0, max ?? 1000);
        
        setFieldValue(val);
        
        if (props.onChange) {
            e.target.value = val;
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
        
        if (val.length < (min ?? 0) || val.length > (max ?? 1000)) {
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
            <Tags.InputElement 
                type="text"
                id={props.uid}
                value={fieldValue}
                onChange={handleChange}
                onFocus={(e)=>handleFocus(e)}
                onBlur={(e)=>handleBlur(e)}
            />
            <Tags.ErrorMessage htmlFor={props.uid}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
            { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'big' : ''} /> : null }
        </Tags.InputContent>
    </Tags.InputWrapper>
}