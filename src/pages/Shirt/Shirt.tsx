import React, { FC } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { NavLink } from 'react-router-dom'

const Shirt: FC = () => {
    return (
        <section>
            <Breadcrumbs>
                <NavLink to="/shirt" className="link">Одежда</NavLink>
            </Breadcrumbs>
            <h1>В разработке</h1>
        </section>
    )
}

export default Shirt