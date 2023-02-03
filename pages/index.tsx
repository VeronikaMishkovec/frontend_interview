import { MainLayout } from '../components/MainLayout'
import { LABELS } from "../constants/labels";

import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <MainLayout isHomePage={false} isRegistrationPage={true}>
      <div className={styles.container}>
        <div>{LABELS.WELCOME}</div>
      </div>
    </MainLayout>
  )
}
export default Home

// export async function getServerSideProps(context: any) {
//   // res.setHeader(
//   //   'Cache-Control',
//   //   'public, s-maxage=10, stale-while-revalidate=59'
//   // )
//
//   console.log(context)
//
//   return {
//     props: {},
//   }
// }
