import React from "react";


//import css
import c from '../Container.module.css';
import s from './Users.module.scss';
import { UsersPageType } from '../../redux/users-reducer';

type UsersPropsType = {
    state: UsersPageType
}

function Users() {

    // let personElement

    return (
        <div className={c.container} >
            <div className={s.users}>

                <div className={s.wrraper}>
                    <div className={s.avatar}>
                        <img src='https://www.meme-arsenal.com/memes/4ab3e4977e380bf3b59ad6adafc725d4.jpg' alt="avatar" />
                        <div>Ракета </div>
                    </div>
                    <div className={s.description}>
                        <div className={s.line}></div>
                        <div className={s.text}>
                            Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
                        </div>
                    </div>
                    <button>follow</button>
                </div>

            </div>
        </div>
    );
}

export default Users;