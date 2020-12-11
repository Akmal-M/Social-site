import {
    sendMessage,
} from "../../../Redux/DialogsReducer";
import SendMessages from "./SendMessages";
import {connect} from "react-redux";



    const mapStateToProps = (state) => {
        return {
            Messages: state.dialogsPage.Messages,
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            sendMessage: (newMessageBody) => {
                dispatch(sendMessage(newMessageBody))
            },

        }
    }



const SendMessageContainer = connect(mapStateToProps,mapDispatchToProps)(SendMessages);


export default SendMessageContainer;