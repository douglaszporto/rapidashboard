import { HTMLProps, FocusEvent, useState, useEffect } from 'react'
import Icon from '@mdi/react';
import Calendar from 'react-calendar';
import { mdiCalendar, mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import { FormError } from '../../types/FormError.type';
import { DateFromDateToMonthView, DateFromUTCToView } from '../../util/dates';
import * as Tags from './styles';

type ValueDate = Date | null;

type MonthInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange'|'value'> & {
    uid: string,
    value?: Date,
    locale?: string,
    depencencies?: Array<any>,
    formError?: FormError,
    calendar?: boolean,
    onChange?: ((value?:Date)=>any),
    onValidate?: ((value:string | null)=>string | boolean) | null,
}


export const MonthInput:React.FC<MonthInputProps> = ({onValidate, depencencies, formError, locale, calendar, ...props}: MonthInputProps) => {
    
    const [error, setError] = useState<string>("");
    const [extError, setExtError] = useState<FormError>();
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [fieldValue, setFieldValue] = useState<string>("");
    const [dateValue, setDateValue] = useState<Date>();
    const [showCalendar, setShowCalendar] = useState<boolean>(false);

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        document.querySelector("body")?.click();

        setTimeout(() => {
            setShowCalendar(true);
        }, 1);

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
    
    /*useEffect(()=>{
        setDateValue(DateFromViewToDate(fieldValue ?? ''));
    }, [fieldValue]);*/

    useEffect(()=>{
        if (props.value) {
            setFieldValue(DateFromDateToMonthView(props.value));
            setDateValue(props.value);
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
            <Tags.MonthInputElement 
                type="text"
                id={props.uid}
                value={fieldValue}
                readOnly={true}
                onFocus={(e)=>handleFocus(e)}
                onBlur={(e)=>handleBlur(e)}
                onClick={(e)=>e.stopPropagation()}
            />
            <Tags.ErrorMessage htmlFor={props.uid} className={'hasIcon'}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
            { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'hasIcon big' : 'hasIcon'} /> : null }
        </Tags.InputContent>
        <Tags.FieldTypeIcon>
            <Icon size={1} path={mdiCalendar} />
        </Tags.FieldTypeIcon>
        <Tags.CalendarWrapper className={showCalendar && calendar!==false ? 'show' : ''} onClick={(e) => {e.stopPropagation()}}>
            <Calendar 
                minDetail="decade" 
                maxDetail="year"
                defaultView="year"
                locale={locale}
                next2Label={null}
                prev2Label={null}
                value={dateValue} 
                nextLabel={<Icon path={mdiChevronRight} size={1} />}
                prevLabel={<Icon path={mdiChevronLeft} size={1} />}
                tileClassName={({date}:{date:Date})=>{
                    return `monthcalendar-${date.getUTCMonth()}-${props.uid.replace(/\./gi,'-')}`;
                }}
                onChange={(v: ValueDate | [ValueDate,ValueDate])=>{
                    if (v === null || Array.isArray(v)) {
                        return;
                    }

                    v.setDate(1);

                    const value = DateFromUTCToView(v, false);
                    const valueText = DateFromDateToMonthView(v);
                    if (onValidate) {
                        let validation = onValidate(value) ?? '';
                        setError(validation !== true ? String(validation) : "");
                    } else {
                        setError("");
                    }

                    setShowCalendar(false);
                    setFieldValue(valueText);

                    let decItem = document.querySelector(`.monthcalendar-11-${props.uid.replace(/\./gi,'-')}`) as HTMLButtonElement;
                    if (decItem){
                        decItem.focus();
                    }
                    
                    if (props.onChange) {
                        props.onChange(v);
                    }
                }} 
            />
        </Tags.CalendarWrapper>
    </Tags.InputWrapper>
}