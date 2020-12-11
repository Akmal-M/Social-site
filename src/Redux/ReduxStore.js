import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./AppReducer";


let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    usersPage : usersReducer,
    auth : authReducer,
    form: formReducer,
    appPage: AppReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;
export default store;