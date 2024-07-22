import Link from "next/link";
import styles from "./sideBar.module.css";
import { HiFilter } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>

      <Link href="/buy-residentials">همه</Link>
      <Link
        href={{ pathname: "/buy-residentials", query: { category: "villa" } }}
      >
        ویلا
      </Link>
      <Link
        href={{
          pathname: "/buy-residentials",
          query: { category: "apartment" },
        }}
      >
        آپارتمان
      </Link>
      <Link
        href={{ pathname: "/buy-residentials", query: { category: "store" } }}
      >
        مغازه
      </Link>
      <Link
        href={{ pathname: "/buy-residentials", query: { category: "office" } }}
      >
        دفتر
      </Link>
    </div>
  );
};

export default SideBar;
