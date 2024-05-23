import { HTMLProps, FocusEvent, ChangeEvent, useState, useEffect } from 'react'

import { FormError } from '../../types/FormError.type';
import { DateFromDateToMonthYearView } from '../../util/dates';
import * as Tags from './styles';

type DueMonthInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange'|'value'> & {
    uid: string,
    value?: Date,
    formError?: FormError,
    onChange?: ((value?:Date)=>any)
}


export const DueMonthInput:React.FC<DueMonthInputProps> = ({formError, ...props}: DueMonthInputProps) => {
    
    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [fieldValue, setFieldValue] = useState<string>("");
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/\D/gi,'');
        let result = val;

        if (val.length >= 3) {
            result = `${val.substring(0,2)}/${val.substring(2)}`;
        }
        if (val.length >= 6) {
            result = `${val.substring(0,2)}/${val.substring(2,6)}`;
        }
        
        setFieldValue(result);
        
        if (props.onChange && val.length === 6) {
            let [month, year] = result.split('/').map(r=>parseInt(r,10));
            let dt = new Date(year, month-1, 1, 0, 0, 0, 0);
            if (dt && !isNaN(dt.getTime())) {
                props.onChange(dt);
            }
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
        let val = e.target.value.replace(/[^\d]/gi,'');

        if (val.length !== 6) {
            setFieldValue("");
            if (props.onChange){
                props.onChange(undefined);
            };
        } else {
            if (props.onBlur) {
                props.onBlur(e);
            }
        }

        setHasFocus(false);
    }

    useEffect(()=>{
        if (props.value) {
            setFieldValue(DateFromDateToMonthYearView(props.value));
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
            <Tags.MonthInputElement 
                type="text"
                id={props.uid}
                value={fieldValue}
                onChange={(e)=>handleChange(e)}
                onFocus={(e)=>handleFocus(e)}
                onBlur={(e)=>handleBlur(e)}
            />
            <Tags.ErrorMessage htmlFor={props.uid}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
            { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'big' : ''} /> : null }
        </Tags.InputContent>
    </Tags.InputWrapper>
}