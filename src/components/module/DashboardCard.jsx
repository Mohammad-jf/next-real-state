import styles from './dashboardCard.module.css'
import Card from './Card'

const DashboardCard = ({ profile }) => {
  return (
    <div className={styles}>
      <Card data={profile} />

    </div>
  )
}

export default DashboardCard