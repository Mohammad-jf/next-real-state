import styles from "./profileDetailsPage.module.css";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replacenumber";
import { icons } from "src/constants/icons";
import ItemList from "@/module/ItemList";

const ProfileDetailsPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>

        <h3 className={styles.title}>توضیحات</h3>
        <p>{data.description}</p>

        <h3 className={styles.title}>امکانات</h3>
        <ItemList data={data.amenities} />
        
        <h3 className={styles.title}>قوانین</h3>
        <ItemList data={data.rules} />
      </div>

      <div className={styles.sidebar}></div>
    </div>
  );
};

export default ProfileDetailsPage;
