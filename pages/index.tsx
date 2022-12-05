import { MainLayout } from '../components/MainLayout'
import { LABELS } from "../constants/labels";
import { CategoryType, MainType } from '../store/types'

import styles from '../styles/home.module.scss';

const Home = ({ list }: MainType['category']) => {
  return (
    <MainLayout isRegistrationPage={true}>
      <div className={styles.container}>
        <div>{LABELS.WELCOME}</div>
        <div className={styles.categoryListContainer}>
          {list?.map((category: CategoryType) => {
            return (
              <div className={styles.categoryContainer} key={category._id}>
                <img alt={''} src={category.img}/>
                <div>{category.title}</div>
              </div>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}
export default Home
