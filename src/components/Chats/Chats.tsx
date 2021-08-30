import React from 'react';
import { ChatsPageType } from '../../redux/store';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { DialogsItem } from "./DialogsItem/DialogItem";
//import css
import c from '../Container.module.scss';
import s from './Chats.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ChatMessageType } from '../../redux/chats-reducer';

type ChatsPropsType = {
    state: ChatsPageType
    isAuth: boolean
    sendMessageAC: (message: string) => void
    onNewMessageChange: (body: any) => void
}

function Chats(props: ChatsPropsType) {

    let dialogElements = props.state.dialog.map(c => <DialogsItem key={c.id} name={c.name} id={c.id} text={c.text} />)
    let chatMessageElement = props.state.chats.map(m => <ChatMessage key={m.id} id={m.id} message={m.message} />)

    let addNewMessage = (values: any) => {
        props.sendMessageAC(values.message)
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
                    <AddNewMessagesRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}

const AddNewMessages: React.FC<InjectedFormProps<ChatMessageType>> = (props) => {
    return (
        <form className={s.writeMessages} onSubmit={props.handleSubmit}>
            <Field component='textarea' name='message'
                placeholder='Enter your message'>
            </Field>
            <button>Send</button>
        </form>
    )
}

const AddNewMessagesRedux = reduxForm<ChatMessageType>({ form: 'dialogAddMessageForm' })(AddNewMessages)
export default Chats;