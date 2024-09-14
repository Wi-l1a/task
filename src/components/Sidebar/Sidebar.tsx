import React, { FC } from 'react';
import { Drawer, List, Toolbar } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { ReactComponent as Shirt } from '../../assets/icons/ph_t-shirt-thin.svg';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import NavListItem from '../NavListItem/NavListItem';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import s from './Sidebar.module.scss'
const drawerWidth = 112;

const Sidebar: FC = () => {
    return (
        <Drawer
            className={s.sidebar}
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#D8E7FC',
                    padding: '30px 0'
                },
            }}
        >
            <Toolbar className={s.logo}>
                <Logo />
            </Toolbar>
            <List className={s.menu}>
                <NavListItem to="/" icon={<TrendingUpIcon />} />
                <NavListItem to="/wallet" icon={<AccountBalanceWalletOutlinedIcon />} />
                <NavListItem to="/shirt" icon={<CheckroomOutlinedIcon />} />
                <NavListItem to="/add-employee" icon={<PersonAddAltOutlinedIcon />} />
            </List>
        </Drawer>
    );
};

export default Sidebar;
