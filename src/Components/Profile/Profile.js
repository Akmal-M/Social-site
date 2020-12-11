import React from 'react';
import s from './Profile.module.css'
import Info from "./Info/Info";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <Info profile={props.profile}
                  isOwner={props.isOwner}
                  savePhoto={props.savePhoto}
                  saveProfile={props.saveProfile}/>
            <ProfileStatusWithHooks
                status={props.status}
                updateUserStatus={props.updateUserStatus}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;
