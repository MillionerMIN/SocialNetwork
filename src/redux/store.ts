import chatsReducer from "./chats-reducer"
import profileReducer from "./profile-reducer"
// import sidebarReducer from "./sidebar-reducer"

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

type DialogType = {
    id: number
    name: string
    text: string
}
// type SidebarType = {
//    obj?: {}
// }

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
    // sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscriber: (observer: () => void) => void
    // addPost: (newPostText: string) => void
    // updateNewPostTex: (newText: string) => void
    dispatch: (action: any) => void

}

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
        // sidebar: {}
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

    dispatch(action: any) {
        this._state.postsPage = profileReducer(this._state.postsPage, action)
        this._state.chatsPage = chatsReducer(this._state.chatsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

export default store;
// window.store = store