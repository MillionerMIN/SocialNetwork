import React from "react";
import s from "../Chats.module.css";
import { NavLink } from "react-router-dom";


type DialogsItemPropsType = {
    name: string
    id: number
    text: string
}

export function DialogsItem(props: DialogsItemPropsType) {
    const { name, id, text } = props
    let path = '/chats/' + id;
    return <div className={s.dialog}>
        <NavLink to={path} activeClassName={s.active} className={s.prof}>
            <img src="https://static-s.aa-cdn.net/img/gp/20600007187994/ytM4AkndmSigMvuUChoY1JuV1VtjoBrbMm2E-B0f9q19lVJ633gm6_-Oexe1PPaHCG0=s300?v=1" alt="ava" />
            <div className={s.subtitle}>{name}</div>
            <p className={s.subtext}>{text}</p>
        </NavLink>
    </div>
}





