import React from 'react'
import { MainLayoutType } from './types'
import style from './mainlayout.module.scss'
import { Button } from '@mui/material'
import Link from 'next/link'

export const MainLayout = ({ children, isRegistrationPage }:MainLayoutType) => {
  return (
    <div>
      <header className={style.container}>
        {/*<Button variant="contained" className={style.loginButton}>{'Login'}</Button>*/}
        {!isRegistrationPage &&
          <Link href="/registration">
            <Button
              variant='contained'
              className={style.registrationButton}
            >
              {'Registration'}
            </Button>
          </Link>
        }
      </header>
      {children}
    </div>
  )
}
