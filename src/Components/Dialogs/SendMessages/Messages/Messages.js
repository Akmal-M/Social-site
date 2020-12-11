import React from "react";
import s from './Messages.module.css'





const Messages = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>


    )
}








export default Messages;