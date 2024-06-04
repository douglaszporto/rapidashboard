import { useEffect, useRef, useState } from 'react';
import Icon from '@mdi/react';
import { mdiCheck, mdiClose } from '@mdi/js';

import * as Tags from './styles';

export interface MessageProps {
    messages?: {content:string, messageType:string}[];
    onPop?: () => void;
}

export const Message:React.FC<MessageProps> = ({messages, onPop}) => {
    
    const [show, setShow] = useState<boolean>(false);
    const [type, setType] = useState<string>();
    const [content, setContent] = useState<string>();

    const autoCloseTimer = useRef<NodeJS.Timeout>();
    const firstRender = useRef<boolean>(true);

    
    const getIcon = () => {
        switch(type) {
            case "success": return mdiCheck;
            case "error": return mdiClose;
            default: return mdiClose;
        }
    }


    useEffect(()=> {
        if (messages && messages.length > 0 && !firstRender.current) {
            setShow(true);
            setType(messages[0].messageType);
            setContent(messages[0].content);

            autoCloseTimer.current = setTimeout(() => {
                setTimeout(() => {
                    onPop && onPop();
                }, 500);
            }, 5000);
        } else {
            setShow(false);
        }

        return () => {
            clearTimeout(autoCloseTimer.current);
        }
    }, [messages]);

    useEffect(()=> {
        if (firstRender.current) {
            firstRender.current = false;
        }
    }, []);


    return <Tags.Message className={ (show ? 'active ' : '') + type}>
        <Icon size={1} path={getIcon()} />
        {content}
    </Tags.Message>  
};