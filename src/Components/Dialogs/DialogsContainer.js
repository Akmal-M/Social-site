import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { sendMessage } from "../../Redux/DialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const DialogsContainer = (props) => {
    return (
        <Dialogs
            Persons={props.Persons}
            Messages={props.Messages}
            newMessage={props.newMessage}
            sendMessage={props.sendMessage}

        />
    )
}

const mapStateToProps = (state) => {
    return {
        Persons: state.dialogsPage.Persons,
        Messages: state.dialogsPage.Messages,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {sendMessage}),

)(Dialogs)

