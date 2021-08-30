import React from 'react';
import s from './NewPost.module.scss'
import { ReactComponent as ReactSend } from './icons/send.svg'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreater, required } from '../../../utils/validation/validation';
import { Textarea } from '../../common/FormControls/FormControls';

type NewPostPropsType = {
    addPostAC: (message: string) => void
}

export function NewPost(props: NewPostPropsType) {

    const { addPostAC } = props

    const addNewPostMessage = (values: any) => {
        addPostAC(values.message)
    }

    return <div className={s.newPost_head}>
        <div className={s.title}>new post</div>
        <NewPostMessRedux onSubmit={addNewPostMessage} />
    </div>
}

const maxLength10 = maxLengthCreater(10);

const NewPostMess: React.FC<InjectedFormProps<NewPostPropsType>> = (props) => {
    return (
        <form className={s.text} onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                name="message"
                validate={[required, maxLength10]}
                placeholder='What’s on your mind?' />
            <button className={s.btn}><ReactSend /></button>
        </form>
    )
}

const NewPostMessRedux = reduxForm<NewPostPropsType>({ form: 'newPostMessage' })(NewPostMess)


