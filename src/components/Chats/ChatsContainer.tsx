import React from 'react';
import { ChatsPageType } from '../../redux/store';
import { ActionsTypes } from '../../redux/chats-reducer';
import { sendMessageAC, updateNewMessageAC } from '../../redux/chats-reducer';
import Chats from './Chats';


type ChatsPropsType = {
    chatsPage: ChatsPageType
    dispatch: (action: ActionsTypes) => void
}

function ChatsContainer(props: ChatsPropsType) {

    const state = props.chatsPage

    let onSendNewMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: any) => {
        props.dispatch(updateNewMessageAC(body));
    }

    return <Chats state={state} onSendNewMessageClick={onSendNewMessageClick}
        onNewMessageChange={onNewMessageChange} />
}

export default ChatsContainer;