import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import { Divider, TextField, Stack, Icon } from '@mui/material'

const AddNewKey = ({ showAddNew, setShowAddNew }) => {
  const [title, setTitle] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const handleClose = () => {
    setShowAddNew(false)
  }

  return (
    <div>
      {' '}
      <Dialog
        open={showAddNew}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        fullWidth
      >
        <DialogTitle
          className='bg-primary text-white text-xl '
          id='alert-dialog-title'
        >
          <div className='items-center flex'>
            <Icon className='flex  mr-3'>add</Icon> Add New Key
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent className=''>
          <Stack gap={3}>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              id=''
              size='small'
              fullWidth
              label='Title'
            />
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              id=''
              size='small'
              fullWidth
              label='Username'
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              id=''
              size='small'
              fullWidth
              label='Password'
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              id=''
              size='small'
              fullWidth
              label='Email'
            />
            <TextField
              onChange={(e) => setTel(e.target.value)}
              id=''
              size='small'
              fullWidth
              label='Tel'
            />
          </Stack>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose} autoFocus>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddNewKey
