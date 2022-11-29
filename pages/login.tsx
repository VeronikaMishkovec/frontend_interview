import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField } from '@mui/material'

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
        <TextField className={style.inputs} id="outlined-basic" label="Email" value={email} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField className={style.inputs} id="outlined-basic" label="Password" type={'password'} value={password} variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
        <Button className={style.button} variant={'contained'} onClick={() => dispatch(loginRequestAction({ email, password }))}>{'Submit'}</Button>
      </div>
    </MainLayout>
  )
}

export default Login;
