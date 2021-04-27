import React, { ChangeEvent } from 'react';
import s from './NewPost.module.scss'
import {ReactComponent as ReactSend} from './icons/send.svg'
import {addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { ActionsTypes } from '../../../redux/state';


type NewPostPropsType = {
    message: string
    dispatch: (action: ActionsTypes) => void

}



export function NewPost(props: NewPostPropsType) {
    

    const addPost = () => {
        // props.addPost(props.message)
        props.dispatch(addPostAC(props.message))
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => { 
        let newText = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(newText))
        // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: props.message})
    }

    return <div className={s.newPost_head}>
        <div className={s.title}>new post</div>
        <div className={s.text}>
            <textarea className={s.textarea}
                onChange={newTextChangeHandler}
                value={props.message} placeholder='What’s on your mind?' />
            <button className={s.btn} onClick={addPost}><ReactSend/></button>
        
        </div>

    </div>
}
