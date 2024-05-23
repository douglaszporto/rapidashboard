import { HTMLProps, FormEvent, FocusEvent, useState, useEffect, Children, ReactNode, isValidElement, cloneElement } from 'react'

import * as Tags from './styles';
import { FormError } from '../../types/FormError.type';

type SelectProps = Omit<HTMLProps<HTMLSelectElement>,'width'> & {
    uid: string,
    width?: string|number,
    formError?: FormError
    onValidate ?: ((value:string | null)=>string | boolean) | null
}


export const Select:React.FC<SelectProps> = ({onValidate, formError, readOnly, width, ...props}: SelectProps) => {
    
    const [extError, setExtError] = useState<FormError>();
    const [error, setError] = useState<string>("");
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    
    const handleChange = (e: FormEvent<HTMLSelectElement>) => {
        if (props.onChange) {
            props.onChange(e);
        }

        if (onValidate) {
            let validation = onValidate((e.target as HTMLSelectElement).value) ?? '';
            setError(validation !== true ? String(validation) : "");
        } else {
            setError("");
        }
    }
    
    const handleFocus = (e: FocusEvent<HTMLSelectElement>) => {
        document.querySelector("body")?.click();
        
        if (props.onFocus) {
            props.onFocus(e);
        }
        
        setHasFocus(true);
    }
    
    const handleBlur = (e: FocusEvent<HTMLSelectElement, Element>) => {
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
        if (extError && typeof extError.message === 'string') {
            setError(extError.message);
        }else {
            setError(extError?.message[0] ?? '');
        }
    }, [extError]);

    useEffect(()=>{
        setExtError(formError);
    }, [formError]);
    
    return <Tags.InputWrapper className={props.className ?? ''} width={width}>
        {readOnly ? <Tags.ReadOnlyElement>
            {Children.map(props.children, (child:ReactNode) => {
                if (isValidElement(child) && child.props.value === props.value) {
                    return cloneElement(child, {});
                }
                return null;
            })}
        </Tags.ReadOnlyElement> : <Tags.SelectElement 
                id={props.uid}
                value={props.value}
                width={width}
                onChange={handleChange}
                onFocus={(e)=>handleFocus(e)}
                onBlur={(e)=>handleBlur(e)}
            >
                {props.children}
            </Tags.SelectElement>
        }
        <Tags.ErrorMessage htmlFor={props.uid} className='hasDrop'>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
        { error ? <Tags.ErrorIcon title={error} className={'hasDrop' + (hasFocus ? ' big' : '')} /> : null }
    </Tags.InputWrapper>
}