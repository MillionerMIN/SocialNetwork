import React, { useState } from "react";
import s from './ProfileUser.module.scss';
import profileBg from '../../../../img/profile/ProfileImg.jpg'
import profilePhoto from '../../../../img/icons/user.png'
import { ProfileType } from "../../../../redux/profile-reducer";
import { Spinner } from "../../../Spinner/Spinner";

type ProfileUserPropsType = {
   profile: null | ProfileType
   status: string
   updateStatus: (status: string) => void
}

const ProfileUser = (props: ProfileUserPropsType) => {

   const { profile, status, updateStatus } = props;

   const [editMode, setEditMode] = useState<boolean>(false);
   const [newStatus, setNewStatus] = useState<string>(status)
   

   const  activetEditMod = () => {
      setEditMode(true);
   }

   const diactivatEditMod = () => {
      setEditMode(false);
      updateStatus(newStatus);

   }
   
   let onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewStatus(e.currentTarget.value);
   }

   if (!profile) {
      return <Spinner />
   }
   return <div className={s.profile}>
      <img className={s.bg} src={profileBg} alt="profileImg" />
      <div>
         <img className={s.photo} src={profile.photos.large !== null ? profile.photos.large : profilePhoto} alt="userPhoto" />
      </div>
      <div className={s.title}>{props.profile?.fullName}</div>
      {!editMode &&
         <span onDoubleClick={activetEditMod} className={s.descr}>{status || '---'}</span>
      }
      {editMode &&
         <input onChange={onChangeStatus} 
         onBlur={diactivatEditMod} autoFocus className={s.descr} value={newStatus} />
      }
   </div>
}

export {
   ProfileUser
}