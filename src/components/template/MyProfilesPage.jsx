import DashboardCard from '@/module/DashboardCard'
import styles from './myProfilesPage.module.css'


const MyProfilesPage = ({ profiles }) => {

    const data = JSON.parse(JSON.stringify(profiles))

    return (
        <div>
            {profiles.length ? null : <p className={styles.text}>هیچ آگهی ثبت نشده است</p>}
            {profiles.map((profile) => <DashboardCard key={profile._id} profile={data} />)}
        </div>
    )
}

export default MyProfilesPage