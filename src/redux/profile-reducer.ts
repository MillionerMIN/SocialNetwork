import { profileAPI } from '../api/usersApi';
import { AppActionType, AppThunkType } from "./redux-store";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

export type PostType = {
   id: number
   messages: string
   avatar: string
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
   status: string
}

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
   | ReturnType<typeof setUsersProfileAC>
   | ReturnType<typeof setStatusAC>
   | ReturnType<typeof updateStatusAC>


const intilitionState: PostsPageType = {
   newPostText: '',
   posts: [
      {
         id: 1, messages: 'care if Harry lost his place on the House Quidditch',
         avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1888987/pub_5d2c7ff331878200ad93db8d_5d2c8196c31e4900aebf535d/scale_1200',
         name: 'Petr', like: 10
      },
      {
         id: 2, messages: 'What did the Dursleys care if Harry lost his place on ',
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsilMFO40hHXJ8wnaDFPIfauqkGrWB5VVoVA&usqp=CAU',
         name: 'Vova', like: 9
      },
      {
         id: 3, messages: 'What did the Dursleys care if Huse Quidditch',
         avatar: 'https://cdna.artstation.com/p/assets/images/images/022/619/308/large/dmitry-gaborak-aka-neverwintered-green-2-3-sm-ava.jpg?1576091791',
         name: 'Anna', like: 20
      }
   ],
   profile: null,
   status: '---',
}

const profileReducer = (state = intilitionState, action: AppActionType): PostsPageType => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            posts: [...state.posts,
            {
               id: new Date().getTime(),
               messages: action.newPostText,
               avatar: 'https://i.pinimg.com/474x/25/73/2b/25732be3be38ec7a4e8a74b4d70cb2ad.jpg',
               name: '1',
               like: 0
            }],
         }
      case SET_USERS_PROFILE:
         return {
            ...state, profile: action.profile
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         }
      case UPDATE_STATUS:
         return {
            ...state, status: action.status
         }
      default: {
         return state;
      }
   }
}

export const addPostAC = (newPostText: string) => ({ type: ADD_POST, newPostText } as const)
export const setUsersProfileAC = (profile: ProfileType | null) => ({ type: SET_USERS_PROFILE, profile } as const)
export const setStatusAC = (status: string) => ({ type: SET_STATUS, status } as const)
export const updateStatusAC = (status: string) => ({ type: UPDATE_STATUS, status } as const)

//THUNK
export const getProfileTC = (userId: number): AppThunkType => (dispatch) => {
   profileAPI.getProfile(userId)
      .then(res => {
         dispatch(setUsersProfileAC(res.data));
         console.log(res.data);
      })
}

export const getStatusTC = (userId: number): AppThunkType => (dispatch) => {
   profileAPI.getStatus(userId)
      .then(res => {
         dispatch(setStatusAC(res.data));
         console.log(res.data);
      })
}

export const updateStatusTC = (status: string): AppThunkType => (dispatch) => {
   profileAPI.updateStatus(status)
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(updateStatusAC(status));
         };
      })
}
export default profileReducer;