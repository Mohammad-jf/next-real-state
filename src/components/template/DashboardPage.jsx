import styles from "./dashboardPage.module.css";

const DashboardPage = ({ createdAt }) => {
  const created = new Date(createdAt).toLocaleDateString("fa-IR");

  return (
    <div className={styles.container}>
      <h3>سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت :</p>
        <span>{created}</span>
      </div>
    </div>
  );
};

export default DashboardPage;
