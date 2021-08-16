import React, { ChangeEvent } from 'react';

import { Redirect } from 'react-router';
//
import { ChatsPageType } from '../../redux/store';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { DialogsItem } from "./DialogsItem/DialogItem";
//import css
import c from '../Container.module.scss';
import s from './Chats.module.css';

type ChatsPropsType = {
    state: ChatsPageType
    isAuth: boolean
    onSendNewMessageClick: () => void
    onNewMessageChange: (body: any) => void
}

function Chats(props: ChatsPropsType) {

    if (!props.isAuth) return <Redirect to='/login' />;

    let dialogElements = props.state.dialog.map(c => <DialogsItem key={c.id} name={c.name} id={c.id} text={c.text} />)
    let chatMessageElement = props.state.chats.map(m => <ChatMessage key={m.id} id={m.id} message={m.message} />)
    let newMessageBody = props.state.newMessageBody

    let onSendNewMessageClick = () => {
        props.onSendNewMessageClick();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.onNewMessageChange(body);
    }

    return (
        <div className={c.container}>
            <div className={s.dialogs}>
                <div className={s.visitors}>
                    <div className={s.title}>Chats</div>
                    <div className={s.visitor}>
                        {dialogElements}
                    </div>
                </div>
                <div className={s.chats}>
                    <div className={s.header}>Chat with Kyle Fisher</div>
                    <div className={s.messages}>
                        {chatMessageElement}
                    </div>
                    <div className={s.writeMessages}>
                        <textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea>
                        <button onClick={onSendNewMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chats;