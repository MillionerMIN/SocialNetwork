const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type UsersType = {
   nameId: number
    perPhoto: string
    follow: boolean
    fullName: string
    location: {
      country: string
        city: string
   }
}

export type UsersPageType = {
   users: Array<UsersType>
}

export type ActionsTypes = ReturnType<typeof followAC> |ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

const intilitionState: UsersPageType = {
   users: [
      {
         nameId: 1,
         perPhoto: 'https://www.meme-arsenal.com/memes/4ab3e4977e380bf3b59ad6adafc725d4.jpg',
         follow: false,
         fullName: 'Vladimir',
         location: {
            country: 'Belarus',
            city: 'Minsk',
         }
      },
      {
         nameId: 2,
         perPhoto: 'https://99px.ru/sstorage/56/2018/02/image_560602180105417871116.png',
         follow: true,
         fullName: 'Vladimir',
         location: {
            country: 'Russia',
            city: 'Moskow',
         }
      },
      {
         nameId: 3,
         perPhoto: 'https://storage.googleapis.com/hipcomic/p/a126f1e4eb6486a015272202af4a5d5e-300.jpg',
         follow: true,
         fullName: 'Anna',
         location: {
            country: 'Belarus',
            city: 'Minsk',
         }
      },
   ]
}


const usersReducer = (state = intilitionState, action: ActionsTypes): UsersPageType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.nameId === action.userId) {
                  return {...u, follow: true}
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.nameId === action.userId) {
                  return { ...u, follow: false }
               }
               return u;
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users ]
         }
      default:
         return state;
   }

}

export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const)
export const unFollowAC = (userId: number) => ({ type: UNFOLLOW, userId } as const)
export const setUsersAC = (users:[]) => ({ type: SET_USERS, users }as const)

export default usersReducer;