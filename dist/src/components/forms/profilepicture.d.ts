import { HTMLProps } from 'react';
type ProfilePictureProps = Omit<HTMLProps<HTMLDivElement>, 'onChange'> & {
    labelDrag?: string;
    labelOr?: string;
    labelMaxSize?: string;
    labelSearch?: string;
    uid: string;
    value?: string;
    onChange?: Function;
};
export declare const ProfilePicture: React.FC<ProfilePictureProps>;
export {};
