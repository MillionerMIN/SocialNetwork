import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Item.module.scss";

type ItemPropsType = {
    title: string,
    link: string
}

function Item(props: ItemPropsType) {
    return (
        <div className={s.item}>
            <NavLink to={props.link} activeClassName={s.activeLink}>
                <img src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-rss-feed-2.png'/>
                <h3>{props.title}</h3>
            </NavLink>
        </div>
    );
}

export default Item;