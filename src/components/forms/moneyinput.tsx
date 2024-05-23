import { HTMLProps, FocusEvent, useState, useEffect } from 'react'

import { FormError } from '../../types/FormError.type';
import { MoneyFromNumberToString } from '../../util/money';
import * as Tags from './styles';

type MoneyInputProps = Omit<HTMLProps<HTMLInputElement>,'value'|'onChange'> & {
    uid: string,
    value?: number,
    depencencies?: Array<any>,
    formError?: FormError,
    onValidate?: ((value:string | null)=>string | boolean) | null;
    onChange?: (value?:number)=>any;
}

export const MoneyInput:React.FC<MoneyInputProps> = ({onValidate, depencencies, formError, ...props}: MoneyInputProps) => {

    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [fieldValue, setFieldValue] = useState<string>("");

    const handleChange = (e: FocusEvent<HTMLInputElement>) => {
        let val = parseFloat(e.target.value.replace(/[^\d]/gi,''))/100;
        let result = MoneyFromNumberToString(val);

        console.log(val, result);
        
        setFieldValue(result);
        
        if (props.onChange) {
            props.onChange(val);
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

    useEffect(()=>{
        if (depencencies && depencencies.length && onValidate) {
            let validation = onValidate(String(props.value ?? "")) ?? '';
            setError(validation !== true ? String(validation) : "");
        }
    }, depencencies);

    useEffect(()=>{
        if (props.value !== null) {
            setFieldValue(MoneyFromNumberToString(props.value ?? 0));
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

    return <Tags.InputWrapper className={props.className ?? ''}>
        <Tags.InputContent width={props.width}>
            <Tags.InputElement 
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
