import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'

const ConfirmEditModal = ({ submit, processing }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const okay = () => {
    submit()
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button onClick={handleClickOpen} className='btn-success rounded-md'>
        Save{' '}
      </button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <div className='p-4'>
          <div className=' text-xl'>ยืนยันการดำเนินการ</div>

          <div className='my-3'>
            <Divider />
          </div>
          <div className='text-center'>ท่านต้องการที่เพิ่ม/แก้ไขหรือไม่?</div>

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
              <button onClick={okay} className='btn-primary rounded-md'>
                ตกลง
              </button>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  )
}

export default ConfirmEditModal
