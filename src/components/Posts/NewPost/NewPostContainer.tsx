
import React from 'react';

import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { ActionsTypes } from '../../../redux/profile-reducer';
import { NewPost } from './NewPost';


type NewPostPropsType = {
    message: string
    dispatch: (action: ActionsTypes) => void
}

export function NewPostContainer(props: NewPostPropsType) {

    const addPost = () => {
        props.dispatch(addPostAC(props.message))
    }

    const newTextChangeHandler = (newText: string) => {
        props.dispatch(updateNewPostTextAC(newText))
    }

    return <NewPost message={props.message} addPost={addPost} newTextChangeHandler={newTextChangeHandler} />
}
