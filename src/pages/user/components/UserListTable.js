import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteUserModal from './DeleteUserModal'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const UserListTable = () => {
  const [loading, setLoading] = useState(true)
  const [userList, setUserList] = useState([])

  const getUserList = async () => {
    try {
      setLoading(true)
      const { data } = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}/users`,
      })
      console.log(data)
      setUserList(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const userListRender = userList.map((data, index) => {
    return (
      <>
        <div className='grid grid-cols-12 mt-4' key={data.id}>
          <div className='col-span-2 sm:col-span-1  flex items-center'>
            <div className='circle-num '>{index + 1}</div>
          </div>
          <div className='col-span-6 sm:col-span-8 font-light text-sm sm:text-lg capitalize  flex items-center'>
            <div>
              <div className=''>
                {data.firstName} {data.lastName}
              </div>
              <div>( {data.gender} )</div>
            </div>
          </div>
          <div className='col-span-2 sm:col-span-3 sm:flex justify-end items-center'>
            <a href={`/add/${data.id}`}>
              <button className='btn-sencodary sm:mx-1 my-1 rounded-md'>
                Edit
              </button>
            </a>

            <DeleteUserModal getUserList={getUserList} item={data} />
          </div>
        </div>
      </>
    )
  })

  useEffect(() => {
    getUserList()
  }, [])

  return (
    <div className=''>
      {loading && (
        <div>
          {' '}
          <Stack spacing={1}>
            <Skeleton variant='text' sx={{ fontSize: '3rem' }} />
            <Skeleton variant='text' sx={{ fontSize: '3rem' }} />
            <Skeleton variant='text' sx={{ fontSize: '3rem' }} />
            <Skeleton variant='text' sx={{ fontSize: '3rem' }} />
            <Skeleton variant='text' sx={{ fontSize: '3rem' }} />
          </Stack>
        </div>
      )}

      {!loading && <div>{userListRender}</div>}
    </div>
  )
}

export default UserListTable
