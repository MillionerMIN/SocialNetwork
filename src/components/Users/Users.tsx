import React from "react";
import { UsersPageType } from '../../redux/store';
import { UsersType } from "../../redux/users-reducer";
import axios from 'axios';
import photoUser from '../../img/icons/user.png';

//import css
import c from '../Container.module.css';
import s from './Users.module.scss';

type UsersPropsType = {
    state: UsersPageType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void

}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className={c.container} >
                <div className={s.users}>
                    {this.props.state.users.map(u => <div key={u.id} className={s.wrraper}>
                        <div className={s.avatar}>
                            <img src={u.photos.small !== null ? u.photos.small : photoUser} alt="avatar" />
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
                        {u.follow ? <button onClick={() => this.props.unFollow(u.id)}>UNFOLLOW</button> : <button onClick={() => this.props.follow(u.id)}>FOLLOW</button>}
                    </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Users;