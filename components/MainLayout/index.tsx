import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import style from './mainlayout.module.scss'
import { MainLayoutType } from './types'

export const MainLayout = ({ children, isRegistrationPage }:MainLayoutType) => {
  return (
    <div>
      <header className={style.container}>
        {isRegistrationPage ? (<Link href='/login'>
          <Button variant='contained' className={style.loginButton}>{'Login'}</Button>
        </Link> ): (<Link href="/registration">
            <Button
              variant='contained'
              className={style.registrationButton}
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
