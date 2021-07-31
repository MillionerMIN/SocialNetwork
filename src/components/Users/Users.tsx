import React from "react";
import { UsersPageType} from '../../redux/store';


//import css
import c from '../Container.module.css';
import s from './Users.module.scss';
// import { UsersPageType } from '../../redux/users-reducer';

type UsersPropsType = {
    state: UsersPageType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: []) => void
}

function Users({ state, follow, unFollow, setUsers}: UsersPropsType) {

    return (
        <div className={c.container} >
            <div className={s.users}>
                {state.users.map(u => <div key={u.nameId} className={s.wrraper}>
                    <div className={s.avatar}>
                        <img src={u.perPhoto} alt="avatar" />
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                    <div className={s.description}>
                        <div className={s.line}></div>
                        <div className={s.text}>
                            Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                        </div>
                    </div>
                    {u.follow ? <button onClick={() => unFollow(u.nameId)}>UNFOLLOW</button> : <button onClick={() => follow(u.nameId)}>FOLLOW</button>}
                </div>
                )}
            </div>
        </div>
    );
}

export default Users;