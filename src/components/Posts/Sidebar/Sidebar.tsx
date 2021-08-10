import React from "react";


import s from "./Sidebar.module.css"
import {Button} from "./Button/Button";
import {MyGroups} from "./MyGroups/MyGroups";

import ProfileUserContainer from "./ProfileUser/ProfileUserContainer";

export function Sidebar() {
    return <div className={s.sidebar}>
        <ProfileUserContainer/>
        <Button/>
        <MyGroups/>
    </div>
}