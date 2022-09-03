import './App.css'
import React, { Fragment } from 'react'
import User from './pages/user/pages/UserList'
import UserAdd from './pages/user/pages/UserAdd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import { createTheme, ThemeProvider } from '@mui/material'
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e97ff',
    },
    white: {
      main: 'white',
    },
    success: {
      main: '#1cd67c',
    },
    danger: {
      main: '#dc2727',
    },
  },
})

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* main is layout template */}
            <Route path='/' element={<Main />}>
              <Route path='' element={<User />} />
              <Route path='add' element={<UserAdd />} />
              <Route path='add/:userId' element={<UserAdd />} />
            </Route>

            {/* anthoer layout use outside main */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
