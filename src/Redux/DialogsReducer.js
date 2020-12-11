const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =
    {
        Persons: [

            {id: 1, name: 'Lesley'},
            {id: 2, name: 'Amy'},
            {id: 3, name: 'Lucy'},
            {id: 4, name: 'Raphael'},
            {id: 5, name: 'Zumrad'}

        ],

        Messages: [
            {id: 1, message: 'Hello nigga'},
            {id: 2, message: 'Hi honey'},
            {id: 3, message: 'How r u today?'},
        ]
    };

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case SEND_MESSAGE: {

            let message =  action.newMessageBody

            return {
                ...state,
                Messages: [...state.Messages, {id:6, message: message} ] ,         //  we r pushing id & text here

            }

        }

        default:
            return state;
    }
}


export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;

