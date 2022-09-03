import React, { useState } from 'react'
import { Divider, Pagination, Button, Icon, Stack } from '@mui/material'
import AddNewKey from './AddNewKey'

const HomeTable = () => {
  const [page, setPage] = useState(1)
  const [showAddNew, setShowAddNew] = useState(false)
  const chagePage = (event, value) => {
    setPage(value)
  }
  const dataList = [
    {
      id: 1,
      title: 'NetFlix',
      username: 'winwin',
      tel: '08114721',
      password: 'asdassddfas',
    },
    {
      id: 2,
      title: 'NetFlix2',
      username: 'winwinsdf',
      tel: '0811472112',
      password: 'asdassddfas',
    },
    {
      id: 3,
      title: 'NetFlix3',
      username: 'winwinasdf',
      tel: '08114df721',
      password: 'asdasdsfas',
    },
    {
      id: 4,
      title: 'NetFlix4',
      username: 'winwinzxcv',
      tel: '0811472121',
      password: 'asdasdfsvas',
    },
  ]

  const dataRender = dataList.map((data) => {
    return (
      <>
        <div key={data.id}>
          <div className='grid grid-cols-12 gap-4 hover:bg-primary hover:text-white hover:cursor-pointer data-list  py-3 px-3'>
            <div className='sm:col-span-4 col-span-12 flex justify-start'>
              {data.title}
            </div>
            <div className='sm:col-span-4 col-span-12 flex justify-start'>
              {data.username}
            </div>
            <div className='sm:col-span-4 col-span-12 flex justify-start'>
              {data.password}
            </div>
          </div>

          <div className=''>
            <Divider />
          </div>
        </div>
      </>
    )
  })

  const dataRenderMobile = dataList.map((data) => {
    return (
      <>
        <div key={data.id}>
          <div className='hover:bg-primary  hover:text-white hover:cursor-pointer data-list  py-3 px-3'>
            <Stack gap={3}>
              <div className='flex justify-between'>
                <div className='font-bold'>Title</div>
                <div>{data.title}</div>
              </div>

              <div className='flex justify-between '>
                <div className='font-bold'>Username</div>
                <div>{data.username}</div>
              </div>

              <div className='flex justify-between'>
                <div className='font-bold'>Password</div>
                <div>{data.password}</div>
              </div>
            </Stack>
          </div>

          <div className=''>
            <Divider />
          </div>
        </div>
      </>
    )
  })
  return (
    <>
      <AddNewKey showAddNew={showAddNew} setShowAddNew={setShowAddNew} />
      <div className='p-10 bg-white rouned-lg shadow-md'>
        <div className='flex justify-end'>
          <Button
            variant='outlined'
            color='primary'
            onClick={() => setShowAddNew(true)}
          >
            <Icon fontSize='small' className='mr-2'>
              add
            </Icon>
            Add New
          </Button>
        </div>

        <div className='hidden sm:block'>
          <div className='grid grid-cols-12 gap-4 text-xl font-bold px-3'>
            <div className='sm:col-span-4 col-span-12 flex justify-start'>
              Title
            </div>
            <div className='sm:col-span-4 col-span-12 flex justify-start'>
              Username
            </div>
            <div className='sm:col-span-4 col-span-12 flex justify-start'>
              Password
            </div>
          </div>

          <div className='mt-2'>
            <Divider />
          </div>

          <div>{dataRender}</div>
        </div>

        <div className='sm:hidden '>{dataRenderMobile}</div>

        <div className='flex justify-center mt-5'>
          <Pagination
            color='primary'
            count={10}
            page={page}
            onChange={chagePage}
          />
        </div>
      </div>
    </>
  )
}

export default HomeTable
