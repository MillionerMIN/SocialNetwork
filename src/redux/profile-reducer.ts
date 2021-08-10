const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

export type PostType = {
   id: number
   messages: string
   name: string
   like: number
}

export type ProfileType = {
   aboutMe: string
   contacts: {
      facebook: string
      website: null | string
      vk: string
      twitter: string
      instagram: string
      youtube: null | string
      github: string
      mainLink: null | string
   },
   lookingForAJob: boolean
   lookingForAJobDescription: string,
   fullName: string,
   userId: number,
   photos: {
      small: string,
      large: string
   }
}

type PostsPageType = {
   newPostText: string
   posts: Array<PostType>
   profile: null | ProfileType
}

export type ActionsTypes = ReturnType<typeof addPostAC>
   | ReturnType<typeof updateNewPostTextAC>
   | ReturnType<typeof setUsersProfileAC>

const intilitionState: PostsPageType = {
   newPostText: '',
   posts: [
      { id: 1, messages: 'care if Harry lost his place on the House Quidditch', name: 'Petr', like: 10 },
      { id: 2, messages: 'What did the Dursleys care if Harry lost his place on ', name: 'Vova', like: 9 },
      { id: 3, messages: 'What did the Dursleys care if Huse Quidditch', name: 'Anna', like: 20 }
   ],
   profile: null,
}

const profileReducer = (state = intilitionState, action: ActionsTypes): PostsPageType => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            posts: [...state.posts, { id: new Date().getTime(), messages: state.newPostText, name: '1', like: 0 }],
            newPostText: '',
         }
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText,
         };
      case SET_USERS_PROFILE:
         return {
            ...state, profile: action.profile
         }
      default: {
         return state;
      }
   }
}

export const addPostAC = () => ({ type: ADD_POST } as const)

export const updateNewPostTextAC = (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText } as const)
export const setUsersProfileAC = (profile: ProfileType | null) => ({ type: SET_USERS_PROFILE, profile } as const)

export default profileReducer


