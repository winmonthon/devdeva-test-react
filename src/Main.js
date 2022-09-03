import React from 'react'
import Navbar from './components/Layout/Navbar'

import { Outlet, useLocation } from 'react-router-dom'

const Main = () => {
  const location = useLocation()

  const titleText = [
    { path: '/', text: 'User Management' },
    { path: '/add', text: 'Add User' },
    { path: '/add', text: 'Edit User' },
  ]
  const textToShow = titleText.find((el) => el.path === location.pathname)?.text
  return (
    <div className=''>
      <Navbar title={textToShow} />

      <Outlet />
    </div>
  )
}

export default Main
