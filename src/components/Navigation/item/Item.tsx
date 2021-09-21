import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Item.module.scss";

type ItemPropsType = {
    title: string
    link: string
    icon: string
}

function Item({title, link, icon}: ItemPropsType) {
    return (
        <div className={s.item}>
            <NavLink to={link} activeClassName={s.activeLink}>
                <img src={icon} alt='icon'/>
                <h3>{title}</h3>
            </NavLink>
        </div>
    );
}

export default Item; 