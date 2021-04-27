import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {NewMess} from "./NewMess/NewMess";


export type MyPostPropsType = {
    id: number
    name: string
    messages: string
    like: number
}

export function MyPost(props: MyPostPropsType) {

    return <div>
        <ProfileInfo name={props.name}/>
        <NewMess messages={props.messages} like={props.like}/>
    </div>
}