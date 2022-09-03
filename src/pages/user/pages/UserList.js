import React from 'react'
import UserListTable from '../components/UserListTable'
const userList = () => {
  return (
    <div className='content-padding'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl'>User List</h2>
        <div>
          <a href='/add'>
            <button className='btn-primary rounded-md w-full'>Add +</button>
          </a>
        </div>
      </div>

      <div className='mt-5'>
        <UserListTable />
      </div>
    </div>
  )
}

export default userList
