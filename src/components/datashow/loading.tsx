import * as Tags from './styles';

export interface LoadingProps {
    loading: string[];
    labelLoading?: string;
}

export const Loading:React.FC<LoadingProps> = ({loading, labelLoading}:LoadingProps) => {

    return <Tags.Loading className={ loading && loading.length ? 'active' : ''}>
        {labelLoading ?? 'Carregando'}
    </Tags.Loading>
    
}