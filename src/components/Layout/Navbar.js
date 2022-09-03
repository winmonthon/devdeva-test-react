import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
  useEffect(() => {
    const nav = document.getElementById('nav-bar')
    window.onscroll = () => {
      var scroll = window.pageYOffset
      if (scroll > 0) {
        nav.style.position = 'fixed'
      } else {
        nav.style.position = 'sticky'
      }
    }
  }, [])

  return (
    <div className=''>
      <div
        className='bg-primary py-3 px-10 flex justify-between w-full drop-shadow-md'
        id='nav-bar'
      >
        <div className='text-2xl text-white flex items-center '>
          <div className='text-2xl font-light'> {title}</div>
        </div>
      </div>
    </div>
  )
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Title',
}

export default Navbar
