import React from "react";
import {createField, Input, Textarea} from "../../../Utils/FormsControls/FormControl";
import {reduxForm} from "redux-form";
import style from "../../../Utils/FormsControls/FormControl.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return  <form onSubmit={handleSubmit}>

        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}

        <div><b>Name</b>: {createField('Full name', 'fullName', [], Input)}</div>

        <div>
            <b>Looking for a job</b>:
            { createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My Professional Skills</b>:
            { createField('My Professional Skills', 'lookingForAJobDescription', [], Textarea)}
        </div>

        <div><b>About Me</b>: </div>
        {createField('About me', 'aboutMe', [], Textarea)}
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}</b>: {createField(key,'contacts.'+ key,[], Input)}
            </div> })}</div>

    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default  ProfileDataFormReduxForm