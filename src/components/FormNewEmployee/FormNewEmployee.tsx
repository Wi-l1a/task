import React, { FC, useState } from 'react';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { Box, FormControl, InputLabel, TextField, Button, FormLabel, Checkbox, FormControlLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import s from './FormNewEmployee.module.scss';
import { Employee, PositionDetails } from '../../pages/NewEmployee/NewEmployee';

interface FormNewEmployeeProps {
    setEmployees: React.Dispatch<React.SetStateAction<PositionDetails[]>>;
    employees: PositionDetails[];
    setActive: React.Dispatch<React.SetStateAction<string>>;
    active: string
}

const FormNewEmployee: FC<FormNewEmployeeProps> = ({ setEmployees, employees, setActive, active }) => {
    const [brigades, setBrigades] = useState<string>('');
    const [formValues, setFormValues] = useState<Employee>({
        id: 0,
        name: '',
        surname: '',
        phone: '',
        position: '',
        image: ''
    });

    const handleChangeBrigades = (event: SelectChangeEvent<string>) => {
        setActive('');
        setBrigades(event.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPosition = event.target.value;
        setActive(newPosition);
        setBrigades('')
        setFormValues(prevValues => ({
            ...prevValues,
            position: newPosition,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { name, surname, phone, position, image } = formValues;
        const selectedBrigadeId = brigades ? Number(brigades) : null;

        if (name && surname && phone && position && image) {
            const newEmployee: Employee = {
                id: Date.now(),
                name,
                surname,
                phone,
                position,
                image
            };

            if (selectedBrigadeId) {
                const updatedEmployees = employees.map(el => {
                    if (el.id === selectedBrigadeId) {
                        return {
                            ...el,
                            employees: [...el.employees, newEmployee],
                            brigade: [...el.brigade, name],
                        };
                    }
                    return el;
                });
                setEmployees(updatedEmployees);
            } else {
                const activeEmployees = employees.filter(emp => emp.isActive && emp.position === "Швея");
                if (activeEmployees.length > 0) {
                    const updatedEmployees = employees.map(el => {
                        if (el.isActive && el.position === "Швея") {
                            return {
                                ...el,
                                brigade: [...el.brigade, name],
                                employees: [...el.employees, newEmployee]
                            };
                        }
                        return el;
                    });
                    setEmployees(updatedEmployees);
                } else {
                    const newEmployeeData: PositionDetails = {
                        id: Date.now(),
                        position,
                        brigade: [name],
                        isActive: false,
                        employees: [newEmployee]
                    };
                    setEmployees(prev => [...prev, newEmployeeData]);
                }
            }
        } else {
            alert('Заполните все данные');
        }
    };

    return (
        <Box className={s.form} component="form" onSubmit={handleSubmit}>
            <ImageUpload setFormValues={setFormValues} formValues={formValues} />
            <div className={s.wrapper}>
                <FormControl className={s.inp} variant="outlined" fullWidth>
                    <InputLabel className={s.label} htmlFor="name">Имя</InputLabel>
                    <TextField
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        fullWidth
                        placeholder="Иван"
                        required
                    />
                </FormControl>
                <FormControl className={s.inp} variant="outlined" fullWidth>
                    <InputLabel className={s.label} htmlFor="surname">Фамилия</InputLabel>
                    <TextField
                        id="surname"
                        name="surname"
                        value={formValues.surname}
                        onChange={handleInputChange}
                        fullWidth
                        placeholder="Иванов"
                        required
                    />
                </FormControl>
                <FormControl className={s.inp} variant="outlined" fullWidth>
                    <InputLabel className={s.label} htmlFor="phone">Телефон</InputLabel>
                    <TextField
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        fullWidth
                        placeholder="+7"
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel className={s.label} id="position">Должность</FormLabel>
                    <div className={s.group}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formValues.position === "Раскройщик"}
                                    onChange={handlePositionChange}
                                    value="Раскройщик"
                                />
                            }
                            label="Раскройщик"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formValues.position === "Технолог"}
                                    onChange={handlePositionChange}
                                    value="Технолог"
                                />
                            }
                            label="Технолог"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formValues.position === "Швея"}
                                    onChange={handlePositionChange}
                                    value="Швея"
                                />
                            }
                            label="Швея"
                        />
                    </div>
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel className={s.label} id="brigade">Объединить в бригаду</FormLabel>
                    <Select
                        labelId="brigade"
                        id="brigade"
                        value={brigades}
                        onChange={handleChangeBrigades}
                    >
                        <MenuItem value='' >Отменит выбор</MenuItem>
                        {
                            formValues.position === 'Швея' ?
                                employees.filter(el => el.position === 'Швея')
                                    .map(el => (
                                        <MenuItem key={el.id} value={el.id.toString()}>{el.brigade.length <= 1 ? `${el.brigade.join(', ')} - Швея` : `${el.brigade.join(', ')} - Бригада`}</MenuItem>
                                    ))
                                :
                                <MenuItem value='' disabled>Ничего не найдено</MenuItem>
                        }
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" className={s.button}>
                    Добавить
                </Button>
            </div>
        </Box>
    );
};

export default FormNewEmployee;
