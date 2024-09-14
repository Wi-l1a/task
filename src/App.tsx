import React from 'react'
import './App.scss'
import Main from './components/Main/Main'
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileMenu from './components/ProfileMenu/ProfileMenu';

const App = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <ProfileMenu />
          <Main />
        </Box>
      </Box>
    </>
  )
}

export default App