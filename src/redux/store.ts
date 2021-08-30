// import sidebarReducer from "./sidebar-reducer"
import { ProfileType } from './profile-reducer';

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

export type UsersType = {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    location?: {
        country: string
        city: string
    }
}

export type PostsPageType = {
    posts: Array<PostType>
    profile: null | ProfileType
}
export type ChatsPageType = {
    chats: Array<ChatMessageType>
    dialog: Array<DialogType>
}

export type UsersPageType = {
    users: UsersType[]
}

export type RootStateType = {
    postsPage: PostsPageType
    chatsPage: ChatsPageType
    usersPage: UsersPageType
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
            posts: [
                { id: 1, messages: 'care if Harry lost his place on the House Quidditch', name: 'Petr', like: 10 },
                { id: 2, messages: 'What did the Dursleys care if Harry lost his place on ', name: 'Vova', like: 9 },
                { id: 3, messages: 'What did the Dursleys care if Huse Quidditch', name: 'Anna', like: 20 }
            ],
            profile: null,
        },
        chatsPage: {
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
        usersPage: {
            users: [
                {
                    id: 1,
                    photos: {
                        small: 'string',
                        large: 'string'
                    },
                    // 'https://www.meme-arsenal.com/memes/4ab3e4977e380bf3b59ad6adafc725d4.jpg',
                    followed: false,
                    name: 'Vladimir',
                    location: {
                        country: 'Belarus',
                        city: 'Minsk',
                    }
                },
                {
                    id: 2,
                    photos: {
                        small: 'string',
                        large: 'string'
                    },
                    //'https://99px.ru/sstorage/56/2018/02/image_560602180105417871116.png',
                    followed: true,
                    name: 'Vladimir',
                    location: {
                        country: 'Russia',
                        city: 'Moskow',
                    }
                },
                {
                    id: 3,
                    photos: {
                        small: 'string',
                        large: 'string'
                    },
                    //'http://pm1.narvii.com/7157/52f82eabd0623d44c29d0dffdd446c6bae242576r1-259-267v2_00.jpg',
                    followed: true,
                    name: 'Anna',
                    location: {
                        country: 'Belarus',
                        city: 'Minsk',
                    }
                }
            ]
        }
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
        // this._state.postsPage = profileReducer(this._state.postsPage, action)
        // this._state.chatsPage = chatsReducer(this._state.chatsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

// export default store;
// window.store = store