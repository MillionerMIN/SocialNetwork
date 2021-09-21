import React from "react";
import { NavLink } from 'react-router-dom';
import s from './User.module.scss';
import photoUser from '../../../img/icons/user.png';
import { UsersType } from '../../../redux/users-reducer';

type UserPropsType = {
  user: UsersType
  followingInProgress: number[]
  follow: (userId: number) => void
  unFollow: (userId: number) => void
}

export const User = (props: UserPropsType) => {
  const { user, followingInProgress, unFollow, follow } = props
  return (
    <div className={s.wrapper}>
      <div className={s.avatar}>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small !== null ? user.photos.small : photoUser} alt="avatar" />
        </NavLink>
        <div>
          <div>{user.name}</div>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </div>
      </div>
      <div className={s.description}>
        <div className={s.line}></div>
        <div className={s.text}>
          Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
        </div>
      </div>
      {user.followed
        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
          unFollow(user.id)
        }}>UNFOLLOW</button>
        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
          follow(user.id)
        }}>FOLLOW</button>}
    </div>
  )
}