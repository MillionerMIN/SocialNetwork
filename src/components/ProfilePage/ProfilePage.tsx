import React, { useEffect } from 'react';
import c from '../Container.module.scss';
import s from './ProfilePage.module.scss';
import profileImg from '../../image/profile/ProfileImg.jpg';
import { getAuth, getProfile, getProfileId } from '../../redux/selectots';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getProfileTC, getStatusTC } from '../../redux/profile-reducer';
import { ProfileInformation } from './ProfileInformation';

export const ProfilePage = () => {
  let userId = useSelector(getProfileId);
  const authId = useSelector(getAuth);
  const profile = useSelector(getProfile);
  const dispatch = useDispatch();

  if (!userId) {
    //@ts-ignore
    userId = authId;
    if (!userId) {
      
    }
  }

  useEffect(() => {
    //@ts-ignore
    dispatch(getProfileTC(userId));
    //@ts-ignore
    dispatch(getStatusTC(userId));
    debugger
  }, [dispatch, userId]);

  return (
    <div className={c.container}>
      <div className={s.wrapper}>
        <ProfileInformation profile={profile} />
        <div className={s.sidebar}>Sidebar</div>
      </div>
    </div>
  );
};


