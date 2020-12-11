import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/avatar-contact-default.jpg'
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow  }) => {

    return (
        <div className={s.wrapper}>

         <span>
                <NavLink to={'/profile/' + user.id}>
                    <img alt={''} src={user.photos.large != null ? user.photos.large : userPhoto} className={s.image}/>
                </NavLink>
            </span>
            <span>
                            <div> <b>Name</b>: {user.name}</div>
                            <div> <b>Country</b>: {'user.country'}</div>
                            <div> <b>City</b>: {'user.city'}</div>
                               <div className={s.btn}>

                            {
                                user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                                     onClick={() => {
                                                         unfollow(user.id)
                                                     }}> Unfollow </button>

                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id)
                                              }}> Follow </button>
                            }
                                    </div>
                                    </span>


        </div>
    )

}

export default User;