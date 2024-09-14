import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import NewEmployee from '../../pages/NewEmployee/NewEmployee'
import Shirt from '../../pages/Shirt/Shirt'
import Wallet from '../../pages/Wallet/Wallet'
import Dashboard from '../../pages/Dashboard/Dashboard'

const Main: FC = () => {
    return (
        <>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path='/add-employee' element={<NewEmployee />} />
                <Route path='/shirt' element={<Shirt />} />
                <Route path='/wallet' element={<Wallet />} />
            </Routes>
        </>
    )
}

export default Main