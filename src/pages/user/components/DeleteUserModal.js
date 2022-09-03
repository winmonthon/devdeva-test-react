import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import axios from 'axios'

const DeleteUserModal = ({ item, getUserList }) => {
  const [open, setOpen] = useState(false)
  const [processing, setProcessing] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteUser = async () => {
    try {
      setProcessing(true)

      await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API}/users/${item.id}`,
      })

      setOpen(false)
      getUserList()
    } catch (err) {
      console.error(err)
    } finally {
      setProcessing(false)
    }
  }
  return (
    <div>
      <button
        onClick={handleClickOpen}
        className='btn-danger sm:mx-1 my-1 rounded-md text-white'
      >
        Delete
      </button>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <div className='p-4'>
          <div className=' text-xl'>ยืนยันการดำเนินการ</div>

          <div className='my-3'>
            <Divider />
          </div>
          <div className='text-center'>ท่านต้องการที่จะลบรายการนี้หรือไม่</div>

          {processing && (
            <div className='flex justify-end'>
              <button
                disabled
                onClick={handleClose}
                className='btn-sencodary rounded-md'
              >
                กำลังดำเนินการ...
              </button>
            </div>
          )}
          {!processing && (
            <div className='flex justify-end gap-2 mt-5'>
              <button
                onClick={handleClose}
                className='btn-sencodary rounded-md'
              >
                ยกเลิก
              </button>
              <button onClick={deleteUser} className='btn-primary rounded-md'>
                ตกลง
              </button>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  )
}

export default DeleteUserModal
