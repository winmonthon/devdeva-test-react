import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import axios from 'axios'
import ConfirmEditModal from '../components/ConfrimEditModal'
import AlertModal from '../components/AlertModal'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const UserAdd = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [processing, setProcessing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMsg, setAlertMsg] = useState('บางอย่างผิดพลาด')

  const submit = async () => {
    const isValidForm = validateForm()

    if (!isValidForm) {
      return null
    }

    if (isUpdate) {
      updateUser()
    } else {
      createUser()
    }
  }

  const setAlert = (msg) => {
    setAlertVisible(true)
    setAlertMsg(msg)
  }
  const validateForm = () => {
    if (!firstName) {
      setAlert('ชื่อเป็นข้อมูลที่สำคัญ!')
      return false
    }

    if (!lastName) {
      setAlert('ชื่อเป็นข้อมูลที่สำคัญ!')
      return false
    }

    if (!gender) {
      setAlert('เพศเป็นข้อมูลที่สำคัญ!')
      return false
    }

    return true
  }

  const updateUser = async () => {
    try {
      setProcessing(true)
      await axios({
        method: 'put',
        url: `${process.env.REACT_APP_API}/users/${params.userId}`,
        data: {
          firstName,
          lastName,
          gender,
        },
      })

      navigate('/')
    } catch (err) {
      console.error(err)
    } finally {
      setProcessing(false)
    }
  }

  const createUser = async () => {
    try {
      setProcessing(true)
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API}/users`,
        data: {
          firstName,
          lastName,
          gender,
        },
      })

      navigate('/')
    } catch (err) {
      console.error(err)
    } finally {
      setProcessing(false)
    }
  }

  const getUserInfo = async () => {
    try {
      setLoading(true)

      const { data } = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}/users/${params.userId}`,
      })

      setFirstName(data.firstName)
      setLastName(data.lastName)
      setGender(data.gender)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const userId = params.userId
    if (userId) {
      setIsUpdate(true)
      getUserInfo()
    }
  }, [])

  return (
    <div className='content-padding flex justify-center'>
      <AlertModal
        alertVisible={alertVisible}
        msg={alertMsg}
        setAlertVisible={setAlertVisible}
      />

      {loading && (
        <div>
          {' '}
          <Stack spacing={1}>
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
            <Skeleton variant='rectangular' width={500} height={30} />
            <Skeleton variant='rectangular' width={500} height={30} />
            <Skeleton variant='rectangular' width={500} height={30} />
          </Stack>
        </div>
      )}

      {!loading && (
        <div className='w-full sm:w-6/12'>
          <div className='font-light'>
            <label htmlFor='firstName'>First Name</label>
            <div>
              <input
                value={firstName || ''}
                onChange={(e) => setFirstName(e.target.value)}
                id='firstName'
                className='my-input'
                type='text'
              />
            </div>
          </div>

          <div className='font-light mt-5'>
            <label htmlFor='lastName'>Last Name</label>
            <div>
              <input
                value={lastName || ''}
                onChange={(e) => setLastName(e.target.value)}
                id='lastName'
                className='my-input'
                type='text'
              />
            </div>
          </div>

          <div className='mt-5 '>
            <label className='font-light' htmlFor=''>
              Gender
            </label>
            <div className='flex items-center justify-between'>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  checked={gender === 'male'}
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  checked={gender === 'female'}
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
              </RadioGroup>
              <div className='font-light'>
                {processing && (
                  <button disabled className='btn-sencodary rounded-md'>
                    Processing...
                  </button>
                )}
                {!processing && (
                  <ConfirmEditModal submit={submit} processing={processing} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAdd
