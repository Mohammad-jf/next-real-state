"use client";
import { sp } from "@/utils/replacenumber";
import styles from "./adminCard.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AdminCard = ({ data }) => {
  const router = useRouter();

  const deleteHandler = async (id) => {
    const res = await fetch(`/api/profile/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
    router.refresh();
  };

  const publishHandler  = async(id)=>{
    const res = await fetch(`/api/profile/publish/${id}`, {
        method: "PATCH",
      });
      const data = await res.json();
  
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
      }
      router.refresh();
  }

  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>

      <div className={styles.properties}>
        <span>{data.location}</span>
        <span>{sp(data.price)}</span>
      </div>

      <button onClick={()=>publishHandler(data._id)}>انتشار</button>
      <button
        onClick={() => deleteHandler(data._id)}
        style={{ marginRight: "10px", backGroundColor: "red" }}
      >
        حذف
      </button>

      <Toaster />
    </div>
  );
};

export default AdminCard;
