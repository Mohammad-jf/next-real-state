"use client"
import styles from './dashboardCard.module.css'
import Card from './Card'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useRouter } from 'next/navigation'


const DashboardCard = ({ profile }) => {
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${profile._id}`)
  }

  const deleteHandler = () => {

  }

  return (
    <div className={styles.container}>
      <Card data={profile} />
      <div className={styles.main}>
        <button onClick={editHandler}>ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  )
}

export default DashboardCard