import { HTMLProps, FocusEvent, useState, useEffect, useRef } from 'react'

import Icon from '@mdi/react';
import Calendar from 'react-calendar';
import { mdiCalendar, mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import { FormError } from '../../types/FormError.type';
import { isElementInViewport } from '../../util/util';
import { DateFromUTCToView, DateFromViewToDate } from '../../util/dates';
import * as Tags from './styles';


type DateInputProps = HTMLProps<HTMLInputElement> & {
    uid: string,
    locale?: string;
    depencencies?: Array<any>,
    formError?: FormError,
    calendar?: boolean;
    minViewmode?: 'century' | 'decade' | 'year' | 'month';
    onValidate?: ((value:string | null)=>string | boolean) | null,
}

export const DateInput:React.FC<DateInputProps> = ({uid, locale, depencencies, formError, calendar, minViewmode, onValidate, ...props}: DateInputProps) => {
    
    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [fieldValue, setFieldValue] = useState<string>("");
    const [dateValue, setDateValue] = useState<Date>();
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [showCaledarTop, setShowCaledarTop] = useState<boolean>(false);

    const refCalendar = useRef<HTMLDivElement>(null);

    const handleChange = (e: FocusEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/[^\d\/]/gi,'');
        let [day, month, year] = val.split("/");
        let hasBarMonth = Boolean(month);
        let hasBarYear = Boolean(year);

        if (day.length >= 2 && (month === undefined || month.length < 2)) {
            day = day.substring(0,2);
            month = hasBarMonth ? month : day.substring(2,4);
            hasBarMonth = true;
        }
        
        if (month && month.length >= 2 && (year === undefined || year.length < 4)) {
            month = month.substring(0,2);
            year = hasBarYear ? year : month.substring(2,6);
            hasBarYear = true;
        }
        
        let result = day.substring(0,2) + (hasBarMonth ? "/" : "") + (month ? month.substring(0,2) : '') + (hasBarYear ? "/" : "") + (year ? year.substring(0,4) : '');
        result = result.substring(0,10);
        
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
        let [day, month, year] = (fieldValue ?? '').split("/").map((i)=>parseInt(i));
        
        if (!day || !month || !year) {
            setFieldValue("");
        } else {
            
            let dt = new Date();
            dt.setUTCFullYear(year);
            dt.setUTCMonth(month-1);
            dt.setUTCDate(day);
            
            if (dt.getUTCFullYear() === year && dt.getUTCMonth() === month-1 && dt.getUTCDate() === day) {
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
            setShowCalendar(true);
        }, 1);
    }
    
    useEffect(()=>{
        if (depencencies && depencencies.length && onValidate) {
            let validation = onValidate(String(props.value ?? "")) ?? '';
            setError(validation !== true ? String(validation) : "");
        }
    }, depencencies);
    
    useEffect(()=>{
        if (fieldValue) {
            setDateValue(DateFromViewToDate(fieldValue));
        } else {
            setDateValue(undefined);
        }
    }, [fieldValue]);

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

    useEffect(()=>{
        setTimeout(() => {
            if (refCalendar.current) {
                let visible = !isElementInViewport(refCalendar.current);
                setShowCaledarTop(visible && showCalendar);
            }
        }, 1);
    }, [showCalendar]);

    useEffect(()=>{
        let fn = () => {
            setShowCalendar(false);
        }

        document.querySelector('body')?.addEventListener('click', fn);
        
        return () => {
            document.querySelector('body')?.removeEventListener('click', fn);
        }

    }, []);
    
    return <Tags.InputWrapper className={props.className ?? ''} style={props.style ?? {}}>
        <Tags.InputContent width={props.width}>
            <Tags.DateInputElement 
                type="text"
                id={uid}
                value={fieldValue}
                onChange={handleChange}
                onFocus={(e)=>handleFocus(e)}
                onBlur={(e)=>handleBlur(e)}
                onClick={()=>handleClick()}
            />
            <Tags.ErrorMessage htmlFor={uid} className={'hasIcon'}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
            { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'hasIcon big' : 'hasIcon'} /> : null }
        </Tags.InputContent>
        <Tags.FieldTypeIcon>
            <Icon size={1} path={mdiCalendar} />
        </Tags.FieldTypeIcon>
        <Tags.CalendarWrapper className={(showCalendar && calendar!==false ? 'show' : '') + (showCaledarTop ? 'top' : '')} ref={refCalendar} onClick={(e) => {e.stopPropagation()}}>
            <Calendar 
                minDetail={minViewmode ?? "decade"}
                locale={locale}
                next2Label={null}
                prev2Label={null}
                value={dateValue} 
                nextLabel={<Icon path={mdiChevronRight} size={1} />}
                prevLabel={<Icon path={mdiChevronLeft} size={1} />}
                onChange={(v:Date|null|[Date|null,Date|null])=>{
                    if (!v || Array.isArray(v)) {
                        return;
                    }
                    
                    if (onValidate) {
                        let validation = onValidate(DateFromUTCToView(v, false)) ?? '';
                        setError(validation !== true ? String(validation) : "");
                    } else {
                        setError("");
                    }

                    const value = DateFromUTCToView(v, false);
                    
                    setShowCalendar(false);
                    setFieldValue(value);
                    
                    if (props.onChange) {
                        let e = ({target:{value:""}} as unknown) as FocusEvent<HTMLInputElement>;
                        e.target.value = value ?? '';
                        props.onChange(e);
                    }
                }} 
            />
        </Tags.CalendarWrapper>
    </Tags.InputWrapper>
}