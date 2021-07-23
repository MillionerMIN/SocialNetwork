import s from "./NewMess.module.scss";
import React from "react";

type NewMessPropsType = {
    messages: string
    like: number
}

export function NewMess(props: NewMessPropsType) {
    return <div>
        <div className={s.newMess}>{props.messages}</div>
        <div className={s.like}>Like {props.like}</div>
    </div>

}