import { FiCircle } from 'react-icons/fi';
import styles from './homePage.module.css'
FiCircle



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

    </div>
  )
}

export default HomePage