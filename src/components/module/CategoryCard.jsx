import Link from "next/link";
import styles from "./categoryCard.module.css";
import Image from "next/image";

const CategoryCard = ({ title, name }) => {
  return (
    <div className={styles.card}>
      <Link href={`/buy-residentials?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
      </Link>
    </div>
  );
};

export default CategoryCard;
