import React, {useState} from "react";
import s from './Info.module.css'
import Preloader from "../../../Common/Preloader/Preloader";
import accountImage from '../../../assets/avatar-contact-default.jpg'
import ProfileDataForm from "./ProfileDataForm";

const Info = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }


    return (
        <div className={s.profile}>

            {/*<div className={s.item}>*/}
            {/*    <img src='http://chinohouse.com.au/wp-content/uploads/2017/02/clouds-sky-header-2065-1024x300.jpg'/>*/}
            {/*</div>*/}

            <div className={s.wrapper}>

                <div className={s.avatar}>
                    <div><img alt={''} src={profile.photos.large || accountImage}/></div>
                    <div>{isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}</div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }}
                                       profile={profile} isOwner={isOwner}/>}
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (

        <div className={s.inform}>

            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}

            <div><b>Name</b>: {profile.fullName}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'} </div>
            {profile.lookinForAJob &&
            <div>
                <b>My Professional Skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div><b>About Me</b>: {profile.aboutMe}</div>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>

        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default Info;