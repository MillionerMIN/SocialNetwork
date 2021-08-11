import React from 'react';
import s from './Acount.module.scss';

type AccountPropsType = {
    email: null | string
    login: null | string
}

function Account({email, login }: AccountPropsType) {
    return (
        <div className={s.account}>
            <a className={s.user}>
                <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' />
            </a>
            <div className={s.wrapper}>
                <div className={s.title}>{login}</div>
                <div>you</div>
                <div>{email}</div>
                <div>+32</div>
            </div>

        </div>
    );
}

export default Account;