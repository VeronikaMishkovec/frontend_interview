import { Button } from '@mui/material'
import Link from 'next/link'

import { MainLayout } from '../components/MainLayout'

const Profile = () => {
  return (
    <MainLayout isHomePage={true} isRegistrationPage={false}>
      <div>{'User Profile'}</div>
      <Link href={'/add-new-question'}>
        <Button>{'Add new question'}</Button>
      </Link>
    </MainLayout>
  )
}

export default Profile
