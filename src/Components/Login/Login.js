import React from "react";
import {Field, reduxForm, stopSubmit} from "redux-form";
import {maxLengthCreator, required} from "../../Utils/Validators";
import {createField, Input} from "../../Utils/FormsControls/FormControl";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import style from '../../Utils/FormsControls/FormControl.module.css'

const maxLength30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.login}>
                {createField( 'Email', 'email', [required, maxLength30], Input)}
                {/*<Field placeholder={'email'}*/}
                {/*       name={'email'}*/}
                {/*       component={Input}*/}
                {/*       validate={[required, maxLength30]}/>*/}
            </div>
            <div className={s.password}>
                {createField( 'password', 'password', [required, maxLength30], Input, {type : 'password'})}
                {/*<Field placeholder={'password'}*/}
                {/*       type={'password'}*/}
                {/*       name={'password'}*/}
                {/*       component={Input}*/}
                {/*       validate={[required, maxLength30]}/>*/}
            </div>
            <div className={s.rememberMe}>
                {createField( null, 'rememberMe', null, Input, {type : 'checkbox'}, 'remember Me')}
                {/*<Field type={'checkbox'}*/}
                {/*       name={'rememberMe'}*/}
                {/*       component={'input'}*/}
                {/*      /> remember me*/}
            </div>

            { captchaUrl && <img src={captchaUrl} /> }
            { captchaUrl && createField("symbol for img", "captcha",[required], Input, {} )}


            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <button>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login } )(Login);

