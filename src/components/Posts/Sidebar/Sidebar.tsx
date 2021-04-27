import React from "react";


import style from "./Sidebar.module.css"
import {Button} from "./Button/Button";
import {MyGroups} from "./MyGroups/MyGroups";

export function Sidebar() {
    return <div className={style.sidebar}>
        <div className={style.profile}>
            <img className={style.bg} src={window.location.origin + '/img/Rectangle_bg.jpg'} alt="bg"/>
            <div>
                <img className={style.photo} src={window.location.origin + '/img/Profile/Photo.jpg'} alt="photo"/>
            </div>
            <div className={style.title}>Dmitry Kargaev</div>
            <div className={style.descr}>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS &
                android) and creative projects.
            </div>
        </div>
        <Button/>
        <MyGroups/>
    </div>
}