import React from "react";
import s from "./ProfileInfo.module.scss"

type ProfileInfoPropsType = {
    name: string
    avatar: string
}
export function ProfileInfo({name, avatar}: ProfileInfoPropsType) {
    return <div className={s.profileInfo}>
        <div className={s.userImg}><img src={avatar} alt="profileImg"/></div>
        <div className={s.userName}>{name}</div>
    </div>

}