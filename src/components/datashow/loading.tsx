import * as Tags from './styles';
import { Translate } from '../i18n/Translate';

interface LoadingProps {
    loading: string[];
}

export const Loading:React.FC<LoadingProps> = ({loading}:LoadingProps) => {

    return <Tags.Loading className={ loading && loading.length ? 'active' : ''}>
        <Translate path="loading" />
    </Tags.Loading>
    
}