import { MainLayout } from '../components/MainLayout'
import { Button, TextField } from '@mui/material'
import style from '../styles/registration.module.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registrationRequestAction } from '../store/reducers/authReducer'

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <MainLayout isRegistrationPage={true}>
      <div className={style.container}>
        <div className={style.pageHeader}>{'Registration'}</div>
        <TextField onChange={(e) => setEmail(e.target.value)} value={email} className={style.inputs} id="outlined-basic" label="Email" variant="outlined" />
        <TextField onChange={(e) => setPassword(e.target.value)} value={password} className={style.inputs} id="outlined-basic" label="Password" variant="outlined" type={'password'}/>
        <Button onClick={() => dispatch(registrationRequestAction({ email, password }))} variant={'contained'} className={style.button}>{'Submit'}</Button>
      </div>
    </MainLayout>
  )
}

export default Registration;
