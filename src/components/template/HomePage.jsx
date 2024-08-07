import { FiCircle } from "react-icons/fi";
import styles from "./homePage.module.css";
import CategoryCard from "@/module/CategoryCard";
import { FaCity } from "react-icons/fa";
import { services, cities } from "src/constants/strings";

const HomePage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((item) => (
              <li key={item}>
                <span>{item}</span>
                <FiCircle style={{ marginRight: "5px" }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپاراتمان" name="apartment" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر" name="office" />
      </div>

      <div className={styles.city}>
        <h3>شهرهای پر بازدید</h3>
        <ul>
          {cities.map((city) => (
            <li key={city}>
              <FaCity />
              <span>{city}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
