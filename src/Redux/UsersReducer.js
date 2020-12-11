import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../Utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState =
    {
        Users: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                Users: updateObjectInArray(state.Users, action.userId, 'id', {followed: true})

                //     state.Users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            }


        case UNFOLLOW :
            return {
                ...state,
                Users: updateObjectInArray(state.Users, action.userId, 'id', {followed: false})

                //     state.Users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u;
                // })
            }


        case SET_USERS : {
            return {
                ...state,
                Users: action.Users
            }
        }

        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT : {
            return {...state, totalUsersCount: action.count}
        }

        case TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_FOLLOWING_IN_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

//action creators

export const followSuccess = (userId) => ({type: FOLLOW, userId});

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (Users) => ({type: SET_USERS, Users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
});

export default usersReducer;


export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))

    }
}


const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingProgress(true, userId))
    const response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

}


export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}


//
// export const follow = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId))
//         const response = await usersAPI.follow(userId)
//
//         if (response.data.resultCode === 0) {
//             dispatch(followSuccess(userId))
//         }
//         dispatch(toggleFollowingProgress(false, userId))
//
//     }
// }
//
// export const unfollow = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId))
//         const response = await usersAPI.unfollow(userId)
//
//         if (response.data.resultCode === 0) {
//             dispatch(unfollowSuccess(userId))
//         }
//         dispatch(toggleFollowingProgress(false, userId))
//
//     }
// }

