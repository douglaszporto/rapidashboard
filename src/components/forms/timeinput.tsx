import { HTMLProps, MouseEvent, FocusEvent, useState, useEffect, useRef } from 'react'
import { mdiClockOutline } from '@mdi/js';

import Icon from '@mdi/react';
import { strPad } from '../../util/string';
import { FormError } from '../../types/FormError.type';
import * as Tags from './styles';

type TimeInputProps = HTMLProps<HTMLInputElement> & {
    uid: string,
    depencencies ?: Array<any>,
    timepicker ?: boolean,
    formError?: FormError,
    onValidate ?: ((value:string | null)=>string | boolean) | null
}

export const TimeInput:React.FC<TimeInputProps> = ({onValidate, depencencies, timepicker, formError, ...props}: TimeInputProps) => {

    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [fieldValue, setFieldValue] = useState<string>("");
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);

    const refMinutes = useRef(null);
    const refHours = useRef(null);
    
    const handleChange = (e: FocusEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/[^\d:]/gi,'');
        let [hour, minute] = val.split(":");
        let hasDivision = Boolean(minute);

        if (hour.length >= 2 && (minute === undefined || minute.length < 2)) {
            hour = hour.substring(0,2);
            minute = hasDivision ? minute : hour.substring(2,4);
            hasDivision = true;
        }

        let h = hour.substring(0,2);
        let m = minute ? minute.substring(0,2) : '';

        let result = h + (hasDivision ? ":" : "") + m;
        result = result.substring(0,5);
        
        setFieldValue(result);
        setHours(parseInt(h, 10));
        setMinutes(parseInt(m, 10));

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
        let [hour, minute] = (fieldValue ?? '').split(":").map((i)=>parseInt(i, 10));

        if (!String(hour) || !String(minute)) {
            setFieldValue("");
        } else {
        
            if (hour < 24 && minute <= 59) {
                if (props.onChange) {
                    e.target.value = fieldValue ?? ''; 
                    props.onChange(e);
                }
            } else {
                setFieldValue("");
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

    const handleClick = () => {
        setTimeout(() => {
            setShowTimePicker(true);
        }, 1);
    }

    const handleSetTime = (hour: number, minute: number, e: MouseEvent<HTMLDivElement>) => {
        let result = strPad(String(hour ?? 0), "0", 2) + ':' + strPad(String(minute ?? 0), "0", 2);
        setHours(hour ?? 0);
        setMinutes(minute ?? 0);
        setFieldValue(result);

        const event = (e as unknown) as FocusEvent<HTMLInputElement>;
        event.target.value = result ?? ''; 
        if (props.onChange) {
            props.onChange(event);
        }

        if (onValidate) {
            let validation = onValidate(event.target.value) ?? '';
            setError(validation !== true ? String(validation) : "");
        } else {
            setError("");
        }
    }

    useEffect(()=>{
        if (!showTimePicker || !refMinutes.current || !refHours.current) {
            return;
        }

        (refMinutes.current as HTMLDivElement).scrollTop = minutes*8; // *40/5;
        (refHours.current as HTMLDivElement).scrollTop = hours*40;
    }, [showTimePicker, minutes, hours]);

    useEffect(()=>{
        if (depencencies && depencencies.length && onValidate) {
            let validation = onValidate(String(props.value ?? "")) ?? '';
            setError(validation !== true ? String(validation) : "");
        }
    }, depencencies);

    useEffect(()=>{
        let fn = () => {
            setShowTimePicker(false);
        }

        document.querySelector('body')?.addEventListener('click', fn);
        
        return () => {
            document.querySelector('body')?.removeEventListener('click', fn);
        }
    }, []);

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

    return <Tags.InputWrapper className={props.className ?? ''}>
        <Tags.InputContent width={props.width}>
            <Tags.InputElement 
                id={props.uid}
                value={fieldValue}
                onChange={handleChange}
                onFocus={(e)=>handleFocus(e)}
                onBlur={(e)=>handleBlur(e)}
                onClick={()=>handleClick()}
            />
            <Tags.ErrorMessage htmlFor={props.uid} className={'hasIcon'}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
            { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'hasIcon big' : 'hasIcon'} /> : null }
        </Tags.InputContent>
        <Tags.FieldTypeIcon>
            <Icon size={1} path={mdiClockOutline } />
        </Tags.FieldTypeIcon>
        {showTimePicker && timepicker!==false ? <Tags.TimePickerWrapper>
            <Tags.TimeRoll ref={refHours}>
                {Array(24).fill(0).map((_,index) => <Tags.TimeValue onClick={(e)=>{handleSetTime(index, minutes, e)}} className={hours === index ? 'selected' : ''}>{strPad(String(index), "0", 2)}</Tags.TimeValue>)}
            </Tags.TimeRoll>
            <Tags.TimeRoll ref={refMinutes}>
                {Array(12).fill(0).map((_,index) => <Tags.TimeValue onClick={(e)=>{handleSetTime(hours, index*5, e)}} className={minutes === index*5 ? 'selected' : ''}>{strPad(String(index*5), "0", 2)}</Tags.TimeValue>)}
            </Tags.TimeRoll>
        </Tags.TimePickerWrapper> : null}
    </Tags.InputWrapper>
}