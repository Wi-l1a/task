import React, { FC, useRef } from 'react';
import { Button } from '@mui/material';
import { ReactComponent as AddCamera } from './../../assets/icons/addCamera.svg'
import s from './ImageUpload.module.scss'
import { Employee } from '../../pages/NewEmployee/NewEmployee';

interface ImageUploadProps {
    setFormValues: React.Dispatch<React.SetStateAction<Employee>>;
    formValues: Employee;
}

const ImageUpload: FC<ImageUploadProps> = ({ setFormValues, formValues }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setFormValues((prevValues) => ({
                    ...prevValues,
                    image: result,
                }));
            };
            reader.readAsDataURL(file);
        }

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className={s.box}>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-button-file"
                type="file"
                onChange={handleImageChange}
                ref={fileInputRef}
            />
            <label htmlFor="upload-button-file">
                {formValues.image ? (
                    <img className={s.img} src={formValues.image} alt="avatar" />
                ) : (
                    <Button
                        className={s.btn}
                        component="span"
                        startIcon={<AddCamera />}
                    />
                )}
            </label>
        </div>
    );
};

export default ImageUpload;
