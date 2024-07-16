"use client";
import { useEffect, useState } from "react";
import styles from "./addPage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/navigation";


const AddPage = ({ profile }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phoneNumber: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
    });

    useEffect(() => {
        if (profile) {
            setProfileData(profile)
        }
    }, [profile])



    const submitHandler = async () => {
        setLoading(true)

        const res = await fetch('/api/profile', {
            method: "POST",
            body: JSON.stringify({ ...profileData }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();

        setLoading(false)

        if (data.error) {
            toast.error(data.error)
        } else {
            console.log(data)
            toast.success(data.message)
        }

        setProfileData({
            title: "",
            description: "",
            location: "",
            phoneNumber: "",
            price: "",
            realState: "",
            constructionDate: new Date(),
            category: "",
            rules: [],
            amenities: [],
        })
        router.refresh();
        // router.push('/dashboard/my-profiles')


    }


    const editHandler = async () => {
        setLoading(true)

        const res = await fetch('/api/profile', {
            method: "PATCH",
            body: JSON.stringify({ ...profileData }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();

        setLoading(false)

        if (data.error) {
            toast.error(data.error)
        } else {
            console.log(data)
            toast.success(data.message)
        }

        setProfileData({
            title: "",
            description: "",
            location: "",
            phoneNumber: "",
            price: "",
            realState: "",
            constructionDate: new Date(),
            category: "",
            rules: [],
            amenities: [],
        })

        router.refresh();
        // router.push('/dashboard/my-profiles')
    }

    return (
        <div className={styles.container}>
            <h3>{profile ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
            <TextInput
                title="عنوان آگهی"
                name="title"
                profileData={profileData}
                setProfileData={setProfileData}
                textArea={false}
            />
            <TextInput
                title="توضیحات"
                name="description"
                profileData={profileData}
                setProfileData={setProfileData}
                textArea={true}
            />
            <TextInput
                title="آدرس"
                name="location"
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <TextInput
                title="شماره تماس"
                name="phoneNumber"
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <TextInput
                title="قیمت(تومان)"
                name="price"
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <TextInput
                title="بنگاه"
                name="realState"
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <RadioList profileData={profileData} setProfileData={setProfileData} />
            <TextList
                title="امکانات رفاهی"
                type="amenities"
                profileData={profileData}
                setProfileData={setProfileData} />
            <TextList
                title="قوانین"
                type="rules"
                profileData={profileData}
                setProfileData={setProfileData} />
            <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />
            {loading ? <ThreeDots
                color="#304ffe"
                height={45}
                ariaLabel="three-dotss-loading"
                visible={true}
                wrapperStyle={{ margin: "auto" }}
            /> :
                profile ?
                    <button className={styles.submit} onClick={editHandler}>ثبت تغیرات</button>
                    : <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
            }
            <Toaster />
        </div >
    );
};


export default AddPage;
