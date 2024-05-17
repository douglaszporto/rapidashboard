import * as Tags from './styles';

type ReactContent = JSX.Element | JSX.Element[] | undefined;

interface ModalProps {
    content?: ReactContent;
    show?: boolean;
    onClose?: Function;
}

export const Modal:React.FC<ModalProps> = ({content, show, onClose}:ModalProps) => {

    const handleClose = () => {
        onClose && onClose();
    }

    return <>
        <Tags.Modal className={show ? 'active' : ''}>
            {content ?? <></>}
        </Tags.Modal>
        <Tags.Background className={show ? 'active' : ''} onClick={handleClose}/>
    </>
    
}