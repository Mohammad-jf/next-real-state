import styles from "./profileDetailsPage.module.css";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replacenumber";
import { icons } from "src/constants/icons";
import ItemList from "@/module/ItemList";
import { categories } from "src/constants/strings";
import ShareButton from "@/module/ShareButton";

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

      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {data.realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(data.phoneNumber)}
          </span>
        </div>
        
        <ShareButton/>

        <div className={styles.price}>
          <p>
            {icons[data.category]}
            {categories[data.category]}
          </p>

          <p>{sp(data.price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
