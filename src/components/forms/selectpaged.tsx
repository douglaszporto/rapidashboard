import { HTMLProps, FormEvent, FocusEvent, KeyboardEvent, useState, useEffect, useRef, useCallback } from 'react'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

import { FormError } from '../../types/FormError.type';
import { Paginator } from '../items/Paginator';
import * as Tags from './styles';

type SelectPagedProps = Omit<HTMLProps<HTMLSelectElement>,'onClick'|'onFocus'|'onBlur'|'onChange'> & {
    uid: string,
    labelValue?: string,
    loader?: (page?:number, filter?:string)=>Promise<any>,
    transform?: (t:any, index:number) => any,
    formError?: FormError,
    onChange?: (option:{value:string, label:string})=>any
    onClick?: (e:FocusEvent)=>any,
    onFocus?: (e:FocusEvent)=>any,
    onBlur?: (e:FocusEvent)=>any,
    onValidate ?: ((value:string | null)=>string | boolean) | null
};

type OptionItem = {
    value: number | string;
    label: string;
    index: number
};

export const SelectPaged:React.FC<SelectPagedProps> = ({onValidate, formError, onClick, onFocus, ...props}: SelectPagedProps) => {
    
    const [extError, setExtError] = useState<FormError>();
    const [error, setError] = useState<string>("");
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [dataFilter, setDataFilter] = useState<string>("");
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [currentOptionIndex, setCurrentOptionIndex] = useState<number>();
    const [optionsList, setOptionsList] = useState<OptionItem[]>([]);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(1);

    const refTimer = useRef<NodeJS.Timeout>();
    
    const handleChangeInput = (e: FormEvent<HTMLInputElement>) => {
        let value = (e.target as HTMLInputElement).value;
        setDataFilter(value);

        if (refTimer.current) {
            clearInterval(refTimer.current);
        }

        refTimer.current = setTimeout(()=>{
            handleChangePage(1, value);
        },300);
    }

    const handleOptionSelected = (index?: number) => {

        let option = optionsList.filter(o => o.index === index)[0] ?? undefined;
        setDataFilter(option?.label);
        setShowOptions(false);

        if (props.onChange) {
            props.onChange({value: String(option?.value), label: option?.label});
        }

        if (onValidate) {
            let validation = onValidate(String(option?.value)) ?? '';
            setError(validation !== true ? String(validation) : "");
        } else {
            setError("");
        }
    }
    
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        document.querySelector("body")?.click();
        
        if (onFocus) {
            onFocus(e);
        }
        
        if(props.readOnly !== true) {
            setShowOptions(true);
            setHasFocus(true);
        }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        switch(e.key) {
            case 'ArrowUp':
                setCurrentOptionIndex((c) => {
                    let next = (c ?? -1)-1;
                    if (next < 0) {
                        return optionsList.length-1;
                    }
                    return next;
                });
                break;
            case 'ArrowDown':
                setCurrentOptionIndex((c) => {
                    let next = (c ?? -1)+1;
                    if (next >= optionsList.length) {
                        return 0;
                    }
                    return next;
                });
                break;
            case 'Enter':
                    handleOptionSelected(currentOptionIndex);
                    break;
        }
    }
    
    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
        if (dataFilter && dataFilter.length > 0) {
            let hasEquals = optionsList.filter(i=>i.label.includes(dataFilter));
            if (hasEquals.length > 0) {
                setDataFilter(hasEquals[0].label);
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

    const handleEnterOption = (index:number) => {
        setCurrentOptionIndex(index);
    }

    const handleLeaveOptions = () => {
        setCurrentOptionIndex(undefined);
    }

    const handleChangePage = useCallback((page?: number, filter?:string) => {
        let update = true;
        
        if (page) {
            setPage(page);
        }
        
        (async () => {      
            if (!props.loader || !props.transform) {
                return;
            }
            const req = await props.loader(page, (Boolean(filter ?? dataFilter) ? (filter ?? dataFilter) : undefined));
            if (update && req.data && req.data.items) {
                setOptionsList(req.data.items.map((item:any, index:number) => props.transform ? props.transform(item, index) : undefined));
                setTotal(Math.ceil(req.data.total/5));
            }
        })();
    
        return () => {
          update = false;
        }
    }, [props.transform, props.loader]);

    useEffect(()=>{
        setError(extError?.message[0] ?? '');
    }, [extError]);

    useEffect(()=>{
        if (formError) {
            setExtError(formError);
        }
    }, [formError]);

    useEffect(()=>{
        if (!props.value) {
            setDataFilter("");
        } else {
            let opt = optionsList.find(o => o.value === props.value);
            if (opt) {
                setDataFilter(opt.label);
            } else {
                setDataFilter("");
            }
        }
    }, [props.value]);

    useEffect(()=>{
        if (!props.labelValue) {
            setDataFilter("");
        } else {
            setDataFilter(props.labelValue);
        }
    }, [props.labelValue]);

    /*useEffect(()=>{
        let options:OptionItem[] = Children.map(Children.toArray(props.children), (option, index) => {
            if (['string','number'].indexOf(typeof option) >= 0) {
                return {
                    value: option, 
                    label: option, 
                    index
                };
            }
            return {
                value: cloneElement(option as ReactElement).props.value, 
                label: cloneElement(option as ReactElement).props.children,
                index
            };
        });

        setOptionsList(options);
    }, [props.children]);*/

    useEffect(()=>{
        handleChangePage();

        let fn = () => {
            setShowOptions(false);
        }

        document.querySelector("body")?.addEventListener("click", fn);

        return ()=>{
            document.querySelector("body")?.removeEventListener("click", fn);
        }
    }, []);
    
    return <Tags.InputWrapper className={props.className ?? ''} onClick={(e)=>e.stopPropagation()} onBlur={()=>{console.log('TRIGGER');}}>
        <Tags.InputElement
            id={props.uid + '--filter'} 
            value={dataFilter}
            autoComplete='off'
            readOnly={props.readOnly || false}
            onChange={handleChangeInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
        />
        {props.readOnly !== true ? <Tags.FieldTypeIcon style={{opacity:1}}>
            <Icon size={0.8} path={mdiChevronDown} color="var(--theme-color-font, #000)" />
        </Tags.FieldTypeIcon> : null}
        <Tags.ErrorMessage htmlFor={props.uid}>{ !hasFocus ? error : '' }</Tags.ErrorMessage>
        { error ? <Tags.ErrorIcon title={error} className={hasFocus ? 'big' : ''} /> : null }
        {showOptions ? <Tags.OptionsWrapper onMouseLeave={handleLeaveOptions}>
            {optionsList.map((option, index) => <Tags.Option className={currentOptionIndex === index ? 'over' : ''} onMouseEnter={()=>handleEnterOption(index)} onClick={()=>handleOptionSelected(index)} key={index}>{option.label}</Tags.Option>)}
            <Tags.PagesWrapper>
                <Paginator page={page} total={total} onPageChange={handleChangePage} />
            </Tags.PagesWrapper>
        </Tags.OptionsWrapper> : null}
    </Tags.InputWrapper>
}