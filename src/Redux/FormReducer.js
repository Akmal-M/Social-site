import {loginAPI} from "../api/api";

const LOGIN_USER = 'LOGIN_USER';


let initialState =
    {

    }

const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_USER : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;
    }
}


export const loginUser = () => ({type: LOGIN_USER, data: {}});
export default formReducer;


export const login = () => async (dispatch) => {
    const response = await loginAPI.login()

        if(response.data.resultCode === 0) {
            dispatch(loginUser)
        }
}