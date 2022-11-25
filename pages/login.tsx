import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { MainLayout } from '../components/MainLayout'
import { loginRequestAction } from '../store/reducers/authReducer'
import style from '../styles/registration.module.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <MainLayout isRegistrationPage={false}>
      <div className={style.container}>
        <div className={style.pageHeader}>{'Login'}</div>
        <TextField onChange={(e) => setEmail(e.target.value)} value={email} className={style.inputs} id="outlined-basic" label="Email" variant="outlined" />
        <TextField onChange={(e) => setPassword(e.target.value)} value={password} className={style.inputs} id="outlined-basic" label="Password" variant="outlined" type={'password'}/>
        <Button onClick={() => dispatch(loginRequestAction({ email, password }))} variant={'contained'} className={style.button}>{'Submit'}</Button>
      </div>
    </MainLayout>
  )
}

export default Login;
