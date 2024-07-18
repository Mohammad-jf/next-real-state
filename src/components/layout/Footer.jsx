import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>سامانه خرید و فروش املاک</h3>
        <p>
          بزرگترین پلتفرم خرید و فروش ملک در ایران
        </p>
      </div>

      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
