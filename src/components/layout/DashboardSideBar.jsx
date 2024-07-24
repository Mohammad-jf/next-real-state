import styles from "./dashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import LogoutButton from "@/module/LogoutButton";

const DashboardSideBar = async ({ children, admin, email }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>{admin ? "ادمین" : null}</p>
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {admin ? <Link href="/admin">در انتظار تایید</Link> : null}

        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSideBar;
