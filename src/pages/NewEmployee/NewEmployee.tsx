import React, { FC, useState, useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import s from './NewEmployee.module.scss';
import FormNewEmployee from '../../components/FormNewEmployee/FormNewEmployee';
import EmployeeRow from '../../components/EmployeeRow/EmployeeRow';
import { Input, InputAdornment, ListItemButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

export interface Employee {
    id: number;
    name: string;
    surname: string;
    phone: string;
    position: string;
    image?: string;
}

export interface PositionDetails {
    id: number;
    position: string;
    brigade: string[];
    isActive: boolean;
    employees: Employee[];
}

const NewEmployee: FC = () => {
    const [employees, setEmployees] = useState<PositionDetails[]>([]);
    const [active, setActive] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const getEmployeesLS = () => {
        const storedEmployees = localStorage.getItem('employees');
        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees));
        }
    };

    const saveEmployeesLS = (updatedEmployees: PositionDetails[]) => {
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    useEffect(() => {
        getEmployeesLS();
    }, []);

    useEffect(() => {
        saveEmployeesLS(employees);
    }, [employees]);

    const handleSetActive: React.Dispatch<React.SetStateAction<string>> = (value) => {
        const newActive = typeof value === 'function' ? value(active) : value;
        setActive(newActive);
        setEmployees((prevEmployees) => {
            return prevEmployees.map((employee) => ({
                ...employee,
                isActive: false,
            }));
        });
    };

    const handleToggleActive = (index: number) => {
        const updatedEmployees = [...employees];
        updatedEmployees[index].isActive = !updatedEmployees[index].isActive;
        setEmployees(updatedEmployees);
    };

    const filteredEmployees = employees.filter(employee =>
        employee.employees.some(emp =>
            `${emp.name} ${emp.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <section className={s.section}>
            <Breadcrumbs>
                <NavLink to="/add-employee" className="link">Добавить нового сотрудника</NavLink>
            </Breadcrumbs>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.box}>
                        <h2 className={s.title}>Новый сотрудник</h2>
                        <FormNewEmployee
                            setEmployees={setEmployees}
                            employees={employees}
                            setActive={handleSetActive}
                            active={active}
                        />
                    </div>
                    <div className={s.box}>
                        <Input
                            placeholder="Поиск сотрудника"
                            className={s.search_employee}
                            disableUnderline
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <ListItemButton>
                                    <InputAdornment position='end'>
                                        <TuneIcon />
                                    </InputAdornment>
                                </ListItemButton>
                            }
                        />
                        <h2 className={s.title}>Все сотрудники</h2>
                        <ul className={s.list}>
                            {filteredEmployees.map((employee, index) => (
                                <EmployeeRow
                                    key={index}
                                    data={employee}
                                    onToggleActive={() => handleToggleActive(index)}
                                    active={active}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewEmployee;
