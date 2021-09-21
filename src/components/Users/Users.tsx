import React from "react";
import { UsersType } from '../../redux/users-reducer';
import s from './Users.module.scss';
import c from '../Container.module.scss'
import { Paginator } from '../common/Paginator/Paginator';
import { User } from "../common/User/User";

type UsersPropsType = {
   users: UsersType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   onPageChange: (pageNumber: number) => void
   followingInProgress: number[]
   setFollowingInProgress: (isFatching: boolean, userId: number) => void
}

function Users(props: UsersPropsType) {

   const { users,
      pageSize,
      totalUsersCount,
      currentPage,
      follow,
      unFollow,
      onPageChange,
      followingInProgress } = props;

   return (
      <div className={c.container} >
         <div className={s.users}>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
            {users.map(u => <User key={u.id}
               user={u}
               followingInProgress={followingInProgress}
               follow={follow}
               unFollow={unFollow} />
            )}
         </div >
      </div >
   );
}

export {
   Users
}