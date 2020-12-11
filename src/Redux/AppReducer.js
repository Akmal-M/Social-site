import {getAuthUserData} from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState =
    {
        initialized: false,
        globalError: null
    }

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED : {
            return {
                ...state,
                initialized: true
            }
        }


        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //dispatch(somethingElse());
    //dispatch(somethingElse());

    Promise.all ([promise])
        .then( () => {
        dispatch(initializedSuccess());
    })

}


export default appReducer;

