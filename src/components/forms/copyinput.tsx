import { HTMLProps, FocusEvent, useState, useEffect } from 'react'

import * as Tags from './styles';

type CopyInputProps = HTMLProps<HTMLDivElement> & {
    uid: string,
    copyLabel?: string,
}

export const CopyInput:React.FC<CopyInputProps> = ({uid, copyLabel, ...props}: CopyInputProps) => {
    const [fieldValue, setFieldValue] = useState<string>("");

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        document.querySelector("body")?.click();

        if (props.onFocus) {
            props.onFocus(e);
        }
    }

    const handleCopy = () => {
        const id = uid.replace(/\./gi,"_");
        const copyText = document.querySelector("#"+id) as HTMLInputElement;

        if (!copyText) {
            return;
        }

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);
    }
    
    useEffect(()=>{
        if (props.value !== null) {
            setFieldValue(String(props.value));
        }
    }, [props.value]);

    return <Tags.InputCopyWrapper className={props.className ?? ''} style={props.style ?? {}}>
        <Tags.CopyContent>
            <Tags.InputElement 
                id={uid.replace(/\./gi,"_")}
                type="text"
                readOnly={true}
                value={fieldValue}
                onFocus={(e)=>handleFocus(e)}
                style={{paddingRight:"4rem"}}
            />
            <Tags.CopyButton onClick={handleCopy}>{copyLabel}</Tags.CopyButton>
        </Tags.CopyContent>
    </Tags.InputCopyWrapper>
}