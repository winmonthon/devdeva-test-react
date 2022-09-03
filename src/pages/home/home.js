import React from 'react'
import HomeTable from './components/HomeTable'
const home = () => {
  return (
    <div className='container content-padding'>
      <div>
        <h2 className='text-2xl'>User List</h2>
      </div>
      <div>
        <HomeTable />
      </div>
    </div>
  )
}

export default home
