import React from 'react';

//
import { ChatMessage } from './ChatMessage/ChatMessage';
import { DialogsItem } from "./DialogsItem/DialogItem";

//import css
import c from '../Container.module.css';
import s from './Chats.module.css';
import { ActionsTypes, ChatsPageType} from '../../redux/state';
import { sendMessageAC, updateNewMessageAC } from '../../redux/chats-reducer';


type ChatsPropsType = {
    chatsPage: ChatsPageType
    dispatch: (action: ActionsTypes ) => void

}


function Chats(props: ChatsPropsType) {

    // let store = 

    let dialogElements = props.chatsPage.dialog.map(c => <DialogsItem name={c.name} id={c.id} text={c.text} />)
    let chatMessageElement = props.chatsPage.chats.map(m => <ChatMessage id={m.id} message={m.message} />)
    let newMessageBody = props.chatsPage.newMessageBody

    let onSendNewMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: any) => {
           let body = e.currentTarget.value;
        props.dispatch(updateNewMessageAC(body));
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