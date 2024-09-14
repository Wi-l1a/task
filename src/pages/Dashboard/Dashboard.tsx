import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { NavLink } from 'react-router-dom'
import s from './Dashboard.module.scss'
const Dashboard = () => {
    return (
        <section className={s.container}>
            <h1>
                все на странице добавить сотрудника
            </h1>
        </section>
    )
}

export default Dashboard