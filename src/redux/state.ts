
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type PostType = {
    id: number
    messages: string
    name: string
    like: number
}
type ChatMessageType = {
    id: number
    message: string
}

type NewMessageBodyType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
    text: string
}
type SidebarType = {}

export type PostsPageType = {
    newPostText: string
    posts: Array<PostType>
}
export type ChatsPageType = {
    chats: Array<ChatMessageType>
    dialog: Array<DialogType>
    newMessageBody: string
}

export type RootStateType = {
    postsPage: PostsPageType
    chatsPage: ChatsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscriber: (observer: () => void) => void
    // addPost: (newPostText: string) => void
    // updateNewPostTex: (newText: string) => void
    dispatch: (action: ActionsTypes) => void

}

// type AddPostActionType = ReturnType<typeof addPostAC>
// type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageAC>

export const addPostAC = (postText: string) => ({ type: ADD_POST, newPostText: postText } as const)

export const updateNewPostTextAC = (newText: string)=> ({ type: UPDATE_NEW_POST_TEXT, newText: newText } as const)

export const sendMessageAC = () => ({ type: SEND_MESSAGE } as const)

export const updateNewMessageAC = (body: string) => ({ type: UPDATE_NEW_MESSAGE_BODY, message: body} as const)


export const store: StoreType = {
    _state: {
        postsPage: {
            newPostText: '',
            posts: [
                { id: 1, messages: 'care if Harry lost his place on the House Quidditch', name: 'Petr', like: 10 },
                { id: 2, messages: 'What did the Dursleys care if Harry lost his place on ', name: 'Vova', like: 9 },
                { id: 3, messages: 'What did the Dursleys care if Huse Quidditch', name: 'Anna', like: 20 }
            ]
        },
        chatsPage: {
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
             
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsTypes) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: new Date().getTime(),
                messages: action.newPostText,
                name: 'Kesha',
                like: 0
            };
            this._state.postsPage.posts.push(newPost);
            this._state.postsPage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.postsPage.newPostText = action.newText;
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.chatsPage.newMessageBody = action.message
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body: NewMessageBodyType = this._state.chatsPage.newMessageBody
            this._state.chatsPage.newMessageBody = ''
            this._state.chatsPage.newMessageBody.push({id: 6, message: body})
            this._callSubscriber()
        }
    }
}


export default store;
// window.store = store