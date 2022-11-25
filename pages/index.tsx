import { MainLayout } from '../components/MainLayout'
import { LABELS } from "../constants/labels";
import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <MainLayout isRegistrationPage={false}>
      <div className={styles.container}>{LABELS.WELCOME}</div>
    </MainLayout>
  )
}

export default Home
