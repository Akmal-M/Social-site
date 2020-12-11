import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Persons.module.css";


const Person = (props) => {

    let path = '/dialogs/' + props.id;
    return (
        <div>
            <div className={s.person}><NavLink to={path}>  {props.name} </NavLink></div>
        </div>

    )
}


export default Person;