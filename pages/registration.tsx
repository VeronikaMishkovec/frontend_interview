import { useState } from 'react'
import { Button, TextField } from '@mui/material'

import { MainLayout } from '../components/MainLayout'

import style from '../styles/registration.module.scss'

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <MainLayout isRegistrationPage={true}>
      <div className={style.container}>
        <div className={style.pageHeader}>{'Registration'}</div>
        <TextField className={style.inputs} id="outlined-basic" label="Email" value={email} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField className={style.inputs} id="outlined-basic" label="Password" type={'password'} value={password} variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
        <Button className={style.button} variant={'contained'} onClick={() => {}}>{'Submit'}</Button>
      </div>
    </MainLayout>
  )
}

export default Registration;
