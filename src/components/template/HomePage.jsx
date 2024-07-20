import { FiCircle } from 'react-icons/fi';
import styles from './homePage.module.css'
import CategoryCard from '@/module/CategoryCard';




const HomePage = () => {
  const services = ['خرید','فروش','رهن','اجاره'];
  const cities = ['تهران','اصفهان','شیراز','مشهد','اهواز'];
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((item)=>(
              <li key={item}>
                <span>{item}</span>
                <FiCircle style={{marginRight:'5px'}}/>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.categories}>
        <CategoryCard title='خانه ویلایی' name='villa'/>
        <CategoryCard title='آپاراتمان' name='apartment'/>
        <CategoryCard title='مغازه' name='store'/>
        <CategoryCard title='دفتر' name='office'/>
      </div>

    </div>
  )
}

export default HomePage