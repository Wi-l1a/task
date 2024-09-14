import React, { FC } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import s from './NavListItem.module.scss';

interface NavListItemProps {
    to: string;
    icon: React.ReactNode;
}

const NavListItem: FC<NavListItemProps> = ({ to, icon, }) => {
    return (
        <NavLink to={to} className={({ isActive }) => `${s.item} ${isActive ? s.item_active : ''}`
        }>
            <ListItem>
                <ListItemIcon>{icon}</ListItemIcon>
            </ListItem>
        </NavLink>
    );
};

export default NavListItem;
