import styles from './card.module.css'
import { RiHome3Line } from 'react-icons/ri'
import { MdApartment } from 'react-icons/md'
import { BiStore } from 'react-icons/bi'
import { GiOfficeChair } from 'react-icons/gi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { sp } from '@/utils/replacenumber'
import Link from 'next/link'

const Card = ({ data }) => {
  const { category, title, location, price } = data

  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price ? price : 0)} تومان</span>
      <Link href='/'>مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  )
}

export default Card