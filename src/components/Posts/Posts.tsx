import React from 'react';
import { Filter } from "./Filter/Filter";
import { Sidebar } from "./Sidebar/Sidebar";
import { MyPost } from './MyPost/MyPost';
import { NewPostContainer } from './NewPost/NewPostContainer';
import { PostType } from '../../redux/store';

import c from '../Container.module.scss';
import s from './Posts.module.scss';

type PostsPropsType = {
    posts: Array<PostType>
    isAuth: boolean
}

function Posts(props: PostsPropsType) {

    let postElement = props.posts.map(p => <MyPost key={p.id} id={p.id} avatar={p.avatar} name={p.name} like={p.like} messages={p.messages} />)
    return (
        <div className={c.container}>
            <div className={s.post}>
                <div className={s.newPost}>
                    <NewPostContainer />
                    <Filter />
                    <div className={s.newPost_body}>
                        {postElement}
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}



export default Posts;