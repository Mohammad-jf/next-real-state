import styles from "./card.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replacenumber";
import Link from "next/link";
import { icons } from "src/constants/icons";

const Card = ({ data }) => {
  const { category, title, location, price, _id } = data;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price ? price : 0)} تومان</span>
      <Link href={`/buy-residentials/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
};

export default Card;
