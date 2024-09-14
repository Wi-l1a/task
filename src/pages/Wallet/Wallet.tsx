import React, { FC } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { NavLink } from 'react-router-dom'
const Wallet: FC = () => {
    return (
        <section>
            <Breadcrumbs>
                <NavLink to="/wallet" className="link">Кошелек</NavLink>
            </Breadcrumbs>
            <h1>В разработке</h1>
        </section>
    )
}

export default Wallet