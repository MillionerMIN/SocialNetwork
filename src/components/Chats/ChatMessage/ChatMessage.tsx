import React from "react";
import { ChatMessageType } from "../../../redux/chats-reducer";

export function ChatMessage({ message}: ChatMessageType) {
    return <div>{message}</div>
}