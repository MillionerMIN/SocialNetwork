import React, { ChangeEvent } from 'react';
import s from './NewPost.module.scss'
import { ReactComponent as ReactSend } from './icons/send.svg'

type NewPostPropsType = {
    message?: string
    addPost: (postText: string) => void
    newTextChangeHandler: (newText: string) => void
}

export function NewPost(props: NewPostPropsType) {

    const onAddPost = (postText: string) => {
        props.addPost(postText)
    }

    const onNewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.newTextChangeHandler(newText)
    }

    return <div className={s.newPost_head}>
        <div className={s.title}>new post</div>
        <div className={s.text}>
            <textarea className={s.textarea}
                onChange={onNewTextChangeHandler}
                value={props.message} placeholder='What’s on your mind?' />
            <button className={s.btn} onClick={() => onAddPost}><ReactSend /></button>
        </div>
    </div>
}


