import React from "react";
import s from './ProfileUser.module.scss';
import profileImg from '../../../../img/profile/ProfileImg.jpg'
import profilePhoto from '../../../../img/icons/user.png'
import { ProfileType } from "../../../../redux/profile-reducer";
import { Spinner } from "../../../Spinner/Spinner";

type ProfileUserPropsType = {
   profile: null | ProfileType
}

const ProfileUser = (props: ProfileUserPropsType) => {
   if (!props.profile) {
      return <Spinner />
   }
   return <div className={s.profile}>
      <img className={s.bg} src={profileImg} alt="profileImg" />
      <div>
         <img className={s.photo} src={props.profile.photos.large !== null ? props.profile.photos.large : profilePhoto} alt="userPhoto" />
      </div>
      <div className={s.title}>{props.profile?.fullName}</div>
      <div className={s.descr}>{props.profile?.lookingForAJobDescription}</div>
   </div>
}

export {
   ProfileUser
}