import React, { useState, useEffect } from "react";
import s from './ProfileUser.module.scss';
import profileBg from '../../../../img/profile/ProfileImg.jpg'
import profilePhoto from '../../../../img/icons/user.png'
import { ProfileType } from "../../../../redux/profile-reducer";
import { Spinner } from "../../../common/Spinner/Spinner";

type ProfileUserPropsType = {
   profile: null | ProfileType
   status: string
   updateStatus: (status: string) => void
}

const ProfileUser = (props: ProfileUserPropsType) => {

   const { profile, status, updateStatus } = props;

   const [editMode, setEditMode] = useState<boolean>(false);
   const [newStatus, setNewStatus] = useState<string>(status);

   useEffect(() => {
      console.log('useEffect status');
      
      setNewStatus(status)
   }, [status])


   const activatedEditMod = () => {
      setEditMode(true);
   }

   const diactivedEditModEditMod = () => {
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
         <span onDoubleClick={activatedEditMod} className={s.descr}>{status || '---'}</span>
      }
      {editMode &&
         <input onChange={onChangeStatus}
            onBlur={diactivedEditModEditMod} autoFocus className={s.descr} value={newStatus} />
      }
   </div>
}

export {
   ProfileUser
}