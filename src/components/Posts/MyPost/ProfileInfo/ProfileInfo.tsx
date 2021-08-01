import React from "react";
import s from "./ProfileInfo.module.scss"

type ProfileInfoPropsType = {
    name: string
}
export function ProfileInfo({name}: ProfileInfoPropsType) {
    return <div className={s.profileInfo}>
        <div className={s.userImg}><img src="https://avatars.mds.yandex.net/get-zen_doc/1888987/pub_5d2c7ff331878200ad93db8d_5d2c8196c31e4900aebf535d/scale_1200" alt="profileImg"/></div>
        <div className={s.userName}>{name}
            </div>
    </div>

}