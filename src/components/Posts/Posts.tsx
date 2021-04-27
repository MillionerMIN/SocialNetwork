import React from 'react';

//components
import { NewPost } from "./NewPost/NewPost";
import { Filter } from "./Filter/Filter";
import { Sidebar } from "./Sidebar/Sidebar";

//import css
import container from '../Container.module.css';
import s from './Posts.module.scss';
import { MyPost } from './MyPost/MyPost';
import {ActionsTypes, PostsPageType} from '../../redux/state';

type PostsPropsType = {
    postsPage: PostsPageType
    dispatch: (action: ActionsTypes) => void

}

function Posts(props: PostsPropsType) {
    let postElement = props.postsPage.posts.map(p => <MyPost key={p.id} id={p.id} name={p.name} like={p.like} messages={p.messages} />)
    return (
        <div className={container.container}>
            <div className={s.post}>
                <div className={s.newPost}>
                    <NewPost message={props.postsPage.newPostText} dispatch={props.dispatch} />
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