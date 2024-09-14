import React, { FC, ReactNode } from 'react';
import { Breadcrumbs as BreadcrumbsUI, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import s from './Breadcrumbs.module.scss'


const Breadcrumbs: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <BreadcrumbsUI aria-label="breadcrumb" separator={<ChevronRightIcon />}>
            <NavLink to="/" className={({ isActive }) => `${s.item} ${isActive ? s.item_active : ''}`}>
                Главная страница
            </NavLink>
            {children}
        </BreadcrumbsUI>
    );
};

export default Breadcrumbs;
