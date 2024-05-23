import { HTMLProps, useEffect, useState } from 'react';

import { Label } from './label';
import * as Tags from './styles';

type CheckboxProps = HTMLProps<HTMLDivElement> & {
    uid: string,
    label: string,
    isVertical?: boolean,
    noWrap?: boolean,
    checked?: boolean,
    onCheck?: Function,
}

export const Checkbox:React.FC<CheckboxProps> = ({...props}: CheckboxProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleClick = () => {
        let check = !isChecked;
        setIsChecked(check);
        if (props.onCheck) {
            props.onCheck(check);
        }
    }

    useEffect(() => {
        setIsChecked(Boolean(props.checked));
    }, [props.checked]);

    return <Tags.CheckboxWrapper 
        style={props.style}
        onClick={()=>handleClick()}
        className={(props.isVertical === true ? 'column ' : 'row ') + (props.className ?? '')}
    >
        <Label style={{cursor:'pointer'}} className={props.noWrap ? 'noWrap' : ''}>{props.label}</Label>
        <Tags.CheckboxItem className={isChecked ? 'checked' : ''}/>
    </Tags.CheckboxWrapper>
}
