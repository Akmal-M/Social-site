import profileReducer from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 2, message: 'Why everybody love me?', likesCount: 7000000000},
                {id: 1, message: 'Hi, how are you?', likesCount: 103.767},
                {id: 2, message: "It's my first post", likesCount: 99.756}
            ],
            newPostText: 'It'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Zumrad'},
                {id: 2, name: 'Qimmat'},
                {id: 3, name: 'Amy'},
                {id: 4, name: 'Lucy'},
                {id: 5, name: 'Lesley'},
                {id: 6, name: 'Raphael'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Bye'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'I\'ll call u later'},
                {id: 6, message: 'See u later'}
            ],
            // newPostMessage: 'Salom'
            newMessageBody: ''
        }

    },
    getState() {
        debugger;
        return this._state;
    },
    rerenderEntireTree() {
        console.log('State changed')
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


window.store = store;

export default store;


// } else if (action.type === 'ADD-MESSAGE') {
//     let newMessage = {
//         id: 6,
//         message: this._state.dialogsPage.newPostMessage
//     }
//     this._state.dialogsPage.messages.push(newMessage);
//     this._state.dialogsPage.newPostMessage = '';
//     this._callSubscriber(this._state);
// } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
//     this._state.dialogsPage.newPostMessage = action.newMessage;
//     this._callSubscriber(this._state);
