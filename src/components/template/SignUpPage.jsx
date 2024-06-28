"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/template/signup.module.css";
import { ThreeDots } from "react-loader-spinner";

const SignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: "",
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
    if (formData.password !== formData.rePassword) {
      toast.error("رمز و تکرار ان برابر نیست");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
    setLoading(false);

    if (res.status == 201) {
      toast.success("حساب کاربری ایجاد شد");
      router.replace("/signin");
    } else {
      toast.error(data.error);
    }

    setFormData({
      email: "",
      password: "",
      rePassword: "",
    });
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
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
        <label htmlFor="rePassword">تکرار رمز عبور</label>
        <input
          type="password"
          name="rePassword"
          placeholder="تکرار رمز عبور"
          onChange={changeHandler}
          value={formData.rePassword}
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
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">وارد شوید</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
