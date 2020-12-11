import React from "react";
import s from './Dialogs.module.css';
import SendMessagesContainer from "./SendMessages/SendMessagesContainer";




const Dialogs = (props) => {

    return (
        <div className={s.wrapper}>
                <SendMessagesContainer {...props}/>
        </div>
    )
}

export default Dialogs;