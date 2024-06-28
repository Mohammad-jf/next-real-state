"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import styles from "./signup.module.css";
import { ThreeDots } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

const SignInPage = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("اطلاعات نادرست است");
      return;
    }
    setLoading(true);
    const res = await signIn("credentials", { ...formData, redirect: false });
    console.log(res);
    setLoading(false);

    if (!res.error) {
      router.push("/");
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.form}>
      <h4>ورود به حساب کاربری</h4>
      <form>
        <label htmlFor="email">ایمیل</label>
        <input
          type="text"
          name="email"
          placeholder="ایمیل"
          onChange={changeHandler}
          value={formData.email}
        />

        <label htmlFor="password">رمز عبور</label>
        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          onChange={changeHandler}
          value={formData.password}
        />
        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="three-dotss-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit" onClick={submitHandler}>
            ورود
          </button>
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default SignInPage;
