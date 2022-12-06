import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material'
import Link from 'next/link'

import { MainLayoutType } from './types'

import style from './mainlayout.module.scss'

export const MainLayout = ({ children, isRegistrationPage, isHomePage }:MainLayoutType) => {
  return (
    <div>
      <header className={style.container}>
        {isHomePage &&
          <Link href={'/'}>
            <HomeIcon />
          </Link>}
        {isRegistrationPage ? (<Link href='/login'>
          <Button className={style.loginButton} variant='contained'>{'Login'}</Button>
        </Link> ): (<Link href="/registration">
            <Button
              className={style.registrationButton}
              variant='contained'
            >
              {'Registration'}
            </Button>
          </Link>)
        }
      </header>
      {children}
    </div>
  )
}
