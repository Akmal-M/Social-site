import React from "react";
import Paginator from "../../Common/Preloader/Paginator/Paginator";
import User from "./User";


let Users = ({totalItemsCount, pageSize, currentPage, onPageChanged, Users, ...props}) => {
    return (
        <div>
            <Paginator totalItemsCount={totalItemsCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
            />

            {
                Users.map(u => <User
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    user={u}
                    key={u.id}
                />
                )
            }
        </div>
    )
}

export default Users;