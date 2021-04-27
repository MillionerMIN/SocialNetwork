import React from "react";
import s from "./ProfileInfo.module.scss"

type ProfileInfoPropsType = {
    name: string
}
export function ProfileInfo(props: ProfileInfoPropsType) {
    return <div className={s.profileInfo}>
        <div className={s.userImg}><img  src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" alt="profileImg"/></div>
        <div className={s.userName}>{props.name}
            </div>
    </div>

}