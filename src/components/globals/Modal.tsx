import { useSelector, useDispatch } from 'react-redux';

import * as Tags from './styles';

type ReactContent = JSX.Element | JSX.Element[] | undefined;

export const Modal:React.FC<{onClose:Function}> = ({onClose}:{onClose:Function}) => {

    const modalContent = useSelector<any, ReactContent>(s => s.modal.content);
    const modalShow = useSelector<any>(s => s.modal.show);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(onClose());
    }

    return <>
        <Tags.Modal className={modalShow ? 'active' : ''}>
            {modalContent}
        </Tags.Modal>
        <Tags.Background className={modalShow ? 'active' : ''} onClick={handleClose}/>
    </>
    
}