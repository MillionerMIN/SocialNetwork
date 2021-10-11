import React, { useState, useEffect } from 'react';
import s from './ProfileUser.module.scss';
import profileBg from '../../../../image/profile/ProfileImg.jpg';
import profilePhoto from '../../../../image/icons/user.png';

import { Spinner } from '../../../common/Spinner/Spinner';
import { ProfileType } from '../../../../api/usersApi';

type ProfileUserPropsType = {
  profile: null | ProfileType;
  status: string;
  isOwner: boolean;
  savePhoto: any;
  updateStatus: (status: string) => void;
};

const ProfileUser = (props: ProfileUserPropsType) => {
  const { profile, status, updateStatus, isOwner, savePhoto } = props;

  const [editMode, setEditMode] = useState<boolean>(false);
  const [newStatus, setNewStatus] = useState<string>(status);

  useEffect(() => {
    setNewStatus(status);
  }, [status]);

  const activatedEditMod = () => {
    setEditMode(true);
  };

  const diactivedEditModEditMod = () => {
    setEditMode(false);
    updateStatus(newStatus);
  };

  const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStatus(e.currentTarget.value);
  };

  const onUserPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  if (!profile) {
    return <Spinner />;
  }
  return (
    <div className={s.profile}>
      <img className={s.bg} src={profileBg} alt="profileImg" />
      <div>
        <img
          className={s.photo}
          src={profile.photos.large || profilePhoto}
          alt="userPhoto"
        />
      </div>
      <div className={s.title}>{props.profile?.fullName}</div>
      {!editMode && (
        <div>
            <span onDoubleClick={activatedEditMod} className={s.descr}>
          {status || '---'}
        </span>
        <ProfileForm profile={profile} status={status}/>
      
        </div>
      )}
        
      {editMode && (
        <input
          onChange={onChangeStatus}
          onBlur={diactivedEditModEditMod}
          autoFocus
          className={s.descr}
          value={newStatus}
        />
      )}
      {isOwner && <input type="file" onChange={onUserPhoto} />}
    </div>
  );
};


type ProfileFormType = {
  profile: ProfileType
  status: string
}

const ProfileForm = (props: ProfileFormType) => {
  const {fullName}=props.profile;
  const {status} = props;  
  return (
    <div>
      <div>
        <b>status:</b> {status}
      </div>
    </div>
  );
};

export { ProfileUser };
