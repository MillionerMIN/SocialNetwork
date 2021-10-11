import React from 'react';

import s from './Users.module.scss';
import c from '../Container.module.scss';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from '../common/User/User';
import { UserType } from '../../api/usersApi';

type UsersPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (userId: number) => void;
  unFollow: (userId: number) => void;
  onPageChange: (pageNumber: number) => void;
  followingInProgress: number[];
  setFollowingInProgress: (isFatching: boolean, userId: number) => void;
  onPageSizeChange: (pageNumber: number, pageSize: number) => void
};

function Users(props: UsersPropsType) {
  const {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    follow,
    unFollow,
    onPageChange,
    followingInProgress,
    onPageSizeChange,
  } = props;

  return (
    <div className={c.container}>
      <div className={s.users}>
        <Paginator
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
        />
        <div>
          {users.map((u) => (
            <User
              key={u.id}
              user={u}
              followingInProgress={followingInProgress}
              follow={follow}
              unFollow={unFollow}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Users };
