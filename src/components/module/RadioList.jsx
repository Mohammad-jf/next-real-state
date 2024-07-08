import styles from './radioList.module.css'


const RadioList = ({ profileData, setProfileData }) => {

    const changeHandler = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div>
                    <label htmlFor='villa'>ویلا</label>
                    <input
                        type="radio"
                        id='villa'
                        name='category'
                        value="villa"
                        checked={profileData.category === 'villa'}
                        onChange={changeHandler} />

                </div>
                <div>
                    <label htmlFor='apartment'>آپارتمان</label>
                    <input
                        type="radio"
                        id='apartment'
                        name='category'
                        value="apartment"
                        checked={profileData.category === 'apartment'}
                        onChange={changeHandler} />

                </div>
                <div>
                    <label htmlFor='shop'>مغازه</label>
                    <input
                        type="radio"
                        id='shop'
                        name='category'
                        value="shop"
                        checked={profileData.category === 'shop'}
                        onChange={changeHandler} />

                </div>
                <div>
                    <label htmlFor='office'>دفتر</label>
                    <input
                        type="radio"
                        id='office'
                        name='category'
                        value="office"
                        checked={profileData.category === 'office'}
                        onChange={changeHandler} />

                </div>
            </div>
        </div>
    )
}

export default RadioList