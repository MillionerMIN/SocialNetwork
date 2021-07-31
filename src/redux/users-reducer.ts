const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UsersType = {
   id: number
   name: string
   photos: {
      small: string
      large: string
   }
   follow: boolean
   location?: {
      country: string
      city: string
   }
}

export type UsersPageType = {
   users: Array<UsersType>
}

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

const intilitionState: UsersPageType = {
   users: []
}


const usersReducer = (state = intilitionState, action: ActionsTypes): UsersPageType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, follow: true }
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, follow: false }
               }
               return u;
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         }
      default:
         return state;
   }

}

export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const)
export const unFollowAC = (userId: number) => ({ type: UNFOLLOW, userId } as const)
export const setUsersAC = (users: Array<UsersType>) => ({ type: SET_USERS, users } as const)

export default usersReducer;