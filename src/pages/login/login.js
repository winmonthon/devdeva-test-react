import React, { useState } from 'react'
import { Box, Card, TextField, Stack, Button } from '@mui/material'

const Login = () => {
  const [ShowPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [processing, setProcessing] = useState(false)

  const togglePassword = () => {
    setShowPassword(!ShowPassword)
  }

  const sent = () => {
    setProcessing(true)

    setTimeout(() => {
      setProcessing(false)
    }, 5000)
  }

  const onFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className='center-page'>
      <Box width={500} height={500}>
        <Card className='p-10' bgcolor='primary.main'>
          <Stack spacing={4}>
            <div className='text-2xl text-center'>My Password</div>
            <h3 className='text-xl text-center'>Sign in</h3>
            <TextField
              fullWidth
              size='small'
              required
              id='outlined-required'
              name='username'
              onChange={onFormChange}
              label='Username'
            />

            <TextField
              fullWidth
              size='small'
              required
              id='outlined-required'
              label='Password'
              name='password'
              onChange={onFormChange}
              type={ShowPassword ? 'text' : 'password'}
            />
            <div className='d-flex '>
              <input type='checkbox' onClick={togglePassword} /> show password
            </div>
            <div className='d-flex justify-end'>
              <div className={processing ? 'hidden' : ''}>
                <Button
                  onClick={sent}
                  fullWidth
                  size='small'
                  variant='contained'
                >
                  Sign In
                </Button>
              </div>

              <div className={!processing ? 'hidden' : ''}>
                <Button
                  onClick={sent}
                  disabled
                  fullWidth
                  size='small'
                  variant='contained'
                >
                  Submiting ....
                </Button>
              </div>
            </div>
          </Stack>
        </Card>
      </Box>
    </div>
  )
}

export default Login
