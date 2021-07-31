const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

type ChatMessageType = {
   id: number
   message: string
}

type DialogType = {
   id: number
   name: string
   text: string
}

export type ChatsPageType = {
   chats: Array<ChatMessageType>
   dialog: Array<DialogType>
   newMessageBody: string
}

export type ActionsTypes = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageAC>

const intilitionState: ChatsPageType = {
   newMessageBody: '',

   chats: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'YO' },
      { id: 4, message: 'YO' }
   ],
   dialog: [
      { id: 1, name: 'Darlene Black', text: 'Hey, how is your project?' },
      { id: 2, name: 'Theresa Stewar', text: 'Hi, Dmitry! I have a work for you. We?' },
      { id: 3, name: 'Brandon Wilso', text: 'I am Russian and I am learning Engl' },
      { id: 4, name: 'Kyle Fisher', text: 'So, It’s up to you!' },
      { id: 5, name: 'Audrey Alexander', text: 'When you got it?' },
      { id: 6, name: 'Design Conference', text: 'When you got it?' }
   ],
}

const chatsReducer = (state = intilitionState, action: ActionsTypes): ChatsPageType => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY: 
         return  { ...state,
            newMessageBody: action.message
         }
      case SEND_MESSAGE:
         let body = state.newMessageBody
         return { ...state ,
            chats: [...state.chats, { id: 6, message: body }],
            newMessageBody: ''
         }
      default:
         return state
   }
}

export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const)
export const updateNewMessageAC = (body: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, message: body } as const)

export default chatsReducer;
