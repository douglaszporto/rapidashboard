import { HTMLProps } from 'react';

type UploadProps = Omit<HTMLProps<HTMLTextAreaElement>, 'value' | 'onChange'> & {
    uid: string;
    value?: any;
    labelUpload?: string;
    multiple?: boolean;
    externalFiles: FileItemExternal[];
    horizontal?: boolean;
    onChange?: Function;
    onRemoveFileExternal?: (id: string) => void;
};
export type FileItem = {
    id: string;
    file: File;
};
export type FileItemExternal = {
    id: string;
    name: string;
    size: number;
};
export declare const Upload: React.FC<UploadProps>;
export {};
