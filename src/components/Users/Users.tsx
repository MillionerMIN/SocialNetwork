import React from "react";
import { UsersType, UsersPageType } from "../../redux/users-reducer";
import axios from 'axios';
import photoUser from '../../img/icons/user.png';

//import css
import c from '../Container.module.css';
import s from './Users.module.scss';

type UsersPropsType = {
    state: UsersPageType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void

}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount/100)
            })
    }

    onPageChanget = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={c.container} >
                
                <div className={s.users}>
                    <div className={s.lists}>
                        {pages.map(p => <button className={this.props.currentPage === p ? s.selectedPage : ''}
                        onClick={()=> this.onPageChanget(p)}>{p}</button>
                        )}
                    </div>
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
                        {u.followed ? <button onClick={() => this.props.unFollow(u.id)}>UNFOLLOW</button> : <button onClick={() => this.props.follow(u.id)}>FOLLOW</button>}
                    </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Users;