import React from "react";
import s from "./SendMessages.module.css";
import Messages from "./Messages/Messages";
import Person from "./Persons/Persons";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Utils/FormsControls/FormControl";
import {maxLengthCreator, required} from "../../../Utils/Validators";

const SendMessages = (props) => {

    const MessageData = props.Messages.map
    (e => <Messages id={e.id} message={e.message} key={e.id}/>)

    const FriendsData = props.Persons.map
    (e => <Person id={e.id} name={e.name} key={e.id}/>)


    let addNewMessage = (values) => {
        return (
            props.sendMessage(values.newMessageBody)
        )
    }

    return (
        <div className={s.area}>
            <div>
                {FriendsData}
            </div>

            <div>
                {MessageData}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>


    )
}

const maxLength200 = maxLengthCreator(200)

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody'
                       placeholder={'ur message here'}
                       validate={[required, maxLength200]}/>
            </div>
            <button>Send</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default SendMessages;