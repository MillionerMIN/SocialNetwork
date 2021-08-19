import React, { useState } from "react";
import s from './ProfileUser.module.scss';
import profileImg from '../../../../img/profile/ProfileImg.jpg'
import profilePhoto from '../../../../img/icons/user.png'
import { ProfileType } from "../../../../redux/profile-reducer";
import { Spinner } from "../../../Spinner/Spinner";

type ProfileUserPropsType = {
   profile: null | ProfileType
}

const ProfileUser = (props: ProfileUserPropsType) => {
   
   const [editMode, setEditMode] = useState<boolean>(false);
   const { profile } = props;

   const toggleEditMode = () => {
      setEditMode(!editMode)
   }

   if (!profile) {
      return <Spinner />
   }
   return <div className={s.profile}>
      <img className={s.bg} src={profileImg} alt="profileImg" />
      <div>
         <img className={s.photo} src={profile.photos.large !== null ? profile.photos.large : profilePhoto} alt="userPhoto" />
      </div>
      <div className={s.title}>{props.profile?.fullName}</div>
      {!editMode &&
         <div onDoubleClick={toggleEditMode} className={s.descr}>{profile?.lookingForAJobDescription}</div>
      }
      {editMode &&
         <input onBlur={toggleEditMode} autoFocus className={s.descr} value={profile?.lookingForAJobDescription} />
      }
   </div>
}

export {
   ProfileUser
}