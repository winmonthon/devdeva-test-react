import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'

const AlertModal = ({ msg, alertVisible, setAlertVisible }) => {
  const handleClose = () => {
    setAlertVisible(false)
  }

  return (
    <div>
      <Dialog open={alertVisible} onClose={handleClose} fullWidth>
        <div className='p-4'>
          <div className=' text-xl'>กรุณาตรวจสอบข้อมูล</div>

          <div className='my-3'>
            <Divider />
          </div>
          <div className='text-center'>{msg}</div>

          <div className='flex justify-end gap-2 mt-5'>
            <button onClick={handleClose} className='btn-primary rounded-md'>
              ตกลง
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default AlertModal
