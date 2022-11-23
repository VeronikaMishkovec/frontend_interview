import { MainLayout } from '../components/MainLayout'
import { Button, TextField } from '@mui/material'
import style from '../styles/registration.module.scss'

const Registration = () => {
  return (
    <MainLayout isRegistrationPage={true}>
      <div className={style.container}>
        <div className={style.pageHeader}>{'Registration'}</div>
        <TextField className={style.inputs} id="outlined-basic" label="Email" variant="outlined" />
        <TextField className={style.inputs} id="outlined-basic" label="Password" variant="outlined" type={'password'}/>
        <Button variant={'contained'} className={style.button}>{'Submit'}</Button>
      </div>
    </MainLayout>
  )
}

export default Registration;
