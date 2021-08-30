const SEND_MESSAGE = 'SEND-MESSAGE';

export type ChatMessageType = {
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
}

export type ActionsTypes = ReturnType<typeof sendMessageAC>

const intilitionState: ChatsPageType = {
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
      case SEND_MESSAGE:
         let body = action.message
         return {
            ...state,
            chats: [...state.chats, { id: 6, message: body }],
         }
      default:
         return state
   }
}

export const sendMessageAC = (message: string) => ({ type: SEND_MESSAGE, message } as const)

export default chatsReducer;
