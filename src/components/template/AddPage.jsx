"use client";
import { useState } from "react";
import styles from "./addPage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";


const AddPage = () => {
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


    const submitHandler = () => {
        console.log(profileData)
    }

    return (
        <div className={styles.container}>
            <h3>ثبت اگهی</h3>
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
            <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
        </div>
    );
};


export default AddPage;
