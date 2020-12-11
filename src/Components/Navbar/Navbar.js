import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (

            <div className={s.nav}>

                <div><NavLink to='/profile' activeClassName={s.active} >Profile</NavLink></div>
                <div><NavLink to='/dialogs' activeClassName={s.active} >Messages</NavLink></div>
                <div><NavLink to='/users' activeClassName={s.active} >Users</NavLink></div>
                <div><NavLink to='/music' activeClassName={s.active} >Music</NavLink></div>
                <div><NavLink to='/settings' activeClassName={s.active} >Settings</NavLink></div>

            </div>

    )
}

export default Navbar;
