import { p2e } from '@/utils/replacenumber'
import styles from './textInput.module.css'

const TextInput = ({ title, name, profileData, setProfileData, textArea = false }) => {

    const changeHandler = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: p2e(e.target.value)
        })
    }

    return (
        <div className={styles.container}>
            <p>{title}</p>
            {textArea ? (
                <textarea
                    name={name}
                    type='text'
                    value={profileData[name]}
                    onChange={changeHandler}></textarea>
            ) : <input
                name={name}
                type='text'
                value={profileData[name]}
                onChange={changeHandler} />}
        </div>
    )
}

export default TextInput 