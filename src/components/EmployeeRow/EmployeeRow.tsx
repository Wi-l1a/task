import React, { FC } from 'react';
import { Avatar, Switch, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import s from './EmployeeRow.module.scss';
import { PositionDetails } from '../../pages/NewEmployee/NewEmployee';

interface dataProps {
  data: PositionDetails;
  onToggleActive: () => void;
  active: string;
}

const EmployeeRow: FC<dataProps> = ({ data, onToggleActive, active }) => {


  return (
    <li className={`${s.row} ${active === 'Швея' && active === data.position ? s.row_active : ''}`}>
      <div className={s.avatarGroup}>
        {data.employees.map((el) => (
          <Avatar
            key={el.id}
            className={s.avatar}
            src={el.image}
          >
            {!el.image && `${el.name[0]}${el.surname[0]}`}
          </Avatar>
        ))}

        <span className={s.name}>
          {data.employees.map(e => `${e.name} `).join(', ')}
        </span>
      </div>
      <div className={s.position}>{data.brigade.length > 1 ? 'Швеи' : data.position}</div>
      <div className={s.groupInteraction}>
        {data.position === 'Швея' && (
          <Switch
            checked={data.isActive}
            onChange={onToggleActive}
            color="success"
            className={s.switch}
          />
        )}
        <IconButton className={s.editIcon}>
          <EditIcon />
        </IconButton>
      </div>
    </li>
  );
};

export default EmployeeRow;
