import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';
// const SAVE_PROFILE = 'SAVE_PROFILE';

let initialState =
    {
        Posts: [
            {id: 1, message: 'Hi ladies', likesCount: 17},
            {id: 2, message: 'Hi nigga', likesCount: 27},
            {id: 3, message: 'Hi all', likesCount: 67}
        ],
        profile: null,
        status: '',
        photo: ''
    }

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST : {
            let newPostText = {
                id: 4,
                message: action.newPost,
                likesCount: 0
            }

            return {
                ...state,
                Posts: [...state.Posts, newPostText]
            }
        }


        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }


        case SET_USER_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }

        case DELETE_POST : {
            return {
                ...state,
                Posts: state.Posts.filter(p => p.id != action.postId)
            }
        }

        case SAVE_PHOTO : {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }

        // case SAVE_PROFILE : {
        //     return {
        //         ...state, profile: {...state.profile}
        //     }
        // }

        default:
            return state;
    }
}


export const addPost = (newPost) => ({type: ADD_POST, newPost});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSuccessAC = (photos) => ({type: SAVE_PHOTO, photos});
// export const saveProfileAC = (photos) => ({type: SAVE_PHOTO, photos});


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))

}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)

    dispatch(setUserStatus(response.data))

}

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else  {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer;
