import { HTMLProps, DragEvent, FormEvent, MouseEvent, useState, useRef, useEffect} from 'react'
import Icon from '@mdi/react';
import { mdiTrashCan, mdiCloudUpload  } from '@mdi/js';

import { Button } from './button';
import * as Tags from './styles';

type ProfilePictureProps = Omit<HTMLProps<HTMLDivElement>, 'onChange'> & {
    labelDrag?: string;
    labelOr?: string;
    labelMaxSize?: string;
    labelSearch?: string;
    uid: string;
    value?: string;
    onChange?: Function;
};

export const ProfilePicture:React.FC<ProfilePictureProps> = ({labelDrag, labelOr, labelMaxSize, labelSearch, value, ...props}: ProfilePictureProps) => {

    const [dragActive, setDragActive] = useState<boolean>(false);
    const [previewData, setPreviewData] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const refInput = useRef<HTMLInputElement>(null);
  
    const handleDrag = function(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    };

    const handleChange = function(e: FormEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            handleFile(e.currentTarget.files);
        }
    };

    const handleFile = (files: FileList) => {
        const fileReader = new FileReader();
        const file = files.item(0);

        setError(false);

        if (!file) {
            return;
        }


        if (file.size > 1048576) {
            setError(true);
            return;
        }

        fileReader.onloadend = function () {
            setPreviewData(fileReader.result ? String(fileReader.result) : "");
        }

        fileReader.readAsDataURL(file);
        if (props.onChange && typeof props.onChange === 'function') {
            props.onChange(file);
        }
    }

    const handleClick = () => {
        const r:HTMLInputElement|null = refInput.current ? (refInput.current as HTMLInputElement) : null;
        if (r) {
            r.click();
        }
    };

    const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setPreviewData("");
        if (props.onChange && typeof props.onChange === 'function') {
            props.onChange(undefined);
        }
    };

    useEffect(()=>{
        if (value) {
            setPreviewData(value);
        }
    }, [value]);

    return <Tags.ProfilePictureWrapper >
        <Tags.ProfilePhoto onDragEnter={handleDrag}>
            <Tags.ProfilePhotoFileInput id={props.uid} accept="image/*" ref={refInput} onChange={handleChange}/>
            {previewData ? <>
                <Tags.ProfilePreview>
                    <img src={previewData} />
                </Tags.ProfilePreview> 
                <Tags.ProfilePhotoRemove>
                    <Button icon={mdiTrashCan} color="#BF0000" onClick={handleRemove}/>
                </Tags.ProfilePhotoRemove>
            </>: <>
                <Icon path={mdiCloudUpload } size={3} style={{opacity:dragActive ? 1 : 0.3}} />
                <Tags.ProfilePhotoDragText>
                    {labelDrag}
                </Tags.ProfilePhotoDragText>
                <Tags.ProfilePhotoExtraText>
                    {labelOr ?? 'or'}
                </Tags.ProfilePhotoExtraText>
                <Button color="#0250C7" onClick={handleClick} title={labelSearch} />
                <Tags.ProfilePhotoDragText style={{color:error ? "var(--theme-color-value-red)" : "var(--theme-color-font-empty)"}}>
                    {labelMaxSize}
                </Tags.ProfilePhotoDragText>
            </>}
            {dragActive ? <Tags.ProfileDragOver onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} /> : null}
        </Tags.ProfilePhoto>
    </Tags.ProfilePictureWrapper>
}