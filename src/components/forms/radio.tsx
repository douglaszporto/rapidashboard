import {HTMLProps, useEffect, useState} from 'react'

import { Label } from './label';
import * as Tags from './styles';

type RadioProps = HTMLProps<HTMLDivElement> & {
    uid: string,
    labelContent?: any,
    isVertical?: boolean,
    checked?: boolean,
    onCheck?: Function,
}

export const Radio:React.FC<RadioProps> = ({...props}: RadioProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleClick = () => {
        setIsChecked(true);
        if (props.onCheck) {
            props.onCheck(true);
        }
    }

    useEffect(() => {
        setIsChecked(Boolean(props.checked));
    }, [props.checked]);

    return <Tags.RadioWrapper 
        onClick={()=>handleClick()}
        className={(props.isVertical === true ? 'column ' : 'row ') + (props.className ?? '')}
        style={props.style}
    >
        <Label style={{cursor:'pointer', display: 'flex', flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>{props.label ?? props.labelContent}</Label>
        <Tags.RadioItem className={isChecked ? 'checked' : ''}/>
    </Tags.RadioWrapper>
}
