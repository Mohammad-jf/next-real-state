'use client'
import { useState } from 'react'
import styles from './addPage.module.css'


const AddPage = () => {
    const [profileData, setProfileData] = useState({
        title: '',
        description: '',
        location: '',
        phoneNumber: '',
        price: '',
        realState: '',
        constructionDate: new Date(),
        category: '',
        rules: [],
        amenities: []
    });


    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default AddPage