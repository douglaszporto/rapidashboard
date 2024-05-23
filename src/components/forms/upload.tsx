import { FormEvent, HTMLProps, useRef, useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiCloudUpload, mdiAttachment, mdiClose } from '@mdi/js';

import { Button } from './button';
import * as Tags from './styles';

type UploadProps = Omit<HTMLProps<HTMLTextAreaElement>, 'value'|'onChange'> & {
    uid: string,
    value?: any,
    labelUpload?: string,
    multiple?: boolean,
    externalFiles: FileItemExternal[],
    horizontal?: boolean,
    onChange?: Function,
    onRemoveFileExternal?: (id:string) => void,
}

export type FileItem = {
    id: string;
    file: File;
}

export type FileItemExternal = {
    id: string;
    name: string;
    size: number;
}

export const Upload:React.FC<UploadProps> = ({multiple, externalFiles, horizontal, labelUpload, ...props}: UploadProps) => {

    const [files, setFiles] = useState<FileItem[]>([]);
    const [filesExternal, setFilesExternal] = useState<FileItemExternal[]>();
    const refInput = useRef<HTMLInputElement>(null);
    
    const handleChange = function(e: FormEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            handleFile(e.currentTarget.files);
        }
    };

    const handleFile = (newfiles: FileList) => {
        const file = newfiles.item(0);

        if (!file) {
            return;
        }

        const list:FileItem[] = [];
        for(let i=0; i<newfiles.length; i++) {
            if (newfiles.item(i) !== null) {
                list.push({
                    id: String(Date.now()) + String(i)  + String(Math.ceil(Math.random()*89999+10000)),
                    file: newfiles.item(i) as File
                })
            }
        }

        if (typeof props.onChange === 'function') {
            props.onChange([...files, ...list]);
        }

        setFiles(f => [...f, ...list]);

    }

    const handleClick = () => {
        const r:HTMLInputElement|null = refInput.current ? (refInput.current as HTMLInputElement) : null;
        if (r) {
            r.click();
        }
    };

    const handleRemoveFile = (id: string, modifyExternal?: boolean) => {
        const newFiles = files.filter(f => f.id !== id) ?? [];
        setFiles(newFiles);

        if (typeof props.onChange === 'function') {
            props.onChange(newFiles);
        }

        if (modifyExternal === true && props.onRemoveFileExternal) {
            props.onRemoveFileExternal(id);
        }
    };


    useEffect(() => {
        setFiles(props.value);
    }, [props.value]);

    useEffect(() => {
        setFilesExternal(externalFiles);
    }, [externalFiles]);
        
        
    return <Tags.UploadArea className={(props.className ?? '') + (horizontal ? ' horizontal' : '')} style={props.style ?? {}}>
        <Tags.ProfilePhotoFileInput id={props.uid} ref={refInput} onChange={handleChange} multiple={multiple === true}/>
        <Button 
            icon={mdiCloudUpload}
            onClick={handleClick}
            color='var(--theme-color-blue)'
            title={labelUpload}
            size={9}
            style={{margin: horizontal ? '0 0.5rem 0.5rem 0' : '0'}}
        />
        {files.map(file => <Tags.FileItem key={file.id} className={horizontal ? 'horizontal' : ''}>
            <Icon size={1} path={mdiAttachment} />
            <Tags.FileName>{file.file.name}</Tags.FileName>
            <Tags.FileRemove onClick={()=>handleRemoveFile(file.id, false)}>
                <Icon size={0.7} path={mdiClose} />
            </Tags.FileRemove>
        </Tags.FileItem>)}
        {filesExternal?.map(file => <Tags.FileItem key={file.id}>
            <Icon size={1} path={mdiAttachment} />
            <Tags.FileName>{file.name}</Tags.FileName>
            <Tags.FileRemove onClick={()=>handleRemoveFile(file.id, true)}>
                <Icon size={0.7} path={mdiClose} />
            </Tags.FileRemove>
        </Tags.FileItem>)}
    </Tags.UploadArea>
}