import { MainLayout } from '../components/MainLayout'
import { LABELS } from "../constants/labels";

import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <MainLayout isRegistrationPage={true}>
      <div className={styles.container}>
        <div>{LABELS.WELCOME}</div>
      </div>
    </MainLayout>
  )
}
export default Home
