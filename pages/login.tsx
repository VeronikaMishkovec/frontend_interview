import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/router'

import { MainLayout } from '../components/MainLayout'

import style from '../styles/registration.module.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = async () => {
    await fetch('https://interview-alpha.vercel.app/auth/login', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })

    await router.push('/profile')
  }

  return (
    <MainLayout isRegistrationPage={false}>
      <div className={style.container}>
        <div className={style.pageHeader}>{'Login'}</div>
        <TextField className={style.inputs} id="outlined-basic" label="Email" value={email} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField className={style.inputs} id="outlined-basic" label="Password" type={'password'} value={password} variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
        <Button className={style.button} variant={'contained'} onClick={handleLogin}>{'Submit'}</Button>
      </div>
    </MainLayout>
  )
}

export default Login;
