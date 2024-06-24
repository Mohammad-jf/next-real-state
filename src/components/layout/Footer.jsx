import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>سامانه خرید و فروش املاک</h3>
        <p>
          بزرگترین املاک غرب تهران افتتاح شد! املاک ملل با جامع ترین فایل غرب
          تهران، با کارشناسان متخصص در محله فردوس افتتاح شد. در پذیرایی افتتاحیه
          در روز ۲۳ تیرماه ساعت ۱۸ شرکت کنید.
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
