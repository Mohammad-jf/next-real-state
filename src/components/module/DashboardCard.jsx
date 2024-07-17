"use client"
import styles from './dashboardCard.module.css'
import Card from './Card'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const DashboardCard = ({ profile }) => {
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${profile._id}`)
  }

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${profile._id}`,{
      method:"DELETE",
    })
    const data = await res.json();
 
    if(data.error){
      toast.error(data.error)

    }else{
      toast.success(data.message)
      
    }
    router.refresh();
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
      <Toaster/>
    </div>
  )
}

export default DashboardCard