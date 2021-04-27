import { ActionsTypes, ChatsPageType } from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const chatsReducer = (state: ChatsPageType, action: ActionsTypes) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY: 
         state.newMessageBody = action.message
         return state
      
      case SEND_MESSAGE: 
         let body = state.newMessageBody
         state.newMessageBody = ''
         state.chats.push({ id: 6, message: body })
   
         return state
      
      default: 
         return state  
   }
}
  
export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const)

export const updateNewMessageAC = (body: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, message: body } as const)


export default chatsReducer;