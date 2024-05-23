import {HTMLProps, MouseEvent} from 'react'
import Icon from '@mdi/react';
import * as Tags from './styles';

type ButtonProps = HTMLProps<HTMLButtonElement> & {
    icon?: string,
    onClick?: Function,
    color?: string,
    title?: string,
    tooltip?: string,
    hideTextOnMobile?: boolean,
    disabled?: boolean,
    border?: boolean,
    size?: number | string
}

export const Button:React.FC<ButtonProps> = ({onClick, icon, color, border, size, title, hideTextOnMobile, disabled, tooltip, ...props}: ButtonProps) => {

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (onClick && !disabled) {
            onClick(e);
        }
    }

    const handleFocus = () => {
        document.querySelector("body")?.click();
    }

    return <Tags.ButtonElement 
        color={color} 
        size={size}
        title={tooltip}
        style={props.style}
        className={(disabled ? 'disabled ' : '') + (border ? 'border ' : '')}
        onFocus={()=>{handleFocus()}}
        onClick={(e:MouseEvent) => handleClick(e as MouseEvent<HTMLButtonElement>)}
    >
        {icon ? <Icon path={icon}
            title={title}
            size={0.95}
            style={{margin:"-2px 0 0 -2px"}}
            color={border ? color : 'white'}
        /> : null }
        <div className={hideTextOnMobile ? "btnLabel" : ""}>
            {props.children ?? title ?? ''}
        </div>
    </Tags.ButtonElement>
}

const ButtonRowElement = Tags.ButtonRowElement;

export { ButtonRowElement as ButtonRow };