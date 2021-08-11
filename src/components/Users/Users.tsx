import React from "react";
import { UsersPageType } from '../../redux/users-reducer';
import photoUser from '../../img/icons/user.png';
import s from './Users.module.scss';
import c from '../Container.module.scss'
import { NavLink } from 'react-router-dom';
import { usersAPI } from "../../api/followApi";

type UsersPropsType = {
   users: UsersPageType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   onPageChanget: (pageNumber: number) => void
}

function Users({
   users,
   pageSize,
   totalUsersCount,
   currentPage,
   follow,
   unFollow,
   onPageChanget }: UsersPropsType) {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div className={c.container} >

         <div className={s.users}>
            <div className={s.lists}>
               {pages.map(p => <button key={p} className={currentPage === p ? s.selectedPage : ''}
                  onClick={() => onPageChanget(p)}>{p}</button>
               )}
            </div>
            {users.users.map(u => <div key={u.id} className={s.wrraper}>
               <div className={s.avatar}>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small !== null ? u.photos.small : photoUser} alt="avatar" />
                  </NavLink>
                  <div>
                     <div>{u.name}</div>
                     <div>{'u.location.country'}</div>
                     <div>{'u.location.city'}</div>
                  </div>
               </div>
               <div className={s.description}>
                  <div className={s.line}></div>
                  <div className={s.text}>
                     Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                  </div>
               </div>
               {u.followed ?
                  <button onClick={() =>
                     usersAPI.deletFollow(u.id)
                        .then(data => {
                           if (data.resultCode === 0) {
                              unFollow(u.id)
                           }
                        })
                  }>UNFOLLOW</button>
                  : <button onClick={() =>
                     usersAPI.postFollow(u.id)
                        .then(data => {
                           if (data.resultCode === 0) {
                              follow(u.id)
                           }
                        })
                  }
                  >FOLLOW</button>}
            </div>
            )}
         </div>
      </div >
   );
}

export {
   Users
}