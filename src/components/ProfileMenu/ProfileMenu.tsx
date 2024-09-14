import React, { FC, useState } from 'react';
import { Avatar, IconButton, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import s from './ProfileMenu.module.scss'

const ProfileMenu: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={s.wrapper}>
            <Tooltip title="Профиль">
                <IconButton className={s.box} onClick={handleMenuOpen} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: '#1976D2' }}>ИИ</Avatar>
                    <ListItemText>Иван Иванов</ListItemText>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
                <MenuItem onClick={handleMenuClose}>Настройки</MenuItem>
                <MenuItem onClick={handleMenuClose}>Выйти</MenuItem>
            </Menu>
        </div>
    );
};

export default ProfileMenu;
