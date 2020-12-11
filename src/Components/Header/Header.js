import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt={''} src="https://www.freelancejob.ru/upload/267/28acf2203097204a5b0e168007af6d64.jpg"/>
            <div className={s.login}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>

    )
}

export default Header;
