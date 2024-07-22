import Card from "@/module/Card";
import styles from "./buyResidential.module.css";
import { TextInput } from "@/module/TextInput";
import SideBar from "@/module/SideBar";

const BuyResidentialPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>

      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.TextInput}>هیچ آگهی ثبت نشده است</p>
        )}

        {data.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
