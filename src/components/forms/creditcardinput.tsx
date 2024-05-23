import { HTMLProps, FocusEvent, useState, useEffect } from 'react'

import { FormError } from '../../types/FormError.type';
import * as Tags from './styles';


type CreditCardInputProps = HTMLProps<HTMLInputElement> & {
    uid: string,
    formError?: FormError,
    onValidate ?: ((value:string | null)=>string | boolean) | null,
}

export const CreditCardInput:React.FC<CreditCardInputProps> = ({onValidate, formError, ...props}: CreditCardInputProps) => {
    
    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [fieldValue, setFieldValue] = useState<string>("");

    const handleChange = (e: FocusEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/[^\d]/gi,'');
        let result = val;

        if (val.length >= 5) {
            result = `${val.substring(0,4)} ${val.substring(4)}`;
        }
        if (val.length >= 9) {
            result = `${val.substring(0,4)} ${val.substring(4,8)} ${val.substring(8)}`;
        }
        if (val.length >= 13) {
            result = `${val.substring(0,4)} ${val.substring(4,8)} ${val.substring(8,12)} ${val.substring(12)}`;
        }
        if (val.length >= 14) {
            result = `${val.substring(0,4)} ${val.substring(4,10)} ${val.substring(10,14)}${val.substring(14)}`;
        }
        if (val.length >= 15) {
            result = `${val.substring(0,4)} ${val.substring(4,10)} ${val.substring(10,15)}${val.substring(15)}`;
        }
        if (val.length >= 16) {
            result = `${val.substring(0,4)} ${val.substring(4,8)} ${val.substring(8,12)} ${val.substring(12,16)}`;
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
        
        if (val.length < 14) {
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
            <Tags.ErrorMessage htmlFor={props.uid} className={'hasIcon'}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
            { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'hasIcon big' : 'hasIcon'} /> : null }
        </Tags.InputContent>
    </Tags.InputWrapper>
}